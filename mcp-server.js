#!/usr/bin/env node
/**
 * Faultline Observatory — FCIF Corpus MCP Server
 *
 * Exposes three read-only tools to Claude Desktop:
 *   list_records   — lists all Frontier Records in the corpus
 *   read_record    — opens a single record by ID
 *   search_records — searches across records for a term
 *
 * Usage:
 *   node mcp-server.js
 *
 * Claude Desktop config (~/.config/claude/claude_desktop_config.json):
 *   {
 *     "mcpServers": {
 *       "faultline-observatory": {
 *         "command": "node",
 *         "args": ["/absolute/path/to/faultline-observatory/mcp-server.js"]
 *       }
 *     }
 *   }
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { readFileSync, readdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const RECORDS_DIR = join(__dirname, "src", "data", "records");
const NOTES_DIR   = join(__dirname, "src", "data", "notes");

// ─── RECORD LOADER ───────────────────────────────────────────
// Parses a .js record file into a plain object.
// Uses regex extraction — avoids dynamic import complications,
// keeps the server dependency-free from the app's module graph.

function extractField(content, fieldName) {
  const patterns = [
    // "field": "value" or 'field': 'value'
    new RegExp(`["']?${fieldName}["']?\\s*:\\s*["'\`]([^"'\`]+)["'\`]`),
    // field: `multi line string` — captures first line
    new RegExp(`["']?${fieldName}["']?\\s*:\\s*["'\`]([^\n"'\`]{0,300})`),
  ];
  for (const p of patterns) {
    const m = content.match(p);
    if (m) return m[1].trim();
  }
  return null;
}

function extractAssessments(content) {
  // Extract all pressureState values from assessments array
  const states = [...content.matchAll(/pressureState\s*:\s*["']([^"']+)["']/g)]
    .map(m => m[1]);
  return states;
}

function extractMutationDates(content) {
  // Extract all dates from mutationLog entries
  const allDates = [...content.matchAll(/id\s*:\s*["']M-\d+["'][^}]+?date\s*:\s*["']([^"']+)["']/gs)]
    .map(m => m[1]);
  return allDates;
}

function loadRecord(filename) {
  const filepath = join(RECORDS_DIR, filename);
  const content = readFileSync(filepath, "utf8");

  const id = extractField(content, "id");
  const programme = extractField(content, "programme");
  const statement = extractField(content, "statement");
  const shortLabel = extractField(content, "shortLabel");
  const openedDate = extractField(content, "openedDate");
  const status = extractField(content, "status");

  const pressureStates = extractAssessments(content);
  const currentPressureState = pressureStates[pressureStates.length - 1] ?? "unknown";

  // Count verification stages reached
  const vsReached = [...new Set(
    [...content.matchAll(/verificationStage\s*:\s*["'](VS-\d+)["']/g)].map(m => m[1])
  )];
  const currentVS = vsReached[vsReached.length - 1] ?? "unknown";

  // Mutation log
  const mutationDates = extractMutationDates(content);
  const lastMutationDate = mutationDates[0] ?? null; // newest first in file
  const mutationCount = (content.match(/id\s*:\s*["']M-\d+/g) || []).length;

  // Open questions count
  const openQuestionCount = (content.match(/id\s*:\s*["']OQ-\d+/g) || []).length;

  // Evidence count
  const evidenceCount = (content.match(/id\s*:\s*["']ES-\d+/g) || []).length;

  return {
    id,
    programme,
    shortLabel,
    statement: statement?.substring(0, 200) + (statement?.length > 200 ? "..." : ""),
    openedDate,
    status,
    currentPressureState,
    currentVerificationStage: currentVS,
    verificationStagesReached: vsReached,
    mutationCount,
    lastMutationDate,
    openQuestionCount,
    evidenceCount,
    pressureStateHistory: pressureStates,
    _raw: content, // available for search
  };
}

function loadAllRecords() {
  if (!existsSync(RECORDS_DIR)) return [];
  return readdirSync(RECORDS_DIR)
    .filter(f => f.endsWith(".js"))
    .map(f => loadRecord(f))
    .filter(r => r.id);
}

// Verification state ordering — lower index = weaker
const VS_ORDER = ["VS-01", "VS-02", "VS-03", "VS-04", "VS-05"];
const PS_ORDER = ["assertion", "published", "audit", "replication", "operation", "validated", "contested"];

function vsRank(vs) {
  return VS_ORDER.indexOf(vs);
}

// ─── MCP SERVER ───────────────────────────────────────────────

const server = new Server(
  { name: "faultline-observatory", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "list_records",
      description:
        "Lists all Frontier Records in the FCIF corpus with their current " +
        "pressure state, verification stage, programme, and last mutation date. " +
        "Use this to get an overview of the full corpus.",
      inputSchema: {
        type: "object",
        properties: {
          programme: {
            type: "string",
            description: "Optional filter by programme ID, e.g. PROG-QE, PROG-AI",
          },
          status: {
            type: "string",
            description: "Optional filter: 'open' or 'closed'",
          },
        },
      },
    },
    {
      name: "read_record",
      description:
        "Opens a single Frontier Record by its ID and returns the full structured " +
        "content including claim, assessment history, mutation log, evidence, and " +
        "open questions. Use this for detailed analysis of a specific record.",
      inputSchema: {
        type: "object",
        properties: {
          record_id: {
            type: "string",
            description: "The Frontier Record ID, e.g. FR-QE-0001",
          },
        },
        required: ["record_id"],
      },
    },
    {
      name: "search_records",
      description:
        "Searches across all Frontier Records for a term. Searches in claim text, " +
        "assessment summaries, mutation notes, open questions, and evidence citations. " +
        "Returns matching records with the context of each match.",
      inputSchema: {
        type: "object",
        properties: {
          query: {
            type: "string",
            description: "Search term, e.g. 'replication', 'quantum advantage', 'audit'",
          },
          field: {
            type: "string",
            description:
              "Optional: restrict search to a field — 'claim', 'assessments', " +
              "'mutations', 'evidence', 'questions'",
          },
        },
        required: ["query"],
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  // ── list_records ─────────────────────────────────────────
  if (name === "list_records") {
    let records = loadAllRecords();

    if (args?.programme) {
      records = records.filter(r =>
        r.programme?.toLowerCase() === args.programme.toLowerCase()
      );
    }
    if (args?.status) {
      records = records.filter(r => r.status === args.status);
    }

    // Sort by verification stage (weakest first) then by last mutation
    records.sort((a, b) => vsRank(a.currentVerificationStage) - vsRank(b.currentVerificationStage));

    const lines = [
      `FCIF Corpus — ${records.length} record${records.length !== 1 ? "s" : ""}`,
      "─".repeat(60),
      ...records.map(r =>
        [
          `${r.id} [${r.programme}]`,
          `  Claim:        ${r.shortLabel}`,
          `  State:        ${r.currentPressureState} / ${r.currentVerificationStage}`,
          `  Status:       ${r.status}`,
          `  Opened:       ${r.openedDate}`,
          `  Last mutation: ${r.lastMutationDate ?? "none"}`,
          `  Mutations:    ${r.mutationCount}`,
          `  Evidence:     ${r.evidenceCount} sources`,
          `  Open Qs:      ${r.openQuestionCount}`,
        ].join("\n")
      ),
    ];

    return { content: [{ type: "text", text: lines.join("\n") }] };
  }

  // ── read_record ───────────────────────────────────────────
  if (name === "read_record") {
    const id = args?.record_id?.toUpperCase();
    if (!id) {
      return { content: [{ type: "text", text: "Error: record_id is required" }] };
    }

    // Find matching file
    const filename = readdirSync(RECORDS_DIR)
      .find(f => f.toLowerCase() === `${id.toLowerCase()}.js`);

    if (!filename) {
      return {
        content: [{
          type: "text",
          text: `Record ${id} not found. Use list_records to see available IDs.`,
        }],
      };
    }

    // Return the raw file content for full fidelity
    const content = readFileSync(join(RECORDS_DIR, filename), "utf8");
    const record = loadRecord(filename);

    const summary = [
      `FRONTIER RECORD: ${record.id}`,
      `Programme:  ${record.programme}`,
      `Claim:      ${record.shortLabel}`,
      `Opened:     ${record.openedDate}`,
      `Status:     ${record.status}`,
      "",
      `CURRENT STATE`,
      `Pressure State:       ${record.currentPressureState}`,
      `Verification Stage:   ${record.currentVerificationStage}`,
      `Stages reached:       ${record.verificationStagesReached.join(", ")}`,
      `Pressure history:     ${record.pressureStateHistory.join(" → ")}`,
      "",
      `CORPUS METRICS`,
      `Mutations:   ${record.mutationCount}`,
      `Last mutation: ${record.lastMutationDate ?? "none"}`,
      `Evidence sources: ${record.evidenceCount}`,
      `Open questions: ${record.openQuestionCount}`,
      "",
      "FULL RECORD SOURCE",
      "─".repeat(60),
      content,
    ].join("\n");

    return { content: [{ type: "text", text: summary }] };
  }

  // ── search_records ────────────────────────────────────────
  if (name === "search_records") {
    const query = args?.query?.toLowerCase();
    if (!query) {
      return { content: [{ type: "text", text: "Error: query is required" }] };
    }

    const records = loadAllRecords();
    const results = [];

    for (const record of records) {
      const searchTarget = record._raw.toLowerCase();
      if (!searchTarget.includes(query)) continue;

      // Find matching lines for context
      const matchingLines = record._raw
        .split("\n")
        .map((line, i) => ({ line, i: i + 1 }))
        .filter(({ line }) => line.toLowerCase().includes(query))
        .slice(0, 5) // max 5 context lines per record
        .map(({ line, i }) => `  L${i}: ${line.trim()}`);

      results.push([
        `${record.id} — ${record.shortLabel} [${record.currentPressureState}]`,
        ...matchingLines,
      ].join("\n"));
    }

    const output = results.length > 0
      ? [`Search: "${args.query}" — ${results.length} record(s) matched`, "─".repeat(60), ...results].join("\n\n")
      : `No records matched "${args.query}"`;

    return { content: [{ type: "text", text: output }] };
  }

  return { content: [{ type: "text", text: `Unknown tool: ${name}` }] };
});

// ─── START ────────────────────────────────────────────────────
const transport = new StdioServerTransport();
await server.connect(transport);
