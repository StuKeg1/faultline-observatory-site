# Latest-update labels — Batch 1

19 October 2026. Direct-session authority: Stuart approved the calibrated Batch 1 scope and instructed execution. Deliverable: a tested, reviewable PR; merge and deployment require a separate instruction.

## Scope and baseline

Addresses corpus reading audit R01. Base: `283395c526547bebf6f36c3118732638f1d7c37a`, whose changes since audit/test baseline `208b9d2c648cb74546a929afc78997272eeffd28` are analytics only.

The latest-update summary previously considered only mutation classifications. Consequently, assessments appended under provenance/editorial mutations could disappear from the summary even when dated on its latest day.

## Implementation manifest

- `src/data/recordReading.js`: retain the latest dated mutation day; also include assessments whose canonical recorded date matches it. Use `assessmentChangeLabel` against the existing governed display history, including its existing chronological reading adjustment. Do not substitute reconstructed historical dates when selecting same-day assessments.
- A matching dated assessment replaces the generic assessment-mutation label. A Set deduplicates equivalent labels, including repeated references to one assessment. Different assessment events on the same day can legitimately produce different labels.
- Preserve `Record opened` without adding `Initial assessment` for the opening assessment. A subsequent assessment on the opening day remains visible. Preserve legacy mutation fallbacks and no-dated-update behavior.
- `src/data/recordReading.test.js`: real corpus regressions; duplicate-reference and opening-day coverage; existing correction-label expectation updated to the shared history wording.

## Corpus-wide outcome

Five of 32 current summaries change; every summary date is unchanged:

| Record | Day | Result |
| --- | --- | --- |
| QE-0004 | 2026-09-14 | Adds assessment activity with both axes unchanged; retains editorial, source-review and evidence labels. |
| AM-0004 | 2026-09-19 | Adds the existing governed-history transition VS-03 → VS-02, Pressure State unchanged. |
| BT-0003 | 2026-09-25 | Adds the existing governed-history transition VS-04 → VS-03 and the following unchanged-axes assessment; retains editorial/evidence labels. |
| QE-0008 | 2026-10-12 | Replaces generic assessment wording with the unchanged-axes wording. |
| AI-0002 | 2026-10-12 | Replaces generic assessment wording with the unchanged-axes wording. |

AM-0004 and BT-0003 labels expose differences already present between ratified historical interpretations and later assessments. This batch neither reconciles those differences nor endorses a stage decision. The separate July-stage decision aid remains necessary.

All four assigned newcomer records (AI-0008, AM-0007, AI-0009, BT-0005) retain their current latest-update summaries. AI-0009 remains editorial-only. No test-kit file or assignment changes; the earlier comparison remains closed. Any eventual deployment must still be logged under the active test's version-check protocol.

## Explicit exclusions

No changes to canonical record content, dates, assessments, sources, evidence entries, stages, historical overlays, challenges, mutation logs, mutation classification, activity-feed qualification, components, CSS or newcomer materials. No parsing of narrative notes. No work on later audit batches. No merge or deployment.

## Validation

- Node 22.23.3 / npm 10.9.9 (repository-compatible runtime).
- Focused reading tests: 18/18 pass.
- Full test suite: 194/194 pass before build and again against built output.
- Lint passes with one existing Fast Refresh warning in `MutationHighlightContext.jsx`; no errors.
- Full `npm run build` passes, including dependency/canonical validation and prerendering 62 pages. Existing bundle-size advisory remains.
- Extracted the built pages' `Updates recorded on this date` lists and verified exact labels for QE-0004, AM-0004, BT-0003 and AI-0009.
- Compared all 32 summaries with the base helper: only the five records above change. Canonical-object immutability is covered by tests. `git diff --check` passes.

An initial build attempt used the host npm 11 and stopped at the engine guard. The successful build used the required npm 10; no dependency or engine-policy changes were made.

## Rollback

Revert this focused PR. Its summary is derived, so rollback requires no content migration or assessment reversal.
