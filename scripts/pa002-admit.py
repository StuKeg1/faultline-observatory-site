from pathlib import Path
import json
import re

ROOT = Path('.')


def add_sources(path, instance_id, sources_js):
    p = ROOT / path
    text = p.read_text()
    marker = f'id: "{instance_id}"'
    start = text.find(marker)
    if start < 0:
        raise SystemExit(f'{path}: missing {instance_id}')
    end = text.find('\n    },', start)
    if end < 0:
        raise SystemExit(f'{path}: cannot find end of {instance_id}')
    block = text[start:end]
    if 'sources:' in block:
        return
    text = text[:end] + '\n' + sources_js.rstrip() + text[end:]
    p.write_text(text)


def add_provenance_mutation(path, note):
    p = ROOT / path
    text = p.read_text()
    if note in text:
        return
    ids = [int(x) for x in re.findall(r'\{ id: "M-(\d+)"', text)]
    next_id = max(ids, default=0) + 1
    anchor = 'mutationLog: [\n    // APPEND-ONLY. Newest first.\n'
    if anchor not in text:
        raise SystemExit(f'{path}: mutation anchor missing')
    entry = f'    {{ id: "M-{next_id:03d}", date: "2026-08-29", field: "provenance_enriched", from: "—", to: "PROVENANCE-ENRICHED", note: "{note}" }},\n'
    p.write_text(text.replace(anchor, anchor + entry, 1))


add_sources('src/data/records/FR-AI-0001.js', 'IN-005', '''      sources: [
        {
          citation: "ARC Prize, ‘OpenAI o3 Breakthrough High Score on ARC-AGI-Pub’ (20 Dec 2024)",
          url: "https://arcprize.org/blog/oai-o3-pub-breakthrough",
          locator: "OpenAI o3 ARC-AGI Results",
        },
      ],''')

add_sources('src/data/records/FR-AI-0001.js', 'IN-006', '''      sources: [
        {
          citation: "Chen et al., ‘Reasoning Models Don't Always Say What They Think’ (Anthropic, 2025)",
          url: "https://www.anthropic.com/research/reasoning-models-dont-say-think",
        },
        {
          citation: "Arcuschin et al., ‘Chain-of-Thought Reasoning In The Wild Is Not Always Faithful’ (2025)",
          url: "https://arxiv.org/abs/2503.08679",
        },
        {
          citation: "Lanham et al., ‘Measuring Faithfulness in Chain-of-Thought Reasoning’ (2023)",
          url: "https://arxiv.org/abs/2307.13702",
        },
        {
          citation: "Turpin et al., ‘Language Models Don't Always Say What They Think: Unfaithful Explanations in Chain-of-Thought Prompting’ (NeurIPS 2023)",
          url: "https://proceedings.neurips.cc/paper_files/paper/2023/hash/ed3fea9033a80fea1376299fa7863f4a-Abstract.html",
          doi: "10.52202/075280-3275",
        },
        {
          citation: "Lindsey et al., ‘On the Biology of a Large Language Model’ (Transformer Circuits, 2025)",
          url: "https://transformer-circuits.pub/2025/attribution-graphs/biology.html",
          locator: "Chain-of-thought Faithfulness",
        },
      ],''')

add_sources('src/data/records/FR-QE-0007.js', 'IN-001', '''      sources: [
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
      ],''')

add_sources('src/data/records/FR-QE-0007.js', 'IN-002', '''      sources: [
        {
          citation: "Zhong et al., ‘Quantum computational advantage using photons’, Science 370, 1460–1463 (2020)",
          doi: "10.1126/science.abe8770",
        },
        {
          citation: "Madsen et al., ‘Quantum computational advantage with a programmable photonic processor’, Nature 606 (2022)",
          doi: "10.1038/s41586-022-04725-x",
        },
      ],''')

add_sources('src/data/records/FR-QE-0004.js', 'IN-008', '''      sources: [
        {
          citation: "Sivak et al., ‘Reinforcement learning control of quantum error correction’, Nature 655, 879–884 (2026)",
          url: "https://www.nature.com/articles/s41586-026-10759-2",
          doi: "10.1038/s41586-026-10759-2",
          locator: "Main text; reinforcement-learning control and error-correction results",
        },
      ],''')

add_provenance_mutation('src/data/records/FR-AI-0001.js', 'PA-002 Provenance Enrichment: structured sources[] added to IN-005 and IN-006; evidentiary prose and assessment unchanged.')
add_provenance_mutation('src/data/records/FR-QE-0007.js', 'PA-002 Provenance Enrichment: structured sources[] added to IN-001 and IN-002; evidentiary prose and assessment unchanged.')
add_provenance_mutation('src/data/records/FR-QE-0004.js', 'PA-002 Provenance Enrichment: structured sources[] added to IN-008; evidentiary prose and assessment unchanged.')

