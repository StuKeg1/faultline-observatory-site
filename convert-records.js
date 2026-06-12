#!/usr/bin/env node
/**
 * convert-records.js
 *
 * Converts Frontier Record HTML files to JS data files for the Observatory website.
 *
 * Usage:
 *   node convert-records.js <input-dir> <output-dir>
 *
 * Example:
 *   node convert-records.js ./html-records ./src/data/records
 *
 * The script:
 * 1. Reads each FR_*.html file from the input directory
 * 2. Extracts all structured data from the HTML
 * 3. Writes a .js data file in the correct schema
 * 4. Prints a summary of what was converted
 *
 * After running, manually register each new record in src/data/corpus.js
 */

import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from "fs";
import { join, basename } from "path";

// ─── HTML EXTRACTION HELPERS ─────────────────────────────────

function text(html, selector) {
  // Extract text content of first element matching class
  const re = new RegExp(`class="${selector}"[^>]*>([\\s\\S]*?)<\\/`, "i");
  const m = html.match(re);
  return m ? m[1].replace(/<[^>]+>/g, "").trim() : null;
}

function attr(html, cls, attr2) {
  const re = new RegExp(`class="[^"]*${cls}[^"]*"[^>]*${attr2}="([^"]+)"`, "i");
  const m = html.match(re);
  return m ? m[1].trim() : null;
}

function allMatches(html, pattern) {
  return [...html.matchAll(pattern)].map(m => m[1]?.trim()).filter(Boolean);
}

