/**
 * FR-QE-0001 — Google Quantum Advantage (Sycamore)
 * Programme: PROG-QE (Quantum Engineering)
 *
 * Controlled realignment, 2026-07-22:
 * - S4 (reconstructed 2026-06-11) is the ratified operative reconstruction-era baseline.
 * - S5/S5b remain preserved in Git history and the governance audit trail.
 * - AS-001 is transcribed reconstruction content, not a newly issued or reaffirmed assessment.
 */

export const FR_QE_0001 = {
  id: "FR-QE-0001",
  programme: "PROG-QE",
  lastProvenanceReview: "2026-10-01",
  provenanceReviewId: "LPR-001-D37",
  provenanceOutcome: "discrepancies_corrected",
  provenanceRepairStatus: "completed",

  claim: {
    statement:
      "A programmable quantum processor has demonstrated computational supremacy — " +
      "performing a well-defined sampling task beyond the practical reach of any classical computer.",
    shortLabel:
      "Google Quantum Advantage (Sycamore) — Computational Supremacy via Random Circuit Sampling",
    openedDate: "2024-01-01",
    openedDateQualifier: "Approximate — original record lost",
    subject: "Google Quantum AI (Sycamore processor)",
    claimClass: "Supremacy / advantage claim",
    scope:
      "The claim is specific to a single benchmark task (RCS) and does not assert " +
      "general-purpose quantum advantage.",
  },

  reconstruction: {
    sourceId: "S4",
    sourceFile: "FR_QE_0001_google_quantum_advantage_sycamore.html",
    sourceReconstructedDate: "2026-06-11",
    effectiveCreationDate: "2026-06-11",
    originalRecordLost: true,
    preReconstructionEntriesApproximate: true,
    provenanceNote:
      "The original FR-QE-0001 was lost. S4 was reconstructed on 2026-06-11 using the mature FCIF framework. " +
      "Pre-reconstruction entries are approximate; the reconstruction entry is the effective creation date " +
      "of the represented document. S4 is a governed reconstruction-era surrogate, not the recovered 2024 admission.",
    transitionContext: [
      {
        sourceFrom: "INST-001",
        from: "emerging",
        to: "escalating",
        note: "Triggered by INST-002: IBM rebuttal immediately escalates contention",
      },
      {
        sourceFrom: "INST-002",
        from: "escalating",
        to: "fragmenting",
        note:
          "Triggered by INST-003/004: classical parity achieved; evidence splits across original vs. migrated claim",
      },
    ],
    postProductionObservations: [
      "This record is a reconstruction. The original FR-QE-0001 was lost. The reconstruction was executed on 2026-06-11 using the mature FCIF framework, producing a record substantially richer than the original could have been. The mutation log preserves this provenance. Any future audit should treat pre-reconstruction mutation entries as approximate and the reconstruction entry as the effective creation date of the current document.",
      "Claim Migration is visible in the instance feed. INST-001 through INST-004 track the original supremacy claim. INST-005 and INST-006 track the migrated claim (error correction + expanded RCS). The record holds both because this is one of the five constitutional cases that produced the Migration architecture. Separating them (per OQ-2) would be historically cleaner but would sever the connection that made Migration visible in the first place.",
      "The Track Record Prior emerges naturally. RM-003 (claimant-produced classical baseline) and the lineage from 2019 to 2024 together produce a Track Record Prior: when a quantum team estimates classical difficulty, history suggests the estimate is systematically too high. This prior is not formalised in the FCIF but appears as a structural observation. The FCIF case study on Google Quantum Advantage made this observation explicit; this record now carries it forward as a recorded mechanism.",
      "FR-QE-0002 (D-Wave) references this record. The D-Wave record's RELATED RECORDS field points to FR-QE-0001, and its post-production review notes that \"FR-QE-0001 reached EMERGING.\" This cross-reference is now preserved bidirectionally. The two records together form the founding pair of PROG-QE and exhibit parallel structural patterns (classical algorithm erosion, benchmark specificity, claim fragmentation) despite originating from different quantum computing paradigms (gate-based vs. annealing).",
      "The pressure vocabulary may be insufficient. OQ-4 raises the question of whether FRAGMENTING adequately describes a record in active Claim Migration. The original claim is close to resolved (by classical supersession), but the migrated claim is escalating. A single pressure state cannot capture both trajectories simultaneously. This observation should be carried forward to the FCIF framework review as evidence that the pressure state vocabulary may need a migration-specific extension.",
    ],
  },

  instances: [
    {
      id: "IN-001",
      sourceId: "INST-001",
      qualifiedEvent: "Arute et al. — Quantum supremacy using a programmable superconducting processor",
      description:
        "Google Quantum AI publishes in Nature (574, 505–510). The 53-qubit Sycamore processor performs Random Circuit Sampling (RCS) in approximately 200 seconds. The authors estimate the equivalent classical computation on a state-of-the-art supercomputer would require approximately 10,000 years. The paper frames this as the first demonstration of quantum computational supremacy — a task performed by a quantum device that is practically infeasible for any classical computer. The claim is specific to a single benchmark task (RCS) and does not assert general-purpose quantum advantage.",
      vectors: ["supportive"],
      date: "2019-10",
      sourceReference: "QE: Arute et al. 2019, Nature 574",
      sources: [
        {
          citation: "Arute, F. et al. Quantum supremacy using a programmable superconducting processor. Nature 574, 505–510 (2019).",
          url: "https://www.nature.com/articles/s41586-019-1666-5",
          doi: "10.1038/s41586-019-1666-5",
        },
      ],
    },
    {
      id: "IN-002",
      sourceId: "INST-002",
      qualifiedEvent: "IBM rebuttal — Classical simulation in 2.5 days",
      description:
        "Within days of the Google announcement, IBM publishes a preprint (Pednault et al., arXiv:1910.09534) arguing that the same Sycamore circuit can be simulated on the Summit supercomputer in approximately 2.5 days using a combination of secondary storage and tensor contraction strategies. IBM challenges the 10,000-year estimate directly, asserting that Google's classical baseline is not state-of-the-art. The IBM argument does not claim parity in wall-clock time (2.5 days vs. 200 seconds) but reframes the gap from \"practically infeasible\" to \"merely slow.\" This immediately contests the supremacy framing without contesting the performance differential.",
      vectors: ["contesting"],
      date: "2019-10",
      sourceReference: "QE: Pednault et al. 2019, arXiv:1910.09534",
      sources: [
        {
          citation: "Pednault, E. et al. Leveraging Secondary Storage to Simulate Deep 54-qubit Sycamore Circuits. arXiv:1910.09534 (2019).",
          url: "https://arxiv.org/abs/1910.09534",
        },
        {
          citation: "Pednault, E., Maslov, D., Gunnels, J. & Gambetta, J. On ‘quantum supremacy’. IBM Quantum Computing Blog (22 October 2019).",
          url: "https://www.ibm.com/quantum/blog/on-quantum-supremacy",
        },
      ],
    },
    {
      id: "IN-003",
      sourceId: "INST-003",
      qualifiedEvent: "Pan & Zhang — Tensor network classical simulation of Sycamore circuits",
      description:
        "Feng Pan and Pan Zhang (Chinese Academy of Sciences) develop a tensor network method that generates one million correlated bitstrings from the Sycamore circuit using a cluster of 60 GPUs (arXiv:2103.03074, 2021). A follow-up paper (Pan, Chen & Zhang, Physical Review Letters 129, 090502, 2022) solves the sampling problem classically, demonstrating that uncorrelated samples matching Google's fidelity target can be produced in hours rather than millennia. This result substantially narrows the performance gap and challenges the \"infeasible\" characterisation at the heart of the supremacy claim.",
      vectors: ["contesting"],
      date: "2021–2022",
      sourceReference: "QE: Pan & Zhang 2021; Pan, Chen & Zhang 2022, PRL 129",
      sources: [
        {
          citation: "Pan, F. & Zhang, P. Simulating the Sycamore quantum supremacy circuits. arXiv:2103.03074 (2021).",
          url: "https://arxiv.org/abs/2103.03074",
        },
        {
          citation: "Pan, F., Chen, K. & Zhang, P. Solving the Sampling Problem of the Sycamore Quantum Circuits. Phys. Rev. Lett. 129, 090502 (2022).",
          url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.129.090502",
          doi: "10.1103/PhysRevLett.129.090502",
        },
      ],
    },
    {
      id: "IN-004",
      sourceId: "INST-004",
      qualifiedEvent: "Zhao et al. — Leapfrogging Sycamore: classical simulation 7× faster",
      description:
        "Zhao et al. (arXiv:2406.18889) report a classical simulation using 1,432 GPUs that generates uncorrelated samples for the Sycamore RCS benchmark with higher linear cross-entropy scores and approximately sevenfold faster time-to-solution than the original experiment. They present this as a challenge to first-generation quantum advantage. Section II reports 13.7 kWh for their classical run producing three million samples and compares it with 4.3 kWh attributed to Sycamore cooling water. These are differently specified energy-accounting boundaries, not an established comparison of complete system energy use. The paper also reports a two-order reduction relative to prior classical simulations. Higher XEB is the reported benchmark metric, not by itself proof of more faithful sampling of the ideal distribution. The counter-performance is later evidence; AS-002 does not backdate it into proof that the 2019 comparison was already unsound.",
      vectors: ["contesting--supersession"],
      date: "2024-06",
      sourceReference: "QE: Zhao et al. 2024, arXiv:2406.18889",
      sources: [
        {
          citation: "Zhao, X.-H. et al. Leapfrogging Sycamore: Harnessing 1432 GPUs for 7× Faster Quantum Random Circuit Sampling. arXiv:2406.18889 (2024).",
          url: "https://arxiv.org/abs/2406.18889",
          locator: "Abstract; Section II Summary of Results: 1,432 GPUs, uncorrelated samples, XEB and sevenfold time-to-solution comparison; 13.7 kWh classical run and 4.3 kWh attributed to Sycamore cooling water",
        },
      ],
    },
    {
      id: "IN-005",
      sourceId: "INST-005",
      qualifiedEvent: "Google Willow — Below-threshold quantum error correction",
      description:
        "Google Quantum AI publishes in Nature (638, 920–926) results from Willow, a 105-qubit superconducting processor that achieves below-threshold error correction using the surface code. Each increase in code distance (from 3 to 5 to 7) halves the logical error rate — the first demonstration of exponential error suppression with increasing system size. The logical qubit lifetime exceeds its best physical qubit by a factor of 2.4×. This result does not directly defend the original 2019 supremacy claim. Instead, it represents a claim migration: the research programme has moved from demonstrating that quantum devices can outperform classical computers on a specific benchmark to demonstrating that quantum error correction can scale — a prerequisite for fault-tolerant computation.",
      vectors: ["partial--claim-migration"],
      date: "2024-12",
      sourceReference: "QE: Google Quantum AI 2024, Nature 638",
      sources: [
        {
          citation: "Google Quantum AI and Collaborators. Quantum error correction below the surface code threshold. Nature 638, 920–926 (2025); published online 9 December 2024.",
          url: "https://www.nature.com/articles/s41586-024-08449-y",
          doi: "10.1038/s41586-024-08449-y",
        },
      ],
    },
    {
      id: "IN-006",
      sourceId: "INST-006",
      qualifiedEvent: "Google Willow — Extended RCS benchmark (10²⁵ years classical estimate)",
      description:
        "Alongside the error correction result, Google reports that Willow performs a Random Circuit Sampling benchmark (larger circuit than Sycamore, approximately double the qubits with greater circuit depth) in under five minutes — a task they estimate would require 10²⁵ years on the largest classical supercomputer. This reasserts the supremacy framing at a vastly expanded scale. However, the claim inherits the same structural vulnerability as the 2019 result: the classical estimate is produced by the claimant, has not been independently verified, and is subject to the same trajectory of classical algorithm improvements that eroded the original 10,000-year estimate.",
      vectors: ["supportive--inherited-vulnerability"],
      date: "2024-12",
      sourceReference: "QE: Google Quantum AI, Willow RCS benchmark 2024",
      sources: [
        {
          citation: "Neven, H. Meet Willow, our state-of-the-art quantum chip. Google Quantum AI (9 December 2024).",
          url: "https://blog.google/innovation-and-ai/technology/research/google-willow-quantum-chip/",
          locator: "RCS benchmark: under five minutes; claimant estimate of 10^25 years on a leading classical supercomputer",
        },
      ],
    },
  ],

  assessments: [
    {
      id: "AS-001",
      sourceId: "ASSESSMENT-001",
      date: "2026-06-11",
      pressureState: "fragmenting",
      verificationStage: "VS-03",
      authority: "Observatory Floor (Reconstruction)",
      triggeringInstance: "IN-006",
      summary:
        "The original 2019 quantum supremacy claim has undergone a complete evidence cycle. At announcement, the claim was precise and measurable: 200 seconds versus an estimated 10,000 classical years on a specific Random Circuit Sampling task. Within five years, classical simulation methods improved by orders of magnitude, culminating in the Zhao et al. (2024) result demonstrating classical performance exceeding the original quantum benchmark in both speed and fidelity. The original claim, as stated in 2019, has been effectively superseded.\n\n" +
        "However, the research programme that produced the claim has not collapsed. Google's Willow processor (December 2024) reasserts the supremacy framing at a vastly larger scale (10²⁵ classical years) while simultaneously demonstrating below-threshold quantum error correction — a qualitatively different and more durable achievement. The evidence trajectory has therefore split: the narrow 2019 benchmark claim is contested to the point of supersession, while the broader programme claim (that quantum processors are advancing toward practical computational advantage) has arguably strengthened.\n\n" +
        "This record exhibits the canonical pattern the FCIF subsequently formalised as Claim Migration: the original claim does not resolve cleanly (neither fully vindicated nor retracted) but instead evolves as the claimant shifts the evidential basis to a new formulation that inherits the original's ambition but rests on different technical foundations. The 2019 claim migrated from \"supremacy via RCS on Sycamore\" to \"scalable error correction via surface codes on Willow.\" The Observatory records this as a Fragmenting state: the evidence does not converge on a single verdict because the claim itself has moved.",
      assessorNote: null,
      provenanceNote:
        "Transcribed from S4's reconstruction assessment, issued 2026-06-11 by Observatory Floor (Reconstruction). The 2026-07-22 canonical realignment represents that historical reconstruction content; it does not newly review, reaffirm or ratify FRAGMENTING, and it makes no finding on the assessment's correctness.",
    },
    {
      id: "AS-002",
      sourceId: "GOV-FR-QE-0001-2026-07-22",
      date: "2026-07-22",
      pressureState: "stabilising",
      verificationStage: "VS-04",
      authority: "Operator-ratified governed reassessment",
      triggeringInstance: null,
      summary:
        "Institutional verdict: UNRESOLVED AT THE ORIGINAL COMPARISON POINT; LATER SUPERSEDED. The admitted claim is a time-indexed comparative-performance claim concerning Sycamore's 2019 Random Circuit Sampling demonstration. The experiment and task performance are supported, but the constitutive claim that the task was beyond practical classical reach was not established at the original comparison point because IBM's contemporaneous days-scale analysis left that threshold unresolved. Later classical work, culminating in Zhao et al. (2024), reproduced and surpassed the benchmark comparator. That later result supersedes the demonstrated advantage without automatically proving that the time-indexed 2019 claim was false when made.\n\n" +
        "Pressure State is STABILISING. The uncertainty is now bounded and durable rather than fragmenting: Willow and other successor claims are outside this claim's material commitments, and the original comparison can reopen only through evidence showing that the 2019 comparator was already unsound. Verification Stage is VS-04 — Replication because independent classical work progressed beyond audit to direct reproduction and eventual counter-performance of the claim's constitutive comparator. This is claim-level, adversarial replication; it does not assert independent reproduction of Sycamore hardware or favourable confirmation of the original advantage.",
      assessorNote:
        "Append-only reassessment following the ratified FR-QE-0001 governance inquiry. AS-001 remains preserved as the 2026-06-11 reconstruction assessment and is not rewritten.",
      provenanceNote:
        "Ratified by Stuart Kegg on 2026-07-22 through the Claim-Type Determination, Material-Commitment Reconstruction, Temporality-and-Evidence Application, Institutional Verdict Determination, and Assessment-State Determination. VS-04 was assigned afresh under the canonical evidence-depth semantics and does not rely on the provenance-suspect legacy Pressure-State-to-VS alias.",
    },
  ],

  mechanisms: [
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description:
        "Classical algorithm improvement rate. The 10,000-year classical estimate was produced by Google using their own assessment of the best available classical methods at publication time. Within two years, tensor network methods (Pan & Zhang), improved contraction orderings, and GPU parallelisation reduced the classical simulation time by roughly eight orders of magnitude. Within five years, classical systems exceeded the quantum benchmark. This mechanism is structural: any quantum supremacy claim benchmarked against a static classical baseline is vulnerable to the continuous, incentivised improvement of classical simulation algorithms. The mechanism operated identically against the original Sycamore claim (see FR-QE-0002, RM-001 for the D-Wave parallel).",
    },
    {
      id: "RM-002",
      type: "RESISTANCE MECHANISM",
      description:
        "Benchmark specificity. Random Circuit Sampling was selected as the supremacy benchmark partly because it is believed to be classically hard in the asymptotic limit. However, the specific circuit parameters (53 qubits, 20 cycles, target fidelity ~0.2%) were chosen to be within reach of the Sycamore hardware. Critics have argued that the benchmark was optimised to demonstrate quantum advantage rather than to solve a problem of independent interest. The linear cross-entropy benchmark (XEB) used to verify output quality has itself been challenged: Gao et al. (PRX Quantum, 2024) demonstrated limitations of XEB as a measure of quantum advantage, showing that high XEB scores can be achieved by methods that do not faithfully sample from the target distribution.",
    },
    {
      id: "RM-003",
      type: "RESISTANCE MECHANISM",
      description:
        "Claimant-produced classical baseline. IN-001 records Google's 2019 classical-runtime estimate; IBM's contemporaneous analysis and later classical counter-performance show why such baselines need independent scrutiny. IN-006's Willow estimate is a separate claimant-produced successor estimate retained as context. It cannot validate, reopen or change the time-indexed 2019 claim. The historical erosion supports scrutiny of specific comparators, not a universal rule that every claimant estimate is systematically too high. AS-002 separates the unresolved original comparison from later supersession.",
    },
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description:
        "Definition of \"practical infeasibility.\" The supremacy claim depends on a threshold concept: a task is beyond classical reach if no classical computer can perform it in any reasonable timeframe. But \"reasonable\" is undefined and shifts with available hardware. IBM's 2.5-day rebuttal accepted the performance gap but contested whether it constituted infeasibility. As classical methods improve, the boundary between \"slow\" and \"infeasible\" remains contested. This bottleneck may be irreducible for any supremacy claim benchmarked on a fixed-size circuit.",
    },
    {
      id: "BN-002",
      type: "BOTTLENECK",
      description:
        "Successor context must not obscure the bounded verdict. AS-002 already governs the original 2019 Sycamore comparison: unresolved at its original comparison point and later superseded. Willow error correction and expanded RCS are outside that claim's material commitments. A claimant's later research direction or absence of formal retraction does not prevent this institutional verdict, and successor progress does not make the original evidence fragmenting. Context may be retained without treating the admitted claim kernel as having migrated.",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description:
        "Evidence at the original comparison point. The reopening route specified by AS-002 is evidence showing that the 2019 classical comparator was already unsound. A source-grounded reconstruction of contemporaneously available algorithms, hardware, sampling conditions and practical-runtime assumptions could sharpen that comparison. Later classical speedups establish supersession without automatically proving original falsity; Willow scaling or successor error-correction achievements do not satisfy this record's reopening condition.",
    },
  ],

  lineage: {
    items: [
      { year: "2012", text: "Preskill coins \"quantum supremacy.\" John Preskill introduces the term to describe the point at which a quantum device performs a task that no classical computer can match in any practical timeframe. The concept is explicitly narrow — it does not require the task to be useful, only infeasible classically." },
      { year: "2016", text: "Boixo et al. — Random Circuit Sampling proposed as supremacy benchmark. Google researchers propose RCS as a concrete experimental target for demonstrating quantum supremacy, arguing that sampling from random quantum circuits is classically hard under plausible complexity-theoretic assumptions." },
      { year: "2019", text: "Arute et al. — Sycamore quantum supremacy claim. Google publishes the landmark result: 200 seconds vs. estimated 10,000 classical years. The claim generates global media coverage and immediately enters contested status via the IBM rebuttal. Claim status: active, escalating." },
      { year: "2020", text: "Terminology shift. Google and others begin using \"quantum advantage\" in preference to \"quantum supremacy,\" partly in response to cultural criticism of the term and partly to broaden the framing beyond a single benchmark. Preskill himself endorses the shift. The underlying claim is unchanged but the public framing softens." },
      { year: "2021", text: "Pan & Zhang — classical simulation closes the gap. Tensor network methods demonstrate that the Sycamore circuit can be classically simulated using modest GPU clusters. The 10,000-year estimate begins its collapse. Chinese research groups lead the effort, motivated by the Zuchongzhi quantum processors pursuing similar claims." },
      { year: "2022", text: "Pan, Chen & Zhang — sampling problem solved classically. Publication in Physical Review Letters confirms classical methods can solve the Sycamore sampling problem. The original supremacy claim is now contested at the level of demonstrated classical capability, not merely theoretical argument." },
      { year: "2024", text: "Zhao et al. report classical counter-performance of the original Sycamore benchmark with 1,432 GPUs, higher XEB scores and approximately sevenfold faster time-to-solution. Google also announces Willow error correction and an expanded RCS claimant estimate. AS-002 treats the former as later supersession, without automatically proving the 2019 claim false when made, and retains the latter only as successor context outside the admitted claim's material commitments." },
    ],
    relatedRecords: [
      { id: "FR-QE-0002", relationship: "related", note: "S4 related-record reference" },
      { id: "FR-QE-0003", relationship: "related", note: "S4 related-record reference" },
      { id: "FR-QE-0007", relationship: "related", note: "S4 related-record reference" },
      { id: "FR-QE-0008", relationship: "related", note: "S4 related-record reference" },
    ],
  },

  openQuestions: [
    { id: "OQ-001", sourceId: "OQ-1", question: "As a contextual successor question, how would an independent classical challenge test Willow's claimant-produced RCS estimate and its susceptibility to algorithmic improvement? No forecast date or inevitable separation follows from the estimate alone. Any Willow finding requires its own claim-specific review and cannot by itself resolve or reopen the time-indexed 2019 Sycamore comparison.", raisedDate: "2026-06-11" },
    { id: "OQ-002", sourceId: "OQ-2", question: "AS-002 fixes this record to the original 2019 Sycamore comparison and distinguishes later supersession from original falsity. How should contextual Sycamore-to-Willow programme history be linked to separately governed successor claims without merging their material commitments or recasting the bounded verdict as unresolved claim migration? This is a representation question, not a prerequisite to the existing verdict or an authorised decomposition.", raisedDate: "2026-06-11" },
    { id: "OQ-003", sourceId: "OQ-3", question: "Willow error correction in IN-005 is retained as contextual successor history outside the 2019 claim's material commitments. How should that context link to FR-QE-0003 and FR-QE-0008, where error-correction evidence can engage their own claims, without treating it as evidence for the original RCS comparison?", raisedDate: "2026-06-11" },
    { id: "OQ-004", sourceId: "OQ-4", question: "AS-002 assigns STABILISING / VS-04 to this time-indexed claim: unresolved at the original comparison point and later superseded. How should the Observatory display a strengthening successor programme alongside that bounded verdict without combining the trajectories into FRAGMENTING or implying that successor progress changes the original pressure state? This remains a representation question, not a new pressure-state determination.", raisedDate: "2026-06-11" },
    { id: "OQ-005", sourceId: "OQ-5", question: "Do claimant-produced baselines followed by classical erosion recur in sufficiently comparable, source-grounded cases to warrant a named mechanism? How should such a review distinguish actual changes to an admitted claim from contextual successor research? FR-QE-0002 offers a comparison candidate, but a shared institutional pattern should not be presumed or used to revise this record's settled material commitments.", raisedDate: "2026-06-11" },
  ],

  mutationLog: [
    {
      "id": "M-011",
      "date": "2026-10-08",
      "field": "reference_corrected",
      "from": "Active successor framing inconsistent with the ratified AS-002 boundary",
      "to": "Current explanatory fields aligned with the time-indexed verdict",
      "note": "Editorial Correction (GP-001): RM-003, BN-002, AT-001, 2024 lineage and OQ-001–OQ-005 aligned with AS-002. Willow remains contextual successor history, not claim-bearing evidence for 2019. Claim, AS-001/AS-002, reconstruction metadata and original question identifiers/source IDs/raised dates unchanged. No new pressure state, claim decomposition or framework determination. Previous values: docs/reviews/LPR-001-D37-FR-QE-0001-CORRECTION-2026-10-08.json."
    },
    {
      "id": "M-010",
      "date": "2026-10-08",
      "field": "reference_corrected",
      "from": "LPR-001-D37 discrepancies_found / pending",
      "to": "LPR-001-D37 discrepancies_corrected / completed",
      "note": "Operator-authorised bounded source-representation correction of IN-004. Full-text verification qualifies the D37 finding itself: Zhao et al. report 13.7 kWh for their classical run versus 4.3 kWh attributed to Sycamore cooling water, with differently specified accounting boundaries. Replaced vague energy/footprint and higher-fidelity language with reported quantities and XEB limits; locator enriched. Other instances and all assessments unchanged. Review ID and 2026-10-01 review date preserved; no new provenance cycle or scientific evidence admitted. The separate 2025 simulation candidate remains outside this correction. Receipt and closure: docs/provenance/LPR-001-D37-FR-QE-0001-CORRECTION.md; previous values: docs/reviews/LPR-001-D37-FR-QE-0001-CORRECTION-2026-10-08.json."
    },
    { id: "M-009", date: "2026-10-04", field: "provenance_correction", from: "provenanceOutcome: discrepancy_pending", to: "provenanceOutcome: discrepancies_found", note: "Build-contract repair: normalized the unsupported review marker to the governed value consistent with M-008. The D37 discrepancy remains pending; no evidence correction, assessment change, or review completion is implied." },
    {
      id: "M-008",
      date: "2026-10-01",
      field: "provenance_review",
      from: "LPR-001-D13",
      to: "LPR-001-D37",
      note:
        "Legacy Provenance Review completed across all six existing evidence instances. IN-001, IN-002, IN-003, IN-005 and IN-006 remain materially source-faithful. IN-004 has a bounded source-representation discrepancy: Zhao et al. directly support 1,432 GPUs, uncorrelated samples, higher XEB and sevenfold faster time-to-solution than Sycamore, but the record additionally states that the comparison used substantially greater energy consumption than the quantum device; the cited paper instead emphasizes improved classical energy efficiency relative to prior classical simulations and does not support that specific quantum-device energy comparison in the represented source text. No silent repair made; correction pending operator approval. A separate 2025 Sycamore-class simulation was surfaced as a Normal Record Review candidate and not admitted through LPR-001. Completion marker recorded so the deterministic queue advances.",
    },
    {
      id: "M-007",
      date: "2026-09-11",
      field: "provenance_review",
      from: "—",
      to: "LPR-001-D13",
      note:
        "Legacy Provenance Review completed. All six evidence instances were audited against identifiable underlying sources and found materially faithful to those sources. Structured PA-002 sources[] were added for Arute et al. 2019, the contemporaneous IBM/Pednault rebuttal, Pan & Zhang 2021, Pan/Chen/Zhang 2022, Zhao et al. 2024, Google's Willow below-threshold error-correction paper, and Google's December 2024 Willow RCS announcement. No factual, interpretive, attribution, pressure-state or verification-stage discrepancy requiring governed correction was identified. The Willow 10^25-year classical estimate remains a claimant-produced estimate and, as represented in IN-006, has not been independently reproduced by a matching classical simulation. No new evidence was admitted and no normal Record Review candidate was generated by this provenance pass.",
    },
    {
      id: "M-006",
      date: "2026-07-22",
      field: "assessment_issued",
      from: "AS-001",
      to: "AS-002",
      note:
        "Append-only canonical reassessment issued after completion of the governed FR-QE-0001 inquiry. Institutional verdict: UNRESOLVED AT THE ORIGINAL COMPARISON POINT; LATER SUPERSEDED. Pressure State changed from FRAGMENTING to STABILISING because successor claims, including Willow, are outside the admitted claim's material commitments and the remaining uncertainty is bounded. Verification Stage changed from VS-03 to VS-04 under the canonical evidence-depth semantics because independent classical work directly reproduced and ultimately counter-performed the constitutive benchmark comparator. VS-04 is claim-level adversarial replication, not independent reproduction of Sycamore hardware. AS-001 and all earlier history remain preserved.",
    },
    {
      id: "M-005",
      date: "2026-07-22",
      field: "canonical_baseline_realigned",
      from: "S5b @ 45a2ad096b178f115083e495ff892253db2a404e",
      to: "S4 fidelity-checked transcription",
      note:
        "S4 was ratified as the operative reconstruction-era baseline on 2026-07-21. The Current Canonical Conformity Check found S5b materially non-conforming due to undocumented S4-to-S5 conversion divergence. FR-QE-0001 was corrected in place through a fidelity-checked transcription of S4. S5 (586ac0ccd7ba38d0389c12f5031785ecfc5c24de) and final pre-realignment S5b (45a2ad096b178f115083e495ff892253db2a404e; unchanged FR-QE-0001 file Git blob e374f039c969ae0b8e80d853f563e54ef7577d6a) remain preserved in Git history and the governance audit trail. This act does not recover the lost 2024 admission. No claim-type, temporality, continuity, pressure-state correctness or verdict determination was made, and S4's FRAGMENTING assessment was not newly reviewed, reaffirmed or ratified.",
    },
    {
      id: "M-004",
      date: "2026-06-11",
      field: "record_reconstructed",
      from: "Lost original FR-QE-0001",
      to: "S4 reconstruction",
      note:
        "Original FR-QE-0001 lost. Record reconstructed as mature FCIF version incorporating full claim lifecycle through December 2024. Reconstruction decision: Possibility C (post-case-study version) selected over pre-FCIF reconstruction to produce the canonical anchor record for FCIF Constitutional Case: Google Quantum Advantage. INST-004 through INST-006 added. Assessment reissued at FRAGMENTING. Mechanisms and lineage expanded to reflect complete evidence trajectory.",
    },
    {
      id: "M-003",
      date: "2024-01-01",
      field: "assessment_issued",
      from: "—",
      to: "Original assessment (approximate)",
      note:
        "Original assessment issued. Pressure state: EMERGING (per FR-QE-0002 post-production review reference). Approximate pre-reconstruction entry preserved from S4.",
    },
    {
      id: "M-002",
      date: "2024-01-01",
      field: "instances_logged",
      from: "—",
      to: "INST-001 through INST-003 (approximate)",
      note:
        "INST-001 through INST-003 added (original record scope). Approximate pre-reconstruction entry preserved from S4.",
    },
    {
      id: "M-001",
      date: "2024-01-01",
      field: "record_created",
      from: "—",
      to: "FR-QE-0001 (approximate)",
      note:
        "FR-QE-0001 opened. Claim ratified. Programme: PROG-QE. Original record subsequently lost. Approximate pre-reconstruction entry preserved from S4.",
    },
  ],

  status: "open",
};
