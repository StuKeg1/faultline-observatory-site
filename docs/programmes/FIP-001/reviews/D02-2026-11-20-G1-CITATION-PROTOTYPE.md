# FIP-D02 — G1 citation format evidence review and bounded prototype
Date: 2026-11-20
Status: **IN REVIEW — EVIDENCE / NON-PUBLIC PROTOTYPE ONLY**
Original findings: F2-12 (cite and as-of record), F4-07 (citation guidance; merged scope).
Authority: Operator said "Next: FIP-D02 — Citation Format Prototype" after expressly deferring FIP-C01 newcomer, mobile, accessibility and simulated testing. This authorises analysis and a bounded draft, **not** website, FCIF, corpus, MCP, public citation policy or production changes.

## Source check (main at 2026-11-20)
- `src/data/derive.js`: `getCurrentAssessment(record)` derives the last assessment with stage review applied; `getAssessmentHistory(record)` preserves chronological history with governed overlays; `getRecordUrl(record)` forms canonical `/the-record/<lowercase-ID>/`.
- `src/components/PageMeta.jsx`: record page canonical URL is `https://faultlinewatch.com` + the record path. No per-assessment standalone canonical URL in current page metadata.
- `src/pages/FrontierRecord.jsx`: shows record ID and title, current assessment date, separate **latest record update**, assessment history and a State Warrant, with evidence entry anchors `id="evidence-${inst.id}"` and structured primary citations, URLs, DOIs and locators where available.
- `FR-QE-0001`: title "Google Quantum Advantage (Sycamore) — Computational Supremacy via Random Circuit Sampling"; `AS-002`, dated `2026-07-22`; later mutation date `2026-10-27` is **not** the assessment issuance date. Legacy S4 reconstruction qualifier exists in the record and must remain visible when relevant.
- `FR-AI-0009`: title "World Models — Physical Prediction and Transfer"; `AS-002`, dated `2026-09-28`; `IN-001` source structured as Hafner et al., Nature 640, 647–653 (2025), DOI `10.1038/s41586-025-08744-2`; other evidence anchors available.
- `FR-BT-0004`: subsequent AS-004 and AS-005 (both dated 2026-11-01) demonstrate why **date alone is insufficient** to identify a particular assessment; source-correction and admission distinctions matter.
- Live public content sampled through web retrieval for FR-QE-0001 (crawled 2026-11-19) and FR-AI-0009 (indexed older): showed record title, ID, current assessment status, assessed date, and separate update date. Public fetch is not immutable historical snapshot evidence.
- Programme controls: `BACKLOG.md` D02 is F2-12/F4-07; C01 remains an explicitly deferred human/AI-newcomer test and is not a prerequisite for D02 evidence review.

## Candidate citation scheme (not approved)
**Level R — stable Frontier Record**:
> Faultline Observatory. *[Canonical record title].* Frontier Record **[FR-ID]**. [Canonical record URL]. [Accessed YYYY-MM-DD where required by publication style].

**Level A — dated assessment in a living record** (preferred for claims about an institutional position):
> Faultline Observatory. *[Canonical record title].* Frontier Record **[FR-ID]**, assessment **[AS-ID]** (assessed **[displayed issued date and any provenance qualifier]**). [Canonical record URL]. [Accessed YYYY-MM-DD].

**Level I — evidence-instance locator** (cite original research separately where material):
> Faultline Observatory. *[Canonical record title].* Frontier Record **[FR-ID]**, evidence instance **[IN-ID]**. [Canonical record URL]#evidence-[IN-ID]. [Underlying source citation + DOI/URL if relied on].

The permanent record page is **living**. Assessment IDs help identify the historical position but do **not** provide an immutable version of the entire page at its issuance date. If claiming exact text as originally issued, the citation must explicitly distinguish text retrieved today from archived original text; otherwise do not claim verbatim historical snapshot fidelity. The accessed date means **retrieval date**, not assessment date or last-update date.

## Grounded examples
1. **Record:** Faultline Observatory. *Google Quantum Advantage (Sycamore) — Computational Supremacy via Random Circuit Sampling.* Frontier Record **FR-QE-0001**. https://faultlinewatch.com/the-record/fr-qe-0001/
2. **Assessment:** Faultline Observatory. *Google Quantum Advantage (Sycamore) — Computational Supremacy via Random Circuit Sampling.* **FR-QE-0001, AS-002** (assessed **2026-07-22**). https://faultlinewatch.com/the-record/fr-qe-0001/
3. **Evidence instance:** Faultline Observatory. *World Models — Physical Prediction and Transfer.* **FR-AI-0009, IN-001**. https://faultlinewatch.com/the-record/fr-ai-0009/#evidence-IN-001. Underlying primary work: Hafner, D. et al., *Mastering diverse control tasks through world models*, Nature 640, 647–653 (2025), https://doi.org/10.1038/s41586-025-08744-2.

## Decisions recommended for G2, not automatic site changes
- **CITE-01**: Three levels (R/A/I), with explicit identifiers and canonical URL: **propose accept**.
- **CITE-02**: Citation date labels use *assessed* for a dated AS, *accessed* for retrieval and *updated* only as ancillary metadata: **propose accept**.
- **CITE-03**: Preserve any LAD-001 uncertainty/recordedDate qualification, S4 reconstruction, stage provenance and corrections where germane; do not invent precise original issuance date: **propose accept**.
- **CITE-04**: In evidence-level citations, cite both Observatory's instance and primary paper; distinguish supporting source from the Observatory's appraisal: **propose accept**.
- **CITE-05**: Copy-button or visible citation panel on every record: **defer** pending small UX/technical scope and operator consent, not implied by G1.
- **CITE-06**: Deep-linking to an exact AS-ID without existing matching DOM anchor: **not currently established**. Do not invent `#assessment-AS-002` URLs. Requires code audit and separate implementation approval.
- **CITE-07**: Exports, DOI registration, dedicated immutable snapshots, JSON-LD and bulk citation metadata: **out of scope**.

## Quality / counterexample tests before acceptance
1. Same-date different assessments: FR-BT-0004 AS-004 and AS-005 must remain distinguishable by ID.
2. Later mutation after assessment: FR-QE-0001 AS-002 (2026-07-22) vs latest update (2026-10-27) must not be collapsed.
3. Legacy/provenance uncertainty: sample FR-QE-0003 AS-001 and retain its displayed LAD-001 qualification, not falsely present 2024-01-15 as certain issuance.
4. Evidence sources with structured citation, legacy `sourceReference`, missing DOI, and multiple sources: citation UI may not silently invent URLs/DOIs.
5. Source-level references point to real `#evidence-IN-...` anchors; assessment anchor availability requires separate verification.
6. Test that citations remain valid if the current State Warrant changes later; cite AS-ID and access date appropriately.

## G1 disposition
**Evidence review begun and preliminary three-level prototype drafted. Not approved or implemented.** Next bounded gate: operator review of CITE-01 through CITE-07 and explicit choice of whether to prototype noncanonical citation text only or a small UI change. No external newcomer test, page edits or canonical content changes authorised.
