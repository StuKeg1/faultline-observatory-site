/** Operator-approved, append-only metadata review. No assessment or historical mutation is rewritten. */
export const ASSESSMENT_MUTATION_REFERENCE_REVIEWS = [
  {
    "recordId": "FR-AI-0001",
    "mutationId": "M-007",
    "assessmentId": "AS-002",
    "reviewDate": "2026-10-19",
    "disposition": "linked",
    "expectedMutation": {
      "date": "2026-06-27",
      "field": "assessment_issued",
      "from": "—",
      "to": "ASSESSMENT-ISSUED",
      "note": "ASSESSMENT-002 issued. Pressure state: ESCALATING (sustained). Triggering instance: INST-006. Part of RELEASE-004 / TRIAL-001."
    },
    "sourceCommit": "62d47054e6fe16e3d9fde2776247e6b7642f7170",
    "note": "Original commit introduces this mutation and assessment together. This reviewed association preserves the original mutation and recorded event date; it does not reaffirm the assessment."
  },
  {
    "recordId": "FR-AM-0006",
    "mutationId": "M-009",
    "assessmentId": "AS-002",
    "reviewDate": "2026-10-19",
    "disposition": "linked",
    "expectedMutation": {
      "date": "2026-06-27",
      "field": "assessment_issued",
      "from": "—",
      "to": "ASSESSMENT-ISSUED",
      "note": "ASSESSMENT-002 issued. Pressure state: ESCALATING (sustained). Triggering instance: INST-006. Part of RELEASE-004 / TRIAL-001."
    },
    "sourceCommit": "9ad09a843fab0d1c65f24cbdab49735a42a8f50b",
    "note": "Original commit introduces this mutation and assessment together. This reviewed association preserves the original mutation and recorded event date; it does not reaffirm the assessment."
  },
  {
    "recordId": "FR-AM-0006",
    "mutationId": "M-013",
    "assessmentId": "AS-003",
    "reviewDate": "2026-10-19",
    "disposition": "linked",
    "expectedMutation": {
      "date": "2026-08-29",
      "field": "assessment_issued",
      "from": "—",
      "to": "ASSESSMENT-ISSUED",
      "note": "AS-003 issued after bounded FR-AM-0006 Record Review. Pressure state ESCALATING and VS-03 sustained; IN-007 does not meet the commercial-operation attractor."
    },
    "sourceCommit": "79e2c10534bb25b23cc704f96e98beef0714e721",
    "note": "Original commit introduces this mutation and assessment together. This reviewed association preserves the original mutation and recorded event date; it does not reaffirm the assessment."
  },
  {
    "recordId": "FR-AM-0006",
    "mutationId": "M-015",
    "assessmentId": "AS-004",
    "reviewDate": "2026-10-19",
    "disposition": "linked",
    "expectedMutation": {
      "date": "2026-08-29",
      "field": "assessment_issued",
      "from": "—",
      "to": "ASSESSMENT-ISSUED",
      "note": "AS-004 issued after bounded VS-03 Classification Review. Pressure state ESCALATING retained; Verification Stage corrected from VS-03 to VS-02 because METI supply-plan certification is not independent claim-level technical audit."
    },
    "sourceCommit": "0e06495b002d15796f5bda5356dcec5752bbc616",
    "note": "Original commit introduces this mutation and assessment together. This reviewed association preserves the original mutation and recorded event date; it does not reaffirm the assessment."
  },
  {
    "recordId": "FR-BT-0004",
    "mutationId": "M-007",
    "assessmentId": "AS-002",
    "reviewDate": "2026-10-19",
    "disposition": "linked",
    "expectedMutation": {
      "date": "2026-06-27",
      "field": "assessment_issued",
      "from": "—",
      "to": "ASSESSMENT-ISSUED",
      "note": "ASSESSMENT-002 issued. Pressure state: FRAGMENTING (sustained). Triggering instance: INST-006. Part of RELEASE-004 / TRIAL-001."
    },
    "sourceCommit": "993a64c02e4b9711966f708e82c3dde916811d87",
    "note": "Original commit introduces this mutation and assessment together. This reviewed association preserves the original mutation and recorded event date; it does not reaffirm the assessment."
  },
  {
    "recordId": "FR-QE-0001",
    "mutationId": "M-003",
    "assessmentId": null,
    "reviewDate": "2026-10-19",
    "disposition": "historical_target_unavailable",
    "expectedMutation": {
      "date": "2024-01-01",
      "field": "assessment_issued",
      "from": "—",
      "to": "Original assessment (approximate)",
      "note": "Original assessment issued. Pressure state: EMERGING (per FR-QE-0002 post-production review reference). Approximate pre-reconstruction entry preserved from S4."
    },
    "sourceCommit": null,
    "note": "No surviving assessment linked. This approximate entry predates the represented reconstruction; the original assessment was lost. AS-001 is the June 2026 reconstruction, not a recovered original. The closed inquiry is not reopened."
  }
];

/** Fail closed if a reviewed source entry or its target no longer matches. */
export function getAssessmentMutationReferenceReview(record, mutation) {
  const matches = ASSESSMENT_MUTATION_REFERENCE_REVIEWS.filter(
    (review) => review.recordId === record.id && review.mutationId === mutation.id,
  );
  if (matches.length !== 1) return null;
  const review = matches[0];
  const original = record.mutationLog?.find((entry) => entry.id === mutation.id);
  const matchesSnapshot = (entry) => entry && Object.entries(review.expectedMutation)
    .every(([key, value]) => entry[key] === value);
  if (!matchesSnapshot(original) || !matchesSnapshot(mutation)) return null;
  if (review.disposition === "linked") {
    const targets = record.assessments.filter((a) => a.id === review.assessmentId);
    if (targets.length !== 1 || targets[0].date !== mutation.date) return null;
  } else if (review.disposition !== "historical_target_unavailable" || review.assessmentId !== null) {
    return null;
  }
  return review;
}

export function getAssessmentMutationReferenceReviews(record) {
  return (record.mutationLog ?? []).flatMap((mutation) => {
    const review = getAssessmentMutationReferenceReview(record, mutation);
    return review ? [review] : [];
  });
}
