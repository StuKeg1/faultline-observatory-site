# ATTRACTOR v2 Open Items — Reference Stability and v1 Unclear-call Mapping — 24 October 2026

**Status:** CLOSED BEFORE V2 PRE-REGISTRATION  
**Frozen v1 corpus:** `94dfc8ba721eca5bc71def192c4273f3b6d84266`  
**v1 result:** FAIL — unchanged

This note closes the two governance items required before drafting ATTRACTOR Taxonomy Governance Review v2.

## 1. Canonical-reference stability

### Question

When an ATTRACTOR explicitly references another canonical object, is that reference:
- **live**, following the current canonical object as it is amended; or
- **pinned**, retaining the referenced object's meaning at the time the ATTRACTOR was authored?

### Ruling

**Operational corpus references are live. Governed experiments and historical audits are snapshot-pinned.**

#### Live operational semantics

In the current corpus, an explicit reference to another canonical object resolves to that object's current canonical content. The reference does not silently preserve an obsolete private copy of the referenced object's meaning.

This follows existing FCIF practice:
- the repository is canonical and later substantive corrections take precedence over archived wording;
- explicit current references are preferred to narrative inference;
- stale cross-references are corrected rather than treated as permanently bound to their historical target wording;
- duplicate authoring is avoided where canonical structure can supply the governed meaning.

Therefore, when a substantively amended canonical object is explicitly referenced by one or more ATTRACTORs, the amendment creates a **bounded dependency-check obligation** for those citing ATTRACTORs.

The dependency check asks only whether the amended target still supplies the target, evidence form, boundary or other meaning for which the ATTRACTOR relies on it. It is not automatically:
- a reassessment;
- an ATTRACTOR rewrite;
- a taxonomy change;
- evidence admission.

If the reference becomes missing, ambiguous, stale or materially incompatible, the dependent ATTRACTOR fails closed until separately reviewed.

This dependency obligation is event-driven by amendment of the referenced canonical object; it is not a recurring review cadence.

#### Snapshot semantics

A governed experiment, audit or historical result must be reproducible against its declared snapshot.

For ATTRACTOR taxonomy v2:
- corpus snapshot is `94dfc8ba721eca5bc71def192c4273f3b6d84266`;
- governed propositions are taken verbatim from that snapshot;
- ATTRACTOR objects are taken verbatim from that snapshot;
- every canonical object explicitly referenced by an ATTRACTOR is taken verbatim from that same snapshot;
- later amendments are irrelevant to the registered v2 classification.

Thus the v2 bundle is fully pinned even though operational references are live outside the experiment.

## 2. Classifier 2 unclear-call mapping

Classifier 2 assigned U to 12 objects. Two were also U for Classifier 1:
- FR-AI-0001 AT-001
- FR-BT-0001 AT-001

The remaining ten are the v1 disagreement objects. Their cited reasons map as follows.

| Object | Classifier 2 cited basis | Admission criterion involved? | Taxonomy/category boundary involved? |
|---|---|---:|---:|
| FR-AI-0002 AT-001 | Specificity; ATTRACTOR/OQ boundary | Yes | Yes — OQ boundary |
| FR-AI-0003 AT-001 | Specificity | Yes | No |
| FR-AI-0004 AT-001 | Specificity; definitional-question/OQ rule; Resistance Mechanism exclusion | Yes | Yes — OQ/exclusion boundary |
| FR-AI-0005 AT-001 | Specificity | Yes | No |
| FR-AI-0009 AT-001 | Claim relevance; milestone exclusion | Yes | Yes — exclusion boundary |
| FR-AM-0004 AT-001 | Non-automaticity / P characteristic 4 | Yes | No independent subtype ambiguity; same authority gate |
| FR-AM-0005 AT-001 | More than one category applies: P/R overlap | No | **Yes — direct P/R subtype ambiguity** |
| FR-AM-0006 AT-001 | Non-automaticity / P characteristic 4 | Yes | No independent subtype ambiguity; same authority gate |
| FR-QE-0003 AT-001 | Non-automaticity | Yes | No |
| FR-QE-0004 AT-001 | Non-automaticity | Yes | No |

