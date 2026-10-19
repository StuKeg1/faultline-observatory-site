import test from "node:test";
import assert from "node:assert/strict";

import { getLatestDevelopments } from "./derive.js";
import { ALL_RECORDS } from "./corpus.js";
import {
  detectMutationType,
  qualifiesForHomepage,
  resolveAssessmentMutation,
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

test("unresolved legacy assessment references remain visible and fail closed", () => {
  const unclassified = ALL_RECORDS.flatMap((record) =>
    record.mutationLog
      .filter((entry) => detectMutationType(entry, record) === "unclassified")
      .map((entry) => `${record.id}:${entry.id}:${entry.field}`)
  );

  assert.deepEqual(unclassified, [
    "FR-QE-0001:M-003:assessment_issued",
    "FR-AI-0001:M-007:assessment_issued",
    "FR-AM-0006:M-015:assessment_issued",
    "FR-AM-0006:M-013:assessment_issued",
    "FR-AM-0006:M-009:assessment_issued",
    "FR-BT-0004:M-007:assessment_issued",
  ]);
  assert.equal(qualifiesForHomepage("unclassified").qualifies, false);
});

test("assessment targets resolve explanatory suffixes but reject ambiguous or missing references", () => {
  const r = ALL_RECORDS.find(r => r.id === "FR-AI-0008");
  const m = r.mutationLog.find(m => m.id === "M-013");
  assert.equal(resolveAssessmentMutation(m, r).id, "AS-004");
  assert.equal(detectMutationType(m, r), "assessment_verification_stage_changed");
  for (const to of ["AS-003 / AS-004", "AS-999", "Unlinked assessment", "AS-0040"]) {
    assert.equal(resolveAssessmentMutation({ ...m, to }, r), null);
    assert.equal(detectMutationType({ ...m, to }, r), "unclassified");
  }
  const bootstrap = { date: "2026-08-19", field: "assessment_issued", to: "ASSESSMENT-ISSUED" };
  assert.equal(detectMutationType(bootstrap, record), "creation_batch_internal");
});
