/**
 * Evidence Brief — bounded derived-reading-aid prototype.
 *
 * Projects canonical fields for all records and provides a dated
 * editorial lead for the trial records. The State Warrant retains authority.
 */
import { getCurrentAssessment } from "./derive.js";

const EVIDENCE_BRIEF_LEADS = {
  "FR-AI-0001": {
    assessmentId: "AS-003",
    evidenceId: "IN-007",
    evidenceLabel: "IMO evidence entry",
    finding: "OpenAI reported a score of 35 out of 42 on the 2025 International Mathematical Olympiad, matching the official gold-medal threshold.",
    consequence: "The threshold is independently documented. The model score remains company-reported, and uncertainty about training exposure, test conditions and grading leaves generalisation beyond memorised examples open.",
  },
  "FR-AI-0008": {
    assessmentId: "AS-004",
    evidenceId: "IN-006",
    evidenceLabel: "MASAI evidence entry",
    finding: "In the Swedish MASAI screening trial, AI-supported mammography reading had non-inferior interval-cancer performance, higher sensitivity and unchanged specificity compared with standard double reading.",
    consequence: "The assessment now recognises that the existing evidence tested AI in an operating screening programme. Dependable transfer across imaging tasks, populations and implementations remains open.",
  },
  "FR-AI-0009": {
    assessmentId: "AS-002",
    evidenceId: "IN-009",
    evidenceLabel: "VR-to-robot evidence entry",
    finding: "A preprint found that cues extracted from purpose-built VR gameplay helped a physical robot learn selected manipulation tasks with a few real-robot demonstrations.",
    consequence: "The result supports transfer in that setup. Whether ordinary gameplay can train a world model that supports reliable action across unfamiliar tasks, environments and robots remains open.",
  },
  "FR-AM-0004": {
    assessmentId: "AS-008",
    evidenceId: "IN-011",
    evidenceLabel: "Helion analyses",
    finding: "Two theoretical studies examined assumptions behind Helion’s pulsed fusion concept, identifying demanding conditions for maintaining different ion and electron temperatures, confining the plasma and balancing energy flows.",
    consequence: "The conclusions depend on modelling assumptions for that design. A plant demonstrating net electricity at grid scale and commercial viability remains the test of the broader claim.",
  },
  "FR-AM-0005": {
    assessmentId: "AS-005",
    evidenceId: "IN-007",
    evidenceLabel: "Semenok evidence entry",
    finding: "Semenok and colleagues reported no near-room-temperature superconductivity across seven La–Sc alloy-precursor synthesis attempts.",
    consequence: "Their precursor differed from the original preparation, leaving reproducibility under that exact method open. The assessment now reflects how far independent replication attempts tested the claim.",
  },
  "FR-AM-0006": {
    assessmentId: "AS-005",
    evidenceId: "IN-007",
    evidenceLabel: "QuantumScape pilot-line evidence",
    finding: "QuantumScape reported producing initial QSE-5 cells and shipping samples from its automated pilot line.",
    consequence: "That tests one step toward larger-scale manufacturing. Meeting energy-density, safety, cycle-life, yield and cost requirements together at commercial scale remains open.",
  },
  "FR-AM-0007": {
    assessmentId: "AS-001",
    evidenceId: "IN-004",
    evidenceLabel: "Hg1223 evidence entry",
    finding: "Researchers reported that pressure-quenched Hg1223 retained a superconducting transition up to 151 K after decompression.",
    consequence: "That supports retention at ambient pressure. The retained state degrades on warming, and independent replication under a shared protocol remains open.",
  },
  "FR-BT-0003": {
    assessmentId: "AS-004",
    evidenceId: "IN-004",
    evidenceLabel: "Biomarker validation evidence",
    finding: "Longitudinal studies found that blood-based methylation biomarker scores were associated with later outcomes at the population level.",
    consequence: "The assessment now recognises that the population-level association was reproduced. Dependable, externally calibrated predictions for individual people without symptoms, and whether acting on them improves health, remain open.",
  },
  "FR-BT-0005": {
    assessmentId: "AS-002",
    evidenceId: "IN-008",
    evidenceLabel: "Xenokidney follow-up evidence",
    finding: "A peer-reviewed follow-up documented nearly nine months of dialysis independence in one recipient of a gene-edited pig kidney. The graft later failed after immunosuppression was reduced during an infection.",
    consequence: "The case extends the documented duration of function for that recipient. Reproducing durable function across recipients with a clinically acceptable treatment burden remains open.",
  },
  "FR-BT-0007": {
    assessmentId: "AS-001",
    evidenceId: "IN-005",
    evidenceLabel: "Independent home-use evidence",
    finding: "One participant with ALS used an implanted speech-and-cursor interface independently at home for more than 3,800 hours over nearly two years.",
    consequence: "That documents sustained everyday use for one participant. Comparable reliability across participants and centres remains open.",
  },
  "FR-QE-0001": {
    assessmentId: "AS-002",
    evidenceId: "IN-004",
    evidenceLabel: "Classical Sycamore benchmark",
    finding: "Zhao and colleagues reported a classical simulation that surpassed Sycamore’s random circuit sampling benchmark on the reported comparison.",
    consequence: "The later result supersedes the benchmark advantage. Whether the original task was beyond practical classical reach in 2019 remains open.",
  },
  "FR-QE-0007": {
    assessmentId: "AS-003",
    evidenceId: "IN-006",
    evidenceLabel: "Quantum Echoes evidence entry",
    finding: "Quantum Echoes reported a quantum speed advantage on large benchmark circuits. A related study demonstrated molecular-geometry estimation at smaller scales.",
    consequence: "The two results support different parts of the claim. Whether the performance advantage holds for a practically relevant application at the same demonstrated scale remains open.",
  },
  "FR-BT-0004": {
    assessmentId: "AS-005",
    evidenceId: "IN-009",
    evidenceLabel: "PATHFINDER 2 evidence entry",
    finding: "PATHFINDER 2 tested Galleri in adults aged 50 or older with no clinical suspicion of cancer. Galleri detected 39.3% of cancers diagnosed within 12 months, and 60.3% of positive results were confirmed as cancer.",
    consequence: "The single-arm study leaves open whether, and by how much, Galleri detects cancer earlier than usual care. Beyond the detection claim, effects on late-stage cancer, mortality and net benefit remain open. The assessment reaffirmed Fragmenting.",
  },
  "FR-QE-0004": {
    assessmentId: "AS-005",
    evidenceId: "IN-011",
    evidenceLabel: "Helios evidence entry",
    finding: "The Helios preprint measured logical memory errors on a trapped-ion processor. Errors fell as colour-code distance increased from 3 to 5 to 7. FR-QE-0008 cites the same experiment.",
    consequence: "The assessment reaffirmed Resolving. The result strengthens evidence for scaling across hardware platforms. Sustained error suppression at distance 11 and above remains open for this record.",
  },
  "FR-QE-0008": {
    assessmentId: "AS-005",
    evidenceId: "IN-009",
    evidenceLabel: "Helios evidence entry",
    finding: "The Helios preprint measured below-threshold error suppression for logical memory at colour-code distances 3, 5 and 7, and for two-qubit Clifford benchmarks from distance 3 to 5. FR-QE-0004 cites the same experiment.",
    consequence: "The assessment reaffirmed Resolving. The experiment extends earlier fixed-distance trapped-ion results. Resource estimates for larger systems remain projections, and sustained universal computation remains open.",
  },
};

