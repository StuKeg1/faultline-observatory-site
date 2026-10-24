# ATTRACTOR Taxonomy Governance Review v2 — Final Result

**Status:** CLOSED — FAIL  
**Date:** 2026-10-24  
**Pre-registration:** `0b529b162c12b91d142af72d2f85326afe5472bb`  
**Frozen corpus:** `94dfc8ba721eca5bc71def192c4273f3b6d84266`  
**Classifier 1 frozen output:** `d10dde1ebb659d764a48e9026e7b352529328044`  
**Classifier 2 frozen output:** `15c80a78dac179b9d38c30f3fdb4d6e0cbb5b891`

## 1. Procedural ruling

Classifier 1 is accepted as a clean classifier under the registered protocol.

Classifier 2 was frozen verbatim before comparison, as required by §11. Its use of the same Anthropic / Claude family as Classifier 1 is **not disqualifying**: §9 states that different model families are preferred where practicable and expressly permits same-family use when disclosed without threshold relaxation.

Classifier 2 also disclosed that its session account context identified the operator as Faultline's founder, while stating that no memory files were opened and that only the nine frozen bundle files were used for the classification.

The pre-registration's §8 permitted-input rule is exhaustive: each clean classifier may receive only the pre-registration, governed proposition, ATTRACTOR object and explicitly referenced canonical objects / unresolvable markers, and "Nothing else is permitted." No exception for passive account metadata was registered.

Accordingly, the founder-identity account context is an **extra received input** and Classifier 2 cannot be treated as procedurally clean under the literal registered rule. No post-hoc harmlessness exception is introduced.

This procedural defect is recorded separately from the mechanical diagnostic comparison below. It does not change the final result because Classifier 1 independently exceeds the registered REJECT ceiling, making Admission PASS impossible even if Classifier 2 were otherwise accepted.

The bundle-freeze issue disclosed by Classifier 2 does not create a separate defect. It classified the nine bundle files at the registered freeze commit `25e2a7c0b5bb1fd260c71df901ad4e509a83716d`. The administrative freeze manifest was intentionally excluded from classifier inputs.

## 2. Mechanical comparison of the two frozen outputs

The comparison below is diagnostic because of the Classifier 2 procedural ruling. No reconciliation, recoding, best-fit conversion or threshold reinterpretation was performed.

### Admission

- Exact ADMIT/REJECT agreement: **30 / 30 = 100%**
- Admission disagreements: **0**
- Classifier 1 REJECT calls: **7 / 30**
- Classifier 2 REJECT calls: **7 / 30**
- Both classifiers rejected exactly:
  - FR-AI-0001 / AT-001
  - FR-AM-0004 / AT-001
  - FR-AM-0005 / AT-001
  - FR-AM-0006 / AT-001
  - FR-BT-0001 / AT-001
  - FR-QE-0003 / AT-001
  - FR-QE-0004 / AT-001
- ATTRACTOR/OQ beyond-criteria counts:
  - Classifier 1: **0**
  - Classifier 2: **1**
- Fixed FR-AM-0002 OQ-004 negative-convergence exclusion: retained by both.

Against §12.1:
- A — admission agreement ≥26/30: **PASS**
- B — each classifier REJECT ≤3/30: **FAIL** (C1 = 7; C2 = 7)
- C — neither OQ-boundary count ≥4: **PASS**
- D — fixed exclusion retained: **PASS**

**Admission layer: FAIL.**

Importantly, Classifier 1 alone is sufficient to make Admission PASS impossible because §12.1B requires each classifier to assign no more than three REJECT calls.

### Subtype

Jointly admitted population: **23**

Exact P/D/R agreement: **21 / 23 = 91.3%**

Registered minimum for 23 jointly admitted objects:
- smallest whole number at least 86.7% of 23 = **20**
- observed exact agreement = **21**

Subtype disagreements:
1. FR-AI-0004 / AT-001 — Classifier 1: **P**; Classifier 2: **D**
2. FR-QE-0008 / AT-001 — Classifier 1: **P**; Classifier 2: **D**

SUBTYPE-UNCLEAR:
- Classifier 1: **0**
- Classifier 2: **0**

Against §12.2:
- A — subtype agreement ≥86.7%: **PASS**
- B — SUBTYPE-UNCLEAR ≤3/30 each: **PASS**
- C — no hidden best fit: **PASS**

**Subtype layer: PASS diagnostically.**

## 3. Registered outcome

Under §12.3, overall PASS requires both Admission PASS and Subtype PASS.

Admission fails the pre-registered REJECT ceiling. In addition, Classifier 2 does not satisfy the literal exhaustive-input cleanliness requirement.

**FINAL v2 RESULT: FAIL.**

This result does not depend on resolving either procedural ambiguity in Classifier 2 or the two subtype disagreements. Classifier 1's seven REJECT calls already breach the registered ceiling.

## 4. Interpretation bounded by the experiment

The final attempt produced a strong but non-ratifying result:

- Admission decisions were highly reproducible across the two frozen outputs: 30/30 identical.
- The same seven legacy ATTRACTOR objects failed admission in both outputs.
- Subtyping among jointly admitted objects was also reproducible: 21/23 exact P/D/R agreement, with no SUBTYPE-UNCLEAR calls.
- The taxonomy nevertheless fails its own historical-coherence requirement because 7/30 legacy ATTRACTORs are rejected, above the registered 3/30 ceiling.

The result therefore does **not** support ratifying ATTRACTOR as a governed taxonomy under this experiment. It does, however, localise the failure: reproducibility is not the principal problem in v2; compatibility of the admission rule with the existing legacy ATTRACTOR population is.

No legacy object is repaired, recoded or grandfathered in this result.

## 5. Final-attempt consequences

Per §§2, 14 and 15:

- ATTRACTOR remains an **unratified working term**.
- v1 FAIL and v2 FAIL remain part of the governance record.
- **There is no v3.**
- FR-AM-0001 ATTRACTOR repair remains **HOLD**.
- FR-AM-0002 ATTRACTOR repair remains **HOLD**.
- FR-QE-0002 remains unchanged with no ATTRACTOR.
- Reader-facing ATTRACTOR UI remains **HOLD**.
- Positive/negative evidential asymmetry remains **PARKED**.
- No negative-attractor field is authorised.
- No corpus repair or UI work may be justified by this failed taxonomy experiment.

A future FCIF constitutional redesign may separately replace or retire the working term, but that would not be a v3 taxonomy attempt.

**Review closed.**
