# FIP-B02 G2 — Bounded corrections and right-of-response procedure design
Date: 2026-11-19
Status: **PROPOSED — DECISION REQUIRED; NOT AN OPERATIVE POLICY**
Authority: Operator authorised G2 bounded design after G1 evidence-only review. No approval of public copy, canonical process, FCIF amendment, website implementation, or deployment.

## Scope and source basis
FIP-001 W2/Package B; F3-14 (right of response), F4-02 (contact/privacy/terms), F4-08 (claimant response consolidated with F3-14).
- `src/components/SiteFooter.jsx`: existing general `hello@faultlinewatch.com` contact.
- `src/pages/DocumentationRequests.jsx`: manual email requests for **internal-document inspection** only; actionable acknowledgement and no fixed deadline. It is **not** already a scientific corrections channel.
- `src/pages/Methodology.jsx`: finding evidence, reviewing evidence and changing assessments are distinct; material changes warrant assessments; append-only assessment and correction-history semantics.
- `src/pages/About.jsx`: founder's final authorisation for substantial assessments, changes and significant corrections; no independent external decision board.
- `src/pages/InstitutionalChangelog.jsx`: all recorded mutations can be inspected; entries may summarise corrections without reproducing full prior wording. Record detail contains assessment history and mutation log.
- `docs/programmes/FIP-001/README.md`: programme materials are administrative, not canonical policy; publication and methodological changes separately gated.

G1 inference: these building blocks exist; a distinct external challenge and response procedure was not established in the inspected public pages. This proposal makes no assertion about uninspected private intake practice.

## Design decisions proposed, not yet ratified
1. **Purpose:** invite evidence-based challenges and a right to submit a reasoned reply, **not a right to compel amendment or publication**.
2. **Who may submit:** any external party, including claim originators, affected organisations, researchers and readers. No priority or special veto for a claimant.
3. **Channel:** reuse `hello@faultlinewatch.com`; subject **Frontier Record challenge**. No form, ticketing service, or new storage architecture in first release.
4. **Minimum submission:** record ID/URL or identifiable statement; disputed passage or claim; reason and verifiable sources; optional requested correction or reply. Ask for clarification when insufficient.
5. **Triage categories:** (a) factual or attribution error; (b) new scientific evidence; (c) reasoned disagreement with assessment; (d) request to publish a response; (e) unrelated/privacy/abusive message. Classification does not predetermine verdict.
6. **Reviewer and authority:** founder reviews and explicitly approves substantive record/publication decisions; AI may assist under already disclosed governance. Do **not** suggest an external board, independent appeals body or automatic acceptance.
7. **Outcomes:** accept; partially accept; decline with brief reason; request more evidence; hold unresolved. A reasoned disagreement need not change the current assessment. Reply publication is editorially evaluated, not automatic.
8. **Corrections and traceability:** retain original assessments, append a new assessment only when warranted under FCIF; use governed corrections and mutation log for other record fields; links to source/decision receipt where appropriate. Avoid promise to publish every email, personal identity or case disposition.
9. **Confidentiality:** do not automatically publish submissions, correspondence, personal information, unverified allegations, or third-party copyrighted material. Obtain permission/appropriate basis for quoting or attributing a response.
10. **Acknowledgment:** manually acknowledge actionable requests where feasible; no fixed timetable or guaranteed outcome.
11. **Reconsideration:** a later submission with relevant new evidence or a demonstrable factual/process error can be reconsidered; not an unlimited or independent appeal.
12. **Scope:** no FCIF changes, automatic intake, new data fields, public response ledger, SLAs, remedies or formal legal complaints process in G2.

## Proposed exact public copy (candidate; not approved)

### Corrections and responses

Faultline Observatory maintains a public record of scientific and technology claims as evidence develops. Readers, researchers, organisations and people whose claims are discussed may submit corrections, new evidence or a reasoned response to a Frontier Record.

**How to contact us.** Email **hello@faultlinewatch.com** with the subject **Frontier Record challenge**. Where possible, include the Frontier Record ID or link, the statement you are querying, the reason for your challenge and links or citations to supporting evidence. You may also explain the correction or response you would like considered.

**How submissions are reviewed.** The Observatory distinguishes factual corrections, new evidence and disagreements with its interpretation. Submissions are reviewed against the available sources and the Frontier Claim Intelligence Framework (FCIF). Actionable requests may be acknowledged or returned for clarification; no fixed response time is promised.

**Decisions and changes.** The founder retains responsibility for substantive editorial decisions. A submission may be accepted, partly accepted, declined with reasons, or held pending further evidence. A disagreement or response does not itself require a change of Pressure State, Verification Stage or assessment. Where a change is warranted, the Observatory uses its governed assessment and correction mechanisms, preserving the record's history.

**Responses and reconsideration.** A person or organisation discussed in a Frontier Record may ask the Observatory to consider a reasoned response. Submission does not guarantee publication or editorial agreement. Relevant new evidence or a material factual or review error may justify reconsideration. The Observatory has no independent appeals panel.

**Privacy and publication.** Correspondence and submissions are not automatically made public. The Observatory may refer to evidence and decisions in the public record when appropriate, but will not automatically publish personal contact details, private correspondence or unverified allegations. Any proposed public quotation or attribution is considered separately.

## Recommended placement
- **Primary:** a short dedicated public route, candidate `/corrections-and-responses/`, with the exact copy above, subject to route/SEO/navigation implementation review at G3.
- **Entry:** link from existing `/about/` (near operating arrangements) and from `SiteFooter` as **Corrections and responses**.
- **Contextual secondary:** optional record-page link near the assessment history or mutation log, only if necessary after newcomer comprehension review.
- **Do not** embed this in `/documentation-requests/`, which concerns internal-document access; do not overload Methodology with a separate operational policy. Link to Methodology/Changelog instead.

## G3 implementation/acceptance proposal — not authorised
1. Decide final copy, whether public responses are ever quoted/linked, and how individual declined cases are handled privately versus publicly.
2. If approved, create isolated site-only PR; add route, About/Footer links, ordinary accessible page styles and title/canonical metadata; leave FCIF, records and MCP unchanged.
3. Run route tests, lint, full CI, canonical validation, preview and mobile/accessibility checks; review preview before explicit merge/production approval.
4. Confirm production route, nav and email subject; ensure existing documentation-request route remains distinct.
5. Issue a separate release/acceptance receipt; no claim that receipt or page implements an independent panel or deadline.

## Decision gate
Approve this **as a design only**, request edits, or decline. G2 preparation is not publication authority. No site deployment, PR merge, canonical data mutation or new operational obligation is authorised.
