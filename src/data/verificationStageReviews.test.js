import test from "node:test";
import assert from "node:assert/strict";

import { ALL_RECORDS } from "./corpus.js";
import {
  getAssessmentHistory,
  getCurrentAssessment,
  getStateEnteredDate,
  getVerificationStages,
  getTransitionFeed,
} from "./derive.js";
import {
  HISTORICAL_EFFECTIVE_DATES,
  VERIFICATION_STAGE_REVIEWS,
  getHistoricalEffectiveDate,
  getVerificationStageReview,
} from "./verificationStageReviews.js";

test("ratified overlay covers 34 unique assignments with preserved stored codes", () => {
  assert.equal(VERIFICATION_STAGE_REVIEWS.length, 34);
  assert.equal(
    new Set(VERIFICATION_STAGE_REVIEWS.map((review) => review.id)).size,
    34,
  );

  for (const review of VERIFICATION_STAGE_REVIEWS) {
    assert.equal("authorityUrl" in review, false, `${review.id} exposes authorityUrl`);
    const record = ALL_RECORDS.find((candidate) => candidate.id === review.recordId);
    assert.ok(record, review.recordId);
    const stored = record.assessments.find(
      (assessment) => assessment.id === review.assessmentId,
    );
    assert.ok(stored, review.id);
    assert.equal(stored.verificationStage, review.storedStage, review.id);
  }
});

test("corrections affect derived interpretation without mutating assessments", () => {
  const record = ALL_RECORDS.find((candidate) => candidate.id === "FR-AM-0001");
  const stored = record.assessments.find((assessment) => assessment.id === "AS-003");
  const derived = getAssessmentHistory(record).find(
    (assessment) => assessment.id === "AS-003",
  );

  assert.equal(stored.verificationStage, "VS-05");
  assert.equal(derived.verificationStage, "VS-04");
  assert.equal(derived.verificationStageProvenance.storedStage, "VS-05");
  assert.equal("authorityUrl" in derived.verificationStageProvenance, false);
  assert.equal(getCurrentAssessment(record).id, "AS-005");
  assert.equal(getCurrentAssessment(record).verificationStage, "VS-05");
});

test("LAD-001 preserves recorded dates while deriving historical chronology for FR-AM-0001", () => {
  const record = ALL_RECORDS.find((candidate) => candidate.id === "FR-AM-0001");
  const history = getAssessmentHistory(record);

  assert.deepEqual(
    record.assessments.map((assessment) => assessment.date),
    ["2024-01-15", "2024-01-15", "2024-01-15", "2026-09-08", "2026-09-08"],
  );
  assert.deepEqual(
    history.map((assessment) => assessment.recordedDate),
    ["2024-01-15", "2024-01-15", "2024-01-15", undefined, undefined],
  );
  assert.deepEqual(
    history.map((assessment) => assessment.date),
    ["Mar 1989", "Apr–Nov 1989", "2004 or earlier", "2026-09-08", "2026-09-08"],
  );

  const stages = getVerificationStages(record);
  assert.equal(stages.find((stage) => stage.vsCode === "VS-01").date, "Mar 1989");
  assert.equal(stages.find((stage) => stage.vsCode === "VS-04").date, "Apr–Nov 1989");
  assert.equal(stages.find((stage) => stage.vsCode === "VS-04").status, "reached");
  assert.equal(stages.find((stage) => stage.vsCode === "VS-05").date, "2026-09-08");
  assert.equal(stages.find((stage) => stage.vsCode === "VS-05").status, "current");
  assert.equal(getStateEnteredDate(record), "2004 or earlier");
});

test("LAD-001 historical dates carry bounded precision and evidence-instance provenance", () => {
  assert.equal(HISTORICAL_EFFECTIVE_DATES.length, 4);
  assert.deepEqual(
    HISTORICAL_EFFECTIVE_DATES.map(({ recordId, assessmentId }) => `${recordId}:${assessmentId}`),
    ["FR-AI-0008:AS-001", "FR-AM-0001:AS-001", "FR-AM-0001:AS-002", "FR-AM-0001:AS-003"],
  );

  for (const entry of HISTORICAL_EFFECTIVE_DATES) {
    const record = ALL_RECORDS.find((candidate) => candidate.id === entry.recordId);
    const instanceIds = new Set(record.instances.map((instance) => instance.id));
    assert.ok(entry.precision);
    assert.ok(entry.basis.length > 0);
    for (const instanceId of entry.basis) {
      assert.ok(instanceIds.has(instanceId), `${entry.assessmentId} basis ${instanceId}`);
    }
  }

  assert.equal(
    getHistoricalEffectiveDate("FR-AM-0001", "AS-003").precision,
    "upper-bound-year",
  );
});

test("AI-0008 stage correction preserves historical assignments without a false 2024 operation date", () => {
  const record = ALL_RECORDS.find(r => r.id === "FR-AI-0008");
  const history = getAssessmentHistory(record);
  assert.deepEqual(record.assessments.map(a => a.verificationStage), ["VS-03", "VS-03", "VS-03", "VS-05"]);
  assert.deepEqual(history.map(a => a.verificationStage), ["VS-05", "VS-03", "VS-03", "VS-05"]);
  assert.equal(history[0].recordedDate, "2024-01-15");
  assert.equal(history[0].historicalEffectiveDate.precision, "unknown");
  assert.equal(history[0].date, "date uncertain (legacy)");
  assert.equal(getCurrentAssessment(record).changeKind, "verification_stage_correction");
  assert.equal(getCurrentAssessment(record).pressureState, "fragmenting");
  const current = getVerificationStages(record).find(s => s.status === "current");
  assert.equal(current.vsCode, "VS-05");
  assert.equal(current.date, "2026-10-18");
  assert.deepEqual(getTransitionFeed(record), []);
});

test("historically unverified entries retain their stored stage", () => {
  const record = ALL_RECORDS.find((candidate) => candidate.id === "FR-QE-0004");
  const derived = getAssessmentHistory(record).find(
    (assessment) => assessment.id === "AS-001",
  );

  assert.equal(derived.verificationStage, "VS-04");
  assert.equal(
    derived.verificationStageProvenance.disposition,
    "historically-unverified",
  );
  assert.equal(
    getVerificationStageReview("FR-QE-0004", "AS-001").reconstructedStage,
    null,
  );
});

test("non-reference records remain outside LAD-001 date semantics", () => {
  const record = ALL_RECORDS.find((candidate) => candidate.id === "FR-QE-0001");
  const current = getCurrentAssessment(record);

  assert.equal(
    HISTORICAL_EFFECTIVE_DATES.some((entry) => entry.recordId === "FR-QE-0001"),
    false,
  );
  assert.equal(getHistoricalEffectiveDate("FR-QE-0001", current.id), null);
  assert.equal(current.recordedDate, undefined);
  assert.equal(current.historicalEffectiveDate, undefined);
});

test("FR-QE-0001 remains outside the legacy stage overlay", () => {
  assert.equal(
    VERIFICATION_STAGE_REVIEWS.some((review) => review.recordId === "FR-QE-0001"),
    false,
  );
  const record = ALL_RECORDS.find((candidate) => candidate.id === "FR-QE-0001");
  assert.equal(getCurrentAssessment(record).verificationStage, "VS-04");
  assert.equal(getCurrentAssessment(record).verificationStageProvenance, undefined);
});
