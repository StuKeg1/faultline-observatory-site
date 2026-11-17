# FIP-B01 G3 — Non-public About operating-arrangements wording proposal

Date: 2026-11-17
Status: **G3 REVISED WORDING ACCEPTED — NON-PUBLIC BASELINE (2026-11-17)**. Administrative approval of wording only; **no public source change, PR, merge or deployment authorised**.
Authority: Operator accepted G2 placement and subsequently expressly accepted all five G3 review amendments and the revised About wording as a **non-public wording baseline**. FIP-A02 historical MCP `date`/`recordedDate` parity stays **DEFERRED / NOT ACCEPTED**.

## 1. Exact proposed placement

Repository: `src/pages/About.jsx` (at G3 review baseline on `main`, blob `bb71d56f870c7661cf5981181a68d46a93b84c98`).

Insertion point **within the existing `ABOUT_BLOCKS` array, after the entire object**:
`heading: "Institutional Principle"`, body beginning `Observation Before Interpretation.`
and **before** the object:
`heading: "Who the Record Serves"`.

One new content block, working title **"How the Observatory operates"**. This is a proposal locator only — **do not modify `src/pages/About.jsx`** in G3. Preserve About's existing Mission, Purpose, Origins, The Record, FCIF, Institutional Principle, Who the Record Serves and Public accountability aside in their current order and wording. Reuse the page's existing simple block layout if any later implementation is separately authorised; avoid a new governance route, panel or visual prominence.

## 2. Approved non-public wording baseline — NOT published or implementation-authorised

The operator accepted the following **exact revised text** on 2026-11-17, after G3 review. This supersedes the earlier candidate in this proposal and is not a live website statement.

> ### How the Observatory operates
>
> Faultline Observatory is independently operated by its founder, Stuart Kegel. He personally funds its operating costs and states that the Observatory receives no external financial support or sponsorship.
>
> AI assists with discovering and reviewing evidence, challenging interpretations and preparing assessments. Evidence enters the canonical record only with the founder's authorisation, which may cover defined batches. New Frontier Records, substantive assessments, changes to Pressure States or Verification Stages, and significant corrections require his explicit approval. AI may carry out minor administrative or technical corrections under existing standing authorisations.
>
> The founder reports no current professional or financial interests relevant to the technologies or companies covered by Frontier Records. Should a relevant interest arise, he will disclose it and apply the same FCIF evidence standards.
>
> The Observatory has no formal external advisory board or independent review panel with decision-making authority. Its methodology, assessment histories and institutional changelog provide public visibility into how claims are evaluated and how the record changes.

**Accepted review amendments (all five):**
1. Replace the interruptive financial disclaimer with explicit founder attribution; no independent audit is implied.
2. Simplify AI authority without losing autonomous investigation, authorised canonical evidence admission (including approved batches), and explicit approval for substantive scientific decisions.
3. Retain bounded standing authorisations for minor administrative/technical changes; these do not confer independent AI scientific decision rights.
4. Phrase the conflict statement as a narrowly scoped present operator report with future disclosure as a commitment; do not invent a conflict register or recusal mechanism.
5. Remove embedded Markdown links from the plain-text About block; preserve and rely on existing site routes/navigation instead of silently changing the `ABOUT_BLOCKS` rendering system.

**Drafting/verification constraints:** The published sentence “He personally funds...” remains operator self-attestation, not audited accounts. Present absence of relevant interests is not a global conflicts certification. There is no formal external board or independent veto, and the proposal must not imply that every evidence source has separately been read by a human. Any future implementation must preserve the text and these qualifiers, subject to a separately authorised release gate. The historical original proposal is superseded by this dated acceptance record.

## 3. G1 source-to-statement trace

| Draft claim | G1 IDs | Evidence class | Qualification |
| --- | --- | --- | --- |
| Sole founder/operator and public-interest project | F01, F05 | Operator attested **A**, Welcome/About current page **S** | No claim of charity, corporate/nonprofit legal status |
| Personally financed, no outside support or sponsor editorial influence | F02, F03 | **A** only for current finances/relationships | Explicit attribution; neither independent audited accounts nor third-party due diligence |
| AI research, evidence discovery, analysis and bounded implementation assistance | F06, F07 | **A** + Origins/FM-001 historical **H**; OPERATIONS.md scoped **S** | No exhaustive provider/model inventory or promise of universal independent source-read |
| Human final authority for evidence admissions (incl. batches), new records, assessments, states/stages and significant corrections | F05, F08, F09 | **A** + sampled approved Scout receipts **O** | Sampled receipts substantiate examples, not universal compliance audits; batch authorisation distinct from autonomous admission |
| AI may carry out minor administrative/technical corrections under existing standing rule | F08, F09 | **A** | Must be in scope of existing authorisation; no new authority is granted by the text |
| No currently relevant financial/professional interests; disclose relevant future interests with constant FCIF standards | F04 | **A** | Current operator self-report; promise not a formally adopted conflict register |
| No formal external board, independent panel or external veto authority | F10 | **A** and public-source absence **N** | No equivalence to independent certification; informal external criticism may still occur |
| Methodology, Origins, changelog and contact links | F07, F09 | Website/Repository **S** | Link existing routes; avoid inventing a new correction/appeal policy |

