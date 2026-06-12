/**
 * FR-QE-0007 — Practical Quantum Advantage — Performance Beyond Classical Computation on Relevant Problems
 * Programme: PROG-QE
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_QE_0007 = {
  id: "FR-QE-0007",
  programme: "PROG-QE",

  claim: {
    statement: "A quantum computer has achieved quantum advantage on a practically relevant problem.",
    shortLabel: "Practical Quantum Advantage — Performance Beyond Classical Computation on Relevant Problems",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Google Sycamore — \"quantum supremacy\" on random circuit sampling",
      description: "Arute et al. (Google, 2019, Nature) report that their 53-qubit Sycamore processor completes a random circuit sampling task in 200 seconds that they estimate would require 10,000 years on Summit, the world's fastest supercomputer at the time. They claim this demonstrates \"quantum supremacy.\" IBM immediately contests the 10,000-year estimate, arguing that their classical simulation methods can complete the task in 2.5 days. Subsequent classical algorithm improvements reduce the estimated classical time further; Pan, Chen, and Zhang (2022) demonstrate classical simulation of Sycamore-class circuits in hours on a GPU cluster. Random circuit sampling has no known practical application — it was designed as a demonstration task. For this record: the quantum advantage claim is genuine and was demonstrated at the time of publication; the practical relevance claim is not satisfied — random circuit sampling has no identified application where this speedup produces tangible benefit.",
      vectors: ["partial--advantage-demonstrated-practical-relevance-absent"],
      date: "Oct 2019",
    },
    {
      id: "IN-002",
      qualifiedEvent: "Boson sampling experiments — photonic quantum advantage",
      description: "Multiple groups (USTC China with Jiuzhang, Xanadu with Borealis) demonstrate quantum advantage in Gaussian boson sampling — a photonic computational task. USTC reports sampling rates 10^14 times faster than classical simulation. These results claim quantum advantage more robustly than Sycamore: the classical simulation of boson sampling at demonstrated scales is harder and the results have proven more difficult to classically reproduce. However, boson sampling also lacks known practical applications — it was proposed as a demonstration problem. The practical relevance component is again absent. The record notes these as stronger advantage demonstrations than Sycamore but still not satisfying the claim as scoped: advantage without relevant application.",
      vectors: ["partial--stronger-advantage-practical-relevance-still-absent"],
      date: "2020–23",
    },
    {
      id: "IN-003",
      qualifiedEvent: "IBM quantum utility — kicked Ising model and the classical simulation dispute",
      description: "Kim et al. (IBM, 2023, Nature) report that a 127-qubit Eagle processor produces results on a kicked Ising model simulation that classical simulation cannot match within a reasonable time budget using standard methods. The paper explicitly uses the term \"quantum utility\" rather than \"quantum advantage,\" acknowledging that the task is not a practical application but claiming it demonstrates quantum computation producing useful results beyond classical reach. The kicked Ising model has connections to quantum many-body physics that give it some scientific relevance, though it is not a directly applied problem. Tindall et al. (2023) and others immediately demonstrate that tensor network methods can classically simulate the same circuits. The dispute is not about whether IBM's measurements were correct but about whether the classical simulation was optimal. The record notes this as the closest to practical relevance in the current evidence, while acknowledging that the dispute is ongoing and the problem's practical value is limited.",
      vectors: ["partial--scientific-relevance-partial-classical-simulation-contested"],
      date: "2023",
    },
    {
      id: "IN-004",
      qualifiedEvent: "Google Willow — below-threshold error correction and quantum simulation",
      description: "Google's Willow chip (Nature 2024) demonstrates below-threshold error correction (documented in FR-QE-0004) and also performs a random circuit sampling task at a scale and speed that the Google team claims exceeds any plausible classical simulation. The claim of classical simulation intractability is stronger than for Sycamore: the circuit depth and qubit count are substantially larger. However, random circuit sampling remains a task with no direct practical application. The Willow result is the most technically impressive quantum advantage demonstration to date on a demonstration problem. It does not satisfy the practical relevance component of this record's claim. It does establish that the gap between quantum and classical simulation capacity is widening rather than closing for these demonstration tasks, which is evidence that fault-tolerant practical advantage (FR-QE-0006) is on a credible trajectory.",
      vectors: ["partial--strongest-advantage-demonstration-practical-relevance-still-absent"],
      date: "2024",
    },
    {
      id: "IN-005",
      qualifiedEvent: "Quantum simulation of physical systems — approaching practical relevance",
      description: "Multiple groups demonstrate quantum simulation results on physically motivated systems approaching practical relevance. Google's quantum simulation of a superconducting material phase transition (Mi et al. 2022, Nature), IBM's quantum chemistry calculations on small molecules, and Quantinuum's quantum simulation of hydrogen chain dynamics all produce results that bear on scientifically relevant problems. None unambiguously exceeds classical simulation capability on a problem with direct practical application at the scale demonstrated. The IBM hydrogen chain calculations are classically simulable with modest resources at the demonstrated scale; the Google phase transition simulation provides useful scientific insight but is not clearly beyond classical reach. These are the closest the current evidence base comes to satisfying both components simultaneously — but the conjunction remains unconfirmed.",
      vectors: ["partial--approaching-both-components-neither-fully-satisfied-simultaneously"],
      date: "2022–24",
    }
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2024-01-15",
      pressureState: "fragmenting",
      verificationStage: "VS-03",
      summary: "The claim has not been satisfied. No quantum computer has demonstrated advantage on a problem that simultaneously meets both the performance threshold (faster than best classical methods) and the practical relevance threshold (problem has genuine scientific or commercial value at the demonstrated scale). The evidence base contains strong demonstrations of one component without the other — advantage on demonstration problems (INST-001, 002, 004) or near-advantage on relevant problems (INST-005) —",
      assessorNote: null,
    }
  ],

  mechanisms: [
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "\"Practically relevant\" lacks an agreed operational definition. The claim requires advantage on a practically relevant problem, but no agreed standard specifies what practical relevance requires. Different researchers and communities apply different implicit thresholds: some accept scientific relevance (the problem illuminates physical phenomena); others require commercial relevance (the result has",
    },
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Classical algorithm improvement rate on relevant problems. Classical simulation algorithms continue improving for the specific problem types where quantum advantage is most plausible — quantum chemistry, materials simulation, combinatorial optimisation. For each proposed quantum advantage target on a practically relevant problem, the classical community has typically produced improved classical al",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "First fault-tolerant quantum chemistry calculation beyond classical reach. The resolution path for this record converges with FR-QE-0006's attractor: a fault-tolerant quantum computer solving a practically relevant quantum chemistry problem (FeMoco, ruthenium catalyst, or equivalent) that classical simulation cannot match within a reasonable time budget. This would simultaneously satisfy both the ",
    }
  ],

  lineage: {
    items: [
    { year: "1994–2012", text: "Theoretical quantum advantage established. Shor, Grover, and related algorithms prove that quantum computers can outperform classical computers on specific problems. The claim is theoretically established; hardware cannot yet demonstrate it." },
    { year: "2019", text: "Google Sycamore — first \"supremacy\" claim. Advantage demonstrated on a demonstration problem; practical relevance contested. The claim enters the ESCALATING phase but the relevance component is immediately challenged." },
    { year: "2020–23", text: "Repeated advantage demonstrations without practical relevance; NISQ-era utility claims. The field consistently demonstrates advantage on problems designed for demonstration. IBM's \"quantum utility\" claim is the first attempt to bridge the gap; it is contested." },
    { year: "2024", text: "Willow and the widening demonstration gap. Google Willow demonstrates stronger, more robust advantage on demonstration problems. The gap between demonstration-problem advantage and relevant-problem advantage remains unclosed. Claim enters FRAGMENTING." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "Is there a problem type that is both classically intractable at demonstrated quantum scales and practically relevant? The two trajectories (demonstration advantage, relevant-problem simulation) need to converge on a single instance. Which specific problem will first satisfy both simultaneously?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "The attractor for FR-QE-0007 and FR-QE-0006 appears to be the same event: first fault-tolerant quantum chemistry calculation beyond classical reach. If both records resolve through the same instance, does the Observatory log it as one event serving two records, or two separate instances? The schema has no governed procedure for this.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "The null measurement validity condition held. Does this constitute sufficient evidence to characterise Measurement Validity as a proxy-measurement failure mode specifically, or does the two-occurrence positive evidence (FR-BT-0002, FR-AI-0007) plus one-occurrence negative evidence (FR-QE-0007) constitute a pattern worth a Review Note?",
      raisedDate: "2024-01-15",
    }
  ],

  mutationLog: [
    // APPEND-ONLY. Newest first.
    { id: "M-005", date: "2024-01-15", field: "programme_panel_added", from: "—", to: "PROGRAMME-PANEL-ADDED", note: "" },
    { id: "M-004", date: "2024-01-15", field: "null_condition_met", from: "—", to: "NULL-CONDITION-MET", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" }
  ],

  status: "open",
};
