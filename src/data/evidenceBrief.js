/**
 * Evidence Brief — bounded derived-reading-aid prototype.
 *
 * Projects canonical fields for reviewed records and provides a dated
 * editorial lead for the trial records. The State Warrant retains authority.
 */
import { getCurrentAssessment } from "./derive.js";

export const EVIDENCE_BRIEF_COMPATIBLE_RECORD_IDS = new Set([
  "FR-AI-0007",
  "FR-AI-0008",
  "FR-AI-0009",
  "FR-AM-0007",
  "FR-BT-0005",
  "FR-QE-0004",
  "FR-QE-0008",
]);

const HELIOS_LEADS = {
  "FR-QE-0004": {
    evidenceId: "IN-011",
    finding: "The Helios preprint reported that logical memory errors fell as the code distance increased from 3 to 5 to 7 on a trapped-ion processor. FR-QE-0008 cites the same experiment.",
    consequence: "This strengthens the evidence for scaling across hardware platforms. The assessment reaffirmed Resolving (VS-04), with scaling at distance 11 and above still open.",
  },
  "FR-QE-0008": {
    evidenceId: "IN-009",
    finding: "The Helios preprint measured below-threshold logical-memory error suppression across colour-code distances 3, 5 and 7 on trapped-ion hardware, extending earlier fixed-distance trapped-ion benchmarks. FR-QE-0004 cites the same experiment.",
    consequence: "The assessment reaffirmed Resolving (VS-04): the measurements strengthen the scaling case across hardware platforms, while larger-scale resource estimates remain projections and sustained universal computation remains unproven.",
  },
};

export function getEvidenceBrief(record) {
  if (!EVIDENCE_BRIEF_COMPATIBLE_RECORD_IDS.has(record.id)) return null;

  const current = getCurrentAssessment(record);
  const attractors = (record.mechanisms ?? []).filter((mechanism) => mechanism.type === "ATTRACTOR");
  const questions = record.openQuestions ?? [];

  const lead = HELIOS_LEADS[record.id];
  const update = lead && current.id === "AS-005"
    ? record.instances?.find((entry) => entry.id === lead.evidenceId)
    : undefined;
  return {
    current: { pressureState: current.pressureState, date: current.date },
    ...(update && { whatChanged: { ...lead, date: update.date } }),
    evidenceCount: record.instances?.length ?? 0,
    attractorCount: attractors.length,
    questionCount: questions.length,
  };
}
