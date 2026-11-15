# FIP-001 — Faultline Improvement Programme
Established: 2026-11-15. Source: Claude eight-step site audit and Step 8 red-team review (Google Doc: https://docs.google.com/document/d/1AHmt-Snc4RSHaDzbT41feH6Kdp7FnAdUrYf9nuk40lU/edit).
Authority: user authorised M0 Execution Control Setup on 2026-11-15; **not** implementation of subsequent repairs.

## Control hierarchy
This directory is **non-canonical programme administration**. It cannot alter FCIF, Frontier Records, institutional notes, or publication authority. This README is the single entrypoint. Read it and HANDOFF.md on resumption; then consult FINDINGS.csv, BACKLOG.md and DECISIONS.md. Never infer that a GitHub merge proves a public deployment.

## Programme structure
Eight audit steps are source references, not execution order. Six execution packages:
A — Record integrity and consistency;
B — Methodology and institutional trust;
C — Reader experience and navigation;
D — Discoverability and citation;
E — Positioning, audience and evidence coverage;
F — Sustainability and operational scale.
Four waves:
W1 validate findings and resolve record-integrity risks (A and selected B/D);
W2 reader comprehension and institutional trust (B/C);
W3 discoverability and external use (D/E);
W4 operational sustainability (E/F).
Wave boundaries are gates, not deadlines.

## Status vocabulary and governance
BACKLOG → IN REVIEW → DECISION REQUIRED → AUTHORISED → IMPLEMENTED → ACCEPTED.
Alternative exits: CLOSED (declined, superseded, already satisfied, or no action) and BLOCKED (named dependency). Every exit carries evidence and reason.
- BACKLOG does not imply a defect is confirmed.
- DECISION REQUIRED awaits explicit operator approval. M0 approval never automatically authorises A01 onward.
- IMPLEMENTED is not ACCEPTED: acceptance requires agreed checks, canonical-main verification where relevant, and deployed-site/MCP checks where relevant.
- CLOSED is a disposition outcome, **not** implementation success.
- Counts are reported separately: assessed / authorised / implemented / accepted / closed (no misleading single %).
- Methodological or constitutional changes require a separate, explicit decision and existing FCIF governance.
- Changes to other governed review programmes remain outside FIP unless separately authorised.

## Each item must have
ID; Claude finding(s); scope and evidence locators; baseline/assumption; decision (adopt/adapt/verify/decline/defer); dependencies; explicit approval; implementation references (files/PR/commit); validation; residual issues; outcome and precise next item.

## Handoff contract
At every completed/blocked/deferred item: issue a receipt with outcome, current wave/package, source finding IDs, facts tested, precise links/SHAs, tests and independent verification, caveats, user decision needed, and **one next recommended action**. Update BACKLOG, DECISIONS and HANDOFF on the same governed change. On a new chat, inspect canonical main first, not chat memory.

## M0 acceptance tests
1. Source eight steps and Step 8 corrections identified; Step 5 unrun clearly flagged.
2. Six packages/four waves defined.
3. Initial ten items have IDs, deps, status and successor.
4. Finding register covers F1/F2/F3/F4/F6 from the audit; Step 5 marked missing; duplicates mapped.
5. State vocabulary, approval boundaries and completion receipt specified.
6. HANDOFF records a single next action.
7. Files committed to main and independently readable.
