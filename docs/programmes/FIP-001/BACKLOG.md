# FIP-001 — Execution backlog
Snapshot: 2026-11-16; initial priority, not a promise of fixed dates.
**Status**: M0 ACCEPTED; FIP-A01 ACCEPTED WITH EXCEPTIONS; FIP-A02 MERGED / PUBLIC 4/4 VERIFIED / HISTORICAL MCP DATE PARITY DEFERRED (NOT ACCEPTED); **FIP-A03 ACCEPTED** (stage correction and administrative annotations, independent live MCP + public-page verification reported and reconciled); remaining items BACKLOG.
This backlog is sequenced for work, not a license for automated implementation.

| ID | Package/Wave | Item | Audit sources | Dependency | Gate / successor |
|---|---|---|---|---|---|
| FIP-A01 | A/W1 · ACCEPTED WITH EXCEPTIONS | Reconcile canonical corpus with rendered site and MCP | F1-01 F2-15 F4-09 | M0 accepted | Verify discrepancies; propose bounded repairs; FIP-A02 |
| FIP-A02 | A/W1 · MERGED — MCP PARITY DEFERRED | Historical baseline dating provenance audit | F1-04 F3-01 | A01 baseline | Decide if corrections needed; FIP-A03 |
| FIP-A03 | A/W1 · **ACCEPTED** | Evaluate disputed VS-04/VS-05 semantics and correct proposal-stage wording | F3-07 | A01 + FCIF authority | PR #255 stage corrections, PR #256 W-01/W-02 source-preserving annotations and W-03 PR note complete; CI #968/#977 pass, Cloudflare Pages deployment verified; Claude's 2026-11-16 independent production MCP and fresh Chromium test passed both records, preserved history, summary/full/search parity and 3 clarification placements per page. [Superseding acceptance addendum](receipts/A03-2026-11-16-LIVE-CHECK-GATE.md); FIP-A04 next |
| FIP-A04 | A/W1 | Clarify append-only and correction-history wording | F3-03 | A02 provenance semantics | FIP-A05 |
| FIP-A05 | A/W1 | Recount legacy audit corrections by severity and publishability | F3-02 | A01 inventory | FIP-D01 |
| FIP-D01 | D/W1 | Complete Claude's missing Step 5 SEO/GEO/technical audit | STEP-5 F1-10 F6-07 | M0; independent of A02–A05 | FIP-B01 |
| FIP-B01 | B/W2 | Consolidate governance funding independence and AI-role disclosure | F3-04 F4-01 F6-03 | Verify extant FM-001/about | FIP-B02 |
| FIP-B02 | B/W2 | Corrections and right-of-response procedure | F3-14 F4-02 F4-08 | B01 | FIP-C01 |
| FIP-C01 | C/W2 | Newcomer and accessibility tests against current site | F2-02 F2-03 F2-10 | A01 verified; current browser views | FIP-D02 |
| FIP-D02 | D/W3 | Citation format prototype | F2-12 F4-07 | A01 stability and D01 findings | Review Wave 3 expansion |

Each item starts BACKLOG. Upon starting a review move to IN REVIEW; do not mark AUTHORISED without explicit operator approval. Store accepted completion receipts in `receipts/` and maintain handoff before proceeding.
Wave 3 and 4 additional items (selection transparency, coverage, competitors, funding, scaling) remain CANDIDATES in FINDINGS.csv and must be scoped after the initial ten; no silent expansion.

## Required item-specific tests
- A01: sample >= 10 fields across directory, record detail, programme, trajectories, and MCP; compare all to same canonical commit/data snapshot; log full URLs and hashes; distinguish stale deploys from data logic.
- A02: identify all suspect dates and original date semantics; no retroactive rewriting without FCIF authority.
- A03: read current stage rules and original decisions; record interpretation, not invented stage migration.
- A04: copy audit of exact public language; historical integrity protected.
- A05: canonical recount with classification and denominator; do not publish unsupported rate.
- D01: robots/sitemaps/metadata/canonicals/rendering/schema/crawler evidence; no speculative search scores.
- B01/B02: link to existing institutional notes, public policy and governance before creating duplicate material.
- C01: browser, mobile, keyboard, screen reader and task-comprehension evidence; preserve evidence visibility.
- D02: stable cite text includes record ID, assessment ID, date and permanent URL with provenance.
