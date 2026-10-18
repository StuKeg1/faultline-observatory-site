import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { assessmentChangeLabel } from "../data/recordReading.js";

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
  assert.equal(assessmentChangeLabel(null, {}), "Initial assessment");
  assert.match(frontierRecordSource, /assessmentChangeLabel\(previous, a\)/);
});

test("legacy provenance remains preserved outside the public opening label", () => {
  assert.match(legacyRecordSource, /openedDate:\s*["']2024-01-15["']/);
  assert.match(frontierRecordSource, /<MutationLog record=\{record\} \/>/);
});

test("RENDER-PILOT-001 no longer uses a fixed record gate", () => {
  assert.doesNotMatch(frontierRecordSource, /RENDER_PILOT_001_RECORDS/);
  assert.match(frontierRecordSource, /getNarrativeAvailability/);
  assert.match(frontierRecordSource, /State Warrant above remains the authoritative current assessment/);
});
