# FIP-A03 — Bounded post-merge temporal-wording review
**Review date:** 2026-11-15  
**Status:** EVIDENCE-ONLY REVIEW COMPLETE — DECISION REQUIRED FOR ANY EDIT  
**Scope authorised:** review obsolete preparation/conditional language in the newly appended stage-correction assessment notes and mutations for FR-AM-0001 and FR-AM-0005, and the formerly draft-only description of merged PR #255. No approval to edit scientific records, their history, PR descriptions or deployment.  
**Finding type:** record/procedure chronology and reader-facing wording; **not** scientific evidence, Verification Stage or Pressure State.

## Sources independently inspected
- Canonical `main`: `src/data/records/FR-AM-0001.js` blob `197bfdbfc978b38a007b58238ea1562320729164`; `src/data/records/FR-AM-0005.js` blob `ab98c513e69a9f52e03b9a4deda99a1ce7053a98`.
- Exact current entries: FR-AM-0001 `assessments[AS-006].assessorNote`, `mutationLog[M-017].note`; FR-AM-0005 `assessments[AS-005].assessorNote`, `mutationLog[M-022].note`.
- [PR #255](https://github.com/StuKeg1/faultline-observatory-site/pull/255), verified GitHub state `closed/merged`, merge SHA `2a4b2f7c2623fb66f800e45e60aabd94eff88456`, original draft PR body retained.
- [CI #968](https://github.com/StuKeg1/faultline-observatory-site/actions/runs/43764458900) passed; FIP controls [HANDOFF](../HANDOFF.md) and [DECISIONS](../DECISIONS.md) already attest the operator's separate implementation and merge authorities.
- Operator-supplied Claude [live MCP audit, 2026-11-15]: live `faultline_about` reported the merge SHA; both live full records included these same phrases, 32-record rebuilt summary/full parity reported. **External audit report was reviewed, not independently rerun via the MCP connector in this wording review**.

## Finding W-01 — FR-AM-0001 AS-006 and M-017

| Exact field | Present text (short excerpt) | Issue | Advised treatment |
| --- | --- | --- | --- |
| `assessments`, id `AS-006`, `assessorNote` (2026-11-15) | “Proposed FIP-A03 operator-ratified stage reconciliation, with issuance date to be confirmed at implementation.” | In the live *issued* entry, an unqualified preparatory clause can be misread as still awaiting approval or issuance. | Add a separately dated, linked **post-issuance clarification**; do not silently replace the stored assessor note. |
| `mutationLog`, id `M-017`, `note` (2026-11-15) | “Operator-ratified FIP-A03 current-stage reconciliation, if separately authorised for implementation.” | Conditional is now fulfilled by explicit operator authority and merge, yet appears unresolved in the historical mutation. | Same append-only clarification referencing this mutation ID. |

Verified surrounding context: original AS-005 is still COLLAPSED / VS-05, while issued AS-006 is COLLAPSED / VS-04; IN-008/IN-009 remain externally beam-driven adjacent findings, not autonomous cell fusion.

## Finding W-02 — FR-AM-0005 AS-005 and M-022

| Exact field | Present text (short excerpt) | Issue | Advised treatment |
| --- | --- | --- | --- |
| `assessments`, id `AS-005`, `assessorNote` (2026-11-15) | “Proposed FIP-A03 operator-ratified stage reconciliation, with issuance date to be confirmed at implementation.” | Same unresolved-sounding issuance qualifier on an already issued assessment. | Separately dated linked **post-issuance clarification**, no in-place rewrite. |
| `mutationLog`, id `M-022`, `note` (2026-11-15) | “Operator-ratified FIP-A03 current-stage semantic correction, if separately authorised for implementation.” | Conditional authority has been supplied and acted upon. | Same append-only clarification. |

Verified surrounding context: AS-004 remains historical COLLAPSED / VS-05; AS-005 is current COLLAPSED / VS-04; the LaSc₂H₂₄ alloy precursor / simultaneous deposition distinction and the bound on a universal null remain unchanged.

### Exact proposed *new* clarification (non-canonical draft; not yet assigned a mutation or enacted)

> **FIP-A03 issuance-status clarification (review date 2026-11-15).** The prospective or conditional phrasing retained in FR-AM-0001 AS-006/M-017 and FR-AM-0005 AS-005/M-022 records the earlier preparation/approval gate. Subsequent explicit operator authorisations resulted in the append-only changes being issued on 2026-11-15 and merged through PR #255 at `2a4b2f7c2623fb66f800e45e60aabd94eff88456`. The phrases do **not** mean these already-issued corrections remain proposed or unauthorised. This clarification updates **administrative status only**; the original assessor notes and mutation entries, the current VS-04 and COLLAPSED determinations, all scientific evidence, and historical July stage reviews remain unchanged.

**Implementation alternatives (choose only after operator approval):**

A. **Recommended — non-destructive linked clarification:** record an append-only, dated annotation against precisely the four `recordId / assessmentId / mutationId / field` locators, in an existing compatible governed correction/display mechanism if it is available; otherwise prepare a small derived annotation with explicit linkage, tests, and clear display in assessment history, mutation log and full MCP projection. No silent change to existing entries. Do not invent assessment or mutation IDs, and do not create a new scientific assessment for administrative wording only. Test that historical source remains byte-for-byte and public users see the qualification. Precise implementation mechanism requires separate design approval; no mechanism was chosen in this evidence-only review.

B. **Minimal administrative-only annotation:** add this clarification to FIP governance and link it in a PR comment, leaving the historical public phrases visible and unqualified in record details. Faster and no code changes, but it does not fix record/MCP reader comprehension; suitable if the public ambiguity is judged low priority.

C. **Direct replacement of existing assessor/mutation notes (not recommended):** cosmetically remove the outdated qualifiers from the original objects. Would modify historical issued text in place and violate the strict append-only preservation approach used for A03 without special express historical-correction authority; even with authorisation the original values and migration receipt must be preserved separately. Do not do this as an unreviewed shortcut.

## Finding W-03 — PR #255 body is an unchanged draft-era snapshot

**Exact location:** [merged PR #255](https://github.com/StuKeg1/faultline-observatory-site/pull/255), original body under **Purpose and authority**, **Validation prior to CI**, and **Review gates**:
- “merge and production deployment are NOT authorised” describes the **draft-PR moment**;
- “Full npm checks and CI are not yet verified” describes the **before-CI moment**;
- “A separate operator approval is required before converting this draft, merging to main...” is a correct prior control requirement, now fulfilled.

These phrases are **not evidence of improper merging**: GitHub records the subsequent authorised `closed/merged` transition, successful CI #968, deployment and public-record checks. Editing the original PR description to remove the historic restrictions would rewrite the context of the CI-only permission and is unnecessary.

**Recommended exact PR addendum** (if separately authorised to post):

> **Post-merge status note — 2026-11-15:** The original PR description above documents the restrictions at initial *draft creation*, not the final disposition. The operator subsequently authorised bounded CI repairs and separately authorised merge of PR #255. CI #968 passed (221/221 tests before and after build); GitHub reports merged commit `2a4b2f7c2623fb66f800e45e60aabd94eff88456`. Cloudflare Pages deployment and both corrected public records were later verified. A separate Claude direct-JSON-RPC live MCP audit reported current `collapsed / VS-04` and preserved history for both records with consistent summary/full retrieval. The A02 historical `date`/`recordedDate` MCP gate remains deferred; this note changes no prior authority or scientific result.

Publish as a **new PR conversation comment** or append a separately dated *addendum section* without replacing the original draft-era paragraphs. The original PR description is a valid historical snapshot and should be kept.

## Risk, alternatives and confidence

- **W-01/W-02 confirmed, high confidence (temporal wording):** the textual conditionals exist in both canonical issued records, are echoed by the live MCP audit, and conflict with *present status* when read without historical framing. They do not change the scientific warrant, assessment date or Pressure State. Strongest dissent: a dated proposal snapshot can legitimately carry future-looking language and preserving it as historical provenance may be preferable; the ambiguity is primarily about display and interpretation, not evidence.
- **W-03 confirmed as a documentation status gap, medium impact; high confidence.** The source text was accurate when written. Strongest dissent to editing: preserving original draft authorisation language is governance-positive; adding a subsequent status note is sufficient.
- **No safety-critical or release-blocking data discrepancy identified** in this narrow review. The external MCP parity test is evidence for A03 acceptance, but any *formal* A03 ACCEPTED transition requires separate operator acceptance and a final governed receipt/control update.

## Scope and hand-off

**Review outcome:** **BOUNDED REVIEW COMPLETE — EDITORIAL DECISION REQUIRED.** No corpus or PR change authorised here. Preserve all AS/M mutation objects, evidence, source references, chronology, July overlays, claim interpretation, FCIF, and the A02 MCP parity deferral. The proposed clarification is a draft, not an enacted mutation, stage correction, scientific reassessment or live-site update.

**Next single decision:** authorise a **narrow append-only administrative clarification implementation design** for W-01/W-02, with exact source/display/MCP effect and tests, and a new post-merge PR status comment for W-03. Do not conflate that scope with A03 acceptance or A04's broader public correction-history audit.
