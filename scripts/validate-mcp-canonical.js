import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { ALL_RECORDS } from "../src/data/corpus.js";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_WORKER_ROOT = path.resolve(SCRIPT_DIR, "../faultline-mcp/src");

function sourceFiles(root) {
  return readdirSync(root, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(root, entry.name);
    if (entry.isDirectory()) return sourceFiles(target);
    return /\.[cm]?[jt]sx?$/.test(entry.name) ? [target] : [];
  });
}

export function validateMcpCanonical(workerRoot = DEFAULT_WORKER_ROOT) {
  const files = sourceFiles(workerRoot);
  const indexPath = path.join(workerRoot, "index.ts");
  const worker = readFileSync(indexPath, "utf8");
  const combinedSource = files.map((file) => readFileSync(file, "utf8")).join("\n");
  const errors = [];

  if (!worker.includes('from "../../src/data/corpus.js"')) {
    errors.push("remote MCP must import the canonical corpus");
  }
  if (!worker.includes('from "../../src/data/derive.js"')) {
    errors.push("remote MCP must use canonical derived accessors");
  }
  if (!worker.includes("...record,")) {
    errors.push("remote MCP full-record projection must preserve canonical instance fields, including sources[]");
  }
  if (!worker.includes("structured source provenance where recorded")) {
    errors.push("faultline_read_record must disclose structured source provenance where recorded");
  }
  if (files.some((file) => path.resolve(file) !== path.resolve(indexPath))) {
    errors.push("remote MCP source must remain a single derived adapter; additional source modules require canonical review");
  }
  if (/\b(?:const|let|var)\s+[A-Za-z_$][\w$]*\s*=\s*(?:\[|{)/.test(combinedSource)) {
    errors.push("remote MCP must not declare local object or array data stores");
  }
  for (const retiredToken of [
    "LIFECYCLE_STAGES", "fcif_lifecycle_stages", "fcif_list_cases", "fcif_claim_status",
    '"Claimed"', '"Replicated"', '"Demonstrated"', '"Reinforced"', '"Invalidated"', '"Vindicated"',
  ]) {
    if (combinedSource.includes(retiredToken)) errors.push(`remote MCP contains retired lifecycle token: ${retiredToken}`);
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

  return errors;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const errors = validateMcpCanonical();
  if (errors.length) {
    console.error("MCP canonical alignment validation FAILED:");
    for (const error of errors) console.error(`- ${error}`);
    process.exit(1);
  }

  console.log(`MCP canonical alignment OK — derived from ${ALL_RECORDS.length} canonical Frontier Records.`);
}
