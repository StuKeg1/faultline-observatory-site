# FIP-001 — Active hand-off
**As-of:** 2026-11-15
**Programme:** FIP-001 / Wave 1
**Current milestone:** M0 ACCEPTED; FIP-A01 DECISION REQUIRED (evidence report filed)
**Authority:** M0 authorised by the user and completed. No subsequent implementation has been authorised.
**Acceptance receipt:** [M0-2026-11-15](receipts/M0-2026-11-15.md)
**Implementation trace:** [PR #253](https://github.com/StuKeg1/faultline-observatory-site/pull/253), merged as `1b4089590a31a1157f0a1e715c67196d89e41261`. Readback verified five control files on main. Receipt added on main in `307da6c7b44a2e3612d8373a98da338dd419bf3c`.
**Control files:** README.md (start here); FINDINGS.csv; BACKLOG.md; DECISIONS.md; HANDOFF.md.
**Audit baseline:** Claude eight steps + Step 8 corrections; Step 5 not executed. All unverified findings are candidate issues.
**Progress:** milestone M0 1 accepted; FIP-A01 evidence review completed (1 reviewed), 0 repair tasks authorised / 0 implemented / 0 accepted / 0 closed. No repairs.
**Next recommended action — exactly one:** Operator decision whether to authorise a **four-assessment source-integrity restoration scope** (FR-AI-0001 AS-003; FR-AI-0002 AS-003; FR-QE-0008 AS-004; FR-BT-0002 AS-005), including provenance recovery and test design, with NO code mutation, merge or deployment until separate approval. See [A01 evidence report](reviews/A01-2026-11-15.md).
**Status:** FIP-A01 DECISION REQUIRED; bounded diagnostics completed to available-access limit; implementation not authorised. Confirmed four source-missing assessments with surviving assessment_issued mutations. Live public 109 vs main 105; live SHA and MCP parity unverified.
**Dependencies:** M0 satisfied; current live and repository access must be checked during A01.
**Resume procedure:** Fetch this file from canonical main at start of a new conversation; check DECISIONS.md and latest receipt; report milestone, statuses, blockers and one next action. Do not treat a merge as deployed-site verification.
