/**
 * FR-AM-0003 — Cuprate Superconductivity — Mechanism Identification
 * Programme: PROG-AM
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_AM_0003 = {
  id: "FR-AM-0003",
  programme: "PROG-AM",
  lastProvenanceReview: "2026-09-10",
  provenanceReviewId: "LPR-001-D12",
  provenanceOutcome: "pass_after_correction",
  provenanceRepairStatus: "completed",

  claim: {
    statement: "The mechanism responsible for high-temperature superconductivity in cuprate materials has been identified.",
    shortLabel: "Cuprate Superconductivity — Mechanism Identification",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Bednorz and Müller — high-temperature cuprate superconductivity discovered",
      description: "J. Georg Bednorz and K. Alex Müller reported an abrupt resistivity decrease in the Ba-La-Cu-O system with the highest onset temperature in the 30 K range, launching the cuprate high-temperature-superconductivity field. The result established a new superconducting materials regime but did not by itself determine the microscopic pairing mechanism or categorically exclude all electron-phonon contributions. The mechanism-identification question therefore opens in an EMERGING state.",
      vectors: ["neutral--mechanism-question-opens"],
      date: "1986",
      sources: [
        {
          citation: "Bednorz, J. G. & Müller, K. A. Possible high Tc superconductivity in the Ba-La-Cu-O system. Z. Phys. B 64, 189–193 (1986).",
          url: "https://research.ibm.com/publications/possible-high-tlessinfgreaterclessinfgreater-superconductivity-in-the-ba-la-cu-o-system",
          doi: "10.1007/BF01303701",
        },
      ],
    },
    {
      id: "IN-002",
      qualifiedEvent: "Anderson RVB proposal and competing electronic pairing frameworks",
      description: "Philip Anderson proposed in 1987 that the insulating parent state of the cuprates could be a resonating-valence-bond quantum spin liquid and that doping could yield superconductivity from pre-existing magnetic singlet pairs. The proposal was explicitly predominantly electronic and magnetic while allowing that weak phonon interactions might favour the state. RVB became one of several competing strongly correlated-electron frameworks pursued as the field diversified. No single framework achieved mechanism-level consensus, contributing to a FRAGMENTING trajectory rather than resolving the claim.",
      vectors: ["partial--competing-frameworks-no-consensus"],
      date: "1987 onward",
      sources: [
        {
          citation: "Anderson, P. W. The Resonating Valence Bond State in La2CuO4 and Superconductivity. Science 235, 1196–1198 (1987).",
          url: "https://pubmed.ncbi.nlm.nih.gov/17818979/",
          doi: "10.1126/science.235.4793.1196",
        },
      ],
    },
    {
      id: "IN-003",
      qualifiedEvent: "d-wave pairing symmetry established — major mechanistic constraint",
      description: "Phase-sensitive Josephson-junction experiments, including the 1994 tricrystal-ring work by Tsuei, Kirtley, and colleagues, produced direct evidence consistent with d-wave pairing symmetry in YBa2Cu3O7−δ. Together with other measurements, this established d-wave symmetry as a major empirical constraint on viable cuprate theories. The result excludes a simple conventional isotropic s-wave description, but d-wave symmetry alone does not identify the pairing interaction or categorically exclude every phonon contribution. Electronic frameworks including spin-fluctuation and RVB-based approaches can accommodate d-wave pairing, so the result narrows the mechanism space without resolving it.",
      vectors: ["supportive--partial-constraint-on-mechanism"],
      date: "1994 onward",
      sources: [
        {
          citation: "Tsuei, C. C. et al. Pairing Symmetry and Flux Quantization in a Tricrystal Superconducting Ring of YBa2Cu3O7−δ. Phys. Rev. Lett. 73, 593–596 (1994).",
          url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.73.593",
          doi: "10.1103/PhysRevLett.73.593",
        },
      ],
    },
    {
      id: "IN-004",
      qualifiedEvent: "Pseudogap, competing orders, and phase-diagram complexity deepen the mechanism problem",
      description: "Experiments across the cuprate phase diagram revealed a pseudogap regime, charge-density-wave order, and other intertwined or competing phenomena in addition to d-wave superconductivity. These observations increased the explanatory burden on candidate mechanisms without providing a clean elimination of either spin-fluctuation or RVB-based approaches. Keimer et al. (2015) described a qualitative understanding of the superconducting state alongside major unresolved issues, including the complexity of the phase diagram, collective fluctuations, and anomalous normal-state behaviour. The evidence therefore strengthens the conclusion that mechanism identification remains unresolved rather than establishing a single theory as complete.",
      vectors: ["contesting--mechanism-complexity-exceeds-theories"],
      date: "2005–15",
      sources: [
        {
          citation: "Keimer, B., Kivelson, S. A., Norman, M. R., Uchida, S. & Zaanen, J. From quantum matter to high-temperature superconductivity in copper oxides. Nature 518, 179–186 (2015).",
          url: "https://www.nature.com/articles/nature14165",
          doi: "10.1038/nature14165",
        },
      ],
    },
    {
      id: "IN-005",
      qualifiedEvent: "Hubbard-model benchmarking and cold-atom simulation improve tests of strongly correlated physics",
      description: "From 2015 onward, coordinated numerical benchmarking and cold-atom quantum simulation materially improved the field's ability to test strongly correlated models relevant to cuprates. The Simons Collaboration compared a wide range of numerical methods on the two-dimensional Hubbard model, while Mazurenko et al. (2017) demonstrated long-range antiferromagnetic correlations in a cold-atom Fermi-Hubbard system and framed access to doped regimes as a route toward open questions associated with high-temperature superconductivity. These advances strengthen computational control over candidate models, but neither result directly reproduces cuprate superconductivity or identifies its microscopic pairing mechanism. The record therefore remains unresolved while the available resolution tools improve.",
      vectors: ["partial--improved-tools-unresolved-identification"],
      date: "2015–24",
      sources: [
        {
          citation: "LeBlanc, J. P. F. et al. (Simons Collaboration on the Many-Electron Problem). Solutions of the Two-Dimensional Hubbard Model: Benchmarks and Results from a Wide Range of Numerical Algorithms. Phys. Rev. X 5, 041041 (2015).",
          url: "https://journals.aps.org/prx/abstract/10.1103/PhysRevX.5.041041",
          doi: "10.1103/PhysRevX.5.041041",
        },
        {
          citation: "Mazurenko, A. et al. A cold-atom Fermi-Hubbard antiferromagnet. Nature 545, 462–466 (2017).",
          url: "https://www.nature.com/articles/nature22362",
          doi: "10.1038/nature22362",
        },
      ],
    }
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2024-01-15",
      pressureState: "fragmenting",
      verificationStage: "VS-03",
      summary: "The mechanism responsible for cuprate superconductivity has not been identified in the sense the claim requires. After nearly four decades of intensive research, the field possesses several well-developed theoretical frameworks — spin fluctuation models, RVB and related strongly-correlated electron theories, charge density wave coupling proposals — none of which has achieved sufficient community consensus, predictive completeness, or experimental confirmation to constitute identification. The 2015 Keimer et al. review formally acknowledged that no single theory accounts for all cuprate phenomenology, and that conclusion has not been overturned by subsequent work. The pressure state is FRAGMENTING: this is not fragmentation from diverging evidence across domains, but from genuine theoretical plurality — multiple frameworks that are each partially correct and none of which has been falsified or achieved consensus (BN-001). Quantum simulation of the Hubbard model (AT-001) is the clearest visible resolution path, though it has not yet been executed at a scale sufficient to settle the question.",
      assessorNote: null,
    },
    {
      id: "AS-002",
      date: "2026-09-10",
      pressureState: "fragmenting",
      verificationStage: "VS-03",
      summary: "Editorial consistency assessment following LPR-001-D12. The mechanism responsible for cuprate superconductivity remains unidentified at the level required by the claim. Empirical constraints such as d-wave pairing symmetry are strong, while the pseudogap, competing and intertwined orders, anomalous normal-state behaviour, and strongly correlated modelling remain incompletely unified. RVB-based, spin-fluctuation, Hubbard-model and related approaches remain active without a decisive community-wide mechanism identification. Numerical benchmarking and cold-atom simulation have improved the ability to test candidate models but have not themselves reproduced the full cuprate problem or settled the microscopic pairing interaction. FRAGMENTING / VS-03 is therefore reaffirmed without a status transition.",
      assessorNote: "Append-only replacement rationale for source-fidelity corrections approved after LPR-001-D12; AS-001 retained as historical assessment and not silently rewritten.",
    }
  ],

  mechanisms: [
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Strong correlation intractability. Cuprate superconductors are strongly correlated electron systems: the interactions between electrons are large enough that they cannot be treated as small perturbations to a non-interacting system. This makes exact theoretical treatment computationally intractable for systems of realistic size. Every theoretical framework for cuprate superconductivity is therefore an approximation, and different approximation schemes produce different predictions. The identification problem is partly a computational problem: even if the correct microscopic Hamiltonian is known, extracting predictions from it is not straightforward. This is a structural resistance mechanism — it is not specific to any proposed theory, it constrains all of them.",
    },
    {
      id: "RM-002",
      type: "RESISTANCE MECHANISM",
      description: "Absence of a decisive distinguishing experiment. Competing theoretical frameworks often make overlapping predictions for measurable quantities, making clean discrimination difficult. The d-wave symmetry evidence (IN-003) strongly constrained viable descriptions but did not identify the microscopic pairing interaction. The field therefore still lacks a single experimental result whose interpretation has produced broad mechanism-level convergence.",
    },
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "Identification requires convergence across theory and experiment, not the existence of an individual proposal. The claim requires a mechanism to be accepted as explaining the relevant superconducting behaviour with sufficient predictive and experimental support. No single framework has yet reached that threshold across the cuprate evidence base. The bottleneck is therefore evidential convergence: candidate descriptions must survive discriminating tests and account for the major empirical constraints well enough to support stable community identification.",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Controlled simulation as a potential resolution path. More accurate classical calculations, cold-atom simulators, and future quantum simulations of Hubbard-type models at experimentally relevant parameters could test whether those models reproduce the key cuprate phenomena and distinguish among proposed microscopic explanations. Such capability would reduce the strong-correlation modelling bottleneck, but reproducing a model's behaviour would not by itself prove that one analytical mechanism uniquely explains real cuprate materials. The attractor is therefore a discriminating computational capability rather than a predetermined theoretical outcome.",
    }
  ],

  lineage: {
    items: [
    { year: "1986", text: "Bednorz and Müller report superconducting behaviour in Ba-La-Cu-O with an onset in the 30 K range, opening the cuprate high-temperature-superconductivity field. The microscopic pairing mechanism is not determined by the discovery paper." },
    { year: "1987–90", text: "Theoretical proliferation. Anderson's RVB proposal and multiple other strongly correlated-electron approaches are advanced as possible explanations. Competing frameworks develop without mechanism-level convergence." },
    { year: "1990–2005", text: "Experimental constraint accumulates. d-wave pairing symmetry becomes strongly established and the pseudogap and phase diagram are mapped in increasing detail. These results constrain viable theories without identifying the microscopic pairing interaction." },
    { year: "2005–15", text: "Phase-diagram complexity deepens as charge order and other intertwined phenomena become prominent. By 2015, major reviews describe substantial qualitative understanding alongside unresolved questions about the phase diagram, fluctuations, and anomalous normal-state behaviour." },
    { year: "2015–24", text: "Computational control improves through cross-method Hubbard-model benchmarking and cold-atom simulation. These tools strengthen tests of strongly correlated models but do not yet constitute identification of the cuprate pairing mechanism." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "Can sufficiently controlled Hubbard-model calculations or analogue/quantum simulations at experimentally relevant regimes reproduce the key cuprate constraints and provide a discriminating test among candidate microscopic mechanisms? If so, AT-001 becomes the primary evidence trajectory to watch.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "Does the claim require that a single mechanism explains all cuprate superconductors, or only that the mechanism for the most studied cuprate family (YBCO, BSCCO, LSCO) has been identified? The Scope Note defers this question to evidence, but it may need to be answered before the claim can transition from FRAGMENTING to any resolved state.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "The FRAGMENTING state in this record has a different character from FRAGMENTING in other corpus records. In FR-QE-0002 and FR-AI-0003, fragmentation arose from evidence diverging across domains or failure modes. Here it arises from theoretical plurality — multiple frameworks each partially correct. Is this the same pressure state or a distinct phenomenon within the FRAGMENTING label?",
      raisedDate: "2024-01-15",
    }
  ],

  mutationLog: [
    { id: "M-010", date: "2026-09-10", field: "provenance_correction", from: "LPR-001-D12 discrepancies pending", to: "LPR-001-D12 repaired", note: "Approved bounded provenance repair. Corrected IN-001 through IN-005 for source fidelity, chronology and mechanistic scope; added structured sources[] only for confidently established primary/review sources. Removed the categorical BCS/phonon exclusion from IN-001 and IN-003; narrowed IN-002 to Anderson's source-supported RVB proposal; removed categorical theory-exclusion claims from IN-004; corrected IN-005 chronology to 2015–24 and distinguished Hubbard-model benchmarking and cold-atom antiferromagnetism from direct reproduction of cuprate superconductivity. Append-only AS-002 reaffirms FRAGMENTING / VS-03 with corrected rationale; AS-001 remains intact as historical assessment. RM-002, BN-001, AT-001, lineage and OQ-001 were aligned to the corrected evidence semantics. No 2026 scientific evidence was admitted through this repair; previously flagged 2026 items remain normal Record Review candidates." },
    { id: "M-009", date: "2026-09-10", field: "provenance_review", from: "—", to: "LPR-001-D12", note: "Legacy provenance review completed. All five evidence instances examined. Material source-fidelity or interpretive discrepancies identified in IN-001 through IN-005, so no structured sources were attached in a way that would endorse the legacy wording. IN-001 overstates the 1986 discovery as being above a defined BCS ceiling and as immediately excluding conventional electron-phonon physics; IN-002 mixes sourceable Anderson RVB history with broader unsourced chronology and vocabulary claims; IN-003 correctly records d-wave pairing symmetry but overstates it as ruling out phonon-mediated BCS pairing categorically; IN-004 combines sourceable pseudogap/CDW complexity and the Keimer review with overly categorical statements about what spin-fluctuation and RVB theories can accommodate; IN-005 misdates the Mazurenko 2017 cold-atom result inside a 2019–24 frame and overcompresses Simons/Hubbard benchmarking and what those studies establish about cuprate phenomenology. No factual, interpretive, assessment, pressure-state or verification-stage wording was silently changed. New 2026 work on critical spin fluctuations across LSCO and Hubbard-model pairing dynamics was flagged for normal Record Review and not admitted through LPR-001. Review marked pending governed correction." },
    {"id":"M-008","date":"2026-09-06","field":"description_restored","from":"Legacy ingestion cutoffs: mechanisms:RM-001, mechanisms:RM-002, mechanisms:BN-001, mechanisms:AT-001","to":"Source-restored complete descriptions","note":"Editorial Correction (GP-001), RENDER-PILOT-001 content restoration: restored RM-001, RM-002, BN-001, AT-001 from FR_MF_0003_cuprate_superconductivity_mechanism.html (Drive file 19czOspfLKee1tTark6lti8sr-LBaHObs). Each damaged value was a verified prefix of the recovered source after the existing FR-MF to FR-AM identifier migration. Restored the omitted remainder using the original converter text normalization; no inferred completion. Existing later corrections retained. Restoration recovers historical wording and does not reaffirm it as the current assessment. Assessments, evidence instances, open questions, claim, status and rendering eligibility unchanged. Source hashes and field receipt: docs/reviews/render-pilot-content-restoration.json; current-assessment compatibility review: docs/reviews/RENDER-PILOT-001-CONTENT-RESTORATION.md."},
    // APPEND-ONLY. Newest first.
    { id: "M-007", date: "2026-06-18", field: "record_id_migrated", from: "FR-MF-0003", to: "FR-AM-0003", note: "Programme identity changed. Record identifier migrated to preserve constitutional consistency. FR-MF-* → FR-AM-*. 2026-06-18." },
    { id: "M-006", date: "2024-01-15", field: "programme_panel_added", from: "—", to: "PROGRAMME-PANEL-ADDED", note: "" },
    { id: "M-005", date: "2024-01-15", field: "null_condition_met", from: "—", to: "NULL-CONDITION-MET", note: "" },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" }
  ],

  status: "open",
};
