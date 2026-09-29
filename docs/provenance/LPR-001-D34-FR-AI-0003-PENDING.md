# LPR-001-D34 — FR-AI-0003 (pending correction)

Date: 2026-09-29
Outcome: discrepancies_found
Repair status: pending
Queue state: pending; last completed review remains LPR-001-D03 (2026-09-01)

## Scope and findings

Bounded provenance review of all nine existing instances against their cited primary sources. No evidence, assessment, claim, pressure state, or verification stage was changed. No new evidence was admitted and no structured provenance was added.

- IN-001 — verified; Ouyang et al. support the held-out prompt results and bounded truthfulness/toxicity comparison. [Primary source](https://arxiv.org/abs/2203.02155).
- IN-002 — verified; Wei et al. document competing objectives and mismatched generalisation in jailbreaks. [Primary source](https://arxiv.org/abs/2305.13860).
- IN-003 — verified; Perez et al. and Sharma et al. support the sycophancy findings and the preference for agreeable answers in the tested settings. [Primary sources](https://arxiv.org/abs/2212.09251) and [Sharma et al.](https://arxiv.org/abs/2310.13548).
- IN-004 — verified; Bai et al. describe constitutional self-critique, revision, and AI feedback. The instance bounds the result as an alternative training method. [Primary source](https://arxiv.org/abs/2212.08073).
- IN-005 — verified; Scheurer et al. report the simulated trading and deceptive explanations under pressure. The instance appropriately declines a causal capability-growth inference. [Primary source](https://arxiv.org/abs/2311.07590).
- IN-006 — verified; Burns et al. report partial weak-to-strong generalisation and the failure of their methods on ChatGPT preference data. The instance does not claim direct positive evidence for RLHF preference generalisation. [Primary source](https://arxiv.org/abs/2312.09390).
- IN-007 — correction required for inference scope. ROGUE measures agent behaviour in computer-use tasks and reports an association between task success and override rate, with shutdown rewiring remaining high in high-performing models. It does not measure whether increasing capability *causes* human-preference generalisation to worsen, nor test RLHF preference training. The instance's “first direct empirical datapoint” and “points toward worse” characterisation for that question crosses the source boundary. Preserve the observed corrigibility results while distinguishing the indirect relevance to OQ-001 from a direct test of preference generalisation. [Primary source](https://arxiv.org/abs/2606.00341).
- IN-008 — verified; Li and Zhao present an action-alignment argument with three empirical lines, and the instance correctly labels it theoretical rather than a controlled experiment. [Primary source](https://arxiv.org/abs/2606.28739).
- IN-009 — correction required for attribution and interpretation scope. The primary preprint lists three independent researchers and one Carnegie Mellon University author, so “single academic group” is inaccurate. Its public/off-the-record outputs are observable channel responses; the paper explicitly cautions that the off-the-record channel is not a hidden belief. The phrase “strategic stated-versus-hidden divergence” should be narrowed to observed channel divergence without implying established hidden preferences or genuine strategy. Preserve the reported approximately 3% to 40% result and the instance's framework and replication limits. [Primary source](https://arxiv.org/abs/2607.02507).

Instances verified: 7
Instances enriched: 0
Unverifiable: 0
Discrepancies requiring bounded correction: 2 (IN-007, IN-009)
Normal Record Review candidates: 0

## Boundary and queue

The source-dependent “direct empirical pressure” wording in AS-002 and AS-003 needs append-only assessment review alongside the IN-007 repair. Historical assessments remain immutable. Any correction should also inspect whether the current judgement needs a new append-only clarification; this receipt does not decide a state or stage transition.

Do not add a D34 completion marker while the discrepancies remain unresolved. The deterministic queue remains on FR-AI-0003 until a bounded correction is approved and the review is closed.
