# Batch 4B / R08 — QE-0007 Sycamore wording alignment

19 October 2026. Operator authority: Stuart instructed execution of Batch 4 if still valid, with its two repairs reviewed separately. This receipt covers QE-0007 only. Base: `468020b3bbab25b1162ff22225bf4c1697db641b`.

## Separate review and applicability finding

QE-0007 IN-001 concerns the same Arute/Sycamore 2019 random-circuit-sampling comparison adjudicated in QE-0001. It currently calls quantum advantage genuine and demonstrated at publication. QE-0001's current operator-ratified AS-002, dated 22 July, instead distinguishes supported experimental task performance from an unresolved original practical-classical-infeasibility comparison; later counter-performance does not automatically prove original falsity.

Authority: QE-0001 AS-002, source ID `GOV-FR-QE-0001-2026-07-22`, including its provenance note. The retained `RR-2026-10-08-FR-QE-0001-SYCAMORE-2025.md` confirms that settled original-comparison boundary and keeps a later candidate at VERIFY FIRST without admission. This repair neither admits that candidate nor resumes its review.

The applicability is narrow: the same historical benchmark proposition occurs as a component of QE-0007's broader practical-advantage claim. It does not transfer QE-0001's Pressure State or stage to QE-0007, change the broader claim, or treat random-circuit sampling as an application. The inconsistency is therefore repairable by applying existing authority, without reopening QE-0001.

## Exact editorial correction

Replace the final interpretation in IN-001:

> For this record: the quantum advantage claim is genuine and was demonstrated at the time of publication; the practical relevance claim is not satisfied — random circuit sampling has no identified application where this speedup produces tangible benefit.

With:

> For this record, the settled interpretation in FR-QE-0001 distinguishes the supported experiment and task performance from the unresolved claim that the task was beyond practical classical reach at the original 2019 comparison point. Later classical work superseded the benchmark advantage without automatically proving that the time-indexed 2019 claim was false when made. Practical relevance remains unestablished: random circuit sampling has no identified application where this speedup produces tangible benefit.

Align the directly dependent vector reason from `partial--advantage-demonstrated-practical-relevance-absent` to `partial--original-comparison-unresolved-practical-relevance-absent`. The actual polarity remains Partial. Leaving the former reason intact would preserve the same contradiction in structured/MCP content after repairing the prose.

Append M-016, dated 19 October, as an editorial `reference_corrected` event linking to this receipt and the existing ruling. This is one coordinated correction of the interpretation and its dependent reason, not an independent scientific determination.

## Preservation boundary

QE-0001 is unchanged in every field and remains closed to this review. Its AS-002 and all other assessments remain intact. On QE-0007, preserve the earlier part of IN-001's description, title, citations, dates and Partial polarity; preserve all other evidence, counts, claims, mechanisms, lineage, questions, review markers, historical mutations and FRAGMENTING / VS-03 assessment history. No new primary source or evidence instance is admitted. No statement is made that the original experiment was false.

Independent before/after comparison across all 32 records confirms the only changes are QE-0007 IN-001's final interpretation, its vector reason and appended M-016.

## Validation and release boundary

- Full build, canonical validation and 62-page prerender pass; all 199 tests pass against built output.
- Lint has no errors; the existing unrelated Fast Refresh warning remains.
- Regression checks establish the governing AS-002/date, distinguish original uncertainty from later supersession, retain the Partial classification and QE-0007 AS-003, and verify QE-0001 remains unchanged.
- Existing scientific-content and provenance checks pass without replacing hashes or broadening their exclusions.
- `git diff --check` passes. No component, CSS, classifier, stage definition, MCP projection or newcomer material changes.

This is a separate reviewable PR from Batch 4A's administrative completion-context repair. No merge or production deployment is executed by this receipt.
