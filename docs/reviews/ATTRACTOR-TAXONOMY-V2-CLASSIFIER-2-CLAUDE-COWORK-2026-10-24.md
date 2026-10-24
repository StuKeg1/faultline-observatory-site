# ATTRACTOR Taxonomy Governance Review v2 — Classifier output

**Classifier:** Anthropic Claude (Cowork session). Configured model ID `claude-opus-5-5`; the serving model can differ from the configured one and cannot be independently verified from inside the session. Provider/family: Anthropic / Claude.
**Date:** 2026-10-24
**Pre-registration commit:** `0b529b162c12b91d142af72d2f85326afe5472bb`
**Frozen corpus:** `94dfc8ba721eca5bc71def192c4273f3b6d84266`
**Bundle read from commit:** `25e2a7c0b5bb1fd260c71df901ad4e509a83716d` (9 files, docs/reviews/ATTRACTOR-TAXONOMY-V2-*-2026-10-24.md)
**Execution instruction:** given by the operator in chat on 2026-10-24 ("Run as clean classifier now").

## Independence and input disclosures

- This session did not draft the criteria or the pre-registration, and it is not a v1 classifier.
- Inputs used: the nine bundle files only, which contain the pre-registration, propositions, ATTRACTOR objects and materialised references. No other record content, v1 outputs, audits, lineage or expected classifications were read.
- The operator's message held only the nine part links and their titles. The session's account context lists the operator as Faultline's founder; no memory files were opened.
- Part 1's header reads "BUNDLE STATUS: PREPARATION — INCOMPLETE UNTIL FINAL FREEZE COMMIT". The classification ran against the bundle exactly as it stood at `25e2a7c`. The operator should confirm that this is the frozen bundle (§11).
- SHA-256 of the input files as read:
  - CLASSIFIER-BUNDLE (Part 1) `6fbafb3e9cadec7aca2d43cada13528c918cf77c57edd4b0a1c6b39a860a9458`
  - PART-2-AM `5aba7f5ac935a193670e2af04b43bf1fdabdc15cdf34abe3b8bbab7939c2a8a8`
  - PART-3A-BT `7740da356a510e51e4de817795bdde7e6431e66beef565fe641a45bf280803f6`
  - PART-3B1-BT `78286f2370447a3858241583b77de4cf0e77cef22935ffc856b571751fe2b11a`
  - PART-3B2-BT `d8af6d6b1bac86f4430e4e205806303a4e4f5c34642371f770476257f4950fc1`
  - PART-3B3-BT `f10917dbfaf9bc4666e57e2353261fd728588afe95e5080a3aa6a3382c2e9678`
  - PART-4A-QE `0cf437d8339d6ccb18b5c6034cded990dfa810493de45790f607c2a0b37556b2`
  - PART-4B-QE `17bf0c8f502af2592cd642b735db9a81b1c98f4fa632dab5445375aaf0adc13c`
  - PART-4C-QE `600ea038346860596fc48acb9e652df38967f93c607764dfab9cd16f421eb0df`

## Decisions

| # | Object | Admission | Subtype | Failed gate / exclusion |
|---|---|---|---|---|
| 1 | FR-AI-0001 AT-001 | REJECT | N/A | A3; Excl. 2, 4; INST-005 unresolvable |
| 2 | FR-AI-0002 AT-001 | ADMIT | P | — |
| 3 | FR-AI-0003 AT-001 | ADMIT | P | — |
| 4 | FR-AI-0004 AT-001 | ADMIT | D | — |
| 5 | FR-AI-0005 AT-001 | ADMIT | P | — |
| 6 | FR-AI-0006 AT-001 | ADMIT | D | — |
| 7 | FR-AI-0007 AT-001 | ADMIT | P | — |
| 8 | FR-AI-0008 AT-001 | ADMIT | P | — |
| 9 | FR-AI-0009 AT-001 | ADMIT | P | — |
| 10 | FR-AM-0003 AT-001 | ADMIT | D | — |
| 11 | FR-AM-0004 AT-001 | REJECT | N/A | A4; Excl. 8 |
| 12 | FR-AM-0005 AT-001 | REJECT | N/A | A4; Excl. 8 |
| 13 | FR-AM-0006 AT-001 | REJECT | N/A | A4; Excl. 8 |
| 14 | FR-AM-0007 AT-001 | ADMIT | P | — |
| 15 | FR-AM-0007 AT-002 | ADMIT | P | — |
| 16 | FR-AM-0008 AT-001 | ADMIT | P | — |
| 17 | FR-BT-0001 AT-001 | REJECT | N/A | A2; Excl. 9; §5 definitional prerequisite |
| 18 | FR-BT-0002 AT-001 | ADMIT | P | — |
| 19 | FR-BT-0003 AT-001 | ADMIT | P | — |
| 20 | FR-BT-0004 AT-001 | ADMIT | D | — |
| 21 | FR-BT-0005 AT-001 | ADMIT | P | — |
| 22 | FR-BT-0006 AT-001 | ADMIT | P | — |
| 23 | FR-BT-0007 AT-001 | ADMIT | P | — |
| 24 | FR-QE-0001 AT-001 | ADMIT | R | — |
| 25 | FR-QE-0003 AT-001 | REJECT | N/A | A4; Excl. 8 |
| 26 | FR-QE-0004 AT-001 | REJECT | N/A | A4; Excl. 8 |
| 27 | FR-QE-0005 AT-001 | ADMIT | P | — |
| 28 | FR-QE-0006 AT-001 | ADMIT | P | — |
| 29 | FR-QE-0007 AT-001 | ADMIT | P | — |
| 30 | FR-QE-0008 AT-001 | ADMIT | D | — |

