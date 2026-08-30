# PA-003 — MCP Provenance Contract & Public Guidance Alignment

Status: EXECUTED — verified
Date: 2026-08-29
Predecessor: PA-002 — Provenance Schema Admission (ADMITTED)

## Purpose

Align the MCP technical contract, agent guidance, and public MCP Access guide with the structured evidence provenance admitted under PA-002.

PA-003 is an alignment operation. It does not introduce a new provenance architecture or MCP-specific provenance state.

## Canonical contract

Structured provenance remains canonical on evidence instances:

```js
instance.sources[] = [
  {
    citation: string,
    url?: string,
    doi?: string,
    locator?: string,
    quote?: string,
  }
]
```

The MCP full-record projection exposes this structure through the canonical record object. No duplicate provenance model is maintained in the Worker.

## Agent semantics

Agents should be able to follow:

```text
Faultline assessment
→ evidence instance
→ recorded underlying source(s)
→ independently inspectable source material
```

Structured provenance establishes traceability, not verification. It does not certify that an underlying source is correct or that the Observatory's interpretation is independently verified.

Legacy absence is also explicit: an older evidence instance may legitimately have no `sources[]`. That means structured provenance has not been recorded for that instance; it does not mean the evidence has no source.

## Public guidance alignment

`/guides/mcp-access` now:

- includes recorded underlying sources in the introductory description of what agents can inspect;
- lists structured source provenance among current capabilities;
- explains `sources[]`, including optional URL, DOI, locator, quote, and multi-source instances;
- states the legacy-absence rule;
- adds a provenance-oriented example query using FR-AI-0001;
- adds an explicit `traceable ≠ verified` constraint;
- preserves the existing concise page structure rather than adding a large standalone provenance section.

## Technical documentation alignment

`faultline-mcp/README.md` now:

- declares that MCP must not maintain a second provenance model;
- includes structured source provenance in the `faultline_read_record` description;
- documents the canonical `instances[].sources[]` contract;
- documents legacy semantics and traceability-vs-verification;
- gives an agent workflow for inspecting provenance;
- adds a provenance-oriented example query.

## Out of scope retained

PA-003 does not add source registries, extraction provenance, source hashes, OCR/extraction confidence, source scoring, automated verification, citation generation, archival infrastructure, per-sentence/per-vector provenance, mandatory legacy backfill, or new MCP-only provenance fields.

## Closure gates

PA-003 closes PASS only after repository CI confirms the change set and any triggered production deployment is verified against the exact merged commit. Where practical, one external MCP retrieval of a provenance-enriched record should confirm that `sources[]` is visible to an ordinary client.


## Verification

On 2026-08-30, the canonical provenance validator and MCP anti-divergence gate passed. An external `faultline_read_record(FR-AI-0001)` call returned the same canonical `instances[].sources[]` entries that the public record renders, including IN-005's single source and IN-006's five recorded sources. Legacy instances remained without synthetic provenance.
