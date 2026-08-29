# Source-Level Provenance — Architecture Review

Status: Review — no implementation, no schema change
Layer: Canonical corpus (`src/data/records/FR-*.js`)
Source: Item 3 of `MCP Capability Repair` ticket, itself following up on
`docs/mcp/BGPT-GAP-ANALYSIS.md`'s §2 "moderate-effort gap" finding.

## What this answers

BGPT's `provenance[]` gives passage-level source pointers: section, figure/table,
exact quoted text (bounded length), plus a `record_provenance` block (source hash,
extraction timestamp, truncation flag). Faultline's `instances[]`
(e.g. `src/data/records/FR-AI-0001.js:26-69`) carry `qualifiedEvent` / `description`
/ `vectors` / `date` but no structured pointer into the source document a reader
could follow to the exact page, section, or quoted passage the instance describes.

This review answers three questions. It recommends adding a field. It does not
change any code, schema, or record in this pass — the output is a design for a
future, separately scoped ticket.

## 1. What would an authored provenance field look like?

The corpus has no extraction step: every record, including every `instances[]`
entry, is hand-written governed prose reviewed and committed by a person. BGPT's
`extraction_status` / `normalization_warnings` / source-hash / truncation-flag
model exists because their pipeline machine-extracts structured fields from PDFs
and can fail partway through that extraction. None of that has an analogue here,
and importing it would be worse than doing nothing: it would present a
extraction-confidence signal for a process that doesn't exist, inviting a reader
(or a calling model) to interpret "no extraction_status" as a gap rather than as
the correct absence of a step the corpus never performs.

The right model is a **citation**, not an extraction record: a small, optional,
hand-authored field naming where in the source document the instance's claim
lives, written by whoever authors the instance, at the same time and with the
same editorial judgment they already apply to `description`. Proposed shape:

```js
{
  id: "IN-005",
  qualifiedEvent: "OpenAI o1 / o3 — chain-of-thought reasoning models",
  description: "...",
  vectors: ["supportive--strongest-instance-to-date"],
  date: "2024",
  source: {
    citation: "OpenAI, 'Learning to Reason with LLMs' (Sept 2024); ARC-AGI leaderboard, Dec 2024 entry",
    locator: "§3.2, Table 4",       // optional: page/section/figure/table anchor
    quote: "o3 achieves 87.5% on the ARC-AGI Semi-Private Evaluation set",  // optional: short direct quote
    url: "https://arcprize.org/2024-results",  // optional: only when a stable public URL exists
  },
}
```

Every subfield of `source` is optional and none is machine-derived. `citation` is
the only field worth treating as close to required in practice (it's usually
already implicit in `qualifiedEvent`/`description` prose today — this just gives
it a queryable home). `locator` and `quote` exist for the cases where a reader
would otherwise have to re-read the whole cited work to find the specific claim;
authors add them when doing so is easy and skip them when the source has no
stable internal structure to point at (a tweet, a leaderboard entry, a press
release). No `source_hash`, no `extraction_status`, no `truncation_flag` — there
is nothing here for the corpus to fail at extracting, so there is nothing to flag
as failed.

## 2. Sibling field, or inside `instances[]`?

**Recommendation: a sibling field on the instance object (`instance.source`), not
a new top-level array.**

Provenance is a property of one evidence instance's claim, not of the record as a
whole — a single record's `instances[]` array routinely cites different papers,
talks, and preprints per entry (see `FR-AI-0001.js:26-69`: six instances, six
different sourcing events). A record-level `provenance[]` sibling to `instances[]`
would force every entry to carry an instance-ID back-reference to reassemble the
association `instances[]` already gives for free, for no benefit — it's the same
information with an extra join. Nesting `source` directly on the instance object
keeps the one-instance-one-citation relationship structurally obvious and costs
nothing extra to read or author.

The one case for a separate top-level construct would be a source cited by
*multiple* instances across a record (or across records) where de-duplicating the
full citation string would matter — but at current corpus scale (citations are
short, and cross-instance citation reuse is rare because instances already
describe distinct events) that normalization isn't worth the indirection it costs
a human author reading one instance and wanting to see its source inline.

## 3. Authoring/release burden — retrofittable or forward-only?

**Recommendation: forward-only. Do not treat backfilling existing instances as
part of adopting this field.**

`OPERATIONS.md`'s file-by-file model already treats each Frontier Record as a
complete replacement file per release, so *technically* nothing blocks touching
an old record's `instances[]` in a later release — there's no migration
mechanism to build. The real cost is editorial, not technical: `source.citation`
requires whoever adds it to go back and correctly attribute a claim that may have
been paraphrased across several released revisions, for records where the
original sourcing work is not immediately at hand. Retrofitting at that level
either becomes new editorial work assigned to nobody, or gets done sloppily under
pressure to "just fill in the field" — a second-hand-source risk description
that's institutional-record equivalent of the `vectors` free-text drift already
noted as a risk in the sibling "Rejected — Worker-local vector normalization"
item.

Concretely:

- New instances, written after this field exists, get `source` at authoring time
  — the same moment `description` is written, from notes the author already has
  open. Zero added burden beyond typing it in.
- Existing instances keep `source: undefined` (field simply absent) until an
  editor revisits that specific record for an unrelated reason and chooses to add
  it as incidental improvement — never as a scheduled backfill pass.
- `faultline-mcp/src/index.ts`'s `canonicalRecordView()` and `recordSummary()`
  need no schema-migration handling: reading `instance.source` on a record that
  doesn't have it yet is simply `undefined`, which JSON-serializes as an absent
  key — no null-handling code path to write.
- No validation gate (there's no `schema/instance-schema.json` today, unlike
  `schema/event-schema.json` for Events) should be added requiring `source` on
  every instance — that would turn an optional authored enrichment into a release
  blocker for records that predate it, exactly the forced-retrofit outcome this
  section recommends against.

## Verdict

Recommend adding `instance.source` as described in §1, as an optional sibling
field on each `instances[]` entry, authored forward-only. This is a corpus change
(`src/data/records/FR-*.js`), not a Worker change — `faultline-mcp/src/index.ts`
needs no code change to expose it, since `canonicalRecordView()` already spreads
the full record object including whatever fields `instances[]` entries carry.
Scoping the actual rollout (which records get it first, whether the MCP Access
guide's example queries should mention it) is left to the future ticket this
review feeds.
