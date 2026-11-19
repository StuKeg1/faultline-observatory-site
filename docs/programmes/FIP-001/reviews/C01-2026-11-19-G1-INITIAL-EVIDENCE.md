# FIP-C01 — G1 newcomer and accessibility evidence review (initial baseline)
Date: 2026-11-19
Package / wave: C / W2
Status: **IN REVIEW — EVIDENCE ONLY; NO REPAIR OR ACCEPTANCE AUTHORITY**
Original findings: F2-02 (Escalating direction), F2-03 (record complexity), F2-10 (accessible link names). Adjacent checks F2-04/F2-05/F2-08/F2-09/F2-11/F2-13/F2-14/F2-16 and F2-17 are **cross-references**, not silently enrolled remediation packages.
Authority: Operator directed “Close FIP-B02, then begin FIP-C01.” Review only. No web, record, FCIF, MCP, or active policy modifications.

## Questions and paths
Test whether a genuinely new visitor can:
1. State what the Observatory observes and why it preserves *trajectories* rather than announcing verdicts;
2. Move from homepage question -> Frontier Record, then locate the controlling current State Warrant, relevant source instances and assessment history;
3. Distinguish Pressure State from Verification Stage, and distinguish record update from fresh assessment;
4. Find a record by search/filter and return to programme or public record;
5. Locate Contact and submit a question or correction using the single destination;
6. Operate the primary journey with keyboard/mobile and assistive-technology semantics.

Representative source/public loci:
- `src/pages/Home.jsx` and `https://faultlinewatch.com/`: homepage question cards and Public Record entry.
- `src/pages/PublicRecord.jsx`, `src/pages/TheRecord.jsx`, `https://faultlinewatch.com/public-record/`: three lenses, directory filters and search.
- `src/pages/FrontierRecord.jsx`, `https://faultlinewatch.com/the-record/fr-qe-0001/`: passport, State Warrant, Assessment History, Verification Matrix, mutation and source panels.
- `src/components/SiteNav.jsx`, `src/components/SiteFooter.jsx`: desktop/mobile navigation, visible headings and footer Contact.
- `src/pages/Stubs.jsx` (`HowToRead`), `src/pages/Methodology.jsx`: definitions and how-to-read copy.
- `src/pages/CorrectionsAndResponses.jsx`, `scripts/route-manifest.js`: canonical `/contact/` and old-route 301 declarations.

## Evidence classifications
**S — Source/code observation**; **W — publicly retrieved web page content** (may be an indexed snapshot, not a new interactive session); **H — hypothesis requiring visitor test**; **U — unverified device or assistive technology behavior**. Do not treat available markup as proof of accessible user experience.

