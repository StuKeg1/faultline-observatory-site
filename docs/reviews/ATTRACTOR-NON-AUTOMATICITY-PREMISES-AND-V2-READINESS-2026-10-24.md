# ATTRACTOR Non-automaticity — Institutional Premises Ruling and v2 Readiness — 24 October 2026

**Status:** BOUNDED GOVERNANCE RULING + READINESS DECISION  
**Outsider test frozen at:** `146e58fc59ca5df8461ead05c0a09b48583455fb`  
**Taxonomy review status:** registered FAIL unchanged  
**Scope:** resolve two premises exposed by the clean outsider test, then decide whether a new taxonomy v2 is institutionally warranted.

## 1. Premise A — Is declaring the tracked proposition established/rejected a governed assessment act?

### Finding: YES

Existing FCIF architecture makes the State Warrant / current assessment the authoritative current institutional judgment.

Supporting architecture:
- The record renderer states that the State Warrant gives the current assessment and retains authority.
- Evidence Brief is explicitly downstream and is neither an assessment nor an independent authority.
- RENDER-PILOT-001 states that mechanisms, lineage and questions document the causal/historical account while the State Warrant is the authoritative current assessment.
- Pressure State methodology requires every Pressure State change to be justified by an Assessment.
- Evidence and institutional assessment are explicitly separated in the MCP/public interface.
- The Collapsed state itself expresses the institutional judgment that the claim is no longer supported under current evidence.

Therefore a mechanism cannot itself issue the controlling institutional verdict that a tracked proposition is established, rejected, resolved or otherwise finally adjudicated. It may describe evidence as strongly supportive, contesting or even decisive in evidential character, but the controlling record verdict remains a governed assessment act.

### Ruling

For Non-automaticity:

> If ATTRACTOR wording makes satisfaction of the route sufficient by itself to establish, reject or resolve the tracked proposition as the Observatory's controlling judgment, it fails Non-automaticity.

This does not prohibit evidential language such as "would provide decisive evidence in favour of..." where a separate assessment remains substantively necessary.

## 2. Premise B — Does ATTRACTOR independently have authority to impose mandatory review/reassessment procedure?

### Finding: NO

No existing FCIF authority inspected grants ATTRACTOR that procedural power.

Existing architecture instead separates:
- evidence admission;
- mechanisms and forward-looking explanatory structures;
- reassessment;
- operator/governed decisions.

The live record can explicitly contain evidence admitted since the current assessment while saying: "No reassessment has been issued yet." This demonstrates that new evidence does not mechanically create a reassessment event.

Verification-stage challenges likewise can remain `awaiting_operator_decision`; a recommendation or challenge does not itself implement the decision.

The corpus also distinguishes editorial/provenance work from reassessment and repeatedly preserves current assessment authority until a governed reassessment is actually issued.

### Ruling

> ATTRACTOR has no standing authority to mandate a review, reassessment deadline, reopening action or other institutional workflow merely because its evidential condition occurs.

A statement such as "If X occurs, the record must be reassessed" therefore fails Non-automaticity under current FCIF governance unless a separate, independently ratified procedure later grants that trigger authority.

This is not a claim that FCIF can never create automatic review triggers. It records that ATTRACTOR does not currently possess that authority.

## 3. Clarified Non-automaticity premise set

A future clean taxonomy protocol may state explicitly:

1. Pressure State, Verification Stage and the controlling proposition verdict are governed assessment outputs.
2. ATTRACTOR currently has no independent authority to impose mandatory reassessment, reopening or review cadence.
3. ATTRACTOR may describe expected evidential significance and direction.
4. A separate governed decision must remain substantively necessary.
5. Ambiguous default/presumptive transition language fails closed.

These statements clarify institutional premises; they do not revise the original failed taxonomy review.

## 4. Outsider-test disposition

The clean outsider reproduced the intended Non-automaticity boundary across the supplied and fresh cases, including:
- directional evidential language remaining non-automatic;
- direct State/Stage/verdict assignment failing;
- mandatory procedure failing even without a predetermined scientific outcome;
- ambiguous "expected next State" language failing closed.

The two assumptions it identified are now resolved above from existing FCIF governance.

**Disposition: PASS — outsider reproduction successful; exposed institutional premises resolved without changing the core rule.**

## 5. Take-stock before taxonomy v2

### Specificity

**Status: READY FOR FUTURE PROTOCOL USE, subject to the bounded rulings already recorded.**

