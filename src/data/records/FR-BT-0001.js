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
  provenanceOutcome: "discrepancies_corrected",
  provenanceRepairStatus: "completed",

  claim: {
    statement: "Senolytic therapies can meaningfully extend healthy human lifespan.",
    shortLabel: "Senolytic Therapies — Meaningful Human Healthspan Extension",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Baker et al. and van Deursen lab — senescent cell clearance extends healthspan in mice",
      description: "Baker et al. (2016, Nature) used the INK-ATTAC transgenic system to periodically clear p16Ink4a-positive cells in naturally aged mice. Treatment delayed several age-associated pathologies and extended median lifespan; the reported magnitude varied by sex and genetic background rather than being a single approximately 25% result. The model establishes a causal preclinical principle, but it is not a pharmacological intervention in humans and does not yield a direct human healthspan estimate.",
      vectors: ["supportive--causal-principle-established-in-model-organism"],
      date: "2016",
      sources: [
        { citation: "Baker et al., Naturally occurring p16(Ink4a)-positive cells shorten healthy lifespan, Nature 530, 184–189 (2016)", doi: "10.1038/nature16932", locator: "Abstract — median lifespan and age-associated pathology results in two genetic backgrounds" },
      ],
    },
    {
      id: "IN-002",
      qualifiedEvent: "Dasatinib + Quercetin Phase I/II trials — first human senolytic evidence",
      description: "Two distinct 2019 D+Q pilot studies supply early human evidence. Justice et al. reported feasibility and exploratory physical-function signals in an open-label idiopathic-pulmonary-fibrosis study. Hickson et al. separately reported reduced senescent-cell measures in adipose tissue and epidermis in a small diabetic-kidney-disease study. Neither was a randomised healthspan trial, and the studies should not be combined into one tissue-marker and functional-outcome result. They support early target-engagement and feasibility evidence, not meaningful human healthspan extension.",
      vectors: ["partial--surrogate-endpoint-evidence-in-small-human-trials"],
      date: "2019",
      sources: [
        { citation: "Justice et al., Senolytics in idiopathic pulmonary fibrosis: Results from a first-in-human, open-label pilot study, EBioMedicine 40, 554–563 (2019)", doi: "10.1016/j.ebiom.2018.12.052", locator: "Abstract — open-label IPF pilot and physical-function feasibility signal" },
        { citation: "Hickson et al., Senolytics decrease senescent cells in humans: Preliminary report from a clinical trial of Dasatinib plus Quercetin in individuals with diabetic kidney disease, EBioMedicine 47, 446–456 (2019)", doi: "10.1016/j.ebiom.2019.08.069", locator: "Abstract — adipose and epidermal senescent-cell measures after D+Q" },
      ],
    },
    {
      id: "IN-003",
      qualifiedEvent: "Unity Biotechnology Phase II failures and NaviFate trial results",
      description: "Unity's UBX0101 Phase II knee-osteoarthritis programme reported no efficacy for a single intra-articular dose in 2020; the peer-reviewed Phase II report followed in 2021. This is an indication-specific randomised clinical setback, not a general test of whether senolytics extend human healthspan. UBX1325 is a separate BCL-xL inhibitor programme in diabetic macular edema: Unity reported positive Phase II BEHOLD results in 2022–23, but those company-reported local eye-disease results do not establish healthspan extension. The record does not use later UBX1325 results in this legacy correction.",
      vectors: ["contesting--phase-ii-failures-on-clinical-endpoints"],
      date: "2020–23",
      sources: [
        { citation: "Lane et al., A phase 2, randomized, double-blind, placebo-controlled, multi-center study of UBX0101 in patients with painful knee osteoarthritis, Osteoarthritis and Cartilage 29, 1056–1065 (2021)", url: "https://www.oarsijournal.com/article/S1063-4584(21)00114-X/fulltext", locator: "Abstract — single intra-articular dose failed to demonstrate efficacy" },
        { citation: "UNITY Biotechnology, Phase 2 BEHOLD UBX1325 results (2022)", url: "https://www.sec.gov/Archives/edgar/data/1463361/000119312522219278/d379677dex991.htm", locator: "Company-reported Phase 2 diabetic-macular-edema data" },
      ],
    },
    {
      id: "IN-004",
      qualifiedEvent: "AFFIRM-NASH and MILES trials — surrogate biomarker progress",
      description: "The source chain reviewed here does not substantiate the named AFFIRM-NASH or Müller D+Q result. The MILES trial was a sirolimus trial in lymphangioleiomyomatosis, not a D+Q senolytic study. Human senolytic studies can assess short-term biomarkers and function, but this instance does not establish the broader claimed bundle of positive D+Q, fisetin, and navitoclax biomarker findings. It is retained as a record of the evidentiary boundary: no hard human healthspan outcome is demonstrated by the studies verified in this review.",
      vectors: ["neutral--legacy-surrogate-trial-bundle-withdrawn-source-mismatch"],
      date: "2023–24",
      sources: [
        { citation: "MILES trial, sirolimus for lymphangioleiomyomatosis", url: "https://clinicaltrials.gov/study/NCT00414648", locator: "Intervention and condition — sirolimus in lymphangioleiomyomatosis" },
      ],
    },
    {
      id: "IN-005",
      qualifiedEvent: "Longevity industry investment and anticipatory commercial commitments",
      description: "Commercial and philanthropic interest in aging biology is real, but broad longevity-sector investment is not equivalent to investment in, or evidence for, senolytic therapies. Calico, Altos Labs, Human Longevity and the National Institute on Aging Interventions Testing Program have wider remits; the ITP evaluates interventions in mice and does not establish human senolytic healthspan benefit. This instance is therefore bounded as context about institutional interest, not as support for the claim or as a comparable measure of anticipatory senolytic commitment.",
      vectors: ["neutral--broader-longevity-interest-not-senolytic-efficacy-evidence"],
      date: "2021–24",
    }
    {
      id: "IN-006",
      qualifiedEvent: "Bian et al. — D+Q reduces diabetic-kidney injury markers in a murine model",
      description: "Bian et al. (2026) tested a five-day dasatinib-plus-quercetin regimen in streptozotocin-induced diabetic male C57BL/6J mice, with supporting cell-culture experiments. Compared with diabetic controls, the study reported improved kidney-function measures and reduced kidney-injury, fibrosis, p16Ink4a, inflammatory and macrophage-associated markers; it also reported higher α-Klotho and Sirtuin-1 measures. This is supportive preclinical evidence for D+Q activity in a disease-specific mouse model. It does not report a new human trial, a hard human clinical outcome, or meaningful human healthspan extension.",
      vectors: ["supportive--disease-specific-preclinical-senolytic-evidence"],
      date: "2026",
      sources: [
        { citation: "Bian et al., Senolytics, dasatanib plus quercetin, reduce kidney inflammation, senescent cell abundance, and injury while restoring geroprotective factors in murine diabetic kidney disease, EBioMedicine 124, 106124 (2026)", doi: "10.1016/j.ebiom.2026.106124", locator: "Abstract — STZ-induced male C57BL/6J mouse model, five-day D+Q regimen, kidney-function and molecular-marker findings" },
      ],
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
    },
    {
      id: "AS-002",
      date: "2026-09-23",
      pressureState: "escalating",
      verificationStage: "VS-02",
      summary: "LPR-001-D25 corrects the historical warrant without reversing the record. The strongest retained preclinical evidence is the transgenic INK-ATTAC mouse result, whose lifespan magnitude is now bounded to the reported sex- and background-dependent range. In humans, separate small 2019 D+Q pilots provide early feasibility, exploratory physical-function, and tissue target-engagement signals; they do not demonstrate healthspan extension. Unity's UBX0101 knee-osteoarthritis failure is retained as an indication-specific clinical setback, while company-reported UBX1325 eye-disease results are not treated as healthspan evidence. The former MILES/AFFIRM-NASH biomarker bundle and broad longevity-capital inference no longer support the assessment. ESCALATING / VS-02 remains warranted on the narrower basis of real preclinical causality, preliminary human target engagement, and unresolved clinical translation; no senolytic has demonstrated meaningful human healthspan extension on hard outcomes.",
      assessorNote: "Corrective assessment appended after LPR-001-D25. AS-001 remains historical. The 2026 D+Q diabetic-kidney-disease report remains outside this correction pending Normal Record Review.",
    }
    {
      id: "AS-003",
      date: "2026-09-23",
      pressureState: "escalating",
      verificationStage: "VS-02",
      summary: "Normal Record Review admits Bian et al. (2026) as additional disease-specific preclinical evidence: D+Q improved kidney-function and injury-related measures in a streptozotocin-induced diabetic mouse model, alongside cell-culture findings. The paper also recites prior human pilot biomarker observations, but it reports no new human intervention results. Accordingly, it modestly strengthens preclinical plausibility in diabetic kidney disease without addressing the record's decisive gap: clinically meaningful human healthspan outcomes. ESCALATING / VS-02 remains unchanged.",
      assessorNote: "Normal Record Review outcome: evidence admitted as IN-006; no pressure-state or verification-stage transition.",
    }
  ],

  mechanisms: [
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Surrogate-to-clinical translation gap. Small human studies report preliminary target-engagement and short-term functional signals, but it remains unproven that those measures produce clinically meaningful healthspan outcomes. The translation gap between biomarkers and clinical endpoints is a structural problem for this claim: early surrogate evidence can accumulate over months while meaningful healthspan outcomes require longer, indication-appropriate follow-up.",
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
    { year: "2015–18", text: "Senolytic candidates identified; transgenic mouse evidence strengthens causal plausibility. Baker et al. report delayed pathology and sex- and background-dependent median-lifespan extension after clearance of p16-positive cells in INK-ATTAC mice." },
    { year: "2018–21", text: "Early human D+Q pilots report feasibility, exploratory physical-function and tissue target-engagement signals, while Unity's knee-osteoarthritis UBX0101 programme fails to show efficacy for its studied dosing and indication." },
    { year: "2021–24", text: "Clinical translation remains unsettled. Company-reported UBX1325 diabetic-macular-edema data concern a local disease indication, while no verified trial establishes meaningful human healthspan extension." },
    { year: "2026", text: "Bian et al. report D+Q-associated kidney-function and molecular-marker improvements in a streptozotocin-induced diabetic mouse model. This adds disease-specific preclinical support but does not provide new human healthspan evidence." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "What kinds of investment or institutional commitment are sufficiently claim-specific to count as anticipatory evidence, rather than as general context about aging biology or biotechnology?",
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
    { id: "M-010", date: "2026-09-23", field: "instance_added", from: "—", to: "IN-006 ADMITTED / NORMAL RECORD REVIEW", note: "Normal Record Review of Bian et al. (2026), EBioMedicine 124:106124, DOI 10.1016/j.ebiom.2026.106124. The primary study reports D+Q effects in streptozotocin-induced diabetic male C57BL/6J mice and supporting cell models; it is admitted as disease-specific preclinical evidence. It reports no new human intervention result or hard human healthspan outcome. AS-003 is appended with no state change: ESCALATING / VS-02 retained. The review is separate from LPR-001-D25 and does not alter its provenance-correction outcome." },
    { id: "M-009", date: "2026-09-23", field: "provenance_correction", from: "LPR-001-D25 discrepancies_found / pending", to: "LPR-001-D25 discrepancies_corrected / completed", note: "Approved bounded correction of IN-001 through IN-005. IN-001 now states the source-supported, sex- and background-dependent mouse lifespan result; IN-002 separates the 2019 IPF and diabetic-kidney-disease D+Q pilots; IN-003 corrects Unity chronology and distinguishes UBX0101 from company-reported UBX1325 eye-disease evidence; IN-004 withdraws the mismatched MILES/AFFIRM-NASH/Müller trial bundle; and IN-005 bounds broader longevity-sector interest as non-efficacy context. Structured sources[] added only where the reviewed source basis is confident. AS-001 is preserved and AS-002 appended; RM-001, lineage and OQ-001 were aligned. ESCALATING / VS-02 retained. No 2026 evidence admitted; the diabetic-kidney-disease report remains a Normal Record Review candidate." },
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