schema = {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://faultlinewatch.com/schema/evidence-instance-provenance-schema.json",
    "title": "Faultline Evidence Instance Provenance",
    "description": "Canonical structured provenance fragment for Frontier Record evidence instances. Legacy instances may omit sources; when present it must be meaningful.",
    "type": "object",
    "properties": {
        "sources": {
            "type": "array",
            "minItems": 1,
            "items": {
                "type": "object",
                "additionalProperties": False,
                "required": ["citation"],
                "properties": {
                    "citation": {"type": "string", "minLength": 1},
                    "url": {"type": "string", "format": "uri", "minLength": 1},
                    "doi": {"type": "string", "pattern": "^10\\.\\d{4,9}/\\S+$"},
                    "locator": {"type": "string", "minLength": 1},
                    "quote": {"type": "string", "minLength": 1},
                },
            },
        },
    },
}
Path('schema/evidence-instance-provenance-schema.json').write_text(json.dumps(schema, indent=2) + '\n')

Path('scripts/validate-provenance.js').write_text(r'''import { ALL_RECORDS } from "../src/data/corpus.js";

const REQUIRED_PA_002 = new Set([
  "FR-AI-0001/IN-005",
  "FR-AI-0001/IN-006",
  "FR-QE-0007/IN-001",
  "FR-QE-0007/IN-002",
  "FR-QE-0004/IN-008",
]);

const DOI_RE = /^10\.\d{4,9}\/\S+$/;

function nonEmpty(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export function validateSourceObject(source, label = "source") {
  const errors = [];
  if (!source || typeof source !== "object" || Array.isArray(source)) return [`${label} must be an object`];
  if (!nonEmpty(source.citation)) errors.push(`${label}.citation must be non-empty`);
  for (const field of ["url", "doi", "locator", "quote"]) {
    if (field in source && !nonEmpty(source[field])) errors.push(`${label}.${field} must be non-empty when present`);
  }
  if (source.url) {
    try {
      const parsed = new URL(source.url);
      if (!/^https?:$/.test(parsed.protocol)) errors.push(`${label}.url must use http or https`);
    } catch {
      errors.push(`${label}.url must be a valid absolute URL`);
    }
  }
  if (source.doi && !DOI_RE.test(source.doi)) errors.push(`${label}.doi must be a canonical DOI identifier, not a resolver URL`);
  if (source.quote && source.quote.trim().split(/\s+/).length > 50) errors.push(`${label}.quote must not exceed 50 words`);
  const allowed = new Set(["citation", "url", "doi", "locator", "quote"]);
  for (const key of Object.keys(source)) if (!allowed.has(key)) errors.push(`${label}.${key} is not admitted by PA-002`);
  return errors;
}

export function validateRecordProvenance(record) {
  const errors = [];
  for (const instance of record.instances ?? []) {
    const label = `${record.id}/${instance.id}`;
    if (REQUIRED_PA_002.has(label) && !Array.isArray(instance.sources)) errors.push(`${label} must carry PA-002 structured provenance`);
    if (!("sources" in instance)) continue;
    if (!Array.isArray(instance.sources) || instance.sources.length === 0) {
      errors.push(`${label}.sources must be a non-empty array when present`);
      continue;
    }
    instance.sources.forEach((source, index) => errors.push(...validateSourceObject(source, `${label}.sources[${index}]`)));
  }
  return errors;
}

export function validateCorpusProvenance(records = ALL_RECORDS) {
  return records.flatMap(validateRecordProvenance);
}

if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) {
  const errors = validateCorpusProvenance();
  if (errors.length) {
    console.error("Structured provenance validation failed:\n" + errors.map((e) => `- ${e}`).join("\n"));
    process.exit(1);
  }
  console.log("Structured provenance validation passed.");
}
''')

