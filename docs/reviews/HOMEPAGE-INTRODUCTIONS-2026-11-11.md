# Homepage question introductions — 11 November 2026

Scope: three record-linked homepage cards only. Based on canonical main c5bfd1a and approved scope in the conversation.

## Reviewed basis

- FR-QE-0007 AS-003: strong performance and application-oriented evidence do not yet establish durable practical advantage at the same demonstrated scale.
- FR-BT-0004 AS-005: detection performance, false-negative limitations and lack of demonstrated survival/net clinical utility. PATHFINDER 2 is not a randomized efficacy confirmation.
- FR-AM-0005 AS-004: represented candidates lack independent reproduction; differing synthesis limits what the negative attempt can exclude.

No existing introductory field supplied a suitable concise explanation across these records. The renderer previously extracted the first assessment sentence, exposing procedure or dense statistics. Replaced with reviewed navigation copy in the existing question configuration, pinned to the current assessment ID. A changed ID fails validation/rendering until explicit copy review; it never silently reuses stale copy. This intentionally adds a small maintenance step to future assessments of these three featured records.

Canonical records, warrants, questions, state labels, destinations, layout and newcomer materials are unchanged. This is not an Evidence Brief or a new assessment. No analytics or traffic claim is made.

## Validation

Node 22 / npm 10 production build, canonical validators, 215 tests and lint (zero errors; existing Fast Refresh warning). Prerender test verifies all three introductions and state labels; mutation test verifies a new assessment is rejected. Final wording checked in regenerated HTML. Existing responsive CSS retained; no clipping rule on introduction paragraphs. Browser visual check could not run because the cloud browser could not reach the local preview (connection refused); mobile appearance is not claimed visually verified.

Unrelated generated record-sitemap date changes excluded. Release/merge remains separate from implementation. If newcomer collection has begun, record the release boundary and do not introduce the guide during collection.
