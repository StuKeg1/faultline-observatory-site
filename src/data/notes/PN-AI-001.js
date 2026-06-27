/**
 * PN-AI-001 — Programme Note: PROG-AI
 * Type: Programme Note (Layer 3, ADR-001)
 * Status: APPROVED — 2026-06-26
 *
 * Re-authored: 2026-06-26, directly from the live FR-AI-0001 through
 * FR-AI-0008 records (fetched fresh from raw.githubusercontent.com,
 * main branch). The originally approved PN-AI-001 (2026-06-24) could not
 * be recovered — see Institutional Learning Register, IL-001, third
 * instance — and the recovery path was formally retired in favour of
 * re-authoring from the corpus.
 *
 * Audited 2026-06-26 (constitutional discipline 9.5/10, corpus fidelity
 * 9.5/10, interpretive-drift risk: low). Two wording refinements applied
 * per audit (B-012, B-015); summary field aligned to match at filing time.
 *
 * Approval decision, recorded verbatim (operator, 2026-06-26):
 *   - Approved as the canonical Programme Note for PROG-AI.
 *   - Approved as a re-authored document derived directly from the live
 *     Frontier Record corpus following the unrecoverable loss of the
 *     earlier draft.
 *   - Authority derives from fidelity to the corpus, not continuity of
 *     wording with the lost version.
 * This is an institutional precedent, not just an approval note: when
 * publication wording is lost but the evidential corpus remains intact,
 * the institution may re-author the publication from the corpus rather
 * than treating the publication itself as the primary authority. See
 * Institutional Learning Register, IL-008.
 *
 * Pending: commit to src/data/programmeNotes/PN-AI-001.js and addition to
 * the PROGRAMME_NOTES registry (RELEASE-014, Part B). This file is the
 * canonical filed record in the interim — see IL-001's third instance for
 * why filing immediately, rather than leaving this only in conversation,
 * matters.
 */

