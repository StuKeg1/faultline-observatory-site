# Faultline Observatory — Drive Operating Index

**Faultline Observatory**
Version 1.0 — June 2026
Status: Active

---

## Purpose

This document is not a new governance system. It is a map of existing authority — a way for any reader (including a future version of Stuart, or a future collaborator) to find, in under a minute, which document governs a given question, and which copies in the Drive are not authoritative.

This index does not change what governs the Observatory. It only makes the existing authority chain visible. Where this index and a governing document disagree, the governing document is correct, and this index should be corrected to match it.

---

## How to Use This Document

If you are asking "what governs X," find X in the Authority Map below. If you are asking "which copy of a document is current," see Document Status Convention (defined in OPERATIONS.md, not restated here). If you are returning to the Observatory after time away, start with "Where to Start After Time Away" at the end.

---

## Authority Map

| Question | Governing document / location | Notes |
|---|---|---|
| What is the corpus' source of truth? | GitHub repo `StuKeg1/faultline-observatory-site` (live at faultlinewatch.com) | Not any Drive copy. Drive copies of Frontier Records are imports or backups only. |
| What work exists or is planned? | Outstanding Work Queue (Drive) | Authority for BACKLOG, QUEUE, and CLOSED tiers. |
| What is shipping right now? | Current Release Manifest | Execution-layer authority. References Outstanding Work Queue items by ID. |
| What governs interpretation of claims? | FCIF Methodology (current version) | Distinct from the Constitution — see below. |
| What is the Observatory obligated to preserve regardless of method, programme, or corpus? | Observatory Constitution | Survives changes to FCIF, programmes, or corpus. Governs over every other document in case of conflict. |
| What governs day-to-day operations and repo structure? | OPERATIONS.md | Summary view only. RM-001 holds the full repo map, RM-002 the change runbook. |
| What is the institutional health monitoring structure? | Health Framework + Metric Source Register + Monitoring Cadence | Three documents, one system: Framework defines metrics, Register defines sources, Cadence defines rhythm. |
| What does a specific month's health review say? | Observatory Health Review (OHR), dated by period | Append-only once the following month's OHR is published. |
| Where do open architectural questions live before being decided? | Review Notes (RN-series) | Holds observation and uncertainty together, without resolving either. Not a queue item; not a decision. |
| Where do dormant ideas with no current authority live? | Architectural Hypotheses (e.g. OBS-ARCH) | Status: Dormant. Authority: None. Carries an explicit activation condition. Distinct from BACKLOG, which implies intent to build. |
| What is the founding record of the project? | FM-001 | Institutional self-knowledge, not operational. |

---

## What Is *Not* Authoritative

These exist in the Drive and are useful, but none of them govern anything:

- **Drive copies of Frontier Records.** Live records are in the GitHub repo. Drive copies are imports, drafts, or backups, and must carry a `Non-authoritative copy` status header.
- **Superseded drafts of constitutional or methodology documents.** Earlier Constitution or FCIF drafts remain in Drive for institutional history, but must carry a `Superseded` status header.
- **"Records backup" folder contents.** Backup, not source. If a backup ever disagrees with the repo, the repo is correct.

---

## Document Status Convention

Every Drive document Claude generates carries a status header. The convention itself is defined in OPERATIONS.md, so it lives next to the rest of the operational workflow rather than being duplicated here. This index assumes that convention is in force.

---

## Where to Start After Time Away

1. Read OPERATIONS.md — current reality, next release.
2. Read the Outstanding Work Queue — what's open.
3. Check the most recent OHR — institutional health as of last review.
4. Check the RN-series — anything left open.
5. Only then touch the repo or Drive.

---

## What This Index Deliberately Does Not Do

- It does not introduce any status beyond what OPERATIONS.md already defines.
- It does not attempt to map every document in the Drive — only the layers that carry authority.
- It does not declare which specific copy of any given document is canonical at any moment. That is a per-document fact, stated in the document's own header, not in this index.
- It is not a replacement for RM-001. RM-001 is exhaustive; this index is selective, the same way OPERATIONS.md is selective relative to RM-001.

---

## Version History

| Version | Status | Notes |
|---|---|---|
| v1.0 | Active | Initial index. Produced following an external IA review that surfaced ambiguity between current and superseded same-titled documents in the Drive. |

---

*This index is a map, not a system. If it ever requires more than one page to stay current, it has started doing the Outstanding Work Queue's job, and should be trimmed back.*
