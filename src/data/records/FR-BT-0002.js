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

  claim: {
    statement: "Epigenetic reprogramming can reverse biological age in living organisms without loss of cellular identity.",
    shortLabel: "Epigenetic Reprogramming — Biological Age Reversal Without Identity Loss",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Yamanaka factors and iPSC reprogramming — the theoretical basis and its limits",
      description: "Takahashi and Yamanaka (2006, Cell) demonstrate that four transcription factors (Oct4, Sox2, Klf4, c-Myc) can reprogram somatic cells to a pluripotent state, resetting epigenetic age to near-zero in the process. The Nobel Prize follows in 2012. This establishes that epigenetic age is not a fixed biological property — it can be reversed. However, full OSKM reprogramming destroys cellular identity: neurons, hepatocytes, and other differentiated cells lose their function when fully reprogrammed. The clinical application (restoring a tissue's function while reversing its epigenetic age) requires partial reprogramming that reverses the clock without completing the pluripotent transition. This is the theoretical boundary the claim straddles. The full reprogramming result is supportive evidence that epigenetic age reversal is physically possible; it is not itself a demonstration of the claim, which requires identity preservation.",
      vectors: ["supportive--epigenetic-age-reversal-possible-full-reprogramming-excludes-identity"],
      date: "2006–16",
    },
    {
      id: "IN-002",
      qualifiedEvent: "Ocampo et al. and cyclic reprogramming — partial reprogramming in mice",
      description: "Ocampo et al. (Belmonte lab, Salk Institute, 2016, Cell) demonstrate that cyclic short-term induction of OSKM in a progeria mouse model (expressing a premature aging phenotype) extends lifespan by approximately 30% and reduces aging hallmarks without inducing tumours or loss of cellular identity. The key finding is that intermittent, limited OSKM expression reverses some epigenetic aging marks without completing dedifferentiation. The result is in a disease model (progeria) rather than normal aging, and in mice rather than humans. Lu et al. (Harvard, 2020, Nature) demonstrate partial reprogramming in retinal ganglion cells restores vision in aged mice with optic nerve damage, reducing epigenetic age of the cells and recovering visual function. Both results provide strong preclinical evidence for partial epigenetic reprogramming without identity loss. Both are in mice. Neither addresses the clinical translation question.",
      vectors: ["supportive--partial-reprogramming-without-identity-loss-in-mice"],
      date: "2016–20",
    },
    {
      id: "IN-003",
      qualifiedEvent: "Altos Labs, Retro Biosciences, and partial reprogramming race — field industrialises",
      description: "Altos Labs, founded in 2022 with approximately $3 billion in funding (Bezos, Milner, and others), hires leading reprogramming researchers including Shinya Yamanaka as chairman. Retro Biosciences raises $180M with Sam Altman personally funding. The Belmonte and Sinclair labs publish additional partial reprogramming results in mice showing epigenetic age reduction across multiple tissues. The field transitions from academic curiosity to heavily capitalised research programme. No human trials of partial epigenetic reprogramming have been initiated as of 2024. The capital commitment constitutes the fifth occurrence of anticipatory institutional evidence in the corpus. The claim transitions from EMERGING to ESCALATING: the mechanism is established in multiple mouse models, the field is serious and well-funded, and the evidence trajectory toward human trials is credible, though the human clinical evidence gap is complete — no human data exists yet.",
      vectors: ["partial--strong-mouse-evidence-zero-human-clinical-evidence"],
      date: "2021–23",
    },
    {
      id: "IN-004",
      qualifiedEvent: "Clock validity debate — does epigenetic age reversal reflect genuine rejuvenation?",
      description: "As partial reprogramming evidence accumulates, a methodological dispute intensifies: do epigenetic clocks measure biological age in a way that makes \"reversal\" meaningful, or are they measuring something more limited? Morgan Levine, Jesse Poganik, and colleagues publish work showing that epigenetic clocks can be artificially reset by interventions (including caloric restriction and certain drugs) without clear organismal benefit, raising questions about whether clock reversal is a reliable surrogate for genuine rejuvenation. This is a BN-001-adjacent issue: \"biological age reversal\" may be a well-defined clock measurement without being a well-defined biological state. The dispute is not about whether OSKM reverses clock readings — it does — but about whether clock reversal constitutes the thing the claim asserts. This is the measurement-versus-reality question identified in the pre-production check, appearing in the evidence exactly as predicted.",
      vectors: ["contesting--clock-validity-as-rejuvenation-surrogate-disputed"],
      date: "2023–24",
    },
    {
      id: "IN-005",
      qualifiedEvent: "Partial reprogramming in non-human primates — bridging toward human evidence",
      description: "Multiple groups publish or present preliminary results of partial reprogramming in non-human primates (NHPs), primarily cynomolgus macaques. Results show epigenetic age reduction in peripheral blood cells and some tissue samples without obvious toxicity or identity loss at doses tested. NHP results are a meaningful intermediate step between mouse models and human trials — primates share substantially more biology with humans than rodents, and safety signals in NHPs are more predictive. However, NHP epigenetic clock measurements are themselves methodologically contested (the clocks were calibrated on human data), and the functional consequences of clock reversal in NHPs have not been assessed on timescales sufficient to evaluate healthspan effects. The record notes these as partial supportive evidence: the mechanism is extending toward human-relevant biology, but the human clinical evidence gap remains complete.",
      vectors: ["partial--nhp-evidence-human-clinical-gap-persists"],
      date: "2024",
    },
    {
      id: "IN-006",
      qualifiedEvent: "Life Biosciences (ER-100) — FDA IND clearance, first human partial-reprogramming trial",
      description: "Life Biosciences, founded on Harvard researcher David Sinclair's partial-reprogramming work, receives Investigational New Drug (IND) clearance from the FDA for ER-100, a partial OSK (Oct4/Sox2/Klf4, omitting c-Myc) reprogramming therapy targeting optic neuropathies. The company states the trial — the first-ever human trial of a partial epigenetic reprogramming therapy — will begin in Q1 2026. The preclinical pathway cited (rodent optic-nerve-injury recovery, followed by non-human-primate work) extends directly from the IN-002 and IN-005 evidence already in this record. This is the precise development AT-001 names as the resolution attractor: \"first human safety data\" at partial-reprogramming doses. The trial has not yet reported results as of this assessment — IND clearance and trial initiation are regulatory and operational milestones, not efficacy or safety data — so the human clinical evidence gap that AS-001 identified as complete is now closing rather than closed. The claim's central uncertainty (does partial reprogramming work, safely, in humans) remains unanswered, but for the first time it is being asked directly rather than only by extrapolation from animal models.",
      vectors: ["supportive--human-trial-cleared-not-yet-resulted"],
      date: "2026",
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
    }
  ],

  mechanisms: [
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Safety window for partial reprogramming in humans. OSKM expression is potently oncogenic at high doses or sustained expression. The therapeutic window — sufficient expression to reverse epigenetic aging marks without inducing dedifferentiation or tumour formation — has been demonstrated in mice but not characterised in humans or non-human primates at clinically relevant doses. The safety constrain",
    },
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "Biological age measurement validity. The claim requires that biological age be reversed. The primary measurement tool — epigenetic clocks — is contested as a surrogate for genuine rejuvenation. Clocks can be reset by interventions that may not produce functional benefit. If clock reversal and functional rejuvenation are dissociable — if the clock can be moved without changing organismal biology in",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "First human safety data and validated functional outcome biomarkers. Two developments would materially advance this record: first, Phase I human trials demonstrating safe OSKM induction at partial reprogramming doses with measurable epigenetic clock reversal and no adverse dedifferentiation signals; second, validated functional outcome biomarkers that correlate with clock reversal and demonstrate ",
    }
  ],

  lineage: {
    items: [
    { year: "2006", text: "Yamanaka reprogramming. Full OSKM reprogramming resets epigenetic age to near-zero. Cellular identity destroyed. The age reversal principle is established; the identity preservation constraint opens as the key unsolved problem." },
    { year: "2016", text: "Cyclic partial reprogramming in progeria mice. Ocampo et al. demonstrate lifespan extension without tumour formation through intermittent OSKM. The claim becomes experimentally tractable. Partial reprogramming as a therapeutic concept enters the field." },
    { year: "2019–21", text: "Epigenetic clock reversal demonstrated in multiple tissues. Lu et al. and others demonstrate partial reprogramming in specific tissues (retina, muscle) with functional benefit in aged mice. The claim's mechanistic basis is substantially established in rodent models." },
    { year: "2022–23", text: "Major capitalisation and NHP extension. Altos Labs, Retro Biosciences, and related companies raise billions. NHP studies begin. The field transitions from academic research to clinical development programme. Human trials remain absent." },
    { year: "2023–24", text: "Clock validity dispute matures. The measurement validity of epigenetic clocks as rejuvenation surrogates is formally contested. The field must resolve whether clock reversal is sufficient evidence for the claim or whether functional outcomes are required independently." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "INST-003 (Altos Labs capitalisation) constitutes the fifth occurrence of anticipatory institutional evidence. RN-004 was issued at three occurrences and noted that a fourth occurrence would warrant an update. A fifth occurrence in a new programme strengthens the case for RN-004 update further. Is a pattern now visible across three programmes?",
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
    // APPEND-ONLY. Newest first.
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