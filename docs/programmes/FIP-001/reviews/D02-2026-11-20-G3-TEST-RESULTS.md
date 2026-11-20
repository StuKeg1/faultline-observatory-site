# FIP-D02 — Non-public citation prototype: source-verified test results
Date: 2026-11-20
Status: **G3 TEXT-ONLY PROTOTYPE TEST EXECUTED — NOT PUBLISHED / NOT ACCEPTED AS A PUBLIC STANDARD**
Authority: Operator explicitly said "yes let us test it" after G2 design acceptance. This authorises bounded noncanonical prototype testing against actual source records, not public implementation, merge, FCIF/corpus edits or UI.
Source snapshot: GitHub repository `StuKeg1/faultline-observatory-site`, canonical `main` as read 2026-11-20. Sources: `src/data/records/FR-QE-0001.js`, `FR-QE-0003.js`, `FR-BT-0004.js`, `FR-AI-0009.js`, `src/data/verificationStageReviews.js`, `src/data/derive.js`, `src/pages/FrontierRecord.jsx`. **This is a source/format test, not a fresh HTTP/browser/copy-button or screen-reader test.**

## Fixed rule under test
Record: `Faultline Observatory. [claim.shortLabel]. Frontier Record FR-XXXX-NNNN. https://faultlinewatch.com/the-record/fr-xx-nnnn/`
Assessment: `Faultline Observatory. [claim.shortLabel]. FR-XXXX-NNNN, AS-NNN (assessed [displayed date or qualified uncertainty]). [permanent record URL]`
Evidence: `Faultline Observatory. [claim.shortLabel]. FR-XXXX-NNNN, IN-NNN. [record URL]#evidence-IN-NNN. [primary-source citation separately where relied on]`
`Accessed` is only the day the citing author actually retrieved the public page. It is omitted from the examples below because only repository source content was verified; **no unverified public retrieval date is fabricated**.

## Samples and outcomes

### T01 — stable record-level citation: PASS (source)
**Observed:** FR-QE-0001 has fixed ID and title; `getRecordUrl(record)` derives the canonical route.
**Candidate citation:**
> Faultline Observatory. *Google Quantum Advantage (Sycamore) — Computational Supremacy via Random Circuit Sampling.* Frontier Record **FR-QE-0001**. https://faultlinewatch.com/the-record/fr-qe-0001/
**Test:** Title and FR-ID match `FR-QE-0001.js`; URL matches `getRecordUrl`. No assessment date implied.
**Limitation:** This describes a living record, not a frozen historical version.

### T02 — specific assessment despite later mutations: PASS (source)
**Observed:** FR-QE-0001 `AS-002`, `date=2026-07-22`, `stabilising / VS-04`; later logged mutation `M-012`, dated `2026-10-27`. `AS-001` is a historically qualified S4 reconstruction; do not conflate it with AS-002.
**Candidate citation:**
> Faultline Observatory. *Google Quantum Advantage (Sycamore) — Computational Supremacy via Random Circuit Sampling.* **FR-QE-0001, AS-002** (assessed **22 July 2026**). https://faultlinewatch.com/the-record/fr-qe-0001/
**Test:** AS-ID and assessed date retain historical assessment identity despite later mutation. The October date must **not** replace the July assessment date.
**Limitation:** The current page's copy may include subsequent corrections; the citation does not promise an immutable page snapshot.

### T03 — two assessments on the same date: PASS (source)
**Observed:** FR-BT-0004 contains **AS-004** (bounded corrections) and **AS-005** (separately admitted PATHFINDER 2 evidence), both dated `2026-11-01`.
**Candidate A:**
> Faultline Observatory. *Liquid Biopsy — Early Cancer Detection Before Conventional Diagnosis.* **FR-BT-0004, AS-004** (assessed **1 November 2026**; bounded correction). https://faultlinewatch.com/the-record/fr-bt-0004/
**Candidate B:**
> Faultline Observatory. *Liquid Biopsy — Early Cancer Detection Before Conventional Diagnosis.* **FR-BT-0004, AS-005** (assessed **1 November 2026**; PATHFINDER 2 review). https://faultlinewatch.com/the-record/fr-bt-0004/
**Test:** Distinct IDs separate two actions that would otherwise have identical author/title/date/URL. `AS-004` does **not** itself admit PATHFINDER 2; that is `AS-005`.
**Limitation:** Parenthetical descriptors are editorial disambiguators verified from summaries, not part of the canonical ID.

