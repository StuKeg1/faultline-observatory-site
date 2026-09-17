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
  lastProvenanceReview: "2026-09-17",
  provenanceReviewId: "LPR-001-D19",
  provenanceOutcome: "pass_after_correction",
  provenanceRepairStatus: "completed",

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
      sourceReference: "Arute et al., Nature 574 (2019), doi:10.1038/s41586-019-1666-5; Pednault et al., arXiv:1910.09534; Pan, Chen & Zhang, Physical Review Letters 129 (2022), doi:10.1103/PhysRevLett.129.090502",
      sources: [
        { citation: "Arute et al., ‘Quantum supremacy using a programmable superconducting processor’, Nature 574, 505–510 (2019)", url: "https://www.nature.com/articles/s41586-019-1666-5", doi: "10.1038/s41586-019-1666-5", locator: "Abstract and main result" },
        { citation: "Pednault et al., ‘Leveraging Secondary Storage to Simulate Deep 54-qubit Sycamore Circuits’ (2019)", url: "https://arxiv.org/abs/1910.09534" },
        { citation: "Pan, Chen & Zhang, ‘Solving the Sampling Problem of the Sycamore Quantum Circuits’, Physical Review Letters 129, 090502 (2022)", doi: "10.1103/PhysRevLett.129.090502" },
      ],
    },
    {
      id: "IN-002",
      qualifiedEvent: "Boson sampling experiments — photonic quantum advantage",
      description: "Multiple groups (USTC China with Jiuzhang, Xanadu with Borealis) demonstrate quantum advantage in Gaussian boson sampling — a photonic computational task. USTC reports sampling rates 10^14 times faster than classical simulation. These results claim quantum advantage more robustly than Sycamore: the classical simulation of boson sampling at demonstrated scales is harder and the results have proven more difficult to classically reproduce. However, boson sampling also lacks known practical applications — it was proposed as a demonstration problem. The practical relevance component is again absent. The record notes these as stronger advantage demonstrations than Sycamore but still not satisfying the claim as scoped: advantage without relevant application.",
      vectors: ["partial--stronger-advantage-practical-relevance-still-absent"],
      date: "2020–23",
      sourceReference: "Zhong et al., Science 370 (2020), doi:10.1126/science.abe8770; Madsen et al., Nature 606 (2022), doi:10.1038/s41586-022-04725-x",
      sources: [
        { citation: "Zhong et al., ‘Quantum computational advantage using photons’, Science 370, 1460–1463 (2020)", doi: "10.1126/science.abe8770" },
        { citation: "Madsen et al., ‘Quantum computational advantage with a programmable photonic processor’, Nature 606 (2022)", doi: "10.1038/s41586-022-04725-x" },
      ],
    },
    {
      id: "IN-003",
      qualifiedEvent: "IBM quantum utility — kicked Ising model and subsequent classical simulation",
      description: "Kim et al. (IBM, 2023, Nature) report accurate expectation values from a 127-qubit Eagle processor at circuit volumes beyond brute-force classical computation and in regimes where the particular approximate classical methods tested in the paper break down. The work introduced the term ‘quantum utility’ for useful quantum computation before fault tolerance; it did not establish that the kicked-Ising calculation was generally beyond the best classical methods. Subsequent tensor-network work, including Tindall et al., reproduced the relevant regime classically with greater accuracy and precision than the quantum result. The episode therefore provides scientifically relevant but contested performance evidence and demonstrates that the classical comparison boundary can move after a quantum result is published. It does not satisfy this record's conjunction of durable quantum advantage and practical relevance.",
      vectors: ["partial--scientific-relevance-classical-advantage-not-durable"],
      date: "2023–24",
      sourceReference: "Kim et al., Nature 618 (2023), doi:10.1038/s41586-023-06096-3; Tindall et al., PRX Quantum 5 (2024), doi:10.1103/PRXQuantum.5.010308",
      sources: [
        { citation: "Kim, Y. et al. Evidence for the utility of quantum computing before fault tolerance. Nature 618, 500–505 (2023).", url: "https://www.nature.com/articles/s41586-023-06096-3", doi: "10.1038/s41586-023-06096-3", locator: "Abstract and classical-comparison discussion" },
        { citation: "Tindall, J. et al. Efficient tensor network simulation of IBM's kicked Ising experiment. PRX Quantum 5, 010308 (2024).", url: "https://journals.aps.org/prxquantum/abstract/10.1103/PRXQuantum.5.010308", doi: "10.1103/PRXQuantum.5.010308", locator: "Classical tensor-network reproduction and comparison" },
      ],
    },
    {
      id: "IN-004",
      qualifiedEvent: "Google random-circuit sampling at larger scale — demonstration advantage without practical relevance",
      description: "Google's 2024 random-circuit-sampling work reports experiments up to 67 qubits and 32 cycles in a regime the authors argue is beyond existing classical-supercomputer capabilities. Separately, Google's Willow announcement reports a random-circuit-sampling benchmark completed in under five minutes and estimates an enormous classical runtime; that comparison is a company-reported estimate rather than an independently established bound. The peer-reviewed Willow surface-code paper is distinct evidence concerning below-threshold quantum error correction and is not the source of the random-circuit-sampling advantage claim. Random circuit sampling remains a demonstration task without a known direct practical application, so these results bear on the performance component but do not satisfy this record's practical-relevance requirement. They do not by themselves establish that the quantum/classical simulation gap is monotonically widening.",
      vectors: ["partial--demonstration-advantage-practical-relevance-absent"],
      date: "2024",
      sourceReference: "Morvan et al., Nature 634 (2024), doi:10.1038/s41586-024-07998-6; Google Quantum AI, Willow announcement (2024); Google Quantum AI et al., Nature 638 (2025), doi:10.1038/s41586-024-08449-y",
      sources: [
        { citation: "Morvan, A. et al. Phase transitions in random circuit sampling. Nature 634, 328–333 (2024).", url: "https://www.nature.com/articles/s41586-024-07998-6", doi: "10.1038/s41586-024-07998-6", locator: "67-qubit, 32-cycle random-circuit-sampling experiment and classical comparison" },
        { citation: "Google Quantum AI. Meet Willow, our state-of-the-art quantum chip. 9 December 2024.", url: "https://blog.google/technology/research/google-willow-quantum-chip/", locator: "Company-reported RCS benchmark and classical-runtime estimate" },
        { citation: "Google Quantum AI and Collaborators. Quantum error correction below the surface code threshold. Nature 638, 920–926 (2025).", url: "https://www.nature.com/articles/s41586-024-08449-y", doi: "10.1038/s41586-024-08449-y", locator: "Separate Willow surface-code result; contextual distinction from RCS" },
      ],
    },
    {
      id: "IN-005",
      qualifiedEvent: "Quantum simulation of physical systems — approaching practical relevance",
      description: "Multiple groups demonstrate quantum simulation results on physically motivated systems approaching practical relevance. Google Quantum AI's observation of time-crystalline eigenstate order on a quantum processor (Mi et al. 2022), IBM's variational calculations for small molecules and quantum magnets (Kandala et al. 2017), and Quantinuum's hardware calculations for simplified hydrogen-chain and iron-crystal models (Yamamoto et al. 2022) all bear on scientifically relevant problems. None unambiguously exceeds the best classical methods on a directly practical problem at the demonstrated scale. The systems remain deliberately small or simplified and classically checkable; their value is as scientific and algorithmic demonstrations rather than established practical advantage. These are among the closest parts of the pre-2025 evidence base to satisfying both components simultaneously, but the conjunction remains unconfirmed.",
      vectors: ["partial--approaching-both-components-neither-fully-satisfied-simultaneously"],
      date: "2017–22",
      sourceReference: "Mi et al., Nature 601 (2022), doi:10.1038/s41586-021-04257-w; Kandala et al., Nature 549 (2017), doi:10.1038/nature23879; Yamamoto et al., Physical Review Research 4 (2022), doi:10.1103/PhysRevResearch.4.033110",
    },
    {
      id: "IN-006",
      qualifiedEvent: "Google Quantum Echoes and molecular-geometry OTOC programme",
      description: "Google Quantum AI's peer-reviewed Quantum Echoes experiment measures a second-order out-of-time-order correlator (OTOC) on 65 Willow qubits and reports a comparison of about 2.1 hours of quantum execution with an estimated approximately 3.2 years on the Frontier supercomputer, roughly 13,000 times faster. A separate connected molecular-geometry study uses OTOC measurements to estimate molecular distances and angles with accuracy comparable to independent spectroscopic measurements, with Willow used to simulate the molecular OTOCs. These evidentiary components do not yet coincide at the decisive scale: the large Quantum Echoes circuits supply the reported beyond-classical performance comparison, while the molecular-geometry application is demonstrated on smaller systems that do not themselves establish quantum advantage. A 2026 tensor-network analysis supports the classical-intractability interpretation of the large circuits but includes Google Quantum AI-affiliated authors and is treated as affiliated corroboration rather than independent replication. The programme therefore narrows the gap between performance and practical relevance without satisfying the record's conjunctive claim.",
      vectors: ["partial--beyond-classical-performance-and-application-relevance-separated-by-scale"],
      date: "2025–26",
      sourceReference: "Google Quantum AI et al., Nature 646 (2025) 825–830, doi:10.1038/s41586-025-09526-6; Zhang et al., arXiv:2510.19550; Bermejo et al., arXiv:2604.15427",
      sources: [
        { citation: "Google Quantum AI and collaborators. Quantum echoes and the computational complexity of many-body dynamics. Nature 646, 825–830 (2025).", url: "https://www.nature.com/articles/s41586-025-09526-6", doi: "10.1038/s41586-025-09526-6", locator: "65-qubit OTOC experiment and reported Frontier comparison" },
        { citation: "Zhang et al. Molecular geometry from out-of-time-order correlators. arXiv:2510.19550 (2025).", url: "https://arxiv.org/abs/2510.19550", locator: "Molecular distance and angle estimation using OTOCs" },
        { citation: "Bermejo et al. Tensor-network analysis of Quantum Echoes circuits. arXiv:2604.15427 (2026).", url: "https://arxiv.org/abs/2604.15427", locator: "Classical-simulation analysis; affiliated corroboration boundary" },
      ],
    }
  ],

  assessments: [
    { id: "AS-001", date: "2024-01-15", pressureState: "fragmenting", verificationStage: "VS-03", summary: "The claim has not been satisfied. No quantum computer has demonstrated advantage on a problem that simultaneously meets both the performance threshold (faster than best classical methods) and the practical relevance threshold (problem has genuine scientific or commercial value at the demonstrated scale). The evidence base contains strong demonstrations of one component without the other — advantage on demonstration problems (INST-001, 002, 004) or near-advantage on relevant problems (INST-005) — but no instance yet satisfies both simultaneously. IBM's quantum utility claim (INST-003) comes closest to bridging the two, reporting results on a problem with some scientific relevance that classical simulation was disputed to match, but the classical-simulation contest remains unresolved. The pressure state is FRAGMENTING: the evidence is splitting along two separate trajectories — demonstration-problem advantage growing stronger (INST-004) and relevant-problem simulation approaching but not reaching classical intractability (INST-005) — without converging on a single instance that would resolve the claim (OQ-001).", assessorNote: null },
    { id: "AS-002", date: "2026-08-28", pressureState: "fragmenting", verificationStage: "VS-03", summary: "Quantum Echoes materially narrows the gap between demonstration advantage and useful computation without satisfying the claim. IN-006 connects a reproducible higher-order OTOC result reported as approximately 13,000 times faster than the estimated classical computation with a concrete molecular-structure workflow using related OTOC measurements. The decisive conjunction remains absent: the beyond-classical result is demonstrated on large 65-qubit Quantum Echoes circuits, while practical utility is demonstrated on smaller molecular systems that do not themselves establish advantage over the best classical methods. The 2026 tensor-network analysis further supports the classical-intractability component but is produced by Google Quantum AI-affiliated authors and is not independent replication. The pressure state therefore remains FRAGMENTING: performance and relevance have moved closer within one technical programme but still occupy separate experimental regimes. Verification remains VS-03 because the central result is published and auditable, but neither independently replicated nor operationally demonstrated on a practically relevant beyond-classical task.", assessorNote: "Bounded FR-QE-0007 impact review, 2026-08-28. Primary evidence: Google Quantum AI et al., Nature 646 (2025) 825–830, doi:10.1038/s41586-025-09526-6; Zhang et al., arXiv:2510.19550; Bermejo et al., arXiv:2604.15427. The Bermejo et al. follow-up is explicitly treated as Google-affiliated corroboration, not independent replication." },
    { id: "AS-003", date: "2026-09-17", pressureState: "fragmenting", verificationStage: "VS-03", summary: "LPR-001-D19 corrected the representation and provenance of IN-003, IN-004 and IN-006 without changing the claim's evidentiary state. IBM's 2023 utility experiment is now bounded to the classical approximations actually tested and its subsequent classical reproduction; Google's 2024 random-circuit-sampling evidence is separated from the distinct Willow surface-code result and company-reported benchmark estimates are explicitly attributed; and Quantum Echoes is represented as a programme in which reported beyond-classical performance and application relevance remain demonstrated at different scales. The corrected evidence continues to support FRAGMENTING / VS-03: strong performance evidence and meaningful application-oriented evidence exist, but no admitted instance yet establishes durable quantum advantage on a practically relevant problem at the same demonstrated scale.", assessorNote: "Corrective assessment issued after LPR-001-D19. It supersedes provenance-dependent historical characterisations in AS-001/AS-002 without rewriting their append-only text. The IBM/University of Chicago 2026 hard-circuit result surfaced during LPR-001-D19 remains outside this correction pending Normal Record Review." },
  ],

  mechanisms: [
    { id: "BN-001", type: "BOTTLENECK", description: "\"Practically relevant\" lacks an agreed operational definition. The claim requires advantage on a practically relevant problem, but no agreed standard specifies what practical relevance requires. Different researchers and communities apply different implicit thresholds: some accept scientific relevance (the problem illuminates physical phenomena); others require commercial relevance (the result has identifiable downstream economic value); others require direct application (the computation produces output usable without further classical processing). Without agreement on this threshold, positive and contesting evidence cannot be cleanly compared — the Sycamore result is supportive under some definitions of relevance and irrelevant under others. This is the same threshold-dispute bottleneck as FR-BT-0001 BN-001 and FR-AM-0004 BN-001: not measurement validity, but an undefined success threshold." },
    { id: "RM-001", type: "RESISTANCE MECHANISM", description: "The best-classical comparison can improve materially after a quantum result is published. The IBM kicked-Ising episode provides a directly sourced example: a regime beyond brute-force computation and beyond the approximations tested in the original quantum study was subsequently reproduced by stronger tensor-network methods. This does not establish that classical methods will erase every proposed quantum advantage, but it means durability must be evaluated against the best method available for the specific problem at the time of comparison." },
    { id: "AT-001", type: "ATTRACTOR", description: "First quantum computation on a practically relevant problem that establishes a durable advantage over the best contemporaneous classical method under a transparent comparison. A fault-tolerant quantum-chemistry calculation is one plausible route, but the record is not restricted to chemistry or to fault-tolerant hardware if another scientifically or commercially relevant problem satisfies both components at the demonstrated scale." },
  ],

  lineage: { items: [
    { year: "1994–2012", text: "Theoretical quantum advantage established. Shor, Grover, and related algorithms prove that quantum computers can outperform classical computers on specific problems. The claim is theoretically established; hardware cannot yet demonstrate it." },
    { year: "2019", text: "Google Sycamore — first \"supremacy\" claim. Advantage demonstrated on a demonstration problem; practical relevance contested. The claim enters the ESCALATING phase but the relevance component is immediately challenged." },
    { year: "2020–23", text: "Repeated advantage demonstrations without practical relevance; NISQ-era utility claims. IBM's 2023 utility experiment adds scientific relevance but subsequent classical tensor-network reproduction shows that the beyond-classical comparison was not durable." },
    { year: "2024", text: "Larger random-circuit-sampling experiments strengthen demonstration-problem performance claims, while the separate Willow surface-code result advances error correction. Neither establishes practical quantum advantage, and company-reported RCS runtime comparisons remain distinct from independently established bounds." },
    { year: "2025–26", text: "Quantum Echoes brings reported beyond-classical OTOC performance and molecular-geometry application work into one technical programme, but the two components remain demonstrated at different scales and independent replication of the large-circuit advantage is absent." },
  ], relatedRecords: [] },

  openQuestions: [
    { id: "OQ-001", question: "Is there a problem type that is both classically intractable at demonstrated quantum scales and practically relevant? The two trajectories (demonstration advantage, relevant-problem simulation) need to converge on a single instance. Which specific problem will first satisfy both simultaneously?", raisedDate: "2024-01-15" },
    { id: "OQ-002", question: "The attractor for FR-QE-0007 and FR-QE-0006 appears to be the same event: first fault-tolerant quantum chemistry calculation beyond classical reach. If both records resolve through the same instance, does the Observatory log it as one event serving two records, or two separate instances? The schema has no governed procedure for this.", raisedDate: "2024-01-15" },
    { id: "OQ-003", question: "The null measurement validity condition held. Does this constitute sufficient evidence to characterise Measurement Validity as a proxy-measurement failure mode specifically, or does the two-occurrence positive evidence (FR-BT-0002, FR-AI-0007) plus one-occurrence negative evidence (FR-QE-0007) constitute a pattern worth a Review Note?", raisedDate: "2024-01-15" },
  ],

  mutationLog: [
    { id: "M-012", date: "2026-09-17", field: "provenance_corrected", from: "LPR-001-D19 discrepancies", to: "PASS-AFTER-CORRECTION", note: "LPR-001-D19 bounded correction: repaired IN-003, IN-004 and IN-006; added confidently established structured provenance; separated IBM's tested classical-comparison boundary from stronger legacy claims; separated Google's random-circuit-sampling evidence from the distinct Willow surface-code result and attributed company benchmark estimates; reconstructed the Quantum Echoes source chain and scale boundary; narrowed RM-001; generalised AT-001 to the claim's actual conjunction; repaired lineage; and appended AS-003 rather than rewriting historical assessments. The IBM/University of Chicago 2026 hard-circuit result remains a separate Normal Record Review candidate. Pressure State remains FRAGMENTING; Verification Stage remains VS-03." },
    { id: "M-011", date: "2026-09-17", field: "provenance_review", from: "—", to: "LPR-001-D19 REVIEW REQUIRED", note: "LPR-001-D19 audited all six evidence instances. IN-001, IN-002 and IN-005 were substantially verified against their cited source chains; IN-003 and IN-004 contain overbroad or conflated classical-comparison/Willow representations; IN-006 contains a source-chain and representation package requiring bounded reconstruction before structured provenance is added. One new Normal Record Review candidate was surfaced: IBM and University of Chicago, Sampling hard circuits with verifiably high fidelity (30 July 2026); it was not admitted through LPR-001." },
    {"id":"M-010","date":"2026-09-06","field":"description_restored","from":"Legacy ingestion cutoffs: mechanisms:BN-001, mechanisms:RM-001, mechanisms:AT-001","to":"Source-restored complete descriptions","note":"Editorial Correction (GP-001), RENDER-PILOT-001 content restoration: restored BN-001, RM-001, AT-001 from FR_QE_0007_quantum_advantage_practical.html (Drive file 1qCC0WcnKOMiutuuqh5ah_6wXPN0X2SQs). Each damaged value was a verified prefix of the recovered source after the existing FR-MF to FR-AM identifier migration. Restored the omitted remainder using the original converter text normalization; no inferred completion. Existing later corrections retained. Restoration recovers historical wording and does not reaffirm it as the current assessment. Assessments, evidence instances, open questions, claim, status and rendering eligibility unchanged. Source hashes and field receipt: docs/reviews/render-pilot-content-restoration.json; current-assessment compatibility review: docs/reviews/RENDER-PILOT-001-CONTENT-RESTORATION.md."},
    { id: "M-009", date: "2026-08-29", field: "provenance_enriched", from: "—", to: "PROVENANCE-ENRICHED", note: "PA-002 Provenance Enrichment: structured sources[] added to IN-001 and IN-002; evidentiary prose and assessment unchanged." },
    { id: "M-008", date: "2026-08-28", field: "reference_corrected", from: "IN-001–IN-005 lacked instance references; IN-005 misidentified Mi et al. as a superconducting-material phase-transition study", to: "IN-001–IN-006 carry stable references; IN-005 reconstructed from Mi, Kandala and Yamamoto", note: "GP-001 provenance and description correction following the bounded three-record source/DOI audit. IN-005 had conflated the superconducting processor substrate with the simulated phenomenon and incorrectly attributed a superconducting-material phase transition to Mi et al. The instance now states the verified time-crystal, small-molecule/quantum-magnet and simplified hydrogen-chain/iron-crystal results. AS-001 and AS-002 remain preserved; the correction does not alter their conjunction analysis. Pressure State FRAGMENTING and Verification Stage VS-03 are explicitly retained." },
    { id: "M-007", date: "2026-08-28", field: "assessment_issued", from: "AS-001", to: "AS-002", note: "AS-002 issued following the bounded FR-QE-0007 impact review. Pressure State FRAGMENTING and Verification Stage VS-03 retained. Quantum Echoes narrows the separation between beyond-classical performance and practical relevance, but the two thresholds remain demonstrated in different experimental regimes; Google-affiliated follow-up analysis is not treated as independent replication. No existing assessment, instance, mechanism, open question, or related record modified." },
    { id: "M-006", date: "2026-08-28", field: "instance_appended", from: "IN-005", to: "IN-006", note: "IN-006 appended — Google Quantum Echoes and the connected molecular-geometry OTOC programme. Classified as partial evidence: reproducible beyond-classical performance and practical application relevance are both present within the programme but not at the same demonstrated scale. Instance logged before AS-002; no state or verification-stage change at this step." },
    { id: "M-005", date: "2024-01-15", field: "programme_panel_added", from: "—", to: "PROGRAMME-PANEL-ADDED", note: "" },
    { id: "M-004", date: "2024-01-15", field: "null_condition_met", from: "—", to: "NULL-CONDITION-MET", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" },
  ],

  status: "open",
};