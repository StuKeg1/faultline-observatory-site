# PA-001 — Evidence Instance Provenance Pilot

Status: EXECUTED — architecture pilot; no formal schema admission
Date: 2026-08-29
Branch: `pilot/pa-001-evidence-provenance`
Decision source: Provenance Architecture Decision — PILOT

## Purpose

Test whether `instance.sources[]` is the smallest canonical provenance primitive that remains correct for Faultline evidence instances, including single-source academic evidence, multi-source synthesis, DOI-backed sources, and non-academic institutional sources.

This pilot tests the canonical data shape before formal schema admission. It does not create a corpus-wide backfill obligation and does not import extraction-pipeline machinery.

## Candidate schema

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

Validation proposition:

- `sources` remains absent on legacy instances unless deliberately enriched.
- If `sources` is present, it MUST be a non-empty array.
- Every source MUST contain a non-empty `citation`.
- `url`, `doi`, `locator`, and `quote` MUST be non-empty and syntactically valid when present.
- Empty provenance such as `sources: []`, `sources: [{}]`, or `{ citation: "" }` is invalid.
- DOI values are stored as DOI identifiers, not resolver URLs.
- A quote, when used, is a short exact verification aid, not an extracted evidence substitute.

## Pilot corpus

Three representative Frontier Records and five evidence instances were selected.

### 1. FR-AI-0001 / IN-005 — non-academic institutional source

The instance records the December 2024 o3-preview ARC-AGI result. The cleanest provenance is the benchmark organisation's own published analysis rather than a citation embedded in descriptive prose.

```js
sources: [
  {
    citation: "ARC Prize, ‘OpenAI o3 Breakthrough High Score on ARC-AGI-Pub’ (20 Dec 2024)",
    url: "https://arcprize.org/blog/oai-o3-pub-breakthrough",
    locator: "OpenAI o3 ARC-AGI Results",
  },
]
```

Finding: the same primitive works for authoritative non-academic evidence without inventing a DOI or source type.

### 2. FR-AI-0001 / IN-006 — multi-source synthesis

This is the decisive stress test. IN-006 synthesises several distinct studies on chain-of-thought faithfulness and mechanistic interpretation. A singular `source` object would either collapse several publications into one citation string or force arbitrary selection of a primary source.

Representative provenance:

```js
sources: [
  {
    citation: "Chen et al., ‘Reasoning Models Don't Always Say What They Think’ (Anthropic, 2025)",
    url: "https://www.anthropic.com/research/reasoning-models-dont-say-think",
  },
  {
    citation: "Arcuschin et al., ‘Chain-of-thought reasoning in the wild is not always faithful’ (2025)",
    url: "https://arxiv.org/abs/2503.08679",
  },
  {
    citation: "Lanham et al., ‘Measuring Faithfulness in Chain-of-Thought Reasoning’ (2023)",
    url: "https://arxiv.org/abs/2307.13702",
  },
]
```

Finding: `sources[]` is structurally necessary. `source` is not sufficient for existing Faultline evidence practice.

### 3. FR-QE-0007 / IN-001 — mixed primary and contesting sources

IN-001 contains both the original Sycamore result and subsequent classical-computation challenges. The instance is not faithfully attributable to only the Nature paper.

```js
sources: [
  {
    citation: "Arute et al., ‘Quantum supremacy using a programmable superconducting processor’, Nature 574, 505–510 (2019)",
    url: "https://www.nature.com/articles/s41586-019-1666-5",
    doi: "10.1038/s41586-019-1666-5",
    locator: "Abstract and main result",
  },
  {
    citation: "Pednault et al., ‘Leveraging Secondary Storage to Simulate Deep 54-qubit Sycamore Circuits’ (2019)",
    url: "https://arxiv.org/abs/1910.09534",
  },
  {
    citation: "Pan, Chen & Zhang, ‘Solving the Sampling Problem of the Sycamore Quantum Circuits’, Physical Review Letters 129, 090502 (2022)",
    doi: "10.1103/PhysRevLett.129.090502",
  },
]
```

Finding: multi-source provenance is required not only for literature synthesis but also when an instance's evidentiary meaning depends on a primary result plus a material challenge.

### 4. FR-QE-0007 / IN-002 — multiple independent academic demonstrations

```js
sources: [
  {
    citation: "Zhong et al., ‘Quantum computational advantage using photons’, Science 370, 1460–1463 (2020)",
    doi: "10.1126/science.abe8770",
  },
  {
    citation: "Madsen et al., ‘Quantum computational advantage with a programmable photonic processor’, Nature 606 (2022)",
    doi: "10.1038/s41586-022-04725-x",
  },
]
```