## Short rationales

1. **FR-AI-0001**: The object states a target (genuine generalisation vs higher-order pattern matching) but calls it "the open research question" and gives no evidence form or material boundary. INST-005 is UNRESOLVABLE and is the only possible source of that missing information, so A3 fails closed. Primarily a generic unanswered question / under-specified research direction (Excl. 2, 4). §5: it cannot be told apart from an unresolved question, so it fails closed.
2. **FR-AI-0002**: Target: reliable autonomous multi-step knowledge work. Evidence form: demonstration in commercially deployed settings. Boundary: extended autonomous task sequences, not supervised single-turn use. "Scope boundary moves" is not a State/Stage/verdict/reopening/review output, so A4 passes. Positive direction → P.
3. **FR-AI-0003**: Direct evaluation of a specified preference-training regime under defined distribution shifts, with explicit criteria and comparators. Directly engages the proposition; it is evidence-generating rather than merely definitional. The positive framing ("retains human-preferred behaviour") → P.
4. **FR-AI-0004**: Reproducible contamination analysis on an auditable corpus plus explicit task-novelty criteria. Its material bearing (via RM-001) is whether gains are on genuinely unseen tasks. It is not solely a definitional prerequisite. It is framed as an evaluative procedure that sorts genuinely-unseen results from contaminated ones and expressly "not automatic confirmation" → D (functional precedence 2).
5. **FR-AI-0005**: Capability demonstration against stated AGI criteria, attributable to scaling current LLM architectures, with other paths excluded. This engagement is recognisable even though adjudication is left open (A3 governs recognisability). "Evidence favouring resolution" → P.
6. **FR-AI-0006**: Explicitly outcome-open: it "would either confirm … (supporting the claim) or identify qualitatively different computational strategies (contesting it)". Target, evidence form (causal circuit verification) and frontier-scale boundary are all stated → D.
7. **FR-AI-0007**: A fully specified demonstration chain: autonomous problem identification, hypotheses, experiments, and independently verified novel and correct results, with no human-specified problem space. Positive → P.
8. **FR-AI-0008**: Replicated prospective multi-site performance across domains, populations, acquisition systems and workflows, with independent replication. This engages accuracy on defined imaging tasks. "Deployment-depth question" is not an explicit canonical identifier, and the object is legible without it → P.
9. **FR-AI-0009**: Replication of the IN-002 pattern across substantially different tasks, environments and embodiments matches the proposition's material-difference condition. IN-002 sets the boundary: the current evidence stays within one platform family and constrained manipulation. The cost framing does not remove the evidential bearing → P.
10. **FR-AM-0003**: Controlled simulations "distinguish among proposed microscopic explanations"; "a discriminating computational capability rather than a predetermined theoretical outcome" → D.
11. **FR-AM-0004**: "The specific event that would transition this record from ESCALATING toward RESOLVING". The event itself is said to effect a Pressure State transition. That is presumptive transition language, so A4 fails closed (Excl. 8). It is otherwise specific.
12. **FR-AM-0005**: "A future candidate would reopen the record when independent laboratories reproduce …". The condition is made sufficient for a reopening action, which ATTRACTOR has no standing authority to mandate. A4 fails, or at best is ambiguous and fails closed (Excl. 8). R cannot rescue it: R requires reopening to remain a governed action, and no bounded prior disposition is supplied in the permitted bundle.
13. **FR-AM-0006**: Same transition wording as #11 ("would transition this record from ESCALATING toward RESOLVING") → A4 fails closed (Excl. 8).
14. **FR-AM-0007 AT-001**: Unaffiliated replication using a published protocol and independent material preparation. "Justify movement beyond VS-03" is listed directional language and leaves a governed Stage decision necessary → A4 passes. P.
15. **FR-AM-0007 AT-002**: A retained state that stays stable at ambient pressure through handling and cooling cycles. Any qualifying instance is also an instance of ambient-pressure stabilisation, so it materially engages the proposition. Positive → P. (Judgement noted below.)
16. **FR-AM-0008**: Unaffiliated same-state replication with discriminating controls. "Discriminating" attaches to the controls; the route itself is framed as reproduction → P.
17. **FR-BT-0001**: A regulatory indication for aging and a validated biomarker panel. Both are enabling or measurement milestones that would make senolytic trials tractable; neither is itself evidence about senolytics extending healthy lifespan. A2 fails (enabling activity); Excl. 9 (regulatory/scientific milestone). §5: resolving BN-001's threshold is a definitional prerequisite.
18. **FR-BT-0002**: Human trial outcomes for a specified partial-reprogramming regimen (safety, clock reversal, no dedifferentiation), plus validation that clock reduction predicts function. This engages both reversal and identity preservation. The regimen boundary is explicit (OSK ≠ OSKM) → P.
19. **FR-BT-0003**: An independently validated pre-symptomatic panel with calibrated individual risks for specified decline pathways, added discrimination over clinical predictors across settings and assays, and a decision boundary. It explicitly excludes another organ-age estimate or hazard ratio → P.
20. **FR-BT-0004**: An adequately powered randomised comparison "showing whether" screening reduces mortality without disproportionate overdiagnosis. Outcome-open framing → D. "Capable of moving this record … beyond FRAGMENTING" states capability, not sufficiency, so A4 passes. (A1 judgement noted below.)
21. **FR-BT-0005**: Prospective trials reproducing months-long function with reduced rejection and infection burden. This engages sustained function at acceptable burden → P.
22. **FR-BT-0006**: A fully specified autonomous multi-generational reproduction demonstration that excludes serial reconstruction → P.
23. **FR-BT-0007**: Replicated sustained independent communication across centres, with stated operational and safety boundaries → P.
24. **FR-QE-0001**: AS-002 (materialised) is a bounded prior disposition, and the object names "the reopening route specified by AS-002". Bounded evidential route: evidence that the 2019 comparator was already unsound, via source-grounded contemporaneous reconstruction. Successor results (later speedups, Willow) are explicitly excluded. Reopening is not stated as automatic. Functional precedence 1 → R. (Boundary judgement noted below.)
25. **FR-QE-0003**: "Would constitute resolution of the claim as stated" and "the claim trajectory moves toward RESOLVING". This makes occurrence sufficient to declare the proposition resolved, so A4 fails (Excl. 8). INST-005 is UNRESOLVABLE but not decisive here.
26. **FR-QE-0004**: "The specific experimental milestone that would move the claim from RESOLVING toward a fully confirmed state". Presumptive transition language → A4 fails closed (Excl. 8).
27. **FR-QE-0005**: An end-to-end fault-tolerant factorisation at a commercially relevant key size, with a transparent classical comparator and resource accounting. Intermediate milestones and resource estimates are excluded → P.
28. **FR-QE-0006**: First end-to-end fault-tolerant useful computation with durable classical separation under a transparent contemporaneous comparison. A benchmark score or qubit count alone is excluded → P.
29. **FR-QE-0007**: A durable advantage on a practically relevant problem over the best contemporaneous classical method. Both components are required, and the object is not restricted to chemistry → P.
30. **FR-QE-0008**: Larger-distance measurements "directly test whether suppression persists beyond the current range". A resolution review is retained as a separate governed act. Explicit test framing → D (functional precedence 2).

