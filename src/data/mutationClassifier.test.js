import test from "node:test";
import assert from "node:assert/strict";

import { getLatestDevelopments } from "./derive.js";
import {
  detectMutationType,
  qualifiesForHomepage,
} from "./mutationClassifier.js";

const mutation = {
  id: "M-006",
  date: "2026-08-22",
  field: "instance_added",
  from: null,
  to: "IN-008",
  reason: "New evidentiary instance admitted.",
};

const record = {
  id: "FR-AI-0009",
  title: "World Models / Physical AI",
  status: "open",
  assessments: [],
  mutationLog: [
    mutation,
    {
      id: "M-001",
      date: "2026-08-19",
      field: "record_created",
      from: null,
      to: "FR-AI-0009",
      reason: "Record admitted.",
    },
  ],
};

test("instance_added is a qualifying Class A development", () => {
  const mutationType = detectMutationType(mutation, record);
  assert.equal(mutationType, "instance_added");

  const qualification = qualifiesForHomepage(mutationType);
  assert.equal(qualification.qualifies, true);
  assert.equal(qualification.taxonomyClass, "A");
});

test("instance_added appears in Latest Developments", () => {
  const developments = getLatestDevelopments([record], 3);

  const development = developments.find((row) => row.mutation.id === "M-006");
  assert.ok(development);
  assert.equal(development.record.id, "FR-AI-0009");
  assert.equal(development.mutationType, "instance_added");
  assert.equal(development.taxonomyClass, "A");
});

test("provenance review completion is classified as changelog-only infrastructure", () => {
  const completion = {
    id: "M-010",
    date: "2026-08-30",
    field: "provenance_review_completed",
    from: "No governed provenance-review completion marker",
    to: "LPR-001-D01 completed; discrepancies corrected",
  };

  const mutationType = detectMutationType(completion, record);
  const qualification = qualifiesForHomepage(mutationType);

  assert.equal(mutationType, "provenance_review_completed");
  assert.equal(qualification.qualifies, false);
  assert.equal(qualification.taxonomyClass, "D");
});

test("description restoration is classified as a changelog-only editorial correction", () => {
  const restoration = {
    id: "M-011",
    date: "2026-09-06",
    field: "description_restored",
    from: "Legacy ingestion cutoff",
    to: "Source-restored complete description",
  };

  const mutationType = detectMutationType(restoration, record);
  const qualification = qualifiesForHomepage(mutationType);

  assert.equal(mutationType, "editorial_correction");
  assert.equal(qualification.qualifies, false);
  assert.equal(qualification.taxonomyClass, "D");
});

test("assessment correction variants retain assessment trajectory classification", () => {
  const correction = {
    id: "M-012",
    date: "2026-09-06",
    field: "assessment_correction",
    from: "AS-001",
    to: "AS-002",
  };
  const correctionRecord = {
    ...record,
    assessments: [
      { id: "AS-001", pressureState: "FRAGMENTING", verificationStage: "VS-03" },
      { id: "AS-002", pressureState: "FRAGMENTING", verificationStage: "VS-03" },
    ],
  };

  assert.equal(detectMutationType(correction, correctionRecord), "assessment_reissued_no_state_change");
});
