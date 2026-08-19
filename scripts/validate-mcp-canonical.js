import { readFileSync } from "node:fs";
import { ALL_RECORDS } from "../src/data/corpus.js";

const workerPath = new URL("../faultline-mcp/src/index.ts", import.meta.url);
const worker = readFileSync(workerPath, "utf8");
const errors = [];

if (!worker.includes('from "../../src/data/corpus.js"')) {
  errors.push("remote MCP must import the canonical corpus");
}
if (!worker.includes('from "../../src/data/derive.js"')) {
  errors.push("remote MCP must use canonical derived accessors");
}
if (/\bconst\s+CASES\b/.test(worker)) {
  errors.push("remote MCP must not define an independent CASES database");
}
if (/\bLIFECYCLE_STAGES\b/.test(worker)) {
  errors.push("remote MCP must not expose the retired parallel lifecycle taxonomy");
}
for (const tool of [
  "faultline_list_records",
  "faultline_read_record",
  "faultline_search_records",
  "faultline_programmes",
]) {
  if (!worker.includes(`"${tool}"`)) errors.push(`remote MCP missing ${tool}`);
}

for (const record of ALL_RECORDS) {
  if (!/^FR-[A-Z]{2}-\d{4}$/.test(record.id)) {
    errors.push(`non-canonical record id in corpus: ${record.id}`);
  }
  if (!record.assessments?.length) {
    errors.push(`${record.id} has no assessment history`);
  }
}

if (errors.length) {
  console.error("MCP canonical alignment validation FAILED:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`MCP canonical alignment OK — derived from ${ALL_RECORDS.length} canonical Frontier Records.`);
