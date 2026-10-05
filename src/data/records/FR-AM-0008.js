/**
 * FR-AM-0008 — Type-I Superconductivity — Intrinsic Time-Reversal Symmetry Breaking in YbSb₂
 * Programme: PROG-AM
 * Admission and commitments: docs/reviews/ADMISSION-2026-10-04-FR-AM-0008.md
 * assessments[] oldest-first; mutationLog[] newest-first; current state derived.
 */
export const FR_AM_0008 = {
  id: "FR-AM-0008",
  programme: "PROG-AM",
  lastProvenanceReview: "2026-10-05",
  provenanceReviewId: "LPR-001-D42",
  provenanceOutcome: "verified",
  provenanceRepairStatus: "not_required",

  claim: {
    statement: "The bulk type-I superconducting state of YbSb₂ intrinsically breaks time-reversal symmetry.",
    shortLabel: "Type-I Superconductivity — Intrinsic Time-Reversal Symmetry Breaking in YbSb₂",
    openedDate: "2026-10-04",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Historical YbSb₂ characterisation — type-I baseline and conventional interpretation",
      description: "Zhao et al. characterised YbSb₂ as a type-I superconductor near 1.3 K, with a conventional BCS interpretation and indications of a possible second superconducting state. This supplies a material baseline and a sample/phase comparison for later work. It does not independently test time-reversal symmetry breaking and is neither confirmation nor a failed replication of the admitted claim.",
      vectors: ["neutral--historical-type-i-baseline-without-trsb-test"],
      date: "2012",
      sourceReference: "Zhao et al., Physical Review B 85, 214526 (2012)",
      sources: [
        {
          citation: "Zhao et al., Type-I superconductivity in YbSb₂ single crystals, Physical Review B 85, 214526 (2012)",
          doi: "10.1103/PhysRevB.85.214526",
          url: "https://arxiv.org/abs/1202.4772",
          locator: "Abstract and superconducting-state characterisation — type-I classification, transition and possible second state",
        },
      ],
    },
    {
      id: "IN-002",
      qualifiedEvent: "Published muon measurements — transition-linked spontaneous internal fields in bulk type-I YbSb₂",
      description: "Kataria et al. report bulk type-I superconductivity and transition-linked spontaneous internal fields from muon measurements, supporting intrinsic time-reversal symmetry breaking. The preprint and journal article form one experimental source family. Independent replication was not verified. The accessible evidence comprises the primary manuscript and final journal abstract; the final full text and supplement were unavailable. Pairing and topological interpretations remain separate from the measured signature.",
      vectors: ["supportive--published-trsb-signature-with-originating-lineage-concentration"],
      date: "2026-09-23",
      sourceReference: "Kataria et al., Physical Review Letters 137, 136002; arXiv:2601.07460v1",
      sources: [
        {
          citation: "Kataria et al., Observation of Time-Reversal Symmetry Breaking in the Type-I Superconductor YbSb₂, Physical Review Letters 137, 136002 (2026)",
          doi: "10.1103/drzq-lfn5",
          url: "https://journals.aps.org/prl/abstract/10.1103/drzq-lfn5",
          locator: "Final abstract and publication metadata — published 23 September 2026; qualified topological interpretation",
        },
        {
          citation: "Kataria et al., Observation of Time-Reversal Symmetry Breaking in the Type-I Superconductor YbSb₂, arXiv:2601.07460v1 (submitted 12 January 2026)",
          url: "https://arxiv.org/html/2601.07460v1",
          locator: "Experimental results — bulk/type-I characterisation and zero-/longitudinal-field muon measurements; accessible manuscript of the same source family",
        },
        {
          citation: "Kataria, Time-reversal symmetry breaking in nonsymmorphic type-I superconductor YbSb₂, 15th International Conference on Muon Spin Rotation, Relaxation and Resonance, presented 28 August 2022",
          url: "https://indico.stfc.ac.uk/event/53/contributions/3678/",
          locator: "Contribution description and presentation schedule — earlier central-claim disclosure in the same research lineage; dataset identity unresolved, no additional independent confirmation counted",
        },
      ],
    },
  ],

  assessments: [
    {
      id: "AS-001",
      date: "2026-10-04",
      pressureState: "emerging",
      verificationStage: "VS-02",
      summary: "Published measurements support intrinsic time-reversal symmetry breaking in the bulk type-I superconducting state of YbSb₂, but the result remains concentrated within the originating research lineage. Earlier material characterisation is a comparison baseline, not independent verification. EMERGING / VS-02 reflects credible published evidence with unresolved intrinsic-origin and reproducibility tests. The specific pairing mechanism and topological interpretation remain separate questions.",
      assessorNote: "Admitted following the bounded Materials Scout and new-record admission review, authorised on 4 October 2026. MC-01–MC-04 require same-state coexistence, intrinsic origin, transition association and reproducibility under specified conditions. The 2022 presentation, January preprint and September publication do not count as three independent confirmations. No retrospective institutional assessment is created. This article review does not establish an independent data/method audit or VS-03. No claim of Majorana detection or computational utility is admitted.",
    },
  ],

  mechanisms: [
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Intrinsic-origin discrimination. Residual or trapped fields, contamination, unrelated magnetic order, minority phases, holder effects and probe-induced behaviour must be distinguished from superconducting-state symmetry breaking. A credible alternative accounting for the signature would weaken the claim even if ordinary type-I superconductivity remains intact.",
    },
    {
      id: "RM-002",
      type: "RESISTANCE MECHANISM",
      description: "Originating-lineage concentration. Disclosure, preprint and journal publication within the same research lineage do not establish unaffiliated replication. Transfer of preparation and measurement to independent laboratories is the principal verification boundary.",
    },
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "Sample and phase comparability. Composition, defects and preparation history must be characterised so that the magnetic signature and bulk type-I classification concern the same phase and conditions. Technically inadequate or unmatched null samples are not automatic refutation; repeated sensitive matched null results would materially weaken the claim.",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Unaffiliated same-state replication. An independent laboratory prepares well-characterised YbSb₂ and reproduces transition-linked TRSB in the same bulk type-I state, with sensitive discriminating controls and a transparent account of alternative explanations. Complementary probes converging on intrinsic origin would strengthen the inference; a particular pairing model need not be established first.",
    },
  ],

  lineage: {
    items: [
      { year: "2012", text: "Type-I material baseline published, with a conventional interpretation and possible second state. No independent TRSB test is supplied." },
      { year: "2022", text: "Kataria's conference presentation on 28 August publicly states the central TRSB claim. It belongs to the originating research lineage; dataset identity with later work remains unresolved." },
      { year: "2026", text: "Preprint submitted 12 January; journal publication on 23 September. These constitute one source family. October news coverage does not reset disclosure chronology." },
      { year: "2026-10-04", text: "Bounded material-state claim admitted to PROG-AM at EMERGING / VS-02. Independent replication remains unverified in the bounded source review." },
    ],
    relatedRecords: [
      { id: "FR-AM-0003", relationship: "Mechanism-adjacent", note: "Cuprate pairing-mechanism identification is a distinct proposition; it does not establish TRSB in YbSb₂." },
      { id: "FR-AM-0005", relationship: "Threshold-adjacent", note: "Room-temperature superconductivity concerns a separate temperature threshold; the YbSb₂ claim does not satisfy it." },
      { id: "FR-AM-0007", relationship: "Protocol-adjacent", note: "Retention of pressure-induced states after decompression is separate from intrinsic symmetry breaking in the YbSb₂ bulk type-I state." },
    ],
  },

  openQuestions: [
    { id: "OQ-001", question: "Does independently prepared YbSb₂ reproduce the reported TRSB signature under matched, adequately sensitive conditions?", raisedDate: "2026-10-04" },
    { id: "OQ-002", question: "Which controls or complementary probes most decisively distinguish intrinsic symmetry breaking from extrinsic fields, minority phases or probe effects?", raisedDate: "2026-10-04" },
    { id: "OQ-003", question: "Do composition, defects or preparation account for the differing historical and current transition/phase observations?", raisedDate: "2026-10-04" },
    { id: "OQ-004", question: "Which pairing descriptions survive complementary experimental constraints? This explanatory question does not broaden the canonical TRSB claim.", raisedDate: "2026-10-04" },
    { id: "OQ-005", question: "What observations would establish or undermine the separately proposed topological surface physics? Modelling alone does not demonstrate surface modes or computing utility.", raisedDate: "2026-10-04" },
  ],

  mutationLog: [
    { id: "M-004", date: "2026-10-05", field: "provenance_review", from: "—", to: "LPR-001-D42", note: "Legacy Provenance Review completed as PASS across both existing evidence instances. Underlying sources and claim representation verified; existing structured provenance is sufficient and no unverifiable attribution was introduced. No factual, interpretive, attribution, or verification-stage discrepancy identified. No genuinely new scientific evidence admitted or flagged for Normal Record Review. Canonical outcome verified / not_required; Pressure State and Verification Stage unchanged." },
    { id: "M-003", date: "2026-10-04", field: "assessment_issued", from: "—", to: "AS-001", note: "Initial governed assessment: EMERGING / VS-02 — Published. Evidence concentration and intrinsic-origin tests limit posture; no independent audit or replication inferred from publication count." },
    { id: "M-002", date: "2026-10-04", field: "instances_logged", from: "—", to: "IN-001–IN-002", note: "Historical baseline and 2026 experimental source family logged with structured provenance. Earlier 2022 disclosure retained without duplicate independent weight; no media-only evidence event." },
    { id: "M-001", date: "2026-10-04", field: "record_created", from: "—", to: "RECORD-CREATED", note: "Operator-authorised bounded admission following Materials Scout and new-record review. Scope and MC-01–MC-04 retained in docs/reviews/ADMISSION-2026-10-04-FR-AM-0008.md; no existing record reassessed." },
  ],

  status: "open",
};
