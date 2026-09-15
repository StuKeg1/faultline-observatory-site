/**
 * FR-BT-0007 — Implantable Brain–Computer Interfaces — Sustained Communication in Paralysis
 * Programme: PROG-BT
 * Admitted 2026-09-15 following bounded New Record Evaluation.
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_BT_0007 = {
  id: "FR-BT-0007",
  programme: "PROG-BT",

  claim: {
    statement: "Chronically implanted brain–computer interfaces can provide people with severe paralysis with reliable, independently usable communication over sustained everyday use.",
    shortLabel: "Implantable Brain–Computer Interfaces — Sustained Communication in Paralysis",
    openedDate: "2026-09-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "First sentence-decoding speech neuroprosthesis — closed-vocabulary communication in one participant",
      description: "Moses et al. used a chronically implanted electrocorticography array to decode attempted speech from a participant with anarthria caused by brainstem stroke. The system converted cortical activity into words and sentences from a 50-word vocabulary in real time. This established direct speech-decoding feasibility in a person unable to speak, while the restricted vocabulary, participant-specific model and supervised experimental setting left naturalistic and independent communication unresolved.",
      vectors: ["supportive--real-time-sentence-decoding-feasibility-in-paralysis"],
      date: "2021-07-15",
      sourceReference: "Moses et al., New England Journal of Medicine 385 (2021), doi:10.1056/NEJMoa2027540",
      sources: [
        {
          citation: "Moses, D. A. et al. (2021), Neuroprosthesis for Decoding Speech in a Paralyzed Person with Anarthria, New England Journal of Medicine 385, 217–227.",
          url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2027540",
          doi: "10.1056/NEJMoa2027540",
          locator: "Abstract; real-time decoding results; 50-word vocabulary; study limitations",
        },
      ],
    },
    {
      id: "IN-002",
      qualifiedEvent: "Independent high-performance speech neuroprostheses — large-vocabulary text and avatar control",
      description: "Two independent research programmes reported major performance gains in 2023. Willett et al. decoded attempted speech from an intracortical implant in a participant with ALS at 62 words per minute, with a 23.8% word-error rate on a 125,000-word vocabulary. Metzger et al. separately used a high-density electrocorticography implant in a participant with severe paralysis to decode speech and control a personalised speaking avatar. Together the studies moved implanted communication beyond closed-vocabulary feasibility and established convergence across different participants, recording technologies and institutions. Both remained participant-specific research demonstrations rather than sustained independent everyday use.",
      vectors: ["supportive--independent-large-vocabulary-speech-and-avatar-demonstrations"],
      date: "2023-08-23",
      sourceReference: "Willett et al. and Metzger et al., Nature 620 (2023)",
      sources: [
        {
          citation: "Willett, F. R. et al. (2023), A high-performance speech neuroprosthesis, Nature 620, 1031–1036.",
          url: "https://www.nature.com/articles/s41586-023-06377-x",
          doi: "10.1038/s41586-023-06377-x",
          locator: "Abstract; large-vocabulary decoding; communication rate; single-participant boundary",
        },
        {
          citation: "Metzger, S. L. et al. (2023), A high-performance neuroprosthesis for speech decoding and avatar control, Nature 620, 1037–1046.",
          url: "https://www.nature.com/articles/s41586-023-06443-4",
          doi: "10.1038/s41586-023-06443-4",
          locator: "Abstract; online decoding; speech synthesis and avatar-control results; study limitations",
        },
      ],
    },
    {
      id: "IN-003",
      qualifiedEvent: "Rapidly calibrating speech neuroprosthesis — high accuracy after limited enrolment data",
      description: "Card et al. demonstrated a speech neuroprosthesis in a participant with ALS that achieved useful real-time accuracy after comparatively limited calibration data and improved as additional data accumulated. The result addressed a practical barrier exposed by earlier systems: a communication interface cannot be independently useful if extensive supervised retraining is continually required. It remains supportive but bounded evidence because calibration and performance were demonstrated in one participant with a participant-specific intracortical system.",
      vectors: ["supportive--reduced-calibration-burden-with-participant-specific-boundary"],
      date: "2024-08-15",
      sourceReference: "Card et al., New England Journal of Medicine 391 (2024), doi:10.1056/NEJMoa2314132",
      sources: [
        {
          citation: "Card, N. S. et al. (2024), An Accurate and Rapidly Calibrating Speech Neuroprosthesis, New England Journal of Medicine 391, 609–618.",
          url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2314132",
          doi: "10.1056/NEJMoa2314132",
          locator: "Abstract; calibration trajectory; online decoding performance; single-participant design",
        },
      ],
    },
    {
      id: "IN-004",
      qualifiedEvent: "Streaming brain-to-voice systems — lower-latency and personalised synthetic speech",
      description: "Independent 2025 studies advanced communication output from completed-text decoding towards continuously generated speech. Littlejohn et al. reported streaming synthesis and text decoding from a chronically implanted electrocorticography interface, including unprompted attempted speech. Wairagkar et al. separately generated near-instantaneous personalised voice from intracortical activity; human listeners transcribed the synthetic output substantially more accurately than the participant's residual dysarthric speech. These systems strengthen the functional-communication claim by reducing latency and restoring expressive voice characteristics, but each was evaluated in one participant and neither established sustained independent everyday operation.",
      vectors: ["supportive--streaming-personalised-voice-improves-naturalistic-communication"],
      date: "2025-06-12",
      sourceReference: "Littlejohn et al., Nature Neuroscience 28 (2025); Wairagkar et al., Nature 644 (2025)",
      sources: [
        {
          citation: "Littlejohn, K. T. et al. (2025), A streaming brain-to-voice neuroprosthesis to restore naturalistic communication, Nature Neuroscience 28, 902–912.",
          url: "https://www.nature.com/articles/s41593-025-01905-6",
          doi: "10.1038/s41593-025-01905-6",
          locator: "Abstract; streaming architecture; real-time and unprompted communication results; limitations",
        },
        {
          citation: "Wairagkar, M. et al. (2025), An instantaneous voice-synthesis neuroprosthesis, Nature 644, 145–152.",
          url: "https://www.nature.com/articles/s41586-025-09127-3",
          doi: "10.1038/s41586-025-09127-3",
          locator: "Abstract; real-time brain-to-voice pipeline; human-listener evaluation; single-participant boundary",
        },
      ],
    },
    {
      id: "IN-005",
      qualifiedEvent: "Long-term independent home use — 3,800 hours of speech and computer access",
      description: "Card et al. report that one participant with ALS used an intracortical speech-and-cursor BCI independently at home for more than 3,800 hours over nearly two years. The system supported 183,060 communicated sentences totalling almost two million words, together with email, internet access and employment-related computer use; the participant rated most sentences as at least mostly correct. This is the strongest direct evidence that an implanted BCI can cross from supervised laboratory performance into sustained everyday communication. It does not establish population-level reliability: the result concerns one highly supported participant, retained percutaneous connections and substantial external equipment, and has not been independently reproduced at comparable duration.",
      vectors: ["supportive--sustained-independent-everyday-communication-in-one-participant"],
      date: "2026-06-15",
      sourceReference: "Card et al., Nature Medicine (2026), doi:10.1038/s41591-026-04414-6",
      sources: [
        {
          citation: "Card, N. S. et al. (2026), Long-term independent use of an intracortical brain–computer interface for speech and cursor control, Nature Medicine.",
          url: "https://www.nature.com/articles/s41591-026-04414-6",
          doi: "10.1038/s41591-026-04414-6",
          locator: "Abstract; independent-use duration; personal-use communication results; system and generalisability limitations",
        },
      ],
    },
    {
      id: "IN-006",
      qualifiedEvent: "Simultaneous speech-and-gesture decoding — multimodal avatar proof of concept",
      description: "Brosler et al. showed that one high-density electrocorticography implant could support simultaneous attempted-speech and communicative-gesture decoding. Three participants contributed multi-effector representation data and two used parallel decoders to control personalised avatars in real time. The result broadens the possible communication channel beyond speech alone, but also exposes context dependence: models trained only on isolated behaviours did not automatically generalise to simultaneous attempts, and performance improved when both contexts were represented in training. Restricted vocabularies, two real-time users and the experimental setting make this a bounded capability-extension instance rather than evidence of independent everyday use.",
      vectors: ["partial--multimodal-communication-demonstrated-with-context-and-scale-limits"],
      date: "2026-09-14",
      sourceReference: "Brosler et al., Nature Neuroscience (2026), doi:10.1038/s41593-026-02446-2",
      sources: [
        {
          citation: "Brosler, S. C. et al. (2026), Simultaneous speech and gesture decoding for multimodal communication in paralysis, Nature Neuroscience.",
          url: "https://www.nature.com/articles/s41593-026-02446-2",
          doi: "10.1038/s41593-026-02446-2",
          locator: "Abstract; participant and vocabulary descriptions; context-generalisation analysis; real-time conversation paradigm; limitations",
        },
      ],
    },
    {
      id: "IN-007",
      qualifiedEvent: "Clinical-trials review — growing field remains heterogeneous and unapproved",
      description: "Patrick-Krueger et al. identified 28 implanted-BCI clinical trials conducted by 21 research groups, involving 67 implanted participants and four electrode-array types through 2023. The review establishes institutional durability and increasing implant longevity, but reports variable consistency and performance across individuals, severe participant under-representation, weak shared standards and no regulatory approval for an implanted BCI medical device. The broad participant count must not be mistaken for replication of sustained speech communication: it combines communication, motor-control and sensory-restoration studies. This is field-level contesting evidence that isolated high-performance results have not yet become a reproducible clinical modality.",
      vectors: ["contesting--clinical-heterogeneity-and-translation-gap-remain"],
      date: "2025-01",
      sourceReference: "Patrick-Krueger, Burkhart and Contreras-Vidal, Nature Reviews Bioengineering 3 (2025), doi:10.1038/s44222-024-00239-5",
      sources: [
        {
          citation: "Patrick-Krueger, K. M., Burkhart, I. and Contreras-Vidal, J. L. (2025), The state of clinical trials of implantable brain–computer interfaces, Nature Reviews Bioengineering 3, 50–67.",
          url: "https://www.nature.com/articles/s44222-024-00239-5",
          doi: "10.1038/s44222-024-00239-5",
          locator: "Abstract; key points; trial and participant inventory; variability, representation, standards and regulatory constraints",
        },
      ],
    },
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2026-09-15",
      pressureState: "emerging",
      verificationStage: "VS-03",
      summary: "The claim enters the corpus after implanted speech neuroprostheses progressed from closed-vocabulary sentence decoding to large-vocabulary text, avatar control, reduced calibration burden and streaming personalised speech across several independent research programmes. The strongest operational evidence is a 2026 report of more than 3,800 hours of independent home use over nearly two years, supporting communication and computer access for one participant with ALS. A separate 2026 study broadens the capability to simultaneous speech and communicative gestures while showing that decoder performance is context dependent. The evidence therefore reaches VS-03: the underlying communication capability has been demonstrated repeatedly and subjected to clinical and field-level audit, but the full claim of sustained, independently usable everyday communication has not been replicated across participants or centres. The Pressure State is EMERGING because evidence is advancing coherently while current resistance is concentrated in participant scarcity, biological variability, chronic interface constraints and operational burden rather than mature failed replications.",
      assessorNote: "Admitted following bounded New Record Evaluation completed on 2026-09-15. The record is allocated to PROG-BT because the governing frontier is reliable function at a chronic human neural interface in clinical and everyday settings; decoding models are enabling components rather than the claim object. The record is limited to implanted systems providing communication for people with severe paralysis. Non-invasive decoding, therapeutic stimulation, consumer augmentation, motor restoration without a communication endpoint and unrestricted mental-state inference are outside scope. Cursor control is relevant only when it materially enables communication. The June 2026 long-term-use result is retained as the strongest operational evidence but remains a single-participant instance.",
    },
  ],

  mechanisms: [
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "Cross-participant clinical generalisation. Current high-performance systems are trained around individual neural anatomy, signal characteristics, attempted-speech patterns and clinical condition. Demonstrating excellent communication in one participant does not establish that comparable performance, calibration burden and functional benefit can be reproduced across people with different causes and degrees of paralysis. This is the load-bearing bottleneck between individual feasibility and a clinical communication modality.",
    },
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Chronic interface stability and safety. Intracranial electrodes, tissue responses, connector integrity and recorded neural populations can change over time. A system may produce high short-term accuracy yet fail to preserve stable signals or impose an unacceptable surgical, infection or maintenance burden during long-term use.",
    },
    {
      id: "RM-002",
      type: "RESISTANCE MECHANISM",
      description: "Context dependence and neural non-stationarity. Prompted training tasks do not fully represent spontaneous conversation, concurrent behaviours, fatigue, posture, disease progression or day-to-day signal change. The 2026 multimodal study shows directly that decoders trained on isolated behaviours did not automatically generalise to simultaneous attempts, requiring context-inclusive data and continuing adaptation.",
    },
    {
      id: "RM-003",
      type: "RESISTANCE MECHANISM",
      description: "Operational dependency. Percutaneous connections, external computing hardware, specialist configuration, caregiver setup and recurrent supervised recalibration can prevent a technically capable decoder from becoming independently usable. Laboratory accuracy supports the governing claim only to the extent that the surrounding system can be operated reliably in everyday settings.",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Replicated sustained independent communication. Implanted systems provide clinically meaningful spontaneous communication over months or years to multiple people with severe paralysis across independent clinical centres, with stable performance, manageable calibration and caregiver burden, acceptable implant safety and routine operation without continuous researcher intervention. Consistency across different causes of paralysis and materially different implant architectures would provide stronger resolution evidence.",
    },
  ],

  lineage: {
    items: [
      { year: "2021", text: "A chronically implanted cortical interface decodes attempted speech into sentences from a restricted vocabulary in a person with anarthria, establishing real-time feasibility while leaving naturalistic communication unresolved." },
      { year: "2023", text: "Independent intracortical and electrocorticography programmes demonstrate large-vocabulary high-rate decoding, synthetic speech and avatar control. The frontier moves from basic feasibility towards communication quality and generalisation." },
      { year: "2024–25", text: "Rapid calibration, streaming output and personalised voice synthesis reduce latency and interaction burden. Results remain concentrated in individual, participant-specific systems operated primarily under research conditions." },
      { year: "2026-06", text: "One participant uses a speech-and-cursor intracortical BCI independently at home for more than 3,800 hours over nearly two years. Sustained everyday utility becomes directly observable, but not yet replicated." },
      { year: "2026-09", text: "A separate electrocorticography study demonstrates simultaneous speech-and-gesture avatar control and exposes context dependence between isolated and concurrent behaviour." },
      { year: "2026 onward", text: "The decisive frontier is clinical generalisation: whether sustained independent communication can be reproduced across participants, conditions, centres and implant architectures with acceptable safety and operational burden." },
    ],
    relatedRecords: [
      { id: "FR-AI-0008", relationship: "AI-enabled clinical-system neighbour", note: "FR-AI-0008 tests diagnostic inference from medical images. This record instead tests restorative function at a chronic human neural interface; decoder performance is relevant evidence but not the governing claim." },
      { id: "FR-BT-0005", relationship: "Engineered clinical-system neighbour", note: "Both records require durable, reproducible function in living human recipients. FR-BT-0005 concerns renal replacement by a xenogeneic organ; this record concerns communication through an implanted neural interface." },
    ],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "Can sustained independent communication be reproduced across multiple participants, clinical centres and causes of paralysis rather than remaining dependent on exceptional single-participant results?",
      raisedDate: "2026-09-15",
    },
    {
      id: "OQ-002",
      question: "What combination of spontaneous communication accuracy, rate, correction burden and user-reported intelligibility should count as clinically meaningful everyday communication?",
      raisedDate: "2026-09-15",
    },
    {
      id: "OQ-003",
      question: "How stable are neural signals and functional performance over years as tissue response, disease progression, hardware ageing and daily context change?",
      raisedDate: "2026-09-15",
    },
    {
      id: "OQ-004",
      question: "How much caregiver setup, specialist maintenance and recalibration is compatible with the claim's requirement for independently usable communication?",
      raisedDate: "2026-09-15",
    },
    {
      id: "OQ-005",
      question: "Can context-inclusive and cross-participant training reduce calibration burden without allowing language-model priors to substitute plausible output for the user's intended communication?",
      raisedDate: "2026-09-15",
    },
  ],

  mutationLog: [
    // APPEND-ONLY. Newest first.
    { id: "M-005", date: "2026-09-15", field: "diagnosis_held", from: "—", to: "DIAGNOSIS-HELD", note: "Admission diagnosis: EMERGING / VS-03. Communication capability is independently demonstrated and one participant has sustained everyday use; cross-participant operational replication remains absent." },
    { id: "M-004", date: "2026-09-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "BN-001, RM-001, RM-002, RM-003 and AT-001 recorded from the admission evidence package." },
    { id: "M-003", date: "2026-09-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "AS-001 issued. Pressure State: EMERGING. Verification Stage: VS-03." },
    { id: "M-002", date: "2026-09-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "IN-001 through IN-007 admitted as the initial evidence set with source-level structured provenance." },
    { id: "M-001", date: "2026-09-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "FR-BT-0007 admitted following bounded New Record Evaluation." },
  ],

  status: "open",
};