## Required counts

- **REJECT calls:** 7 / 30 (#1, 11, 12, 13, 17, 25, 26)
- **SUBTYPE-UNCLEAR calls:** 0 / 30
- **Subtype distribution among ADMIT (23):** P 17, D 5, R 1
- **Objects where the ATTRACTOR/OQ boundary required material judgement beyond the registered rule:** 1
  - **FR-QE-0001.** The reopening condition is evidence that the 2019 comparator was *already unsound*, which points toward the negative direction. §5 bullet 2 and Excl. 1 address negative resolution conditions only with reference to P and D. The rules do not say whether a negative-leaning bounded *reopening* route stays admissible as R. ADMIT R was chosen because R takes precedence and because successful occurrence yields reopening eligibility, not falsification. This step goes beyond the registered text.
- **Unresolvable references encountered:** INST-005 (FR-AI-0001: necessary, fails closed); INST-005 (FR-QE-0003: not decisive; rejected on A4 independently).
- **Fixed-exclusion check (§4 / §12.1 D):** FR-AM-0002 OQ-004 is not in the bundle. Under the registered rule, a negative-only convergence route of repeated high-powered null results is not P and not D, so it stays excluded. Nothing in this application of the rules would require admitting it.

## Other judgement calls (not OQ-boundary)

- **#11, 12, 13, 25, 26 (A4).** All five were rejected under the premise "ambiguous default or presumptive transition language fails closed". The line drawn is between wording that says the event *transitions / moves / reopens / constitutes resolution of* the record, and wording that says the event *could*, *is capable of*, or would *justify* a change (#14, #20).
- **#15 (A1/A2).** The object frames its significance as "technological". It was admitted because every qualifying instance is also an instance of the governed proposition.
- **#20 (A1).** The target is mortality benefit, while the proposition is detection reliability. It was admitted because overdiagnosis and clinically meaningful early detection bear on "reliably detect". A stricter reading could fail it on A1.
- **#4 (D vs P).** No explicit "either/or" wording. D rests on the object framing itself as an evaluative analysis that is "not automatic confirmation".

## Statement

This output was produced without access to any other classifier's output and without comparison. It should be committed verbatim before any comparison (§11).
