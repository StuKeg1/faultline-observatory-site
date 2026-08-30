import test from "node:test";
import assert from "node:assert/strict";
import { getNextProvenanceReviewRecord, sortProvenanceReviewQueue } from "./provenanceReviewQueue.js";

test("LPR queue selects never-reviewed records first with a deterministic ID tie-break", () => {
  const records = [
    { id: "FR-QE-0002", lastProvenanceReview: "2026-08-20" },
    { id: "FR-AI-0003" },
    { id: "FR-AI-0001" },
  ];

  assert.deepEqual(sortProvenanceReviewQueue(records).map(({ id }) => id), [
    "FR-AI-0001",
    "FR-AI-0003",
    "FR-QE-0002",
  ]);
});

test("LPR queue selects the oldest review after every record has a marker", () => {
  const records = [
    { id: "FR-AI-0002", lastProvenanceReview: "2026-08-30" },
    { id: "FR-QE-0001", lastProvenanceReview: "2026-08-12" },
  ];

  assert.equal(getNextProvenanceReviewRecord(records).id, "FR-QE-0001");
  assert.equal(getNextProvenanceReviewRecord([]), null);
});