Resolved independently of the corpus:
- Model B: recognisable evidential route, not automatic adjudication criterion.
- Minimum dimensions: Target + Evidence form + Material scope/boundary.
- Operational test: later reviewer can determine whether new evidence materially engages the route without inventing target/evidence form/boundary.
- Explicit, uniquely resolvable canonical references may supply a dimension; ambiguous or implicit context fails closed.
- Clean outsider reproduced the intended boundary and exposed the canonical-reference issue, which was subsequently resolved.

Independent FCIF value: high. The rule distinguishes usable prospective evidential routes from vague "more evidence" language without creating shadow assessment rules.

### Non-automaticity

**Status: READY FOR FUTURE PROTOCOL USE.**

Resolved independently of the corpus:
- authority-separation rule;
- directional evidential language allowed;
- State/Stage/controlling verdict remains governed;
- no standing ATTRACTOR power to mandate review/reopening procedure;
- ambiguity fails closed.
- Clean outsider reproduced the boundary; its two institutional assumptions are now resolved from FCIF architecture.

Independent FCIF value: high. The rule protects State Warrant authority and prevents mechanisms from creating hidden workflow obligations.

### Claim relevance

**Status: PROTOCOL INPUT DEFECT, NOT A TAXONOMY CONCEPTUAL DEFECT.**

The failed clean classifier was asked whether an ATTRACTOR directly engages the governed proposition while being shown only the ATTRACTOR object. That is insufficient input for applying the criterion without reconstructing the proposition from prior knowledge.

Future protocol requirement:

> A classifier evaluating Claim relevance must receive the governed proposition text/field alongside the ATTRACTOR object.

No broader record context is authorised merely for convenience. If relevance cannot be determined from the proposition + ATTRACTOR (+ explicit canonical references permitted by the specificity ruling), the call fails closed.

Independent FCIF value: straightforward auditability; no new corpus field or editorial obligation required.

## 6. Is taxonomy v2 warranted?

### Decision: YES — a new, tightly bounded v2 is warranted.

Reason:

The original FAIL remains valid and is not reinterpreted. It established that the v1 admission criteria were not independently legible.

Subsequent work has not tuned categories against the 30 objects. Instead it has resolved the three concentrated causes identified by the clean classifier on independent FCIF grounds:

1. **Specificity** — substantive governance ambiguity resolved and outsider-tested.
2. **Non-automaticity** — authority ambiguity resolved and outsider-tested.
3. **Claim relevance** — missing-input defect identified; governed proposition is the required comparison input.

The original subtype sorting signal also remains relevant as motivation, not evidence of success: the v1 disagreement pattern was category-versus-U rather than P/D/R cross-sorting. A v2 can therefore test a falsifiable proposition:

> When the admission gates are independently legible and the governed proposition is supplied, can genuinely clean classifiers reproducibly admit and subtype the frozen ATTRACTOR corpus?

That question now has institutional value independent of any UI proposal. A PASS would support ratification consideration; a FAIL would provide strong evidence that ATTRACTOR remains overloaded or insufficiently governed and should remain an unratified working term.

## 7. Conditions for authorising v2 execution

This ruling finds v2 **warranted**, but does not itself start classification.

Before v2:
1. Create a completely new pre-registration and commit it before classification.
2. Preserve the original FAIL and all v1 artifacts unchanged.
3. Use the resolved Specificity and Non-automaticity rules without consulting existing object classifications while drafting object-level calls.
4. Supply each classifier only the permitted bundle: governed proposition + ATTRACTOR object + committed criteria. Any additional canonical reference content must be included only through the committed reference-resolution rule.
5. Use two genuinely new clean classifiers. Neither this session nor the prior clean Classifier 2 session may classify.
6. Pre-register numeric success/failure thresholds before either classifier runs. Do not weaken thresholds merely because v1 failed.
7. Pre-register how canonical references are materialised for classifiers so both receive identical information.
8. Retain fail-closed U; do not force best-fit subtype assignment.
9. Time-box the review. Inconclusive expiry leaves ATTRACTOR unratified.
10. No corpus repairs, UI work or schema changes during the classification experiment.

## 8. Holds

Until a separately authorised v2 is pre-registered and completed:
- ATTRACTOR remains unratified.
- The v1 FAIL stands.
- FR-AM-0001 ATTRACTOR repair remains HOLD.
- FR-AM-0002 ATTRACTOR repair remains HOLD.
- FR-QE-0002 remains unchanged.
- Reader-facing ATTRACTOR UI remains HOLD.
- Positive/negative asymmetry remains PARKED.
- No negative-attractor field is authorised.

**Next governance action, if authorised:** draft the v2 pre-registration only. Do not classify.
