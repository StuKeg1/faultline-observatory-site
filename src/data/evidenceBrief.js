/**
 * Evidence Brief — bounded derived-reading-aid prototype.
 *
 * Projects canonical fields for reviewed records and provides a dated
 * editorial lead for the FR-QE-0004 trial. The State Warrant retains authority.
 */
import { getCurrentAssessment } from "./derive.js";

export const EVIDENCE_BRIEF_COMPATIBLE_RECORD_IDS = new Set([
  "FR-AI-0007",
  "FR-AI-0008",
  "FR-AI-0009",
  "FR-AM-0007",
  "FR-BT-0005",
  "FR-QE-0004",
]);

export function getEvidenceBrief(record) {
  if (!EVIDENCE_BRIEF_COMPATIBLE_RECORD_IDS.has(record.id)) return null;

  const current = getCurrentAssessment(record);
  const attractors = (record.mechanisms ?? []).filter((mechanism) => mechanism.type === "ATTRACTOR");
  const questions = record.openQuestions ?? [];

  const update = record.id === "FR-QE-0004" && current.id === "AS-005"
    ? record.instances.find((entry) => entry.id === "IN-011")
    : undefined;
  return {
    current: { pressureState: current.pressureState, date: current.date },
    ...(update && {
      whatChanged: {
        evidenceId: update.id,
        date: update.date,
        finding: "The Helios preprint reported that logical memory errors fell as the code distance increased from 3 to 5 to 7 on a trapped-ion processor. FR-QE-0008 cites the same experiment.",
        consequence: "This strengthens the evidence for scaling across hardware platforms. The assessment reaffirmed Resolving (VS-04), with scaling at distance 11 and above still open.",
      },
    }),
    evidenceCount: record.instances?.length ?? 0,
    attractorCount: attractors.length,
    questionCount: questions.length,
  };
}
