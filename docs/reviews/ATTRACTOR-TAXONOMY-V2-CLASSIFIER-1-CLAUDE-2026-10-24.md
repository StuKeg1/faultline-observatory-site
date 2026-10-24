# ATTRACTOR Taxonomy Governance Review v2 — Classifier output (Claude)

**Classifier:** Anthropic, Claude family (configured model `claude-opus-5-5`; serving model may differ)
**Date:** 2026-10-24
**Pre-registration commit:** `0b529b162c12b91d142af72d2f85326afe5472bb`
**Frozen corpus:** `94dfc8ba721eca5bc71def192c4273f3b6d84266`
**Bundle read at commit:** `25e2a7c0b5bb1fd260c71df901ad4e509a83716d` (Parts 1, 2, 3A, 3B1, 3B2, 3B3, 4A, 4B, 4C — 30 objects)
**Inputs used:** only the pre-registration and the materialised bundle above. No other record content, prior classifications or expected outcomes were seen.

## Object-level decisions

| # | Object | Admission | Subtype | Rationale (registered rules only) |
|---|---|---|---|---|
| 1 | FR-AI-0001 AT-001 | REJECT | N/A | A3 fail; Excl. 2/4. No evidence form or material boundary separating "genuine generalisation" from "higher-order pattern-matching"; text itself calls this "the open research question" (§5: indistinguishable from an OQ → fail closed). INST-005 unresolvable; cannot supply specificity. |
| 2 | FR-AI-0002 AT-001 | ADMIT | P | A1–A3: target (autonomous multi-step task completion), evidence form (demonstration in commercially deployed settings), boundary (autonomous extended sequences vs supervised single-turn). A4: "scope boundary moves" is not a State/Stage/verdict rule. Positive direction. |
| 3 | FR-AI-0003 AT-001 | ADMIT | P | Route = direct evidence that a specified preference-training regime retains preferred behaviour under defined shifts with explicit criteria and comparators; IN-006/OQ-002/BN-001 bound what does not qualify. No automatic outcome. Positive direction. |
| 4 | FR-AI-0004 AT-001 | ADMIT | P | Target (performance on unseen tasks with contamination excluded), evidence form (reproducible contamination analysis on auditable corpus), boundary (explicit task-novelty criteria; openness/family labels excluded). Explicitly "not automatic confirmation". Function is to remove RM-001's contestation of positive results; not framed as outcome-open → P. |
| 5 | FR-AI-0005 AT-001 | ADMIT | P | Capability demonstration meeting declared AGI criteria plus attribution to scaled current LLM architectures; different-path results excluded. Engagement is recognisable even though adjudication criterion is unsettled (A3 governs recognisability, not adjudication). Positive. |
| 6 | FR-AI-0006 AT-001 | ADMIT | D | Frontier-scale circuit identification; text explicitly states both outcomes ("confirm … supporting" / "qualitatively different … contesting"). |
| 7 | FR-AI-0007 AT-001 | ADMIT | P | Fully specified demonstration (autonomous problem identification → hypotheses → experiments → independently verified novel correct results); IN-009 bounds what falls short. Positive. |
| 8 | FR-AI-0008 AT-001 | ADMIT | P | Replicated prospective multi-site performance across distinct imaging domains, populations, systems and workflows with independent replication. "Requires" does not make occurrence automatic. Positive. |
| 9 | FR-AI-0009 AT-001 | ADMIT | P | Replication of the IN-002 pattern across substantially different tasks, environments and embodiments; IN-002 bounds the current baseline. Directly engages transfer under material difference. Positive. |
| 10 | FR-AM-0003 AT-001 | ADMIT | D | Controlled Hubbard-type simulation to "distinguish among proposed microscopic explanations"; explicitly "a discriminating computational capability rather than a predetermined theoretical outcome". |
| 11 | FR-AM-0004 AT-001 | REJECT | N/A | A4 fail (Excl. 8): "The specific event that would transition this record from ESCALATING toward RESOLVING" assigns a Pressure State transition to occurrence of the event; at minimum presumptive transition language → fails closed. "Threshold 1/2/3" not resolvable from the bundle. |
| 12 | FR-AM-0005 AT-001 | REJECT | N/A | A4 fail (Excl. 8): "A future candidate would reopen the record when independent laboratories reproduce…" makes occurrence sufficient for reopening; R requires reopening to remain a governed action. Ambiguous at best → fails closed. |
| 13 | FR-AM-0006 AT-001 | REJECT | N/A | A4 fail (Excl. 8): same presumptive transition wording as #11 ("would transition this record from ESCALATING toward RESOLVING"). |
| 14 | FR-AM-0007 AT-001 | ADMIT | P | Unaffiliated replication with published protocol and independent preparation. "Justify movement beyond VS-03" is directional language the premises declare non-automatic. Positive. |
| 15 | FR-AM-0007 AT-002 | ADMIT | P | Retention through room-temperature handling and cooling cycles with preserved enhanced properties engages ambient stabilisation. Route is defined as a positive occurrence; "would distinguish" describes its significance, not an outcome-open test. |
| 16 | FR-AM-0008 AT-001 | ADMIT | P | Same-state unaffiliated replication of transition-linked TRSB with discriminating controls. "Would strengthen" = directional, non-automatic. Route defined as successful reproduction → P. |
| 17 | FR-BT-0001 AT-001 | REJECT | N/A | A2 fail; Excl. 9; §5 definitional prerequisite. Regulatory indication and surrogate-endpoint validation would resolve BN-001 and make trials tractable, but do not themselves engage whether senolytics extend healthy lifespan. |
| 18 | FR-BT-0002 AT-001 | ADMIT | P | Human trial outcomes for a specified partial-reprogramming regimen (safety, clock reversal, no dedifferentiation) plus functional-biomarker validation; IN-007 bounds dosing as insufficient. Positive. |
| 19 | FR-BT-0003 AT-001 | ADMIT | P | Independently validated pre-symptomatic panel with calibrated individual risks, incremental discrimination beyond clinical predictors and a decision boundary; cohort hazard ratios excluded. Positive. |
| 20 | FR-BT-0004 AT-001 | ADMIT | D | Adequately powered randomised comparison "showing whether" screening reduces mortality without disproportionate overdiagnosis — explicitly outcome-open. Material bearing on pre-clinical detection is asserted rather than explained (close call on A1/A2). "Capable of moving" is not automatic. |
| 21 | FR-BT-0005 AT-001 | ADMIT | P | Prospective trials of the defined engineering + targeted immunosuppression combination reproducing months-long function with reduced rejection/infection burden. Positive. |
| 22 | FR-BT-0006 AT-001 | ADMIT | P | Fully specified multi-generational autonomous reproduction without serial reconstruction. Positive. |
| 23 | FR-BT-0007 AT-001 | ADMIT | P | Replicated sustained independent communication across centres with stated burden/safety/operation boundaries. Positive. |
| 24 | FR-QE-0001 AT-001 | ADMIT | R | Reopening function supplied by AS-002 ("can reopen only through evidence showing that the 2019 comparator was already unsound"); bounded route (source-grounded reconstruction of contemporaneous comparator); successor evidence (later speedups, Willow) explicitly excluded; reopening not stated as automatic. |
| 25 | FR-QE-0003 AT-001 | REJECT | N/A | A4 fail (Excl. 8): "if confirmed at increasing code distances, would constitute resolution of the claim as stated" makes occurrence sufficient for the controlling outcome. INST-005 unresolvable (not needed for the A4 determination). |
| 26 | FR-QE-0004 AT-001 | REJECT | N/A | A4 fail (Excl. 8): "the specific experimental milestone that would move the claim from RESOLVING toward a fully confirmed state" — presumptive state transition on occurrence → fails closed. |
| 27 | FR-QE-0005 AT-001 | ADMIT | P | End-to-end fault-tolerant factorisation at a commercially relevant key size with transparent classical comparator and resource accounting; resource-estimate reductions excluded. "Decisive" is evidential, not institutional. |
| 28 | FR-QE-0006 AT-001 | ADMIT | P | End-to-end fault-tolerant useful computation beyond best classical method under transparent contemporaneous comparison; benchmark scores/qubit counts excluded. |
| 29 | FR-QE-0007 AT-001 | ADMIT | P | Practically relevant computation with durable advantage over best contemporaneous classical method under transparent comparison. |
| 30 | FR-QE-0008 AT-001 | ADMIT | P | Sustained suppression across an informative range with correlated-error, runtime and resource-overhead evidence; "a resolution review would require" preserves governed decision. Route is the positive occurrence of sustained suppression; the "test whether" clause describes one component measurement. |

