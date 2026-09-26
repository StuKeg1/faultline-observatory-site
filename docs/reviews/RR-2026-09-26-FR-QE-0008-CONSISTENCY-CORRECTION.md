# FR-QE-0008 — bounded RM-001 / AT-001 consistency correction

Date: 2026-09-26  
Origin: follow-up to [Helios Normal Record Review](RR-2026-09-26-FR-QE-0008-HELIX.md).

## Correction

- **RM-001:** replace the claim that no floor has been observed. IN-005 records measured high-distance repetition-code floors, including a rare-event floor in the earlier experiment and an apparent correlated-burst floor on Willow-generation hardware. These findings do not establish failure of the distance-7 surface code or a universal floor. State threshold noise assumptions with scope rather than saying the theorem simply assumes all errors are independent.
- **AT-001:** retain distance 9 and 11 as useful surface-code tests beyond the distance-7 evidence. Remove their automatic-confirmation and universal-practicality language. A resolution review must weigh reproducible scaling, correlated errors over long runtimes, logical operations and resource overhead at relevant workloads. Other code families require their own comparable metrics.
- **M-013:** append a dated trace of the editorial consistency correction. Instances IN-001–IN-007, assessments AS-001–AS-003, current RESOLVING / VS-04, claim, open questions and status are unchanged.

## Evidence and limits

The record's IN-005 sources are Google Quantum AI, *Nature* 614 (2023), doi:10.1038/s41586-022-05434-1, and *Nature* 638 (2025), doi:10.1038/s41586-024-08449-y. AS-002 and AS-003 already qualify the larger-distance conclusion. IN-007 does not supply a multi-distance suppression curve. This correction fixes present-tense wording without a new evidential or status judgment.

## Verification

Review the exact two description diffs and M-013; confirm no change to instances or assessments, current AS-003, corpus validation, lint, tests and build. Publication follows PR merge.