G1 source: [accepted operator receipt](../receipts/B01-G1-2026-11-17-OPERATOR-ACCEPTANCE.md) and [ten-point ledger with source matrix](../reviews/B01-G1-FACT-VERIFICATION-LEDGER-2026-11-17.md). The approved **non-public** wording is **not** independently verified financial or governance evidence; it is a candidate public account of operator-attested arrangements, awaiting separate implementation authorisation.

## 4. Duplication and route audit

| Surface | Existing responsibility | G3 treatment |
| --- | --- | --- |
| `/about/` | Mission/identity/origins/FCIF/reader audience/public accountability | Single current-operations block in approved G2 slot; no replacement of existing content |
| `/welcome/` | First-time visitor orientation and founder mention | **Unchanged**; do not insert parallel governance copy |
| `/about/origins/` and `/notes/fm-001/` | Historical human–AI origin narrative | **Unchanged**, linked not paraphrased in detail; no rewriting historical account as current policy |
| `/methodology/` | FCIF terms and evidence-review pipeline | **Unchanged**; link rather than restating pressure-state definitions |
| `/institutional-health/` | Contextual metrics and constitutional fidelity | **Unchanged**; never present metrics as evidence of funding or editorial independence |
| `/institutional-changelog/` | Dated Frontier Record mutation history | **Unchanged**; link, do not claim full version-by-version prior-value diffs |
| Footer/contact | Existing address and navigation | **Unchanged**; use existing `mailto:` contact |
| FIP-B02 | Claimant response, appeal and formal corrections policy | **Out of scope**; no new right-of-response guarantees |

Potential redundancy: About already says “The founder ...” in Origins, Welcome identifies the founder, and the site acknowledges AI as a founding partner. The new block may repeat the name **once only to identify current accountability**. It must add current decision rights, funding, conflicts and oversight boundaries, rather than a second origins narrative.

## 5. Preservation and release acceptance criteria — future gate, NOT executed

1. Assert that **only** the planned About `ABOUT_BLOCKS` addition is in any future approved diff; no other page/component, FCIF, record, MCP, data, sitemap, routing or assessment changed.
2. Verify original seven About blocks, their exact text and relative order, and the existing Institutional Health aside and link are unchanged. New block occurs exactly once between `Institutional Principle` and `Who the Record Serves`.
3. Source trace each factual sentence to accepted G1 IDs, preserving self-attestation, future-intent, standing minor-fix bounds and absence of external review. Don't assert audited finances, legal registration, conflict-free status across unrelated companies, a universal source-check protocol, or formal oversight.
4. Verify existing About/Welcome/Methodology/Origins navigation, Institutional Changelog and `mailto:hello@faultlinewatch.com` remain intact. The approved new plain-text `ABOUT_BLOCKS.body` includes **no inline Markdown or JSX links**, and no new nav destination, placeholder policy page, or rendering-system change is authorised.
5. Reconfirm `src/pages/Welcome.jsx`, `src/pages/Origins.jsx`, `src/data/notes/FM-001.js`, `src/pages/Methodology.jsx`, `src/pages/InstitutionalHealth.jsx`, `src/pages/InstitutionalChangelog.jsx`, `src/components/SiteFooter.jsx` unchanged by proposed implementation.
6. For any separately authorised implementation: independently inspect PR diff and CI, then separately seek merge permission. Cloudflare Pages may auto-deploy a main merge; no deploy/production authority follows from G3. Review rendered live About only after separately authorised release.
7. Keep FIP-A02 historical MCP `date`/`recordedDate` parity DEFERRED / NOT ACCEPTED, FIP-D01 conditionally closed and FIP-B02 separate.

## 6. Recommendation and next operator decision

**G3 WORDING ACCEPTED — IMPLEMENTATION NOT AUTHORISED**. The accepted revision and five review amendments are recorded in [the G3 acceptance receipt](../receipts/B01-G3-2026-11-17-WORDING-ACCEPTANCE.md). Next distinct gate: explicit approval for a bounded isolated About-only source implementation and validation, optionally allowing PR/CI/preview by separate instruction; **no PR, merge or production deployment** follows from wording acceptance. FIP-A02 MCP historical date parity remains deferred.
