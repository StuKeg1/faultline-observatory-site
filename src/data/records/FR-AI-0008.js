/**
 * FR-AI-0008 — AI Medical Imaging Diagnosis — Specialist-Level Accuracy on Defined Tasks
 * Programme: PROG-AI
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_AI_0008 = {
  id: "FR-AI-0008",
  programme: "PROG-AI",
  lastProvenanceReview: "2026-09-06",
  provenanceReviewId: "LPR-001-D08",
  provenanceOutcome: "discrepancies_corrected",
  provenanceRepairStatus: "completed",

  claim: {
    statement: "AI-assisted medical diagnosis achieves specialist-level accuracy on defined imaging tasks.",
    shortLabel: "AI Medical Imaging Diagnosis — Specialist-Level Accuracy on Defined Tasks",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Landmark studies — specialist-level performance on bounded imaging benchmarks",
      description: "Three landmark studies establish strong performance on defined medical-imaging tasks, but under different datasets and comparator designs. Esteva et al. (2017) trained a skin-lesion classifier on 129,450 images and tested it against 21 board-certified dermatologists on two binary classification tasks, reporting dermatologist-level performance. Gulshan et al. (2016) validated a diabetic-retinopathy algorithm on the EyePACS-1 and Messidor-2 datasets, reporting AUCs of 0.991 and 0.990 and high sensitivity/specificity at prespecified operating points against expert-derived reference standards. Rajpurkar et al. (2017) trained CheXNet on ChestX-ray14 and reported F1 performance above the average of four radiologists on a pneumonia test set. Together these studies support the record's surface claim in bounded research evaluations. They do not establish uniform real-world deployment performance, and the legacy statement that all three used retrospective single-site datasets is withdrawn.",
      vectors: ["supportive--specialist-level-performance-on-bounded-research-tasks"],
      date: "2016–17",
      sources: [
        { citation: "Esteva, A. et al. (2017), Dermatologist-level classification of skin cancer with deep neural networks, Nature 542, 115–118.", url: "https://www.nature.com/articles/nature21056", locator: "Abstract; training set; dermatologist comparison" },
        { citation: "Gulshan, V. et al. (2016), Development and Validation of a Deep Learning Algorithm for Detection of Diabetic Retinopathy in Retinal Fundus Photographs, JAMA 316(22), 2402–2410.", url: "https://jamanetwork.com/journals/jama/fullarticle/2588763", locator: "Results; EyePACS-1 and Messidor-2 validation; sensitivity and specificity" },
        { citation: "Rajpurkar, P. et al. (2017), CheXNet: Radiologist-Level Pneumonia Detection on Chest X-Rays with Deep Learning, arXiv:1711.05225.", url: "https://arxiv.org/abs/1711.05225", locator: "Abstract; ChestX-ray14; four-radiologist comparison; F1 metric" },
      ],
    },
    {
      id: "IN-002",
      qualifiedEvent: "FDA authorisations — clinical-use evidence with device-specific validation",
      description: "FDA authorisation establishes that AI imaging systems can satisfy device-specific regulatory requirements, but it is not equivalent to universal prospective clinical validation. IDx-DR received De Novo authorisation in April 2018 as a diabetic-retinopathy detection device. Viz.ai Contact was authorised in February 2018 as clinical decision-support software that analyses CT images and alerts specialists to potential large-vessel occlusion; FDA explicitly states that it is not a replacement for full patient evaluation or a standalone diagnosis. Viz.ai's submission included a retrospective study of 300 CT images plus real-world evidence concerning notification time. The large number of later FDA-authorised AI/ML devices, many in radiology, demonstrates regulatory adoption across defined intended uses, but authorisation pathways and evidentiary designs vary. The legacy inference that clearance itself proves prospective specialist-level accuracy is withdrawn.",
      vectors: ["supportive--device-specific-regulatory-authorisation-not-uniform-prospective-validation"],
      date: "2018–23",
      sources: [
        { citation: "U.S. FDA (2018), De Novo classification record DEN180001 — IDx-DR.", url: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/denovo.cfm?id=DEN180001", locator: "Decision date 11 April 2018; diabetic retinopathy detection device" },
        { citation: "U.S. FDA (2018), FDA permits marketing of clinical decision support software for alerting providers of a potential stroke in patients.", url: "https://www.fda.gov/news-events/press-announcements/fda-permits-marketing-clinical-decision-support-software-alerting-providers-potential-stroke", locator: "Intended use; retrospective 300-CT study; real-world notification evidence; diagnostic limitation" },
      ],
    },
    {
      id: "IN-003",
      qualifiedEvent: "External validation and evidence-quality limits — deployment generalisation remains conditional",
      description: "Evidence predating the legacy 2021–23 dating already showed that strong internal benchmark performance need not transfer unchanged across clinical environments. Zech et al. (2018) evaluated pneumonia models across three hospital systems and found variable cross-site generalisation; the models could identify acquisition site with high accuracy and exploit confounding information. Pooch et al. (2019) evaluated domain shift across major chest-radiograph datasets and found substantial performance degradation when training and testing distributions differed. Nagendran et al. (2020) systematically reviewed 81 non-randomised medical-imaging studies comparing deep-learning systems with clinicians and found few prospective studies or randomised trials, high risk of bias, and limited real-world evidence. These sources support a deployment-generalisation and evidence-quality problem. They do not establish that every failure is caused by a single structural property of deep learning or that all models necessarily learn dataset-specific rather than task-relevant features.",
      vectors: ["contesting--external-validation-and-evidence-quality-limit-generalisation-claims"],
      date: "2018–20",
      sources: [
        { citation: "Zech, J. R. et al. (2018), Variable generalization performance of a deep learning model to detect pneumonia in chest radiographs: A cross-sectional study, PLOS Medicine 15(11):e1002683.", url: "https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1002683", locator: "Abstract; three-hospital cross-site evaluation; confounding/site detection" },
        { citation: "Pooch, E. H. P., Ballester, P. L. & Barros, R. C. (2019), Can we trust deep learning models diagnosis? The impact of domain shift in chest radiograph classification, arXiv:1909.01940.", url: "https://arxiv.org/abs/1909.01940", locator: "Abstract; cross-dataset domain-shift evaluation" },
        { citation: "Nagendran, M. et al. (2020), Artificial intelligence versus clinicians: systematic review of design, reporting standards, and claims of deep learning studies, BMJ 368:m689.", url: "https://www.bmj.com/content/368/bmj.m689", locator: "Methods; principal findings; prospective and randomised-study limitations" },
      ],
    },
    {
      id: "IN-004",
      qualifiedEvent: "MASAI — prospective randomised AI-supported mammography screening",
      description: "MASAI supplies prospective randomised evidence for AI-supported mammography screening in the Swedish national screening programme. In the protocol-defined screening-performance analysis of 105,915 analysed participants, AI-supported screening detected 338 cancers versus 262 under standard double reading, corresponding to 6.4 versus 5.0 cancers per 1,000 screened. Recall and false-positive rates were not significantly higher, while screen-reading workload was reduced by 44.2%. This is strong evidence that an AI-supported workflow can improve a defined imaging-screening process in a real clinical programme. It does not establish that all medical-imaging AI generalises successfully, and it is an AI-supported screening workflow rather than autonomous replacement of specialist diagnosis. The legacy STHLM3-MRI and unspecified NHS-trial attributions are withdrawn because they do not support the instance as written.",
      vectors: ["supportive--prospective-randomised-ai-supported-mammography-benefit"],
      date: "2021–25",
      sources: [
        { citation: "Dembrower, K. et al. (2025), Screening performance and characteristics of breast cancer detected in the Mammography Screening with Artificial Intelligence trial (MASAI), The Lancet Digital Health.", url: "https://doi.org/10.1016/S2589-7500(24)00267-X", locator: "Randomised screening design; cancer detection; false positives; 44.2% workload reduction" },
      ],
    },
    {
      id: "IN-005",
      qualifiedEvent: "Legacy foundation-model generalisation attribution — unsupported as written",
      description: "The legacy instance grouped GPT-4V, Med-PaLM 2 and BioMedCLIP as evidence that medical-imaging foundation models had already demonstrated substantially better cross-domain generalisation and reduced distribution-shift sensitivity than task-specific predecessors. LPR-001-D08 could not verify that bundled claim from the cited evidence. In particular, Singhal et al.'s Med-PaLM 2 work evaluates medical question answering rather than establishing cross-site medical-imaging generalisation. The stronger imaging-generalisation inference is therefore withdrawn from the current evidential basis rather than retrofitted to different studies. IN-005 remains visible as legacy provenance debt and contributes no substantive evidence that foundation models have resolved the deployment-generalisation problem pending separately governed evidence review.",
      vectors: ["partial--legacy-foundation-model-generalisation-claim-unsupported"],
      date: "2023–24",
    },
    {
      id: "IN-006",
      qualifiedEvent: "MASAI final interval-cancer analysis — favourable prospective clinical performance",
      description: "Gommers et al. (2026) report the protocol-defined primary interval-cancer analysis of the completed MASAI randomised population-based screening trial. Among 105,915 analysed participants, interval-cancer rates were 1.55 per 1,000 in the AI-supported group and 1.76 per 1,000 under standard double reading, meeting the prespecified non-inferiority criterion. Sensitivity was significantly higher with AI-supported screening (80.5% versus 73.8%), while specificity was identical at 98.5%. The AI-supported group also had descriptively fewer interval cancers with unfavourable characteristics, including invasive, T2+ and non-luminal-A tumours. Together with the previously reported reduction in reading workload, this provides strong prospective evidence that one AI-supported mammography workflow can preserve or improve clinically relevant screening accuracy in a real population programme. The result remains domain- and implementation-specific: it used one Swedish screening programme and a defined AI-supported workflow, so it does not establish cross-domain generalisation for medical imaging as a whole.",
      vectors: ["supportive--prospective-clinical-accuracy-and-interval-cancer-noninferiority"],
      date: "2026-01-31",
      sources: [
        { citation: "Gommers, J. et al. (2026), Interval cancer, sensitivity, and specificity comparing AI-supported mammography screening with standard double reading without AI in the MASAI study, The Lancet 407(10527), 505–514.", url: "https://doi.org/10.1016/S0140-6736(25)02464-X", locator: "Primary interval-cancer outcome; sensitivity; specificity; interval-cancer characteristics" },
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
      summary: "The claim's surface assertion — specialist-level accuracy on defined imaging tasks — is confirmed on curated research datasets across multiple imaging domains and by regulatory validation in prospective settings for specific cleared devices. The surface layer is advancing: AI medical imaging achieves specialist-level performance on well-defined tasks under controlled conditions. The surface claim is in ESCALATING territory. The claim fragments at the depth layer — specifically, at the boundary between research-dataset accuracy and real-world clinical deployment. Systematic deployment-gap studies (INST-003) document that accuracy measured on curated, single-site datasets does not reliably generalise across scanners, acquisition protocols, or patient demographics, and prospective trials (INST-004) show a heterogeneous picture — some deployed systems retain specialist-level accuracy, others do not. The pressure state is FRAGMENTING: the surface claim is confirmed and advancing, but the depth question — whether research-dataset accuracy is a valid proxy for clinical deployment accuracy — remains open (BN-001), pending further validation of the foundation-model generalisation trend (INST-005).",
      assessorNote: null,
    },
    {
      id: "AS-002",
      date: "2026-09-06",
      pressureState: "fragmenting",
      verificationStage: "VS-03",
      summary: "LPR-001-D08 materially narrows the evidential basis without reversing the record. IN-001 still supports specialist-level performance on bounded research tasks across dermatology, diabetic-retinopathy screening and chest-radiograph pneumonia detection. IN-002 establishes device-specific regulatory authorisation, but the legacy inference that FDA clearance itself demonstrates prospective specialist-level clinical performance is withdrawn. IN-003 supports a real external-validation and evidence-quality problem, but not a universal causal claim that deep learning necessarily learns only dataset-specific features. IN-004 now supplies the strongest prospective clinical evidence in the record: the randomised MASAI mammography trial shows improved cancer detection with substantially reduced reading workload and no significant increase in false positives. IN-005 no longer supports the proposition that foundation models have already reduced medical-imaging distribution shift. The evidence therefore remains fragmented between strong bounded-task performance and heterogeneous evidence about transfer into clinical environments. FRAGMENTING / VS-03 is retained.",
      assessorNote: "Append-only correction following LPR-001-D08. AS-001 is preserved as historical assessment. This assessment removes reliance on the unsupported prospective-clearance and foundation-model-generalisation premises while retaining the benchmark-to-deployment boundary on narrower evidence. The 2026 final MASAI interval-cancer analysis is not admitted here and remains a separate Record Review candidate.",
    },
    {
      id: "AS-003",
      date: "2026-09-06",
      pressureState: "fragmenting",
      verificationStage: "VS-03",
      summary: "Normal Record Review admits IN-006, the completed MASAI trial's primary interval-cancer analysis. The result materially strengthens the prospective-deployment side of the record: AI-supported mammography was non-inferior for interval-cancer rate, had significantly higher sensitivity, the same specificity, and fewer interval cancers with several unfavourable characteristics, while earlier MASAI analyses showed increased cancer detection and markedly reduced reading workload. This means the benchmark-to-deployment gap is no longer represented only by heterogeneous or preliminary prospective evidence; one large randomised population-screening programme now provides mature clinical evidence of maintained or improved diagnostic performance. The evidence still does not converge across medical imaging as a whole. IN-003 documents genuine cross-site and domain-shift failures, IN-005 provides no verified foundation-model resolution, and MASAI remains a domain-specific workflow in a Swedish screening context. FRAGMENTING / VS-03 is therefore retained, but the positive prospective pole is materially stronger and BN-001 is narrowed from a general benchmark-versus-deployment uncertainty to a transferability question across domains, populations and implementations.",
      assessorNote: "Bounded Record Review of Gommers et al. (2026), The Lancet, DOI 10.1016/S0140-6736(25)02464-X. IN-006 is admitted as new evidence with primary provenance. Historical assessments remain append-only; no legacy instance is rewritten through this Record Review.",
    }
  ],

  mechanisms: [
    {
      id: "BN-001",
      type: "BOTTLENECK — MEASUREMENT VALIDITY (RN-005)",
      description: "Research-dataset performance is an imperfect proxy for clinical deployment performance. The claim is defined around accuracy on imaging tasks, but the evidential meaning of an AUC, sensitivity, specificity or F1 result depends on the population, acquisition environment, reference standard and workflow in which it is measured. Cross-site studies show that performance can change under distribution shift, while prospective trials such as MASAI show that some AI-supported workflows can succeed clinically. The bottleneck is therefore not whether prospective clinical success is possible — MASAI now demonstrates that it is — but how reliably performance transfers across imaging domains, populations, acquisition environments and implementations.",
    },
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Distribution shift and confounding can degrade transfer. Medical-imaging models may exploit correlations associated with acquisition site, equipment, population or workflow that do not remain stable elsewhere. Zech et al. directly demonstrate site-associated confounding in chest radiography, and cross-dataset work shows domain shift can reduce performance. This is a documented resistance mechanism, not a claim that every deep-learning imaging system necessarily fails for the same reason.",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Replicated prospective multi-site clinical performance across distinct imaging domains, populations and implementations. MASAI now provides mature randomised evidence that an AI-supported mammography workflow can maintain or improve clinically meaningful accuracy in population screening. Resolution of the record's deployment-depth question requires comparable evidence beyond a single domain and programme: stable performance across diverse sites, patient populations, acquisition systems and clinical workflows, with patient-relevant outcomes and independent replication.",
    }
  ],

  lineage: {
    items: [
      { year: "2016–17", text: "Landmark bounded-task studies. Dermatology, diabetic-retinopathy and chest-radiograph studies establish specialist-level or specialist-comparable performance under defined research evaluations. They do not by themselves establish deployment generalisation." },
      { year: "2018–20", text: "Regulatory adoption and generalisation scrutiny develop in parallel. IDx-DR and Viz.ai demonstrate device-specific FDA authorisation, while Zech, Pooch and the Nagendran review show why internal performance and regulatory status should not be conflated with uniform real-world generalisation." },
      { year: "2021–25", text: "Prospective clinical evidence strengthens unevenly. MASAI provides randomised evidence that an AI-supported mammography workflow can increase cancer detection while reducing reading workload without a significant false-positive increase. The broader cross-domain deployment question remains open." },
      { year: "2023–24", text: "Foundation-model generalisation remains unestablished in this legacy evidence set. The former IN-005 bundle is withdrawn from the current evidential basis because its cited sources do not establish improved cross-site medical-imaging generalisation." },
      { year: "2026", text: "The completed MASAI primary analysis strengthens the prospective clinical pole. AI-supported screening is non-inferior for interval-cancer rate, significantly more sensitive, and equally specific to standard double reading in the trial population. The record's unresolved question shifts toward whether similarly mature performance transfers across other imaging domains and deployment environments." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "BN-001 is the first measurement validity bottleneck in PROG-AI. RN-005 was developed from PROG-BT and PROG-AI (FR-AI-0007) evidence. Does its appearance here in an applied deployment claim — rather than a frontier capability claim — suggest that measurement validity is a broader AI phenomenon than previously established, or does it reflect a property specific to the benchmark-deployment gap in applied AI?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "The deployment generalisation gap is a depth question structurally different from foundational uncertainty. Is this a new depth-layer category within PROG-AI, or is it the same surface/depth inversion described differently? If AI systems cannot reliably generalise their demonstrated capabilities to deployment environments, that is a depth failure even for surface claims.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "MASAI now demonstrates mature prospective success in one population-screening workflow. What breadth of replication is required to close BN-001: independent multi-site replication within mammography, successful transfer across populations and acquisition systems, or comparable prospective evidence across several imaging domains?",
      raisedDate: "2024-01-15",
    }
  ],

  mutationLog: [
    // APPEND-ONLY. Newest first.
    { id: "M-011", date: "2026-09-06", field: "assessment_issued", from: "AS-002", to: "AS-003", note: "Normal Record Review of the final MASAI interval-cancer analysis. FRAGMENTING / VS-03 retained, but the positive prospective-deployment pole is materially strengthened. BN-001, AT-001, 2026 lineage and OQ-003 updated to reflect that prospective success is demonstrated in mammography while cross-domain transferability remains unresolved." },
    { id: "M-010", date: "2026-09-06", field: "instance_added", from: "IN-005", to: "IN-006", note: "Normal Record Review admitted Gommers et al. (2026) final MASAI primary interval-cancer analysis with structured primary provenance. New evidence only; no retroactive repair or replacement of legacy instances." },
    { id: "M-009", date: "2026-09-06", field: "assessment_and_dependencies_corrected", from: "AS-001 / legacy BN-RM-AT-lineage-OQ wording", to: "AS-002 / corrected dependencies", note: "Append-only AS-002 issued after the operator-approved LPR-001-D08 repair. FRAGMENTING / VS-03 retained on a narrower evidential basis. BN-001, RM-001, AT-001, lineage and OQ-003 aligned to the corrected evidence: regulatory authorisation is not treated as uniform prospective validation; distribution shift is documented but not universalised; foundation-model resolution is no longer presumed. Historical AS-001 preserved. The 2026 final MASAI interval-cancer analysis remains outside this repair as a normal Record Review candidate." },
    { id: "M-008", date: "2026-09-06", field: "provenance_correction", from: "LPR-001-D08 discrepancies_found", to: "LPR-001-D08 discrepancies_corrected", note: "Operator-approved correction of IN-001 through IN-005. Primary structured provenance added where source fidelity was established. IN-001 bounded to the actual landmark benchmark designs; IN-002 separates device-specific FDA authorisation from prospective-validation claims; IN-003 corrects chronology and bounds the generalisation inference; IN-004 replaces conflated STHLM3/NHS wording with verified MASAI prospective randomised evidence; IN-005 is retained as explicit unsupported legacy provenance rather than retrofitted to substitute evidence. No new scientific evidence admitted through LPR-001." },
    { id: "M-007", date: "2026-09-06", field: "provenance_review", from: "—", to: "LPR-001-D08", note: "Legacy provenance review completed. All five evidence instances examined. Material source-fidelity discrepancies identified in IN-001 through IN-005, so no structured provenance was silently added to those instances. One genuinely new scientific result — the 2026 final MASAI interval-cancer analysis — was identified and held out for normal Record Review rather than admitted through LPR-001. No factual, interpretive, assessment, pressure-state, or verification-stage wording changed. Review marked pending governed correction." },
    { id: "M-006", date: "2026-07-09", field: "description_reordered", from: "—", to: "DESCRIPTION-REORDERED", note: "Editorial Correction (GP-001): IN-002, IN-003, IN-004, IN-005 descriptions reordered per EP-001 — existing closing synthesis sentence moved to opening, no wording added or removed." },
    { id: "M-005", date: "2024-01-15", field: "diagnosis_held", from: "—", to: "DIAGNOSIS-HELD", note: "" },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" }
  ],

  status: "open",
};