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
    },
    {
      id: "IN-004",
      sourceId: "INST-004",
      qualifiedEvent: "Zhao et al. — Leapfrogging Sycamore: classical simulation 7× faster",
      description:
        "A team led by researchers at the University of Science and Technology of China (Zhao et al., arXiv:2406.18889) reports a classical simulation using 1,432 GPUs that generates uncorrelated samples from the Sycamore RCS benchmark with higher linear cross-entropy scores and approximately 7× faster wall-clock time than the original Sycamore experiment. This is the first published result in which a classical system produces higher-fidelity samples faster than the quantum processor on the same benchmark. The authors note that this challenges the first-generation quantum advantage claim directly, though the comparison involves substantially greater energy consumption and hardware footprint than the quantum device.",
      vectors: ["contesting--supersession"],
      date: "2024-06",
      sourceReference: "QE: Zhao et al. 2024, arXiv:2406.18889",
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
        "Claimant-produced classical baseline. In both 2019 (Sycamore) and 2024 (Willow), the classical difficulty estimate was produced by the same team making the quantum claim. No independent party has verified the 10²⁵-year estimate for the Willow RCS benchmark. The historical pattern — Google's 2019 estimate of 10,000 years was reduced to days within five years by independent researchers — provides a Track Record Prior suggesting that claimant-produced classical baselines systematically overestimate classical difficulty.",
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
        "Claim migration obscures resolution. The original 2019 claim has not been formally retracted, but Google's own research programme has moved to qualitatively different claims (error correction scaling, logical qubit lifetime). The supremacy claim persists in public discourse while the technical frontier has migrated. This creates an assessment bottleneck: the Observatory cannot issue a settled verdict on a claim whose claimant has effectively abandoned its original formulation without conceding its invalidity. The FCIF formalises this pattern as Claim Migration — one of four resolution pathways in the Preliminary Claim Resolution Taxonomy.",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description:
        "Exponential scaling of circuit complexity. Google's Willow result suggests that as qubit count and circuit depth increase, the classical simulation cost grows exponentially while the quantum execution cost grows polynomially. If this scaling relationship holds, classical simulation methods will eventually be unable to track quantum hardware improvements regardless of algorithmic ingenuity. The Willow RCS estimate (10²⁵ years) is far enough beyond the Sycamore estimate (10,000 years) that even multiple orders-of-magnitude classical improvement would not close the gap. This attractor mechanism favours eventual resolution of the broader supremacy claim, though it does not retroactively validate the 2019 formulation.",
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
      { year: "2024", text: "Zhao et al. — Sycamore benchmark superseded classically. A 1,432-GPU cluster produces higher-fidelity samples 7× faster than the original Sycamore experiment. The 2019 claim, as originally formulated, is effectively closed by classical supersession. Simultaneously, Google announces Willow: below-threshold error correction and a new RCS benchmark estimated at 10²⁵ classical years. The claim migrates." },
    ],
    relatedRecords: [
      { id: "FR-QE-0002", relationship: "related", note: "S4 related-record reference" },
      { id: "FR-QE-0003", relationship: "related", note: "S4 related-record reference" },
      { id: "FR-QE-0007", relationship: "related", note: "S4 related-record reference" },
      { id: "FR-QE-0008", relationship: "related", note: "S4 related-record reference" },
    ],
  },

  openQuestions: [
    { id: "OQ-001", sourceId: "OQ-1", question: "Does the Willow RCS benchmark (10²⁵ classical years) resist the same pattern of classical erosion that collapsed the Sycamore estimate? The exponential scaling argument suggests it should, but the Track Record Prior from 2019 counsels caution. What is the earliest date at which an independent classical simulation challenge to the Willow benchmark should be expected?", raisedDate: "2026-06-11" },
    { id: "OQ-002", sourceId: "OQ-2", question: "Should the Observatory decompose this record into two: one for the original 2019 Sycamore RCS supremacy claim (effectively resolved by classical supersession) and one for the broader Google quantum advantage programme trajectory (Sycamore → Willow → fault-tolerant roadmap)? If so, the Migration architecture should govern the decomposition.", raisedDate: "2026-06-11" },
    { id: "OQ-003", sourceId: "OQ-3", question: "The Willow error correction result (INST-005) is qualitatively different from the supremacy claim. Does it belong in this record at all, or should it be tracked exclusively in FR-QE-0003 (fault-tolerant logical qubits) and FR-QE-0008 (error correction scaling)?", raisedDate: "2026-06-11" },
    { id: "OQ-004", sourceId: "OQ-4", question: "What is the correct pressure state for a record whose original claim has been substantially superseded but whose successor claim is strengthening? FRAGMENTING captures the split evidence, but the FCIF Claim Migration pathway suggests this may be a distinct epistemic state not fully described by the existing pressure vocabulary.", raisedDate: "2026-06-11" },
    { id: "OQ-005", sourceId: "OQ-5", question: "Does the pattern observed here — claimant-produced classical baseline, subsequent classical erosion, claim migration to a new formulation — constitute a repeatable signature that should be codified as a named failure mode in the FCIF? The D-Wave trajectory (FR-QE-0002) exhibits a closely parallel structure.", raisedDate: "2026-06-11" },
  ],

  mutationLog: [
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
