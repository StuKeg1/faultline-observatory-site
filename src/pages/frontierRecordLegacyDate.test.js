import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const frontierRecordSource = readFileSync(
  new URL("./FrontierRecord.jsx", import.meta.url),
  "utf8",
);
const legacyRecordSource = readFileSync(
  new URL("../data/records/FR-AI-0002.js", import.meta.url),
  "utf8",
);

test("legacy fallback dates are not presented as record-opening events", () => {
  assert.doesNotMatch(frontierRecordSource, /Record Opened/);
  assert.doesNotMatch(frontierRecordSource, /Record opened/);
  assert.match(frontierRecordSource, /Initial assessment —/);
});

test("legacy provenance remains preserved outside the public opening label", () => {
  assert.match(legacyRecordSource, /openedDate:\s*["']2024-01-15["']/);
  assert.match(frontierRecordSource, /<MutationLog record=\{record\} \/>/);
});
