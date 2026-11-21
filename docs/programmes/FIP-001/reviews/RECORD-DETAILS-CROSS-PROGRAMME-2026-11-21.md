# FIP-001 — Record Details four-programme consistency review
**Date:** 2026-11-21  
**Disposition:** EVIDENCE-ONLY / PROPOSED. No UI implementation, citation contract change, FCIF or canonical mutation authorised by this review.

## Scope and evidence
Read canonical `main` after PR #272 (citation) and PR #274 (Mutation Log presentation), including `src/pages/FrontierRecord.jsx`, `src/pages/FrontierRecord.css`, `src/components/RecordCitation.jsx`, `src/data/recordReference.js`, `src/data/corpus.js` and the record modules for all 32 registered records. Representative detailed samples: **FR-QE-0001**, **FR-QE-0003** (QE); **FR-AI-0007**, **FR-AI-0008**, **FR-AI-0009** (AI); **FR-AM-0001**, **FR-AM-0005** (AM); **FR-BT-0004**, **FR-BT-0007** (BT). This is a *source and presentation-design review*, not an independent mobile, screen-reader or interactive browser acceptance test. No analytics demand or user-citation frequency was measured.

## Findings
| ID | Grounded finding | Consequence |
|---|---|---|
| RD-01 | The right-hand metadata `<aside className="rp-meta-panel">` is a single common component for all 32 records across QE (8), AI (9), AM (8), BT (7). On viewports <=700px its CSS places it below the main header column with a top rule. | No new programme rollout is needed. Any shared-component change already affects all records. |
| RD-02 | `claim.subject`, `claim.claimClass`, and `reconstruction.effectiveCreationDate` currently appear only on FR-QE-0001. `Claim Class` is the lone `Supremacy / advantage claim` descriptor; no adopted cross-programme taxonomy is evidenced. | One-off scientific framing mixed into an administrative panel. Its removal from display should not delete canonical data; the parked Claim Class hypothesis is a separate decision. |
| RD-03 | Above the fold for FR-QE-0001, the current assessment date is used in status line, Where the record stands, the sidebar Last Assessment row, and the assessment-history strip; State Warrant adds another reference below. | Adjacent repetition obscures which area owns orientation vs audit history. Some repetition is legitimately needed to keep history and warrant self-contained. |
| RD-04 | `Last updated YYYY-MM-DD · M-nnn` comes from `getRecordReference`, which also supplies citation version data; the separate version/count rows were removed in #272. | **Keep** that compact line and its explanation of the latest update; do not recreate version or mutation count rows. |
| RD-05 | The panel displays raw `record.status` as `Status: Open/Closed` beside a *scientific* Pressure State in the main header. Canonical record-level `status` is **open** in 30 records and **closed** in FR-AM-0001 and FR-AM-0005. `awaiting_operator_decision` in FR-AI-0008 is **not** a record status: it belongs to a separate Verification Stage challenge. | The label does not establish what Open/Closed means and may be read as scientific acceptance or rejection. Do not transform it into evidential pressure or infer closure reasons. |
| RD-06 | `RecordCitation` is an existing `<details>` in the main header column after Where the record stands / assessment history. The panel only links to change log and Evidence Trajectories. | Visitors looking at administrative details are not offered a direct way to open the citation. A simple semantic link/activation is justified. |
| RD-07 | The panel has `aria-label="Record metadata"` but no visible explanatory title. Mobile moves it below the main header rather than preserving the desktop right-rail relationship. | A plain `Record details` label can improve orientation without inventing an institution-specific term; interactions need responsive and keyboard checks. |

## Proposed field disposition (not implementation authority)
| Current field | Proposed disposition | Rationale / protection |
|---|---|---|
| Claim Subject | **Remove from displayed panel** (FR-QE-0001 only); retain stored value. | Record title/claim statement already identify the subject. Do not generalise an isolated field to all programmes. |
| Claim Class | **Remove from displayed panel**; retain stored `claimClass`. | No governed cross-programme taxonomy; the parked proposal remains a hypothesis, not a feature. |
| Effective Reconstruction | **Retain conditionally**, with an accessible brief provenance clarification on the sole qualifying record. | Distinct historical provenance; do not confuse reconstruction date with original claim or assessment date. |
| Last Assessment | **Retain** in the administrative panel for now, explicitly separate from Last updated. | The scientific and administrative clocks must remain readily comparable; reduce duplication in neighbouring orientation section instead of eliminating this distinction. |
| Last updated | **Retain** `date · M-ID` and the current update description / change-log link, all derived from `getRecordReference`. | Supports provenance and citation consistency without promising an immutable snapshot. |
| Status | **Rename to Record status** and provide a single shared explanation: administrative lifecycle, **not** Pressure State or evidence verdict. Do not invent specific semantics for Closed without a governed definition. | Helps prevent apparent contradiction with STABILISING/COLLAPSED, including FR-AM-0001 and FR-AM-0005. |
| Evidence Trajectories link | **Retain**. | Existing discovery path. |
| Cite this record link | **Add** adjacent to Evidence Trajectories link; it should open/reveal and focus the existing citation disclosure, not merely scroll to an unopened panel. | One source of citation data and a predictable keyboard/mobile interaction. |

## Duplicate-date proposal
- **Retain:** the status line's assessed date (quick first-screen orientation), the panel's Last Assessment date (administrative comparison with Last updated), the assessment-history dates (chronological purpose), and the State Warrant's latest assessment date (self-contained audit section).
- **Candidate for removal:** the `Assessed YYYY-MM-DD` mini-label within `Where the record stands`, which immediately repeats the status-line date on the same screen and does not add provenance. Check on records with reconstruction-date overlays and multiple assessments before making this change.
- Do not remove dates wholesale or conflate historical assessment date, record update date, State-entry date and reconstruction date.

## Proposed implementation gate and acceptance checks
One small **separate** shared-component PR, not an amendment to the already merged PR #272:
1. Remove only the two one-off conditional display rows. Leave underlying `src/data/records/*` untouched.
2. Keep shared `getRecordReference` output and existing citation formats intact.
3. Use a plain `Record details` label and clarified `Record status` wording; the clarification must not assign a scientific judgement to Open/Closed.
4. Add `Cite this record` action that actually expands the existing disclosure and makes it keyboard discoverable, accessible and focused; do not create a second citation UI.
5. Consider removing only the duplicate Where the record stands date after sampling QE/AI/AM/BT date-overlay behaviour.
6. Validate on **FR-QE-0001** (legacy metadata + same-day contextual date), **FR-QE-0003** (historic date overlay), **FR-AI-0008** (stage review pending but `status=open`), **FR-AM-0001** and **FR-AM-0005** (closed but scientifically assessed), **FR-BT-0004** (multiple same-day assessments), and **FR-BT-0007** (recent admission). Check desktop, <=700px, keyboard disclosure, source-derived metadata, no corpus changes and all CI/tests.
7. Gate merge and production deployment separately, with Cloudflare Pages and canonical-main verification. Distinct Workers build failures should be classified with logs; a Pages pass is not proof that an unrelated Workers integration is healthy.

**Review conclusion:** Use the existing shared panel, remove anomalous descriptive fields, clarify the administrative/scientific divide, preserve distinct date clocks, and link directly to the already-governed citation control. No separate taxonomy or new analytical layer is warranted. **Implementation not authorised by this evidence-only review.**
