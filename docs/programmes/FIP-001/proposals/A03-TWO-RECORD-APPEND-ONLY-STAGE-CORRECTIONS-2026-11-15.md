# FIP-A03 — Prepared append-only correction proposals, two current-stage cases
**Prepared:** 2026-11-15
**Status:** RECOMMENDATIONS APPROVED IN PRINCIPLE; **IMPLEMENTATION NOT AUTHORISED**.
**Source finding:** F3-07 / A03-01. Evidence-only authority from user: approve *in principle* FR-AM-0001 and FR-AM-0005 current VS-05 → VS-04 recommendations, **retain both COLLAPSED**, prepare exact append-only assessment/mutation proposals, preserve all prior material, no implementation/merge/deployment.
**Read before execution:** [Parent census](../reviews/A03-2026-11-15.md); [case-specific warrant review](../reviews/A03-BOUNDED-CURRENT-STAGE-WARRANT-2026-11-15.md). Ratified [22 July semantic ruling](https://docs.google.com/document/d/18TbpKvoNpmY4O9uvxxROilRjFyj5guwg8mknWaxlMSY/edit) and [23 July legacy assignment ratification](https://docs.google.com/document/d/1aDpuzdV01cWV9ZOZ17r_R1UbrUDJqUPoKH6b359kJhA/edit) govern both proposals.

## Baseline and exact available IDs — independently parsed from current main
| Record | Current canonical blob | Existing assessment IDs | Current stage / state | Existing mutation IDs | Candidate next IDs |
| --- | --- | --- | --- | --- | --- |
| FR-AM-0001 | `df5f00ae6ff645075f0f2afaa09c9bccc7459bd4` | AS-001..AS-005 | AS-005, 2026-09-08, VS-05 / collapsed | M-001..M-016 (last M-016 2026-11-11) | **AS-006 / M-017** |
| FR-AM-0005 | `ded52d16d22a7089ff64fbd33c93e70a71a68ee7` | AS-001..AS-004 | AS-004, 2026-10-30, VS-05 / collapsed | M-001..M-021 (last M-021 2026-10-31) | **AS-005 / M-022** |

Both existing assessment and mutation ID sets have no duplicates on the verified snapshot. IDs are **available, not reserved**; any later canonical change requires fresh main readback and rebase. The issue date `2026-11-15` is proposed **only if ratification and actual issuance occur on that date**. On a later execution date, substitute the true issuance date in new assessment and mutation objects; do not backdate ratification. Preserve same-day assessment array order, and keep mutations newest first.

## Proposed record 1: FR-AM-0001, AS-006 and M-017
**Target:** [src/data/records/FR-AM-0001.js](https://github.com/StuKeg1/faultline-observatory-site/blob/main/src/data/records/FR-AM-0001.js).
**Exact authorised delta if subsequently implemented:** append just the proposed AS-006 object to `assessments`, prepend just M-017 to `mutationLog`. No other fields.
**Canonical claim boundary:** electrochemical cells themselves producing nuclear fusion at/near room temperature; an external deuteron beam does **not** satisfy that claim.

### Proposed assessment object (not applied)
```js
{
  id: "AS-006",
  date: "2026-11-15",
  pressureState: "collapsed",
  verificationStage: "VS-04",
  changeKind: "verification_stage_correction",
  summary: "This is a governed current Verification Stage correction on evidence already admitted, not a new fusion result or a change to the COLLAPSED Pressure State. The canonical claim is that electrochemical cells themselves can produce fusion at or near room temperature. Independent laboratory reproduction attempts and challenges (IN-002, IN-003 and IN-007), including controlled null results, reach Replication (VS-04) under the ratified July evidence-depth rule: a qualifying negative or adversarial reproduction attempt does not require confirmation of the claim. The 2025 and 2026 externally ion-beam-driven fusion experiments (IN-008 and IN-009) are legitimate adjacent findings about material loading and sub-keV mechanisms, but neither demonstrates autonomous electrochemical-cell nuclear fusion. Operation (VS-05) requires sustained or applied operation of the claimed capability, not operation of a replication programme or beam-driven apparatus. The July 2026 historical AS-003 review already interpreted VS-05 as VS-04, but that historical overlay does not by itself overturn the later, operator-approved AS-004 and AS-005 reaffirmations. This assessment expressly corrects their current stage interpretation while preserving them as past decisions. COLLAPSED remains warranted on the full claim; historical uncertainty and possible future reopening are preserved. No new evidence instance, source, claim change, or Pressure State transition is introduced.",
  assessorNote: "Proposed FIP-A03 operator-ratified stage reconciliation, with issuance date to be confirmed at implementation. Authority: ratified VS Semantic-Authority Ruling, 22 July 2026; ratified Legacy Verification Stage Assignment Review, 23 July 2026; bounded FIP-A03 warrant review docs/programmes/FIP-001/reviews/A03-BOUNDED-CURRENT-STAGE-WARRANT-2026-11-15.md. Source boundary: FR-AM-0001 IN-002/IN-003/IN-007 are independent tests of claimed electrochemical fusion; IN-008/IN-009 use externally accelerated deuterons and are not claimed-cell operation. Corrects later AS-004/AS-005 VS-05 reaffirmations transparently; retains AS-001 through AS-005, every prior mutation and the July AS-002/AS-003 interpreted-stage overlays. No evidence admission, source editing, pressure-state change or new scientific event."
},
```

### Proposed newest mutation (not applied)
```js
{
  id: "M-017",
  date: "2026-11-15",
  field: "assessment_correction",
  from: "AS-005 / COLLAPSED / VS-05",
  to: "AS-006 / COLLAPSED / VS-04",
  note: "Operator-ratified FIP-A03 current-stage reconciliation, if separately authorised for implementation. Independent adversarial and null reproduction attempts support VS-04; neither external-ion-beam fusion study demonstrates operation of the canonical self-fusing electrochemical-cell capability. July historical AS-003 interpreted-stage overlay remains intact; later AS-004/AS-005 explicit VS-05 reaffirmations are preserved and now superseded for the current stage only. No new science, evidence instance, claim or Pressure State transition. Exact decision and scope: docs/programmes/FIP-001/proposals/A03-TWO-RECORD-APPEND-ONLY-STAGE-CORRECTIONS-2026-11-15.md."
},
```

**Direct evidence locators:** `claim.statement`; `instances` IN-002 (DOE 1989 chronology), IN-003 (Harwell Williams et al. Nature 342, 375–384), IN-004/IN-006 (DOE reports), IN-007 (Berlinguette et al., Nature DOI 10.1038/s41586-019-1256-6), IN-008 (Chen et al., Nature DOI 10.1038/s41586-025-09042-7), IN-009 (Karahadian et al., Nature Communications DOI 10.1038/s41467-026-74421-1), `assessments[AS-003..AS-005]`, `mutationLog[M-010,M-012,M-015,M-016]`; `src/data/verificationStageReviews.js` entries FR-AM-0001 AS-002/AS-003. Do **not** confuse the >10^18 bare-nucleus comparison with the loading-induced enhancement already corrected in M-016.

**Strongest dissent to record:** AS-004 and AS-005 are operator-approved *later* reaffirmations, not legacy-only artifacts. This is a new prospective case decision, not a purported automatic July extension. High semantic confidence; implementation still requires new authority.

## Proposed record 2: FR-AM-0005, AS-005 and M-022
**Target:** [src/data/records/FR-AM-0005.js](https://github.com/StuKeg1/faultline-observatory-site/blob/main/src/data/records/FR-AM-0005.js).
**Exact authorised delta if subsequently implemented:** append just the AS-005 object to `assessments`, prepend M-022 to `mutationLog`. No other fields.
**Canonical claim boundary:** production of a **reproducible room-temperature superconductor under laboratory conditions**; the claim does not require ambient pressure by definition, but single-team repeated runs are not independent reproducibility.

### Proposed assessment object (not applied)
```js
{
  id: "AS-005",
  date: "2026-11-15",
  pressureState: "collapsed",
  verificationStage: "VS-04",
  changeKind: "verification_stage_correction",
  summary: "This is a governed current Verification Stage correction using existing evidence, not the observation of a new material or a change in the COLLAPSED Pressure State. The claim concerns a room-temperature superconductor reproducible under laboratory conditions; high pressure is not automatically outside that wording. The independent experimental LK-99 replication campaign (IN-002) and documented candidate-specific adversarial scrutiny reached Replication (VS-04), even though they did not confirm superconductivity. The later LaSc₂H₂₄ candidate (IN-006) remains a single-team high-pressure preprint with repeat measurements, not independently reproduced operation of a room-temperature superconductor. Semenok and colleagues (IN-007) report seven negative alloy-precursor synthesis attempts; the DPG abstract and subsequent preprint are related accounts of overlapping work, not independent successful confirmations, and their precursor differs from the original simultaneous La/Sc preparation. This constrains exact-method falsification and prohibits a universal null inference. Earlier reproduced hydride superconductors remain below room temperature; the testing campaign and material-science field are not themselves the sustained or applied operation of the claimed reproducible room-temperature capability required for VS-05. The July historical reviews interpreted AS-001/AS-002 VS-05 as VS-04, but do not automatically revise subsequent AS-003/AS-004. This assessment explicitly corrects the latter present-day stage warrant, while preserving their original conclusions and every recorded limitation. COLLAPSED is retained for represented failures under the existing claim boundary, not as proof of physical impossibility. No new evidence, source, claim, status or Pressure State change.",
  assessorNote: "Proposed FIP-A03 operator-ratified stage reconciliation, with issuance date to be confirmed at implementation. Authority: July 2026 ratified semantic ruling and legacy assignment review; docs/programmes/FIP-001/reviews/A03-BOUNDED-CURRENT-STAGE-WARRANT-2026-11-15.md. Sources already admitted: IN-001 Dias retractions; IN-002 LK-99 replication campaign; IN-003 lower-than-room-temperature hydrides; IN-006 unreplicated Song et al. LaSc₂H₂₄ preprint; IN-007 Semenok et al. DPG 2026 and arXiv:2605.29985v2 with synthesis-equivalence limit. No independent replication count is inferred from seven experiments within one team or two related reports. Retain AS-001 through AS-004, all mutations and July AS-001/AS-002 interpreted-stage overlays. The September AS-003 and October AS-004 operator-approved reaffirmations are not erased; only their previously controlling current VS-05 stage is prospectively corrected."
},
```

### Proposed newest mutation (not applied)
```js
{
  id: "M-022",
  date: "2026-11-15",
  field: "assessment_correction",
  from: "AS-004 / COLLAPSED / VS-05",
  to: "AS-005 / COLLAPSED / VS-04",
  note: "Operator-ratified FIP-A03 current-stage semantic correction, if separately authorised for implementation. LK-99's independent, including null, reproduction attempts support VS-04; no qualifying reproducibly functioning room-temperature material supports VS-05. IN-007's alloy precursor differs from Song et al., and the conference abstract/preprint are one linked research packet, not independent studies or exact-method falsification. Both the September AS-003 and October AS-004 VS-05 reaffirmations remain in the historical sequence, with July AS-001/AS-002 review overlays preserved. No claim-wide impossibility finding, new evidence, pressure-state change or alteration of the existing CLOSED status. Scope: docs/programmes/FIP-001/proposals/A03-TWO-RECORD-APPEND-ONLY-STAGE-CORRECTIONS-2026-11-15.md."
},
```

**Direct evidence locators:** `claim.statement`; `instances` IN-001 (Nature retractions 2022/23), IN-002 (LK-99 independent campaign), IN-003 (Drozdov et al., Nature 2015 and 2019; Somayazulu et al., PRL 2019), IN-006 (2025 LaSc₂H₂₄ candidate, repeated runs not independent-team validation), IN-007 (Semenok et al. [DPG TT 80.8](https://www.dpg-verhandlungen.de/year/2026/conference/dresden/part/tt/session/80/contribution/8) and [arXiv:2605.29985v2](https://arxiv.org/abs/2605.29985v2)); `assessments[AS-001..AS-004]`, `mutationLog[M-015,M-019,M-021]`, `src/data/verificationStageReviews.js` entries FR-AM-0005 AS-001/AS-002.

**Strongest dissent:** AS-003 explicitly reassessed and retained VS-05 after source repair and AS-004 reaffirmed after the independent negative IN-007 report, both under operator authority. The new stage correction is a proposal for a **new** decision, not an erasure or claim that those approvals did not occur. High semantic confidence; timing of implementation subject to explicit approval.

## Shared implementation gate — not authorised by this preparation

1. **Preflight:** independently refetch canonical main and compare both record blob SHAs and `assessments`/`mutationLog` content against this snapshot; scan for new IDs, newer assessments, competing PRs and any ongoing LPR work. Recompute next available IDs **per record**; confirm actual date of new ratification and set both new `date` fields accordingly (do not backdate). Confirm review authority is recorded before creating a new assessment.
2. **Bounded patch:** only two canonical modules, one appended assessment and one prepended mutation apiece; preserve all old objects byte-for-byte and unchanged `instances`, `claim`, `sources`, `mechanisms`, `lineage`, `openQuestions`, `status`, legacy provenance flags, `lastProvenanceReview` and July `verificationStageReviews.js`. No edits to FCIF semantics or unrelated records. Tests can be added without changing production behavior.
3. **Structural / semantic validation:** `validate:all`, queue manifest check, lint, `npm test` before/after build, build/prerender, MCP typecheck. Assert old historical assessments and mutations equal prepatch serialized snapshots; no instance changes; current effective `collapsed / VS-04` for exactly both records; zero Pressure State transitions created; a stage-correction register entry exists; history, timeline, state warrant, matrix, MCP full/summary projections preserve all historic stage overlays and distinct negative/adjacent evidence caveats. Exact IDs, date and ordering stable.
4. **Release controls:** stage on isolated branch for inspection; review exact diff and CI; **separately request permission to merge and permit automated Cloudflare Pages/MCP Worker deployment**. On authorisation, verify main commit and Cloudflare deployed commit, both record pages, historical assessment chronology and live MCP parity; accept only after independent production gates. A02 pending MCP date/`recordedDate` parity remains an unrelated deferred item and is **not cleared** by these two cases.

## Decision request

**Prepared only**; current canonical main still shows FR-AM-0001 AS-005 VS-05 and FR-AM-0005 AS-004 VS-05. Operator may authorise:
- implementation of **both**, each with separate warrant and preserved history, on a new isolated branch;
- one only, with the other held;
- or further evidence review / deferral.

This document **is not** scientific ratification, an implementation commit or a release authority. Its two candidate assessment/mutation IDs are verified available only at the snapshot time.
