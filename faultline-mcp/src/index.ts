/**
 * Faultline Observatory — Remote MCP Server
 *
 * Constitutional rule: this server is a derived read-only interface over the
 * canonical Frontier Record corpus. It must not maintain a second case list,
 * lifecycle taxonomy, or independently authored claim summaries.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { z } from "zod";

import { ALL_RECORDS, PROGRAMMES } from "../../src/data/corpus.js";
import {
  getAssessmentHistory,
  getCurrentAssessment,
  getRecordUrl,
  getTransitionFeed,
} from "../../src/data/derive.js";

export interface Env {}

const PUBLIC_ORIGIN = "https://faultlinewatch.com";

function programmeFor(record: any) {
  return PROGRAMMES.find((programme: any) => programme.id === record.programme) ?? null;
}

function canonicalUrl(record: any) {
  return `${PUBLIC_ORIGIN}${getRecordUrl(record)}`;
}

function canonicalRecordView(record: any) {
  const programme = programmeFor(record);
  const assessments = getAssessmentHistory(record);

  return {
    ...record,
    assessments,
    currentAssessment: getCurrentAssessment(record),
    transitionFeed: getTransitionFeed(record),
    programmeMetadata: programme,
    canonicalUrl: canonicalUrl(record),
    canonicalSource: "src/data/corpus.js → src/data/records/FR-*.js",
  };
}

function recordSummary(record: any) {
  const current = getCurrentAssessment(record);
  const programme = programmeFor(record);

  return {
    id: record.id,
    programme: record.programme,
    programmeName: programme?.name ?? null,
    claim: record.claim?.shortLabel ?? record.claim?.statement ?? null,
    status: record.status ?? null,
    pressureState: current.pressureState ?? null,
    verificationStage: current.verificationStage ?? null,
    assessmentDate: current.date ?? null,
    openedDate: record.claim?.openedDate ?? null,
    lastMutationDate: record.mutationLog?.[0]?.date ?? null,
    evidenceInstances: record.instances?.length ?? 0,
    assessments: record.assessments?.length ?? 0,
    openQuestions: record.openQuestions?.length ?? 0,
    canonicalUrl: canonicalUrl(record),
  };
}

function findRecord(id: string) {
  const normalised = id.trim().toUpperCase();
  return ALL_RECORDS.find((record: any) => record.id === normalised) ?? null;
}

function filterRecords({
  programme,
  status,
  pressureState,
  verificationStage,
}: {
  programme?: string;
  status?: string;
  pressureState?: string;
  verificationStage?: string;
}) {
  return ALL_RECORDS.filter((record: any) => {
    const current = getCurrentAssessment(record);
    if (programme && record.programme.toLowerCase() !== programme.toLowerCase()) return false;
    if (status && record.status?.toLowerCase() !== status.toLowerCase()) return false;
    if (pressureState && current.pressureState?.toLowerCase() !== pressureState.toLowerCase()) return false;
    if (verificationStage && current.verificationStage?.toLowerCase() !== verificationStage.toLowerCase()) return false;
    return true;
  });
}

function jsonText(value: unknown) {
  return JSON.stringify(value, null, 2);
}

function buildServer(): McpServer {
  const server = new McpServer({ name: "Faultline Observatory", version: "2.0.0" });

  server.tool(
    "faultline_about",
    "Describe the Faultline Observatory MCP interface and its canonical data source.",
    {},
    async () => ({
      content: [{
        type: "text" as const,
        text: jsonText({
          name: "Faultline Observatory MCP",
          access: "public, read-only",
          canonical: true,
          recordCount: ALL_RECORDS.length,
          programmeCount: PROGRAMMES.length,
          source: "The live Frontier Record corpus in src/data/corpus.js and src/data/records/FR-*.js",
          principle: "One corpus, multiple surfaces. The MCP server derives from the same canonical records as the website.",
          tools: [
            "faultline_list_records",
            "faultline_read_record",
            "faultline_search_records",
            "faultline_programmes",
          ],
        }),
      }],
    }),
  );

  server.tool(
    "faultline_programmes",
    "Return canonical programme metadata and live record counts.",
    {},
    async () => ({
      content: [{
        type: "text" as const,
        text: jsonText(PROGRAMMES.map((programme: any) => ({
          ...programme,
          recordCount: ALL_RECORDS.filter((record: any) => record.programme === programme.id).length,
        }))),
      }],
    }),
  );

  server.tool(
    "faultline_list_records",
    "List canonical Frontier Records with current Pressure State, Verification Stage, status and public URL. Filters are optional.",
    {
      programme: z.string().optional().describe("Canonical programme ID, e.g. PROG-QE or PROG-AI"),
      status: z.string().optional().describe("Record status, normally open or closed"),
      pressureState: z.string().optional().describe("Current canonical Pressure State, e.g. escalating, fragmenting, resolving, collapsed"),
      verificationStage: z.string().optional().describe("Current Verification Stage, e.g. VS-02 or VS-04"),
    },
    async (filters) => {
      const records = filterRecords(filters);
      return {
        content: [{
          type: "text" as const,
          text: jsonText({ count: records.length, records: records.map(recordSummary) }),
        }],
      };
    },
  );

  server.tool(
    "faultline_read_record",
    "Return a full canonical Frontier Record by ID, including evidence instances, governed assessment history, current assessment, mechanisms, lineage, open questions, mutation history and canonical URL.",
    {
      id: z.string().describe("Canonical Frontier Record ID, e.g. FR-AM-0005 or FR-AI-0009"),
    },
    async ({ id }) => {
      const record = findRecord(id);
      if (!record) {
        return {
          content: [{
            type: "text" as const,
            text: `Record '${id}' not found. Use faultline_list_records to discover canonical IDs.`,
          }],
          isError: true,
        };
      }

      return {
        content: [{ type: "text" as const, text: jsonText(canonicalRecordView(record)) }],
      };
    },
  );

  server.tool(
    "faultline_search_records",
    "Search the canonical Frontier Record corpus across claim text, evidence instances, assessments, mechanisms, lineage, open questions and mutation history.",
    {
      query: z.string().min(1).describe("Search text"),
      programme: z.string().optional().describe("Optional canonical programme ID"),
      limit: z.number().int().min(1).max(50).optional().describe("Maximum records returned; defaults to 20"),
    },
    async ({ query, programme, limit }) => {
      const needle = query.trim().toLowerCase();
      const max = limit ?? 20;
      const records = ALL_RECORDS
        .filter((record: any) => !programme || record.programme.toLowerCase() === programme.toLowerCase())
        .filter((record: any) => {
          const programmeMetadata = programmeFor(record);
          return jsonText({ record, programmeMetadata }).toLowerCase().includes(needle);
        })
        .slice(0, max);

      return {
        content: [{
          type: "text" as const,
          text: jsonText({ query, count: records.length, records: records.map(recordSummary) }),
        }],
      };
    },
  );

  return server;
}

export default {
  async fetch(request: Request, _env: Env, _ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return new Response(JSON.stringify({
        status: "ok",
        server: "faultline-mcp",
        canonical: true,
        recordCount: ALL_RECORDS.length,
      }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    if (url.pathname === "/" || url.pathname === "") {
      return new Response(JSON.stringify({
        server: "Faultline Observatory MCP",
        version: "2.0.0",
        endpoint: "/mcp",
        transport: "Streamable HTTP",
        canonical: true,
        recordCount: ALL_RECORDS.length,
        source: "src/data/corpus.js",
      }), { headers: { "Content-Type": "application/json" } });
    }

    if (url.pathname === "/mcp") {
      const server = buildServer();
      const transport = new WebStandardStreamableHTTPServerTransport({
        sessionIdGenerator: undefined,
      });
      await server.connect(transport);
      return transport.handleRequest(request);
    }

    return new Response("Not found", { status: 404 });
  },
} satisfies ExportedHandler<Env>;
