# FIP-A05 — Legacy provenance audit severity-and-denominator recount
**Opened:** 2026-11-16  
**Status:** IN REVIEW — evidence-only, initial corpus inventory complete; **historical first-cycle severity recount not complete**  
**Source audit:** Claude F3-02, Step 3 and Step 8 CH-06; source https://docs.google.com/document/d/1AHmt-Snc4RSHaDzbT41feH6Kdp7FnAdUrYf9nuk40lU/edit  
**Authority:** Operator authorised beginning evidence-only review, **not** edits to record data, source assessments, website, FCIF, or publication of any error rate.  
**Reference:** GitHub canonical `main` after PR #257 and FIP-A04 acceptance, at opening on 2026-11-16.

## Research question and audit claim

Claude Step 3 alleged a substantial fraction of the first round of LPR-001 record reviews identified legacy evidence descriptions or attributions needing repair. Step 8 narrowed this to **26 of 32 (81%)** with at least one correction or withdrawal, or **24 of 32 (75%)** excluding two minor date/count corrections. Those are **Claude's historical recount claims, not yet independently ratified**; Step 8 says its changelog recount was based on previously fetched text, not a fresh full changelog read. A05 must independently reconstruct this denominator and each numerator from dated original review/mutation receipts, not simply repeat its estimate.

**No correction rate is authorised for public publication by this review.**

## Initial independently verified corpus baseline

Direct canonical `src/data/corpus.js` index enumerates **32 records** across **four programmes**: QE 8, AI 9, AM 8, BT 7. All 32 individual current record source modules were read from GitHub `main`.

The *latest* `provenanceOutcome` fields classify the current record review checkpoint as follows:

| Latest current metadata outcome | Count | Meaning | Not the same as |
| --- | ---: | --- | --- |
| `verified / not_required` | **23** | Latest governed provenance review records no current repair requirement | "The record had no corrections in its first review" |
| `discrepancies_corrected / completed` | **8** | Latest governed marker reports corrected discrepancies | "The record was one of eight originally corrected" |
| `discrepancies_found / pending` | **1** | Latest governed review still has a pending discrepancy | "All earlier changes were never made" |
| **Total** | **32** | Each record appears exactly once | Historical correction percentage |

**Current marker caution:** `lastProvenanceReview`, `provenanceReviewId`, `provenanceOutcome` and `provenanceRepairStatus` are designed as current *last review* fields. Subsequent verification resets an originally corrected record to `verified / not_required` (e.g. FR-QE-0005 first-review D17 correction, later D80 verified); they cannot independently recover first-cycle findings.

## 32-record current marker ledger (reproducible from GitHub source)

| Record | Earliest identified LPR cycle | Latest LPR marker | Latest current outcome | Current repair status |
| --- | --- | --- | --- | --- |
| FR-QE-0001 | D13 | D63 | verified | not_required |
| FR-QE-0002 | D14 | D73 | verified | not_required |
| FR-QE-0003 | D15 | D64 | discrepancies_corrected | completed |
| FR-QE-0004 | D16 | D65 | discrepancies_corrected | completed |
| FR-QE-0005 | D17 | D80 | verified | not_required |
| FR-QE-0006 | D18 | D49 | verified | not_required |
| FR-QE-0007 | D19 | D50 | discrepancies_corrected | completed |
| FR-QE-0008 | D20 | D56 | verified | not_required |
| FR-AI-0001 | D02 | D61 | verified | not_required |
| FR-AI-0002 | D01 | D60 | verified | not_required |
| FR-AI-0003 | D03 | D62 | verified | not_required |
| FR-AI-0004 | D04 | D69 | verified | not_required |
| FR-AI-0005 | D05 | D71 | verified | not_required |
| FR-AI-0006 | D06 | D70 | verified | not_required |
| FR-AI-0007 | D07 | D72 | verified | not_required |
| FR-AI-0008 | D08 | D74 | discrepancies_corrected | completed |
| FR-AI-0009 | D09 | D76 | discrepancies_corrected | completed |
| FR-AM-0001 | D10 | D77 | discrepancies_corrected | completed |
| FR-AM-0002 | D11 | D78 | verified | not_required |
| FR-AM-0003 | D12 | D79 | verified | not_required |
| FR-AM-0004 | D21 | D66 | discrepancies_corrected | completed |
| FR-AM-0005 | D22 | D67 | discrepancies_found | pending |
| FR-AM-0006 | D23 | D51 | verified | not_required |
| FR-AM-0007 | D24 | D52 | verified | not_required |
| FR-AM-0008 | D42 | D75 | verified | not_required |
| FR-BT-0001 | D25 | D53 | verified | not_required |
| FR-BT-0002 | D26 | D54 | verified | not_required |
| FR-BT-0003 | D27 | D55 | verified | not_required |
| FR-BT-0004 | D28 | D68 | discrepancies_corrected | completed |
| FR-BT-0005 | D29 | D57 | verified | not_required |
| FR-BT-0006 | D30 | D58 | verified | not_required |
| FR-BT-0007 | D31 | D59 | verified | not_required |

"Earliest identified LPR" above means first LPR-001-D number referenced in that record's reviewed mutation history; it is not asserted as a homogeneous **first-cycle eligible cohort** without examining source issue dates and admission timing (notably FR-AM-0008 first identified at D42). The ledger is a *record source index*, not a severity verdict.

