/**
 * FR-QE-0005 — Cryptographically Relevant Quantum Computing — RSA Factorisation
 * Programme: PROG-QE
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_QE_0005 = {
  id: "FR-QE-0005",
  programme: "PROG-QE",
  lastProvenanceReview: "2026-09-15",
  provenanceReviewId: "LPR-001-D17",
  provenanceOutcome: "pass_after_correction",
  provenanceRepairStatus: "completed",

  claim: {
    statement: "A quantum computer can factor commercially relevant RSA cryptographic keys faster than any classical computer.",
    shortLabel: "Cryptographically Relevant Quantum Computing — RSA Factorisation",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Shor's algorithm — theoretical foundation established",
      description: "Peter Shor publishes a polynomial-time quantum algorithm for integer factorisation and discrete logarithms. This establishes the algorithmic basis for a future quantum attack on RSA, conditional on a sufficiently capable quantum computer. Shor's 1994 result does not itself provide a physical-resource estimate for factoring RSA-2048; later engineering estimates are recorded separately. This instance therefore establishes the theoretical basis of the tracked claim, not practical cryptographic capability.",
      vectors: ["neutral--theoretical-basis-established"],
      date: "1994",
      sources: [{ citation: "Shor, P. W. Algorithms for quantum computation: discrete logarithms and factoring. Proceedings of the 35th Annual Symposium on Foundations of Computer Science (1994).", url: "https://ieeexplore.ieee.org/document/365700", doi: "10.1109/SFCS.1994.365700", locator: "Algorithm and complexity result" }],
    },
    {
      id: "IN-002",
      qualifiedEvent: "Gidney–Ekerå — RSA-2048 physical-resource estimate",
      description: "Gidney and Ekerå estimate that a surface-code quantum computer could factor an RSA-2048 integer in about eight hours using approximately 20 million noisy physical qubits under specified hardware assumptions, including a physical gate error rate of 10^-3, a one-microsecond surface-code cycle and a ten-microsecond reaction time. The work was first posted in 2019 and published in Quantum in 2021. It is a resource estimate, not an experimental factorisation result, and it quantifies the engineering gap rather than demonstrating that the required machine exists.",
      vectors: ["neutral--gap-quantified"],
      date: "2019–21",
      sources: [{ citation: "Gidney, C. & Ekerå, M. How to factor 2048 bit RSA integers in 8 hours using 20 million noisy qubits. Quantum 5, 433 (2021).", url: "https://quantum-journal.org/papers/q-2021-04-15-433/", doi: "10.22331/q-2021-04-15-433", locator: "Abstract and resource estimate" }],
    },
    {
      id: "IN-003",
      qualifiedEvent: "FR-QE-0003 and FR-QE-0004 substrate progress — engineering prerequisites advance",
      description: "The error-correction results tracked in FR-QE-0003 and FR-QE-0004 provide relevant substrate evidence for cryptographically relevant quantum computation. In particular, Google's Willow work demonstrates below-threshold surface-code memories with logical error suppression as code distance increases from d=3 to d=5 to d=7, while Microsoft and Quantinuum reported four logical qubits with substantial logical-error suppression on trapped-ion hardware in 2024. These results support a credible engineering trajectory for fault-tolerant computation, but neither demonstrates RSA-scale resources, and the Microsoft/Quantinuum announcement must not be represented as a generic 10^-4 error rate per two-qubit logical gate. The gap to cryptographically relevant factorisation remains large.",
      vectors: ["supportive--substrate-demonstrates-credible-path"],
      date: "2024",
      sources: [
        { citation: "Google Quantum AI and Collaborators. Quantum error correction below the surface code threshold. Nature 638, 920–926 (2025).", url: "https://www.nature.com/articles/s41586-024-08449-y", doi: "10.1038/s41586-024-08449-y", locator: "Published online 9 December 2024; d=3, 5 and 7 scaling" },
        { citation: "Quantinuum and Microsoft. Breakthrough demonstration of reliable logical qubits. 3 April 2024.", url: "https://www.quantinuum.com/press-releases/quantinuum-and-microsoft-announce-new-era-in-quantum-computing-with-breakthrough-demonstration-of-reliable-qubits", locator: "Company announcement; four logical qubits and reported logical-error suppression" }
      ],
    },
    {
      id: "IN-004",
      qualifiedEvent: "NIST finalises first post-quantum cryptography standards",
      description: "On 13 August 2024 NIST finalises FIPS 203, FIPS 204 and FIPS 205: ML-KEM, ML-DSA and SLH-DSA, derived respectively from the CRYSTALS-Kyber, CRYSTALS-Dilithium and SPHINCS+ submissions. The standards are designed to resist future quantum-computer attacks on current public-key cryptography. This is anticipatory institutional evidence rather than evidence that a quantum computer can presently factor RSA-2048: it demonstrates migration planning in response to the prospective quantum threat, not satisfaction of the tracked technical claim.",
      vectors: ["partial--anticipatory-institutional-evidence"],
      date: "2024",
      sources: [{ citation: "NIST. Announcing Approval of Three Federal Information Processing Standards (FIPS) for Post-Quantum Cryptography. 13 August 2024.", url: "https://www.nist.gov/news-events/news/2024/08/announcing-approval-three-federal-information-processing-standards-fips", locator: "FIPS 203, 204 and 205 approval and algorithm names" }],
    },
    {
      id: "IN-005",
      qualifiedEvent: "Yan et al. hybrid factorisation proposal — small-device demonstration and scaling challenge",
      description: "Yan et al. post a preprint in December 2022 proposing a hybrid classical–quantum integer-factorisation method based on lattice reduction and QAOA. They experimentally factor integers up to 48 bits using ten superconducting qubits and estimate that a 372-qubit circuit could challenge RSA-2048; they do not factor RSA-2048 experimentally. Khattar and Yosri subsequently implement the proposed approach and report that, even with an idealised quantum optimiser, the claimed sublinear scaling fails to generate enough factoring relations for random 80-bit integers and beyond. The episode is therefore contesting evidence against the proposal's claimed scaling, not a failed experimental RSA-2048 factorisation.",
      vectors: ["contesting--proposed-scaling-not-reproduced"],
      date: "2022–23",
      sources: [
        { citation: "Yan, B. et al. Factoring integers with sublinear resources on a superconducting quantum processor. arXiv:2212.12372 (2022).", url: "https://arxiv.org/abs/2212.12372", locator: "Abstract; submitted 23 December 2022" },
        { citation: "Khattar, T. & Yosri, N. A comment on ‘Factoring integers with sublinear resources on a superconducting quantum processor’. arXiv:2307.09651 (2023).", url: "https://arxiv.org/abs/2307.09651", locator: "Abstract and implementation result" }
      ],
    },
    {
      id: "IN-006",
      qualifiedEvent: "Gidney — RSA-2048 estimate falls below one million noisy qubits",
      description: "Craig Gidney publishes a revised RSA-2048 resource estimate in May 2025. Under the same headline hardware assumptions used in the earlier Gidney–Ekerå estimate, the analysis estimates that RSA-2048 could be factored in less than a week using fewer than one million noisy physical qubits, compared with the earlier approximately 20-million-qubit estimate. The reduction comes from algorithmic and fault-tolerance improvements, including approximate residue arithmetic, denser storage of idle logical qubits and reduced magic-state-factory overhead. This is a theoretical resource estimate, not an experimental factorisation result, and therefore re-quantifies the engineering gap without demonstrating cryptographically relevant quantum capability.",
      vectors: ["neutral--gap-re-quantified"],
      date: "2025",
      sources: [{ citation: "Gidney, C. How to factor 2048 bit RSA integers with less than a million noisy qubits. arXiv:2505.15917 (2025).", url: "https://arxiv.org/abs/2505.15917", locator: "Abstract; submitted 21 May 2025" }],
    }
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2024-01-15",
      pressureState: "escalating",
      verificationStage: "VS-02",
      summary: "The claim has not been satisfied. No quantum computer has factored a commercially relevant RSA key. The most credible direct attempt (INST-005) failed. The engineering gap between current capability and the Gidney-Ekerå resource estimate remains approximately three to four orders of magnitude in physical qubit count, with additional requirements for error rates, connectivity, and operational duration not yet demonstrated at any scale approaching relevance. The pressure state is ESCALATING rather than EMERGING because the substrate advances documented in FR-QE-0003 and FR-QE-0004 (INST-003) show the underlying error-correction engineering progressing on a credible trajectory, even though the gap to the resource requirement remains enormous. Institutional behaviour — NIST's finalisation of post-quantum cryptography standards (INST-004) — reflects institutional acceptance that the risk is credible enough to justify migration, adding pressure to the claim's trajectory independent of any direct technical progress toward satisfaction.",
      assessorNote: null,
    },
    {
      id: "AS-002",
      date: "2026-06-29",
      pressureState: "escalating",
      verificationStage: "VS-02",
      summary: "No threshold has been crossed since AS-001 — no factorisation of a commercially relevant key has occurred, and none is closer to occurring in any demonstrated sense. What has moved is the resource-estimate trajectory underlying OQ-001. Gidney (Google, May 2025) reduced the estimated physical-qubit requirement for RSA-2048 factorisation from the Gidney-Ekerå (2021) figure of ~20 million to under 1 million, under comparable fault-tolerance assumptions — roughly a 20-fold reduction achieved through improved algorithmic and error-correction engineering rather than any experimental demonstration. A 2026 proposal using QLDPC codes (an architecture distinct from the surface codes assumed in both prior estimates) suggests a further reduction toward ~100,000 physical qubits, though this is unvalidated at scale. A March 2026 Google/Stanford/Ethereum Foundation whitepaper applies the same style of resource-reduction analysis to elliptic-curve cryptography, estimating under 500,000 physical qubits for widely used curves. All three results are theoretical resource estimates — the same evidence category as INST-002's original figure — not experimental progress toward the claim. The pressure state remains ESCALATING; no reclassification is warranted by an estimate revision alone. What is new is the rate: three independent downward revisions within roughly eighteen months is faster compression of the engineering-gap estimate than the original record anticipated, and OQ-001 now has materially fresher input than it did at AS-001.",
      assessorNote: "Sourced from: Gidney, \"How to factor 2048-bit RSA with less than a million noisy qubits\" (May 2025, arXiv); Iceberg Quantum QLDPC architecture proposal (early 2026, unvalidated at scale per secondary reporting); Google Quantum AI / Stanford / Ethereum Foundation whitepaper on elliptic-curve cryptography resource estimates (March 2026). All three accessed via secondary technical reporting (The Quantum Insider, postquantum.com) rather than primary papers in full; primary sourcing should be substituted before this assessment is treated as fully verified.",
    },
    {
      id: "AS-003",
      date: "2026-09-15",
      pressureState: "escalating",
      verificationStage: "VS-02",
      summary: "LPR-001-D17 corrected the provenance and representation of all six legacy evidence instances. Shor's 1994 result establishes the algorithmic basis but not an RSA-2048 engineering estimate; Gidney–Ekerå provides the 20-million-qubit resource estimate; the 2022 Yan et al. experiment factored only small integers and proposed, rather than demonstrated, RSA-2048 scaling; and Gidney 2025 reduces the RSA-2048 estimate to fewer than one million noisy qubits without an experimental factorisation. The earlier AS-001/AS-002 wording remains historical and is not silently rewritten. The corrected evidence still supports ESCALATING / VS-02: substrate capability and theoretical resource estimates are advancing, but no commercially relevant RSA key has been factored by a quantum computer. The 2026 QLDPC Pinnacle estimate and other genuinely new resource analyses require normal Record Review before they can affect the canonical evidence state.",
      assessorNote: "Corrective assessment issued after LPR-001-D17. It supersedes provenance-dependent historical characterisations in AS-001/AS-002 without altering their append-only text.",
    }
  ],

  mechanisms: [
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "The engineering gap remains large even after resource-estimate compression. Gidney's 2025 analysis reduces the RSA-2048 estimate from approximately 20 million noisy physical qubits to fewer than one million under stated assumptions, but no machine near that fault-tolerant scale has demonstrated the required computation. The gap is not merely qubit count: error rates, connectivity, sustained operation, control overhead and fault-tolerance resources must all be delivered simultaneously. The resistance mechanism is therefore the absence of experimentally demonstrated cryptographic-scale fault-tolerant hardware, not adherence to any single historical qubit estimate.",
    },
    {
      id: "RM-002",
      type: "RESISTANCE MECHANISM",
      description: "Classical algorithm improvement. The claim requires factoring RSA keys faster than any classical computer. Classical factorisation algorithms continue to improve. The general number field sieve has been optimised continuously since 1990. If classical algorithms improve substantially — through better mathematical insights, specialised hardware, or distributed computing advances — the bar for quantum advantage in this specific application rises. The claim is a race; the classical side of the race is not standing still. The resistance mechanism is therefore not just about quantum hardware but about the relative improvement rate of both sides.",
    },
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "Sequential substrate dependency. This claim cannot be satisfied until the scaling and below-threshold behaviour tracked in FR-QE-0003 and FR-QE-0004 extend to a fault-tolerant machine capable of executing an RSA-scale factoring circuit. Resource estimates provide architecture-dependent targets rather than a single fixed qubit threshold: the 2021 Gidney–Ekerå estimate was approximately 20 million noisy qubits, while Gidney 2025 estimates fewer than one million under updated methods. The bottleneck is therefore demonstrated end-to-end fault-tolerant scale, not attainment of the superseded 20-million-qubit figure itself.",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Demonstration of increasing fault-tolerant logical scale toward a cryptographically relevant factoring workload. Intermediate milestones at hundreds and then thousands of useful logical qubits would materially narrow the engineering gap, but the decisive attractor is an end-to-end fault-tolerant factorisation experiment at a key size that is commercially cryptographically relevant, with a transparent classical comparator and resource accounting. Resource-estimate reductions alone do not satisfy this attractor.",
    }
  ],

  lineage: {
    items: [
      { year: "1994", text: "Shor publishes polynomial-time quantum algorithms for factoring and discrete logarithms, establishing the theoretical basis for quantum attacks on RSA." },
      { year: "2019–21", text: "Gidney–Ekerå quantify one fault-tolerant RSA-2048 path at approximately 20 million noisy physical qubits and eight hours under stated assumptions." },
      { year: "2022–23", text: "Yan et al. demonstrate hybrid factorisation only at small integer sizes and estimate a 372-qubit path to challenge RSA-2048; an independent implementation contests the claimed scaling beyond small inputs." },
      { year: "2024", text: "Error-correction substrate evidence strengthens and NIST finalises ML-KEM, ML-DSA and SLH-DSA, while no cryptographically relevant quantum factorisation is demonstrated." },
      { year: "2025", text: "Gidney reduces the theoretical RSA-2048 estimate to fewer than one million noisy qubits and less than one week under the same headline hardware assumptions as the earlier estimate. The change is theoretical resource compression, not experimental RSA progress." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "How quickly can experimentally demonstrated fault-tolerant hardware close the gap to the best primary-source RSA-2048 resource estimates? The canonical estimate moved from approximately 20 million noisy qubits in Gidney–Ekerå to fewer than one million in Gidney 2025, but neither estimate is an experimental roadmap or evidence that the required machine exists.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "IN-004 (NIST PQC standards) is the second occurrence of anticipatory institutional evidence as an evidence object type (the first was FR-AM-0004 INST-003, the Helion/Microsoft contract). The corpus now has two instances. Whether anticipatory institutional acts constitute evidence for a claim — and at what weight — is a recurring question that may warrant attention before a third occurrence.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "This claim sits at the top of the PROG-QE capability stack and depends on all substrate claims being satisfied first. If FR-QE-0003 or FR-QE-0004 encounter unexpected obstacles at larger scales, this claim's trajectory changes without any direct evidence bearing on it. How should a record respond when its substrate records encounter setbacks? No governed procedure exists.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-004",
      question: "How much evidentiary weight should repeated downward revisions in theoretical RSA resource estimates receive when the architectural assumptions themselves change? LPR-001-D17 confirms the 2025 Gidney reduction but removes unreviewed 2026 estimates from the canonical legacy instance; those estimates must enter through normal Record Review before any trend claim is made.",
      raisedDate: "2026-06-29",
    }
  ],

  realizationNotes: [
    {
      id: "REN-001",
      note: "Realization currently depends on fault-tolerant hardware at cryptographically relevant logical-qubit count, sustained circuit depth, and error-correction overhead compatible with RSA-scale workloads. These lie outside Shor's algorithm and resource-estimate evidence.",
      conflation: null,
      raisedDate: "2026-07-08",
      status: "open",
      closedDate: null,
      closedNote: null,
    }
  ],

  mutationLog: [
    { id: "M-014", date: "2026-09-15", field: "provenance_corrected", from: "LPR-001-D17 discrepancies", to: "PASS-AFTER-CORRECTION", note: "LPR-001-D17 bounded correction: repaired IN-001 through IN-006, added confidently established structured provenance, corrected dependent mechanisms, lineage and open-question wording, and appended AS-003 rather than rewriting historical assessments. Removed unreviewed 2026 QLDPC/ECC material from legacy IN-006 so it can be handled through normal Record Review. Pressure state remains ESCALATING; verification stage remains VS-02." },
    {"id":"M-013","date":"2026-09-06","field":"description_restored","from":"Legacy ingestion cutoffs: mechanisms:RM-001, mechanisms:RM-002, mechanisms:BN-001, mechanisms:AT-001","to":"Source-restored complete descriptions","note":"Editorial Correction (GP-001), RENDER-PILOT-001 content restoration: restored RM-001, RM-002, BN-001, AT-001 from FR_QE_0005_RSA_quantum_factorisation.html (Drive file 1xzJuLkAdDhGDC2Rc-yQZDH-R8vlVvHHi). Each damaged value was a verified prefix of the recovered source after the existing FR-MF to FR-AM identifier migration. Restored the omitted remainder using the original converter text normalization; no inferred completion. Existing later corrections retained. Restoration recovers historical wording and does not reaffirm it as the current assessment. Assessments, evidence instances, open questions, claim, status and rendering eligibility unchanged. Source hashes and field receipt: docs/reviews/render-pilot-content-restoration.json; current-assessment compatibility review: docs/reviews/RENDER-PILOT-001-CONTENT-RESTORATION.md."},
    { id: "M-012", date: "2026-07-09", field: "description_reordered", from: "—", to: "DESCRIPTION-REORDERED", note: "Editorial Correction (GP-001): IN-006 description reordered per EP-001 — existing closing synthesis sentence moved to opening, no wording added or removed." },
    { id: "M-011", date: "2026-07-08", field: "reference_corrected", from: "—", to: "REFERENCE-CORRECTED", note: "Editorial Correction (GP-001): IN-004 and OQ-002 referred to the stale identifier FR-MF-0004 for the Helion/Microsoft fusion contract. Corrected to FR-AM-0004 following the FR-MF-* → FR-AM-* programme identifier migration (see FR-AM-0004 M-007). No evidence, interpretation, pressureState, verificationStage, assessment, or open question substance changed." },
    { id: "M-010", date: "2026-07-08", field: "realization_note_added", from: "—", to: "REN-001", note: "realizationNotes field added to schema. REN-001: fault-tolerant hardware scale/depth/overhead dependency distinguished from algorithmic and resource-estimate evidence. Corpus Review — Realization Note Candidates (v2)." },
    { id: "M-009", date: "2026-06-29", field: "open_question_raised", from: "—", to: "OQ-RAISED", note: "OQ-004 added: pace of resource-estimate revision as a possible evidence pattern in its own right." },
    { id: "M-008", date: "2026-06-29", field: "assessment_issued", from: "AS-001", to: "AS-002", note: "AS-002 issued following targeted reassessment of single-assessment records (Homepage v2 scoping side-effect). Pressure state unchanged: ESCALATING. New evidence (IN-006) revises the resource-estimate trajectory but crosses no claim threshold." },
    { id: "M-007", date: "2026-06-29", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "IN-006 added: Gidney (2025) and 2026 follow-on resource-estimate reductions for RSA-2048 and elliptic-curve cryptography." },
    { id: "M-006", date: "2024-01-15", field: "programme_panel_added", from: "—", to: "PROGRAMME-PANEL-ADDED", note: "" },
    { id: "M-005", date: "2024-01-15", field: "null_condition_met", from: "—", to: "NULL-CONDITION-MET", note: "" },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" }
  ],

  status: "open",
};