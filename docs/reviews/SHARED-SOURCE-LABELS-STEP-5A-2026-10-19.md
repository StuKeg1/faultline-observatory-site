# Step 5A — shared-source labels

Date: 19 October 2026. Base: `fd736d648f32aae6830fb419ea3d67f9f694a284`. Operator authorised the five-record scope after reviewing the source/date audit.

## Result

Eight explicit relationships across five records yield sixteen reciprocal notices in evidence lists. Existing entries and their counts remain; the notices explain overlap at source level and do not deduplicate experiments or assign new independence judgments. Each record receives one appended editorial metadata mutation. Exact previous/new relationships and whole-record baseline hashes are in the companion JSON.

| Record | Stored relationship edges | Source role checked and wording boundary |
| --- | --- | --- |
| QE-0003 | IN-006 → IN-005 | Both cite [Google's Willow paper](https://www.nature.com/articles/s41586-024-08449-y), Nature 638 (2025), online 9 December 2024. They discuss the same published result at different record-review points. Label does not establish an additional experiment. IN-001–IN-004 retain their pending-correction notices. |
| QE-0006 | IN-005 → IN-002 | Both cite [Kim et al., Nature 2023](https://www.nature.com/articles/s41586-023-06096-3) and [Tindall et al., arXiv:2306.14887](https://arxiv.org/abs/2306.14887). The primary experiment and its classical simulation are distinct sources reused in two entries; not two independent quantum experiments. Both DOI and URL must remain present in each entry. |
| QE-0008 | IN-002 → IN-005; IN-003 → IN-005 | [Google 2023](https://www.nature.com/articles/s41586-022-05434-1) and the Willow paper each report surface-code scaling and separately discuss repetition-code error floors. Sharing a publication does not make these the same measurement. IN-005 receives two incoming notices; no new relationship-array schema is needed. |
| AM-0001 | IN-001 → IN-002; IN-003 → IN-002 | The retained [DOE 1989 chronology appendix](https://files.ncas.org/erab/apx2a.htm) covers the initial announcement, early positive reports and later laboratory failures. It describes distinct laboratories and events. Shared reporting alone does not determine experimental independence. |
| AM-0001 | IN-006 → IN-005 | The [DOE 2004 review text](https://en.wikisource.org/wiki/Report_of_the_Review_of_Low_Energy_Nuclear_Reactions), in its existing transcription, supplies research-continuity context and the review conclusions. These are two uses of a review report, not two added experiments. No claim is made that the transcription independently verifies the review. |
| BT-0006 | IN-004 → IN-001 | [Fletcher, Diggines and Elani, Nature Chemistry 18 (2026)](https://www.nature.com/articles/s41557-025-02019-z) is a Perspective: modular construction and systems-integration analysis are different aspects of that synthesis, not additional independent experiments. Publisher metadata/abstract and the authors' Imperial publication record confirm identity and role; no full-text experiment re-audit is claimed. |

Verification used the named primary papers, authors' publication metadata and the existing DOE report copies. Publisher access was intermittent; indexed publisher metadata was used where a direct page failed. The Willow abstract explicitly separates surface-code memories from high-distance repetition codes; the 2023 source is likewise checked for those distinct roles. The notices make no new quantitative performance claims or source-policy claims.

## Implementation and safeguards

Reuse `relationship.type = shared_publication` and the existing component. Add `sharedSourceUrl` as an exact URL alternative/additional guard to `sharedSourceDoi`. When both selectors are supplied, both must match in both entries. No title-, author-, year- or narrative-based automatic matching. A missing shared source suppresses both directions. Each new relationship has explicit role-specific forward/reverse wording; the generic fallback no longer asserts that all underlying experiments are non-independent.

No source citations, descriptions, vectors, evidence counts, assessments, states, stages, dates, open questions, review markers or old mutations are rewritten. Historical hash tests remove only the receipted later relationship metadata at earlier checkpoints, rather than updating frozen scientific-content hashes. A full-record reconstruction removes each new mutation and relationship and verifies the original baseline hash.

## Validation

Tests cover reciprocal destinations, two incoming source relationships, DOI and URL checks on both ends, removal of either selector from either entry, the DOE distinction, preserved QE-0003 pending corrections and whole-record preservation. Application/build/render checks are recorded below after completion. The separate three-record date pilot is independent and adds no relationships to these five records. No deployment is claimed by this receipt.

Passed on Node 22.23.3 / npm 10.9.9: all 203 tests against the built output; all canonical validators; clean production build/prerender of 62 pages; lint with zero errors and the existing Fast Refresh warning. HTML inspection verifies all sixteen role-specific notices and reciprocal fragment destinations across five records. Dependency graph unchanged.
