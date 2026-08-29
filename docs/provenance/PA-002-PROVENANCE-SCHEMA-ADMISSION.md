# PA-002 — Provenance Schema Admission

Status: ADMITTED
Date: 2026-08-29
Predecessor: PA-001 — Evidence Instance Provenance Pilot (PASS)

## Canonical rule

Structured evidence provenance is admitted to the Frontier Record architecture as optional-on-legacy, forward-required `instance.sources[]`.

```js
sources: [
  {
    citation: string, // required
    url?: string,
    doi?: string,
    locator?: string,
    quote?: string,
  }
]
```

If `sources` is present it must contain at least one meaningful source object. `citation` is mandatory; every optional field must be non-empty when present. DOI values are stored as identifiers rather than resolver URLs. Quotes are optional exact verification aids and are limited by validation to 50 words.

Legacy absence means only that structured provenance has not yet been recorded. It does not mean the evidence lacks a source. No corpus-wide backfill obligation is created.

## Governance

- New evidence instances authored after PA-002 are expected to carry `sources[]` at admission.
- Retrospective addition without changing evidentiary meaning is `provenance_enriched` and is recorded in the mutation log.
- Incorrect published provenance is an Editorial Correction.
- Provenance enrichment alone does not trigger reassessment.

## Derivation

Website and MCP derive from the same canonical `sources[]`. The MCP full-record view spreads the canonical record object and therefore exposes the field without a second provenance model. No MCP-only provenance semantics are admitted.

## Rejected complexity

Not admitted: extraction status, source hashes, truncation metadata, OCR or extraction confidence, normalization warnings, source trust scores, automated verification flags, per-sentence attribution, source-type taxonomy, generic identifier framework, mandatory archive snapshots, or a top-level source registry.

## PA-002 enrichment set

- FR-AI-0001 / IN-005
- FR-AI-0001 / IN-006
- FR-QE-0007 / IN-001
- FR-QE-0007 / IN-002
- FR-QE-0004 / IN-008

The existing evidentiary prose and assessments are unchanged.
