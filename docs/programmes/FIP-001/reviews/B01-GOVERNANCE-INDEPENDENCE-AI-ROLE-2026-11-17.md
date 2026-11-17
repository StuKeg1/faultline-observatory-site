# FIP-B01 — Governance, funding independence, and AI-role disclosure
Date: 2026-11-17
Status: **EVIDENCE-ONLY REVIEW COMPLETE — DECISION REQUIRED**. No website implementation authorised.
Wave: W2 / Package B. Claude findings F3-04, F4-01, F6-03; F3-13 relevant sponsor/independence cross-reference, without absorbing B02 policy scope.

## Baseline, provenance and safeguards
This review checks the present repository's public-page source against retrieved public pages where available. Historical narrative is not necessarily current policy. Distinguish **already public**, **not found in inspected surfaces**, and **not factually established**; lack of text cannot prove absence of sponsor or conflict. Do not invent board, funding status, sponsor, nonprofit registration, editorial independence, reviewer credentials or AI sign-off procedures.

## Source locators and observations
**B01-01: Founder identity and institutional form — PRESENT, but governance detail limited.**
- [Welcome](../../../../src/pages/Welcome.jsx) section *Who is behind the Observatory?* explicitly calls it an "independent public-interest project, founded and maintained by Stuart Kegel"; this is the site’s own positioning, not an audited claim about finances or legal structure.
- [About](../../../../src/pages/About.jsx) blocks *Origins*, *FCIF*, *Institutional Principle* identify founder, public methodological basis and "Observation Before Interpretation". About links to [/about/origins/](https://faultlinewatch.com/about/origins/) and [/institutional-health/](https://faultlinewatch.com/institutional-health/). About's Public Accountability box concerns visitor/page-view statistics, not board oversight or financial assurance.
- [FM-001](../../../../src/data/notes/FM-001.js) / [published note](https://faultlinewatch.com/notes/fm-001/) and [Origins](../../../../src/pages/Origins.jsx) are dated founding recollections. The note states "hobby, not a startup" **in the founder's historical account**; do not treat it as proof of present funding, operating form or compliance.
- **Disposition:** VERIFY/ADAPT. Ownership is visible; operative decision rights (final admission, assessment, correction, appeals, conflicts) are not consolidated in the inspected public institutional entry pages. One-person operation must not be dressed up as an independent panel.

**B01-02: AI collaboration — ORIGIN DISCLOSURE PRESENT; CURRENT PRODUCTION ROLES NOT FULLY SPECIFIED.**
- [FM-001](../../../../src/data/notes/FM-001.js), [/notes/fm-001/](https://faultlinewatch.com/notes/fm-001/) and [Origins](../../../../src/pages/Origins.jsx) explicitly disclose dialogue with ChatGPT and collaboration in developing the Observatory. The full founding narrative is historical, not a current model/version policy.
- [Methodology](../../../../src/pages/Methodology.jsx) distinguishes *finding evidence*, *reviewing evidence*, *changing assessments*, and states that Pressure State is **not generated automatically**. Current judgement is anchored to assessments and FCIF, not solely to an AI response.
- [Welcome](../../../../src/pages/Welcome.jsx) makes claims of accountable published assessments and public evidence reasoning. It does not set out a complete operational AI-role map (e.g. who proposes evidence, who verifies cited sources, who decides an assessment, whether AI outputs can become canonical without a separate human gate).
- **Disposition:** ADAPT. A short current-process disclosure may add value if factually checked: AI assistance vs review and publication authority; human/editorial decision owner; source verification and correction accountability. Do not assume an automated pipeline or blanket human review not established by evidence.

**B01-03: Funding, sponsorship and conflicts — CURRENT FACTS NOT ESTABLISHED.**
- The inspected [About](../../../../src/pages/About.jsx), [Welcome](../../../../src/pages/Welcome.jsx), [Institutional Health](../../../../src/pages/InstitutionalHealth.jsx), [Methodology](../../../../src/pages/Methodology.jsx) and [SiteFooter](../../../../src/components/SiteFooter.jsx) do not provide an explicit, current source-of-funding declaration, editorial sponsorship policy, named conflict register or handling of the founder's other roles/interests.
- The *independent public-interest project* description is an institutional self-description, **not independent verification of funding independence**. Source search did not find a concrete sponsor arrangement; it cannot establish none exists. Institutional Health explicitly concerns analytics and manual constitutional fidelity rather than donor reporting.
- **Disposition:** VERIFY FIRST. Exact present-tense facts must be confirmed by the operator before a disclosure can be drafted: personally financed costs, outside grants/donations/advertising, sponsor influence, relationships to tracked claimants, and potential recusal/annotation practice. Do not demand or publicly disclose private financial details; a categorical summary can suffice once true.

**B01-04: Accountability and contact — SOME PUBLIC PATHS ALREADY EXIST.**
- [SiteFooter](../../../../src/components/SiteFooter.jsx) exposes `hello@faultlinewatch.com` contact; [Institutional Changelog](../../../../src/pages/InstitutionalChangelog.jsx) shows recorded mutations; [Methodology](../../../../src/pages/Methodology.jsx) specifies record/assessment history. Existing corrections transparency should not be represented as absent.
- This is not itself a verified right-of-response process or formal appeal/review policy. Those are **FIP-B02** and should not be silently implemented within B01.
- **Disposition:** ALREADY PRESENT for contact/history; any further policy is a separate bounded proposal.

## Proposed decision gates (not authorised implementation)
- **G1 — Fact confirmation:** Obtain owner-verified statements of present project structure, source of funding/sponsor influence and actual AI/human decision workflow; record unknowns without inferring answers.
- **G2 — No duplication:** Decide whether a compact current-process section belongs on About, with durable links to the historical Origins/FM-001, FCIF Methodology and existing public accountability; avoid new authority or an invented governing board.
- **G3 — Draft only:** If G1 and G2 accepted, propose narrow, exact language for AI-use transparency and funding/conflict summary; verify factual accuracy before any code change. No corporate legal form, non-profit status or conflict-free assertion without documentary support.
- **G4 — Separate authorisation:** Source implementation, CI/preview, merge and production deployment each require independent operator authority. B02 remains outside this review.

## Bounded recommendation
**Review COMPLETE — DECISION REQUIRED**. Neither a wholesale governance overhaul nor a new external review panel is warranted by the inspected material. The meaningful gap is a *current*, concise accountability/AI-role/funding position tied to already public historical disclosure, with any new factual claim awaiting the founder/operator's confirmation.

**One next operator decision:** Authorise a **fact-only B01 G1 clarification** of current financing/sponsor influence and AI/human editorial workflow, with no publication, code changes or invented institutional structure. Keep FIP-B02 separate. FIP-A02 historical MCP `date`/`recordedDate` parity remains **DEFERRED / NOT ACCEPTED**.

## Public retrieval note
On 2026-11-17, public fetching of [Methodology](https://faultlinewatch.com/methodology/) and [FM-001](https://faultlinewatch.com/notes/fm-001/) returned substantive text aligned to inspected canonical source. About/Origins public fetch was unavailable through the external retrieval interface at review time; their conclusions here are explicitly **source-verified, not independently live-rendered**.
