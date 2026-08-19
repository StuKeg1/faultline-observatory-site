import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { validateMcpCanonical } from "./validate-mcp-canonical.js";

const canonicalImports = `
import { ALL_RECORDS, PROGRAMMES } from "../../src/data/corpus.js";
import { getCurrentAssessment } from "../../src/data/derive.js";
"faultline_list_records";
"faultline_read_record";
"faultline_search_records";
"faultline_programmes";
`;

function fixture(indexSource, additionalFiles = {}) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "faultline-mcp-validator-"));
  fs.writeFileSync(path.join(root, "index.ts"), indexSource);
  for (const [name, source] of Object.entries(additionalFiles)) fs.writeFileSync(path.join(root, name), source);
  return root;
}

test("canonical MCP adapter passes the anti-divergence gate", () => {
  assert.deepEqual(validateMcpCanonical(fixture(canonicalImports)), []);
});

test("renamed local case databases fail the anti-divergence gate", () => {
  const errors = validateMcpCanonical(fixture(`${canonicalImports}\nconst TRACKED_ITEMS = [{ id: "lk99" }];`));
  assert.ok(errors.some((error) => error.includes("local object or array data stores")));
});

test("additional Worker data modules fail the anti-divergence gate", () => {
  const errors = validateMcpCanonical(fixture(canonicalImports, {
    "catalogue.ts": "export const TRACKED_ITEMS = [{ id: 'lk99' }];",
  }));
  assert.ok(errors.some((error) => error.includes("single derived adapter")));
});

test("retired lifecycle tools fail the anti-divergence gate", () => {
  const errors = validateMcpCanonical(fixture(`${canonicalImports}\n"fcif_list_cases";`));
  assert.ok(errors.some((error) => error.includes("retired lifecycle token")));
});