### T04 — LAD-001 legacy uncertainty: PASS **only with qualifier**
**Observed:** `FR-QE-0003.js` retains literal `AS-001.date = 2024-01-15`. `verificationStageReviews.js` independently overlays `HISTORICAL_EFFECTIVE_DATES` for `FR-QE-0003/AS-001`: `date = "date uncertain (legacy)"`, `precision = unknown`, and `recordedDate` retains the stored date. Review notes explicitly reject establishing an issue date from later Willow evidence.
**Candidate citation:**
> Faultline Observatory. *Fault-Tolerant Logical Qubits — Error Rate Scaling with Code Distance.* **FR-QE-0003, AS-001** (assessment date **uncertain — legacy record**; stored date: **2024-01-15**, **not verified as issuance date**). https://faultlinewatch.com/the-record/fr-qe-0003/
**Test:** A naive implementation displaying "assessed 15 January 2024" **FAILS**. The qualified prototype **PASSES** by using the public historical overlay semantics and labelling the stored literal separately.
**Limitation:** No replacement date should be inferred.

### T05 — evidence entry with structured primary source: PASS (source/anchor declaration)
**Observed:** FR-AI-0009 `IN-001` carries a structured source: Hafner et al., `Nature 640, 647–653 (2025)`, DOI `10.1038/s41586-025-08744-2`, and a primary URL. `FrontierRecord.jsx` assigns `id={\`evidence-${inst.id}\`}` to each entry.
**Candidate citation:**
> Faultline Observatory. *World Models — Physical Prediction and Transfer.* **FR-AI-0009, IN-001**. https://faultlinewatch.com/the-record/fr-ai-0009/#evidence-IN-001
>
> Underlying research: Hafner, D. et al. *Mastering diverse control tasks through world models.* *Nature* **640**, 647–653 (2025). https://doi.org/10.1038/s41586-025-08744-2
**Test:** ID, anchor construction and primary source match the record. Observatory's **partial/bounded interpretation of transfer** is not represented as the paper's own conclusion.
**Limitations:** HTTP fragment focus/scroll, closed evidence disclosure behavior and external DOI resolution were **not** browser tested.

### T06 — incomplete or multiple primary sources: PASS (rule), UI unresolved
**Observed:** FR-QE-0001 `IN-003` includes a legacy `sourceReference` covering Pan & Zhang (2021) and Pan, Chen & Zhang (2022), with two structured sources. The public evidence component renders all `sources[]` rather than assuming one primary work.
**Rule:** Cite **IN-ID** for the Observatory's recorded evidence entry; cite the specific underlying paper(s) actually used. Never choose only the first source automatically or synthesize absent DOI/URL.
**Test:** Rule handles multi-source instances without inventing source bibliographic metadata.
**Limitation:** No full citation generation software has been built, so this is a source-verified text rule, not executable export testing.

### T07 — assessment link and immutability: NOT IMPLEMENTED / KNOWN LIMITATION
**Observed:** `FrontierRecord.jsx` exposes an Assessment History section but no established unique `#assessment-AS-NNN` contract was verified. The current canonical page is living and permits subsequent non-assessment corrections.
**Decision:** Do **not** manufacture assessment-specific fragment URLs or promise immutable snapshot fidelity. A record URL + AS-ID is currently the honest format.

## Scorecard
| Test | Disposition |
|---|---|
| T01 stable record citation | PASS — canonical source |
| T02 assessment vs later mutation | PASS — canonical source |
| T03 two same-day assessments | PASS — canonical source |
| T04 legacy uncertainty | PASS with qualifier; naive literal-date form FAILS |
| T05 evidence and primary-source anchor declaration | PASS in source; live fragment untested |
| T06 multi-source metadata safety | PASS as textual rule; no generator |
| T07 immutable per-assessment link | NOT IMPLEMENTED; no invented URL |

## Decision
The **FR / AS / IN three-level citation grammar passes bounded source-level examples**, including two critical failure cases that a date-only citation would mishandle. The public record is dynamic, so precise claims about historical assessment content require citation by AS-ID and appropriate qualification. Do not style this as a fully tested public copy-and-cite feature.

**Recommendation:** Proceed to G4 operator review of these results, with CITE-01–04 design retained, CITE-05 public UI deferred, CITE-06 direct assessment anchors unimplemented, CITE-07 out of scope. No publication or merge automatically authorised.
