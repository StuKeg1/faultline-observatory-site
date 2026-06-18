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

  claim: {
    statement: "The mechanism responsible for high-temperature superconductivity in cuprate materials has been identified.",
    shortLabel: "Cuprate Superconductivity — Mechanism Identification",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Bednorz and Müller — cuprate superconductivity discovered; BCS inadequacy established",
      description: "Georg Bednorz and K. Alexander Müller report superconductivity in lanthanum barium copper oxide at 35K — far above the ceiling predicted by BCS theory. The Nobel Prize follows in 1987. The discovery immediately establishes that the conventional BCS phonon-mediated mechanism cannot explain the observed transition temperatures. The mechanism question opens: something other than conventional electron-phonon coupling is responsible. From the first publication, the claim tracked here is in an EMERGING state — the mechanism is unknown, and the field understands it is unknown.",
      vectors: ["neutral--mechanism-question-opens"],
      date: "1986–87",
    },
    {
      id: "IN-002",
      qualifiedEvent: "Anderson RVB theory and spin fluctuation models — competing mechanism proposals",
      description: "Philip Anderson proposes resonating valence bond (RVB) theory (1987), arguing that strong electron correlations in the copper-oxygen planes produce a novel quantum state from which superconductivity emerges. Simultaneously, spin fluctuation models emerge — proposing that magnetic excitations mediate electron pairing in cuprates analogously to how phonons mediate pairing in conventional superconductors. Both frameworks generate large research communities. Neither achieves consensus. The period produces the core theoretical vocabulary still in use: Mott insulator, pseudogap, d-wave symmetry, strange metal. Multiple mechanisms are proposed; none is falsified; none achieves dominance. The claim transitions from EMERGING to FRAGMENTING as the evidence accumulates without converging.",
      vectors: ["partial--competing-frameworks-no-consensus"],
      date: "1987–95",
    },
    {
      id: "IN-003",
      qualifiedEvent: "d-wave symmetry confirmation — partial mechanistic consensus",
      description: "A series of experiments — notably angle-resolved photoemission spectroscopy (ARPES) and phase-sensitive Josephson junction measurements by Tsuei, Kirtley, and colleagues — establish that the pairing symmetry in cuprate superconductors is d-wave rather than the s-wave symmetry of conventional superconductors. This is a significant positive result: it rules out phonon-mediated BCS pairing as a direct explanation and constrains the mechanism to those compatible with d-wave symmetry. Spin fluctuation models and RVB theory both accommodate d-wave symmetry; the result advances both but does not distinguish between them. Community convergence on d-wave symmetry is the strongest partial consensus the field achieves in this period.",
      vectors: ["supportive--partial-constraint-on-mechanism"],
      date: "1993–2000",
    },
    {
      id: "IN-004",
      qualifiedEvent: "Pseudogap problem and charge density wave discovery — mechanism complexity deepens",
      description: "Advanced spectroscopic techniques — scanning tunnelling microscopy, resonant X-ray scattering — reveal the pseudogap phase and charge density wave order as features of underdoped cuprates. These discoveries complicate the mechanism picture: the pseudogap is not predicted by simple spin fluctuation models and is not straightforwardly accommodated by RVB theory either. Charge density wave order competes with superconductivity rather than supporting it, suggesting the mechanism must account for multiple competing ordered states. Keimer et al. (2015, Nature) publish an influential review concluding that no single theory accounts for all cuprate phenomenology. The complexity does not falsify any specific theory but substantially raises the bar for identification: any claimed mechanism must now explain the pseudogap, charge density wave order, d-wave symmetry, and the strange metal phase simultaneously.",
      vectors: ["contesting--mechanism-complexity-exceeds-theories"],
      date: "2005–18",
    },
    {
      id: "IN-005",
      qualifiedEvent: "Hubbard model quantum simulation and computational advances — renewed mechanism pressure",
      description: "Quantum simulation experiments using cold atoms in optical lattices (Mazurenko et al. 2017; subsequent work) and large-scale numerical simulations of the Hubbard model — long believed to capture essential cuprate physics — begin producing results that can be compared directly to cuprate phenomenology. Simons Collaboration on the Many Electron Problem publishes systematic benchmarking of computational methods against the Hubbard model (2020–24). Results are mixed: the Hubbard model reproduces some cuprate features (antiferromagnetism, d-wave pairing tendency) but debates persist about whether it fully captures the pseudogap and strange metal behaviour. The period produces no consensus mechanism identification but substantially improves the theoretical tools available. No leading candidate mechanism has been falsified; none has achieved community identification in the sense the claim requires.",
      vectors: ["partial--improved-tools-unresolved-identification"],
      date: "2019–24",
    }
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2024-01-15",
      pressureState: "fragmenting",
      verificationStage: "VS-03",
      summary: "The mechanism responsible for cuprate superconductivity has not been identified in the sense the claim requires. After nearly four decades of intensive research, the field possesses several well-developed theoretical frameworks — spin fluctuation models, RVB and related strongly-correlated electron theories, charge density wave coupling proposals — none of which has achieved sufficient community consensus, predictive completeness, or experimental confirmation to constitute identification. The 20",
      assessorNote: null,
    }
  ],

  mechanisms: [
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Strong correlation intractability. Cuprate superconductors are strongly correlated electron systems: the interactions between electrons are large enough that they cannot be treated as small perturbations to a non-interacting system. This makes exact theoretical treatment computationally intractable for systems of realistic size. Every theoretical framework for cuprate superconductivity is therefor",
    },
    {
      id: "RM-002",
      type: "RESISTANCE MECHANISM",
      description: "Absence of a decisive distinguishing experiment. The competing theoretical frameworks — spin fluctuations, RVB, charge density wave coupling — make overlapping predictions for most measurable quantities. Identifying an experiment whose outcome would clearly favour one framework over all others has proved difficult. The d-wave symmetry confirmation (INST-003) constrained the mechanism class but did",
    },
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "Identification requires community consensus, not individual proposal. The claim requires that a mechanism has been identified — not merely proposed, not merely consistent with some evidence, but accepted by the research community as the explanation. Community consensus in this field has never been achieved for any single framework. The bottleneck is sociological as well as scientific: even if a fr",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Quantum simulation as potential resolution path. Quantum computers and cold-atom simulators capable of exactly simulating the Hubbard model at relevant system sizes represent the clearest resolution path visible in the current evidence trail. If exact Hubbard model simulation demonstrates unambiguously that the model reproduces all cuprate phenomenology, this would constitute strong evidence that ",
    }
  ],

  lineage: {
    items: [
    { year: "1986", text: "Discovery establishes the mechanism question. Bednorz and Müller's result immediately demonstrates that BCS theory is insufficient. The mechanism question is opened as a genuine scientific frontier from the first publication." },
    { year: "1987–90", text: "Theoretical proliferation. RVB theory, spin fluctuation models, and numerous variants are proposed in rapid succession. The field is briefly optimistic that identification is imminent. Optimism fades as predictions diverge and experiments fail to distinguish between frameworks." },
    { year: "1990–2005", text: "Experimental constraint accumulates. d-wave symmetry confirmed. Pseudogap discovered. Phase diagram mapped in detail. Each result constrains the mechanism without identifying it. The field acquires detailed phenomenological knowledge without mechanistic understanding." },
    { year: "2005–15", text: "Complexity deepens. Charge density wave order, pair density waves, and other competing orders discovered. The Keimer et al. review (2015) formally acknowledges that no theory accounts for all cuprate phenomenology. The identification claim is explicitly unmet by field consensus." },
    { year: "2015–24", text: "Computational approaches mature. Quantum simulation and large-scale numerical methods begin producing results comparable to experiments. The Hubbard model is partially validated. The resolution path through computational physics becomes visible without being reached." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "Can exact Hubbard model simulation at relevant system sizes be achieved — by quantum computers, cold atom simulators, or improved classical methods — within a timescale that would constitute a resolution event for this record? If so, AT-001 becomes the primary evidence trajectory to watch.",
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
