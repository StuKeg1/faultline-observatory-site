# FIP-001 — Active hand-off
**As-of:** 2026-11-15
**Programme:** FIP-001 / Wave 1
**Current milestone:** M0 ACCEPTED; FIP-A01 ACCEPTED WITH EXCEPTIONS; FIP-A02 MERGED / FOUR LIVE PAGES VERIFIED / MCP PARITY DEFERRED (not accepted); **FIP-A03 EVIDENCE REVIEW COMPLETE — DECISION REQUIRED**.
**Authority:** Operator requested an A03 evidence-only review of VS-04/VS-05 and explicitly deferred the A02 live MCP parity check. No scientific-record, assessment, FCIF, application-code, or production change authorised.

## A03 findings and decision
Read [A03 evidence review](reviews/A03-2026-11-15.md) in full before proceeding.
- Primary ratified authority: July 22 Semantic-Authority Ruling and July 23 Legacy Assignment Review (linked in A03). Verification Stage is evidence depth, independent from Pressure State; VS-04 includes qualifying adverse/null direct reproduction and VS-05 requires sustained/applied operation of the **claimed capability**.
- Canonical current stage census across 32 records: VS-02 9, VS-03 15, VS-04 5, VS-05 3, VS-01 0.
- **A03-01 MATERIAL:** FR-AM-0001 AS-005 and FR-AM-0005 AS-004 continue to carry COLLAPSED / VS-05 despite historical review overlays that corrected earlier VS-05 assessments to VS-04 and current notes lacking an operational warrant for the full claims. This is a current-stage **warrant-review candidate**, not a ratified downgrade. Recommend bounded two-record evidence-only review.
- **A03-02:** FR-AI-0008 VS-05 already has VSC-001 awaiting operator decision; avoid duplicate general review or automatic VS-03/04 fallback.
- **A03-03:** FR-QE-0001 counter-performance VS-04 is specifically ratified under claim-level adversarial reproduction; Claude's general semantic-defect claim is CLOSED as overbroad.
- **A03-04:** Other VS-04 cases scoped; no blanket correction. FR-BT-0004 single-arm PATHFINDER 2 is not an independently replicated randomised mortality result.
- **A03-05:** Public reading guide `src/pages/Stubs.jsx` equates VS-05 with “being tested in real-world conditions”, weaker than ratified applied-operation boundary. Recommend **separate copy proposal only**, no implementation.
- A03 disposition **DECISION REQUIRED**, not authorised, implemented or accepted.

## A02 residual
[PR #254](https://github.com/StuKeg1/faultline-observatory-site/pull/254) merged as `8b624e6af97822515ec3f98a44e70c2226d6a7d5`. GitHub CI #930 passed 221 tests and build/MCP typecheck; Cloudflare Pages production deployed exact merge SHA; all four public AS-001 uncertain-date displays were independently read in connected browser and PASSED. **Live MCP deployed Git SHA and full-record qualified-date/`recordedDate` parity remain DEFERRED by operator, NOT VERIFIED; A02 is not accepted.** [A02 evidence receipt](receipts/A02-2026-11-15-POSTMERGE-BLOCKED.md). No premature acceptance.

## Resume / next action
**Next recommended action — exactly one:** Operator decides whether to authorise an **evidence-only current-stage warrant review** for FR-AM-0001 and FR-AM-0005 (later assessments only, full evidence locators), with keep/VS-04/other alternatives and no automatic patch. If authorised, produce proposal and ask separate implementation decision.
After this, A04 copy/history review is the next backlog item; public reader-copy finding A03-05 may be coordinated with it without merging authorities.
Always read FIP-001 README, BACKLOG, DECISIONS, current HANDOFF and A03 review on canonical main. A03 report is noncanonical administration, not a stage ruling or scientific fact amendment.
