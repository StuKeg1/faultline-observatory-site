/**
 * FR-MF-0001 — Cold Fusion — Room-Temperature Nuclear Fusion in Electrochemical Cells
 * Programme: PROG-MF
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_MF_0001 = {
  id: "FR-MF-0001",
  programme: "PROG-MF",

  claim: {
    statement: "Electrochemical cells can produce nuclear fusion reactions at or near room temperature.",
    shortLabel: "Cold Fusion — Room-Temperature Nuclear Fusion in Electrochemical Cells",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Pons and Fleischmann press conference — University of Utah",
      description: "Stanley Pons and Martin Fleischmann announce at a press conference, prior to peer review, that their palladium-deuterium electrochemical cell has produced anomalous excess heat at levels they interpret as consistent with nuclear fusion. They report measured heat output substantially exceeding electrical input, and claim detection of neutron emission at levels suggesting a nuclear process. The announcement is made under institutional pressure from the University of Utah, which sought priority over a competing group (Jones et al. at BYU). No peer-reviewed paper accompanies the announcement; a brief letter is submitted to the Journal of Electroanalytical Chemistry simultaneously.",
      vectors: ["supportive--originating-claim"],
      date: "Mar 1989",
    },
    {
      id: "IN-002",
      qualifiedEvent: "Rapid replication attempts — initial positive reports",
      description: "Within weeks of the announcement, several laboratories report partial corroboration. Georgia Tech reports neutron emission (later retracted). Texas A&M reports excess heat. A small number of other groups report anomalous calorimetric effects. These reports circulate rapidly via preprints and informal communication. The apparent early corroboration substantially amplifies the claim's credibility and drives large-scale replication efforts at major institutions worldwide. The reports are not yet subject to full peer review; methodological details are sparse.",
      vectors: ["supportive--early-corroboration"],
      date: "Mar–Apr 1989",
    },
    {
      id: "IN-003",
      qualifiedEvent: "Major laboratory replication failures — MIT, Caltech, Harwell",
      description: "MIT's Plasma Fusion Center, Caltech, Harwell Laboratory (UK), and numerous other major institutions report failure to replicate either excess heat or nuclear products under controlled conditions. The MIT group finds no neutron emission above background. Caltech finds no excess heat under careful calorimetric measurement. Georgia Tech retracts its neutron emission report, attributing the signal to temperature sensitivity of their neutron detectors. The Department of Energy convenes a review panel. The replication failure is not uniform — some groups continue to report anomalous effects — but the weight of attempts at well-equipped laboratories is negative. The claim enters a contested and fragmenting state.",
      vectors: ["contesting--systematic-replication-failure"],
      date: "Apr–Jun 1989",
    },
    {
      id: "IN-004",
      qualifiedEvent: "US Department of Energy review panel — negative assessment",
      description: "The DOE convenes an expert review panel of twenty-three scientists. The panel concludes that the experimental evidence does not support the claims of cold fusion as a nuclear phenomenon. The excess heat observations, where present, are attributed to experimental artefact, calorimetric error, or chemical rather than nuclear processes. The absence of expected nuclear byproducts — specifically, the ratio of neutron to tritium production implied by known fusion pathways — is identified as a fundamental inconsistency. The panel does not recommend dedicated federal research funding. This assessment represents the first formally constituted expert body to evaluate the claim; its negative finding is adopted as the working consensus of the physics community.",
      vectors: ["contesting--formal-expert-consensus"],
      date: "Nov 1989",
    },
    {
      id: "IN-005",
      qualifiedEvent: "Persistent anomalous heat reports — residual research community",
      description: "A community of researchers, later operating under the term \"Low Energy Nuclear Reactions\" (LENR), continues to publish reports of anomalous heat and occasional nuclear products in palladium-deuterium and related systems. Principal venues include the Journal of Electroanalytical Chemistry and dedicated LENR conference proceedings. The research community includes some credentialled electrochemists and materials scientists. Results are irreproducible on demand and are not accompanied by a theoretical framework consistent with known nuclear physics. The mainstream physics community does not engage with the literature; journal submissions are routinely rejected by high-impact venues. The claim persists in a marginalised but active form.",
      vectors: ["partial--residual-non-replicable"],
      date: "1990–2002",
    },
    {
      id: "IN-006",
      qualifiedEvent: "Second US DOE review — partial reconsideration, consensus unchanged",
      description: "The DOE conducts a second review of cold fusion / LENR research in response to a petition from the LENR community. Reviewers are divided: approximately half find some evidence of anomalous effects worthy of further investigation; half find no credible evidence of nuclear phenomena. The panel does not recommend dedicated research funding and does not alter its 1989 conclusion that the original fusion claim lacks sufficient support. The review is notable for acknowledging the anomalous heat observations as a genuine experimental puzzle while declining to attribute them to nuclear fusion. The claim remains in a collapsed state; the second review does not constitute a qualified event sufficient to reopen it.",
      vectors: ["neutral--consensus-unchanged"],
      date: "2004",
    },
    {
      id: "IN-007",
      qualifiedEvent: "Google-funded systematic replication study",
      description: "Google funds a systematic, multi-institution attempt to rigorously replicate cold fusion results, published in Nature (Berliner et al. 2019). The study applies state-of-the-art calorimetry, materials characterisation, and nuclear detection. It finds no evidence of nuclear fusion products. It does identify previously uncharacterised electrochemical behaviour in palladium-deuterium systems, which the authors note is scientifically interesting independent of the fusion claim. The study explicitly concludes that the evidence does not support the claim of room-temperature nuclear fusion. Subsequent NASA-adjacent LENR interest (2022–24) does not produce peer-reviewed replication results. The collapsed assessment is confirmed.",
      vectors: ["contesting--systematic-replication-null-result"],
      date: "2019–24",
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
      summary: "Systematic replication failures at major institutions have accumulated. The Georgia Tech neutron result — the strongest independent corroboration — has been retracted. No well-equipped laboratory has produced an unambiguous positive replication under controlled conditions. Some groups continue to report anomalous heat; these reports are not accompanied by consistent nuclear signatures. The evidence trail is fragmenting: anomalous calorimetric observations persist in some laboratories while nucle",
      assessorNote: null,
    },
    {
      id: "AS-003",
      date: "2024-01-15",
      pressureState: "collapsed",
      verificationStage: "VS-05",
      summary: "The claim has not been reproduced under controlled conditions by independent laboratories in thirty-five years of attempts. Two formal DOE review panels have concluded the evidence does not support nuclear fusion as the explanation for observed anomalies. The most recent systematic replication attempt with state-of-the-art instrumentation (Berliner et al. 2019) returned a null result for fusion products. A residual research community persists but has not produced peer-reviewed evidence sufficien",
      assessorNote: null,
    }
  ],

  mechanisms: [
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Nuclear byproduct inconsistency. Known deuterium-deuterium fusion pathways produce neutrons, tritium, and helium-3 in predictable ratios. Cold fusion experiments that reported excess heat did not report nuclear products at the ratios required by these pathways. The absence of expected byproducts at appropriate levels constitutes a structural resistance mechanism: if the heat is from fusion, the nu",
    },
    {
      id: "RM-002",
      type: "RESISTANCE MECHANISM",
      description: "Irreproducibility on demand. No proponent laboratory ever demonstrated a protocol that produced the claimed effect reliably on demand. Positive results were sporadic and dependent on material preparation variables that were not fully characterised or controlled. This is structurally fatal for a physical phenomenon claim: a phenomenon that cannot be reproduced on demand cannot be studied, confirmed",
    },
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "No theoretical mechanism consistent with known physics. No mechanism was proposed that explained how Coulomb barrier penetration could occur at the energies available in an electrochemical cell. Proponents invoked lattice confinement effects and surface phenomena, but no quantitative theory was produced that predicted the observed effects and was consistent with established nuclear and condensed m",
    },
    {
      id: "CM-001",
      type: "COLLAPSE MECHANISM",
      description: "Pre-peer-review announcement under institutional pressure. The original announcement was made at a press conference before peer review, under pressure from the University of Utah to establish priority. This created a situation in which the claim was in the public domain and subject to immediate replication attempts before it had undergone methodological scrutiny. The rapid replication attempts tha",
    }
  ],

  lineage: {
    items: [
    { year: "1926", text: "Paneth and Peters — hydrogen fusion in palladium. Early, retracted claim of nuclear transmutation in palladium-hydrogen systems. The Pons-Fleischmann work operates in the same material system sixty years later; they were aware of this history." },
    { year: "1986–88", text: "Pons and Fleischmann private experiments. The Utah group conducts unpublished experiments in palladium-deuterium cells and observes anomalous heat. They interpret this as evidence of nuclear fusion and decide to seek priority publication." },
    { year: "Mar 1989", text: "Simultaneous announcement with Jones et al. Steven Jones at BYU is working independently on muon-catalysed fusion in similar systems. The University of Utah and BYU negotiate a simultaneous submission. Utah breaks the agreement and announces first via press conference." },
    { year: "Apr 1989", text: "American Physical Society meeting. A special session at APS Baltimore draws major replication reports. The session is widely reported as marking the turning point — negative results dominate, and prominent physicists publicly characterise the claim as unsupported." },
    { year: "1989–91", text: "Pons and Fleischmann relocate to France (IMRA Europe). Toyota funds continued research at a dedicated facility. No replication is produced. The facility closes in 1998 without confirming the original results." },
    { year: "1991–", text: "LENR community formation. Researchers unwilling to accept the consensus negative finding rebrand the field as Low Energy Nuclear Reactions. The rebranding is partly terminological — distancing from \"cold fusion\" — and partly substantive, broadening the claim to include any anomalous nuclear effects " },
    { year: "2019", text: "Google systematic study. The most methodologically rigorous replication attempt to date. Null result for fusion. Anomalous electrochemical effects noted as a separate research question." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "What is the origin of the anomalous heat observations documented by multiple independent groups and acknowledged by Berliner et al. (2019)? This is not a question about the fusion claim — it is a question about the residual electrochemical phenomenon. It may warrant a separate record.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "Under what conditions, if any, would the Observatory reopen a collapsed record? The current assessment holds COLLAPSED as a stable state. If a future experiment produced reproducible nuclear products at predicted ratios from an electrochemical cell, the record would require reopening. No procedure currently governs this.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "The Collapse Mechanism type (CM-001) is introduced for the first time in this record. Does the pre-peer-review announcement pattern constitute a reusable mechanism class, or is it a property specific to this claim's history? The answer will only become clear if another record independently generates a similar structural feature.",
      raisedDate: "2024-01-15",
    }
  ],

  mutationLog: [
    // APPEND-ONLY. Newest first.
    { id: "M-005", date: "2024-01-15", field: "collapsed_state_notice_added", from: "—", to: "COLLAPSED-STATE-NOTICE-ADDED", note: "Observatory note added per collapsed pressure state." },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "RM-001, RM-002 (Resistance); BN-001 (Bottleneck); CM-001 (Collapse Mechanism) added." },
    { id: "M-003", date: "2024-01-15", field: "assessments_issued", from: "—", to: "ASSESSMENTS-ISSUED", note: "ASSESSMENT-001 (notional, EMERGING), ASSESSMENT-002 (notional, FRAGMENTING), ASSESSMENT-003 (current, COLLAPSED)." },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "INST-001 through INST-007 added." },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "FR-MF-0001 opened. Programme: PROG-MF. First record in materials series." }
  ],

  status: "closed",
};