## Concrete counterexamples to the shortcut of counting only latest review outcomes

1. [FR-AI-0002 D01](../../provenance/LPR-001-D01-FR-AI-0002-CORRECTION.md) first review explicitly corrected 3 of 7 evidence descriptions: Peng et al.'s task-success claim wrongly extended to code quality; Noy–Zhang speed reduction restated from 37% to the primary source's 40% with sample size 453; Omiye et al.'s empirical racial-bias study mislabelled a systematic review. **First-cycle material source-representation errors existed**, yet the record's later latest marker is `verified / not_required`.
2. [FR-QE-0005](../../src/data/records/FR-QE-0005.js) has an original D17 `provenance_corrected` mutation with `from: "LPR-001-D17 discrepancies"`, `to: "PASS-AFTER-CORRECTION"`, correcting IN-001..IN-006 and dependent narrative. Latest D80 is verified/not_required; first-cycle correction is not disproven.
3. [FR-QE-0001](../../src/data/records/FR-QE-0001.js) D13 original review states all six instances were source-faithful and provenance was enriched; later D37 review found an IN-004 discrepancy. A05 must **not retroactively count a second-cycle finding as a first-cycle failure**.
4. [FR-QE-0003](../../src/data/records/FR-QE-0003.js) D15 found four material representation discrepancies in IN-001..IN-004 pending bounded correction. Later second-cycle marker D64 is `discrepancies_corrected/completed`; status must be allocated to the appropriate issue date and repair decision separately.
5. [FR-BT-0004](../../src/data/records/FR-BT-0004.js) D68 corrections distinguish foundational ctDNA claims, superseded EU regulatory state and NHS-Galleri screen-detected vs total cancer denominators. This is a **later correction event**, not proof of which first-cycle D28 category it belongs to.
6. The [evidence-status retained dispositions](../../../reviews/EVIDENCE-STATUS-BATCH-3-2026-10-19.md) distinguish unresolved, excluded, unverified and withdrawn legacy *attributions*. These are **not** paper retractions, and a later passing record-level review does not erase explicit entry-level exclusions.

## Required denominator design — to be completed before a historical rate

Report **separately**, with dates and per-record evidence:
- **D0: Current corpus** = 32. This denominator is verified but risks cohort mixing.
- **D1: First-cycle eligible cohort** = records existing at the chosen programme initiation date and actually first-reviewed within the defined cycle; determine which records were admitted later (FR-AM-0008/D42 and any others). Do **not** assume D1 = D0.
- **D2: First-cycle *reviewed* records**, counted once per record, not once per mutation, instance or assessment. Give exact sample window and D identifiers.
- **N1: Any first-cycle discrepancy** — source-fidelity, attribution, chronology, material interpretive correction or minor metadata correction established by first-review authority. Exclude pure provenance enrichment and clean verifications.
- **N2: Material first-cycle discrepancy** — alters represented result/metric, evidence equivalence, attribution, patient/cohort denominator, date that changes interpretation, or claim warrant.
- **N3: Minor first-cycle discrepancy** — typographic, citation/DOI normalization, date/count metadata with no meaningful source-representation change. Distinguish independent material errors within the same record.
- **N4: Confirmed post-first-cycle repair** — source correction was actually implemented and verified; keep separate from initially *detected* discrepancies.
- **N5: Pending/unresolved** — identified but not yet repaired; include in N1 but do not call corrected.

A record can have more than one field issue but contributes only once to a per-record rate. Do not count later Normal Record Review admissions or mere source-enrichment as correction. Do not take the existence of any `reference_corrected` mutation as proof of material error: inspect the exact `from`/`to`/`note` and original review receipt.

## Publishability and severity rules (provisional, for explicit review)

| Severity | Examples | Publication treatment |
| --- | --- | --- |
| Material | Unsupported scientific result, false attribution, altered study denominator, conflated trial, material comparator omission | Candidate for anonymised aggregate with denominator and provenance, after every included case classified and reviewed |
| Minor | Correctable source title/DOI spelling, metadata date/count that does not alter scientific inference | Separate count, never combined with "materially inaccurate" |
| Enrichment only | Adding valid `sources[]`, citations or locator without scientific wording change | Not a correction, not an error numerator |
| Pending | Found but no approved correction applied | Identified discrepancy, not "corrected" |
| Post-first-cycle | Second-cycle or later source-level discrepancy | Different window; do not backdate into first-cycle numerator |

**Publication status:** HOLD. The provisional historical fractions 26/32 and 24/32 must remain attributed to Claude's audit and labelled *unverified* until the D0/D1/D2 cohort, per-record severity entries and completed/pending distinction are independently checked.

## Work remaining and next action

**Initial review opened and current 32-record source/metadata inventory completed. Historical first-cycle N1/N2/N3 severity recount remains OPEN.** The exact chronological first-review receipt and mutation text for each D01..D31 and D42 must now be transcribed into a 32-row event-level classification ledger, with issue-level locators; compare their original cohort timing and count N1/N2/N3 independently. Then reconcile numerator and denominator against Claude's 26/32 and 24/32, including its claimed two minor-only cases.

**Exactly one next recommended action:** perform that **event-level first-cycle classification pass** and publish an evidence-only follow-up annex with each record's reviewed date, initial status, identified issue IDs/type/severity, whether repaired, primary source locator and cohort eligibility. **No canonical/public site edit, percentage publication or new remediation authority is granted.**
