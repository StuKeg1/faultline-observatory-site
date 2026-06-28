/**
 * FR-BT-0004 — Liquid Biopsy — Early Cancer Detection Before Conventional Diagnosis
 * Programme: PROG-BT
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 *
 * RELEASE-004 (Trial 001 Corpus Update, 2026-06-27): INST-006 and ASSESSMENT-002
 * added. Sourced from direct web verification during Trial 001, not recovered
 * from the original 2026-06-16 generation (unrecoverable — see TRIAL-001-OUT).
 */

export const FR_BT_0004 = {
  id: "FR-BT-0004",
  programme: "PROG-BT",

  claim: {
    statement: "A blood-based liquid biopsy can reliably detect cancer before conventional clinical diagnosis.",
    shortLabel: "Liquid Biopsy — Early Cancer Detection Before Conventional Diagnosis",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Cell-free DNA and circulating tumour DNA — technology foundation",
      description: "The detection of circulating tumour DNA (ctDNA) and cell-free DNA (cfDNA) fragments in blood establishes the technological basis for liquid biopsy. Diehl et al. (2008) demonstrate ctDNA detection in colorectal cancer; subsequent work extends detection across cancer types. Key technical advances include digital droplet PCR (ddPCR) for mutation detection and next-generation sequencing for broader genomic profiling. By 2019, several single-cancer liquid biopsy tests have received FDA breakthrough device designation. The technology establishes that tumour-derived nucleic acids are detectable in blood at clinically relevant cancer stages. This is foundational positive evidence: the proxy signal (blood-based ctDNA) does correlate with the presence of cancer, and the biological basis is sound. The question is whether the signal is detectable early enough and reliably enough to satisfy the claim.",
      vectors: ["supportive--proxy-signal-biologically-validated"],
      date: "2014–19",
    },
    {
      id: "IN-002",
      qualifiedEvent: "Galleri trial (GRAIL) — multi-cancer early detection in high-risk population",
      description: "GRAIL's Galleri test, using methylation sequencing of cfDNA, publishes results from the PATHFINDER study (2021) and early SYMPLIFY data: the test detects a signal across more than 50 cancer types from a single blood draw, with cancer signal origin prediction. In the SYMPLIFY study (United Kingdom, 2023, Lancet), Galleri is tested in symptomatic patients already referred for cancer investigation: sensitivity of 66.3% overall, rising to 85% for stages III–IV; specificity 98.4%. The sensitivity is lower for early-stage cancers (Stage I: ~24%). This is significant: the test detects cancer more reliably at later stages, when conventional diagnosis would also catch it. The early-stage sensitivity gap — the specific regime where the claim's value lies — is the primary evidence challenge. The test is performing well in a general sense but underperforming in the specific domain the claim requires.",
      vectors: ["partial--detection-demonstrated-early-stage-sensitivity-remains-low"],
      date: "2021",
    },
    {
      id: "IN-003",
      qualifiedEvent: "NHS-Galleri trial — population-level screening evidence",
      description: "The NHS-Galleri trial enrolls 140,000 participants in the United Kingdom in a randomised controlled trial of Galleri versus standard care for cancer screening in a general population aged 50–77. This is the largest liquid biopsy trial to date and the first designed to measure whether early detection actually reduces cancer mortality — the primary clinical endpoint that distinguishes genuine early detection benefit from lead-time bias. Results are expected 2026. The trial design addresses the lead-time bias question directly: randomisation allows comparison of mortality outcomes between screened and unscreened populations. Until results are available, the claim cannot be assessed on mortality impact. The claim transitions from ESCALATING to FRAGMENTING: early detection is demonstrably achievable in some contexts; whether it reliably reduces mortality through earlier diagnosis, or merely detects cancers earlier without changing outcomes, is the central contested question.",
      vectors: ["neutral--definitive-trial-ongoing-results-pending-2026"],
      date: "2023",
    },
    {
      id: "IN-004",
      qualifiedEvent: "Lead-time bias and overdiagnosis evidence — early detection without outcome benefit",
      description: "The cancer screening literature contains multiple examples of earlier detection not producing mortality benefit due to lead-time bias (earlier detection without actual life extension) and overdiagnosis (detection of cancers that would never have caused clinical harm). Prostate-specific antigen (PSA) screening is the canonical case: widespread adoption followed by evidence that many screen-detected cancers were low-risk and treated unnecessarily. Lung cancer screening with low-dose CT demonstrates genuine mortality benefit in high-risk populations, establishing that early detection can work. The liquid biopsy literature has not yet accumulated sufficient follow-up data to distinguish genuine benefit from lead-time bias at scale. This is the specific proxy gap: blood-based ctDNA signal (measured object) as proxy for clinically meaningful early cancer (asserted object). A cancer detectable by liquid biopsy may be a fast-growing, treatment-responsive cancer where earlier detection genuinely helps — or a slow-growing cancer that would never have caused symptoms, making detection harmful through unnecessary treatment. The measurement cannot currently discriminate between these.",
      vectors: ["contesting--proxy-gap-detectable-signal--clinically-actionable-cancer"],
      date: "2023–24",
    },
    {
      id: "IN-005",
      qualifiedEvent: "GRAIL acquisition by Illumina, regulatory battles, and commercial deployment",
      description: "Illumina acquires GRAIL for $8 billion (2021), then is forced to divest by European regulators concerned about market concentration; the spin-out process occupies 2022–24. Simultaneously, GRAIL and competitors (Foundation Medicine, Guardant Health, Exact Sciences) continue commercial deployment and clinical validation programmes. The Galleri test is offered commercially at approximately $950 per test in the United States without FDA approval specifically for screening indications. This constitutes the eighth occurrence of anticipatory institutional evidence: substantial capital and commercial deployment are occurring in advance of the definitive clinical trial evidence (NHS-Galleri results). The commercial pressure to deploy before full validation is in tension with the scientific need to await RCT results — the same dynamic identified as potentially problematic in FR-BT-0003 OQ-2, now appearing in a cancer detection context.",
      vectors: ["partial--anticipatory-commercial-deployment-definitive-evidence-pending"],
      date: "2021–24",
    },
    {
      id: "IN-006",
      qualifiedEvent: "NHS-Galleri trial — full results presented at ASCO 2026",
      description: "GRAIL presents full clinical utility, performance, and safety results from the NHS-Galleri trial in an oral presentation at the 2026 American Society of Clinical Oncology Annual Meeting (May 30, 2026), with concurrent publication in the Journal of Clinical Oncology. The trial's pre-specified primary endpoint — a combined reduction in Stage III and Stage IV diagnoses across twelve deadly cancer types — is not met within the trial's one-year follow-up window: a substantial reduction in Stage IV diagnoses (greater than 20%) is offset by a higher-than-anticipated increase in Stage III diagnoses, particularly in the prevalent screening round. The Galleri arm shows a four-fold higher overall cancer detection rate than standard-of-care screening alone. No mortality endpoint is reported in this release; GRAIL states that mortality benefit, if present, would be expected to require longer follow-up, and extends the trial's follow-up period by 6–12 months. Independent commentary (Barts Cancer Institute, via the Science Media Centre) notes that even a met primary endpoint would not itself have constituted mortality evidence, since stage shift and mortality reduction are distinct questions. This is the first instance in this record where the dated attractor identified at AT-001 has actually fired — the awaited trial event has occurred — without producing the clean resolution the attractor description anticipated.",
      vectors: ["partial--primary-endpoint-missed-stage-shift-observed-mortality-pending"],
      date: "2026",
    }
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2024-01-15",
      pressureState: "fragmenting",
      verificationStage: "VS-03",
      summary: "The claim is partially supported and fragmenting. Blood-based liquid biopsy can detect cancer signals before conventional diagnosis in a demonstrable fraction of cases — the Galleri test's performance data establishes this for multiple cancer types. The detection is reliable in a technical sense: specificity is high (98.4%) and sensitivity, while lower than desired, is non-trivial across cancer types. For the claim as stated, this constitutes partial confirmation: early detection before conventi",
      assessorNote: null,
    },
    {
      id: "AS-002",
      date: "2026-06-27",
      pressureState: "fragmenting",
      verificationStage: "VS-04",
      summary: "The NHS-Galleri trial's full results (INST-006) sustain rather than resolve the FRAGMENTING state identified at AS-001. The trial delivers exactly the kind of evidence the record's attractor (AT-001) was built to await, and the result is genuinely mixed rather than confirmatory or disconfirming: a real, substantial reduction in late-stage diagnoses coexists with a missed primary endpoint, an unexpected rise in Stage III diagnoses, and no mortality data. This is not a null result — the four-fold detection-rate increase and Stage IV reduction are real signals — but it does not resolve the central contested question (OQ-001): whether earlier detection translates into reduced mortality, or whether it is partially absorbed by stage migration and lead-time effects that RM-001/AT-001 already anticipated. Verification stage advances to VS-04 (Replication): a population-scale randomised trial has now run and reported, the most rigorous test design available short of mortality follow-up itself. The record should be re-entered when GRAIL's extended follow-up data (6–12 months from this release) becomes available, since that data — not this release — is positioned to address OQ-001 directly.",
      assessorNote: "Sources: GRAIL press releases and ASCO 2026 presentation (May 30, 2026); Journal of Clinical Oncology; independent commentary via Science Media Centre. Verified directly via web search during RELEASE-004 / TRIAL-001, 2026-06-27.",
    }
  ],

  mechanisms: [
    {
      id: "BN-001",
      type: "BOTTLENECK — MEASUREMENT VALIDITY (RN-005)",
      description: "Detectable cancer signal as proxy for clinically meaningful early cancer. Blood-based ctDNA signal detects the presence of cancer-derived nucleic acids. This is a proxy for clinically meaningful early cancer — cancer that, if detected earlier, would produce better patient outcomes. The proxy gap exists because not all detectable cancers are clinically meaningful: some grow slowly, some would spont",
    },
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM — BIOLOGICAL-TIME VALIDATION LAG",
      description: "Mortality outcome validation requires years of follow-up. The definitive evidence for the claim — does earlier detection reduce cancer mortality? — requires following participants from initial detection through treatment and beyond to observe mortality differences. The NHS-Galleri trial, enrolling in 2021, has results expected in 2026: a five-year lag. This is shorter than the longevity records' b",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "NHS-Galleri RCT mortality results (expected 2026). The specific event that would transition this record from FRAGMENTING toward RESOLVING or COLLAPSED is the publication of NHS-Galleri trial results with mortality endpoints. If the trial demonstrates reduced cancer mortality in the screened group, the claim receives its most direct possible confirmation. If the trial fails to demonstrate mortality",
    }
  ],

  lineage: {
    items: [
    { year: "2008–14", text: "ctDNA technology foundation. Cell-free DNA detection established; tumour-derived fragments demonstrated in blood. The proxy signal's biological validity is established." },
    { year: "2018–21", text: "Multi-cancer detection tests developed. Galleri and competitors develop methylation-based multi-cancer panels. FDA breakthrough device designations. Commercial interest intensifies." },
    { year: "2021–23", text: "Clinical validation data emerges; lead-time bias concern formalised. SYMPLIFY and PATHFINDER provide performance data. NHS-Galleri RCT enrolls 140,000. Sensitivity gap at early stages documented." },
    { year: "2026", text: "NHS-Galleri full results presented at ASCO. Primary endpoint (combined Stage III/IV reduction) not met within one-year follow-up; Stage IV diagnoses fall, Stage III diagnoses rise; no mortality data reported. Follow-up extended 6–12 months." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "This record has a defined attractor timeline: NHS-Galleri results in 2026. The corpus has no governed procedure for a record where the decisive evidence event is prospective and dated. Should the Observatory track this differently from records where the attractor timeline is unknown?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "The pre-production observation identified early-stage sensitivity (24% for Stage I) as a critical gap. Does this gap constitute a measurement validity issue (ctDNA signal is an insufficient proxy at early stages) or a technological limitation (current assays lack sensitivity, which future methods will improve)? These have different implications for the claim's trajectory.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "INST-005 is the eighth occurrence of anticipatory institutional evidence and the second instance of pre-validation commercial deployment (after FR-BT-0003 INST-005). The pattern of commercialising before definitive clinical evidence is twice confirmed in PROG-BT. Does this constitute a PROG-BT-specific commercial pressure dynamic, or is it a broader biotechnology sector pattern? This bears on whether the fifth anticipatory act type (undermining validation environment) belongs in RN-004 or in a PROG-BT programme note.",
      raisedDate: "2024-01-15",
    }
  ],

  mutationLog: [
    // APPEND-ONLY. Newest first.
    { id: "M-007", date: "2026-06-27", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "ASSESSMENT-002 issued. Pressure state: FRAGMENTING (sustained). Triggering instance: INST-006. Part of RELEASE-004 / TRIAL-001." },
    { id: "M-006", date: "2026-06-27", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "INST-006 added (NHS-Galleri full trial results, ASCO 2026)." },
    { id: "M-005", date: "2024-01-15", field: "diagnosis_confirmed", from: "—", to: "DIAGNOSIS-CONFIRMED", note: "" },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" }
  ],

  status: "open",
};
