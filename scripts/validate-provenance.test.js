import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { FR_AI_0001 } from "../src/data/records/FR-AI-0001.js";
import { FR_QE_0007 } from "../src/data/records/FR-QE-0007.js";
import { FR_QE_0004 } from "../src/data/records/FR-QE-0004.js";
import { validateRecordProvenance, validateSourceObject } from "./validate-provenance.js";

function instance(record, id) {
  return record.instances.find((item) => item.id === id);
}

test("PA-002 admits single-source and multi-source provenance", () => {
  assert.equal(instance(FR_AI_0001, "IN-005").sources.length, 1);
  assert.ok(instance(FR_AI_0001, "IN-006").sources.length >= 5);
  assert.equal(instance(FR_QE_0007, "IN-001").sources.length, 3);
  assert.equal(instance(FR_QE_0007, "IN-002").sources.length, 2);
  assert.equal(instance(FR_QE_0004, "IN-008").sources.length, 1);
});

test("DOI-backed and non-academic sources share the same primitive", () => {
  assert.equal(instance(FR_AI_0001, "IN-005").sources[0].doi, undefined);
  assert.equal(instance(FR_QE_0004, "IN-008").sources[0].doi, "10.1038/s41586-026-10759-2");
});

test("legacy absence remains valid while empty provenance is rejected", () => {
  assert.deepEqual(validateRecordProvenance({ id: "FR-X", instances: [{ id: "IN-001" }] }), []);
  assert.match(validateRecordProvenance({ id: "FR-X", instances: [{ id: "IN-001", sources: [] }] })[0], /non-empty array/);
});

test("meaningless source objects and DOI resolver URLs are rejected", () => {
  assert.ok(validateSourceObject({}).some((error) => error.includes("citation")));
  assert.ok(validateSourceObject({ citation: "x", doi: "https://doi.org/10.1000/test" }).some((error) => error.includes("canonical DOI")));
});

test("MCP full-record projection inherits canonical sources without a second provenance model", () => {
  const source = fs.readFileSync("faultline-mcp/src/index.ts", "utf8");
  assert.match(source, /function canonicalRecordView\(record: any\)/);
  assert.match(source, /\.\.\.record,/);
  assert.doesNotMatch(source, /extraction_status|source_hash|provenanceConfidence|machineExtractionConfidence/);
});

test("LPR completion marker requires a complete and internally consistent state", () => {
  const valid = validateRecordProvenance({
    id: "FR-TEST-0001",
    instances: [],
    lastProvenanceReview: "2026-08-30",
    provenanceReviewId: "LPR-001-D01",
    provenanceOutcome: "discrepancies_corrected",
    provenanceRepairStatus: "completed",
  });
  assert.deepEqual(valid, []);

  const incomplete = validateRecordProvenance({
    id: "FR-TEST-0002",
    instances: [],
    lastProvenanceReview: "2026-08-30",
  });
  assert.match(incomplete.join("\n"), /all four governed fields/);

  const inconsistent = validateRecordProvenance({
    id: "FR-TEST-0003",
    instances: [],
    lastProvenanceReview: "2026-08-30",
    provenanceReviewId: "LPR-001-D01",
    provenanceOutcome: "discrepancies_found",
    provenanceRepairStatus: "completed",
  });
  assert.match(inconsistent.join("\n"), /must use repair status pending/);
});
