/**
 * FR-BT-0005 — Gene-Edited Porcine Kidneys — Durable Human Renal Replacement
 * Programme: PROG-BT
 * Admitted 2026-08-21 following bounded PROG-BT coverage review and
 * formal admission / material-commitment reconstruction.
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_BT_0005 = {
  id: "FR-BT-0005",
  programme: "PROG-BT",
  lastProvenanceReview: "2026-09-26",
  provenanceReviewId: "LPR-001-D29",
  provenanceOutcome: "verified",
  provenanceRepairStatus: "not_required",

  claim: {
    statement: "Gene-edited porcine kidneys can provide sustained, life-supporting renal replacement in living human recipients with a clinically acceptable burden of rejection, infection and immunosuppression.",
    shortLabel: "Gene-Edited Porcine Kidneys — Durable Human Renal Replacement",
    openedDate: "2026-08-21",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Decedent-human xenokidney studies — short-term renal function without hyperacute rejection",
      description: "Early human decedent studies established that genetically modified porcine kidneys could reperfuse, produce urine and in some protocols normalize or substantially improve renal-function measures without immediate hyperacute rejection. These studies moved the claim beyond nonhuman-primate feasibility and exposed specific physiological and complement-mediated limitations, but they did not establish durable renal replacement in a living recipient.",
      vectors: ["supportive--human-physiological-function-without-durability"],
      date: "2022–23",
      sources: [
        { citation: "Montgomery et al., Results of Two Cases of Pig-to-Human Kidney Xenotransplantation, New England Journal of Medicine 386, 1889–1898 (2022)", doi: "10.1056/NEJMoa2120238", locator: "Results — immediate urine production, improved renal-function measures and no hyperacute or antibody-mediated rejection during the 54-hour decedent study" },
        { citation: "Porrett et al., First clinical-grade porcine kidney xenotransplant using a human decedent model, American Journal of Transplantation (2022)", doi: "10.1111/ajt.16930", locator: "Abstract — viable xenografts through 74 hours without hyperacute rejection; variable urine output and incomplete creatinine-clearance recovery" },
      ],
    },
    {
      id: "IN-002",
      qualifiedEvent: "First living-recipient gene-edited pig kidney — life-sustaining renal function for 51 days",
      description: "A 62-year-old man with end-stage kidney disease received a 69-edit porcine kidney in March 2024. The graft provided essential renal functions including solute clearance, electrolyte homeostasis, urine concentration and blood-pressure regulation. A T-cell-mediated rejection episode occurred within the first week and was reversed with intensified immunosuppression. The recipient died from cardiac causes on day 52; autopsy found no evidence that graft rejection caused death. This is direct supportive evidence that a gene-edited porcine kidney can provide life-sustaining renal replacement in a living human for weeks, while also demonstrating that rejection control remains an active requirement.",
      vectors: ["supportive--living-human-life-sustaining-renal-function"],
      date: "2024",
      sources: [
        { citation: "Kawai et al., Xenotransplantation of a Porcine Kidney for End-Stage Kidney Disease, New England Journal of Medicine 392, 1933–1940 (2025)", doi: "10.1056/NEJMoa2412747", locator: "Summary — 62-year-old recipient, 69 genomic edits, dialysis independence, reversible day-8 T-cell-mediated rejection, cardiac death on day 52 without evident xenograft rejection" },
      ],
    },
    {
      id: "IN-003",
      qualifiedEvent: "271-day living-recipient xenokidney — months-long function followed by graft explantation",
      description: "A subsequent living recipient maintained a gene-edited porcine kidney for 271 days before the graft was removed because of declining renal function and the patient returned to dialysis; the patient later received a human kidney transplant. This materially extends demonstrated durability from weeks to months, but it also shows that prolonged xenograft function does not yet equal durable clinical replacement. The case therefore exerts two-sided pressure on the claim.",
      vectors: ["partial--months-long-function-with-eventual-graft-failure"],
      date: "2025–26",
      sources: [
        { citation: "Associated Press, New Hampshire man resumes dialysis after record 271 days living with a pig kidney (2025)", url: "https://apnews.com/article/7bb8dcc1a2e02bc16a9a27ef8071ee64", locator: "Contemporaneous case update — graft removed after 271 days because of declining function and recipient returned to dialysis" },
      ],
    },
    {
      id: "IN-004",
      qualifiedEvent: "Immune profiling — reversible T-cell rejection but persistent innate activation",
      description: "High-dimensional profiling of the first living-recipient xenokidney showed early T-cell-mediated rejection despite profound circulating T-cell depletion. Intensified immunosuppression reversed the adaptive rejection episode, but sustained monocyte and macrophage activity and elevated inflammatory signalling persisted. The rejection profile shared features with human kidney allograft rejection while also showing distinct innate signatures. This directly identifies persistent innate immune activation as a biological resistance mechanism that may limit durability even when acute adaptive rejection is controlled.",
      vectors: ["contesting--persistent-innate-xenoimmune-activation"],
      date: "2026",
      sources: [
        { citation: "Ribas et al., Immune profiling in a living human recipient of a gene-edited pig kidney, Nature Medicine 32, 270–280 (2026)", doi: "10.1038/s41591-025-04053-3", locator: "Abstract and Results — early reversible T-cell-mediated rejection followed by persistent monocyte/macrophage innate activation" },
      ],
    },
    {
      id: "IN-005",
      qualifiedEvent: "EXPAND trial — first prospective multicentre xenokidney study enters recruitment and dosing",
      description: "United Therapeutics' EXPAND study is a prospective multicentre interventional trial of a 10-gene-edited porcine kidney in patients with end-stage renal disease. The study began in 2025, has an estimated enrollment of 50 participants, and evaluates participant survival, graft survival and function, glomerular filtration rate, quality of life, rejection, proteinuria and infectious complications at 24 weeks, followed by long-term surveillance. The first transplant in the study was announced in November 2025. This does not itself prove efficacy, but it creates a governed prospective replication pathway for the class-level claim.",
      vectors: ["partial--prospective-clinical-replication-now-underway"],
      date: "2025–26",
      sources: [
        { citation: "United Therapeutics, First Transplant in EXPAND Clinical Trial of UKidney in Patients With End-Stage Renal Disease (3 Nov 2025)", url: "https://ir.unither.com/press-releases/2025/11-03-2025-120022270", locator: "Trial disclosure — first transplant, 10-gene-edited UKidney, 24-week efficacy/safety endpoints, lifetime follow-up and cohort-based expansion design" },
      ],
    },
    {
      id: "IN-006",
      qualifiedEvent: "Clinical review evidence — antibody, complement and physiological barriers remain active",
      description: "Contemporary clinical review of living-recipient and decedent xenokidney experience finds that avoidance of hyperacute rejection does not eliminate early humoral activation, antibody-mediated injury, complement-dependent injury, proteinuria and other physiological incompatibilities. Reported cases include treatable rejection as well as graft dysfunction and infection-driven reductions in immunosuppression. This supports the view that the frontier has shifted from immediate compatibility to sustained immune and physiological control.",
      vectors: ["contesting--multilayer-immune-and-physiological-barriers-remain"],
      date: "2026",
      sources: [
        { citation: "Ladowski and Meier, Xenotransplantation in living human recipients: Where we stand in 2026, American Journal of Transplantation 26, 913–915 (2026)", doi: "10.1016/j.ajt.2026.02.039", locator: "Review — early living-recipient experience, rejection, infection and physiological incompatibility remain active clinical barriers" },
      ],
    },
    {
      id: "IN-007",
      qualifiedEvent: "FDA xenotransplantation guidance — PERV and zoonotic-risk surveillance remains a standing clinical obligation",
      description: "FDA xenotransplantation guidance requires sponsors using porcine xenotransplantation products to maintain plans for detection, confirmation and response to porcine endogenous retroviruses and other xenogeneic infectious agents, including recipient follow-up and public-health contingency planning. No clinical PERV transmission signal is established here; the evidence instead shows that infectious risk remains an explicit long-horizon condition of routine clinical deployment.",
      vectors: ["partial--infectious-risk-surveillance-remains-required"],
      date: "2016–26",
      sources: [
        { citation: "US FDA, Source Animal, Product, Preclinical, and Clinical Issues Concerning the Use of Xenotransplantation Products in Humans: Guidance for Industry (2016)", url: "https://www.fda.gov/media/102126/download", locator: "Section on identification of xenogeneic retroviruses in recipients — PERV detection, confirmation, notification, contingency and follow-up requirements" },
      ],
    },
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2026-08-21",
      pressureState: "escalating",
      verificationStage: "VS-03",
      summary: "The claim enters the corpus under strong two-sided pressure. Living-human xenokidney recipients have demonstrated life-sustaining renal function for weeks and, in a later case, for 271 days, moving the field beyond decedent compatibility and short-lived physiological demonstration. At the same time, acute rejection, persistent innate immune activation, eventual graft dysfunction, proteinuria and the continuing need for intensive immunosuppression and zoonotic surveillance remain material constraints. The EXPAND prospective multicentre study now provides a formal replication pathway with 24-week graft, patient and renal-function endpoints. The Pressure State is ESCALATING because both capability evidence and failure-mechanism evidence are strengthening. Verification Stage is VS-03 because the claim has progressed beyond publication into living-human clinical audit that has exposed real rejection and physiological failure modes, but prospective multi-recipient replication has not yet been established.",
      assessorNote: "Admission evidence basis includes living-recipient clinical reports and contemporary clinical review; Ribas et al., Nature Medicine 32 (2026), 'Immune profiling in a living human recipient of a gene-edited pig kidney'; ClinicalTrials.gov NCT06878560 (EXPAND); United Therapeutics EXPAND trial disclosures; and FDA xenotransplantation guidance on infectious-risk surveillance. The record is deliberately scoped to durable renal replacement in living humans rather than xenotransplantation generally.",
    },
  ],

  mechanisms: [
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "Multilayer xenogeneic immune control. Avoiding hyperacute rejection is insufficient; T-cell, antibody, complement, natural-killer-cell and monocyte/macrophage responses can still injure the graft. Durable clinical use requires these responses to be controlled without an immunosuppressive burden that negates the benefit of transplantation.",
    },
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Persistent innate immune activation. Human immune profiling shows that adaptive rejection can be suppressed while monocyte and macrophage activation persists. This creates a plausible route to chronic inflammatory, vascular or fibrotic graft injury after an apparently successful treatment of acute rejection.",
    },
    {
      id: "RM-002",
      type: "RESISTANCE MECHANISM",
      description: "Cross-species renal physiology. Protein handling, haemodynamic regulation, complement and coagulation interactions, endocrine signalling and organ-growth biology differ between pigs and humans. These differences can produce progressive dysfunction even when immediate rejection is prevented.",
    },
    {
      id: "BN-002",
      type: "BOTTLENECK",
      description: "Clinical reproducibility. Compassionate-use and individual living-recipient successes establish possibility but not a therapeutic modality. The claim requires prospectively repeated graft survival and renal function across multiple recipients, centres and donor-engineering strategies.",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Multigene donor engineering combined with targeted costimulation and complement control. Current programmes converge on removing major xenoantigens, adding human protective transgenes and using targeted immunosuppression. If prospective trials reproduce months-long function while reducing rejection and infection burden, this combination could convert xenokidneys from experimental rescue procedures into a scalable renal-replacement pathway.",
    },
  ],

  lineage: {
    items: [
      { year: "1990s–2010s", text: "Kidney xenotransplantation remains primarily a preclinical feasibility programme. Hyperacute rejection, cross-species immune incompatibility and infectious risk dominate the claim." },
      { year: "2022–23", text: "Gene-edited porcine kidneys are transplanted into brain-dead human decedents. Human physiological function and avoidance of immediate hyperacute rejection become directly observable, but living-human durability remains untested." },
      { year: "2024", text: "The first living human receives a heavily gene-edited pig kidney. The graft provides life-sustaining renal function; an acute T-cell rejection episode is reversed. The frontier moves from basic compatibility to immune control and durability." },
      { year: "2025–26", text: "Living-recipient experience extends graft function into months, including a 271-day case, while immune profiling identifies persistent innate activation and other clinical reports expose proteinuria, antibody-mediated injury, graft dysfunction and infection pressures. The first prospective multicentre clinical trial begins." },
      { year: "2026 onward", text: "The decisive question becomes reproducibility: whether 24-week and longer graft survival, renal function and acceptable safety can be demonstrated across multiple living recipients and centres rather than isolated experimental cases." },
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "What duration and level of dialysis independence should constitute clinically meaningful durable renal replacement for this record?",
      raisedDate: "2026-08-21",
    },
    {
      id: "OQ-002",
      question: "Can persistent innate xenogeneic activation be sufficiently controlled without making the immunosuppressive burden clinically unacceptable?",
      raisedDate: "2026-08-21",
    },
    {
      id: "OQ-003",
      question: "Which long-term graft failures arise primarily from immune rejection and which arise from intrinsic cross-species renal physiology?",
      raisedDate: "2026-08-21",
    },
    {
      id: "OQ-004",
      question: "Do materially different donor-gene architectures converge on comparable human outcomes, or will durable xenokidney viability remain platform-dependent?",
      raisedDate: "2026-08-21",
    },
    {
      id: "OQ-005",
      question: "What prospective sample size and multicentre consistency should be required before the claim advances from VS-03 Audit to VS-04 Replication?",
      raisedDate: "2026-08-21",
    },
  ],

  mutationLog: [
    // APPEND-ONLY. Newest first.
    { id: "M-006", date: "2026-09-26", field: "provenance_review_completed", from: "—", to: "LPR-001-D29", note: "Legacy provenance review completed. All seven existing instances verified against underlying or authoritative sources; structured sources[] added where attribution was confidently established. No factual, interpretive, attribution or verification-stage discrepancy identified. The September 2026 peer-reviewed Lancet report of the 271-day case was held outside LPR-001 as a Normal Record Review candidate." },
    { id: "M-005", date: "2026-08-21", field: "diagnosis_held", from: "—", to: "DIAGNOSIS-HELD", note: "Admission diagnosis: ESCALATING / VS-03. Living-human renal replacement is demonstrated, while durability, rejection control and prospective reproducibility remain unresolved." },
    { id: "M-004", date: "2026-08-21", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "BN-001, RM-001, RM-002, BN-002 and AT-001 recorded from the admission evidence package." },
    { id: "M-003", date: "2026-08-21", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "AS-001 issued. Pressure State: ESCALATING. Verification Stage: VS-03." },
    { id: "M-002", date: "2026-08-21", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "IN-001 through IN-007 admitted as the initial two-sided evidence set." },
    { id: "M-001", date: "2026-08-21", field: "record_created", from: "—", to: "RECORD-CREATED", note: "FR-BT-0005 admitted following bounded PROG-BT coverage review and formal material-commitment reconstruction." },
  ],

  status: "open",
};
