# PA-004 — Provenance-in-Review Operational Trial

Status: EXECUTED — pending CI / deployment verification
Date: 2026-08-29
Trial record: FR-AM-0006 — Solid-State Batteries — Commercial Viability for Electric Vehicles

## Purpose

Test whether structured provenance fits naturally into an ordinary Frontier Record review without turning the review into a provenance-backfill exercise.

## Review result

The review found one new evidence event worth admission: QuantumScape's 2026 Eagle Line automated pilot-line ramp, customer sample shipments, and the July 2026 PowerCo milestone-based scale-up programme. Primary filings simultaneously confirm that QuantumScape remains pre-revenue and that commercial manufacture still requires improvements in quality, consistency, reliability, throughput, safety, and cost.

IN-007 was therefore admitted as genuine manufacturing-scale-up progress that does not yet satisfy the record's commercial-viability conjunction. AS-003 sustains ESCALATING / VS-03.

## Provenance behaviour tested

IN-007 was authored with sources[] at admission rather than sourced in a second pass. The source material was already open and necessary for the evidence judgment, so the additional provenance work was limited to preserving citation, URL, and useful locator information.

## Opportunistic legacy enrichment

No legacy instance was enriched in this trial. While reviewing IN-006, an attempted quick provenance reconstruction exposed a possible mismatch between the record's wording about an October 2025 Japanese government production approval and Toyota's readily located official METI certification dated September 2024. Under the pilot boundary, that was not silently converted into provenance or expanded into a historical reconstruction exercise. It is retained as a separate editorial-correction candidate requiring its own bounded verification.

This is a useful outcome: opportunistic enrichment is permitted only when attribution is readily and confidently established. The pilot did not reward filling sources[] for its own sake.

## Operational finding

PASS at workflow level. Provenance capture for genuinely new evidence was low-friction because the sources were already required for review. The legacy rule also behaved correctly: uncertainty stopped enrichment rather than creating pressure to backfill.

## Boundaries retained

- no corpus-wide provenance backfill;
- no lowering of the evidence-admission threshold;
- no source graph, source scoring, extraction metadata, or MCP-specific provenance;
- no silent correction of a potentially mismatched legacy source claim inside this trial.

## Closure gates

PA-004 closes only after repository validation, build/tests, exact production deployment verification, and confirmation that the public Frontier Record renders IN-007 provenance from the canonical sources[] field.