// Editorial orientation only. These are bounded readings of the identified
// current assessment, not additional evidence, assessments or claim revisions.
const NEWCOMER_FINDINGS = {
  "FR-QE-0007": {
    assessmentId: "AS-003",
    supported: "Quantum computers have demonstrated strong performance on certain benchmark tasks, and separate work has explored scientifically useful applications.",
    uncertain: "No admitted result yet shows a durable advantage over classical methods on a practically relevant task at the same demonstrated scale.",
    why: "Fragmenting: evidence supports different parts of the claim, but not both together.",
  },
  "FR-BT-0004": {
    assessmentId: "AS-005",
    supported: "Galleri can detect some cancer signals in people without a prior cancer diagnosis, with high specificity in the reported studies.",
    uncertain: "The test misses many cancers; whether detecting them earlier than usual care improves late-stage outcomes, survival or overall benefit has not been established.",
    why: "Fragmenting: detecting some cancers is supported, but 'reliably' is constrained by limited sensitivity; clinical benefit is a separate, broader question, not an added condition of the stated detection claim.",
  },
  "FR-AM-0005": {
    assessmentId: "AS-005",
    supported: "Prominent reported candidates have not met the independent reproducibility standard for the claimed room-temperature capability.",
    uncertain: "Negative tests of particular candidates and preparation methods do not prove room-temperature superconductivity physically impossible or rule out every untested method.",
    why: "Collapsed applies to the represented reproducibility claims, not to the possibility of the phenomenon. Historical VS-05 entries were corrected to VS-04 because testing a candidate is not operation of a reproduced capability.",
  },
};

export function getEvidenceBrief(record) {
  const current = getCurrentAssessment(record);
  const attractors = (record.mechanisms ?? []).filter((mechanism) => mechanism.type === "ATTRACTOR");
  const questions = record.openQuestions ?? [];

  const lead = EVIDENCE_BRIEF_LEADS[record.id];
  const update = lead && current.id === lead.assessmentId
    ? record.instances?.find((entry) => entry.id === lead.evidenceId)
    : undefined;
  return {
    current: { pressureState: current.pressureState, date: current.date },
    ...(update && { whatChanged: { ...lead, date: update.date } }),
    ...(NEWCOMER_FINDINGS[record.id]?.assessmentId === current.id && { newcomerFinding: NEWCOMER_FINDINGS[record.id] }),
    evidenceCount: record.instances?.length ?? 0,
    attractorCount: attractors.length,
    questionCount: questions.length,
  };
}
