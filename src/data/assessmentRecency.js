/**
 * Derived assessment-recency semantics for Frontier Records.
 *
 * Assessment recency is deliberately independent from mutation recency and
 * governance-review recency. It answers one narrow question only: when was
 * the claim last substantively assessed in canonical assessments[]?
 */
export function getAssessmentRecency(record) {
  if (!record.assessments || record.assessments.length === 0) {
    throw new Error(`Record ${record.id} has no assessments — structurally invalid.`);
  }

  const latest = record.assessments[record.assessments.length - 1];
  const previous = record.assessments[record.assessments.length - 2] ?? null;

  return {
    date: latest.date,
    type: previous ? "reassessment" : "initial",
    reaffirmation: Boolean(previous && previous.pressureState === latest.pressureState),
  };
}
