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
**Next recommended action — exactly one:** Decide the remaining live deployment SHA/MCP parity gate: obtain a verified runtime check or explicitly accept A01 with recorded verification exceptions. No source restoration is needed; 109 assessments are present on main and match the retrieved site. See the superseding correction at the end of [A01 report](reviews/A01-2026-11-15.md).
**Status:** FIP-A01 DECISION REQUIRED; restoration finding RETRACTED due to audit regex error. Corrected main 109 = retrieved public 109. Deployment fingerprint and live MCP parity not verified. No repair required or authorised.
**Dependencies:** M0 satisfied; current live and repository access must be checked during A01.
**Resume procedure:** Fetch this file from canonical main at start of a new conversation; check DECISIONS.md and latest receipt; report milestone, statuses, blockers and one next action. Do not treat a merge as deployed-site verification.
