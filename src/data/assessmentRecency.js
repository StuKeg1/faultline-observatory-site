import { getAssessmentHistory } from "./derive.js";

/**
 * Derived assessment-recency semantics for Frontier Records.
 *
 * Assessment recency is deliberately independent from mutation recency and
 * governance-review recency. It answers one narrow question only: when was
 * the claim last substantively assessed in canonical assessments[]?
 *
 * Dates are read through getAssessmentHistory(), never directly from the raw
 * record array. That is the single canonical display path for LAD-001's
 * historical-effective-date overlay, so record header metadata cannot
 * contradict the State Warrant or chronology.
 */
export function getAssessmentRecency(record) {
  const history = getAssessmentHistory(record);
  const latest = history[history.length - 1];
  const previous = history[history.length - 2] ?? null;

  return {
    date: latest.date,
    type: previous ? "reassessment" : "initial",
    reaffirmation: Boolean(previous && previous.pressureState === latest.pressureState),
  };
}
