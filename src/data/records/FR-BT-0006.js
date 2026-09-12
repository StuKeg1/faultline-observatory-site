/**
 * FR-BT-0006 — Bottom-Up Synthetic Cells — Autonomous Cellular Reproduction
 * Programme: PROG-BT
 * Admitted 2026-09-12 following Biotechnology Programme Gap Review and
 * formal New Record Evaluation.
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_BT_0006 = {
  id: "FR-BT-0006",
  programme: "PROG-BT",

  claim: {
    statement: "A cell assembled bottom-up from non-living molecular components can autonomously sustain repeated cycles of genome replication, growth and division while preserving functional biological information across generations.",
    shortLabel: "Bottom-Up Synthetic Cells — Autonomous Cellular Reproduction",
    openedDate: "2026-09-12",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Modular reconstruction — essential cellular functions demonstrated without autonomous integration",
      description: "Bottom-up synthetic-cell research has reconstructed individual cellular functions in artificial compartments, including cell-free gene expression, DNA replication, membrane synthesis, energy regeneration, transport and division-related processes. This cumulative trajectory establishes that important constituents of cellular operation can be engineered from molecular components. It also defines the central evidential boundary: demonstrations of separate modules do not show that one system can coordinate them, replenish its own machinery and repeat a complete reproductive cycle.",
      vectors: ["partial--essential-cellular-modules-reconstructed-without-autonomous-cycle"],
      date: "2010s–25",
      sourceReference: "Fletcher, Diggines and Elani, Nature Chemistry 18 (2026), 'Molecular systems engineering of synthetic cells'",
      sources: [
        {
          citation: "Fletcher, M., Diggines, B. and Elani, Y. (2026), Molecular systems engineering of synthetic cells, Nature Chemistry 18, 14–22.",
          url: "https://www.nature.com/articles/s41557-025-02019-z",
          doi: "10.1038/s41557-025-02019-z",
          locator: "Field synthesis; modular construction approaches; systems-integration constraint",
        },
      ],
    },
    {
      id: "IN-002",
      qualifiedEvent: "Integrated DNA self-replication and lipid biosynthesis in synthetic liposomes",
      description: "Restrepo Sierra et al. engineered phospholipid vesicles in which a synthetic DNA programme directs transcription and translation, self-replicates and produces enzymes for phospholipid synthesis. Across biological replicates, a subset of liposomes displayed simultaneous DNA-replication and membrane-synthesis activity. This is peer-reviewed supportive evidence that genetically encoded modules from different biological sources can operate together inside one bottom-up compartment. The vesicles did not physically grow through the reported lipid synthesis, divide or repeat a complete reproductive cycle, so the governing claim remains unresolved.",
      vectors: ["supportive--genome-replication-and-membrane-synthesis-integrated-in-one-compartment"],
      date: "2026-02-13",
      sourceReference: "Restrepo Sierra et al., Nature Communications 17, 2727 (2026), doi:10.1038/s41467-026-69531-9",
      sources: [
        {
          citation: "Restrepo Sierra, A. M. et al. (2026), A synthetic cell with integrated DNA self-replication and lipid biosynthesis, Nature Communications 17, 2727.",
          url: "https://www.nature.com/articles/s41467-026-69531-9",
          doi: "10.1038/s41467-026-69531-9",
          locator: "Abstract; Introduction; Results, integration of DNArep and PLsyn modules; liposome-growth limitation",
        },
      ],
    },
    {
      id: "IN-003",
      qualifiedEvent: "Chemically defined synthetic-cell system — complete-cycle claim remains preprint evidence",
      description: "Gaut et al. report a chemically defined synthetic-cell architecture encoded by a 90-kb genome, with resource acquisition, transcription, translation, genome replication, growth and genetically encoded division. The preprint also reports selection across multiple generations. This materially strengthens the proposition that the required functions can be brought into one engineered system. It does not resolve the claim: the work has not yet completed peer review or independent replication, and its multi-generation selection workflow uses externally imposed mechanical division while genetically encoded division is demonstrated separately. Autonomous repeated reproduction without serial experimental intervention therefore remains unestablished.",
      vectors: ["partial--integrated-cell-cycle-claimed-with-preprint-and-intervention-boundaries"],
      date: "2026-07-02",
      sourceReference: "Gaut et al., bioRxiv preprint 2026.07.01.735724, doi:10.64898/2026.07.01.735724",
      sources: [
        {
          citation: "Gaut, N. J. et al. (2026), A Chemically Defined Synthetic Cell Capable Of Growth And Replication, bioRxiv preprint 2026.07.01.735724.",
          url: "https://www.biorxiv.org/content/10.64898/2026.07.01.735724v1",
          doi: "10.64898/2026.07.01.735724",
          locator: "Abstract; system architecture; growth and division experiments; multi-generation selection protocol; stated limitations",
        },
      ],
    },
    {
      id: "IN-004",
      qualifiedEvent: "Systems-engineering analysis — complexity and module coupling resist autonomous operation",
      description: "Contemporary field analysis identifies molecular integration, module compatibility, resource competition, physicochemical stability and increasing system complexity as active barriers to bottom-up synthetic-cell construction. Adding individually functional modules can change the operating conditions and performance of the modules already present; rational assembly therefore becomes more restrictive as a system approaches cellular complexity. This is contesting evidence against a simple additive path from demonstrated parts to a self-sustaining reproductive system, while preserving the possibility that systems-engineering and evolutionary approaches can overcome the constraint.",
      vectors: ["contesting--module-coupling-and-system-complexity-block-autonomous-integration"],
      date: "2026-01",
      sourceReference: "Fletcher, Diggines and Elani, Nature Chemistry 18 (2026), 'Molecular systems engineering of synthetic cells'",
      sources: [
        {
          citation: "Fletcher, M., Diggines, B. and Elani, Y. (2026), Molecular systems engineering of synthetic cells, Nature Chemistry 18, 14–22.",
          url: "https://www.nature.com/articles/s41557-025-02019-z",
          doi: "10.1038/s41557-025-02019-z",
          locator: "Systems-engineering framework; module integration; complexity and compatibility constraints",
        },
      ],
    },
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2026-09-12",
      pressureState: "emerging",
      verificationStage: "VS-02",
      summary: "The claim enters the corpus with a durable, cumulative evidence trajectory. Essential cellular modules have been reconstructed separately, and the 2026 peer-reviewed integration of gene expression, DNA self-replication and phospholipid synthesis in one liposome shows that multiple genetically encoded functions can operate together. A July 2026 preprint goes further by reporting a chemically defined 90-kb system with resource acquisition, genome replication, growth, division and selection. That result is materially supportive but remains provisional: it is not peer-reviewed or independently replicated, and autonomous genetically encoded division is not yet coupled to the reported multi-generation selection workflow without mechanical intervention. Field-level analysis continues to identify module compatibility, resource competition, homeostasis and reproductive robustness as active constraints. The Pressure State is EMERGING because evidence is accumulating towards integrated cellular construction, but the complete claim has not yet generated sufficiently mature independent audit or replication for ESCALATING. Verification Stage is VS-02 because peer-reviewed publication establishes important integrated functions while autonomous repeated cellular reproduction remains unverified.",
      assessorNote: "Admitted following the Biotechnology Programme Gap Review and formal New Record Evaluation completed on 2026-09-12. The record is deliberately bounded to bottom-up systems assembled from non-living molecular components and to reproductive continuity. Genome-minimised cells, rewritten natural organisms, generic protocells and cell-free production systems are outside scope unless they provide direct comparative evidence about a governing bottleneck. The July 2026 Gaut et al. result is retained as preprint evidence and does not independently satisfy the record attractor.",
    },
  ],

  mechanisms: [
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "Functional integration and coordination. Genome replication, transcription, translation, metabolism, membrane growth and division must operate in the same compartment at compatible rates and physicochemical conditions. Success of each module in isolation does not establish that their resource demands, products and timing remain mutually compatible when combined. This is the load-bearing bottleneck between modular reconstruction and an autonomous reproductive cell cycle.",
    },
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Energetic and metabolic dependence. Current bottom-up systems rely on externally prepared translation machinery, energy substrates, metabolites, membrane precursors or periodic feeding. A system may perform several cellular functions while remaining unable to regenerate the resources and molecular machinery required for continued operation. Experimental feeding can support the claim only to the extent that it supplies environmental resources rather than reconstructing essential internal machinery between cycles.",
    },
    {
      id: "RM-002",
      type: "RESISTANCE MECHANISM",
      description: "Reproductive fragility and partition error. Membrane division is not equivalent to reproduction unless daughter compartments inherit a functional genome and enough molecular machinery to continue operating. Loss, dilution or unequal partitioning of essential components can allow one engineered cycle while preventing sustained multi-generational continuity.",
    },
    {
      id: "RM-003",
      type: "RESISTANCE MECHANISM",
      description: "System heterogeneity and low active yield. Synthetic compartments assembled from the same components can show widely different module activity because loading, substrate supply and expression vary between vesicles. The 2026 integrated liposome study found joint DNA-replication and lipid-synthesis activity only in a subset of compartments. Reliable reproduction requires the integrated phenotype to persist at system level rather than appearing in a small, selected fraction.",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Autonomous multi-generational synthetic-cell reproduction. A chemically defined bottom-up system repeatedly maintains a membrane-bounded cellular state, processes environmental resources, replicates its genetic information, produces the cellular components required for continued function, grows, divides into functional daughters and transmits its genetic programme across multiple generations without serial experimental reconstruction of essential cellular machinery. Independent replication and heritable variation affecting reproductive fitness would provide stronger resolution evidence.",
    },
  ],

  lineage: {
    items: [
      { year: "2010s–25", text: "Bottom-up programmes reconstruct individual cellular functions in artificial compartments, including gene expression, genome replication, energy regeneration, membrane synthesis and division-related machinery. The field establishes modular feasibility but not an integrated reproductive cycle." },
      { year: "2026-01", text: "Systems-engineering analysis formalises the integration problem: growing biochemical complexity creates module coupling, resource competition and stability constraints that cannot be inferred from isolated component performance." },
      { year: "2026-02", text: "A peer-reviewed synthetic liposome integrates transcription and translation, self-replication of a synthetic DNA programme and phospholipid biosynthesis. Multiple genetically encoded modules now operate together, but the compartments do not grow and divide." },
      { year: "2026-07", text: "A preprint reports a chemically defined 90-kb system combining resource acquisition, genome replication, growth, genetically encoded division and multi-generation selection. The strongest complete-cycle interpretation remains bounded by preprint status and experimental intervention between generations." },
      { year: "2026 onward", text: "The decisive frontier is autonomous continuity: whether one bottom-up system can coordinate its functions, divide into viable daughters and repeat the cycle without serial reconstruction of essential machinery, followed by independent replication." },
    ],
    relatedRecords: [
      { id: "FR-BT-0005", relationship: "Biological-engineering neighbour", note: "Gene-edited porcine kidneys begin with naturally developed living organs and test durable function in humans; this record instead tests whether a reproducing cellular system can be assembled bottom-up from molecular components." },
    ],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "Which externally supplied resources should count as an ordinary environment for a synthetic cell, and which interventions constitute experimental reconstruction of essential cellular machinery?",
      raisedDate: "2026-09-12",
    },
    {
      id: "OQ-002",
      question: "Can genetically encoded division be coupled to genome replication, component production and functional inheritance across repeated generations without mechanical division?",
      raisedDate: "2026-09-12",
    },
    {
      id: "OQ-003",
      question: "What number of uninterrupted generations and what daughter-cell viability threshold should satisfy the record's requirement for sustained reproduction?",
      raisedDate: "2026-09-12",
    },
    {
      id: "OQ-004",
      question: "Can an integrated synthetic-cell architecture remain functional without selecting a small active subpopulation from a heterogeneous compartment ensemble?",
      raisedDate: "2026-09-12",
    },
    {
      id: "OQ-005",
      question: "Should heritable variation under selection be required to resolve the governing claim, or treated as stronger evidence beyond autonomous reproductive continuity?",
      raisedDate: "2026-09-12",
    },
  ],

  mutationLog: [
    // APPEND-ONLY. Newest first.
    { id: "M-005", date: "2026-09-12", field: "diagnosis_held", from: "—", to: "DIAGNOSIS-HELD", note: "Admission diagnosis: EMERGING / VS-02. Integrated cellular functions are established in peer-reviewed work; autonomous repeated reproduction remains provisional and unreplicated." },
    { id: "M-004", date: "2026-09-12", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "BN-001, RM-001, RM-002, RM-003 and AT-001 recorded from the admission evidence package." },
    { id: "M-003", date: "2026-09-12", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "AS-001 issued. Pressure State: EMERGING. Verification Stage: VS-02." },
    { id: "M-002", date: "2026-09-12", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "IN-001 through IN-004 admitted as the initial evidence set with source-level structured provenance." },
    { id: "M-001", date: "2026-09-12", field: "record_created", from: "—", to: "RECORD-CREATED", note: "FR-BT-0006 admitted following Biotechnology Programme Gap Review and formal New Record Evaluation." },
  ],

  status: "open",
};
