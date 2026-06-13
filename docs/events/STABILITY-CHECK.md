# Event Corpus Stability Review

Purpose: Formal gate review required before Phase 2 distribution begins.  
Completed: [ ]  
Prerequisite for: OE-2026-0010 and all subsequent Events.

## What this review confirms

This review confirms that the Observatory Event schema has remained stable across the protected corpus, OE-2026-0001 through OE-2026-0009, and that the institution is ready to expose Event objects to external distribution.

OE-2026-0010 is not merely the tenth Event. It is the first Event written after the institution has declared the Event schema mature enough for external consumption.

## Review record

Review date: ____________________  
Reviewer: ____________________  
Consulted: ____________________  

Corpus reviewed: OE-2026-0001 → OE-2026-0009

## Schema stability checks

Schema stability means no field has been added, removed, or renamed across the protected corpus. Changes to field values are not schema changes.

### Structural checks

- [ ] No fields added to the common envelope
- [ ] No fields removed from the common envelope
- [ ] No fields renamed in the common envelope
- [ ] No fields added, removed, or renamed in any typed event block
- [ ] `eventType` values match the four defined types, or new types follow the established pattern
- [ ] All `eventId` values follow the OE-YYYY-NNNN pattern
- [ ] Sequence OE-2026-0001 through OE-2026-0009 is contiguous
- [ ] All timestamp values are valid ISO 8601 UTC

### Consistency checks

- [ ] All `recordId` values are null only in programme-created events
- [ ] All transition events capture both previous and new state
- [ ] `programme` field is present and non-null in all events
- [ ] `summary` field is present and human-readable in all events
- [ ] `url` field resolves correctly for all events

### Archive rendering checks

- [ ] All nine Events appear in the Archive in reverse chronological order
- [ ] All four event types render correctly and distinctly
- [ ] Programme context is visible for each Event
- [ ] Record links resolve correctly
- [ ] Archive renders correctly on mobile
- [ ] No layout anomalies or rendering failures observed

### Schema quality checks

- [ ] Field names are unambiguous and consistent with institutional vocabulary
- [ ] No field names feel provisional or likely to change
- [ ] The summary field reads naturally across all event types
- [ ] No fields are present that feel redundant or unclear in purpose
- [ ] No schema ambiguities were discovered during Phase 1 that remain unresolved

## Schema decisions made during Phase 1

Record field names considered and rejected, naming alternatives weighed, and reasoning that settled each question:

______________________________________________________________________________

______________________________________________________________________________

______________________________________________________________________________

## Decision

- [ ] Protected phase complete. The schema is stable. The Archive renders naturally. No unresolved concerns remain. OE-2026-0010 may proceed. RSS and Atom generation are enabled. Social distribution may be connected.
- [ ] Protected phase extended. Concerns remain. OE-2026-0010 is deferred. See notes below.

If extended — reason and required resolution:

______________________________________________________________________________

______________________________________________________________________________

## What changes after this review

Enabled after completed review:

- RSS feed generation (`/feed.xml`)
- Atom feed generation (`/atom.xml`)
- Social distribution may be connected
- Automation of Event JSON creation may be introduced if warranted

Unchanged:

- Event Archive continues to be generated normally
- Event JSON files remain the canonical source of truth
- The Archive continues to take precedence over downstream renderings
- Manual review of each Event is recommended until automation is confirmed stable

Faultline Observatory · faultlinewatch.com
