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

/**
 * LAD-001 — Historical Assessment Date Semantics.
 *
 * These entries are a deliberately bounded sidecar overlay. They do not
 * rewrite assessment.date in the canonical record. `value` is the public
 * trajectory chronology supported by the cited evidence; `precision`
 * prevents the overlay from implying more temporal certainty than the
 * evidence can carry.
 *
 * FR-AM-0001 is the sole reference implementation. Corpus-wide migration is
 * explicitly out of scope until a separate classification pass is authorised.
 */
export const HISTORICAL_EFFECTIVE_DATES = [
  {
    recordId: "FR-AM-0001",
    assessmentId: "AS-001",
    value: "Mar 1989",
    precision: "month",
    basis: ["IN-001"],
    note: "The originating claim was publicly asserted at the March 1989 Pons–Fleischmann press conference.",
  },
  {
    recordId: "FR-AM-0001",
    assessmentId: "AS-002",
    value: "Apr–Nov 1989",
    precision: "range",
    basis: ["IN-003", "IN-004"],
    note: "Major controlled replication failures accumulated from April 1989 and the first DOE review formalised the negative expert assessment in November 1989.",
  },
  {
    recordId: "FR-AM-0001",
    assessmentId: "AS-003",
    value: "2004 or earlier",
    precision: "upper-bound-year",
    basis: ["IN-006"],
    note: "The second DOE review documents that the claim was already in a collapsed state by 2004; the wording deliberately avoids inventing a sharper transition date.",
  },
];

const HISTORICAL_DATE_INDEX = new Map(
  HISTORICAL_EFFECTIVE_DATES.map((entry) => [
    `${entry.recordId}:${entry.assessmentId}`,
    entry,
  ]),
);

export function getVerificationStageReview(recordId, assessmentId) {
  return REVIEW_INDEX.get(`${recordId}:${assessmentId}`) ?? null;
}

export function getHistoricalEffectiveDate(recordId, assessmentId) {
  return HISTORICAL_DATE_INDEX.get(`${recordId}:${assessmentId}`) ?? null;
}

export function applyVerificationStageReview(recordId, assessment) {
  const review = getVerificationStageReview(recordId, assessment.id);
  const historicalEffectiveDate = getHistoricalEffectiveDate(recordId, assessment.id);

  // Preserve the canonical Observatory assessment date while allowing public
  // trajectory consumers to use a separately governed historical chronology.
  // All current date consumers already pass through this accessor, so the
  // Verification Matrix, State Warrant and record-lineage timeline remain on
  // one chronology without record-specific rendering branches.
  const baseAssessment = historicalEffectiveDate
    ? {
        ...assessment,
        recordedDate: assessment.date,
        date: historicalEffectiveDate.value,
        historicalEffectiveDate: { ...historicalEffectiveDate },
      }
    : { ...assessment };

  if (!review) return baseAssessment;

  const effectiveStage = review.reconstructedStage ?? assessment.verificationStage;
  return {
    ...baseAssessment,
    verificationStage: effectiveStage,
    verificationStageProvenance: {
      storedStage: assessment.verificationStage,
      effectiveStage,
      disposition: review.disposition,
      confidence: review.confidence,
      reviewDate: review.reviewDate,
    },
  };
}
