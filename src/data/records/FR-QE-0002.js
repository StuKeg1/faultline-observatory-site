/**
 * FR-QE-0002 — D-Wave Quantum Annealing — Practical Computational Advantage
 * Programme: PROG-QE
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_QE_0002 = {
  id: "FR-QE-0002",
  programme: "PROG-QE",

  claim: {
    statement: "Quantum annealing systems have demonstrated practical computational advantage over classical methods on commercially or scientifically relevant optimisation tasks.",
    shortLabel: "D-Wave Quantum Annealing — Practical Computational Advantage",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "D-Wave One / Two — Initial commercial deployments",
      description: "D-Wave sells the first commercial quantum systems to Lockheed Martin (2011) and Google/NASA/USRA (2013). D-Wave claims systems can solve certain combinatorial problems faster than classical alternatives. Independent benchmarking by Matthias Troyer and collaborators (2014) finds no evidence of quantum speedup over classical simulated annealing on the tested problem instances.",
      vectors: ["contesting"],
      date: "2011–2013",
    },
    {
      id: "IN-002",
      qualifiedEvent: "Google / D-Wave 108-qubit benchmark study",
      description: "A Google-led study (Denchev et al. 2016, Physical Review X ) reports D-Wave 2X achieves speedup of up to 100 million times over a single-core classical solver on specific quantum simulation instances. Immediate challenge from the community: the benchmark problem was specially structured to favour quantum annealing; state-of-the-art classical solvers (e.g. Hamze-de Freitas-Selby) match or exceed D-Wave performance when applied to the same instances.",
      vectors: ["partial--benchmark-contested"],
      date: "2015–2016",
    },
    {
      id: "IN-003",
      qualifiedEvent: "D-Wave Advantage launch — 5000+ qubit system",
      description: "D-Wave releases the Advantage system with over 5,000 qubits and a new Pegasus topology. D-Wave publishes case studies claiming practical advantage in vehicle routing, scheduling, and financial optimisation. Academic evaluation (Yarkoni et al. 2022, EPJ Quantum Technology ) finds that for most real-world problem instances tested, hybrid classical-quantum solvers outperform pure quantum annealing, and classical-only solvers remain competitive or superior on commercially sized problems.",
      vectors: ["partial--hybrid-dependency"],
      date: "2019–2020",
    },
    {
      id: "IN-004",
      qualifiedEvent: "King et al. — Coherent quantum annealing on a 2000-qubit Ising spin glass",
      description: "A D-Wave-affiliated team publishes in Nature (King et al. 2022) reporting observation of coherent quantum annealing dynamics on a frustrated Ising model. Authors claim the system simulates quantum spin glass physics inaccessible to classical simulation in the thermodynamic regime studied. This is a scientific relevance claim (not a commercial optimisation claim). Independent commentary notes the result demonstrates quantum simulation capacity but does not directly establish practical computational advantage on optimisation tasks as typically framed.",
      vectors: ["supportive--scientific-relevance"],
      date: "2022",
    },
    {
      id: "IN-005",
      qualifiedEvent: "King et al. — Computational advantage in quantum simulation of magnetic materials",
      description: "A follow-up D-Wave-affiliated study (King et al. 2023, Nature ) reports that the Advantage system demonstrates computational advantage in simulating quantum magnetic materials, outperforming classical methods including quantum Monte Carlo for the specific frustrated systems tested. Dispute: critics argue the comparison class excludes the most capable classical simulation algorithms and that the problem domain (quantum magnetism simulation) is adjacent to but distinct from the commercially motivated optimisation tasks the utility claim is primarily understood to concern.",
      vectors: ["partial--domain-scope-disputed"],
      date: "2023",
    }
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2024-01-15",
      pressureState: "fragmenting",
      verificationStage: "VS-03",
      summary: "The evidence trail for this claim is fragmented across distinct problem domains and claim interpretations. On commercially motivated optimisation tasks (scheduling, routing, combinatorial problems of practical scale), no published evidence has established durable advantage over state-of-the-art classical methods. The contested Denchev et al. (2016) result represents the strongest performance claim in this domain; it was substantially undermined by subsequent classical algorithm improvements and the benchmark's structural dependence on hardware-favourable problem instances (RM-002). In the separate domain of scientific simulation, the evidence is stronger: King et al. (2022, 2023) report computational advantage in simulating quantum magnetism, though critics dispute the comparison class used. The claim spans two domains accruing evidence asymmetrically and has not been decomposed into separate records (BN-001), and no agreed classical comparison class exists (BN-002). The pressure state is FRAGMENTING: the claim is not converging toward a single assessment but splitting along domain lines that may require separate evaluation.",
      assessorNote: null,
    }
  ],

  mechanisms: [
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Classical solver improvement rate. Each time a D-Wave performance claim is published, the classical computing community has produced improved algorithms (simulated annealing variants, Hamze-de Freitas-Selby, tensor network methods) that match or exceed the demonstrated quantum performance on the same problem instances. The mechanism is structural: a fixed quantum hardware architecture competes aga",
    },
    {
      id: "RM-002",
      type: "RESISTANCE MECHANISM",
      description: "Benchmark structure dependency. Demonstrated performance advantages have been concentrated on problem instances structurally matched to the D-Wave hardware topology. Performance degrades significantly when problems must be embedded into the hardware graph, as most real-world optimisation problems require non-trivial embedding that introduces overhead and degrades solution quality relative to nativ",
    },
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "Domain scope of the claim. The claim spans commercial optimisation and scientific simulation. Evidence accrues asymmetrically: stronger for scientific simulation (King et al. 2023), weaker for commercial optimisation. The claim cannot be assessed without first resolving which domain is the primary referent. This bottleneck may be irreducible without claim decomposition.",
    },
    {
      id: "BN-002",
      type: "BOTTLENECK",
      description: "Comparison class specification. No agreed standard exists for which classical methods constitute a valid comparison. D-Wave comparisons have used single-core classical solvers, simulated annealing, and in some cases deliberately excluded state-of-the-art methods. Without a settled comparison class, advantage claims are not independently verifiable against a stable baseline.",
    }
  ],

  lineage: {
    items: [
    { year: "2007", text: "D-Wave founded. Company formed to commercialise quantum annealing for combinatorial optimisation. Original claim framing: quantum tunnelling enables faster traversal of complex energy landscapes than classical thermal annealing." },
    { year: "2011", text: "First commercial sale (Lockheed Martin). D-Wave One sold commercially. Claim migrates from laboratory demonstration to commercial utility framing." },
    { year: "2013", text: "Google / NASA / USRA acquisition. D-Wave Two installed. Claim now includes scientific simulation use cases alongside optimisation." },
    { year: "2014", text: "Troyer et al. benchmark challenge. First rigorous independent benchmarking finds no quantum speedup. Claim status changes from asserted to actively contested." },
    { year: "2016", text: "Denchev et al. (Physical Review X) — \"100 million times\" claim. Strongest optimisation advantage claim to date. Immediately challenged on benchmark design. Community consensus: advantage is problem-specific and does not generalise to commercially relevant instances." },
    { year: "2020", text: "D-Wave Advantage release. Claim expands to 5000-qubit hybrid workflows. Commercial case studies published. Academic evaluation continues to find classical parity or superiority on real-world problem sizes." },
    { year: "2022–23", text: "King et al. (Nature) — quantum magnetism simulation. Claim partially substantiated in scientific simulation domain. Evidence trajectory diverges: scientific relevance improving, commercial optimisation advantage unestablished." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "Does the claim require decomposition into two separate Frontier Records — one for commercial optimisation advantage, one for scientific simulation advantage — before either can receive a settled assessment?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "What would constitute an agreed comparison class for classical methods? Without this, no future evidence can close the claim.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "Can the King et al. (2023) simulation result be independently replicated by parties without D-Wave affiliation?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-004",
      question: "As D-Wave's Advantage2 and future systems increase qubit count and connectivity, does the benchmark structure dependency (RM-002) diminish, or does the classical algorithm improvement rate (RM-001) continue to track the hardware improvements?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-005",
      question: "Does the Fragmenting pressure state represent a temporary epistemic condition resolvable by further evidence, or a structural property of a claim whose scope is too broad to admit a unified assessment?",
      raisedDate: "2024-01-15",
    }
  ],

  mutationLog: [
    // APPEND-ONLY. Newest first.
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "RM-001, RM-002 (Resistance); BN-001, BN-002 (Bottleneck) added." },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "ASSESSMENT-001 issued. Pressure state: FRAGMENTING." },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "INST-001 through INST-005 added." },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "FR-QE-0002 opened. Claim ratified. Programme: PROG-QE." }
  ],

  status: "open",
};
