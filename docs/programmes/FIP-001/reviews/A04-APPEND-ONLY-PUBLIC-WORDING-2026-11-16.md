# FIP-A04 — Bounded append-only and correction-history public wording audit
**Date:** 2026-11-16  
**Status:** EVIDENCE REVIEW COMPLETE — DECISION REQUIRED; NO PUBLIC OR CANONICAL EDIT AUTHORISED  
**Package:** A / Wave 1  
**Source:** Claude finding F3-03 in the 15 November eight-step audit (Step 3), subject to Step 8 limits. Source document: https://docs.google.com/document/d/1AHmt-Snc4RSHaDzbT41feH6Kdp7FnAdUrYf9nuk40lU/edit.  
**Baseline:** current canonical `main` inspected 2026-11-16; live indexed pages checked and compared with matching source strings, not a full same-time browser-capture audit.  
**Scope:** accuracy and reader comprehension of public claims about append-only records, edited/corrected fields, retained assessment history, mutation logs, and visibility of prior wording. No scientific assessment, data repair, FCIF change, or redesign.

## 1. Original allegation, independent qualification

Claude F3-03 alleged that the homepage's `never rewritten` claim overstates immutability, because some evidence-instance descriptions/references have been corrected in place; prior values may live in Git receipts rather than the page. It proposed `versioned with a full audit trail` and publishing prior-value diffs on the site. The source statement is **partly confirmed**. Crucial nuance: canonical *assessment objects* are explicitly retained as append-only judgement history, while other fields can be repaired under governed, recorded mutations. A correction log with a prior/current summary is **not** a guaranteed, self-contained full text diff.

No assumption that every page has a complete publicly accessible textual before/after snapshot; no blanket claim that there is no history. The 2026-11-16 FIP-A03 acceptance separately demonstrates careful source-preserving overlays, not proof that every old instance field remains byte-for-byte unchanged. Step 8 did not independently reproduce a complete corpus-wide diff inventory for F3-03; this review limits itself to exact verified counterexamples.

## 2. Public wording examined — precise locators and dispositions

| Finding | Public surface / source locator | Exact public assertion or fragment | Verification and risk | Assessment |
| --- | --- | --- | --- | --- |
| A04-01 | Home, `/`; `src/pages/Home.jsx` lines 229–233 | `It's only ever added to, never rewritten — updates are dated, so the full history of an assessment stays visible.` | **Directly conflates record-wide immutable text with assessment-history permanence.** Provenance corrections of evidence instance descriptions occur in place under mutation logging; e.g. FR-AM-0005 2026-09-20 source fidelity repair, FR-AM-0004 2026-09-19. Indexed homepage says same wording. | **Confirmed misleading; highest-priority small copy fix.** |
| A04-02 | Methodology, `/methodology/`; `src/pages/Methodology.jsx` `ARCHITECTURE_INDEX`, lines 131–136, `Mutation Log` definition | `An append-only log of every structural change to a record. Nothing is deleted; changes are recorded and the prior state is preserved.` | An append-only mutation **entry** is a valid policy, but `prior state is preserved` can imply a complete old-value snapshot exists in the public log. Public FR-BT-0004 M-008 and FR-AM-0005 2026-09-20 log show summaries, not full historical text. FR-QE-0003 experimentalAnnotations pilot was retired and removed with logged M-011, so `nothing is deleted` is only defensible when confined to the mutation/assessment log. | **Needs precise log/field distinction; not evidence of erased logs.** |
| A04-03 | Institutional Changelog, `/institutional-changelog/`; `src/pages/InstitutionalChangelog.jsx` lines 58–62 | `Every mutation to every Frontier Record, in full, chronological order. Nothing here is deleted, hidden, or summarised away — this is the complete operational history...` | The page compiles present mutation entries, but the notes often summarise repairs and `from/to` captures bounded descriptions, not full word-by-word deltas. `in full` can reasonably mean `all mutation entries`, but `summarised away` exaggerates precision of prior text. | **Scope-limited clarification advised; retain honest all-entry claim where tests warrant.** |
| A04-04 | About, `/about/`; `src/pages/About.jsx` `The Record`, line ~50 | `Each record is citable, permanent, and append-only.` | Broad institutional shorthand without caveat. Not literally true of each field, but follows a defensible assessment+mutation-history model. Risk of misunderstanding when combined with homepage. | **Adapt if unified terminology is desired; secondary.** |
| A04-05 | Welcome, `/welcome/`; `src/pages/Welcome.jsx` lines 68–76 | `Earlier assessments are never rewritten or removed.` | **Correctly scoped to assessment history**, unlike homepage. Existing current-source assessment preservation and FIP-A03 PR #255/#256 blob checks corroborate that practice for the reviewed cases. | **RETAIN — useful model of precise wording.** |
| A04-06 | Record-level Assessment History and Mutation Log; `src/pages/FrontierRecord.jsx` plus `src/data/recordReading.js` and `src/data/issuanceStatusClarifications.js` | Separate dated assessments/mutation entries; original wording note and post-issuance clarification can coexist. | Supports more accurate copy based on what the site already offers. Not every mutation provides complete public old/new prose. | **RETAIN existing mechanisms; no new record correction in A04.** |

