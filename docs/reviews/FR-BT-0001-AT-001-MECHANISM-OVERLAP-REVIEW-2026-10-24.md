# FR-BT-0001 AT-001 Mechanism-Overlap Review — 2026-10-24

**Status:** COMPLETE — RECLASSIFY / RETIRE SEPARATE AT-001 AUTHORISED IN PRINCIPLE; CORPUS CHANGE NOT EXECUTED BY THIS REVIEW  
**Canonical base:** `f5917a63b2dc28a0a0a6e9abce1e321f62e9b5d4`  
**Record:** FR-BT-0001  
**Object:** AT-001  
**Review class:** bounded record-clarity / mechanism-overlap review

## Question

Does FR-BT-0001 AT-001 contain institutionally useful information not already carried by BN-001 or other governed structures, and if so, where should that information live?

This review is independent of the closed ATTRACTOR taxonomy v2. It does not apply P/D/R and is not taxonomy v3.

## Current record architecture

The claim is that senolytic therapies can meaningfully extend healthy human lifespan.

The current State Warrant remains ESCALATING / VS-02. AS-002 and AS-003 make the decisive evidential boundary explicit: preclinical causality and preliminary human target engagement exist, but no senolytic has demonstrated meaningful human healthspan extension on hard outcomes.

RM-001 records the surrogate-to-clinical translation gap. RM-002 records biological and patient heterogeneity.

BN-001 records the lexical/regulatory bottleneck around "meaningfully extend": there is no agreed clinical threshold for meaningful healthspan extension, and the regulatory framework does not currently accommodate an aging/healthspan indication against which trials can be powered.

AT-001 identifies two prospective enabling developments:
1. an FDA geroscience/aging indication framework; and
2. a validated biomarker panel correlated with subsequent healthspan outcomes and accepted as predictive.

It says these would resolve BN-001 and make Phase III senolytic trials tractable on shorter timescales.

## Overlap analysis

### Regulatory framework

This is directly part of BN-001's existing regulatory component. BN-001 already says the absence of an aging/healthspan indication prevents trials from being powered against a standard threshold. A future regulatory framework would reduce that barrier.

It does **not**, by itself, establish that senolytics extend human healthspan. It also does not necessarily settle the normative/clinical meaning of "meaningfully extend"; a regulatory endpoint can make a claim testable without independently determining the magnitude that FCIF should regard as meaningful.

### Validated biomarker panel

This is useful forward-looking information but is primarily connected to RM-001's surrogate-to-clinical translation problem and BN-001's measurement/regulatory tractability. A validated surrogate predictive of later healthspan outcomes could materially reduce the time and feasibility barrier for trials.

It is still not claim-bearing efficacy evidence. Validation of a biomarker panel would not demonstrate that a senolytic produces a meaningful human healthspan benefit.

### "Resolve BN-001"

The current AT-001 overstates the institutional consequence. The two enabling developments could reduce or partly resolve measurement/regulatory barriers, but they do not necessarily answer the underlying threshold question: what magnitude or kind of healthspan extension counts as meaningful.

This is a record-clarity issue independent of ATTRACTOR taxonomy.

## Decision

**RECLASSIFY THE USEFUL CONTENT INTO EXISTING GOVERNED STRUCTURE AND RETIRE THE SEPARATE AT-001 OBJECT.**

Unlike FR-AI-0001, this is not pure redundancy. AT-001 contains useful prospective information. But that information is better represented as qualification of existing bottleneck/resistance structures than as a separate prospective resolution mechanism.

A bounded implementation should:

1. retire current `mechanisms.AT-001`;
2. preserve the regulatory-framework point by refining BN-001 to distinguish:
   - the unresolved meaning/threshold of "meaningful" healthspan extension; and
   - the current regulatory/endpoint framework that makes that threshold difficult to operationalise in trials;
3. preserve the validated-biomarker point by refining RM-001 and/or BN-001 only to the extent necessary to state that validated predictive surrogates could reduce the surrogate-to-clinical and trial-duration barrier, without treating surrogate validation as senolytic efficacy evidence;
4. remove the claim that these developments would automatically "resolve BN-001";
5. preserve the governing assessment boundary that meaningful human healthspan benefit remains unproven;
6. append a non-evidential editorial/governance mutation and machine-readable receipt;
7. preserve all historical assessments, evidence instances, lineage and historical references unchanged.

## Important boundary

The implementation must not invent a new scientific or regulatory claim. The current corpus supports the structural distinction between:
- evidence that makes the claim more testable; and
- evidence that demonstrates the claim.

The former belongs in bottleneck/resistance explanation. The latter remains governed by evidence instances and assessment.

If a proposed rewrite would require fresh factual assertions about current FDA policy, TAME status, biomarker validation programmes or trial duration, those assertions require a separate source review. They must not be imported through this structural correction.

## Taxonomy boundary

This decision:
- does not ratify ATTRACTOR;
- does not establish a general rule for other ATTRACTOR objects;
- does not apply v2 admission criteria as corpus law;
- does not create a negative counterpart or replacement taxonomy;
- does not reopen v2;
- is not v3.

## Result

FR-BT-0001 contains useful forward-looking material in AT-001, but its institutional function is mislocated. Regulatory and surrogate-validation developments are enabling conditions for testing the claim, not evidence that the claim is satisfied and not sufficient by themselves to settle the "meaningfully extend" threshold.

The record should therefore preserve that information within existing BN-001 / RM-001 architecture and retire AT-001 as a separate current object.
