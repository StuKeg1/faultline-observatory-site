# FR-AI-0001 AT-001 Redundancy Review — 2026-10-24

**Status:** COMPLETE — RETIRE AUTHORISED IN PRINCIPLE; CORPUS CHANGE NOT EXECUTED BY THIS REVIEW
**Canonical base:** `fb96a73a1834e30d7d49e4ef4bbf8accda5cb04d`
**Record:** FR-AI-0001
**Object:** AT-001
**Review class:** bounded record-clarity / mechanism-redundancy review

## Question
Does FR-AI-0001 AT-001 perform an institutional function not already carried by governed record structures, such that retaining it improves the record independently of the failed ATTRACTOR taxonomy? This is not taxonomy v3; v2 does not determine this review.

## Current object
AT-001 describes extended chain-of-thought in the o1/o3 architecture as a mechanism candidate and asks whether it produces genuine generalisation or higher-order pattern matching. It says this draws the evidence trail toward a potential resolution point.

## Governed structures carrying the same work
- **Claim:** whether LLMs can perform multi-step reasoning that generalises beyond memorised training examples.
- **BN-001:** the generalisation threshold is undefined; no agreed sufficient degree, memorisation comparison class, or beyond-training distribution exists.
- **OQ-002:** asks whether o1/o3-class computation supports generalisation, what mechanism accounts for it, and separately whether verbalised chain-of-thought faithfully describes the computation. It prevents trace faithfulness from deciding generalisation by itself.
- **AS-002:** says chain-of-thought unfaithfulness sharpens OQ-002 rather than closing it and that AT-001's mechanism candidate is not settled in either direction.
- **AS-003 / 2026-10-12 governed reassessment:** reaffirms ESCALATING / VS-03, leaves OQ-001–005 open, and again distinguishes trace faithfulness from generalisation.

## Redundancy test
AT-001 adds no distinct governed claim boundary, assessment decision, separate evidential threshold, unique future evidence condition, question not already in OQ-002, bottleneck not already in BN-001, or governed dependency required to interpret State Warrant.

Its distinctive contribution is narrative framing: extended chain-of-thought is labelled a mechanism candidate and described as drawing the evidence trail toward resolution. That is weaker and less precise than OQ-002 / BN-001 / assessment structure.

## Decision
**RETIRE.**

Retirement is justified by current record redundancy and clarity, independently of ATTRACTOR taxonomy v2.

The substantive content remains represented:
- generalisation in the claim, BN-001 and OQ-002;
- o1/o3 mechanism question in OQ-002;
- trace-faithfulness distinction in OQ-002, AS-002, lineage and evidence;
- historical assessments mentioning AT-001 remain append-only history and must not be rewritten.

AT-001 should be removed from the current `mechanisms` array through a bounded editorial/governance correction with an append-only mutation receipt. Historical assessment prose referencing AT-001 remains unchanged as historical reference to the then-current object.

## Execution boundary
This review authorises a separate bounded retirement implementation but does not itself mutate FR-AI-0001. Implementation must:
1. remove only current `mechanisms.AT-001`;
2. append one editorial/governance mutation recording retirement for redundancy;
3. preserve claim, instances, assessments, State, Stage, BN-001, RM-001/002, OQ-001–005, lineage and prior mutation history;
4. add a machine-readable receipt if provenance-integrity tests require it;
5. preserve historical assessment text, including AS-002's reference to AT-001;
6. classify the change as non-evidential and non-reassessment;
7. verify derived surfaces/tests do not assume every record has an ATTRACTOR.

## Taxonomy boundary
This retirement does not ratify ATTRACTOR, apply P/D/R, create a replacement category, establish a general rule that v2-rejected objects must be removed, reopen v2, or constitute v3.

## Result
FR-AI-0001 can be clearer with AT-001 retired. The governed record already preserves the substantive mechanism/generalisation problem in more precise structures.