| ID | Observation and locator | Type | Preliminary disposition / test |
|---|---|---|---|
| C01-01 | Homepage has a question-led journey (question cards / "Follow the evidence") and Public Record CTA; published homepage text identifies 32 records and evidence history. `Home.jsx` questions block; live-search read `/` on 2026-11-19 | S+W | **Present**. Test whether newcomers can select a question and explain why they are entering a specific record. |
| C01-02 | Public Record presents three entry lenses (Programme, Evidence Trajectories, Directory); Directory offers URL-persistent search, programme, frontier, state, status and sort filters with visible and ARIA labels. `PublicRecord.jsx`, `TheRecord.jsx`, public `/public-record/` retrieval | S+W | **Present**. Verify filter interaction, recovery and labels in keyboard/mobile browser. Public fetch was indexed four days earlier, not a fresh task session. |
| C01-03 | Record detail puts claim, state/stage, a point-of-use state explanation, "Where the record stands", dates, assessment history and access to detailed sections near the top. `FrontierRecord.jsx` header / `WhereRecordStands`; public FR-QE-0001 retrieval was indexed ~4 weeks earlier | S+W | **Present**. Test if first-time reader distinguishes *current assessment* from *latest record update*, and State from Stage. Older web snapshot is not current production proof. |
| C01-04 | The current record header points to "State definitions"; `getPressureStateExplanation` is shown next to state in `FrontierRecord.jsx`. The historical issue F2-02 involves interpretation of "Escalating". | S+H | **Test needed**, not a confirmed ambiguity: ask visitor whether Escalating means improved evidence, increased scrutiny, or increased certainty, then compare with actual explanation. |
| C01-05 | `FrontierRecord.jsx` `RecordTabs` uses `role="tablist"` and `role="tab"` for **scroll-to-section buttons** with `aria-selected` but no `aria-controls`/tabpanel relationship. | S | **Accessibility semantics review candidate**, not a proven WCAG failure. Keyboard and screen-reader task audit required; consider ordinary section-navigation links only after review. |
| C01-06 | `SiteNav.jsx` renders desktop links and a separate mobile link set; closed mobile panel gets `aria-hidden` and links `tabIndex=-1`, open menu button has `aria-expanded`, `aria-controls` and changing accessible name. | S | **No automatic defect finding**. Real tab order, assistive-tree isolation, focus restoration and escape/close behavior require controlled viewport tests. |
| C01-07 | The static `HowToRead` guide in `src/pages/Stubs.jsx` still says "Every record is append-only: nothing is deleted" and "Nothing is deleted" about the mutation log. Methodology/A04 deliberately distinguishes append-only assessments from corrected other fields and notes that mutation summaries may not reproduce earlier values. | S | **Confirmed wording inconsistency / review candidate**. Do not rewrite guide or assert historical loss without scoped copy decision. Ask whether newcomer misreads correction semantics. |
| C01-08 | The `HowToRead` guide refers to a "Contested" state. Current `src/data/pressureStates.js` enumerates Emerging, Escalating, Stabilising, Fragmenting, Resolving and Collapsed (with Audit legacy); **Contested is not a current or declared legacy state**. | S | **Confirmed outdated terminology in guide; scope a correction proposal**, without changing site copy during C01 G1. |
| C01-09 | Canonical Contact consolidation: `/contact/` is linked once in footer; old Corrections path has two manifest redirects to Contact. Current `main` and PR #268 merged; Cloudflare production successful and CI green. | S | **Code/build PASS**; independently test actual visitor click, email link and live 301 status; do not imply the current browser tab was newly exercised. |
| C01-10 | Evidence Trajectories chart has accessible SVG labels/descriptions and keyboard handlers on paths, circles and current register rows. `EvidenceTrajectories.jsx` | S | **Markup present**, interaction/legibility on narrow viewports and screen reader **U**. |
 
## Preliminary synthesis
The main beginner journey has credible existing explanatory structure. **Do not infer an overall accessibility failure or success from source alone.** The clearest source-level candidate is the stale guide's append-only and state-vocabulary wording (C01-07/C01-08); the most focused semantic check is the record-tabs pattern (C01-05). The meaning of "Escalating" and the discoverability of current vs updated are **comprehension hypotheses**, not verified defects.

## Structured task protocol (not yet performed with an external newcomer)
- **Desktop newcomer:** give no institutional background; ask them to start at `/`, choose one claim question, identify the current assessment and cited evidence, distinguish stage/state and date types, then find Contact. Record path, time, wrong turns, verbatim misunderstanding and completion, without coaching.
- **Mobile:** repeat at narrow viewport, test menu, record section tabs, evidence-panel disclosure, Contact and scroll behavior; capture viewport and browser build.
- **Keyboard:** tab from top nav through first question, record body and source links, escape/reopen mobile nav; note focus order/visible focus and inaccessible controls.
- **Screen reader:** run with actual supported device/software (e.g. NVDA/VoiceOver), verify navigation landmark names, tablist semantics, record-chart/section discoverability, and focus feedback. A source grep is **not** a screen-reader run.
- Use sampled `FR-QE-0001`, plus at least one `FR-AI`, `FR-BT` record spanning different states/stages; select and record exact IDs before tests. Do not replace all with a single favourable page.

## G1 decision
**Review started; preliminary source and public-content baseline recorded; live task-based desktop/mobile/keyboard/screen-reader validation remains open.** No layout or wording patches authorised. Next recommended action: controlled C01 browser and assistive-technology task evidence, prioritising C01-05 and C01-07.
