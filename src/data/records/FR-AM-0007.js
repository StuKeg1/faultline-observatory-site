/**
 * FR-AM-0007 — Pressure-Quenched Superconductivity — Retention of High-Pressure States at Ambient Pressure
 * Programme: PROG-AM
 *
 * Admission: 2026-08-25 bounded FCIF admission review.
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_AM_0007 = {
  id: "FR-AM-0007",
  programme: "PROG-AM",

  claim: {
    statement: "Pressure-quench protocols can stabilise pressure-induced or pressure-enhanced superconducting states at ambient pressure.",
    shortLabel: "Pressure-Quenched Superconductivity — Retention of High-Pressure States at Ambient Pressure",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Early pressure-quench demonstrations — superconducting states retained after decompression",
      description: "A sequence of experiments led by the University of Houston programme reports that superconducting states created or enhanced under high pressure can persist after pressure is released when decompression is performed under controlled low-temperature conditions. Early demonstrations in Sb and FeSe establish the core pressure-quench proposition: the superconducting state need not vanish immediately when the pressure that created or enhanced it is removed. These originating results are supportive but remain concentrated within one research programme and do not by themselves establish broad material generality.",
      vectors: ["supportive--pressure-induced-superconducting-state-retained-after-decompression"],
      date: "2020–22",
      sourceReference: "University of Houston pressure-quench superconductivity programme; peer-reviewed reports in Sb and FeSe",
    },
    {
      id: "IN-002",
      qualifiedEvent: "Cross-material extension — pressure-quench retention reported in additional superconducting systems",
      description: "Subsequent work extends the pressure-quench method beyond the earliest demonstrations, including Cu-doped FeSe and related systems. The repeated observation across distinct material compositions weakens the interpretation that pressure-quench retention is a single-sample or single-material anomaly and supports the existence of a reusable experimental protocol. However, the evidence remains largely programme-internal: cross-material recurrence is stronger than repeated measurement of one specimen but is not equivalent to independent institutional replication.",
      vectors: ["supportive--cross-material-extension-with-originating-group-concentration"],
      date: "2022–24",
      sourceReference: "Pressure-quench protocol studies cited in subsequent PNAS work",
    },
    {
      id: "IN-003",
      qualifiedEvent: "Bi0.5Sb1.5Te3 — pressure-induced superconducting phase retained and recovered at ambient pressure",
      description: "A peer-reviewed PNAS study reports that a pressure-induced superconducting state in Bi0.5Sb1.5Te3 can be retained at ambient pressure using pressure quenching, including recovery of the quenched material from the diamond-anvil-cell environment while preserving the metastable state. This materially strengthens the claim because the method is demonstrated in another material family and because retention survives physical recovery from the pressure apparatus. The result remains subject to the same institutional-concentration limitation: it extends the protocol's material range but does not yet provide unaffiliated replication.",
      vectors: ["supportive--recoverable-metastable-superconducting-phase-at-ambient-pressure"],
      date: "2025",
      sourceReference: "PNAS — pressure-quench retention in Bi0.5Sb1.5Te3",
    },
    {
      id: "IN-004",
      qualifiedEvent: "Hg1223 — ambient-pressure superconducting transition retained up to 151 K after pressure quench",
      description: "A March 2026 PNAS study applies pressure quenching to HgBa2Ca2Cu3O8+δ (Hg1223), whose ordinary ambient-pressure superconducting transition is approximately 133 K. Across multiple samples, the researchers report retained ambient-pressure transition temperatures of approximately 147–151 K after preparation at high pressure, establishing a new ambient-pressure superconducting temperature record. Resistance, magnetic, synchrotron X-ray, and supporting calculations are used to characterise the retained state. The result is strongly supportive of the admitted claim because the pressure-enhanced superconducting state persists after decompression. It does not establish technological ambient-condition usability: the retained state is metastable, degrades with warming, and can lose much of the enhancement after thermal cycling above roughly 200 K.",
      vectors: ["supportive--record-temperature-pressure-enhanced-state-retained-at-ambient-pressure"],
      date: "2026-03",
      sourceReference: "PNAS 2026 — Hg1223 pressure-quench superconductivity, ambient-pressure Tc up to 151 K",
    },
  ],

  assessments: [
    {
      id: "AS-001",
      date: "2026-08-25",
      pressureState: "escalating",
      verificationStage: "VS-03",
      summary: "The claim is supported by a cumulative experimental trajectory rather than a single headline result. Pressure-quench retention has been reported across multiple superconducting materials, culminating in the 2026 Hg1223 result retaining an enhanced transition temperature up to 151 K after decompression. That progression is sufficient to move the claim beyond EMERGING: the phenomenon has recurred across material systems and has been subjected to peer-reviewed experimental characterisation. The pressure state is ESCALATING because the evidence base is expanding in strength and generality while the decisive uncertainties remain open. The principal unresolved issue is independent replication outside the originating research network (RM-002). A second limitation is physical durability: ambient pressure is not equivalent to ambient-condition stability, because the retained Hg1223 state is metastable and degrades on warming (RM-001). Verification Stage is VS-03 — Audit: the published evidence has substantial internal controls and cross-material recurrence, but no unaffiliated laboratory has yet reproduced the pressure-quench effect under a shared protocol. Independent replication (AT-001) is therefore the next evidential boundary.",
      assessorNote: "Admitted following bounded FCIF Admission Review on 2026-08-25. Claim scope is deliberately limited to retention of superconducting states after pressure removal. It does not assert room-temperature superconductivity, commercial usability, permanent ambient-condition stability, or a general law for all pressure-induced quantum states.",
    },
  ],

  mechanisms: [
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Thermal metastability. Pressure quenching can remove the external pressure requirement while leaving the retained superconducting phase dependent on thermal history. In Hg1223, the enhanced state degrades when warmed and can lose much of its transition-temperature enhancement after excursions above roughly 200 K. This is a structural limitation: ambient pressure alone does not establish that the quenched phase can be stored, handled, or cycled under ordinary ambient-temperature conditions.",
    },
    {
      id: "RM-002",
      type: "RESISTANCE MECHANISM",
      description: "Originating-group concentration. The cross-material evidence is stronger than a one-off observation, but the principal demonstrations are concentrated within one research programme and its collaborators. Until an unaffiliated laboratory reproduces pressure-quench retention using a published protocol, programme-specific technique, apparatus, sample preparation, or interpretation remain viable alternative explanations for the apparent generality.",
    },
    {
      id: "RM-003",
      type: "RESISTANCE MECHANISM",
      description: "Protocol and history dependence. The retained state depends on pressure magnitude, quench temperature, decompression path, defects, stoichiometry, and potentially oxygen or vacancy rearrangement. Strong path dependence can make a phenomenon physically real while still preventing reproducible transfer between laboratories or material batches. The claim therefore requires protocol-level reproducibility, not merely repeated positive samples within one experimental lineage.",
    },
    {
      id: "RM-004",
      type: "RESISTANCE MECHANISM",
      description: "Scale and recovery gap. Current demonstrations rely on very small samples processed under diamond-anvil-cell or comparable extreme-pressure conditions. Retaining a superconducting state after decompression does not yet show that useful quantities of material can be produced, recovered, processed, or incorporated into devices without erasing the metastable phase.",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Independent pressure-quench replication. An unaffiliated laboratory reproduces retention of a pressure-induced or pressure-enhanced superconducting state at ambient pressure using a published pressure-quench protocol and independent material preparation. This would remove the largest current verification bottleneck and justify movement beyond VS-03.",
    },
    {
      id: "AT-002",
      type: "ATTRACTOR",
      description: "Thermally durable retained high-Tc state. A pressure-enhanced superconducting state remains stable at ambient pressure through room-temperature handling and subsequent cooling cycles while preserving materially enhanced superconducting properties. This would distinguish pressure removal from genuinely usable ambient-condition retention and would materially change the technological significance of the claim.",
    },
  ],

  lineage: {
    items: [
      { year: "2020–22", text: "Pressure quenching emerges as an experimental method for retaining superconducting states after decompression. Early Sb and FeSe demonstrations establish the proposition but remain narrow in material range and institutional origin." },
      { year: "2022–24", text: "The method is extended across additional superconducting systems. Cross-material recurrence begins to turn pressure quenching from a material-specific observation into a candidate platform technique, while independent replication remains absent." },
      { year: "2025", text: "Bi0.5Sb1.5Te3 demonstrates retention of a pressure-induced superconducting phase at ambient pressure with recovery from the pressure apparatus. The method's scope expands beyond the originating material classes." },
      { year: "2026", text: "Hg1223 pressure quenching retains an enhanced superconducting transition up to 151 K at ambient pressure, setting a new ambient-pressure record and making thermal durability and independent replication the decisive next questions." },
    ],
    relatedRecords: [
      { id: "FR-AM-0003", relationship: "Mechanism-adjacent", note: "Cuprate Superconductivity — tracks identification of the high-temperature cuprate pairing mechanism, not retention of pressure-enhanced states after decompression." },
      { id: "FR-AM-0005", relationship: "Threshold-adjacent", note: "Room-Temperature Superconductivity — tracks reproducible superconductivity at the room-temperature threshold, which the 151 K pressure-quenched Hg1223 result does not satisfy." },
    ],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "Is pressure quenching a broadly general method for trapping metastable superconducting states, or does successful retention depend on a narrow subset of materials with favourable structural or electronic transitions?",
      raisedDate: "2026-08-25",
    },
    {
      id: "OQ-002",
      question: "What physically stabilises the retained state after decompression — defects, strain, oxygen or vacancy rearrangement, electronic reconstruction, or a combination of mechanisms — and can that mechanism predict which materials should be quenchable?",
      raisedDate: "2026-08-25",
    },
    {
      id: "OQ-003",
      question: "Can a pressure-quenched high-Tc state survive room-temperature storage and handling and then recover the same enhanced superconducting properties on subsequent cooling?",
      raisedDate: "2026-08-25",
    },
    {
      id: "OQ-004",
      question: "Can pressure-quench retention be reproduced by an unaffiliated laboratory from a published protocol without tacit knowledge from the originating research programme?",
      raisedDate: "2026-08-25",
    },
  ],

  mutationLog: [
    {
      id: "M-003",
      date: "2026-08-25",
      field: "related_records_corrected",
      from: "bare record identifiers",
      to: "governed related-record objects",
      note: "Schema-shape correction after prerender validation exposed that relatedRecords requires id, relationship, and note fields. FR-AM-0003 and FR-AM-0005 relationships are preserved; no claim, evidence, assessment, pressure state, or verification stage changed.",
    },
    {
      id: "M-002",
      date: "2026-08-25",
      field: "instances_logged",
      from: "—",
      to: "IN-001–IN-004",
      note: "Initial evidence trail logged at admission following the bounded FCIF Admission Review: IN-001 through IN-004 reconstruct the pressure-quench superconductivity trajectory from the early Sb/FeSe demonstrations through the March 2026 Hg1223 result.",
    },
    {
      id: "M-001",
      date: "2026-08-25",
      field: "record_created",
      from: "—",
      to: "RECORD-CREATED",
      note: "FR-AM-0007 admitted following bounded FCIF Admission Review. Initial state ESCALATING; verification stage VS-03. Scope limited to retention of pressure-induced or pressure-enhanced superconducting states at ambient pressure.",
    },
  ],

  status: "open",
};
