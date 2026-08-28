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
      sourceReference: "Diehl et al., Nature Medicine 14 (2008), doi:10.1038/nm.1789; Wan et al., Nature Reviews Cancer 17 (2017), doi:10.1038/nrc.2017.7",
    },
    {
      id: "IN-002",
      qualifiedEvent: "Galleri studies — multi-cancer detection in screening and symptomatic cohorts",
      description: "GRAIL's Galleri test, using methylation sequencing of cfDNA, reports prospective evidence from two distinct intended-use settings. PATHFINDER, published in 2023 after enrolment and testing beginning earlier, returned results to asymptomatic adults aged 50 years or older. SYMPLIFY, also published in 2023, evaluated symptomatic patients already referred for cancer investigation in England and Wales: sensitivity was 66.3% overall and specificity 98.4%, while sensitivity rose from 24.2% at Stage I to 95.3% at Stage IV. This distinction matters: SYMPLIFY is a diagnostic-triage cohort, not a high-risk screening population. Across the evidence, detection is materially weaker at the early stages where the record's claim has greatest value, leaving the early-stage sensitivity gap as the primary evidential challenge.",
      vectors: ["partial--detection-demonstrated-early-stage-sensitivity-remains-low"],
      date: "2021–23",
      sourceReference: "Schrag et al., The Lancet 402 (2023), PATHFINDER, doi:10.1016/S0140-6736(23)01700-2; Nicholson et al., The Lancet Oncology 24 (2023), SYMPLIFY, doi:10.1016/S1470-2045(23)00277-2",
    },
    {
      id: "IN-003",
      qualifiedEvent: "NHS-Galleri trial — population-level screening evidence",
      description: "The NHS-Galleri trial enrolled 142,924 participants in England in a randomised controlled trial of Galleri plus standard care versus standard care alone in an asymptomatic population aged 50–77. Its pre-specified primary objective was a reduction in late-stage (Stage III–IV) cancer incidence, first assessed across twelve pre-specified cancer types; mortality was not the primary endpoint. Randomisation and longer-term linkage can support later mortality comparison, but stage shift and mortality benefit are distinct outcomes. At this point in the record's chronology, the late-stage-incidence result and mortality follow-up were both pending. The claim therefore remained FRAGMENTING: early detection was demonstrably achievable in some contexts, while whether it produces clinically meaningful outcome benefit rather than lead-time or overdiagnosis effects remained unresolved.",
      vectors: ["neutral--definitive-trial-ongoing-results-pending-2026"],
      date: "2021–23",
      sourceReference: "Neal et al., Journal of Clinical Oncology 40 supplement (2022), NHS-Galleri trial design, doi:10.1200/JCO.2022.40.16_suppl.TPS6606; ISRCTN91431511; NCT05611632",
    },
    {
      id: "IN-004",
      qualifiedEvent: "Lead-time bias and overdiagnosis evidence — early detection without outcome benefit",
      description: "The cancer screening literature contains multiple examples of earlier detection not producing mortality benefit due to lead-time bias (earlier detection without actual life extension) and overdiagnosis (detection of cancers that would never have caused clinical harm). Prostate-specific antigen (PSA) screening is the canonical case: widespread adoption followed by evidence that many screen-detected cancers were low-risk and treated unnecessarily. Lung cancer screening with low-dose CT demonstrates genuine mortality benefit in high-risk populations, establishing that early detection can work. The liquid biopsy literature has not yet accumulated sufficient follow-up data to distinguish genuine benefit from lead-time bias at scale. This is the specific proxy gap: blood-based ctDNA signal (measured object) as proxy for clinically meaningful early cancer (asserted object). A cancer detectable by liquid biopsy may be a fast-growing, treatment-responsive cancer where earlier detection genuinely helps — or a slow-growing cancer that would never have caused symptoms, making detection harmful through unnecessary treatment. The measurement cannot currently discriminate between these.",
      vectors: ["contesting--proxy-gap-detectable-signal--clinically-actionable-cancer"],
      date: "2023–24",
      sourceReference: "Andriole et al., New England Journal of Medicine 360 (2009), PLCO prostate screening, doi:10.1056/NEJMoa0810696; National Lung Screening Trial Research Team, New England Journal of Medicine 365 (2011), doi:10.1056/NEJMoa1102873",
    },
    {
      id: "IN-005",
      qualifiedEvent: "GRAIL acquisition by Illumina, regulatory battles, and commercial deployment",
      description: "Illumina completed its acquisition of GRAIL in 2021 in a transaction valued at approximately $7.1 billion. Competition authorities in both the European Union and United States challenged the transaction; the European Commission ordered restorative divestment measures in 2023, and Illumina announced it would divest after the December 2023 US Fifth Circuit decision. The separation was completed through a GRAIL spin-off on 24 June 2024. Meanwhile, GRAIL and competitors continued commercial deployment and clinical-validation programmes. Galleri was commercially available in the United States at approximately $950 per test without FDA approval for population screening. This constitutes anticipatory institutional evidence: substantial capital and commercial deployment preceded definitive randomised clinical-utility and mortality evidence.",
      vectors: ["partial--anticipatory-commercial-deployment-definitive-evidence-pending"],
      date: "2021–24",
      sourceReference: "US FTC, Illumina/GRAIL enforcement record and divestment statement (2021–23); European Commission, restorative measures IP/23/4872 (2023); Illumina, 'Illumina completes the divestiture of GRAIL' (24 June 2024)",
    },
    {
      id: "IN-006",
      qualifiedEvent: "NHS-Galleri trial — full results presented at ASCO 2026",
      description: "Investigators present the NHS-Galleri primary results orally at the 2026 American Society of Clinical Oncology Annual Meeting on 30 May 2026. The results are published as late-breaking abstract LBA100 in the Journal of Clinical Oncology conference supplement, not as a full peer-reviewed results article. The pre-specified primary endpoint — a statistically significant combined reduction in Stage III and Stage IV diagnoses across twelve cancer types — is not met. Stage IV diagnoses fall by more than 20% in later screening rounds, but a higher-than-anticipated number of Stage III diagnoses offsets that result in the combined endpoint. The Galleri arm reports a four-fold higher overall cancer detection rate than standard-care screening alone. No mortality endpoint is reported. Independent commentary via the Science Media Centre emphasises that stage shift and mortality benefit are distinct questions and describes the evidence as conference-presented results rather than a published full study. The awaited trial event has therefore occurred without producing the clean resolution anticipated by the record's original attractor.",
      vectors: ["partial--primary-endpoint-missed-stage-shift-observed-mortality-pending"],
      date: "2026",
      sourceReference: "Swanton et al., NHS-Galleri primary results, Journal of Clinical Oncology 44 supplement (2026), abstract LBA100, doi:10.1200/JCO.2026.44.17_suppl.LBA100; GRAIL trial-results release (19 February 2026); Science Media Centre expert reaction (30 May 2026)",
    }
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2024-01-15",
      pressureState: "fragmenting",
      verificationStage: "VS-03",
      summary: "The claim is partially supported and fragmenting. Blood-based liquid biopsy can detect cancer signals before conventional diagnosis in a demonstrable fraction of cases — the Galleri test's performance data establishes this for multiple cancer types. The detection is reliable in a technical sense: specificity is high (98.4%) and sensitivity, while lower than desired, is non-trivial across cancer types. For the claim as stated, this constitutes partial confirmation: early detection before conventional diagnosis is achievable in some cases. The claim fragments on the central unresolved question: whether that earlier detection reduces cancer mortality, or whether it produces stage shift and lead-time effects without a genuine survival benefit (IN-004). Sensitivity is markedly lower for early-stage disease (approximately 24% at Stage I) — precisely the regime in which the claim's value would be greatest — and the NHS-Galleri trial (INST-003), the first to test the claim against a mortality endpoint directly, has not yet reported. The pressure state is FRAGMENTING: the technology works as a detection instrument, but whether detection translates into the clinical benefit the claim asserts remains genuinely open (AT-001).",
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
      description: "Mortality outcome validation requires years of follow-up. The definitive evidence for whether earlier detection improves survival requires following participants from detection through treatment and long-term outcomes. NHS-Galleri's 2026 primary analysis measured late-stage cancer incidence, not mortality, and therefore cannot by itself close the record's outcome-validity gap. Mortality linkage or another adequately powered randomised mortality analysis remains subject to a longer biological-time validation lag.",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Randomised mortality evidence following multi-cancer early detection. The event capable of moving this record decisively beyond FRAGMENTING is an adequately powered comparison showing whether screening reduces cancer-specific or all-cancer mortality without disproportionate overdiagnosis and downstream harm. NHS-Galleri's late-stage-incidence analysis is relevant stage-shift evidence but does not itself satisfy this attractor.",
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
      question: "How should the record distinguish late-stage-incidence evidence from mortality evidence when stage shift is reported before sufficiently mature survival follow-up, and what mortality endpoint would be adequate to resolve the claim?",
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
    { id: "M-008", date: "2026-08-28", field: "reference_corrected", from: "Instance references absent; IN-002 cohort/date imprecise; IN-003/AS-001 derivative frame treated mortality as NHS-Galleri's primary endpoint; IN-005 transaction value and divestment account imprecise; IN-006 described a conference abstract as concurrent JCO publication", to: "IN-001–IN-006 references recorded; cohort, endpoint, transaction and publication-status descriptions corrected", note: "GP-001 provenance and description correction following the bounded three-record source/DOI audit. IN-003, RM-001, AT-001 and OQ-001 now distinguish the trial's actual late-stage-incidence primary endpoint from later mortality evidence. IN-005 records the approximately $7.1bn transaction and both EU and US enforcement history. IN-006 identifies JCO LBA100 as a conference-supplement abstract rather than a full article. AS-001 and AS-002 remain unchanged as append-only historical assessments; their mortality-endpoint wording must be read with this correction. Current Pressure State FRAGMENTING and Verification Stage VS-04 remain unchanged." },
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