## Required reports (§10)

- **REJECT calls:** 7 / 30 — FR-AI-0001, FR-AM-0004, FR-AM-0005, FR-AM-0006, FR-BT-0001, FR-QE-0003, FR-QE-0004
- **ADMIT calls:** 23 / 30
- **Subtype among admitted:** P = 19, D = 3 (FR-AI-0006, FR-AM-0003, FR-BT-0004), R = 1 (FR-QE-0001)
- **SUBTYPE-UNCLEAR calls:** 0
- **Objects where the ATTRACTOR/OQ boundary required material judgement beyond the registered rule:** 0. (FR-AI-0001 and FR-BT-0001 sit at the boundary but were resolved by §5's fail-closed and definitional-prerequisite clauses as written.)
- **Unresolvable references encountered:** INST-005 (FR-AI-0001); INST-005 (FR-QE-0003). FR-AI-0002's AT-001 self-reference was supplied.
- **Fixed exclusion (§4, FR-AM-0002 OQ-004):** remains excluded under Exclusion 1; the registered criteria do not require its admission.

## Close calls (disclosed, not recoded)

- FR-AM-0005 (REJECT): "would reopen the record" read as making reopening automatic; a looser reading would give ADMIT/R.
- FR-AM-0004, FR-AM-0006, FR-QE-0004 (REJECT): "transition/move … toward" a named Pressure State read as presumptive transition language under the fail-closed premise, despite "toward" being listed as directional.
- FR-BT-0004 (ADMIT/D): material bearing of mortality evidence on pre-clinical detection is asserted, not explained.
- FR-AI-0004, FR-AM-0007 AT-002, FR-QE-0008 (P): contain discriminating language but the route as encoded is a positive occurrence.
