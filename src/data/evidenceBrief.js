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
  "FR-BT-0004",
  "FR-BT-0005",
  "FR-QE-0004",
  "FR-QE-0008",
]);

const EVIDENCE_BRIEF_LEADS = {
  "FR-BT-0004": {
    evidenceId: "IN-009",
    evidenceLabel: "PATHFINDER 2 evidence entry",
    finding: "PATHFINDER 2 was a prospective, single-arm screening study in a separate cohort from NHS-Galleri. It measured how often Galleri detected cancer signals and found that the test missed a substantial share of cancers.",
    consequence: "The assessment reaffirmed Fragmenting (VS-04). Whether screening reduces late-stage cancer incidence or mortality, and whether its benefits outweigh its harms, remain open.",
  },
  "FR-QE-0004": {
    evidenceId: "IN-011",
    evidenceLabel: "Helios evidence entry",
    finding: "The Helios preprint measured logical memory errors on a trapped-ion processor. Errors fell as colour-code distance increased from 3 to 5 to 7. FR-QE-0008 cites the same experiment.",
    consequence: "The assessment reaffirmed Resolving (VS-04). The result strengthens evidence for scaling across hardware platforms. Sustained error suppression at distance 11 and above remains open for this record.",
  },
  "FR-QE-0008": {
    evidenceId: "IN-009",
    evidenceLabel: "Helios evidence entry",
    finding: "The Helios preprint measured below-threshold error suppression for logical memory at colour-code distances 3, 5 and 7, and for two-qubit Clifford benchmarks from distance 3 to 5. FR-QE-0004 cites the same experiment.",
    consequence: "The assessment reaffirmed Resolving (VS-04). The experiment extends earlier fixed-distance trapped-ion results. Resource estimates for larger systems remain projections, and sustained universal computation remains open.",
  },
};

export function getEvidenceBrief(record) {
  if (!EVIDENCE_BRIEF_COMPATIBLE_RECORD_IDS.has(record.id)) return null;

  const current = getCurrentAssessment(record);
  const attractors = (record.mechanisms ?? []).filter((mechanism) => mechanism.type === "ATTRACTOR");
  const questions = record.openQuestions ?? [];

  const lead = EVIDENCE_BRIEF_LEADS[record.id];
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
