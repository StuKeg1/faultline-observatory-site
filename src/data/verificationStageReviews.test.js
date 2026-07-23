import test from "node:test";
import assert from "node:assert/strict";

import { ALL_RECORDS } from "./corpus.js";
import { getAssessmentHistory, getCurrentAssessment } from "./derive.js";
import {
  VERIFICATION_STAGE_REVIEWS,
  getVerificationStageReview,
} from "./verificationStageReviews.js";

test("ratified overlay covers 34 unique assignments with preserved stored codes", () => {
  assert.equal(VERIFICATION_STAGE_REVIEWS.length, 34);
  assert.equal(
    new Set(VERIFICATION_STAGE_REVIEWS.map((review) => review.id)).size,
    34,
  );

  for (const review of VERIFICATION_STAGE_REVIEWS) {
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
  assert.equal(getCurrentAssessment(record).verificationStage, "VS-04");
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

test("FR-QE-0001 remains outside the legacy overlay", () => {
  assert.equal(
    VERIFICATION_STAGE_REVIEWS.some((review) => review.recordId === "FR-QE-0001"),
    false,
  );
  const record = ALL_RECORDS.find((candidate) => candidate.id === "FR-QE-0001");
  assert.equal(getCurrentAssessment(record).verificationStage, "VS-04");
  assert.equal(getCurrentAssessment(record).verificationStageProvenance, undefined);
});