Path('scripts/validate-provenance.test.js').write_text(r'''import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { FR_AI_0001 } from "../src/data/records/FR-AI-0001.js";
import { FR_QE_0007 } from "../src/data/records/FR-QE-0007.js";
import { FR_QE_0004 } from "../src/data/records/FR-QE-0004.js";
import { validateRecordProvenance, validateSourceObject } from "./validate-provenance.js";

function instance(record, id) {
  return record.instances.find((item) => item.id === id);
}

test("PA-002 admits single-source and multi-source provenance", () => {
  assert.equal(instance(FR_AI_0001, "IN-005").sources.length, 1);
  assert.ok(instance(FR_AI_0001, "IN-006").sources.length >= 5);
  assert.equal(instance(FR_QE_0007, "IN-001").sources.length, 3);
  assert.equal(instance(FR_QE_0007, "IN-002").sources.length, 2);
  assert.equal(instance(FR_QE_0004, "IN-008").sources.length, 1);
});

test("DOI-backed and non-academic sources share the same primitive", () => {
  assert.equal(instance(FR_AI_0001, "IN-005").sources[0].doi, undefined);
  assert.equal(instance(FR_QE_0004, "IN-008").sources[0].doi, "10.1038/s41586-026-10759-2");
});

test("legacy absence remains valid while empty provenance is rejected", () => {
  assert.deepEqual(validateRecordProvenance({ id: "FR-X", instances: [{ id: "IN-001" }] }), []);
  assert.match(validateRecordProvenance({ id: "FR-X", instances: [{ id: "IN-001", sources: [] }] })[0], /non-empty array/);
});

test("meaningless source objects and DOI resolver URLs are rejected", () => {
  assert.ok(validateSourceObject({}).some((error) => error.includes("citation")));
  assert.ok(validateSourceObject({ citation: "x", doi: "https://doi.org/10.1000/test" }).some((error) => error.includes("canonical DOI")));
});

test("MCP full-record projection inherits canonical sources without a second provenance model", () => {
  const source = fs.readFileSync("faultline-mcp/src/index.ts", "utf8");
  assert.match(source, /function canonicalRecordView\(record: any\)/);
  assert.match(source, /\.\.\.record,/);
  assert.doesNotMatch(source, /extraction_status|source_hash|provenanceConfidence|machineExtractionConfidence/);
});
''')

pkg_path = Path('package.json')
pkg = json.loads(pkg_path.read_text())
scripts = pkg['scripts']
scripts['validate:provenance'] = 'node scripts/validate-provenance.js'
if 'validate:provenance' not in scripts['validate:all']:
    scripts['validate:all'] += ' && npm run validate:provenance'
if 'scripts/validate-provenance.test.js' not in scripts['test']:
    scripts['test'] += ' scripts/validate-provenance.test.js'
pkg_path.write_text(json.dumps(pkg, indent=2) + '\n')

page_path = Path('src/pages/FrontierRecord.jsx')
page = page_path.read_text()
old = '''                  {inst.sourceReference && (
                    <span className="ev-source-reference">{inst.sourceReference}</span>
                  )}'''
new = '''                  {inst.sources?.length > 0 ? (
                    <span className="ev-structured-sources" aria-label={`${inst.sources.length} structured source${inst.sources.length === 1 ? "" : "s"}`}>
                      {inst.sources.map((source, index) => {
                        const href = source.url || (source.doi ? `https://doi.org/${source.doi}` : null);
                        return (
                          <span key={`${inst.id}-source-${index}`} className="ev-structured-source">
                            <span className="ev-source-index">{index + 1}.</span>{" "}
                            {href ? <a href={href} target="_blank" rel="noreferrer">{source.citation}</a> : source.citation}
                            {source.doi && <span className="ev-source-meta"> DOI {source.doi}</span>}
                            {source.locator && <span className="ev-source-meta"> · {source.locator}</span>}
                            {source.quote && <q className="ev-source-quote">{source.quote}</q>}
                          </span>
                        );
                      })}
                    </span>
                  ) : inst.sourceReference && (
                    <span className="ev-source-reference">{inst.sourceReference}</span>
                  )}'''
if old not in page:
    raise SystemExit('FrontierRecord.jsx sourceReference render anchor changed')
page_path.write_text(page.replace(old, new, 1))

css_path = Path('src/pages/FrontierRecord.css')
css = css_path.read_text()
if '/* PA-002 structured evidence provenance */' not in css:
    css += '''\n\n/* PA-002 structured evidence provenance */
.ev-structured-sources {
  display: block;
  margin-top: 0.4rem;
  font-size: 0.8rem;
  line-height: 1.45;
}
.ev-structured-source {
  display: block;
  margin-top: 0.18rem;
}
.ev-source-index,
.ev-source-meta {
  opacity: 0.72;
}
.ev-source-quote {
  display: block;
  margin-top: 0.15rem;
  opacity: 0.82;
}
'''
    css_path.write_text(css)

review_path = Path('docs/mcp/PROVENANCE-REVIEW.md')
review = review_path.read_text()
supersession = '> **Superseded architecture note (PA-002, 2026-08-29):** the singular `instance.source` proposal below was tested in PA-001 and replaced by the admitted canonical primitive `instance.sources[]`. This file is retained as decision history.\n\n'
if supersession not in review:
    review_path.write_text(review.replace('# Source-Level Provenance — Architecture Review\n\n', '# Source-Level Provenance — Architecture Review\n\n' + supersession, 1))

Path('docs/provenance/PA-002-PROVENANCE-SCHEMA-ADMISSION.md').write_text('''# PA-002 — Provenance Schema Admission

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
''')