### Mechanical summary

Of the ten disagreement objects:
- **6** cited admission criteria only: AI-0003, AI-0005, AM-0004, AM-0006, QE-0003, QE-0004.
- **3** cited an admission criterion plus an ATTRACTOR/non-ATTRACTOR boundary or exclusion: AI-0002, AI-0004, AI-0009.
- **1** cited a genuine P/D/R subtype-boundary ambiguity: AM-0005 (P versus R).

There were **zero P-versus-D or D-versus-R disagreements** identified by Classifier 2.

Classifier 2's own cross-object ambiguity note separately identified:
- Non-automaticity ambiguity on AM-0004, AM-0006, QE-0003, QE-0004 and AM-0007 AT-001;
- Specificity ambiguity on AI-0002, AI-0008, BT-0005, QE-0007, QE-0008 and AM-0007 AT-002;
- Claim-relevance input insufficiency especially on AI-0009, BT-0001 and BT-0005;
- OQ-boundary judgement beyond criteria on AI-0002 and AI-0004;
- P/R overlap only on AM-0005.

This confirms that the v2 take-stock could not legitimately treat every v1 disagreement as an admission-gate problem.

## 3. P/R boundary — FCIF-grounded clarification

### Problem

v1 R said a reopening route justifies reopening/revisiting a bounded disposition "rather than directly establishing the tracked proposition." FR-AM-0005 AT-001 says a future candidate "would reopen the record" while also describing evidence "sufficient to establish superconductivity." Classifier 2 therefore saw both R and P.

### Existing FCIF authority

The current architecture establishes independently that:
- a collapsed/closed record can receive new evidence without reopening;
- reopening is a governed institutional action;
- satisfying a prospective evidential route does not itself issue the controlling proposition verdict;
- State Warrant remains assessment authority.

FR-AM-0005 itself demonstrates the distinction: new candidate evidence was logged without reopening, and a later assessment explicitly retained COLLAPSED / CLOSED.

### Clarification

**P and R are distinguished by the institutional function encoded by the route, not by the apparent scientific strength of the prospective evidence.**

#### P — Positive evidential path

A route whose encoded prospective function is to supply materially positive evidence toward establishment of the governed proposition, while leaving the controlling verdict to assessment.

#### R — Reopening path

A route whose encoded prospective function is to make a bounded prior disposition eligible for reopening/revisiting through governed action. The route must explicitly encode reopening/revisiting; classifiers may not infer terminal status from outside the permitted bundle.

Evidence underlying an R route may be scientifically very strong. That does not convert R into P when the object's institutional function is explicitly reopening a prior disposition.

#### Controlling-verdict language

If the same object makes occurrence of the condition sufficient by itself to **establish the proposition as the controlling institutional verdict**, that is not a P/R tie-breaker. It fails the independently governed Non-automaticity admission rule.

Accordingly, subtype selection occurs only after admission. An object that fails Non-automaticity is U and receives no P/D/R subtype.

### R precedence rule

For an admitted object:

1. If the object explicitly frames the prospective route as reopening/revisiting a bounded prior disposition, classify **R**.
2. Otherwise, if it explicitly frames an outcome-open discriminating route, classify **D**.
3. Otherwise, if it frames a directionally positive evidential route toward establishment, classify **P**.
4. If more than one remains materially applicable after these functional distinctions, classify **U**.

This precedence is not based on the existing 30-object outcomes. It follows FCIF's separation between evidential significance, reopening, and controlling assessment authority.

## 4. Effect on v2

The v1 FAIL remains untouched.

The v2 pre-registration may now:
- use snapshot-pinned canonical references while recording live operational semantics separately;
- score admission separately from subtype;
- use the resolved Specificity and Non-automaticity rules;
- supply governed proposition text for Claim relevance;
- carry the OQ/exclusion boundary unchanged unless independently modified;
- use the clarified P/R institutional-function boundary above.

No v2 classification has begun.
