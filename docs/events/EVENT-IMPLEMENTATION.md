# Observatory Event Implementation

Status: Active  
Layer: Implementation governance  
Applies to: Observatory Event system from OE-2026-0001 onwards

## What this document is

This document governs the implementation phase of the Faultline Observatory Event system: the rules, constraints, and decisions that apply from the first Event through to the point where external distribution is enabled.

## Phase 1 — Protected Corpus

OE-2026-0001 through OE-2026-0009 are schema-validation Events.

During the protected phase:

- Event JSON files are created manually.
- The Event Archive is generated normally and deployed to production.
- RSS generation is disabled.
- Atom generation is disabled.
- Social distribution is disabled.
- No external automation consumes Event objects.

The Archive is not automation. It is the institutional rendering of the canonical Event object and is generated from `/events/**/*.json`.

## Phase 2 — Distribution

Phase 2 begins only after a formal stability review has been completed and recorded in `STABILITY-CHECK.md`.

During Phase 2:

- Event JSON files may continue to be created manually.
- The Event Archive continues to be generated normally.
- RSS and Atom feeds may be enabled.
- Social distribution may be connected.
- Automation of JSON creation may be introduced if the manual workflow creates friction.

## Schema stability definition

The Event schema is considered stable when no field has been added, removed, or renamed across OE-2026-0001 through OE-2026-0009.

Changes to field values do not constitute schema changes.

## Repository structure

```text
/events/
  2026/
    OE-2026-0001.json
/schema/
  event-schema.json
/scripts/
  validate-events.js
/docs/
  events/
    EVENT-IMPLEMENTATION.md
    STABILITY-CHECK.md
```

## Manual Event workflow

1. Confirm an Event-eligible mutation has occurred.
2. Assign the next identifier by inspecting `/events/2026/`.
3. Create one JSON file named by the Event identifier.
4. Validate locally and by build-time validation.
5. Commit and push.
6. Verify the deployed Archive at `/events/`.

## What does not happen

- Do not edit the Event Archive by hand.
- Do not update a manifest or index file.
- Do not update any other page to record the Event.
- Do not post to social feeds during Phase 1.
- Do not generate RSS or Atom during Phase 1.
- Do not automatically create Event JSON during Phase 1.

## Canonical schema

The canonical schema is defined in `/schema/event-schema.json`.

The common envelope is:

- `eventId`
- `eventType`
- `recordId`
- `programme`
- `timestamp`
- `summary`
- `url`

Canonical event types:

- `record-created`
- `assessment-changed`
- `verification-stage-changed`
- `programme-created`

## Generated Archive safeguard

The Event Archive is generated from Event JSON only. If the Archive and an Event JSON ever disagree, the Event JSON is correct.

Faultline Observatory · faultlinewatch.com