### Concrete exceptions and provenance
- [FR-AM-0005](https://faultlinewatch.com/the-record/fr-am-0005/) and [its Institutional Changelog entry](https://faultlinewatch.com/institutional-changelog/) record a bounded 2026-09-20 correction of IN-001 through IN-006 descriptions, sources and associated dependencies. Current assessment history retains prior AS-001/AS-002. This is a record-field repair, not an append-only instance snapshot.
- [FR-BT-0004](https://faultlinewatch.com/the-record/fr-bt-0004/) M-008 documents edited IN-003, RM-001, AT-001, OQ-001 and evidence references while preserving historical assessments. Its mutation `from/to` contains a concise prior/current characterisation rather than the exact whole pre-edit field text.
- [FR-QE-0003](https://faultlinewatch.com/the-record/fr-qe-0003/) July 8 mutation records retirement/removal of pilot `experimentalAnnotations` scaffolding after migration to `realizationNotes`, not deletion of an assessment. This does not contradict a genuine immutable assessment history, but cautions against saying *no record field is ever deleted*.
- [FIP-A03 source-preserving example](https://faultlinewatch.com/the-record/fr-am-0001/): current VS-04 appended AS-006 while historical VS-05 assessments remain, plus a separately visible dated administrative qualification. Distinguish such governed overlays from in-place source-fidelity repairs.

## 3. Bounded recommended public copy — PROPOSALS, NOT IMPLEMENTED

### P1 — Homepage (high value, lowest scope)
Replace the two sentences in `src/pages/Home.jsx` `home-trust-card` with:

> Each record tracks a scientific or technology claim over time. Assessments are added without overwriting earlier judgements. Evidence descriptions and other record details may be corrected, with dated changes recorded in the Mutation Log.

This preserves the distinctive public-history promise **without** claiming every record field is immutable. It does not promise complete prior-text diffs on-site.

### P2 — Methodology glossary (high value, tightly targeted)
Retain `Assessment` as written. Replace only the `Mutation Log` definition in `ARCHITECTURE_INDEX`:

> A dated, append-only log of changes to a Frontier Record, including corrections to existing fields. Entries identify what changed; some refer to supporting review receipts. The log does not necessarily reproduce every earlier field value in full.

Optional accompanying `Frontier Record` glossary clarification (separate explicit review): replace `Records are permanent, citable, and append-only` with `Records retain their assessment and change histories; governed corrections to other fields are logged.` Do **not** change FCIF semantics via an informal page copy repair.

### P3 — Institutional Changelog introduction (medium priority)
Replace only the two-sentence opening:

> The recorded mutation entries for every Frontier Record, presented in chronological order. This page preserves the dated history of logged changes, including corrections to existing fields. An entry may summarise a correction rather than reproduce the complete earlier wording.

This is a description of existing presentation, not a claim that every historical content revision is recoverable from page text alone.

### P4 — About page (optional secondary)
If the first three copy updates are accepted, align the unqualified shorthand in `The Record` section:

> Each record has a permanent identifier and preserves an assessment history and dated mutation log. Corrections to evidence descriptions or other fields are recorded rather than treated as new scientific evidence.

Preserve its surrounding purpose/origins copy unchanged. No need to change `Welcome`'s precise assessment-history statement.

### P5 — Full public diffs (separate, NOT an A04 quick fix)
Claude proposed publication of prior-value diffs. This is a **separate design/data provenance undertaking** requiring an inventory of which historical values survive in receipts/Git, stable version-to-version attribution, handling of missing legacy baselines and rules for when public source text is redacted or corrected. It is **not proven low effort**, and should not be made a condition of these bounded public-language corrections. Candidate for a separate later review, not authorised here.

## 4. Evidence limits and test plan for any future authorised implementation

- **Scope:** public copy only, ideally Home, Methodology glossary, Institutional Changelog intro, optionally About. Do not alter FCIF's authoritative text, record data, `assessments[]`, mutation entries, evidence instances, stage/status or MCP projections.
- **Correct semantics:** assessments preserve historical judgements; other data fields may receive logged corrections; mutation entries reflect change events, not necessarily verbatim snapshots of whole prior fields.
- **Automated checks:** test exact copy presence on source+prerender, absence of `only ever added to, never rewritten` across homepage, retention of the Assessment/Welcome qualification, no unrelated page edits; `npm test`, `npm run validate:all`, lint, build/prerender, Worker typecheck.
- **Live checks:** after separately authorised CI/merge, verify public Home, Methodology, Institutional Changelog (and About if changed) against the accepted text. Confirm old record sources and MCP remain unchanged. Verify pagination, completeness and ordering claims only if retaining unequivocal `every entry` language.
- **Governance:** implementation requires separate operator approval; proposed text is editorial clarification, not authority to rewrite evidence. Original F3-03 `High` severity is not automatically ratified; independently observed homepage risk is material but copy-bounded.
- **Dependencies:** FIP-A02 historical `date`/`recordedDate` MCP parity is still explicitly deferred; not conflated with A04. A03 acceptance remains intact. Distinct A05 audit severity recount and B02 right-of-response policy stay outside A04.

## 5. Review disposition and one next decision

**REVIEW COMPLETE — DECISION REQUIRED.** Recommend **ADOPT** P1 homepage and P2 Methodology as a bounded copy-only repair; **ADAPT** P3 Changelog (retain only verifiable completeness wording); **OPTIONAL** P4 About consistency; **DEFER** P5 full prior-value diffs for separate provenance design. **RETAIN** Welcome's assessment-specific statement.

**Next single action:** operator decide whether to authorise a copy-only implementation proposal for P1/P2/P3 (and decide whether P4 is in the same small package), without authorising code edits, CI PR, merge or deployment. If approved, prepare exact-source anchored patch and a limited validation plan. The programme then advances to FIP-A05 after A04 is separately implemented/accepted or otherwise dispositioned.
