# FIP-B01 G3 — Non-public About wording acceptance receipt
Date: 2026-11-17
Status: **ACCEPTED — WORDING ONLY; NOT IMPLEMENTED OR PUBLISHED**

## Operator decision
The operator explicitly accepted **all five** amendments from the independent G3 wording review and the exact revised “How the Observatory operates” passage as the **approved non-public wording baseline**. The proposal was updated in place on the existing isolated documentation branch:
[Approved non-public G3 wording](../proposals/B01-G3-ABOUT-OPERATING-ARRANGEMENTS-2026-11-17.md).

## Accepted amendment inventory
1. Founder-attributed personal-financing/current-support statement replaces an interruptive disclaimer; no independently audited finances implied.
2. AI responsibility concise but retains autonomous discovery/review, prior authorisation of evidence admission (including batches) and explicit human approval for new records, substantive assessments, pressure/stage changes and significant corrections.
3. Existing standing minor administrative/technical correction authorisation explicitly retained; no independent AI scientific judgment granted.
4. Current relevant-interest self-report and future disclosure commitment kept distinct from any established public conflicts register or recusal procedure.
5. Inline Markdown links removed because About `ABOUT_BLOCKS.body` is plain rendered text; existing routes/navigation remain unchanged, no renderer change approved.

## Factual and structural controls
- **G1 operator-attested:** ownership/financial relationships/interests, prospective disclosure, AI/human authority boundaries, absence of external formal board. Not externally audited, verified legal form, or universal procedural compliance.
- **Existing sources/receipts:** About/Welcome/Origins/Methodology/Institutional Changelog/OPERATIONS and sampled Scout approvals substantiate site statements and sampled practices; no guarantee that every source receives a separate human reread.
- **Exact future location:** `src/pages/About.jsx`, `ABOUT_BLOCKS`, immediately **after** `Institutional Principle` and **before** `Who the Record Serves`. Preserve all seven existing About blocks, Public accountability aside and route behaviour.
- No changes to Welcome, Origins/FM-001, Methodology, Institutional Health, Institutional Changelog, footer/contact, FCIF, Frontier Records or MCP. Formal claimant response/appeal arrangements belong separately to FIP-B02.
- FIP-A02 historical MCP `date`/`recordedDate` parity remains **DEFERRED / NOT ACCEPTED**.

## Gate separation / implementation recommendation
**G3 wording accepted; G4 implementation not authorised.** Recommend a *separately authorised* bounded About-only source change on an isolated implementation branch, reusing existing About presentation without modifying other public pages, with source diff, build/tests and rendered preview checks. A draft PR and Cloudflare preview must each be authorised if desired. **Do not merge or production deploy without later independent instruction**; note that merge to main may automatically trigger Cloudflare Pages production deployment.

## This execution
Administrative documentation only on `fip-b01-g2-g3-proposal-20261117`. No site source changed, PR opened, main merged or deployment initiated.
