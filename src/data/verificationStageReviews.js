/**
 * Ratified legacy Verification Stage review overlay.
 *
 * Historical assessments remain immutable. Consumers must use this append-only
 * overlay when interpreting a reviewed assessment's Verification Stage.
 *
 * Authority:
 * Legacy VS Assignment Review — Consolidated Reconstruction and Ratification Package
 * Ratified by the operator on 2026-07-23.
 */

export const LEGACY_VS_REVIEW_AUTHORITY =
  "https://docs.google.com/document/d/1aDpuzdV01cWV9ZOZ17r_R1UbrUDJqUPoKH6b359kJhA/edit";

const REVIEW_DATE = "2026-07-23";

const reviewed = (recordId, assessmentId, storedStage, disposition, reconstructedStage, confidence) => ({
  id: `VSR-${recordId}-${assessmentId}`,
  recordId,
  assessmentId,
  storedStage,
  disposition,
  reconstructedStage,
  confidence,
  reviewDate: REVIEW_DATE,
  authorityUrl: LEGACY_VS_REVIEW_AUTHORITY,
  note:
    disposition === "historically-unverified"
      ? "The converter-flattened date prevents a reliable historical reconstruction. The stored code is preserved but remains historically unverified."
      : "Ratified reconstruction under the canonical evidence-depth meanings; the historical assessment and stored code remain preserved.",
});

export const VERIFICATION_STAGE_REVIEWS = [
  reviewed("FR-AM-0001", "AS-001", "VS-01", "re-affirmed", "VS-01", "high"),
  reviewed("FR-QE-0004", "AS-001", "VS-04", "historically-unverified", null, "low"),
  reviewed("FR-BT-0002", "AS-002", "VS-02", "correction-required", "VS-03", "medium"),
  reviewed("FR-AI-0003", "AS-002", "VS-03", "re-affirmed", "VS-03", "medium-high"),
  reviewed("FR-AM-0005", "AS-002", "VS-05", "correction-required", "VS-04", "high"),
  reviewed("FR-QE-0005", "AS-002", "VS-02", "correction-required", "VS-03", "high"),
  reviewed("FR-AI-0004", "AS-002", "VS-03", "re-affirmed", "VS-03", "high"),
  reviewed("FR-AI-0005", "AS-002", "VS-03", "re-affirmed", "VS-03", "medium-high"),
  reviewed("FR-AM-0004", "AS-002", "VS-02", "correction-required", "VS-03", "high"),
  reviewed("FR-QE-0002", "AS-001", "VS-03", "re-affirmed", "VS-03", "high"),
  reviewed("FR-QE-0003", "AS-001", "VS-02", "historically-unverified", null, "low"),
  reviewed("FR-QE-0005", "AS-001", "VS-02", "historically-unverified", null, "low"),
  reviewed("FR-QE-0006", "AS-001", "VS-02", "historically-unverified", null, "low"),
  reviewed("FR-QE-0007", "AS-001", "VS-03", "historically-unverified", null, "low"),
  reviewed("FR-QE-0008", "AS-001", "VS-04", "historically-unverified", null, "low"),
  reviewed("FR-AI-0001", "AS-001", "VS-02", "historically-unverified", null, "low"),
  reviewed("FR-AI-0002", "AS-001", "VS-02", "historically-unverified", null, "low"),
  reviewed("FR-AI-0003", "AS-001", "VS-03", "historically-unverified", null, "low"),
  reviewed("FR-AI-0004", "AS-001", "VS-03", "re-affirmed", "VS-03", "medium-high"),
  reviewed("FR-AI-0005", "AS-001", "VS-03", "historically-unverified", null, "low"),
  reviewed("FR-AI-0006", "AS-001", "VS-03", "re-affirmed", "VS-03", "medium-high"),
  reviewed("FR-AI-0007", "AS-001", "VS-03", "re-affirmed", "VS-03", "medium"),
  reviewed("FR-AI-0008", "AS-001", "VS-03", "correction-required", "VS-05", "medium"),
  reviewed("FR-AM-0001", "AS-002", "VS-03", "correction-required", "VS-04", "high"),
  reviewed("FR-AM-0001", "AS-003", "VS-05", "correction-required", "VS-04", "high"),
  reviewed("FR-AM-0002", "AS-001", "VS-03", "correction-required", "VS-04", "medium-high"),
  reviewed("FR-AM-0003", "AS-001", "VS-03", "re-affirmed", "VS-03", "high"),
  reviewed("FR-AM-0004", "AS-001", "VS-02", "correction-required", "VS-03", "high"),
  reviewed("FR-AM-0005", "AS-001", "VS-05", "correction-required", "VS-04", "high"),
  reviewed("FR-AM-0006", "AS-001", "VS-02", "correction-required", "VS-03", "medium"),
  reviewed("FR-BT-0001", "AS-001", "VS-02", "correction-required", "VS-03", "medium-high"),
  reviewed("FR-BT-0002", "AS-001", "VS-02", "correction-required", "VS-03", "medium"),
  reviewed("FR-BT-0003", "AS-001", "VS-03", "correction-required", "VS-04", "medium-high"),
  reviewed("FR-BT-0004", "AS-001", "VS-03", "re-affirmed", "VS-03", "high"),
];

const REVIEW_INDEX = new Map(
  VERIFICATION_STAGE_REVIEWS.map((review) => [
    `${review.recordId}:${review.assessmentId}`,
    review,
  ]),
);

export function getVerificationStageReview(recordId, assessmentId) {
  return REVIEW_INDEX.get(`${recordId}:${assessmentId}`) ?? null;
}

export function applyVerificationStageReview(recordId, assessment) {
  const review = getVerificationStageReview(recordId, assessment.id);
  if (!review) return { ...assessment };

  const effectiveStage = review.reconstructedStage ?? assessment.verificationStage;
  return {
    ...assessment,
    verificationStage: effectiveStage,
    verificationStageProvenance: {
      storedStage: assessment.verificationStage,
      effectiveStage,
      disposition: review.disposition,
      confidence: review.confidence,
      reviewDate: review.reviewDate,
      authorityUrl: review.authorityUrl,
    },
  };
}
