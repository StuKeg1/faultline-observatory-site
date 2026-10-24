# ATTRACTOR Non-automaticity Governance Inquiry — 24 October 2026

**Status:** BOUNDED GOVERNANCE FINDING — OUTSIDER TEST NOT YET RUN  
**Scope:** Non-automaticity only  
**Taxonomy review status:** unchanged — registered FAIL remains in force  
**Corpus classification:** not performed  
**Reader-interface work:** out of scope

## Question

When does language describing the expected evidential consequence of an ATTRACTOR improperly become a rule that determines reassessment, Pressure State or Verification Stage?

This inquiry does not ask which formulation best fits the existing ATTRACTOR corpus. Existing ATTRACTOR objects are not classified or repaired here.

## 1. Architectural requirements

Existing FCIF implementation and governance establish the following independently of the failed taxonomy review:

1. **Pressure States are descriptive, not procedural.** The public methodology states that they are not a mandatory sequence and that every Pressure State change is justified by an Assessment.
2. **Verification Stage is a separate evidence-depth axis.** It is not inferred from Pressure State and stage challenges may remain pending operator decision.
3. **Evidence does not itself perform reassessment.** The record renderer explicitly distinguishes evidence admitted since an assessment from a later reassessment; provenance enrichment likewise does not trigger reassessment.
4. **State Warrant / governed assessment retains current authority.** Mechanisms and forward-looking structures do not supersede it.
5. **FCIF permits directional evidential judgment.** Evidence can materially sharpen, weaken, redirect or operationalise an assessment without itself becoming the assessment decision.

These constraints require a distinction between describing the expected evidential bearing of a future event and assigning institutional transition authority to that event.

## 2. Governing distinction

### Evidential consequence

An ATTRACTOR may state that evidence of a specified kind would:
- materially bear on the proposition;
- strengthen or weaken a proposition;
- remove or reduce a stated uncertainty;
- satisfy or engage a specified evidential route;
- support, warrant or justify **consideration of** reassessment;
- support movement in a stated evidential direction, provided the wording preserves a separate governed assessment decision.

Such language describes expected evidential significance. It does not itself change the record.

### Governance consequence

An ATTRACTOR becomes automatic when its wording makes occurrence/satisfaction of the prospective condition **sufficient by itself** to:
- assign or change a Pressure State;
- assign or change a Verification Stage;
- issue, replace or determine an Assessment/State Warrant;
- declare the proposition established, rejected, resolved or reopened where that declaration is itself a governed assessment act;
- bypass the separate assessment/authorisation step.

The core defect is therefore not directional language. It is **transfer of decision authority from governed reassessment to the prospective condition itself**.

## 3. Non-automaticity rule

> **An ATTRACTOR is non-automatic only if satisfying or engaging it changes the evidential situation without, by its own terms, determining the governed assessment outcome.**

Operational question:

> **After the stated future condition occurs, does FCIF still require a separate governed assessment decision to determine Pressure State, Verification Stage or the controlling verdict?**

- If **yes**, the wording may satisfy Non-automaticity.
- If **no**, it fails Non-automaticity.
- If the text is ambiguous about whether a separate governed decision remains necessary, it fails closed for purposes of a future taxonomy test.

## 4. Synthetic boundary cases

These examples are synthetic and are not derived from current Frontier Records.

### N1
> Evidence of X would materially bear on the claim.

**Non-automatic.** It states evidential relevance only. A separate assessment remains necessary.

### N2
> Independent reproduction of X under condition Y would materially strengthen the proposition.

**Non-automatic.** It gives expected evidential direction but does not determine State, Stage or verdict.

### N3
> Independent reproduction of X under condition Y would support movement toward RESOLVING.

**Non-automatic, but authority-sensitive wording.** "Support movement toward" describes expected direction rather than assigning RESOLVING. A governed assessment is still required. The phrase must not be read as an automatic transition instruction.

### N4
> Independent reproduction of X under condition Y would justify consideration of reassessment toward RESOLVING.

**Non-automatic.** The separate reassessment is explicit.

