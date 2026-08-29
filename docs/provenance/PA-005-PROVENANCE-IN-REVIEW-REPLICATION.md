# PA-005 — Provenance-in-Review Replication Trial

**Target:** FR-AI-0006 — Scaling Mechanism Coherence — Continuity Across Model Sizes  
**Date:** 2026-08-29  
**Status:** EXECUTED — pending CI / deployment verification

## Boundary
Normal Record Review first. Capture structured provenance for newly admitted evidence. Enrich legacy provenance only when attribution is immediate and confident. No systematic backfill. Any discrepancy discovered becomes a separate bounded correction candidate.

## Review result
One new evidence instance, IN-006, is admitted from Yang et al. (ICML 2025), which identifies an emergent three-stage symbolic mechanism for abstract reasoning and reports cross-model/cross-scale analyses. The evidence materially contests a simple continuity reading while leaving the claim unresolved because mechanism identity remains abstraction-dependent. AS-002 therefore retains FRAGMENTING / VS-03.

## Provenance result
IN-006 receives canonical sources[] at admission. Provenance capture was part of evidence handling rather than a post-processing pass.

## Opportunistic legacy enrichment
IN-001 was tested because its Olsson et al. source is immediately identifiable. Enrichment was deliberately NOT applied. The source describes strong causal evidence for small attention-only models but only correlational/indirect evidence for larger models, whereas the legacy instance says the same circuit is causally responsible across a range extending to large models. This is a material wording/provenance discrepancy and is reserved for a separate bounded correction investigation.

## Operational comparison with PA-004
PA-005 replicates both central PA-004 observations: provenance for new evidence is low-friction when captured during review, and attempting confident legacy enrichment can expose hidden corpus-quality issues. The second finding is now replicated across two programmes, but no corpus-wide backfill is authorised.

## Closure gates
- New evidence admitted only if materially relevant.
- New evidence has canonical sources[].
- No forced legacy backfill.
- Discrepancy isolated rather than silently repaired.
- Canonical validation, tests, build and deployment must pass before closure.
