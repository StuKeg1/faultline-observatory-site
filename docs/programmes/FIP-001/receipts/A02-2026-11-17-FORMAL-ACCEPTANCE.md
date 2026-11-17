# FIP-A02 — Formal acceptance with non-blocking editorial follow-ups
Date: 2026-11-17
Status: **ACCEPTED WITH NON-BLOCKING EDITORIAL FOLLOW-UPS**
Authority: Operator expressly accepted this disposition in ChatGPT after independent review of Claude's reported live production MCP verification.

## Accepted scope and verification basis
- Historical baseline date-provenance qualification only, for **FR-QE-0003, FR-QE-0008, FR-AI-0001 and FR-QE-0005 / AS-001**; LAD-001 display overlays previously merged in [PR #254](https://github.com/StuKeg1/faultline-observatory-site/pull/254), commit `8b624e6af97822515ec3f98a44e70c2226d6a7d5`. Stored canonical assessment dates were not rewritten.
- **Public site:** four-of-four fresh production record histories passed, as documented at the end of the [historical blocked receipt](A02-2026-11-15-POSTMERGE-BLOCKED.md). State Warrant and historical assessment dates are qualified as `date uncertain (legacy)`; current assessment chronology and decisions remain unchanged.
- **Live MCP (independent third-party test, reported by Claude on 2026-11-17):** separate JSON-RPC Streamable HTTP `tools/call` requests to `faultline_read_record` for each record, after successful `initialize` and `tools/list`. Four HTTP/2 200 responses reportedly contained `assessments[0].date = "date uncertain (legacy)"` alongside `assessments[0].recordedDate = "2024-01-15"`. All four reported `currentAssessment` and historical assessment counts were preserved.
- MCP observed current assessment identifiers: QE-0003 AS-002 (2026-06-28); QE-0008 AS-005 (2026-10-20); AI-0001 AS-003 (2026-10-12); QE-0005 AS-004 (2026-09-15).
- Claude reported Cloudflare response `cf-ray` request identifiers: QE-0003 `a5c060c58a9c6742-ATL`; QE-0008 `a5c060c99b36bfcf-ATL`; AI-0001 `a5c060cc7f6f676e-ATL`; QE-0005 `a5c060ce7a155a41-ATL`. Raw HTTP bodies and headers were reported stored in Claude's temporary scratchpad, **not archived or independently inspected within this repository**. Reported SHA-256 hashes were truncated for three responses, so they are not independently reproducible here.
- MCP `faultline_about` reportedly returned `deploymentCommit: 76dcabf9bbd78ffd3ea70d5ce88344c181ea495f`, matching the historical PR #256 merge in main. This is a **service-reported provenance identifier, not independently attested live Worker binary provenance**; the operator accepts it as sufficient for this bounded gate.
- Current GitHub `src/data/verificationStageReviews.js` retains the four qualified-date overlays and `applyVerificationStageReview` maps the original date into `recordedDate`. `src/data/mcpProjection.js` uses the governed assessment history. `src/data/mcpProjection.test.js` specifically asserts the four expected full-record outputs and unchanged current summaries.

## Decision
**ACCEPTED WITH NON-BLOCKING EDITORIAL FOLLOW-UPS.** The previously blocked *live MCP parity* gate is closed by the operator's explicit acceptance of the reported independent protocol evidence, together with public production page and canonical-source checks. Preserve the earlier [blocked receipt](A02-2026-11-15-POSTMERGE-BLOCKED.md) as historical evidence; this newer receipt supersedes its *current status*, not its underlying observations.

## Editorial follow-ups — not parity blockers and not authorised repairs
- **A02-E01:** Four `historicalEffectiveDate.note` strings still end with preparation-era wording `implementation subject to separate approval` although approval and implementation subsequently occurred. Review a **prospective, linked clarification** rather than silently rewriting historical provenance text.
- **A02-E02:** FR-QE-0003 mutation `M-022` free-text reference identifies AS-001 with `2024-01-15`; the issue-date interpretation is unverified. Evaluate whether a linked prospective clarification improves legibility without rewriting the original mutation entry.
- Other `2024-01-15` occurrences in `claim.openedDate`, `openQuestions[].raisedDate` and `mutationLog[].date` are separate date semantics, **not** automatic A02 corrections.

## Boundaries
This acceptance does **not** authorise edits to canonical records, MCP, FCIF, assessment/date overlays, site copy, E01/E02 wording, or public retroactive chronology; it does not assert that the temporary raw Claude HTTP capture has been archived. Documentation-control reconciliation is staged on a separate branch, not automatically merged into production main.