### N5
> Once X is independently reproduced under Y, the record moves to RESOLVING.

**Automatic — fails.** The event itself is made sufficient to change Pressure State.

### N6
> Independent reproduction of X under Y establishes VS-04.

**Automatic — fails.** The prospective event itself assigns Verification Stage.

### N7
> Independent reproduction of X under Y establishes the proposition.

**Fails Non-automaticity where "establishes" is being used as the controlling institutional verdict.** A mechanism may predict strong evidential significance, but it cannot itself issue the governed verdict.

## 5. Adversarial cases

### Strong evidence without automatic governance

> A preregistered independent replication meeting threshold T would provide decisive evidence in favour of the proposition.

This can remain non-automatic. "Decisive evidence" is a strong evidential characterization, but the record still requires governed assessment to determine its institutional consequence. Whether "decisive" is epistemically warranted is a separate content-quality question.

### Conditional state language

> If X occurs, RESOLVING would become the expected next Pressure State.

Fails the boundary for a future taxonomy rule unless the wording explicitly preserves reassessment authority. It converts a prospective mechanism into a presumptive State rule and makes the remaining assessment appear procedural.

### Reassessment trigger

> If X occurs, the record must be reassessed.

This is **not automatically a State/Stage transition**, but it imposes a procedural obligation. ATTRACTOR has not been independently granted authority to mandate review cadence or workflow. Under the current FCIF architecture this fails the bounded Non-automaticity rule unless a separate ratified governance rule grants such trigger authority.

### Reopening

> Evidence X would justify reopening the record for governed reassessment.

Non-automatic. Reopening is presented as a governed action to be justified, not as an automatic verdict change.

> Evidence X reopens the record.

Automatic under this rule if reopening itself is a governed institutional action.

## 6. Why directional language is not itself disqualifying

Banning words such as "strengthen", "weaken", "toward", "support", "warrant" or "justify" would erase useful prospective meaning and is not required by FCIF authority separation.

The relevant test is whether the language preserves a meaningful subsequent decision.

A formulation is not saved merely by adding the word "consideration" if the rest of the sentence predetermines the outcome. Conversely, a formulation does not become automatic merely because it identifies a likely evidential direction.

## 7. Relationship to Specificity

Specificity and Non-automaticity are independent gates.

A route may be:
- highly specific but automatic;
- specific and non-automatic;
- vague but non-automatic;
- vague and automatic.

For example, a precise threshold followed by "the record moves to RESOLVING" can pass Specificity while failing Non-automaticity.

This preserves the outsider-test observation on synthetic S4: extra transition language does not make an otherwise specific route fail the Specificity criterion; it is evaluated separately under Non-automaticity.

## 8. Governance finding

**Non-automaticity is an authority-separation rule, not a ban on directional evidential language.**

The institutional boundary is:

> **ATTRACTOR may describe what future evidence is expected to mean evidentially, including its likely direction, but it may not make occurrence of that evidence sufficient by itself to determine the governed assessment, Pressure State, Verification Stage, controlling verdict, reopening action or mandatory review procedure.**

A separate governed decision must remain substantively necessary, not merely ceremonial.

## 9. Required outsider check before any taxonomy v2

This finding was authored within the same process that produced the original criteria. It must therefore be tested in a genuinely clean session before it is relied upon in a taxonomy v2.

The clean session should receive only:
- the Non-automaticity rule and operational question;
- synthetic N1–N7;
- several fresh transfer cases.

It should not receive:
- current ATTRACTOR objects;
- Classifier 1 or Classifier 2 outputs;
- the failed taxonomy review;
- prior ambiguity diagnosis;
- expected classifications.

Its output should be preserved verbatim before analysis.

## 10. Holds

This inquiry does not:
- alter the registered taxonomy FAIL;
- ratify ATTRACTOR;
- reclassify any of the 30 objects;
- release FR-AM-0001 or FR-AM-0002;
- alter FR-QE-0002;
- authorise reader-facing ATTRACTOR UI;
- authorise taxonomy v2.

The next gate is the clean outsider test of this Non-automaticity rule.