export const PN_AI_001 = {
  id: "PN-AI-001",
  programme: "PROG-AI",
  title: "What the AI Corpus Shows",
  version: 2,
  date: "2026-06-26",
  status: "published",
  summary:
    "Across all eight Frontier Records in PROG-AI, demonstrated AI capability " +
    "repeatedly meets uncertainty at the point where a claim is extended beyond " +
    "the specific conditions under which that capability was established. This " +
    "Note documents where that pattern appears, how it varies across the eight " +
    "records, and identifies related structural relationships already " +
    "recognised within the programme. It does not ask why.",

  body: [
    {
      id: "B-001",
      heading: "Purpose",
      text:
        "This Note describes what the eight Frontier Records in PROG-AI currently " +
        "show. It does not interpret significance, propose mechanism, or assess " +
        "whether the pattern it documents is good or bad news for any claim. " +
        "Interpretation is the work of a Landscape Essay, not a Programme Note. " +
        "What follows is a record of evidence as it currently stands across the " +
        "eight records, read directly from the live corpus on 2026-06-26.",
    },
    {
      id: "B-002",
      heading: "Record by Record",
      text:
        "FR-AI-0001 (LLM Multi-Step Reasoning, ESCALATING). Capability demonstrated: " +
        "chain-of-thought prompting and the o1/o3 model family produce strong " +
        "performance on reasoning benchmarks, including 87.5% on ARC-AGI, a " +
        "benchmark built specifically to resist memorisation. Uncertainty extends " +
        "to: whether this performance reflects generalised reasoning or pattern-" +
        "matching at a larger scale — the record's own open question (OQ-002) " +
        "states this as the operative question for the next assessment cycle.",
    },
    {
      id: "B-003",
      heading: null,
      text:
        "FR-AI-0002 (LLM Knowledge-Work Utility, ESCALATING). Capability " +
        "demonstrated: controlled experiments and a large-scale natural " +
        "experiment show 14–55% productivity gains across coding, professional " +
        "writing, and customer service, under supervised, single-turn use. " +
        "Uncertainty extends to: autonomous, multi-step, low-supervision tasks, " +
        "where compounding errors and agentic failures are documented (SWE-bench " +
        "performance well below human developers on complex multi-file work).",
    },
    {
      id: "B-004",
      heading: null,
      text:
        "FR-AI-0003 (RLHF Preference Generalisation, FRAGMENTING). Capability " +
        "demonstrated: InstructGPT's preference training generalises across " +
        "prompt types not represented in training. Uncertainty extends to: " +
        "deployment conditions outside that training distribution — adversarial " +
        "prompting (jailbreaks), novel social contexts (sycophancy), and " +
        "capability increases that outpace the preference calibration performed " +
        "at a smaller scale. Three distinct failure modes are documented, none " +
        "shown to be reducible to the others.",
    },
    {
      id: "B-005",
      heading: null,
      text:
        "FR-AI-0004 (Scaling Laws, FRAGMENTING). Capability demonstrated: scaling " +
        "model size and data improves performance on tasks not specifically " +
        "trained for, documented across six orders of magnitude (Kaplan et al.) " +
        "and in GPT-3's few-shot performance. Uncertainty extends to: what " +
        "counts as \"previously unseen\" once benchmark contamination and " +
        "metric-dependent emergence are taken into account — the record's own " +
        "open question (OQ-001) names this as the bottleneck that experimental " +
        "evidence alone cannot close.",
    },
    {
      id: "B-006",
      heading: null,
      text:
        "FR-AI-0005 (AGI Through Scaling, FRAGMENTING). Capability demonstrated: " +
        "continued capability gains from scaling, asserted by leading researchers " +
        "as evidence for a path to general intelligence. Uncertainty extends to: " +
        "the path itself, once o1/o3's departure from pure scaling and a 2024 " +
        "redefinition of \"AGI\" toward economic task performance are taken into " +
        "account. In this record, both the path and the destination terms of " +
        "the original claim are shown moving under pressure.",
    },
    {
      id: "B-007",
      heading: null,
      text:
        "FR-AI-0006 (Scaling Mechanism Coherence, FRAGMENTING). Capability " +
        "demonstrated: induction-head circuits are shown causally responsible " +
        "for in-context learning across a range of model sizes — direct " +
        "mechanistic continuity evidence. Uncertainty extends to: whether this " +
        "continuity holds once superposition, discontinuous-looking emergent " +
        "abilities, and changes in representation geometry at larger scale are " +
        "taken into account. The record's open question (OQ-001) notes that no " +
        "agreed level of abstraction exists at which \"same mechanism\" can be " +
        "evaluated.",
    },
    {
      id: "B-008",
      heading: null,
      text:
        "FR-AI-0007 (Autonomous AI Scientific Discovery, FRAGMENTING). Capability " +
        "demonstrated: GNoME and FunSearch both produce novel results, " +
        "independently verified as correct (736 GNoME materials experimentally " +
        "synthesised; FunSearch's cap-set result verified by the mathematics " +
        "community). Uncertainty extends to: the autonomy component specifically " +
        "— in both cases the research question was set by humans, and the " +
        "record's open question (OQ-001) asks whether autonomous problem-" +
        "solving within a human-framed domain satisfies the claim, or whether " +
        "autonomous problem identification is required.",
    },
    {
      id: "B-009",
      heading: null,
      text:
        "FR-AI-0008 (AI Medical Imaging Diagnosis, FRAGMENTING at depth; " +
        "ESCALATING at surface, per the record's own assessment). Capability " +
        "demonstrated: specialist-level accuracy on curated research datasets, " +
        "confirmed across multiple imaging domains and by FDA clearance of over " +
        "500 devices. Uncertainty extends to: real-world clinical deployment, " +
        "where documented distribution shift (site-specific spurious " +
        "correlations, equipment and demographic variation) produces accuracy " +
        "degradation not present in the original research-dataset evidence.",
    },
    {
      id: "B-010",
      heading: "Pattern Summary",
      text:
        "All eight records exhibit the same structure: a capability is " +
        "demonstrated under a defined set of conditions, and uncertainty " +
        "appears specifically at the point where the claim is extended beyond " +
        "those conditions. The conditions being extended beyond differ by " +
        "record — training distribution (FR-AI-0001, FR-AI-0003), supervision " +
        "level (FR-AI-0002), benchmark contamination boundaries (FR-AI-0004), " +
        "the stated path and destination of a prediction (FR-AI-0005), scale " +
        "and abstraction level (FR-AI-0006), human-framed problem boundaries " +
        "(FR-AI-0007), and research-to-deployment setting (FR-AI-0008) — but " +
        "the structure recurs across all eight: capability established under " +
        "condition A; uncertainty when the claim extends to condition B. The " +
        "pattern does not depend on whether the underlying capability is " +
        "itself confirmed or disputed.",
    },
    {
      id: "B-011",
      heading: "Current Institutional State",
      text:
        "Of the eight records, two carry an ESCALATING pressure state " +
        "(FR-AI-0001, FR-AI-0002) and six carry FRAGMENTING (FR-AI-0003 through " +
        "FR-AI-0008). No record in PROG-AI currently carries a resolved, " +
        "collapsed, or otherwise closed state. Every record in the programme " +
        "remains open.",
    },
    {
      id: "B-012",
      heading: null,
      text:
        "Several Frontier Records already identify related structural " +
        "relationships within the programme, independent of this Note. " +
        "FR-AI-0008's own open question (OQ-002) states explicitly: " +
        "\"the deployment generalisation gap is a depth question structurally " +
        "different from foundational uncertainty.\" That observation was raised " +
        "by the record's own assessor at the time the record was opened, before " +
        "this Note existed in any form. FR-AI-0004's open question (OQ-003) " +
        "separately notes that the programme \"contains a substrate inversion\": " +
        "the record assessing the foundational scaling mechanism (FR-AI-0004) " +
        "carries a FRAGMENTING state while several records assessing downstream " +
        "consequences of that mechanism (FR-AI-0001, FR-AI-0002) carry " +
        "ESCALATING states.",
    },
    {
      id: "B-013",
      heading: null,
      text:
        "A second, narrower pattern recurs across three records. FR-AI-0004 " +
        "(\"previously unseen\"), FR-AI-0005 (\"AGI\"), and FR-AI-0006 (\"same " +
        "mechanism\") each carry a bottleneck the record itself characterises " +
        "as lexical or definitional rather than evidential — a term central to " +
        "the claim lacks an agreed operational definition, and the record notes " +
        "that further experimental evidence alone cannot close the bottleneck. " +
        "FR-AI-0006's own open question (OQ-002) observes this directly: three " +
        "records in the programme share a bottleneck of the same type.",
    },
    {
      id: "B-014",
      heading: null,
      text:
        "A third, separate pattern appears in two records. FR-AI-0007 and " +
        "FR-AI-0008 each carry a bottleneck the record characterises as a " +
        "measurement-validity problem — a case where the available measurement " +
        "tool (novelty assessment against an incomplete literature, in " +
        "FR-AI-0007; research-dataset accuracy as a proxy for clinical " +
        "deployment accuracy, in FR-AI-0008) may not reliably track the thing " +
        "the claim actually asserts. FR-AI-0008's record cites this type by its " +
        "Observatory-wide designation, RN-005.",
    },
    {
      id: "B-015",
      heading: "What This Note Does Not Address",
      text:
        "This Note does not assess why demonstrated capability and extension " +
        "uncertainty recur together across PROG-AI, or whether the pattern " +
        "reflects something general about current AI architectures or about " +
        "the way AI claims happen to be stated. This Note records that the " +
        "pattern exists. Questions about why it exists or what follows from " +
        "it belong to a Landscape Essay.",
    },
  ],
};
