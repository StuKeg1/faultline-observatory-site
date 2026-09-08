/**
 * FR-AM-0001 — Cold Fusion — Room-Temperature Nuclear Fusion in Electrochemical Cells
 * Programme: PROG-AM
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_AM_0001 = {
  id: "FR-AM-0001",
  programme: "PROG-AM",
  lastProvenanceReview: "2026-09-08",
  provenanceReviewId: "LPR-001-D10",
  provenanceOutcome: "discrepancies_corrected",
  provenanceRepairStatus: "completed",

  claim: {
    statement: "Electrochemical cells can produce nuclear fusion reactions at or near room temperature.",
    shortLabel: "Cold Fusion — Room-Temperature Nuclear Fusion in Electrochemical Cells",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Pons and Fleischmann public announcement and preliminary paper",
      description: "On 23 March 1989 the University of Utah publicly announced Stanley Pons and Martin Fleischmann's claim that a palladium-deuterium electrochemical cell produced anomalous heat at levels they interpreted as nuclear in origin, together with reported fusion-related signatures. Their preliminary paper, Electrochemically induced nuclear fusion of deuterium, was received by the Journal of Electroanalytical Chemistry on 13 March, revised on 22 March, and published on 10 April 1989. The event is the originating claim for this record and was public before the paper appeared in print. LPR-001-D10 does not retain the stronger legacy narrative that the announcement was made under a specifically verified University of Utah priority-pressure arrangement with BYU, because that institutional-causation claim was not established to the same provenance standard in the bounded review.",
      vectors: ["supportive--originating-claim"],
      date: "Mar–Apr 1989",
      sources: [
        {
          citation: "Fleischmann, M. & Pons, S. (1989), Electrochemically induced nuclear fusion of deuterium, Journal of Electroanalytical Chemistry and Interfacial Electrochemistry 261, 301–308.",
          url: "https://doi.org/10.1016/0022-0728(89)80006-3",
          locator: "Preliminary note; received 13 March 1989, revised 22 March 1989; publication 10 April 1989",
        },
        {
          citation: "U.S. Department of Energy, Energy Research Advisory Board (1989), Cold Fusion Research — Appendix 2.A: Early Chronology of Heat Production.",
          url: "https://files.ncas.org/erab/apx2a.htm",
          locator: "March 23–28 public announcement; April 10 publication chronology",
        },
      ],
    },
    {
      id: "IN-002",
      qualifiedEvent: "Rapid replication attempts — initial positive reports",
      description: "Within weeks of the announcement, several laboratories report partial corroboration. Georgia Tech reports neutron emission (later retracted). Texas A&M reports excess heat. A small number of other groups report anomalous calorimetric effects. These reports circulate rapidly via preprints and informal communication. The apparent early corroboration substantially amplifies the claim's credibility and drives large-scale replication efforts at major institutions worldwide. The reports are not yet subject to full peer review; methodological details are sparse.",
      vectors: ["supportive--early-corroboration"],
      date: "Mar–Apr 1989",
      sources: [
        {
          citation: "U.S. Department of Energy, Energy Research Advisory Board (1989), Cold Fusion Research — Appendix 2.A: Early Chronology of Heat Production.",
          url: "https://files.ncas.org/erab/apx2a.htm",
          locator: "April 11 and April 12–30 chronology; Texas A&M excess-heat report and later retraction; other early calorimetric claims",
        },
        {
          citation: "UPI Archives (13 April 1989), Georgia Tech researchers question own duplication of fusion research.",
          url: "https://www.upi.com/Archives/1989/04/13/Georgia-Tech-researchers-question-own-duplication-of-fusion-research/1107608443200/",
          locator: "Georgia Tech neutron-counter temperature dependence and reconsideration of the initial neutron claim",
        },
      ],
    },
    {
      id: "IN-003",
      qualifiedEvent: "Major laboratory replication failures — MIT, Caltech, Harwell",
      description: "MIT's Plasma Fusion Center, Caltech, Harwell Laboratory (UK), and numerous other major institutions report failure to replicate either excess heat or nuclear products under controlled conditions. The MIT group finds no neutron emission above background. Caltech finds no excess heat under careful calorimetric measurement. Georgia Tech retracts its neutron emission report, attributing the signal to temperature sensitivity of their neutron detectors. The Department of Energy convenes a review panel. The replication failure is not uniform — some groups continue to report anomalous effects — but the weight of attempts at well-equipped laboratories is negative. The claim enters a contested and fragmenting state.",
      vectors: ["contesting--systematic-replication-failure"],
      date: "Apr–Jun 1989",
      sources: [
        {
          citation: "U.S. Department of Energy, Energy Research Advisory Board (1989), Cold Fusion Research — Appendix 2.A: Early Chronology of Heat Production.",
          url: "https://files.ncas.org/erab/apx2a.htm",
          locator: "May 1 Caltech null calorimetry; May 23–25 Santa Fe workshop reports including negative Caltech and MIT results",
        },
        {
          citation: "Williams, D. E. et al. (1989), Upper bounds on 'cold fusion' in electrolytic cells, Nature 342, 375–384.",
          url: "https://www.nature.com/articles/342375a0",
          locator: "Abstract; Harwell calorimetry and nuclear-detection experiments failing to sustain the cold-fusion claims",
        },
      ],
    },
    {
      id: "IN-004",
      qualifiedEvent: "US Department of Energy review panel — negative assessment",
      description: "The 1989 DOE Energy Research Advisory Board Cold Fusion Panel concludes that the reported excess-heat experiments do not provide convincing evidence that anomalous heat is associated with a nuclear process and that the evidence for a new nuclear process termed cold fusion is not persuasive. The report stresses internal inconsistencies, lack of predictability and reproducibility, and the failure of reported fusion-product yields to match the heat claimed. It recommends against a special federal cold-fusion programme while remaining sympathetic to modest support for carefully focused experiments through normal funding channels. The report does not categorically attribute every reported heat anomaly to artefact, calorimetric error or chemistry, and explicitly states that some observations had not yet been invalidated.",
      vectors: ["contesting--formal-expert-review-not-persuasive"],
      date: "Nov 1989",
      sources: [
        {
          citation: "U.S. Department of Energy, Energy Research Advisory Board (1989), Cold Fusion Research.",
          url: "https://files.ncas.org/erab/execsumm.htm",
          locator: "Executive Summary; Conclusions and Recommendations 1–5",
        },
      ],
    },
    {
      id: "IN-005",
      qualifiedEvent: "Persistent LENR research — anomalous-effect claims continue without consensus",
      description: "Research under labels including cold fusion and Low Energy Nuclear Reactions continued after the 1989 review in universities, private organisations and some government-supported settings. The 2004 DOE review documents that such work persisted and reconsidered claims of excess power and possible nuclear products in deuterated metals. Continued investigation does not itself validate the original fusion claim: reproducibility, interpretation of excess-power measurements and the evidence for nuclear reactions remained contested. The legacy assertions that mainstream physics uniformly refused to engage with the literature and that submissions were routinely rejected by high-impact journals are withdrawn because LPR-001-D10 could not establish that sociological and publication-practice bundle to the required provenance standard.",
      vectors: ["partial--persistent-research-with-unresolved-anomalies"],
      date: "1990–2004",
      sources: [
        {
          citation: "U.S. Department of Energy, Office of Science (2004), Report of the Review of Low Energy Nuclear Reactions.",
          url: "https://en.wikisource.org/wiki/Report_of_the_Review_of_Low_Energy_Nuclear_Reactions",
          locator: "Introduction; review scope; summary of excess-power and nuclear-reaction evidence",
        },
      ],
    },
    {
      id: "IN-006",
      qualifiedEvent: "Second US DOE review — mixed excess-power views, nuclear evidence unconvincing to most reviewers",
      description: "The DOE Office of Science conducted a second review in 2004 using 18 reviewer comments. Reviewer responses differed by question: views on the excess-power evidence were divided, while two-thirds of reviewers commenting on whether low-energy nuclear reactions had been demonstrated did not find the evidence conclusive; one reviewer found it convincing and the remainder were somewhat convinced. Nearly all reviewers supported considering well-designed individual proposals through ordinary peer review, but no reviewer recommended a focused federally funded LENR programme. The review therefore did not provide a basis for reversing the record's collapsed assessment, while leaving room for targeted investigation of specific unresolved experimental questions.",
      vectors: ["neutral--review-did-not-reverse-collapsed-evidence"],
      date: "2004",
      sources: [
        {
          citation: "U.S. Department of Energy, Office of Science (2004), Report of the Review of Low Energy Nuclear Reactions.",
          url: "https://en.wikisource.org/wiki/Report_of_the_Review_of_Low_Energy_Nuclear_Reactions",
          locator: "Detailed Summary of Reviewer Response to Charge Elements; Charge Element 1; research-funding recommendations",
        },
      ],
    },
    {
      id: "IN-007",
      qualifiedEvent: "Google-funded multi-institution re-evaluation — no cold-fusion effect observed",
      description: "Berlinguette et al. (2019) report a Google-funded multi-institution programme established to re-evaluate cold fusion with modern materials characterisation, calorimetry and nuclear-detection methods. The programme had not yielded evidence of a cold-fusion effect. The authors nevertheless report useful scientific insights into highly hydrided metals and low-energy nuclear-reaction parameter space and argue that related materials and nuclear science remains worth studying. This is strong contesting evidence against the original room-temperature electrochemical-fusion claim, but it is not framed by the authors as proof that every possible condensed-matter nuclear effect is impossible. The unsupported legacy sentence bundling later 'NASA-adjacent LENR interest' into the evidential conclusion is withdrawn.",
      vectors: ["contesting--systematic-re-evaluation-no-effect-observed"],
      date: "2019",
      sources: [
        {
          citation: "Berlinguette, C. P. et al. (2019), Revisiting the cold case of cold fusion, Nature 570, 45–51.",
          url: "https://doi.org/10.1038/s41586-019-1256-6",
          locator: "Abstract; programme scope; no evidence of a cold-fusion effect; materials and low-energy nuclear-reaction insights",
        },
      ],
    },
    {
      id: "IN-008",
      qualifiedEvent: "Electrochemical loading enhances externally driven D–D fusion in palladium",
      description: "Chen et al. (2025) report a benchtop system in which deuterium ions are accelerated into a palladium target by plasma immersion ion implantation while the target is simultaneously loaded electrochemically with deuterium. Turning on electrochemical loading increased the measured D–D neutron-production rate by an average of 15(2)% relative to the beam-loaded condition. This is reproducible evidence that electrochemical loading can change the fusion rate of an already externally driven nuclear reaction in a deuterated metal target. It does not satisfy the canonical cold-fusion claim: the fusion reactions require an externally accelerated deuterium-ion population at keV energies, rather than arising from the electrochemical cell itself at room-temperature chemical energies. The experiment is therefore admitted as adjacent mechanistic evidence that narrows the claim boundary, not as a reopening event for the collapsed claim.",
      vectors: ["partial--electrochemical-loading-enhances-beam-driven-fusion-not-canonical-cold-fusion"],
      date: "2025-08-20",
      sources: [
        {
          citation: "Chen, K.-Y. et al. (2025), Electrochemical loading enhances deuterium fusion rates in a metal target, Nature 644, 640–645.",
          url: "https://doi.org/10.1038/s41586-025-09042-7",
          locator: "Abstract; Thunderbird Reactor design; 15(2)% fusion-rate enhancement; conclusion and energy balance",
        },
      ],
    },
    {
      id: "IN-009",
      qualifiedEvent: "Sub-keV fusion-yield plateau in electrochemically loaded palladium and titanium hydrides",
      description: "Karahadian et al. (2026) combine electrochemical deuterium loading with low-energy deuteron bombardment and directly measure D–D fusion products in palladium and titanium hydrides. Across centre-of-mass energies from 0.25 to 6.5 keV they report a reproducible fusion-yield plateau below about 2 keV and enhancements exceeding 10^18 relative to bare-nucleus expectations at the lowest measured energies. The result shows that the condensed-matter environment can strongly alter tunnelling probabilities and fusion cross-sections in a regime where standard homogeneous screening models fail. It is materially relevant to the historical mechanism question because it demonstrates a genuine materials-governed low-energy fusion regime. It still does not satisfy the canonical claim: the reactions are initiated by an external deuteron beam, with the electrochemical cell supplying deuterium loading rather than independently producing fusion. The paper therefore strengthens the case for separating condensed-matter-assisted fusion physics from the original room-temperature electrochemical-fusion claim, while leaving the latter collapsed.",
      vectors: ["partial--materials-enhance-sub-kev-beam-driven-fusion-not-electrochemical-cell-alone"],
      date: "2026-07-18",
      sources: [
        {
          citation: "Karahadian, M. E. et al. (2026), Enhanced nuclear fusion in the sub-keV energy regime, Nature Communications 17, 8845.",
          url: "https://doi.org/10.1038/s41467-026-74421-1",
          locator: "Abstract; dual-chamber electrochemical-loading/ion-beam platform; sub-2-keV yield plateau; enhancement analysis; discussion",
        },
      ],
    }
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2024-01-15",
      pressureState: "emerging",
      verificationStage: "VS-01",
      summary: "The claim has been publicly announced with supporting experimental data by credentialled electrochemists at an established institution. Prior publication has not occurred; peer review is pending. The claim is extraordinary relative to known nuclear physics. Early corroboration is reported by multiple groups. The evidence is insufficient to confirm the claim and insufficient to dismiss it. Pressure state: EMERGING.",
      assessorNote: null,
    },
    {
      id: "AS-002",
      date: "2024-01-15",
      pressureState: "fragmenting",
      verificationStage: "VS-03",
      summary: "Systematic replication failures at major institutions have accumulated. The Georgia Tech neutron result — the strongest independent corroboration — has been retracted. No well-equipped laboratory has produced an unambiguous positive replication under controlled conditions. Some groups continue to report anomalous heat; these reports are not accompanied by consistent nuclear signatures. The evidence trail is fragmenting: anomalous calorimetric observations persist in some laboratories while nuclear signatures required to confirm a fusion mechanism remain absent everywhere they have been sought. The Department of Energy review panel's negative consensus (INST-004) has not been overturned, but the residual community of researchers continues to report effects that have not been definitively attributed to measurement artefact either. The pressure state is FRAGMENTING: the claim is not converging toward confirmation or clean refutation, but splitting into a heat-observation thread that persists and a nuclear-mechanism thread that has found no supporting evidence.",
      assessorNote: null,
    },
    {
      id: "AS-003",
      date: "2024-01-15",
      pressureState: "collapsed",
      verificationStage: "VS-05",
      summary: "The claim has not been reproduced under controlled conditions by independent laboratories in thirty-five years of attempts. Two formal DOE review panels have concluded the evidence does not support nuclear fusion as the explanation for observed anomalies. The most recent systematic replication attempt with state-of-the-art instrumentation (Berliner et al. 2019) returned a null result for fusion products. A residual research community persists but has not produced peer-reviewed evidence sufficient to overturn either DOE panel's conclusion or the Berliner et al. null result. The pressure state is COLLAPSED: the claim has been tested extensively over more than three decades by well-resourced independent laboratories and has not been confirmed. This is a stable end state under CP-001 — the record preserves the trajectory of how the claim was tested and failed, not merely the verdict that it failed — and remains reopenable only upon a future qualifying event (OQ-002).",
      assessorNote: null,
    },
    {
      id: "AS-004",
      date: "2026-09-08",
      pressureState: "collapsed",
      verificationStage: "VS-05",
      summary: "LPR-001-D10 corrects several historical overstatements without changing the record's terminal judgement. The 1989 DOE review did not prove every anomalous heat report to be an artefact; rather, it found no convincing association between reported heat and a nuclear process, found the evidence for a new cold-fusion process unpersuasive, and highlighted severe reproducibility and fusion-product inconsistencies. The 2004 DOE review likewise did not produce a positive reversal: reviewer views on excess power were mixed, while most reviewers did not find the evidence for low-energy nuclear reactions conclusive and none recommended a focused federal programme. Berlinguette et al. (2019), correctly attributed here, then conducted a modern multi-institution re-evaluation that yielded no evidence of the cold-fusion effect. Continued LENR research and unresolved anomalous-effect claims remain historically relevant, but they do not supply reproducible evidence that an electrochemical cell itself produces nuclear fusion at or near room temperature. COLLAPSED / VS-05 is retained on this narrower, source-faithful basis.",
      assessorNote: "Append-only assessment correction following the operator-approved LPR-001-D10 repair. AS-001 through AS-003 remain visible as historical judgements. No 2025–26 electrochemically assisted ion-beam fusion evidence is admitted here; those results remain normal Record Review candidates because they involve externally driven ion bombardment and require a separate claim-boundary review.",
    },
    {
      id: "AS-005",
      date: "2026-09-08",
      pressureState: "collapsed",
      verificationStage: "VS-05",
      summary: "Normal Record Review admits IN-008 and IN-009 as materially relevant new evidence at the boundary of the cold-fusion claim. The 2025 Nature result establishes that electrochemical deuterium loading can reproducibly increase the rate of D–D fusion in palladium when fusion is already being driven by externally accelerated deuterium ions. The 2026 Nature Communications result goes further mechanistically, showing a reproducible sub-keV fusion-yield plateau in electrochemically loaded palladium and titanium hydrides and a very large enhancement over bare-nucleus expectations, indicating that the condensed-matter environment can materially reshape low-energy fusion probabilities. These results are scientifically important and directly rehabilitate part of the broader question that survived the 2019 Google programme: materials can influence low-energy nuclear reaction rates in ways that merit study. They do not, however, reproduce the canonical claim recorded here. In both experiments an external ion beam supplies the kinetic energy that initiates fusion; electrochemistry loads or modifies the target rather than independently producing nuclear fusion at room-temperature chemical energies. The evidential boundary is therefore sharper, not weaker: condensed-matter-assisted beam-driven fusion is now positively demonstrated, while autonomous fusion generated by an electrochemical cell remains unconfirmed. COLLAPSED / VS-05 is retained. Reopening would require evidence that crosses that boundary rather than evidence of externally driven fusion enhanced by electrochemical loading.",
      assessorNote: "Bounded Record Review of Chen et al. (2025), Nature, DOI 10.1038/s41586-025-09042-7, and Karahadian et al. (2026), Nature Communications, DOI 10.1038/s41467-026-74421-1. Both are admitted as new adjacent evidence with primary provenance. Neither is treated as satisfying OQ-002's reopening condition because both depend on externally driven ion bombardment.",
    }
  ],

  mechanisms: [
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Nuclear byproduct inconsistency. Known deuterium-deuterium fusion pathways produce neutrons, tritium, and helium-3 in predictable ratios. Cold fusion experiments that reported excess heat did not report nuclear products at the ratios required by these pathways. The absence of expected byproducts at appropriate levels constitutes a structural resistance mechanism: if the heat is from fusion, the nuclear signatures must follow. They did not. This inconsistency was identified in the 1989 DOE review and was never resolved by the proponent community.",
    },
    {
      id: "RM-002",
      type: "RESISTANCE MECHANISM",
      description: "Irreproducibility on demand. No proponent laboratory ever demonstrated a protocol that produced the claimed effect reliably on demand. Positive results were sporadic and dependent on material preparation variables that were not fully characterised or controlled. This is structurally fatal for a physical phenomenon claim: a phenomenon that cannot be reproduced on demand cannot be studied, confirmed, or applied. The irreproducibility was documented across the full thirty-five year evidence trail.",
    },
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "No theoretical mechanism consistent with known physics. No mechanism was proposed that explained how Coulomb barrier penetration could occur at the energies available in an electrochemical cell. Proponents invoked lattice confinement effects and surface phenomena, but no quantitative theory was produced that predicted the observed effects and was consistent with established nuclear and condensed matter physics. Without a theoretical framework, experimental anomalies cannot be systematically investigated or distinguished from artefact.",
    },
    {
      id: "CM-001",
      type: "COLLAPSE MECHANISM",
      description: "Pre-peer-review public announcement and rapid replication cycle. The originating claim was announced publicly on 23 March 1989 before the preliminary paper appeared in print on 10 April. That sequencing exposed an extraordinary claim to immediate worldwide replication, commentary and counterclaim before normal publication-based scrutiny had stabilised the experimental representation. The resulting evidence trail accumulated unusually rapidly and noisily, with early positive reports, retractions and null results appearing within weeks. LPR-001-D10 retains this timing as a plausible contributor to the unusually disorderly public collapse trajectory, but withdraws the stronger legacy causal claim that a specifically verified University of Utah institutional-priority pressure caused the announcement or the later evidential disorder.",
    }
  ],

  lineage: {
    items: [
    { year: "1926", text: "Paneth and Peters — hydrogen fusion in palladium. Early, retracted claim of nuclear transmutation in palladium-hydrogen systems. The Pons-Fleischmann work operates in the same material system sixty years later; they were aware of this history." },
    { year: "1986–88", text: "Pons and Fleischmann private experiments. The Utah group conducts unpublished experiments in palladium-deuterium cells and observes anomalous heat. They interpret this as evidence of nuclear fusion and prepare the work for publication." },
    { year: "Mar–Apr 1989", text: "Public announcement precedes publication. The University of Utah announces the Pons-Fleischmann claim on 23 March; their preliminary Journal of Electroanalytical Chemistry paper appears on 10 April after having been received on 13 March and revised on 22 March. The bounded provenance repair does not retain the stronger legacy claim that a verified Utah-BYU priority agreement was broken." },
    { year: "Apr 1989", text: "American Physical Society meeting. A special session at APS Baltimore draws major replication reports. The session is widely reported as marking the turning point — negative results dominate, and prominent physicists publicly characterise the claim as unsupported." },
    { year: "1989–91", text: "Pons and Fleischmann relocate to France (IMRA Europe). Toyota funds continued research at a dedicated facility. No replication is produced. The facility closes in 1998 without confirming the original results." },
    { year: "1991–", text: "LENR community formation. Research continues under the broader Low Energy Nuclear Reactions label, extending beyond the original electrochemical-fusion formulation to anomalous heat and possible nuclear effects in condensed matter. Continued activity does not by itself resolve the reproducibility or nuclear-attribution problems identified by the DOE reviews." },
    { year: "2019", text: "Google-funded multi-institution re-evaluation. Berlinguette et al. report no evidence of a cold-fusion effect while identifying useful materials and low-energy nuclear-reaction questions in the explored parameter space." },
    { year: "2025–26", text: "Condensed-matter-assisted beam-driven fusion becomes reproducible. Chen et al. show that electrochemical loading of palladium increases externally driven D–D fusion rates by about 15%; Karahadian et al. then report a sub-keV fusion-yield plateau and very large materials-dependent enhancement in electrochemically loaded Pd and Ti hydrides under low-energy ion bombardment. These results establish a genuine materials effect on fusion without reproducing electrochemical-cell-driven cold fusion." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "What explains the residual anomalous-heat and related effects reported by parts of the LENR literature despite the absence of reproducible evidence tying those effects to the canonical room-temperature electrochemical-fusion claim? Berlinguette et al. (2019) found no cold-fusion effect but did identify scientifically useful questions in highly hydrided materials and low-energy nuclear-reaction parameter space. A distinct, more tightly defined phenomenon could warrant a separate record if supported by reproducible evidence.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "What evidence would reopen this collapsed record now that condensed-matter-assisted beam-driven fusion is reproducibly demonstrated? IN-008 and IN-009 do not cross the canonical boundary because externally accelerated deuterons initiate the nuclear reactions. Reopening would require reproducible nuclear products attributable to the electrochemical cell itself at or near room temperature, without an external ion beam or equivalent high-energy driver, together with controls that establish the nuclear energy and byproduct balance.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "The Collapse Mechanism type (CM-001) is introduced for the first time in this record. Does the pre-peer-review announcement pattern constitute a reusable mechanism class, or is it a property specific to this claim's history? The answer will only become clear if another record independently generates a similar structural feature.",
      raisedDate: "2024-01-15",
    }
  ],

  mutationLog: [
    { id: "M-012", date: "2026-09-08", field: "assessment_issued", from: "AS-004", to: "AS-005", note: "Normal Record Review of IN-008 and IN-009. COLLAPSED / VS-05 retained. The new evidence positively establishes condensed-matter enhancement of externally driven low-energy fusion but does not satisfy the canonical electrochemical-cell-driven cold-fusion claim. OQ-002 and lineage updated to make the reopening boundary explicit; historical assessments and legacy instances preserved." },
    { id: "M-011", date: "2026-09-08", field: "instances_added", from: "IN-007", to: "IN-008 / IN-009", note: "Normal Record Review admits Chen et al. (2025) and Karahadian et al. (2026) with primary provenance. Both are adjacent mechanistic evidence: electrochemical loading and condensed-matter environment measurably enhance D–D fusion under externally driven ion bombardment. Neither is treated as a qualifying reopening event for the canonical room-temperature electrochemical-fusion claim." },
    { id: "M-010", date: "2026-09-08", field: "assessment_and_dependencies_corrected", from: "AS-003 / legacy CM-001-lineage-OQ wording", to: "AS-004 / corrected dependencies", note: "Append-only AS-004 issued after the operator-approved LPR-001-D10 repair. COLLAPSED / VS-05 retained on a narrower evidential basis. CM-001, affected lineage entries and OQ-001 aligned to the corrected provenance: public announcement timing is retained, unsupported institutional-pressure causation is withdrawn, Berlinguette attribution is corrected, and residual LENR questions are separated from evidence for the canonical fusion claim. Historical assessments preserved. The 2025–26 electrochemically assisted ion-beam fusion papers remain outside LPR-001 as normal Record Review candidates." },
    { id: "M-009", date: "2026-09-08", field: "provenance_correction", from: "LPR-001-D10 discrepancies_found", to: "LPR-001-D10 discrepancies_corrected", note: "Operator-approved correction of IN-001, IN-004, IN-005, IN-006 and IN-007. IN-001 bounded to the verified public-announcement/publication chronology; IN-004 aligned to the 1989 DOE panel's actual conclusions; IN-005 narrowed to documented persistence of LENR research without unsupported publication-practice claims; IN-006 separates the 2004 review's excess-power and nuclear-reaction reviewer distributions; IN-007 corrects Berlinguette et al. and removes the unsupported later NASA-adjacent bundle. Structured provenance added where source fidelity was established. No 2025–26 scientific evidence admitted through LPR-001." },
    { id: "M-008", date: "2026-09-08", field: "provenance_review", from: "—", to: "LPR-001-D10", note: "Legacy provenance review completed. All seven evidence instances examined. Structured provenance added only to source-faithful early-replication instances IN-002 and IN-003. Material or attribution discrepancies identified in IN-001, IN-004, IN-006 and IN-007; IN-005's broad sociological and publication-practice bundle could not be confidently sourced as written. No factual or interpretive wording silently repaired and no assessment, pressure-state or verification-stage changes made. New 2025–26 electrochemically assisted ion-beam fusion results were identified as normal Record Review candidates and were not admitted through LPR-001. Review marked pending governed correction." },
    {"id":"M-007","date":"2026-09-06","field":"description_restored","from":"Legacy ingestion cutoffs: mechanisms:RM-001, mechanisms:RM-002, mechanisms:BN-001, mechanisms:CM-001, lineage:1991–","to":"Source-restored complete descriptions","note":"Editorial Correction (GP-001), RENDER-PILOT-001 content restoration: restored RM-001, RM-002, BN-001, CM-001; lineage 1991– from FR_MF_0001_cold_fusion_collapse.html (Drive file 1goJsend-Scsoet868GpcTWELGC_ctVfh). Each damaged value was a verified prefix of the recovered source after the existing FR-MF to FR-AM identifier migration. Restored the omitted remainder using the original converter text normalization; no inferred completion. Existing later corrections retained. Restoration recovers historical wording and does not reaffirm it as the current assessment. Assessments, evidence instances, open questions, claim, status and rendering eligibility unchanged. Source hashes and field receipt: docs/reviews/render-pilot-content-restoration.json; current-assessment compatibility review: docs/reviews/RENDER-PILOT-001-CONTENT-RESTORATION.md."},
    // APPEND-ONLY. Newest first.
    { id: "M-006", date: "2026-06-18", field: "record_id_migrated", from: "FR-MF-0001", to: "FR-AM-0001", note: "Programme identity changed. Record identifier migrated to preserve constitutional consistency. FR-MF-* → FR-AM-*. 2026-06-18." },
    { id: "M-005", date: "2024-01-15", field: "collapsed_state_notice_added", from: "—", to: "COLLAPSED-STATE-NOTICE-ADDED", note: "Observatory note added per collapsed pressure state." },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "RM-001, RM-002 (Resistance); BN-001 (Bottleneck); CM-001 (Collapse Mechanism) added." },
    { id: "M-003", date: "2024-01-15", field: "assessments_issued", from: "—", to: "ASSESSMENTS-ISSUED", note: "ASSESSMENT-001 (notional, EMERGING), ASSESSMENT-002 (notional, FRAGMENTING), ASSESSMENT-003 (current, COLLAPSED)." },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "INST-001 through INST-007 added." },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "FR-MF-0001 opened. Programme: PROG-MF. First record in materials series." }
  ],

  status: "closed",
};