# FIP-B01 G3 — Non-public About operating-arrangements wording proposal

Date: 2026-11-17
Status: **DRAFT PREPARED — OPERATOR WORDING DECISION REQUIRED**. Non-public administrative proposal only; **no public source change, PR, merge or deployment authorised**.
Authority: Operator accepted G2 placement recommendation and authorised G3 *wording preparation only*. FIP-A02 historical MCP `date`/`recordedDate` parity stays **DEFERRED / NOT ACCEPTED**.

## 1. Exact proposed placement

Repository: `src/pages/About.jsx` (at G3 review baseline on `main`, blob `bb71d56f870c7661cf5981181a68d46a93b84c98`).

Insertion point **within the existing `ABOUT_BLOCKS` array, after the entire object**:
`heading: "Institutional Principle"`, body beginning `Observation Before Interpretation.`
and **before** the object:
`heading: "Who the Record Serves"`.

One new content block, working title **"How the Observatory operates"**. This is a proposal locator only — **do not modify `src/pages/About.jsx`** in G3. Preserve About's existing Mission, Purpose, Origins, The Record, FCIF, Institutional Principle, Who the Record Serves and Public accountability aside in their current order and wording. Reuse the page's existing simple block layout if any later implementation is separately authorised; avoid a new governance route, panel or visual prominence.

## 2. Candidate publication wording — NOT approved or live

> **How the Observatory operates**
>
> Faultline Observatory is a founder-operated public-interest project maintained by Stuart Kegel. Its operating costs are personally funded; the Observatory currently receives no outside financial support or editorial sponsorship. These are the founder's statements about its present arrangements, not independently audited financial assurances.
>
> AI tools assist with finding, investigating, classifying and reviewing evidence, preparing recommendations, and carrying out authorised implementation work. The founder retains final authority over admitting evidence to the canonical record (including approved batches), opening new Frontier Records, making substantive assessments, changing Pressure States or Verification Stages, and approving significant corrections. Minor administrative or technical corrections may proceed under existing standing authorisations; this does not authorise independent scientific judgments by AI.
>
> The founder reports no current professional or financial interests relevant to the companies or technologies covered by Frontier Records. Any future relevant interest will be disclosed, and the same FCIF evidence standards will apply. The Observatory has no formal external advisory board or independent review panel with decision-making authority.
>
> Its [Methodology](/methodology/) explains the evidentiary framework; [Origins](/about/origins/) preserves the founding history of its human–AI collaboration. Published record histories and the [Institutional Changelog](/institutional-changelog/) document changes, and [Contact](mailto:hello@faultlinewatch.com) provides a route for correspondence.

**Drafting caution:** This is a candidate, not a policy, legal representation or certification. “No current professional or financial interests relevant to the companies or technologies covered” is a direct operator self-report with the narrow scope accepted in G1, not a global assertion of no interests. Likewise, prospective disclosure is a commitment, **not** an existing published conflicts/recusal system. The description of AI assistance and batch approvals must not imply unapproved autonomous admission or continuous human re-reading of every primary source.

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

G1 source: [accepted operator receipt](../receipts/B01-G1-2026-11-17-OPERATOR-ACCEPTANCE.md) and [ten-point ledger with source matrix](../reviews/B01-G1-FACT-VERIFICATION-LEDGER-2026-11-17.md). The wording is **not** independently verified financial or governance evidence; it is a proposed public account of verified-by-operator arrangements.

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
4. Check exact links for `/methodology/`, `/about/origins/`, `/institutional-changelog/` and `mailto:hello@faultlinewatch.com`; do not introduce an extra nav destination or placeholder policy page.
5. Reconfirm `src/pages/Welcome.jsx`, `src/pages/Origins.jsx`, `src/data/notes/FM-001.js`, `src/pages/Methodology.jsx`, `src/pages/InstitutionalHealth.jsx`, `src/pages/InstitutionalChangelog.jsx`, `src/components/SiteFooter.jsx` unchanged by proposed implementation.
6. For any separately authorised implementation: independently inspect PR diff and CI, then separately seek merge permission. Cloudflare Pages may auto-deploy a main merge; no deploy/production authority follows from G3. Review rendered live About only after separately authorised release.
7. Keep FIP-A02 historical MCP `date`/`recordedDate` parity DEFERRED / NOT ACCEPTED, FIP-D01 conditionally closed and FIP-B02 separate.

## 6. Recommendation and next operator decision

**G3 PREPARED — DECISION REQUIRED**: Approve, amend or decline this candidate wording **as wording only**, before considering a separate isolated implementation/CI authorisation. No code change, public copy deployment, PR, merge, or production deployment is performed or authorised here.
