/**
 * FR-AM-0006 — Solid-State Batteries — Commercial Viability for Electric Vehicles
 * Programme: PROG-AM
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 *
 * RELEASE-004 (Trial 001 Corpus Update, 2026-06-27): INST-006 and ASSESSMENT-002
 * added. Sourced from direct web verification during Trial 001, not recovered
 * from the original 2026-06-16 generation (unrecoverable — see TRIAL-001-OUT).
 */

export const FR_AM_0006 = {
  id: "FR-AM-0006",
  programme: "PROG-AM",
  lastProvenanceReview: "2026-09-21",
  provenanceReviewId: "LPR-001-D23",
  provenanceOutcome: "discrepancies_corrected",
  provenanceRepairStatus: "completed",

  claim: {
    statement: "Solid-state batteries can achieve commercially viable energy density, safety, and cycle life for electric vehicles.",
    shortLabel: "Solid-State Batteries — Commercial Viability for Electric Vehicles",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Laboratory demonstrations — oxide, sulfide, and polymer electrolytes",
      description: "Laboratory work establishes that solid electrolytes can support lithium-ion transport and solid-state cells across oxide, sulfide, and polymer classes. Those classes have different trade-offs in conductivity, stability, processability, and interface behaviour. This is feasibility context rather than evidence that the commercial claim is satisfied: requirements around interfaces, dendrite control, processing, and scale-up remain relevant. This record does not rely on unspecified institution-level assessments or on the unqualified proposition that every commercial threshold was unmet in every laboratory cell.",
      vectors: ["neutral--laboratory-feasibility-established-no-commercial-threshold-met"],
      date: "2011–20",
    },
    {
      id: "IN-002",
      qualifiedEvent: "Toyota, QuantumScape, Solid Power — industrial commitments and claimed milestones",
      description: "Toyota, QuantumScape, and Solid Power made industrial commitments and public milestones. QuantumScape's December 2020 investor materials reported more than 1,000 cycles in single-layer cells; a 2021 independent test by Mobile Power Solutions reported 800+ cycles for QuantumScape single-layer cells under its stated conditions. Neither result is a peer-reviewed Joule paper, and neither demonstrates automotive multi-layer commercial manufacture. The distinction between single-layer cell results and repeatable multi-layer, pouch or prismatic production at yield and cost remains material. These announcements show industrial interest and reported cell-level progress, not a resolved commercial-viability claim.",
      vectors: ["partial--laboratory-cycle-life-demonstrated-manufacturing-scale-up-absent"],
      date: "2020–22",
    },
    {
      id: "IN-003",
      qualifiedEvent: "Timeline slippage and manufacturing bottlenecks",
      description: "Company timetable revisions and manufacturing pivots indicate that commercialisation has taken longer than early public expectations. Toyota moved its public all-solid-state vehicle objective to 2027–28; QuantumScape and Solid Power also changed public manufacturing or commercialisation approaches. These changes are not retractions of the underlying research, but they do not establish commercial manufacture either. Interface stability, dendrite control, cell architecture, processing, and manufacturing yield are relevant scale-up challenges; this record does not attribute a single, broad obstacle finding to Argonne or Fraunhofer without a source-bounded assessment.",
      vectors: ["partial--progress-confirmed-commercial-threshold-receding"],
      date: "2022–24",
    },
    {
      id: "IN-004",
      qualifiedEvent: "Toyota sulfide breakthrough claim and initial independent assessment",
      description: "Toyota's June 2023 technical roadmap described an approximately 1,200 km battery-electric driving-range target and charging in 10 minutes or less, with a stated commercialisation objective of 2027–28. It did not claim 1,200 Wh/L or 1,000+ cycles. Toyota identified durability as continuing development work. The roadmap is a company target, not independently verified production or performance evidence, and it does not by itself establish the record's simultaneous commercial energy-density, safety, cycle-life, yield, and cost conjunction.",
      vectors: ["partial--claimed-breakthrough-peer-reviewed-verification-absent"],
      date: "2023–24",
    },
    {
      id: "IN-005",
      qualifiedEvent: "Chinese manufacturers — CATL, BYD solid-state programmes",
      description: "Chinese companies and suppliers have announced research and pilot initiatives involving semi-solid or all-solid-state battery technologies. The available source chain for this instance is not sufficient to assert 2023 production, a fully solid-state 2027 target, or comparative commercial leadership by CATL, BYD, or any national programme. It is therefore retained only as evidence of industrial activity around adjacent and all-solid-state technologies, not as evidence of commercial deployment or a ranked path to satisfying this claim.",
      vectors: ["partial--transitional-production-full-solid-state-commercial-threshold-not-yet-met"],
      date: "2023–24",
    },
    {
      id: "IN-006",
      qualifiedEvent: "Toyota's 2025 production target elapses; 2027–28 timeline reaffirmed amid renewed delay reports",
      description: "Toyota's development and production plan for next-generation batteries, including all-solid-state batteries, received METI certification under the Battery Supply Assurance Plan on September 6, 2024. Toyota and Sumitomo Metal Mining announced a joint development agreement for cathode materials for all-solid-state batteries on October 8, 2025. Toyota continues to state a 2027–28 market-launch objective. These are industrial-policy and supply-chain events, not independent validation of commercial vehicle performance, yield, safety, cycle life, or execution certainty. Earlier claims in this instance about Chinese pilot lines, energy density, and supply contracts are removed because this record does not retain a sufficient source basis for them.",
      vectors: ["partial--timeline-elapsed-without-delivery-genuine-progress-continues"],
      date: "2025–26",
    },
    {
      id: "IN-007",
      qualifiedEvent: "QuantumScape automated pilot-line ramp and milestone-based PowerCo scale-up programme",
      description: "QuantumScape's 2026 Eagle Line evidence materially advances the manufacturing-scale-up side of the record without satisfying the commercial-viability claim. The company reports that its automated pilot line is producing initial QSE-5 volumes, shipping samples to customers, and achieving greater than 90% uptime on core tools while it works to improve process stability, throughput, quality, and reliability. A July 2026 amendment with Volkswagen's PowerCo restructures the joint programme around milestone-based payments tied to delivery and validation of cells over the following two years. At the same time, QuantumScape's Q2 2026 Form 10-Q continues to describe the company as pre-revenue and explicitly states that commercial success still requires substantial improvements in quality, consistency, reliability, throughput, safety, and cost. This is genuine movement from laboratory demonstration toward repeatable pilot manufacture, but not evidence that solid-state batteries have yet achieved the record's three-threshold conjunction at automotive production scale and commercial cost.",
      vectors: ["partial--automated-pilot-scale-up-progress-commercial-threshold-unmet"],
      date: "2026",
      sources: [
        {
          citation: "QuantumScape Corporation, Form 10-Q for the quarter ended June 30, 2026",
          url: "https://www.sec.gov/Archives/edgar/data/1811414/000119312526316073/qs-20260630.htm",
          locator: "Product Development; Commercialization and Market Focus",
        },
        {
          citation: "QuantumScape Corporation, Form 8-K, July 16, 2026",
          url: "https://www.sec.gov/Archives/edgar/data/1811414/000119312526312381/qs-20260716.htm",
          locator: "Item 1.01 — PowerCo collaboration amendment",
        },
        {
          citation: "QuantumScape, Q2 2026 shareholder letter — Eagle Line Update",
          url: "https://www.sec.gov/Archives/edgar/data/1811414/000119312526312423/qs-ex99_1.htm",
          locator: "Eagle Line Update",
        },
      ],
    }
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2024-01-15",
      pressureState: "escalating",
      verificationStage: "VS-02",
      summary: "The claim has not been satisfied. No solid-state battery has simultaneously demonstrated commercially viable energy density, safety, and cycle life at the manufacturing scale and cost required for EV deployment. Individual thresholds have been approached or met in laboratory settings; the three-threshold conjunction at commercial scale has not. The pressure state is ESCALATING. The field is advancing on genuine engineering problems with substantial industrial investment. The physics is not disputed — ion conduction through solid electrolytes is well understood — and the challenge is engineering and manufacturing scale-up rather than contested science (RM-001): laboratory milestones continue to be met and industrial commitment continues to grow (INST-002, INST-005), but the three-threshold conjunction at commercial manufacturing scale and cost has not been demonstrated, and announced delivery timelines have consistently receded rather than been met (INST-003).",
      assessorNote: null,
    },
    {
      id: "AS-002",
      date: "2026-06-27",
      pressureState: "escalating",
      verificationStage: "VS-03",
      summary: "INST-006 sustains the ESCALATING state identified at AS-001 rather than advancing or collapsing it. The 2025 commercial target already flagged as superseded at IN-003 has now genuinely elapsed without a solid-state EV reaching production, which removes any ambiguity about whether that particular date might still be met. At the same time, the evidence does not support reclassifying this record toward the PROG-AM collapse dynamic (CM-001 elsewhere in the corpus): government production approval for the underlying technology, a named material-supply joint venture with a defined 2027 facility start date, and continuing — if uneven — progress from Chinese manufacturers are all genuine engineering and industrial advances, not disputed physics or failed replication. The pattern remains exactly what RM-001 describes: laboratory and component-level milestones continue to be met while full commercial-scale, three-threshold delivery continues to recede. Verification stage advances to VS-03 (Audit): the underlying technology has now cleared a formal government regulatory/production-approval review, the first independent scrutiny event in this record's history — though this is approval of the technology rather than independent replication of Toyota's specific performance claims (IN-004), which remains unverified in peer-reviewed form. OQ-002's procedural question (whether dated attractors warrant scheduled re-entry) is now reinforced by direct example: this record's own dated attractor target has elapsed.",
      assessorNote: "Sources: Toyota Motor Corporation newsroom (Oct 8, 2025); Electrek (Oct 30, 2025); evxl.co reporting on the Japan Mobility Show (Nov 9, 2025); Shanghai Metals Market solid-state battery industry tracking (Nov 2025); Solid-State Battery Scoreboard 2025–2026 (Feb 2026). Verified directly via web search during RELEASE-004 / TRIAL-001, 2026-06-27.",
    },
    {
      id: "AS-003",
      date: "2026-08-29",
      pressureState: "escalating",
      verificationStage: "VS-03",
      summary: "IN-007 sustains ESCALATING / VS-03. QuantumScape's automated Eagle Line, customer sample shipments, and milestone-based PowerCo programme are stronger evidence of industrialization than the earlier single-layer and prototype milestones in this record. They directly bear on RM-001 because the work is now testing repeatable manufacturing processes rather than only electrochemical performance. But the same primary filings explicitly preserve the unresolved commercial gap: QuantumScape remains pre-revenue, the line is still a pilot facility, and quality, consistency, reliability, throughput, safety, and cost remain development requirements. No evidence reviewed in this pass demonstrates a production EV battery meeting energy density, safety, and cycle-life requirements simultaneously at commercial manufacturing yield and cost. The attractor therefore remains future operational deployment rather than pilot-line progress.",
      assessorNote: "Record Review 2026-08-29. Primary evidence: QuantumScape Q2 2026 Form 10-Q; July 16, 2026 Form 8-K covering the PowerCo amendment; Q2 2026 shareholder letter Eagle Line update. Provenance captured directly on IN-007 under PA-004.",
    },
    {
      id: "AS-004",
      date: "2026-08-29",
      pressureState: "escalating",
      verificationStage: "VS-02",
      summary: "Classification correction following bounded source review. ESCALATING is retained, but the current Verification Stage returns from VS-03 to VS-02. AS-002 advanced the record to VS-03 because a Japanese government event was characterised as a regulatory/production-approval review providing independent scrutiny of the technology. The underlying event was instead METI certification, on September 6, 2024, of Toyota’s battery development and production plan under the Battery Supply Assurance Plan. That industrial-policy certification supports the reality and seriousness of Toyota’s programme, but it does not independently audit Toyota’s claimed solid-state battery performance, manufacturing yield, safety, cycle life, energy density, or commercial viability. The later Sumitomo Metal Mining agreement and the 2026 QuantumScape pilot-line evidence likewise strengthen the industrialisation trajectory without supplying the independent claim-level scrutiny required for VS-03. This stage correction is epistemic: it corrects the Observatory’s earlier classification rationale and does not represent deterioration in the technology or a change in the ESCALATING pressure state.",
      assessorNote: "Bounded FR-AM-0006 VS-03 Classification Review, 2026-08-29. Primary source basis: Toyota Motor Corporation, Sep. 6, 2024, METI certification of battery development and production plan under the Battery Supply Assurance Plan; Toyota/Sumitomo Metal Mining, Oct. 8, 2025, cathode-material mass-production development agreement. AS-002 and AS-003 are preserved as historical assessments; AS-004 supersedes their current-stage conclusion without rewriting them.",
    },
    {
      id: "AS-005",
      date: "2026-09-21",
      pressureState: "escalating",
      verificationStage: "VS-02",
      summary: "LPR-001-D23 corrects the source characterisation of IN-001 through IN-006 while preserving IN-007, whose primary-source evidence remains valid. The correction removes the purported QuantumScape Joule paper, unsupported Toyota performance parameters, unbounded institution-level attributions, and unsupported Chinese production, pilot, and supply-chain claims. The surviving evidence still supports ESCALATING: there is continuing laboratory, industrial-policy, supply-chain, and pilot-line activity, but no evidence in this review establishes the claim's simultaneous energy-density, safety, cycle-life, manufacturing-yield, and cost conjunction. VS-02 is retained because the corrected industrial and company evidence does not supply independent claim-level technical scrutiny. Toyota's 2027–28 timing remains a stated company objective, not a verified delivery event.",
      assessorNote: "Bounded provenance correction, LPR-001-D23, 2026-09-21. IN-001–IN-006 reconstructed to the retained source basis; IN-007 preserved unchanged. This assessment supersedes neither historical entries nor the stated company roadmap; it records the current evidentiary boundary.",
    }
  ],

  mechanisms: [
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Manufacturing scale-up gap. Solid-state battery performance demonstrated in single-layer laboratory cells does not automatically translate to multi-layer pouch or prismatic cells manufactured at commercial yield and cost. Interface resistance, mechanical stress during cycling, and dendrite formation at the solid electrolyte interface scale nonlinearly with cell size and layer count. This is an engineering scale-up problem rather than a physics problem: the phenomena are understood; the manufacturing solutions are not yet fully developed. The resistance mechanism is standard engineering scale-up challenge — not a fundamental physical obstacle, but a practical barrier that requires iteration across materials, cell design, and manufacturing process simultaneously.",
    },
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "\"Commercially viable\" lacks agreed simultaneous threshold specification. The claim requires energy density, safety, and cycle life simultaneously at commercial cost. Industry thresholds for each individual dimension exist (approximately), but no agreed standard specifies what \"commercially viable\" means when all three are measured together at manufacturing scale and cost. A cell meeting 400 Wh/kg at $150/kWh with 800 cycles may satisfy some commercial definitions and not others. The threshold bottleneck is less severe here than in previous threshold-dispute cases (FR-BT-0001, FR-QE-0007) because the industry has relatively concrete requirements driven by EV economics — but the conjunction is not formally standardised. This is a threshold dispute bottleneck, not a measurement validity bottleneck: the measurements are direct and reliable; the passing score for the conjunction is not formally agreed.",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "First production vehicle with a solid-state battery meeting the claim's thresholds under independent third-party testing. The specific event that would transition this record from ESCALATING toward RESOLVING is commercial release of an EV with evidence on energy density, safety, cycle life, manufacturing yield, and cost. Toyota states a 2027–28 objective; it is a monitored company timetable, not certification or proof of delivery. The attractor remains future operational deployment rather than company roadmaps, policy certification, supply agreements, or pilot-line progress.",
    }
  ],

  lineage: {
    items: [
    { year: "1990s–2010", text: "Solid-state electrolyte research established. Ceramic, sulfide, and polymer electrolytes demonstrated in laboratory cells. Performance below commercial thresholds; fundamental materials science advanced." },
    { year: "2017–20", text: "Industrial interest intensifies. QuantumScape founded; Toyota, Samsung, and others announce major solid-state programmes. Venture capital and OEM investment grows substantially." },
    { year: "2020–22", text: "Reported single-layer cycle milestones and industrial commitments. QuantumScape reported more than 1,000 cycles in its December 2020 investor materials; Mobile Power Solutions reported 800+ cycles in independent 2021 testing under stated conditions. These did not demonstrate commercial multi-layer manufacture." },
    { year: "2022–24", text: "Commercialisation targets and manufacturing approaches evolve. Toyota states a 2027–28 all-solid-state vehicle objective; engineering scale-up questions remain open." },
    { year: "2025–26", text: "METI certification and material-development agreement. Toyota’s development and production plan was METI-certified in 2024, and Toyota/Sumitomo Metal Mining announced cathode-material development in 2025; both indicate programme activity, not claim-level commercial validation." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "The PROG-AM diagnosis is now qualified: it applies to physically disputed claims, not to engineering-threshold claims. Does this mean PROG-AM contains two structurally distinct claim sub-populations that should eventually be tracked separately, or is the programme's container relationship sufficient for current purposes?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "FR-AM-0006 has an approximately dated company objective (Toyota 2027–28), following FR-BT-0004's 2026 NHS-Galleri timeline. Does this warrant a procedural note — a way for the Observatory to flag records for scheduled re-entry when a dated evidence event approaches?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "How should company roadmaps and public technical briefings be classified when they supply industrial orientation but not independently verified commercial performance? Is commercial anticipatory evidence the appropriate category rather than a collapse mechanism?",
      raisedDate: "2024-01-15",
    }
  ],

  realizationNotes: [
    {
      id: "REN-001",
      note: "Realization currently depends on manufacturing-process scale-up for solid-state cells, distinct from the underlying electrolyte and cell-chemistry evidence.",
      conflation: null,
      raisedDate: "2026-07-08",
      status: "open",
      closedDate: null,
      closedNote: null,
    }
  ],

  mutationLog: [
    { id: "M-017", date: "2026-09-21", field: "provenance_repair", from: "IN-001–IN-006 contained overbroad, misattributed, or insufficiently sourced claims", to: "IN-001–IN-006 reconstructed to a bounded retained-source basis; AS-005 issued; IN-007 preserved", note: "LPR-001-D23 completed. Corrected QuantumScape's 2021 independent-test characterisation, Toyota's June 2023 roadmap parameters, unbounded Argonne/Fraunhofer attribution, and unsupported Chinese production, pilot, and supply-chain assertions. State remains ESCALATING and current verification stage remains VS-02; no new evidence admitted." },
    {"id":"M-016","date":"2026-09-06","field":"description_restored","from":"Legacy ingestion cutoffs: mechanisms:RM-001, mechanisms:BN-001, mechanisms:AT-001","to":"Source-restored complete descriptions","note":"Editorial Correction (GP-001), RENDER-PILOT-001 content restoration: restored RM-001, BN-001, AT-001 from FR_MF_0006_solid_state_batteries_EV.html (Drive file 1C8JlUzn2qBeHOncW6vAxA98w5g0Qcnju). Each damaged value was a verified prefix of the recovered source after the existing FR-MF to FR-AM identifier migration. Restored the omitted remainder using the original converter text normalization; no inferred completion. Existing later corrections retained. Restoration recovers historical wording and does not reaffirm it as the current assessment. Assessments, evidence instances, open questions, claim, status and rendering eligibility unchanged. Source hashes and field receipt: docs/reviews/render-pilot-content-restoration.json; current-assessment compatibility review: docs/reviews/RENDER-PILOT-001-CONTENT-RESTORATION.md."},
    // APPEND-ONLY. Newest first.
    { id: "M-015", date: "2026-08-29", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "AS-004 issued after bounded VS-03 Classification Review. Pressure state ESCALATING retained; Verification Stage corrected from VS-03 to VS-02 because METI supply-plan certification is not independent claim-level technical audit." },
    { id: "M-014", date: "2026-08-29", field: "editorial_correction", from: "IN-006 / lineage government production approval wording", to: "METI development-and-production-plan certification wording", note: "Editorial Correction: replaced the unsupported October 7, 2025 government production-approval characterisation with the substantiated September 6, 2024 METI certification of Toyota’s battery development and production plan; clarified the separate October 8, 2025 Sumitomo material-development agreement. Evidentiary direction unchanged." },
    { id: "M-013", date: "2026-08-29", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "AS-003 issued after bounded FR-AM-0006 Record Review. Pressure state ESCALATING and VS-03 sustained; IN-007 does not meet the commercial-operation attractor." },
    { id: "M-012", date: "2026-08-29", field: "instance_added", from: "—", to: "IN-007", note: "PA-004 operational provenance trial: QuantumScape automated pilot-line scale-up evidence admitted with canonical sources[] captured at admission." },
    { id: "M-011", date: "2026-07-09", field: "description_reordered", from: "—", to: "DESCRIPTION-REORDERED", note: "Editorial Correction (GP-001): IN-001, IN-003, IN-006 descriptions reordered per EP-001 — existing closing synthesis sentence moved to opening, no wording added or removed." },
    { id: "M-010", date: "2026-07-08", field: "realization_note_added", from: "—", to: "REN-001", note: "realizationNotes field added to schema. REN-001: manufacturing-process scale-up distinguished from underlying electrolyte/cell-chemistry evidence. Corpus Review — Realization Note Candidates (v2)." },
    { id: "M-009", date: "2026-06-27", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "ASSESSMENT-002 issued. Pressure state: ESCALATING (sustained). Triggering instance: INST-006. Part of RELEASE-004 / TRIAL-001." },
    { id: "M-008", date: "2026-06-27", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "INST-006 added (2025 timeline window elapsed; 2027–28 target reaffirmed amid renewed delay reports)." },
    { id: "M-007", date: "2026-06-18", field: "record_id_migrated", from: "FR-MF-0006", to: "FR-AM-0006", note: "Programme identity changed. Record identifier migrated to preserve constitutional consistency. FR-MF-* → FR-AM-*. 2026-06-18." },
    { id: "M-005", date: "2024-01-15", field: "diagnosis_bounded", from: "—", to: "DIAGNOSIS-BOUNDED", note: "" },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" }
  ],

  status: "open",
};
