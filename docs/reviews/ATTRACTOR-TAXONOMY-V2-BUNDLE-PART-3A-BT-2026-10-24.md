# ATTRACTOR v2 classifier bundle — Part 3A: Biotechnology

Frozen corpus: 94dfc8ba721eca5bc71def192c4273f3b6d84266
Pre-registration: 0b529b162c12b91d142af72d2f85326afe5472bb

### FR-BT-0001 | AT-001

GOVERNED PROPOSITION:
Senolytic therapies can meaningfully extend healthy human lifespan.

ATTRACTOR OBJECT — VERBATIM:
```js
{
      id: "AT-001",
      type: "ATTRACTOR",
      description: "FDA \"geroscience\" indication and validated biomarker panel. Two developments would materially advance this record: first, FDA regulatory framework for aging as an indication (currently under discussion through the TAME trial — Targeting Aging with Metformin — and geroscience initiatives), which would create a governed clinical endpoint for healthspan extension; second, a validated biomarker panel that correlates with subsequent healthspan outcomes, providing a surrogate endpoint that is accepted as predictive. Both developments are in progress. If achieved, they would resolve BN-001 by providing an agreed threshold and make Phase III trials of senolytics tractable on five-to-ten year rather than twenty-to-thirty year timescales.",
    }
```

EXPLICIT CANONICAL REFERENCES:
- BN-001 — VERBATIM:
```js
{
      id: "BN-001",
      type: "BOTTLENECK",
      description: "\"Meaningfully extend\" lacks an agreed threshold. The claim requires meaningful extension of healthy lifespan, but no agreed clinical threshold defines what \"meaningful\" means. Is one year of additional healthy function meaningful? Five years? A 10% reduction in age-related disease incidence? The FDA has not approved any intervention for the indication of \"aging\" or \"healthspan extension\" — the regulatory framework does not currently accommodate such claims, meaning clinical trials cannot be powered against a standard threshold. This is a lexical and regulatory bottleneck of the same type as FR-AI-0004 (\"previously unseen\") and FR-AI-0006 (\"same mechanism\") — the fourth such bottleneck in the corpus. Without an agreed threshold, the claim cannot transition to any resolved state regardless of evidence accumulation.",
    }
```

---

### FR-BT-0002 | AT-001

GOVERNED PROPOSITION:
Epigenetic reprogramming can reverse biological age in living organisms without loss of cellular identity.

ATTRACTOR OBJECT — VERBATIM:
```js
{
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Human safety data and validated functional outcome biomarkers. Two developments would materially advance this record: first, human trial outcomes for a specified partial-reprogramming regimen demonstrating safety, measurable epigenetic clock reversal and no adverse dedifferentiation signals; second, validated functional outcome biomarkers showing that clock reduction predicts downstream health benefits. ER-100 tests partial OSK reprogramming, not the four-factor OSKM regimen; safety or other outcomes for one regimen cannot be silently transferred to the other. Admitted IN-007 reports human dosing but no trial outcomes. Dosing opens the clinical test without establishing safety, clock reversal or functional rejuvenation. The separate functional-biomarker requirement remains unresolved.",
    }
```

EXPLICIT CANONICAL REFERENCES:
- IN-007 — VERBATIM:
```js
{
      id: "IN-007",
      relationship: {"type": "same_trial_report", "relatedInstanceId": "IN-006", "note": "Same ER-100 Phase 1 trial as IN-006 (NCT07290244). IND clearance and first dosing are successive milestones in one trial, not two trials or independent replications."},
      qualifiedEvent: "ER-100 enters human dosing — first participant treated in Phase 1",
      description: "Life Biosciences reports that the first participant was dosed on June 9, 2026 in the Phase 1 ER-100 trial for open-angle glaucoma and non-arteritic anterior ischemic optic neuropathy. ClinicalTrials.gov lists NCT07290244 as a recruiting first-in-human Phase 1 study sponsored by Life Biosciences. This converts the prior IND-clearance milestone into actual human exposure to partial OSK epigenetic reprogramming. It is materially closer to AT-001, but no trial results have been posted: dosing establishes operation of the clinical test, not safety, efficacy, biological-age reversal, identity preservation, or validated functional rejuvenation. The central evidentiary boundary therefore remains unresolved.",
      vectors: ["supportive--first-human-dosing-no-results-yet"],
      date: "2026-06-09",
      sources: [
        { citation: "Life Biosciences (2026), First Patient Dosed in Phase 1 Trial of ER-100 for Optic Neuropathies", url: "https://www.lifebiosciences.com/life-biosciences-announces-first-patient-dosed-in-phase-1-trial-of-er-100-for-optic-neuropathies/", locator: "June 9, 2026 announcement" },
        { citation: "ClinicalTrials.gov, NCT07290244 — Evaluating ER-100 for Safety in People With Glaucoma or NAION", url: "https://clinicaltrials.gov/study/NCT07290244", locator: "Recruiting status; Phase 1; sponsor and study overview" },
      ],
    }
```

---

### FR-BT-0003 | AT-001

GOVERNED PROPOSITION:
A blood-based biomarker panel can reliably predict biological age-related decline before clinical symptoms appear.

ATTRACTOR OBJECT — VERBATIM:
```js
{
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Externally validated organ-specific absolute-risk prediction and individual trajectory modelling. Organ-enriched plasma-protein models now show prospective associations with incident disease and mortality in a large UK Biobank cohort. The next resolution step is an independently validated, pre-symptomatic panel that gives calibrated risks for specified decline pathways in individual patients, adds useful discrimination beyond relevant clinical predictors across settings and assays, and has an appropriate decision boundary. Multi-omic and repeated-measure designs may help, but another organ-age estimate or cohort hazard ratio alone does not complete this attractor.",
    }
```

EXPLICIT CANONICAL REFERENCES:
None.

---

### FR-BT-0004 | AT-001

GOVERNED PROPOSITION:
A blood-based liquid biopsy can reliably detect cancer before conventional clinical diagnosis.

ATTRACTOR OBJECT — VERBATIM:
```js
{
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Randomised mortality evidence following multi-cancer early detection. The event capable of moving this record decisively beyond FRAGMENTING is an adequately powered comparison showing whether screening reduces cancer-specific or all-cancer mortality without disproportionate overdiagnosis and downstream harm. NHS-Galleri's late-stage-incidence analysis is relevant stage-shift evidence but does not itself satisfy this attractor.",
    }
```

EXPLICIT CANONICAL REFERENCES:
None.

---

