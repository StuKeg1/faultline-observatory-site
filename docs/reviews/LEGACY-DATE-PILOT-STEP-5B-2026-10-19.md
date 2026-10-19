# Step 5B — three-record historical-date pilot

Date: 19 October 2026. Base: `fd736d648f32aae6830fb419ea3d67f9f694a284`. Operator authorised QE-0002, AM-0003 and BT-0004 AS-001 only, with uncertainty qualifications where actual dates cannot be recovered.

## Decision and provenance

All three are qualified **date uncertain (legacy)** using the existing LAD-001 historical overlay. No replacement date or bounded range has been established. This is a display-chronology qualification, not a new assessment or a migration of stored record dates.

| Record / assessment | Inspected provenance | Decision |
| --- | --- | --- |
| QE-0002 / AS-001 | [Retained HTML](https://drive.google.com/file/d/1s9-MAnWoWMwt2ReSLdPtGSW6QRtOVgvM/view) states ISSUED: 2024-01-15 and trigger INST-005. The located [identity/continuity review](https://docs.google.com/document/d/11Eyj9q_SD32pAWcs8XWEuWzqditePgxwcxV91MnDhGk/edit) describes the June 2026 HTML/deployment provenance and explicitly distinguishes the notional 2024 date. | Actual original issue/state-entry date unknown. IN-005 in the overlay identifies the source's trigger, not evidence that dates the assessment. Later assessments remain dated. |
| AM-0003 / AS-001 | [Retained HTML](https://drive.google.com/file/d/19czOspfLKee1tTark6lti8sr-LBaHObs/view) states ISSUED: 2024-01-15 and trigger INST-004. Located institutional fragmentation reviews and the July ratification establish no original issue date. | Actual original issue/state-entry date unknown. IN-004 identifies the trigger; no publication or institutional-note date is substituted. |
| BT-0004 / AS-001 | [Retained HTML](https://drive.google.com/file/d/1gbY5KwOYxG6sVUv5rRJZUhmCzmS5B0HS/view) states ISSUED: 2024-01-15 and trigger INST-003. The located [Trial 001 manifest](https://docs.google.com/document/d/1NiQQEbx60HXICLwNff7deOu_G1IB3hyZm0mlofOc_Hw/edit) concerns later corpus updates, not an issue packet establishing AS-001's real date. | Actual original issue/state-entry date unknown. IN-003 identifies the trigger; neither the trial start, publication nor later results date supplies the missing assessment date. |

The [23 July ratification](https://docs.google.com/document/d/1aDpuzdV01cWV9ZOZ17r_R1UbrUDJqUPoKH6b359kJhA/edit) treats the cohort as notional/provenance-suspect and distinguishes stage reconstructability from date certainty. The earlier classification receipt inspected all original HTML files: each literal predates the converter version inspected, so this pilot does not claim three newly demonstrated converter substitutions. The companion JSON retains those excerpts/IDs, the decision, exact new overlays and entire canonical-record hashes.

Authenticated Drive searches for the three record IDs located the material above but no contemporaneous original issue packet establishing another date. This is a bounded unsuccessful recovery, not proof that no such packet exists. Original HTML excerpts already checked in today's classification review are reused; file timestamps are not assessment dates.

## Implementation and public semantics

- Add exactly three individually specified entries in `HISTORICAL_EFFECTIVE_DATES`; preserve the existing AM-0001 and AI-0008 overlays. The unknown value follows the established AI-0008 wording.
- Existing derived history propagates the qualification to State Warrant state-entry dates, historical assessment labels, Verification Matrix positions, compact/card history and register reasons. Latest assessment dates remain exact and unchanged. Directory opening-date semantics remain outside this pilot.
- Preserve stored `assessment.date` as `recordedDate` in governed history and MCP full-record output. MCP search-match context now reports the governed display date alongside its retained recordedDate, so raw historical matches cannot silently present storage precision as a verified issue date. Search still finds the stored text.
- Fix the existing documentary-phase caption helper to extract real years from qualified chronology and explicitly mark qualified dates. It must not turn the word “date” in an unknown label into a year. Documentary horizontal positions remain based on assessment order, not elapsed time; no new temporal spacing is invented.

No canonical record file is changed: assessments, states/stages, scientific evidence, mutation logs, question-raised dates and record-opened dates are byte-for-byte unchanged. The sidecar and this authorised receipt record the display correction; no scientific event or state transition is appended. No remaining member of the 23-record cohort is automatically added. The legacy one-record time-scaled prototype remains gated to QE-0001, which is outside this pilot; the public multi-record documentary chart uses its existing ordinal phases.

## Acceptance and next decision

Tests preserve each entire canonical record hash, verify unknown state-entry/stage chronology, exact latest-assessment dates, unchanged transitions and independent date semantics in cards/registers/MCP search. Unknown dates have no invented numeric sort key or elapsed duration. Prerender checks must confirm visible uncertainty in the three records and valid history/trajectory output. Application/build results are recorded below after completion.

Retain as a three-record pilot for review. The other 20 unqualified legacy dates remain in the classification register; any expansion requires another explicitly scoped set. AM-0005 citation repairs and AM-0006/BT-0003 source recovery remain separate work. No deployment is claimed by this receipt.

Validation passed on Node 22.23.3 / npm 10.9.9: all 204 tests against built output; canonical validators; production build/prerender of 62 pages; lint with zero errors and the existing Fast Refresh warning. HTML inspection verifies unknown chronology inside history, matrix and warrant on all three records, qualified captions and the ordinal-spacing explanation on Evidence Trajectories, and no NaN/Infinity output. Latest assessment dates remain dated and match the raw latest assessments. The unknown display dates retain empty numeric sort keys; record-opened and question-raised dates remain governed separately.
