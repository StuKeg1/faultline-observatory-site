# Clinical continuity notices — Batch 2 / R03

19 October 2026. Direct-session authority: Stuart instructed execution of Batches 2 and 3 in the amended corpus-audit order. This is Batch 2 only, prepared as its own reviewable PR. Merge and deployment are not included in this execution.

Base: `191939de18ae6cff548472435372120a8a682f80`.

## What changes

Use the existing evidence relationship mechanism to expose continuity before an entry's expandable scientific description:

| Record | Existing reports | Explicit relationship |
| --- | --- | --- |
| BT-0004 | IN-003, IN-006, IN-007, IN-008 | Design/pending-results entry, conference results, primary randomized results and intervention-arm performance analysis concern one NHS-Galleri trial. |
| BT-0002 | IN-006, IN-007 | IND clearance and first dosing are successive milestones in the same ER-100 Phase 1 trial. |
| BT-0007 | IN-003, Wairagkar component of IN-004, IN-005 | The 2024 calibration, 2025 voice-synthesis and 2026 home-use reports include the same T15 participant. IN-004's Littlejohn component concerns BRAVO-3 and is not labelled as T15. |

Every notice links to an existing evidence fragment. Counts remain 8, 7 and 7 entries respectively; these are report counts, not deduplicated study or participant counts. No independence claim is inferred solely from a shared author or URL.

## Primary-source identity checks

Checked on 19 October, for continuity only; no new results admitted:

- NHS-Galleri design: [ASCO/JCO TPS6606](https://ascopubs.org/doi/10.1200/JCO.2022.40.16_suppl.TPS6606), identifies ISRCTN91431511. [ASCO/JCO LBA100](https://ascopubs.org/doi/10.1200/JCO.2026.44.17_suppl.LBA100) identifies NCT05611632. [NEJM primary results](https://www.nejm.org/doi/full/10.1056/NEJMoa2505723) identify both registrations. [Nature Medicine performance paper](https://www.nature.com/articles/s41591-026-04652-8), introduction and methods, explicitly identifies the same registrations and distinguishes its intervention-arm analysis from the primary results. The two registrations identify one trial, not two trials. Indexed publisher text was used where direct article retrieval was restricted.
- ER-100: the sponsor's [28 January IND announcement](https://www.lifebiosciences.com/life-biosciences-announces-fda-clearance-of-ind-application-for-er-100-in-optic-neuropathies/) and [9 June first-dosing announcement](https://www.lifebiosciences.com/life-biosciences-announces-first-patient-dosed-in-phase-1-trial-of-er-100-for-optic-neuropathies/) both identify NCT07290244. These establish the reported trial identity; they are not independent verification of efficacy. The later interim-results candidate held outside LPR remains outside this change.
- T15: the 2024 NEJM paper's [author-deposited Dryad data/README](https://datadryad.org/dataset/doi:10.5061/dryad.dncjsxm85) names its T15 files and links the exact NEJM paper. [Wairagkar 2025](https://www.nature.com/articles/s41586-025-09127-3) identifies T15 in acknowledgements and extended data; [author-deposited data](https://datadryad.org/dataset/doi:10.5061/dryad.2280gb64f) corroborate that identifier. [Card 2026](https://www.nature.com/articles/s41591-026-04414-6), Results/Overview, explicitly identifies T15 and traces the earlier work. [Littlejohn 2025](https://www.nature.com/articles/s41593-025-01905-6), indexed primary acknowledgement, identifies BRAVO-3 instead. No participant identity beyond the already published study codes is introduced.

## Implementation manifest

- Relationship objects added to BT-0004 IN-006/007/008; BT-0002 IN-007; BT-0007 IN-004/005. Existing entries and descriptions remain intact.
- BT-0007 IN-004 includes a source DOI anchor for the Wairagkar component and carefully qualified forward/reverse notes. The relationship is suppressed if that component's structured DOI disappears, preventing its scope from drifting to the whole bundle.
- `recordReading.js` respects explicit reverse notes for all supported relationship types. Existing default MASAI, transplant and shared-publication notices remain supported.
- Append metadata mutations: BT-0004 M-015; BT-0002 M-018; BT-0007 M-007. All are editorial `reference_corrected` events under the existing classifier, not reassessments or homepage-qualified scientific developments.
- Reading tests cover all trial links, both directions of partial participant overlap, source-anchor failure, unchanged entry counts and existing relationships.
- The historical provenance-receipt test removes only these specified later relationship annotations before hashing the frozen scientific content. It retains the original hashes; it does not waive the instance checks or accept replacement hashes.

## Explicit exclusions

No changes to evidence counts, titles, descriptions, source lists, assessments, Pressure States, stages, claims, dates, review outcomes, historical overlays, feed policy, components/CSS or newcomer materials. No source-link recovery, source-status work, new evidence admission or general shared-source rollout. The separately authorised Batch 3 has its own PR and receipt.

## Validation

- Node 22 / npm 10; full build, canonical validation and 62-page prerender pass.
- Full suite: 197 tests pass against built output; focused reading tests 20/20 pass.
- Lint passes with no errors; one existing unrelated Fast Refresh warning remains.
- Independent before/after comparison of all 32 records confirms only the six specified relationship objects and three appended mutations changed. All previous mutations and every assessment compare identically.
- Built HTML checks verify notices on all nine relevant list entries, valid evidence-fragment destinations, qualified BRAVO-3/T15 wording in both directions, and placement outside the inner expandable descriptions. Notices are text, not color-only indicators; existing native disclosures and focusable fragment targets remain in use.
- `git diff --check` passes. No merge or production deployment executed.

## Future maintenance

If a bundled source is removed or reinterpreted, review its relationship and both direction notices together. Same participant/trial does not mean identical endpoint, identical experiment or independent replication. A record-level reassessment remains a separate governed decision.
