# ATTRACTOR Specificity — Canonical-reference ruling — 24 October 2026

**Status:** BOUNDED GOVERNANCE RULING  
**Parent inquiry:** ATTRACTOR Specificity Governance Inquiry  
**Outsider evidence frozen at:** `b51889e49d9b5bb663281e4b31a24214abc48093`  
**Taxonomy review status:** unchanged — registered FAIL remains in force  
**Scope:** whether the specificity test may rely on information identified by a canonical reference rather than repeated inside the ATTRACTOR text.

## Question

The outsider test reproduced the intended specificity boundary but identified an ambiguity in phrases such as "the specified end-to-end task" and "the stated workload":

> Does a reference to information outside the ATTRACTOR's own sentence satisfy the requirement that target, evidence form and material boundary be identifiable "from the text"?

## Existing architectural constraints

The repository already treats explicit canonical references differently from contextual inference:

- canonical structure is preferred over duplicate authoring where information can be derived without creating a second narrative source;
- record-update semantics require distinct, unambiguous, existing IDs for evidence counts;
- assessment-event targets resolve only when an identifier is unambiguous and exists in the record; ambiguous, missing or unknown targets fail closed;
- prior content-restoration review uses local record field IDs for references and warns that current guidance must remain explicitly related to the governing assessment;
- narrative notes are not used to infer missing links where a governed reference is absent.

These practices support reference resolution, but not implicit contextual completion.

## Ruling

**Yes — specificity may be satisfied through an explicit, resolvable canonical reference.**

The phrase "from the text" is therefore not interpreted to require all target, evidence-form and boundary information to be duplicated inside the ATTRACTOR sentence itself.

However, a reference counts only when all of the following are true:

1. **Explicitness** — the ATTRACTOR identifies the referenced canonical object or field sufficiently explicitly; a reader or deterministic resolver must not have to guess what is meant.
2. **Uniqueness** — the reference resolves to exactly one canonical target in the governed record context.
3. **Existence** — the referenced object/field exists in the canonical record.
4. **Material contribution** — the referenced content actually supplies the missing target, evidence-form or material-boundary information needed by the specificity test.
5. **No inferential completion** — resolving the reference may retrieve governed content, but may not require editorial inference, semantic reconstruction, or choosing among plausible contextual meanings.
6. **Fail closed** — missing, ambiguous, stale or non-resolving references do not satisfy specificity.

## Consequences

### Allowed pattern

An ATTRACTOR may say, in substance:

> Independent testing of the workload defined in the governed proposition under condition Z...

if "the workload defined in the governed proposition" unambiguously identifies a canonical proposition field that supplies the workload.

The ATTRACTOR need not repeat that workload verbatim merely to satisfy specificity.

### Not sufficient

> Independent testing on the stated workload...

does **not** satisfy the reference rule merely because a knowledgeable author knows which workload is intended. Unless "stated workload" is structurally or textually resolvable to one canonical object/field, the missing boundary remains missing.

Likewise, phrases such as "the specified task", "the relevant benchmark", "normal conditions", or "the established protocol" do not gain specificity from surrounding institutional knowledge alone.

## Why this ruling fits FCIF

### 1. Avoids duplicate-authoring drift

Requiring every mechanism to restate governed proposition or protocol content would create duplicated canonical meaning and a new consistency burden.

### 2. Preserves auditability

A later reviewer can inspect both the ATTRACTOR and the exact canonical object supplying the referenced constraint.

### 3. Preserves the outsider lesson

The rule does not allow meaning to live in the author's head. An outsider must be able to resolve the same reference deterministically.

### 4. Matches existing fail-closed practice

Elsewhere in the corpus machinery, ambiguous or missing identifiers are not silently inferred. The same principle applies here.

## Clarified specificity formulation

For purposes of the bounded Specificity finding:

> A prospective evidential route is sufficiently specific only when a later reviewer can identify its target, evidence form and material boundary **from the ATTRACTOR itself or from explicit, uniquely resolvable canonical references contained by it**, without inventing the route anew.

Operational question:

> Could a later reviewer determine whether new evidence materially engages the recorded route using only the ATTRACTOR and any explicit, uniquely resolvable canonical references it contains, without inventing a new target, evidence form or material boundary?

This clarification does not change the substantive Model B finding. It defines what information may legitimately be used to apply it.

## Effect on the outsider examples

The outsider's concern about Fresh Cases A and C was valid.

Their PASS classifications were conditional on assuming that "specified" and "stated" referred to fixed information. Under this ruling:

- they pass only if those phrases are explicit and uniquely resolvable canonical references;
- otherwise the relevant target/boundary information remains absent and they fail closed.

This is not a re-score of the outsider test. The preserved outsider output remains unchanged as evidence of the ambiguity that prompted this ruling.

## Holds

This ruling does not:
- alter the registered taxonomy FAIL;
- ratify ATTRACTOR;
- reclassify the 30 ATTRACTOR objects;
- release FR-AM-0001 or FR-AM-0002;
- alter FR-QE-0002;
- authorise reader-facing ATTRACTOR UI;
- authorise taxonomy v2;
- resolve Non-automaticity.

The next independent ambiguity, if pursued, remains Non-automaticity.
