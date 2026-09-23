/**
 * FR-BT-0001 — Senolytic Therapies — Meaningful Human Healthspan Extension
 * Programme: PROG-BT
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_BT_0001 = {
  id: "FR-BT-0001",
  programme: "PROG-BT",
  lastProvenanceReview: "2026-09-23",
  provenanceReviewId: "LPR-001-D25",
  provenanceOutcome: "discrepancies_found",
  provenanceRepairStatus: "pending",

  claim: {
    statement: "Senolytic therapies can meaningfully extend healthy human lifespan.",
    shortLabel: "Senolytic Therapies — Meaningful Human Healthspan Extension",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Baker et al. and van Deursen lab — senescent cell clearance extends healthspan in mice",
      description: "Baker et al. (2016, Nature) demonstrate that periodic clearance of p16Ink4a-positive senescent cells in naturally aged mice extends median healthspan by approximately 25% and delays the onset of age-related pathologies including cataracts, muscle wasting, and fat loss. The result uses a transgenic model (INK-ATTAC) that does not directly translate to pharmacological intervention in humans, but establishes the causal principle: senescent cell accumulation contributes to age-related decline, and their removal produces measurable healthspan benefit. This is the foundational preclinical evidence for the claim. It is supportive of the biological plausibility but does not address human clinical outcomes. The 25% healthspan extension in mice is not directly translatable to human benefit estimates.",
      vectors: ["supportive--causal-principle-established-in-model-organism"],
      date: "2015–18",
    },
    {
      id: "IN-002",
      qualifiedEvent: "Dasatinib + Quercetin Phase I/II trials — first human senolytic evidence",
      description: "Kirkland, Tchkonia, and colleagues at Mayo Clinic conduct the first human senolytic trials using dasatinib (a cancer drug) combined with quercetin (a flavonoid), collectively termed D+Q. A pilot study in idiopathic pulmonary fibrosis patients (Kirkland et al. 2019, EBioMedicine) shows reduction in senescent cell markers (p16, p21) in skin and fat tissue, and exploratory improvements in physical function. A subsequent randomised pilot trial in diabetic kidney disease (Hickson et al. 2019) shows senescent cell burden reduction and improvements in physical function measures. These are small trials (9–20 patients) with surrogate endpoint outcomes, not lifespan or long-term healthspan outcomes. They establish that pharmacological senolytic activity is achievable in humans and that surrogate markers respond. They do not yet demonstrate meaningful healthspan extension.",
      vectors: ["partial--surrogate-endpoint-evidence-in-small-human-trials"],
      date: "2019–21",
    },
    {
      id: "IN-003",
      qualifiedEvent: "Unity Biotechnology Phase II failures and NaviFate trial results",
      description: "Unity Biotechnology, the leading senolytic clinical-stage company, reports Phase II trial failure for UBX0101 (a senolytic targeting the MDM2-p53 interaction) in osteoarthritis of the knee (2021): no significant improvement over placebo on primary pain and function endpoints. A subsequent Phase II for UBX1325 in diabetic macular edema shows initial signals but mixed results on primary endpoints (2022–23). These failures are significant: they are the first adequately powered randomised controlled trials of senolytics in humans, and they failed to demonstrate clinical benefit on their primary endpoints. The stock price of Unity Biotechnology falls more than 90% from its peak. The record transitions from EMERGING to ESCALATING because the biological plausibility remains — the trial failures are attributable partly to drug choice, dosing, and endpoint selection rather than a clean refutation of the senolytic hypothesis — but the first major clinical test has produced null results.",
      vectors: ["contesting--phase-ii-failures-on-clinical-endpoints"],
      date: "2022–24",
    },
    {
      id: "IN-004",
      qualifiedEvent: "AFFIRM-NASH and MILES trials — surrogate biomarker progress",
      description: "The surrogate-to-clinical translation gap is the primary unresolved evidence gap for the claim. Multiple Phase I/II trials of D+Q and novel senolytics (fisetin, navitoclax) report reductions in circulating SASP markers (IL-6, IL-8, MMP-3), p16 expression in peripheral blood mononuclear cells, and improvements in physical performance measures in older adults. The MILES trial (Müller et al. 2023) shows D+Q reduces senescent cell burden in humans measured by multiple biomarkers. These are surrogate endpoint results: they show that senolytics do what they are supposed to do at the cellular level in humans. They do not demonstrate clinical benefit on hard endpoints (mortality, disease incidence, functional independence).",
      vectors: ["partial--surrogate-biomarker-progress-without-clinical-endpoints"],
      date: "2023–24",
    },
    {
      id: "IN-005",
      qualifiedEvent: "Longevity industry investment and anticipatory commercial commitments",
      description: "This is the fourth occurrence of anticipatory institutional evidence in the corpus: serious capital is being committed in anticipation of the claim's eventual satisfaction. Like previous occurrences (Helion/Microsoft, NIST PQC standards, superconductivity community tightening), this constitutes evidence about institutional belief rather than about the claim's current truth. The senolytic and longevity biotechnology sector receives substantial investment: Unity Biotechnology raises over $300M; Calico (Google), Altos Labs (Bezos-funded), and Human Longevity Inc. collectively raise billions targeting age-related disease and lifespan extension. The National Institute on Aging funds the Interventions Testing Programme (ITP), which has evaluated rapamycin, acarbose, and other compounds for lifespan extension in mice. Several of these companies have explicitly positioned themselves around the claim this record tracks.",
      vectors: ["partial--anticipatory-institutional-evidence-fourth-occurrence"],
      date: "2021–24",
    }
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2024-01-15",
      pressureState: "escalating",
      verificationStage: "VS-02",
      summary: "The claim has not been satisfied. No senolytic therapy has demonstrated meaningful healthspan extension in humans on clinical endpoints. The foundational preclinical evidence (INST-001) establishes a compelling causal mechanism — senescent cell accumulation contributes to aging, and their removal produces healthspan benefit in mice. The human surrogate evidence (INST-002, INST-004) demonstrates that senolytics reduce senescent cell burden in humans. But the Phase II clinical trial failures (INST-003) — the first adequately powered randomised trials of senolytics in humans — failed to demonstrate benefit on primary clinical endpoints. The pressure state is ESCALATING: the mechanistic and surrogate-marker case remains strong, and the first hard clinical test has returned a null result that is attributable at least partly to drug choice, dosing, and endpoint selection (RM-002) rather than a clean refutation of the underlying hypothesis, but the surrogate-to-clinical translation gap (RM-001) is now the central unresolved obstacle.",
      assessorNote: null,
    }
  ],

  mechanisms: [
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Surrogate-to-clinical translation gap. Senolytic therapies demonstrably reduce surrogate markers of senescence (p16, SASP cytokines, senescent cell counts) in humans. What remains undemonstrated is that these surrogate reductions produce clinically meaningful improvements in healthspan outcomes. The translation gap between surrogate biomarkers and clinical endpoints is a well-characterised problem in drug development — many interventions that improve surrogate markers fail to demonstrate clinical benefit. For senolytics, this gap is compounded by the long timescales required for clinical endpoint measurement. The resistance mechanism is structural: surrogate evidence accumulates on timescales of months; clinical evidence requires years to decades.",
    },
    {
      id: "RM-002",
      type: "RESISTANCE MECHANISM",
      description: "Biological variability and patient heterogeneity. Senescent cell burden, SASP composition, and tissue-specific effects vary substantially across individuals, ages, and disease states. The optimal senolytic drug, dose, frequency, and target population for healthspan extension in healthy humans has not been identified. Clinical trials in specific disease populations (osteoarthritis, diabetic kidney disease, pulmonary fibrosis) may not generalise to healthy aging prevention. The heterogeneity means that a null result in one population and indication does not cleanly contest the claim for other populations and indications — but it also means the claim requires evidence across multiple settings before it can be confirmed.",
    },
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "\"Meaningfully extend\" lacks an agreed threshold. The claim requires meaningful extension of healthy lifespan, but no agreed clinical threshold defines what \"meaningful\" means. Is one year of additional healthy function meaningful? Five years? A 10% reduction in age-related disease incidence? The FDA has not approved any intervention for the indication of \"aging\" or \"healthspan extension\" — the regulatory framework does not currently accommodate such claims, meaning clinical trials cannot be powered against a standard threshold. This is a lexical and regulatory bottleneck of the same type as FR-AI-0004 (\"previously unseen\") and FR-AI-0006 (\"same mechanism\") — the fourth such bottleneck in the corpus. Without an agreed threshold, the claim cannot transition to any resolved state regardless of evidence accumulation.",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "FDA \"geroscience\" indication and validated biomarker panel. Two developments would materially advance this record: first, FDA regulatory framework for aging as an indication (currently under discussion through the TAME trial — Targeting Aging with Metformin — and geroscience initiatives), which would create a governed clinical endpoint for healthspan extension; second, a validated biomarker panel that correlates with subsequent healthspan outcomes, providing a surrogate endpoint that is accepted as predictive. Both developments are in progress. If achieved, they would resolve BN-001 by providing an agreed threshold and make Phase III trials of senolytics tractable on five-to-ten year rather than twenty-to-thirty year timescales.",
    }
  ],

  lineage: {
    items: [
    { year: "2008–11", text: "Cellular senescence linked to aging phenotypes. van Deursen, Campisi, and Kirkland labs establish that senescent cell accumulation drives age-related pathology. The causal direction is established: senescence contributes to aging, not merely correlates with it." },
    { year: "2015–18", text: "Senolytic drugs identified; mouse healthspan extended. Zhu et al. identify dasatinib and quercetin as senolytics. Baker et al. demonstrate healthspan extension in mice. The pharmacological claim becomes experimentally tractable." },
    { year: "2018–21", text: "First human trials; longevity industry emerges. Mayo Clinic pilot trials show surrogate endpoint responses in humans. Unity Biotechnology, Calico, and others raise substantial capital. The claim enters ESCALATING as the biological plausibility is established and human evidence begins accumulating." },
    { year: "2021–24", text: "Phase II failures and continued surrogate progress. Unity Phase II failures demonstrate that surrogate-to-clinical translation is the primary obstacle. Surrogate biomarker trials continue producing positive signals. The claim remains ESCALATING with a quantified evidence gap: surrogate evidence positive, clinical endpoints unmeasured." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "INST-005 constitutes the fourth occurrence of anticipatory institutional evidence in the corpus. RN-004 was issued at three occurrences. Does a fourth occurrence warrant an update to RN-004, and does it change the evidential weight assessment? The longevity capital commitments are substantially larger than previous anticipatory acts (billions vs hundreds of millions), which may or may not be relevant to evidential weight.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "BN-001 (the \"meaningfully extend\" lexical bottleneck) is the fourth lexical bottleneck in the corpus — three are in PROG-AI, one is now in PROG-BT. Does this suggest that lexical bottlenecks are a property of claims that lack agreed measurement frameworks, rather than properties of specific domains?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "The biological-time evidence constraint appears as a diagnostic tendency in the first record. Whether this is a domain property (all PROG-BT claims will exhibit it) or a claim-type property (only healthspan claims face it; PROG-BT claims about diagnostic tools or therapeutic mechanisms may not) will be determinable only when PROG-BT has more records.",
      raisedDate: "2024-01-15",
    }
  ],

  mutationLog: [
    { id: "M-008", date: "2026-09-23", field: "provenance_review", from: "—", to: "LPR-001-D25 REVIEW REQUIRED", note: "Legacy provenance review completed. All five instances require bounded correction before structured sources[] can be attached without endorsing inaccurate or conflated wording. IN-001 overstates Baker et al.'s 2016 median-lifespan result as approximately 25%; the reported extension varies by sex and genetic background. IN-002 conflates the 2019 open-label IPF D+Q pilot (physical-function feasibility signal) with the separate 2019 diabetic-kidney-disease preliminary report (adipose/epidermal senescent-cell measures); it misattributes authorship, study design, tissue measures, and functional outcomes. IN-003 misdates the UBX0101 Phase II result and compresses distinct company-reported UBX1325 outcomes into a mixed 2022–23 clinical-failure narrative. IN-004 relies on a mismatched MILES trial (sirolimus in lymphangioleiomyomatosis, not D+Q senolysis) and cannot establish the claimed AFFIRM-NASH/Müller D+Q biomarker result. IN-005 conflates broad longevity-sector capital, which is not necessarily senolytic investment, with evidence for this claim. No evidence wording, assessment, pressure state, verification stage, mechanisms, lineage, or open questions was silently changed. A 2026 pilot report of D+Q in diabetic kidney disease is held out as a normal Record Review candidate and not admitted through LPR-001." },
    {"id":"M-007","date":"2026-09-06","field":"description_restored","from":"Legacy ingestion cutoffs: mechanisms:RM-001, mechanisms:RM-002, mechanisms:BN-001, mechanisms:AT-001, lineage:2021–24","to":"Source-restored complete descriptions","note":"Editorial Correction (GP-001), RENDER-PILOT-001 content restoration: restored RM-001, RM-002, BN-001, AT-001; lineage 2021–24 from FR_BT_0001_senolytics_lifespan_extension.html (Drive file 1YxRAM6C_mRMC7AbG5C_cM18zujArQxhl). Each damaged value was a verified prefix of the recovered source after the existing FR-MF to FR-AM identifier migration. Restored the omitted remainder using the original converter text normalization; no inferred completion. Existing later corrections retained. Restoration recovers historical wording and does not reaffirm it as the current assessment. Assessments, evidence instances, open questions, claim, status and rendering eligibility unchanged. Source hashes and field receipt: docs/reviews/render-pilot-content-restoration.json; current-assessment compatibility review: docs/reviews/RENDER-PILOT-001-CONTENT-RESTORATION.md."},
    // APPEND-ONLY. Newest first.
    { id: "M-006", date: "2026-07-09", field: "description_reordered", from: "—", to: "DESCRIPTION-REORDERED", note: "Editorial Correction (GP-001): IN-004, IN-005 descriptions reordered per EP-001 — existing closing synthesis sentence moved to opening, no wording added or removed." },
    { id: "M-005", date: "2024-01-15", field: "null_condition_partial", from: "—", to: "NULL-CONDITION-PARTIAL", note: "" },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" }
  ],

  status: "open",
};