function cleanText(s) {
  return s
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

// ─── FIELD EXTRACTORS ────────────────────────────────────────

function extractRecordId(html) {
  const m = html.match(/FR-[A-Z]+-\d+/);
  return m ? m[0] : null;
}

function extractProgramme(html) {
  const m = html.match(/PROG-[A-Z]+/);
  return m ? m[0] : null;
}

function extractTitle(html) {
  const m = html.match(/class="record-title">([^<]+)</);
  return m ? m[1].trim() : null;
}

function extractClaimText(html) {
  const m = html.match(/class="claim-text">([^<]+)</);
  return m ? m[1].replace(/^"|"$/g, "").trim() : null;
}

function extractMetaVal(html, key) {
  const re = new RegExp(`class="meta-key">${key}<\\/span><span class="meta-val">([\\s\\S]*?)<\\/span>`, "i");
  const m = html.match(re);
  return m ? cleanText(m[1]) : null;
}

function extractCurrentPressureState(html) {
  // From the meta-row at top of record
  const m = html.match(/CURRENT PRESSURE STATE[\s\S]*?pressure-tag pressure-([a-z]+)/i);
  return m ? m[1] : null;
}

function extractInstances(html) {
  const instances = [];
  const blocks = html.match(/<div class="instance-row">[\s\S]*?<\/div>\s*<\/div>/g) || [];

  blocks.forEach((block, i) => {
    const date = cleanText(block.match(/class="inst-date">([^<]+)</)?.[1] || "");
    const idLine = cleanText(block.match(/class="inst-id">([^<]+)</)?.[1] || "");
    const event = cleanText(block.match(/class="inst-event">([^<]+)</)?.[1] || "");
    const desc = cleanText(block.match(/class="inst-desc">([\s\S]*?)<\/div>/)?.[1] || "");

    // Extract vector tags
    const vectorMatches = [...block.matchAll(/class="vector-tag[^"]*">([^<]+)</g)];
    const vectors = vectorMatches.map(m => m[1].toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").trim());

    const idMatch = idLine.match(/INST-(\d+)/);
    const id = idMatch ? `IN-${String(idMatch[1]).padStart(3, "0")}` : `IN-${String(i + 1).padStart(3, "0")}`;

    if (event || desc) {
      instances.push({ id, date, event, description: desc, vectors: vectors.slice(0, 3) });
    }
  });

  return instances;
}

function extractAssessments(html) {
  const assessments = [];
  const blocks = html.match(/<div class="assessment-block">[\s\S]*?<\/div>\s*<\/div>/g) || [];

  blocks.forEach((block, i) => {
    const metaLine = cleanText(block.match(/class="assess-meta">([\s\S]*?)<\/div>/)?.[1] || "");
    const texts = [...block.matchAll(/class="assess-text">([\s\S]*?)<\/div>/g)]
      .map(m => cleanText(m[1])).filter(Boolean).join(" ");

    // Extract pressure state
    const psMatch = block.match(/PRESSURE STATE:<\/span>\s*<span class="pressure-tag pressure-([a-z]+)"/i);
    const pressureState = psMatch ? psMatch[1] : "emerging";

    // Extract date from meta
    const dateMatch = metaLine.match(/ISSUED:\s*([^·\s]+[\s\S]*?(?=TRIGGERING|AUTHORITY|$))/i);
    let date = dateMatch ? dateMatch[1].trim().replace(/,.*/, "").trim() : "2024-01-15";

    // Clean up notional dates
    if (date.toLowerCase().includes("notional") || date.toLowerCase().includes("march") ||
        date.toLowerCase().includes("mid-") || !date.match(/^\d{4}/)) {
      date = "2024-01-15";
    }

    const idMatch = metaLine.match(/ASSESSMENT-(\d+)/i);
    const id = idMatch ? `AS-${String(idMatch[1]).padStart(3, "0")}` : `AS-${String(i + 1).padStart(3, "0")}`;

    // Determine verification stage from pressure state
    const vsMap = {
      "emerging":    "VS-01",
      "escalating":  "VS-02",
      "stabilising": "VS-03",
      "fragmenting": "VS-03",
      "resolving":   "VS-04",
      "collapsed":   "VS-05",
    };
    const verificationStage = vsMap[pressureState] || "VS-02";

    if (texts) {
      assessments.push({ id, date, pressureState, verificationStage, summary: texts.substring(0, 500), assessorNote: null });
    }
  });

  return assessments;
}

function extractMechanisms(html) {
  const mechanisms = [];
  const blocks = html.match(/<div class="mech-block">[\s\S]*?<\/div>\s*<\/div>/g) || [];

  blocks.forEach((block) => {
    const idMatch = block.match(/class="mech-id">([^<]+)</);
    const typeMatch = block.match(/class="mech-type[^"]*">([^<]+)</);
    const textMatch = block.match(/class="mech-text">([\s\S]*?)<\/div>/);

    if (idMatch && textMatch) {
      mechanisms.push({
        id: idMatch[1].split("·")[0].trim(),
        type: typeMatch ? typeMatch[1].trim() : "resistance",
        description: cleanText(textMatch[1]).substring(0, 400),
      });
    }
  });

  return mechanisms;
}

function extractLineage(html) {
  const items = [];
  const blocks = html.match(/<div class="lineage-item">[\s\S]*?<\/div>\s*<\/div>/g) || [];

  blocks.forEach(block => {
    const year = cleanText(block.match(/class="lin-year">([^<]+)</)?.[1] || "");
    const textMatch = block.match(/class="lin-text">([\s\S]*?)<\/div>/);
    if (year && textMatch) {
      items.push({ year, text: cleanText(textMatch[1]).substring(0, 300) });
    }
  });

  return items;
}

function extractOpenQuestions(html) {
  const questions = [];
  const blocks = html.match(/<div class="question-item">[\s\S]*?<\/div>/g) || [];

  blocks.forEach((block, i) => {
    const numMatch = block.match(/class="q-num">([^<]+)</);
    const textMatch = block.match(/class="q-num">[^<]+<\/span><span>([^<]+)/);
    if (textMatch) {
      questions.push({
        id: `OQ-${String(i + 1).padStart(3, "0")}`,
        question: textMatch[1].trim(),
        raisedDate: "2024-01-15",
      });
    }
  });

  return questions;
}

function extractMutationLog(html) {
  const mutations = [];
  const rows = html.match(/<div class="mutation-row">[\s\S]*?<\/div>/g) || [];

  rows.forEach((row, i) => {
    const tsMatch = row.match(/class="mut-ts">([^<]+)</);
    const typeMatch = row.match(/class="mut-type">([^<]+)</);
    const descMatch = row.match(/class="mut-desc">([^<]+)</);

    if (tsMatch && typeMatch) {
      const rawDate = tsMatch[1].replace("T00:00:00Z", "").trim();
      const date = rawDate.match(/^\d{4}-\d{2}-\d{2}$/) ? rawDate : "2024-01-15";
      mutations.push({
        id: `M-${String(i + 1).padStart(3, "0")}`,
        date,
        field: typeMatch[1].toLowerCase().replace(/-/g, "_"),
        from: "—",
        to: typeMatch[1].trim(),
        note: descMatch ? descMatch[1].trim() : "",
      });
    }
  });

  // Mutation log is newest-first in the schema
  return mutations.reverse();
}

function extractStatus(html) {
  const state = extractCurrentPressureState(html);
  // Collapsed = closed; all others = open
  return state === "collapsed" ? "closed" : "open";
}

// ─── JS FILE GENERATOR ───────────────────────────────────────

function generateJS(record) {
  const varName = record.id.replace(/-/g, "_");

  const jsInstances = record.instances.map(inst =>
    `    {
      id: "${inst.id}",
      qualifiedEvent: ${JSON.stringify(inst.event)},
      description: ${JSON.stringify(inst.description)},
      vectors: ${JSON.stringify(inst.vectors)},
      date: ${JSON.stringify(inst.date)},
    }`
  ).join(",\n");

  const jsAssessments = record.assessments.map(a =>
    `    {
      id: "${a.id}",
      date: "${a.date}",
      pressureState: "${a.pressureState}",
      verificationStage: "${a.verificationStage}",
      summary: ${JSON.stringify(a.summary)},
      assessorNote: ${JSON.stringify(a.assessorNote)},
    }`
  ).join(",\n");

  const jsMechanisms = record.mechanisms.map(m =>
    `    {
      id: "${m.id}",
      type: ${JSON.stringify(m.type)},
      description: ${JSON.stringify(m.description)},
    }`
  ).join(",\n");

  const jsLineage = record.lineage.map(l =>
    `    { year: "${l.year}", text: ${JSON.stringify(l.text)} }`
  ).join(",\n");

  const jsQuestions = record.openQuestions.map(q =>
    `    {
      id: "${q.id}",
      question: ${JSON.stringify(q.question)},
      raisedDate: "${q.raisedDate}",
    }`
  ).join(",\n");

  const jsMutations = record.mutationLog.map(m =>
    `    { id: "${m.id}", date: "${m.date}", field: "${m.field}", from: ${JSON.stringify(m.from)}, to: ${JSON.stringify(m.to)}, note: ${JSON.stringify(m.note)} }`
  ).join(",\n");

  return `/**
 * ${record.id} — ${record.title}
 * Programme: ${record.programme}
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const ${varName} = {
  id: "${record.id}",
  programme: "${record.programme}",

  claim: {
    statement: ${JSON.stringify(record.claim)},
    shortLabel: ${JSON.stringify(record.title)},
    openedDate: "${record.openedDate}",
  },

  instances: [
${jsInstances}
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
${jsAssessments}
  ],

  mechanisms: [
${jsMechanisms}
  ],

  lineage: {
    items: [
${jsLineage}
    ],
    relatedRecords: [],
  },

  openQuestions: [
${jsQuestions}
  ],

  mutationLog: [
    // APPEND-ONLY. Newest first.
${jsMutations}
  ],

  status: "${record.status}",
};
`;
}

// ─── MAIN ────────────────────────────────────────────────────

const inputDir  = process.argv[2] || "./html-records";
const outputDir = process.argv[3] || "./src/data/records";

if (!existsSync(inputDir)) {
  console.error(`Input directory not found: ${inputDir}`);
  process.exit(1);
}

if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

const htmlFiles = readdirSync(inputDir)
  .filter(f => f.toLowerCase().endsWith(".html") && f.startsWith("FR_"));

if (htmlFiles.length === 0) {
  console.error("No FR_*.html files found in", inputDir);
  process.exit(1);
}

console.log(`\nFaultline Observatory — Record Converter`);
console.log(`Input:  ${inputDir}`);
console.log(`Output: ${outputDir}`);
console.log(`Files:  ${htmlFiles.length}\n`);

const results = { success: [], failed: [], skipped: [] };
const corpusLines = [];

for (const file of htmlFiles.sort()) {
  const html = readFileSync(join(inputDir, file), "utf8");

  const id = extractRecordId(html);
  if (!id) {
    console.log(`SKIP ${file} — could not extract record ID`);
    results.skipped.push(file);
    continue;
  }

  const outFile = `${id}.js`;
  const outPath = join(outputDir, outFile);

  // Skip FR-QE-0001 — already exists as hand-crafted canonical record
  if (id === "FR-QE-0001") {
    console.log(`SKIP ${id} — canonical record already exists`);
    results.skipped.push(file);
    continue;
  }

  try {
    const record = {
      id,
      programme:     extractProgramme(html),
      title:         extractTitle(html),
      claim:         extractClaimText(html),
      openedDate:    extractMetaVal(html, "RECORD OPENED") || "2024-01-15",
      status:        extractStatus(html),
      instances:     extractInstances(html),
      assessments:   extractAssessments(html),
      mechanisms:    extractMechanisms(html),
      lineage:       extractLineage(html),
      openQuestions: extractOpenQuestions(html),
      mutationLog:   extractMutationLog(html),
    };

    // Validate minimum viable record
    if (!record.programme || !record.title || !record.claim) {
      throw new Error(`Missing required fields: programme=${record.programme}, title=${record.title}`);
    }
    if (record.assessments.length === 0) {
      throw new Error("No assessments extracted — getCurrentAssessment would throw");
    }

    const js = generateJS(record);
    writeFileSync(outPath, js, "utf8");

    const varName = id.replace(/-/g, "_");
    corpusLines.push({ id, varName, programme: record.programme, title: record.title, state: record.assessments[record.assessments.length - 1]?.pressureState });

    console.log(`PASS ${id} — ${record.title} [${record.assessments[record.assessments.length-1]?.pressureState}] — ${record.assessments.length} assessments, ${record.instances.length} instances`);
    results.success.push(id);
  } catch (err) {
    console.log(`FAIL ${id} — ${err.message}`);
    results.failed.push({ file, error: err.message });
  }
}

// ─── CORPUS REGISTRATION HELPER ──────────────────────────────

console.log(`\n${"─".repeat(60)}`);
console.log(`Converted: ${results.success.length} | Skipped: ${results.skipped.length} | Failed: ${results.failed.length}`);

if (results.failed.length > 0) {
  console.log("\nFailed files:");
  results.failed.forEach(f => console.log(`  ${f.file}: ${f.error}`));
}

// Print corpus.js import block for manual addition
if (corpusLines.length > 0) {
  console.log(`\n${"─".repeat(60)}`);
  console.log("Add these imports to src/data/corpus.js:\n");
  corpusLines.forEach(r => {
    console.log(`import { ${r.varName} } from "./records/${r.id}.js";`);
  });
  console.log(`\nAdd these to ALL_RECORDS:\n`);
  const byProg = {};
  corpusLines.forEach(r => {
    if (!byProg[r.programme]) byProg[r.programme] = [];
    byProg[r.programme].push(r.varName);
  });
  Object.entries(byProg).sort().forEach(([prog, vars]) => {
    console.log(`  // ${prog}`);
    vars.forEach(v => console.log(`  ${v},`));
  });
}
