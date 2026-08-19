/**
 * FR-AI-0009 — World Models — Physical Prediction and Transfer
 * Programme: PROG-AI
 * Admitted 2026-08-19 following bounded AI Programme Coverage Review and
 * canonical Admission and Commitment Record.
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_AI_0009 = {
  id: "FR-AI-0009",
  programme: "PROG-AI",

  claim: {
    statement: "AI systems can learn predictive representations of the physical world that support reliable action when the objects, environment, task, or embodiment differ materially from those encountered during training.",
    shortLabel: "World Models — Physical Prediction and Transfer",
    openedDate: "2026-08-19",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "DreamerV3 — general world-model control across more than 150 tasks",
      description: "World-model-based control generalises across an unusually broad benchmark suite under one algorithmic configuration, establishing that learned latent dynamics can support action across heterogeneous task domains. Hafner et al. report DreamerV3 mastering more than 150 diverse control tasks with a single configuration and outperforming specialised methods across the evaluated benchmarks. This is substantive evidence that world-model planning can support broad control capability, but the evidence is primarily benchmark and simulated-environment generality rather than the record's harder requirement of reliable physical transfer across materially changed real-world objects, environments or embodiments.",
      vectors: ["partial--broad-control-generality-without-real-world-transfer"],
      date: "2023–25",
    },
    {
      id: "IN-002",
      qualifiedEvent: "V-JEPA 2-AC — zero-shot robot planning in two new laboratory environments",
      description: "This is the strongest current supportive evidence for bounded physical transfer. Assran et al. pre-train V-JEPA 2 on more than one million hours of video and then post-train an action-conditioned world model using less than 62 hours of unlabeled DROID robot video. V-JEPA 2-AC is deployed zero-shot on Franka arms in two different laboratories for image-goal reaching, grasping and pick-and-place without collecting robot data in the target environments and without task-specific training or reward. The result demonstrates useful action-conditioned prediction surviving a meaningful environment shift. It does not yet establish broad task transfer or cross-embodiment transfer because the deployment remains within a constrained manipulation setting and the same general robot platform family.",
      vectors: ["supportive--bounded-zero-shot-physical-transfer"],
      date: "2025",
    },
    {
      id: "IN-003",
      qualifiedEvent: "Genie 3 — real-time interactive generated worlds with bounded consistency",
      description: "Interactive world simulation advances materially, but the result is not equivalent to reliable physical transfer. Google DeepMind reports that Genie 3 generates 720p interactive environments at roughly 24 frames per second, responds to user actions and maintains environmental consistency for several minutes. DeepMind also states important limits: agent action space is constrained, multi-agent interaction remains difficult, real-world locations are not represented with perfect accuracy, and continuous interaction lasts minutes rather than hours. The evidence therefore supports increasingly capable action-responsive simulation while leaving the record's physical-fidelity and real-world functional-utility commitments unresolved.",
      vectors: ["partial--interactive-simulation-with-transfer-unproven"],
      date: "2025",
    },
    {
      id: "IN-004",
      qualifiedEvent: "MiraBench — visual fidelity fails as a proxy for action-conditioned reliability",
      description: "Direct benchmark evidence contests the assumption that realistic generated futures are reliable enough for robot planning. Yang et al. introduce MiraBench with more than 16,000 human judgments across 12 representative world-model configurations, evaluating physics adherence, action-following fidelity and optimism bias under failure-inducing actions. The study reports that visual fidelity is a poor proxy for action fidelity, increasing model scale does not reliably improve action following, and optimism bias is pervasive. This directly pressures intervention fidelity and physical fidelity: a model can generate a convincing future while failing to represent what the commanded action would actually cause.",
      vectors: ["contesting--visual-fidelity-does-not-imply-action-reliability"],
      date: "2026",
    },
    {
      id: "IN-005",
      qualifiedEvent: "What-If World — causal intervention benchmark exposes systematic failures",
      description: "State-of-the-art video world models remain brittle when a physically meaningful variable is changed while the rest of a scene is held stable. Cai et al. construct 319 paired interventions from nuScenes and DROID and evaluate whether generated futures diverge in the way the changed physical condition requires. Across nine models, no system exceeds 52% on the paired score and every tested model fails a substantial fraction of causal interventions. The result is important because each individual video may look plausible while the pair reveals that the model did not track the causal consequence of the intervention. This directly contests the claim's intervention-fidelity commitment.",
      vectors: ["contesting--causal-intervention-fidelity-remains-weak"],
      date: "2026",
    },
    {
      id: "IN-006",
      qualifiedEvent: "RoboWM-Bench — generated manipulation behaviours remain difficult to execute physically",
      description: "Embodiment-grounded evaluation shows that visually plausible predicted behaviour still fails at the boundary where an embodied system must execute it. Jiang et al. convert generated human-hand and robotic manipulation videos into embodied action sequences and validate them through robotic execution. Across evaluated world models, reliably generating physically executable behaviour remains an open challenge; reported failure modes include spatial-reasoning errors, unstable contact prediction and non-physical deformation. Fine-tuning on manipulation data improves results but does not remove the physical inconsistencies. This directly contests physical fidelity and functional utility.",
      vectors: ["contesting--physically-executable-behaviour-remains-unreliable"],
      date: "2026",
    },
    {
      id: "IN-007",
      qualifiedEvent: "Mechanistic evidence — physical variables emerge in distributed video-model representations",
      description: "Mechanistic analysis supplies supportive context for the possibility that useful physical prediction need not resemble an explicit physics engine. Joseph et al. probe large-scale video encoders and report an intermediate-depth transition where speed, acceleration and motion-direction information becomes accessible, with physical variables represented in distributed high-dimensional structures rather than compact factorised state variables. The result bears on mechanism, not transfer: it supports the plausibility that learned representations contain action-relevant physical structure while not establishing that the structure remains sufficiently faithful for reliable planning under changed environments or embodiments.",
      vectors: ["partial--physical-structure-represented-transfer-unresolved"],
      date: "2026",
    },
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2026-08-19",
      pressureState: "escalating",
      verificationStage: "VS-02",
      summary: "The claim enters the corpus under genuine two-sided pressure. V-JEPA 2-AC (IN-002) is substantive supportive evidence: after large-scale observational pretraining and limited robot-video adaptation, a learned action-conditioned model supported zero-shot planning on Franka arms in two target laboratories without target-environment robot data or task-specific reward. DreamerV3 (IN-001) independently shows broad world-model control generality across more than 150 tasks, and Genie 3 (IN-003) shows that interactive action-responsive simulation has advanced beyond passive video generation. Those results do not settle the class-level claim. MiraBench (IN-004), What-If World (IN-005) and RoboWM-Bench (IN-006) directly expose the central boundary: visually plausible futures can be wrong about commanded actions, causal interventions, contact dynamics and executable behaviour. The Pressure State is ESCALATING because credible positive capability and credible failure evidence are both strengthening. Verification Stage is VS-02 because bounded demonstrations and dedicated challenge benchmarks now exist, but reliable transfer across materially different tasks and embodiments has not yet received sufficiently broad independent audit or operational replication.",
      assessorNote: "Admission evidence basis: Hafner et al., Nature 640 (2025), 'Mastering diverse control tasks through world models'; Assran et al., arXiv:2506.09985 (2025), 'V-JEPA 2: Self-Supervised Video Models Enable Understanding, Prediction and Planning'; Google DeepMind, 'Genie 3: A new frontier for world models' (2025); Yang et al., arXiv:2605.29360 (2026), 'MiraBench'; Cai et al., arXiv:2605.27589 (2026), 'What-If World'; Jiang et al., arXiv:2604.19092 (2026), 'RoboWM-Bench'; Joseph et al., ICML / arXiv:2602.07050 (2026), 'Interpreting Physics in Video World Models'. Formal admission and material commitments recorded in Drive on 2026-08-19.",
    },
  ],

  mechanisms: [
    {
      id: "BN-001",
      type: "BOTTLENECK — MEASUREMENT VALIDITY",
      description: "Visual plausibility as a proxy for action-conditioned and physical fidelity. Conventional video-generation metrics and human realism judgments can rate a future as convincing even when it responds incorrectly to the action or intervention that produced it. MiraBench (IN-004) and What-If World (IN-005) show that this proxy gap is operationally important. The record cannot advance on photorealism alone; evidence must increasingly test whether predicted consequences are causally and physically appropriate for the action taken.",
    },
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Distribution and embodiment shift. Predictive representations can encode camera geometry, local object distributions, robot morphology and interaction statistics that are stable inside the training distribution but change under deployment. IN-002 demonstrates some environment transfer, but the strongest positive evidence remains within a constrained manipulation setting and one general robot family. Cross-task and cross-embodiment reliability therefore remain the principal generalisation boundary.",
    },
    {
      id: "RM-002",
      type: "RESISTANCE MECHANISM",
      description: "Compounding prediction error under extended interaction. Autoregressive and recurrent world models repeatedly condition later predictions on earlier predicted states, allowing small spatial, contact or causal errors to accumulate. Genie 3 (IN-003) explicitly identifies interaction duration as bounded, while RoboWM-Bench (IN-006) documents local physical inconsistencies that can become execution failures. Long-horizon reliability is therefore harder than short-horizon visual coherence.",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Scalable observational pretraining plus sparse action-conditioned adaptation. V-JEPA 2-AC (IN-002) suggests that very large observational video corpora can supply reusable physical priors which comparatively small quantities of robot interaction data can convert into planning capability. If this pattern replicates across substantially different tasks, environments and embodiments, it would provide a scalable route around the cost of collecting task-specific physical interaction data for every deployment setting.",
    },
  ],

  lineage: {
    items: [
      { year: "2018–22", text: "Learned world models become an explicit control paradigm. Latent-dynamics approaches show that agents can learn compact predictive states and plan or learn policies inside them, establishing the architectural idea without settling broad transfer." },
      { year: "2023–25", text: "DreamerV3 demonstrates unusually broad task coverage under one world-model reinforcement-learning configuration. World-model capability expands across control benchmarks, but most evidence remains inside designed environments." },
      { year: "2025", text: "The frontier moves toward observational pretraining and physical planning. V-JEPA 2-AC demonstrates bounded zero-shot planning in new laboratory environments; Genie 3 demonstrates real-time interactive generated worlds. The claim becomes empirically testable beyond passive prediction." },
      { year: "2026", text: "Dedicated causal and embodiment-grounded benchmarks expose a reliability gap. MiraBench, What-If World and RoboWM-Bench show that visual realism does not reliably imply action fidelity, causal correctness or physically executable behaviour. The frontier shifts from generating plausible worlds to predicting consequences that remain useful under intervention and transfer." },
    ],
    relatedRecords: ["FR-AI-0001", "FR-AI-0005", "FR-AI-0008"],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "What minimum change in object distribution, environment, task or embodiment should count as material transfer rather than interpolation within the training distribution?",
      raisedDate: "2026-08-19",
    },
    {
      id: "OQ-002",
      question: "Can action-conditioned world models become physically reliable without explicit factorised physics variables, or do distributed learned representations create failure modes that only become visible under intervention?",
      raisedDate: "2026-08-19",
    },
    {
      id: "OQ-003",
      question: "Once dedicated causal and execution benchmarks are used, does improvement in generated-world visual fidelity correlate meaningfully with action-conditioned and physically executable fidelity?",
      raisedDate: "2026-08-19",
    },
    {
      id: "OQ-004",
      question: "Can a world model trained largely from observation transfer useful planning capability across materially different robot embodiments without extensive new interaction data?",
      raisedDate: "2026-08-19",
    },
    {
      id: "OQ-005",
      question: "What evidentiary threshold should be required before success in synthetic or generated environments is treated as evidence of reliable action in the corresponding real physical environment?",
      raisedDate: "2026-08-19",
    },
  ],

  mutationLog: [
    // APPEND-ONLY. Newest first.
    { id: "M-005", date: "2026-08-19", field: "diagnosis_held", from: "—", to: "DIAGNOSIS-HELD", note: "Admission diagnosis: ESCALATING / VS-02. Positive bounded transfer evidence and direct reliability counterevidence are both substantive." },
    { id: "M-004", date: "2026-08-19", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "BN-001, RM-001, RM-002 and AT-001 recorded from the admission evidence package." },
    { id: "M-003", date: "2026-08-19", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "AS-001 issued. Pressure State: ESCALATING. Verification Stage: VS-02." },
    { id: "M-002", date: "2026-08-19", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "IN-001 through IN-007 admitted as the initial two-sided evidence set." },
    { id: "M-001", date: "2026-08-19", field: "record_created", from: "—", to: "RECORD-CREATED", note: "FR-AI-0009 admitted following bounded AI Programme Coverage Review and formal claim-type/material-commitment admission gate." },
  ],

  status: "open",
};
