/**
 * FR-BT-0002 — Epigenetic Reprogramming — Biological Age Reversal Without Identity Loss
 * Programme: PROG-BT
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_BT_0002 = {
  id: "FR-BT-0002",
  programme: "PROG-BT",
  lastProvenanceReview: "2026-09-24",
  provenanceReviewId: "LPR-001-D26",
  provenanceOutcome: "discrepancies_corrected",
  provenanceRepairStatus: "completed",

  claim: {
    statement: "Epigenetic reprogramming can reverse biological age in living organisms without loss of cellular identity.",
    shortLabel: "Epigenetic Reprogramming — Biological Age Reversal Without Identity Loss",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Yamanaka factors and iPSC reprogramming — the theoretical basis and its limits",
      description: "Takahashi and Yamanaka (2006, Cell) induced pluripotent stem cells from mouse fibroblasts using Oct3/4, Sox2, Klf4 and c-Myc. That experiment established a route from differentiated cells to pluripotency; it did not measure an epigenetic ageing clock. Later in-vitro work by Olova et al. measured a decline in DNA-methylation age during human fibroblast reprogramming, reaching approximately zero by day 20 in that time course. Full pluripotency entails loss of the original somatic cell identity. The 2006 result supplies the reprogramming basis, and the later clock result supplies a distinct molecular-age observation; neither establishes reversal of biological age in a living organism while preserving cellular identity.",
      vectors: ["supportive--reprogramming-basis-and-later-in-vitro-clock-reset"],
      date: "2006–19",
      sources: [
        { citation: "Takahashi and Yamanaka, Induction of pluripotent stem cells from mouse embryonic and adult fibroblast cultures by defined factors, Cell (2006)", doi: "10.1016/j.cell.2006.07.024", locator: "Abstract — four-factor induction of pluripotency in mouse fibroblasts; no epigenetic clock measurement" },
        { citation: "Olova et al., Partial reprogramming induces a steady decline in epigenetic age before loss of somatic identity, Aging Cell (2019)", doi: "10.1111/acel.12877", locator: "Results — DNA-methylation-age time course in human fibroblasts and distinct kinetics of somatic identity loss" },
      ],
    },
    {
      id: "IN-002",
      qualifiedEvent: "Ocampo et al. and cyclic reprogramming — partial reprogramming in mice",
      description: "Ocampo et al. (Belmonte lab, Salk Institute, 2016, Cell) demonstrate that cyclic short-term induction of OSKM in a progeria mouse model (expressing a premature aging phenotype) extends lifespan by approximately 30% and reduces aging hallmarks without inducing tumours or loss of cellular identity. The key finding is that intermittent, limited OSKM expression reverses some epigenetic aging marks without completing dedifferentiation. The result is in a disease model (progeria) rather than normal aging, and in mice rather than humans. Lu et al. (Harvard, 2020, Nature) demonstrate partial reprogramming in retinal ganglion cells restores vision in aged mice with optic nerve damage, reducing epigenetic age of the cells and recovering visual function. Both results provide strong preclinical evidence for partial epigenetic reprogramming without identity loss. Both are in mice. Neither addresses the clinical translation question.",
      vectors: ["supportive--partial-reprogramming-without-identity-loss-in-mice"],
      date: "2016–20",
      sources: [
        { citation: "Ocampo et al., In Vivo Amelioration of Age-Associated Hallmarks by Partial Reprogramming, Cell (2016)", doi: "10.1016/j.cell.2016.11.052", locator: "Abstract and results — cyclic OSKM in premature-ageing mice" },
        { citation: "Lu et al., Reprogramming to recover youthful epigenetic information and restore vision, Nature (2020)", doi: "10.1038/s41586-020-2975-4", locator: "Abstract — OSK, mouse retinal ganglion cells, methylation and visual-function findings" },
      ],
    },
    {
      id: "IN-003",
      qualifiedEvent: "Altos Labs launch — institutional investment in cellular rejuvenation research",
      description: "Altos Labs launched in January 2022 with $3 billion committed to research on cellular rejuvenation programming. Its launch materials identify Shinya Yamanaka as an unpaid senior scientific adviser overseeing research activities in Japan, not as chairman. This is evidence of substantial institutional commitment to studying the field, not evidence that partial reprogramming reverses biological age without identity loss. Funding amounts and investor identities for other companies are not needed to establish this bounded event.",
      vectors: ["neutral--institutional-commitment-not-claim-efficacy"],
      date: "2022",
      sources: [
        { citation: "Altos Labs, launch announcement (19 January 2022)", url: "https://www.prnewswire.com/news-releases/altos-labs-launches-with-the-goal-to-transform-medicine-through-cellular-rejuvenation-programming-301463541.html", locator: "Launch funding, mission, board leadership and Yamanaka's senior scientific adviser role" },
        { citation: "Kyoto University CiRA, Prof. Shinya Yamanaka serves as a senior scientific advisor to Altos Labs (19 January 2022)", url: "https://www.cira.kyoto-u.ac.jp/e/pressrelease/other/220119-160000.html", locator: "Unpaid adviser role and supervision of Japan research" },
      ],
    },
    {
      id: "IN-004",
      qualifiedEvent: "Clock validity debate — does epigenetic age reversal reflect genuine rejuvenation?",
      description: "Epigenetic-clock change requires careful interpretation. Kriukov et al. (2024) applied uncertainty-aware models to reprogramming datasets and found that some apparent rejuvenation signals depend on the clock and its prediction uncertainty. Separately, Borrus et al. (2024 preprint) compared intervention datasets across clocks and reported that some chronological-age-clock changes were sporadic and did not persist with more reliable clock versions or multiple-testing correction. Neither study establishes that caloric restriction or a named drug resets clocks without organismal benefit. Together they support the narrower measurement question in BN-001: clock movement alone has not validated durable, functional rejuvenation in a living organism.",
      vectors: ["contesting--clock-uncertainty-and-surrogate-validity"],
      date: "2024",
      sources: [
        { citation: "Kriukov et al., Epistemic uncertainty challenges aging clock reliability in predicting rejuvenation effects, Aging Cell (2024)", doi: "10.1111/acel.14283", locator: "Abstract and reprogramming-dataset analyses — model uncertainty changes interpretation of clock trajectories" },
        { citation: "Borrus et al., When to Trust Epigenetic Clocks: Avoiding False Positives in Aging Interventions, bioRxiv preprint (2024)", doi: "10.1101/2024.10.22.619720", locator: "Abstract — clock disagreement, reliability and multiple-testing analysis; preprint, not peer reviewed at the time" },
      ],
    },
    {
      id: "IN-005",
      qualifiedEvent: "Partial reprogramming in non-human primates — bridging toward human evidence",
      description: "Life Biosciences reported at the October 2024 AAO meeting that its locally delivered OSK therapy ER-100 improved retinal-function and axon-density measures in a non-human-primate model of optic-nerve injury. The reported experiment used a single intravitreal injection with daily systemic doxycycline. This is company-reported conference evidence in one disease model, not a peer-reviewed demonstration by multiple groups of reduced epigenetic age across primate blood and tissues. The announcement does not establish long-term safety, retained cellular identity across tissues, or organism-wide age reversal. It offers a limited preclinical bridge toward the later ER-100 clinical programme.",
      vectors: ["partial--company-reported-nhp-ocular-function-not-age-reversal"],
      date: "2024",
      sources: [
        { citation: "Life Biosciences, AAO 2024 announcement of non-human-primate ER-100 studies (21 October 2024)", url: "https://www.lifebiosciences.com/life-biosciences-presents-at-aao-on-partial-epigenetic-reprogramming/", locator: "Company-reported NAION-like NHP model, intravitreal OSK, pattern electroretinogram and axon-density measures" },
      ],
    },
    {
      id: "IN-006",
      qualifiedEvent: "Life Biosciences (ER-100) — FDA IND clearance, first human partial-reprogramming trial",
      description: "Life Biosciences, founded on Harvard researcher David Sinclair's partial-reprogramming work, receives Investigational New Drug (IND) clearance from the FDA for ER-100, a partial OSK (Oct4/Sox2/Klf4, omitting c-Myc) reprogramming therapy targeting optic neuropathies. The company states the trial — the first-ever human trial of a partial epigenetic reprogramming therapy — will begin in Q1 2026. The preclinical pathway cited (rodent optic-nerve-injury recovery, followed by non-human-primate work) extends directly from the IN-002 and IN-005 evidence already in this record. This is the precise development AT-001 names as the resolution attractor: \"first human safety data\" at partial-reprogramming doses. The trial has not yet reported results as of this assessment — IND clearance and trial initiation are regulatory and operational milestones, not efficacy or safety data — so the human clinical evidence gap that AS-001 identified as complete is now closing rather than closed. The claim's central uncertainty (does partial reprogramming work, safely, in humans) remains unanswered, but for the first time it is being asked directly rather than only by extrapolation from animal models.",
      vectors: ["supportive--human-trial-cleared-not-yet-resulted"],
      date: "2026",
      sources: [
        { citation: "Life Biosciences (2026), FDA Clearance of IND Application for ER-100 in Optic Neuropathies", url: "https://www.lifebiosciences.com/life-biosciences-announces-fda-clearance-of-ind-application-for-er-100-in-optic-neuropathies/", locator: "January 28, 2026 announcement; Phase 1 NCT07290244" },
        { citation: "ClinicalTrials.gov, NCT07290244 — Evaluating ER-100 for Safety in People With Glaucoma or NAION", url: "https://clinicaltrials.gov/study/NCT07290244", locator: "Study overview and registration dates" },
      ],
    },
    {
      id: "IN-007",
      qualifiedEvent: "ER-100 enters human dosing — first participant treated in Phase 1",
      description: "Life Biosciences reports that the first participant was dosed on June 9, 2026 in the Phase 1 ER-100 trial for open-angle glaucoma and non-arteritic anterior ischemic optic neuropathy. ClinicalTrials.gov lists NCT07290244 as a recruiting first-in-human Phase 1 study sponsored by Life Biosciences. This converts the prior IND-clearance milestone into actual human exposure to partial OSK epigenetic reprogramming. It is materially closer to AT-001, but no trial results have been posted: dosing establishes operation of the clinical test, not safety, efficacy, biological-age reversal, identity preservation, or validated functional rejuvenation. The central evidentiary boundary therefore remains unresolved.",
      vectors: ["supportive--first-human-dosing-no-results-yet"],
      date: "2026-06-09",
      sources: [
        { citation: "Life Biosciences (2026), First Patient Dosed in Phase 1 Trial of ER-100 for Optic Neuropathies", url: "https://www.lifebiosciences.com/life-biosciences-announces-first-patient-dosed-in-phase-1-trial-of-er-100-for-optic-neuropathies/", locator: "June 9, 2026 announcement" },
        { citation: "ClinicalTrials.gov, NCT07290244 — Evaluating ER-100 for Safety in People With Glaucoma or NAION", url: "https://clinicaltrials.gov/study/NCT07290244", locator: "Recruiting status; Phase 1; sponsor and study overview" },
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
      summary: "The claim has not been satisfied in humans. Partial epigenetic reprogramming without loss of cellular identity has been demonstrated in multiple mouse models and is extending toward non-human primates. No human clinical trials have been initiated. The biological mechanism is well-established: OSKM and related factors can reset epigenetic age marks; partial expression can do so without completing dedifferentiation; and the process produces functional improvements in at least some mouse tissues. The claim's human clinical evidence gap remains complete: no partial reprogramming therapy has yet entered a human trial. The pressure state is ESCALATING: the mechanism is well established across multiple mouse models and the field is heavily capitalised (INST-003), but whether partial reprogramming is safe and effective in humans — and whether epigenetic clock reversal constitutes genuine rejuvenation rather than a movable measurement (BN-001) — remains entirely untested outside model organisms.",
      assessorNote: null,
    },
    {
      id: "AS-002",
      date: "2026-06-29",
      pressureState: "escalating",
      verificationStage: "VS-02",
      summary: "The human clinical evidence gap that AS-001 identified as complete is now closing. Life Biosciences has received FDA IND clearance for ER-100, a partial OSK reprogramming therapy, with a stated trial start of Q1 2026 — the first human trial of any partial epigenetic reprogramming therapy. This is the first half of AT-001's named resolution attractor (\"first human safety data and validated functional outcome biomarkers\"); the second half — actual safety and clock-reversal data — does not yet exist, since the trial has only just been cleared to begin, not completed or reported. The pressure state remains ESCALATING rather than moving to RESOLVING: clearance to run a trial is a regulatory and operational milestone, not efficacy or safety evidence. BN-001 (clock validity as a rejuvenation surrogate) is unaffected by this development and remains the record's primary interior bottleneck regardless of how the ER-100 trial proceeds. This assessment exists to record that the record's own named attractor condition has begun to materialise, not to anticipate its outcome.",
      assessorNote: "Sourced from: Life Biosciences public statements and lifespan.io coverage of the FDA IND clearance for ER-100 (reported Feb 2026). Accessed via secondary reporting; the FDA clearance itself and Life Biosciences' own trial registration were not independently verified at primary source. Given this is presented as a significant evidentiary development, primary verification (e.g. via ClinicalTrials.gov registration) is recommended before this assessment is treated as fully confirmed.",
    },
    {
      id: "AS-003",
      date: "2026-08-29",
      pressureState: "escalating",
      verificationStage: "VS-02",
      summary: "PA-006 provenance-in-review final replication confirms that ER-100 has progressed from regulatory clearance to actual human dosing: Life Biosciences reported the first participant dosed on June 9, 2026, and ClinicalTrials.gov lists NCT07290244 as recruiting. This is a substantive operational advance because the claim is now being tested directly in humans rather than only authorised for testing. It does not yet satisfy AT-001 or the governing claim. No results are posted, so there is still no human evidence establishing safety at partial-reprogramming doses, biological-age reversal, preserved cellular identity, or validated functional rejuvenation. BN-001 therefore remains unresolved. ESCALATING / VS-02 is retained pending human outcome evidence.",
      assessorNote: "PA-006 final replication trial. New evidence provenance captured at admission from Life Biosciences' June 9, 2026 first-patient-dosed announcement and ClinicalTrials.gov NCT07290244. Opportunistic legacy enrichment also verified IN-006 against Life Biosciences' January 28, 2026 IND announcement and the trial registry; no factual correction was required.",
    },
    {
      id: "AS-004",
      date: "2026-09-24",
      pressureState: "escalating",
      verificationStage: "VS-02",
      summary: "LPR-001-D26 narrows the historical evidentiary warrant. The 2006 four-factor iPSC result established pluripotency, while later in-vitro work measured a falling epigenetic clock; those are distinct observations. Altos Labs' capital commitment is institutional context, not efficacy evidence. Clock analyses identify measurement uncertainty, and the 2024 NHP bridge rests on one company-reported ocular injury model rather than multiple published systemic age-reversal studies. Mouse studies remain the strongest functional evidence; ER-100 has entered human dosing but has reported no human outcome results. The claim remains unconfirmed and the measurement and safety questions remain open. ESCALATING / VS-02 is retained on this narrower warrant.",
      assessorNote: "Corrective assessment appended following LPR-001-D26. AS-001 through AS-003 are preserved as dated historical assessments. No post-record scientific result was admitted through this provenance repair.",
    }
  ],

  mechanisms: [
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Safety window for partial reprogramming in humans. Sustained or excessive reprogramming can cause dedifferentiation and tumour risks; limited induction seeks to avoid these outcomes. Mouse work and company-reported NHP ocular data do not define long-term safety at clinically relevant human doses. ER-100 has now received IND clearance and entered Phase 1 dosing, so the earlier prediction that human exposure cannot begin is superseded. Whether partial OSK treatment preserves identity and avoids adverse effects in humans remains unreported and requires trial follow-up.",
    },
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "Biological age measurement validity. The claim requires that biological age be reversed. The primary measurement tool — epigenetic clocks — is contested as a surrogate for genuine rejuvenation. Clocks can be reset by interventions that may not produce functional benefit. If clock reversal and functional rejuvenation are dissociable — if the clock can be moved without changing organismal biology in ways that matter — then the claim's satisfaction conditions are ambiguous. This is a measurement validity bottleneck: the claim cannot be confirmed or contested cleanly until the relationship between clock readings and functional outcomes is established. This is structurally distinct from FR-BT-0001's lexical bottleneck (\"meaningfully extend\"): that was a threshold dispute; this is a measurement validity dispute. Both are bottlenecks from absence of an agreed measurement framework, as the verdict on FR-BT-0001 observed.",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "First human safety data and validated functional outcome biomarkers. Two developments would materially advance this record: first, Phase I human trials demonstrating safe OSKM induction at partial reprogramming doses with measurable epigenetic clock reversal and no adverse dedifferentiation signals; second, validated functional outcome biomarkers that correlate with clock reversal and demonstrate that clock reduction predicts downstream health benefits. The first would open the human evidence path; the second would resolve BN-001. Neither is present; both are on active development timelines in the field.",
    }
  ],

  lineage: {
    items: [
    { year: "2006", text: "Takahashi and Yamanaka induce pluripotency in mouse fibroblasts with four factors. Their study does not measure an epigenetic clock; later in-vitro work tests how clock readings change during reprogramming." },
    { year: "2016", text: "Cyclic partial reprogramming in progeria mice. Ocampo et al. demonstrate lifespan extension without tumour formation through intermittent OSKM. The claim becomes experimentally tractable. Partial reprogramming as a therapeutic concept enters the field." },
    { year: "2019–21", text: "Epigenetic clock reversal demonstrated in multiple tissues. Lu et al. and others demonstrate partial reprogramming in specific tissues (retina, muscle) with functional benefit in aged mice. The claim's mechanistic basis is substantially established in rodent models." },
    { year: "2022–23", text: "Altos Labs launches with $3 billion committed to cellular rejuvenation research; this is institutional investment, not evidence that the claim has been met." },
    { year: "2024", text: "Clock-model uncertainty and intervention-dependent clock disagreement sharpen the measurement question. Life Biosciences reports NHP ocular-function findings at AAO; the single company-reported disease-model result does not establish systemic age reversal." },
    { year: "2026", text: "ER-100 enters human testing. FDA IND clearance is followed by first-participant dosing in the Phase 1 NCT07290244 trial. Human exposure is now established, but no safety, efficacy, age-reversal, identity-preservation, or functional-outcome results have been reported." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "What would make Altos Labs' substantial, but broadly targeted, capital commitment claim-specific anticipatory evidence rather than institutional context? The former fifth-occurrence count is not retained without that showing.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "The clock validity dispute (INST-004) is structurally similar to the FR-AI-0006 mechanism coherence dispute: both ask whether a measurement tool is tracking the thing it purports to measure. Does this suggest a general phenomenon — measurement validity as a resistance mechanism — or is it specific to certain frontier domains?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "FR-BT-0001 and FR-BT-0002 are structurally adjacent but not related through evidence or ancestry in the way FR-AM-0001 and FR-AM-0002 were related. They share a programme and a validation constraint but have independent evidence trails. Does programme membership without evidence relationship constitute a weaker or different kind of programme structure than the PROG-AM genetic relationship?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-004",
      question: "ER-100's trial is the first direct test of AT-001's named attractor condition. When (or if) it reports results, should the pressure state move directly to RESOLVING, or does a single trial — likely small, likely focused on safety rather than efficacy at Phase 1 — only partially satisfy an attractor that names both safety data and validated functional biomarkers? The record should decide this before the trial reports, not in reaction to whatever it finds.",
      raisedDate: "2026-06-29",
    }
  ],

  mutationLog: [
    { id: "M-015", date: "2026-09-24", field: "provenance_correction", from: "LPR-001-D26 discrepancies_found / pending", to: "LPR-001-D26 discrepancies_corrected / completed", note: "Approved bounded correction of IN-001, IN-003, IN-004 and IN-005. Separated 2006 iPSC induction from later in-vitro epigenetic-clock findings; corrected Yamanaka's Altos role and limited funding to its sourced commitment; replaced the unsupported clock-intervention attribution with identifiable 2024 studies and their publication class; narrowed the primate evidence to Life Biosciences' 2024 company-reported ocular model. IN-002 was enriched from verified Ocampo and Lu papers. IN-006 and IN-007 were preserved. AS-004 appended; RM-001, lineage and OQ-001 aligned with corrected evidence. ESCALATING / VS-02 retained. No later scientific evidence admitted." },
    {"id":"M-014","date":"2026-09-06","field":"description_restored","from":"Legacy ingestion cutoffs: mechanisms:RM-001, mechanisms:BN-001, mechanisms:AT-001","to":"Source-restored complete descriptions","note":"Editorial Correction (GP-001), RENDER-PILOT-001 content restoration: restored RM-001, BN-001, AT-001 from FR_BT_0002_epigenetic_reprogramming_age_reversal.html (Drive file 12oQGYiWaYPv8-Je7uQ9gnN_v6IUV5zZ5). Each damaged value was a verified prefix of the recovered source after the existing FR-MF to FR-AM identifier migration. Restored the omitted remainder using the original converter text normalization; no inferred completion. Existing later corrections retained. Restoration recovers historical wording and does not reaffirm it as the current assessment. Assessments, evidence instances, open questions, claim, status and rendering eligibility unchanged. Source hashes and field receipt: docs/reviews/render-pilot-content-restoration.json; current-assessment compatibility review: docs/reviews/RENDER-PILOT-001-CONTENT-RESTORATION.md."},
    // APPEND-ONLY. Newest first.
    { id: "M-013", date: "2026-08-29", field: "provenance_enriched", from: "IN-006 without structured provenance", to: "IN-006 sources[] added", note: "PA-006 opportunistic legacy provenance enrichment. Primary Life Biosciences IND announcement and ClinicalTrials.gov registration verified the existing IN-006 event; description and evidentiary interpretation unchanged." },
    { id: "M-012", date: "2026-08-29", field: "assessment_issued", from: "AS-002", to: "AS-003", note: "PA-006 reassessment after first human dosing. ESCALATING / VS-02 retained: human testing is operational, but no human outcome evidence has been reported." },
    { id: "M-011", date: "2026-08-29", field: "instance_added", from: "—", to: "IN-007", note: "First participant dosed in ER-100 Phase 1 trial admitted with structured provenance at admission under PA-006." },
    { id: "M-010", date: "2026-07-09", field: "description_reordered", from: "—", to: "DESCRIPTION-REORDERED", note: "Editorial Correction (GP-001): IN-003 description reordered per EP-001 — existing closing synthesis sentence moved to opening, no wording added or removed." },
    { id: "M-009", date: "2026-07-08", field: "reference_corrected", from: "—", to: "REFERENCE-CORRECTED", note: "Editorial Correction (GP-001): OQ-003 referred to the stale identifiers FR-MF-0001, FR-MF-0002, and PROG-MF. Corrected to FR-AM-0001, FR-AM-0002, and PROG-AM following the FR-MF-* → FR-AM-* programme identifier migration. No evidence, interpretation, pressureState, verificationStage, assessment, or open question substance changed." },
    { id: "M-008", date: "2026-06-29", field: "open_question_raised", from: "—", to: "OQ-RAISED", note: "OQ-004 added: what a single Phase 1 trial result would or would not satisfy of AT-001's two-part attractor condition." },
    { id: "M-007", date: "2026-06-29", field: "assessment_issued", from: "AS-001", to: "AS-002", note: "AS-002 issued following targeted reassessment of single-assessment records. Pressure state unchanged: ESCALATING. New evidence (IN-006) is the first half of AT-001's named attractor (trial cleared) but not the second (results)." },
    { id: "M-006", date: "2026-06-29", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "IN-006 added: Life Biosciences ER-100 FDA IND clearance, first human partial-reprogramming trial, stated Q1 2026 start." },
    { id: "M-005", date: "2024-01-15", field: "diagnostic_tendency_confirmed", from: "—", to: "DIAGNOSTIC-TENDENCY-CONFIRMED", note: "" },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" }
  ],

  status: "open",
};
