/**
 * Evidence Brief — bounded derived-reading-aid prototype.
 *
 * This module intentionally stores no brief prose. It projects existing
 * canonical record fields for the five records judged Compatible in the
 * RENDER-PILOT-001 content review (2026-09-06). The State Warrant remains
 * authoritative; this is neither an assessment nor a publication surface
 * independent of the record.
 */
import { getCurrentAssessment } from "./derive.js";

export const EVIDENCE_BRIEF_COMPATIBLE_RECORD_IDS = new Set([
  "FR-AI-0007",
  "FR-AI-0008",
  "FR-AI-0009",
  "FR-AM-0007",
  "FR-BT-0005",
]);

export function getEvidenceBrief(record) {
  if (!EVIDENCE_BRIEF_COMPATIBLE_RECORD_IDS.has(record.id)) return null;

  const current = getCurrentAssessment(record);
  const attractors = (record.mechanisms ?? []).filter((mechanism) => mechanism.type === "ATTRACTOR");
  const questions = record.openQuestions ?? [];

  // Compatible status is the admission gate for this prototype. The nulls
  // below preserve the rule that a projection never invents a missing field.
  return {
    current,
    evidenceCount: record.instances?.length ?? 0,
    attractors,
    questions,
  };
}
