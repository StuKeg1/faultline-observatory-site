# LPR-001-D33 — FR-AI-0001 (pending correction)

Date: 2026-09-29
Outcome: discrepancies_found
Repair status: pending
Queue state: pending; last completed review remains LPR-001-D02 (2026-08-31)

## Scope and findings

Bounded provenance review of all six existing instances. No evidence, assessment, claim, pressure state, or verification stage was changed. No new evidence was admitted and no structured provenance was added.

- IN-001 — verified; Wei et al. support the reported PaLM 540B GSM8K result (17.9% standard prompting; 58.1% chain-of-thought prompting). Existing structured source retained. [Primary source](https://arxiv.org/abs/2201.11903).
- IN-002 — verified; Shi et al. support the GSM-IC distractor design, performance degradation, and tested mitigations. The description appropriately bounds the result to distractibility under this distribution shift. Existing structured source retained. [Primary source](https://arxiv.org/abs/2302.00093).
- IN-003 — unverifiable and correction required. The instance has no source, and the specific attribution to “researchers at MIT and elsewhere,” the evaluations described, and the claimed fraction of problems solved could not be tied to an identifiable publication. This is the same deliberate attribution gap recorded by D02; no source was inferred or added. A bounded correction should either identify the intended evaluations and support each claim or narrow/remove the unsupported details.
- IN-004 — verified; Dziri et al. support the three studied compositional task families, the computation-graph framing, and the bounded empirical/theoretical conclusions. Existing structured source retained. [Primary source](https://arxiv.org/abs/2305.18654).
- IN-005 — verified as a historical account; ARC Prize reports the December 2024 o3-preview scores of 75.7% on the Semi-Private set at the public leaderboard compute limit and 87.5% with 1,024 samples at roughly 172 times the compute. The description identifies the set and compute conditions. Existing structured source retained. [ARC Prize source](https://arcprize.org/blog/oai-o3-pub-breakthrough).
- IN-006 — correction required for source characterization and scope. The five cited sources support findings about chain-of-thought faithfulness, but only Lindsey et al. is mechanistic interpretability; Chen, Arcuschin, Lanham, and Turpin are evaluations or analyses of reasoning-trace faithfulness. They inform the faithfulness dimension but do not directly determine whether o1/o3-class reasoning is a distinct mechanism or scaled pattern matching. Preserve the evidence and sources while narrowing this characterization through a bounded correction.

Instances verified: 4
Instances enriched: 0
Unverifiable: 1 (IN-003)
Discrepancies requiring bounded correction: 2 (IN-003, IN-006)
Normal Record Review candidates: 1

## Separate evidence candidate

OpenAI's July 2025 report says its general-purpose reasoning model scored 35/42 on the IMO problems, at gold-medal level. This is a possible new supportive evidence instance relevant to the record. It was not used to assess legacy provenance and was not admitted through LPR-001. Hold it for a separately authorized Normal Record Review. [OpenAI announcement](https://openai.com/index/first-proof-submissions/).

## Boundary and queue

Do not add a D33 completion marker while IN-003 remains unresolved. No assessment or evidence-state change is authorized by this receipt. The deterministic queue remains on FR-AI-0001 until a bounded correction is approved and the review is closed.