import test from "node:test";
import assert from "node:assert/strict";

import { getLatestDevelopments } from "./derive.js";
import { ALL_RECORDS } from "./corpus.js";
import { ASSESSMENT_MUTATION_REFERENCE_REVIEWS, getAssessmentMutationReferenceReview } from "./assessmentMutationReferences.js";
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
  ]);
  assert.equal(qualifiesForHomepage("unclassified").qualifies, false);
});

test("five source-backed references resolve once while the lost QE assessment stays unlinked", () => {
  const keys = ASSESSMENT_MUTATION_REFERENCE_REVIEWS.map(r => `${r.recordId}:${r.mutationId}`);
  assert.equal(new Set(keys).size, 6);
  for (const review of ASSESSMENT_MUTATION_REFERENCE_REVIEWS) {
    const r = ALL_RECORDS.find(r => r.id === review.recordId);
    const m = r.mutationLog.find(m => m.id === review.mutationId);
    assert.equal(getAssessmentMutationReferenceReview(r, m), review);
    assert.deepEqual(Object.fromEntries(Object.keys(review.expectedMutation).map(k => [k, m[k]])), review.expectedMutation);
    assert.equal(resolveAssessmentMutation(m, r)?.id ?? null, review.assessmentId);
    if (review.assessmentId) {
      assert.match(review.sourceCommit, /^[a-f0-9]{40}$/);
      assert.equal(r.assessments.find(a => a.id === review.assessmentId).date, m.date);
    }
  }
});

test("reviewed links fail closed when source identity or assessment date changes", () => {
  const r = ALL_RECORDS.find(r => r.id === "FR-AM-0006");
  const m = r.mutationLog.find(m => m.id === "M-015");
  for (const changed of [{ ...m, date: "2026-08-30" }, { ...m, note: "Changed source" }, { ...m, id: "M-999" }]) {
    assert.equal(resolveAssessmentMutation(changed, r), null);
  }
  const altered = { ...r, assessments: r.assessments.map(a => a.id === "AS-004" ? { ...a, date: "2026-08-30" } : a) };
  assert.equal(resolveAssessmentMutation(m, altered), null);
  assert.equal(resolveAssessmentMutation({ ...m, to: "AS-999" }, r), null);
  assert.equal(resolveAssessmentMutation({ ...m, to: "AS-003 / AS-004" }, r), null);
});

test("four historical stage changes qualify once on original dates; metadata corrections do not", () => {
  const expected = ["FR-AI-0001:M-007", "FR-AM-0006:M-009", "FR-AM-0006:M-015", "FR-BT-0004:M-007"];
  const rows = getLatestDevelopments(ALL_RECORDS, 10000);
  for (const key of expected) {
    const matches = rows.filter(row => `${row.record.id}:${row.mutation.id}` === key);
    assert.equal(matches.length, 1);
    assert.ok(["2026-06-27", "2026-08-29"].includes(matches[0].mutation.date));
  }
  assert.ok(!rows.some(row => row.record.id === "FR-AM-0006" && row.mutation.id === "M-013"));
  for (const [rid, mid] of [["FR-AI-0001", "M-016"], ["FR-AM-0006", "M-019"], ["FR-BT-0004", "M-014"]]) {
    const r = ALL_RECORDS.find(r => r.id === rid), m = r.mutationLog.find(m => m.id === mid);
    assert.equal(detectMutationType(m, r), "editorial_correction");
    assert.ok(!rows.some(row => row.record.id === rid && row.mutation.id === mid));
  }
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