Finding: a source registry would save little and add an unnecessary join. Inline `sources[]` remains readable even when an instance rests on multiple papers.

### 5. FR-QE-0004 / IN-008 — single-source DOI-backed academic evidence

```js
sources: [
  {
    citation: "Sivak et al., ‘Reinforcement learning control of quantum error correction’, Nature 655, 879–884 (2026)",
    url: "https://www.nature.com/articles/s41586-026-10759-2",
    doi: "10.1038/s41586-026-10759-2",
    locator: "Main text; RL control and logical-error-rate results",
  },
]
```

Finding: the array form imposes negligible burden on the common single-source case while preserving correctness for multi-source cases.

## Human readability test

PASS.

For all five instances the source list can be understood directly in the record object without resolving a source ID against another registry. DOI and URL remain explicit. Optional locators improve navigation without requiring document-anatomy modelling.

## Agent utility test

PASS at the data-model level.

An agent receiving an instance with `sources[]` can determine, without parsing `description` or `qualifiedEvent`:

1. how many sources the instance depends on;
2. the human-readable identity of each source;
3. a stable DOI when one exists;
4. a public retrieval URL when one exists; and
5. an internal source location when the author can provide one meaningfully.

This is a material improvement over prose-only provenance and over the legacy `sourceReference` string because individual sources become independently addressable.

## Single-source vs multi-source test

PASS.

The array form handles both with one primitive. A singular `source` fails IN-006 and FR-QE-0007 / IN-001 without concatenating distinct sources into an opaque string.

## Academic vs institutional source test

PASS.

No source-type discriminator is required to represent either class. DOI is naturally absent for ARC Prize and Anthropic web publications and present for journal articles.

## Locator test

PASS with optionality retained.

Locators are useful where a source has meaningful internal structure. They should not be required. Requiring them would encourage dummy values for web pages, announcements, leaderboards and other sources without stable page/section anchors.

## Quote test

NOT REQUIRED FOR ADMISSION.

None of the five pilot instances requires an exact quotation to establish traceability. `quote` remains a useful optional verification aid, but the pilot provides no basis for making it mandatory.

## Top-level registry test

REJECTED.

The pilot found no case where a top-level source registry improves correctness. It would require source IDs and joins while making a human reading a single instance work harder. Reconsider only if future corpus-wide source entities, extensive cross-record reuse, or source-level analytics become a demonstrated requirement.

## Governance finding

The appropriate operation is:

- new instance with provenance: provenance is part of the ordinary instance admission;
- provenance added later without changing evidentiary meaning: `provenance_enriched` mutation;
- incorrect published provenance corrected: Editorial Correction;
- provenance enrichment alone does not trigger reassessment.

Legacy absence means only: structured provenance has not been recorded for this instance. It must never be interpreted as evidence having no source.

## Explicit rejected complexity

PA-001 finds no institutional requirement for:

- extraction status;
- extraction timestamps;
- source hashes;
- truncation metadata;
- OCR or machine-extraction confidence;
- normalization warnings;
- source trust scores;
- automated verification flags;
- per-sentence or per-vector attribution;
- source-type taxonomy;
- generic identifier framework;
- mandatory archival snapshots;
- top-level source registry;
- MCP-specific provenance semantics.

These solve different problems from Faultline's governed human-authored corpus.

## Pilot verdict

**PA-001: PASS — recommend ADMIT, subject to a separate bounded schema-admission implementation.**

The pilot establishes that structured evidence-instance provenance is more than bibliographic convenience. It supplies a missing machine-verifiability capability: a human or agent can move from Faultline's governed interpretation to the identifiable source or sources on which that interpretation depends without reconstructing provenance from prose.

Recommended canonical primitive:

```js
instance.sources[]
```

Recommended minimum source object:

```js
{
  citation: string,
  url?: string,
  doi?: string,
  locator?: string,
  quote?: string,
}
```

Admission should be forward-required for newly created evidence instances and selectively enrichable for legacy instances. No corpus-wide historical backfill obligation is justified.

## Next bounded step

A separate **PA-002 — Provenance Schema Admission** should:

1. formally admit `instance.sources[]` to the Frontier Record contract;
2. add validation that rejects empty or meaningless provenance structures;
3. apply structured provenance to the five PA-001 instances above as governed provenance enrichment, preserving existing evidentiary prose;
4. add corresponding `provenance_enriched` mutation entries for legacy instances;
5. render canonical sources beneath evidence instances on the website;
6. verify that the MCP exposes the same canonical `sources[]` without a second provenance model;
7. add automated tests for single-source, multi-source, DOI, URL, absent legacy provenance, and invalid empty provenance;
8. perform build/test and live derivation verification before closure.
