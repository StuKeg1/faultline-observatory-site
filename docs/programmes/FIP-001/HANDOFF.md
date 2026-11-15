# FIP-001 — Active hand-off
**As-of:** 2026-11-15
**Programme:** FIP-001 / Wave 1
**Current milestone:** M0 ACCEPTED; FIP-A01 ACCEPTED WITH EXCEPTIONS; FIP-A02 MERGED / PUBLIC SITE 4/4 VERIFIED / MCP PARITY DEFERRED (NOT ACCEPTED); **FIP-A03 STAGE-CORRECTION RECOMMENDATIONS APPROVED IN PRINCIPLE AND EXACT PROPOSALS PREPARED — IMPLEMENTATION DECISION REQUIRED**.
**Approval boundary:** Operator approved in principle current stage VS-05 → VS-04 for FR-AM-0001 and FR-AM-0005 and authorised preparation **only**. NO implementation, new canonical assessment, stage overlay adjustment, FCIF change, PR, merge or deployment authorised.

## A03 prepared handoff
**Authoritative proposal:** [A03 two-record append-only stage corrections](proposals/A03-TWO-RECORD-APPEND-ONLY-STAGE-CORRECTIONS-2026-11-15.md).
**Warrant:** [A03 bounded evidence review](reviews/A03-BOUNDED-CURRENT-STAGE-WARRANT-2026-11-15.md); [parent semantics audit](reviews/A03-2026-11-15.md).

- FR-AM-0001 current AS-005 (2026-09-08): COLLAPSED / VS-05. Verified on main blob `df5f00ae6ff645075f0f2afaa09c9bccc7459bd4`, current AS IDs 001–005 and M IDs 001–016. Available at preparation: **AS-006, M-017**. Proposed new stage-correction assessment and mutation explicitly recognise earlier operator-approved AS-004/005, retain COLLAPSED, negative independent replication (IN-002/003/007), and the *externally beam-driven* scope limit for IN-008/009.
- FR-AM-0005 current AS-004 (2026-10-30): COLLAPSED / VS-05. Verified on main blob `ded52d16d22a7089ff64fbd33c93e70a71a68ee7`, AS IDs 001–004 and M IDs 001–021. Available at preparation: **AS-005, M-022**. Proposed new stage-correction assessment and mutation explicitly recognise operator-approved AS-003/004, retain COLLAPSED and the LK-99 replication warrant; IN-007 Semenok negative trials have a differing alloy-precursor method and are *one linked team/report packet*, not universal falsification.
- Exact proposed assessment objects use `changeKind: "verification_stage_correction"`; proposed mutations use `field: "assessment_correction"`, matching ratified October reconciliation precedent FR-BT-0003 AS-004/M-009 and FR-AM-0004 AS-004/M-016. `2026-11-15` is a conditional proposed issue date, **not a backdate or issued assessment**; confirm true date at any later implementation.
- Protect **all existing** assessments, instances and source references, mutations, claims, Pressure States and July `verificationStageReviews.js` overlays, including historically approved stage changes. Only append one new assessment and prepend one new mutation **per record** if separately authorised. No other record or FCIF mutation.
- Current corpus **has NOT been changed**. A03 disposition: **PROPOSAL PREPARED — IMPLEMENTATION DECISION REQUIRED**, not IMPLEMENTED or ACCEPTED.

## A02 deferred
PR #254 merged as `8b624e6af97822515ec3f98a44e70c2226d6a7d5`; full CI passed, Pages produced merge-SHA deployment and all four public historical date views were verified in connected browser. **Operator deliberately deferred live MCP deployed-source and full-record date/recordedDate parity**. Thus A02 is **not accepted**; do not treat A03 MCP validation as automatically closing A02. [A02 record](receipts/A02-2026-11-15-POSTMERGE-BLOCKED.md).

## Exactly one next recommended action
Seek **separate operator implementation authorisation** for the two prepared A03 stage corrections (initially isolated branch + tests + diff only, no merge or deployment). If approved, re-read canonical main, confirm exact assessment and mutation IDs, issue date and potential concurrent work, then implement according to the protected proposal. Merge/deploy remain further independent decisions. If not approved, leave current VS-05 and record the deferred disposition.

Next programme package after A03 is **A04 — append-only/correction-history wording**; its authorisation remains separate.
Resume from README, BACKLOG, DECISIONS, this HANDOFF, the A03 evidence review and exact proposal on main.
