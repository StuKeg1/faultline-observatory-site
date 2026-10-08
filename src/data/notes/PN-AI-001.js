/** PN-AI-001 v3 — descriptive refresh authorised 8 October 2026.
 * Evidence basis and revision checks: docs/reviews/PN-AI-001-REFRESH-2026-10-08.md.
 * The June v2 object is preserved unchanged and rendered as historical text. */
import { PN_AI_001_V2 } from "./history/PN-AI-001-v2.js";

export const PN_AI_001 = {
  "id": "PN-AI-001",
  "programme": "PROG-AI",
  "title": "What the AI Corpus Shows",
  "version": 3,
  "date": "2026-10-08",
  "evidenceCutoff": "2026-10-08",
  "status": "published",
  "summary": "Across nine AI Frontier Records, bounded capability and selected deployment successes coexist with unresolved questions about generalisation, supervision, measurement, mechanism and transfer. This revision reflects the corrected corpus at 8 October 2026; it describes the differences between those boundaries without asserting a shared cause.",
  "body": [
    {
      "id": "B-001",
      "heading": "Purpose and evidence cutoff",
      "text": "This revision describes the nine Frontier Records in PROG-AI as recorded on 8 October 2026. It draws on corrected evidence instances and current assessments at that cutoff, distinguishing new results from provenance corrections and preserved historical judgments. It is a descriptive programme synthesis, not a new assessment of any claim or a survey of AI research outside the admitted corpus. Evidence dates, model versions, evaluation settings and source limitations remain those of the underlying records."
    },
    {
      "id": "B-002",
      "heading": "What changed since June",
      "text": "Version 3 adds the world-model record and incorporates later evidence on reasoning-trace faithfulness, agent reliability, scientific judgment, cross-scale mechanisms and prospective clinical deployment. It removes unsupported source interpretations inherited by the June overview, including the alleged late-2024 AGI target migration and a human-performance comparison not established by SWE-bench. It separates GNoME discovery from A-Lab synthesis and narrows the inference from loss scaling to unseen-task performance. The June version is preserved below as a historical snapshot; its superseded statements are not reaffirmed by this revision."
    },
    {
      "id": "B-003",
      "heading": "Record by record — reasoning",
      "text": "FR-AI-0001 — LLM Multi-Step Reasoning. ESCALATING / VS-03. Chain-of-thought prompting and o3-preview provide strong benchmark evidence, but result interpretation depends on the tested task, training exposure and compute conditions. The reported 87.5% ARC-AGI-1 result used a high-compute configuration and is not an efficiency-neutral or contamination-free measure. The later OpenAI-reported IMO gold-level result adds bounded competition-mathematics evidence without independently validating the model score or establishing broad generalisation. Reasoning-trace studies add a separate boundary: a fluent account of reasoning need not faithfully describe the computation producing the answer. Generalisation and trace faithfulness must therefore be evaluated separately; neither a benchmark score nor an unfaithful trace settles the mechanism question. <a href=\"/the-record/fr-ai-0001/\">FR-AI-0001</a>: AS-002; IN-001, IN-002, IN-004–IN-007."
    },
    {
      "id": "B-004",
      "heading": "Knowledge-work utility",
      "text": "FR-AI-0002 — LLM Knowledge-Work Utility. ESCALATING / VS-02. Bounded professional tasks and a customer-support deployment provide direct evidence of useful AI assistance. The final customer-support study reports a 15% average increase in issues resolved per hour; professional-writing and coding experiments measure different tasks and outcomes, so they should not be compressed into one general productivity range. Legal deployment establishes adoption with required human review, not a measured economic return. At the agentic boundary, SWE-bench supplies task-specific software-repair evidence without a human baseline; ORCA-bench tests incident diagnosis, and OSWorld-Pro exposes process errors in computer-use workflows. The latter benchmarks do not directly measure workplace productivity or supervision costs. Economically valuable assistance and dependable extended delegation remain distinct evidentiary questions. <a href=\"/the-record/fr-ai-0002/\">FR-AI-0002</a>: AS-002; IN-001–IN-008."
    },
    {
      "id": "B-005",
      "heading": "Preference generalisation",
      "text": "FR-AI-0003 — RLHF Preference Generalisation. FRAGMENTING / VS-03. InstructGPT establishes evaluator preference on held-out prompts from the evaluated prompt distribution, not robust preference transfer across distributions. Jailbreak and sycophancy studies document bounded failure modes. Constitutional AI is evidence about an alternative alignment method, while weak-to-strong supervision is a research direction whose cited methods did not succeed on ChatGPT preference data. Later computer-use control violations and public/off-the-record output divergence raise concerns about action authority and evaluation channels. As AS-004 clarifies, those studies do not directly test RLHF preference generalisation or establish that increased capability causes it to worsen; generated off-the-record text is not privileged access to hidden preferences. The evidence remains heterogeneous, rather than one causal account of alignment failure. <a href=\"/the-record/fr-ai-0003/\">FR-AI-0003</a>: AS-004; IN-001–IN-009."
    },
    {
      "id": "B-006",
      "heading": "Scaling and task novelty",
      "text": "FR-AI-0004 — Scaling Laws. FRAGMENTING / VS-03. Kaplan et al. establish predictable improvement in held-out language-model loss. GPT-3 and Chinchilla document broad evaluated task gains, but these results do not independently establish that task types, examples or structural analogues were absent from pretraining. The emergence dispute also depends on measurement: Schaeffer et al. show metric-dependent apparent discontinuities in particular settings, not universal continuity. Contamination is a documented evidential risk, not proof that the cited scaling gains were caused by overlap. Test-time compute supplies a genuine additional scaling axis, but lies partly outside a claim explicitly framed around training scale. Task novelty, measurement and claim scope remain distinct unresolved boundaries. <a href=\"/the-record/fr-ai-0004/\">FR-AI-0004</a>: AS-003; IN-001–IN-007; IN-002 correction recorded 30 September 2026."
    },
    {
      "id": "B-007",
      "heading": "The AGI path prediction",
      "text": "FR-AI-0005 — AGI Through Scaling. FRAGMENTING / VS-03. GPT-3 and GPT-4 support substantial capability gains without establishing that scaling current LLM architectures will reach AGI. Reasoning-focused post-training, inference-time compute and constraints on public human-generated text show a broadening development recipe and unresolved path definition; they demonstrate neither a hard scaling ceiling nor abandonment of LLM-based approaches. The cited OpenAI Charter definition predates the alleged 2024–25 shift, so the supposed target-migration event has been withdrawn from the current evidential basis. General ambiguity about AGI remains relevant, but cannot be turned into evidence that this specific goalpost shift occurred. The 8 October consistency repair aligns current mechanisms, lineage and open questions with this corrected basis; dissolution remains a conditional governance question, not a finding. <a href=\"/the-record/fr-ai-0005/\">FR-AI-0005</a>: AS-003; corrected IN-001–IN-007."
    },
    {
      "id": "B-008",
      "heading": "Mechanism continuity across scale",
      "text": "FR-AI-0006 — Scaling Mechanism Coherence. FRAGMENTING / VS-03. Induction heads supply strong causal evidence in small attention-only models, with larger-model attribution more correlational and extrapolative. Toy-model superposition and small-model grokking inform possible mechanisms without directly establishing continuity across model sizes. More recent evidence pulls in both directions: scale-associated symbolic specialisation and representation-geometry changes coexist with recurrent affect-reception representations across model variants. The latter continuity result concerns a capability already present at smaller scale, and comparisons also vary model family and training regime. The recent geometry and affect studies are unreplicated preprints. Recurrence of a component, change in internal organisation and emergence of a capability are different observations; no agreed abstraction level yet settles what counts as the same mechanism. <a href=\"/the-record/fr-ai-0006/\">FR-AI-0006</a>: AS-005; IN-001–IN-004, IN-006–IN-008; IN-005 excluded as unresolved provenance debt."
    },
    {
      "id": "B-009",
      "heading": "Scientific discovery and judgment",
      "text": "FR-AI-0007 — Autonomous AI Scientific Discovery. FRAGMENTING / VS-03. GNoME supports computational materials discovery, while the separate A-Lab study supports autonomous synthesis of human-selected targets. The 736 independently experimentally verified GNoME structures are not 736 materials subsequently synthesised by one autonomous laboratory; A-Lab realised 36 of 57 targets. FunSearch provides bounded human-framed program-search results. Later open-ended research case studies expose failures of scientific judgment despite substantial autonomous engineering, while the Station preprint reports research-direction choice and novel mathematical results within a human-defined shared goal, with independent validation incomplete. ScholarCatalyst adds a literature-selection boundary, not an end-to-end discovery test. The unresolved autonomy question therefore extends beyond who supplies the problem: it includes evidential prioritisation, useful literature selection, novelty validation and recognition of meaningful progress. <a href=\"/the-record/fr-ai-0007/\">FR-AI-0007</a>: AS-003 and current AS-004; corrected IN-001–IN-004, IN-006–IN-009; ScholarCatalyst in AS-004; IN-005 excluded."
    },
    {
      "id": "B-010",
      "heading": "Medical imaging — deployed success and transfer",
      "text": "FR-AI-0008 — AI Medical Imaging Diagnosis. FRAGMENTING / VS-03. Defined research evaluations demonstrate strong imaging performance, while regulatory authorisation supplies device-specific clinical-use evidence rather than a blanket proof of prospective accuracy. Cross-site studies document real transfer failures. Against that background, the completed MASAI randomised screening trial materially strengthens the positive deployment evidence: AI-supported mammography met its interval-cancer non-inferiority criterion, increased sensitivity and maintained specificity; earlier analyses also reported reduced reading workload. This is successful prospective performance in a defined Swedish screening workflow, not autonomous replacement of specialist diagnosis or validation across imaging as a whole. The open question is now how reliably that success transfers across populations, acquisition systems, implementations and imaging domains. The overview must recognise the demonstrated deployment success alongside that remaining boundary. <a href=\"/the-record/fr-ai-0008/\">FR-AI-0008</a>: AS-003; IN-001–IN-004 and IN-006; IN-005 excluded as unsupported."
    },
    {
      "id": "B-011",
      "heading": "World models — prediction and physical transfer",
      "text": "FR-AI-0009 — World Models. ESCALATING / VS-02. DreamerV3 demonstrates broad benchmark control, and V-JEPA 2-AC demonstrates bounded zero-shot robot planning in changed laboratory environments within a constrained manipulation setting. Interactive generated worlds are a different achievement from physically reliable planning. MiraBench and What-If World expose action-fidelity and intervention failures; RoboWM-Bench tests executability in simulation, while CaliBench tests stochastic calibration rather than robot transfer. Game2Policy adds a task-specific game-to-real result using purpose-built VR data, extracted affordance cues and real-robot adaptation. The announced Worldmodeldata–Mila study has no comparative transfer outcome recorded and remains prospective. Useful transfer is demonstrated in selected settings, but visual realism, causal response, outcome calibration and cross-embodiment reliability cannot be treated as interchangeable evidence. <a href=\"/the-record/fr-ai-0009/\">FR-AI-0009</a>: AS-002; IN-001–IN-009; prospective collaboration discussed in AS-002."
    },
    {
      "id": "B-012",
      "heading": "Revalidated programme patterns",
      "text": "Across the nine records, bounded positive results coexist with unresolved conditions for a broader claim. This is a recurring evidentiary structure, not a finding that every system fails outside its original setting or that all nine records share one mechanism. Some evidence already includes deployment or environment transfer: customer-support assistance, MASAI screening and selected world-model control results. The unresolved boundary differs by record — training exposure, task distribution, supervision, action authority, task novelty, path definition, mechanism identity, scientific judgment, or breadth of physical and clinical transfer. Improvements within one boundary do not automatically close another."
    },
    {
      "id": "B-013",
      "heading": "Definitions, proxies and evidence type",
      "text": "Definition-sensitive questions remain visible in scaling, the AGI path prediction and mechanism continuity. However, these records also contain empirical disputes; they should not be described as purely lexical problems. The AGI example retains a path-definition question without the withdrawn target-migration event. Proxy validity is another recurring concern: benchmark performance versus broader reasoning, generated text versus preferences, retrieval versus discovery, and visual realism versus executable or calibrated physical prediction. Medical imaging supplies a particularly useful distinction: MASAI provides patient-relevant prospective evidence in one workflow, while broader transfer remains open. These are descriptive parallels, not a new taxonomy or an assertion of a shared cause."
    },
    {
      "id": "B-014",
      "heading": "Institutional position at the cutoff",
      "text": "All nine records remain open. Three are ESCALATING: FR-AI-0001, FR-AI-0002 and FR-AI-0009. Six are FRAGMENTING: FR-AI-0003 through FR-AI-0008. Seven have a current VS-03 assessment; FR-AI-0002 and FR-AI-0009 remain VS-02. These labels do not replace the evidence summaries: a retained pressure state can coexist with stronger positive evidence, narrower warrant or a corrected interpretation. The medical-imaging record illustrates that distinction. No record state or verification stage is changed by this Programme Note."
    },
    {
      "id": "B-015",
      "heading": "Limits of this revision",
      "text": "This synthesis uses the admitted corpus and does not add new scientific evidence or independently re-audit the underlying papers. Corrected evidence and current assessment warrants take precedence over restored legacy prose or superseded judgments. Unresolved legacy provenance debt in the mechanism, discovery and imaging records is not promoted into support. FR-AI-0005's separate consistency repair was completed on 8 October without changing its evidence or AS-003 judgment. This note does not infer why the observed patterns recur, predict AGI or assign programme-wide confidence; causal interpretation belongs in a separately governed Landscape Essay. The June version remains available as history, including statements corrected in this revision."
    }
  ],
  previousVersions: [PN_AI_001_V2],
};
