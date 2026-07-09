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

  claim: {
    statement: "Solid-state batteries can achieve commercially viable energy density, safety, and cycle life for electric vehicles.",
    shortLabel: "Solid-State Batteries — Commercial Viability for Electric Vehicles",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Laboratory demonstrations — oxide, sulfide, and polymer electrolytes",
      description: "The evidence establishes that the claim is not physically impossible; whether it is industrially achievable is the open question. Academic and industrial laboratories demonstrate solid-state cells with energy densities exceeding conventional lithium-ion at small scale. Three primary electrolyte families emerge: oxide ceramics (LLZO, LATP), sulfide glasses (LGPS, argyrodites), and solid polymers (PEO). Each family demonstrates key advantages — oxides offer highest voltage stability, sulfides offer highest ionic conductivity approaching liquid electrolytes, polymers offer manufacturability — but each faces distinct limitations. No electrolyte family simultaneously achieves all three commercial thresholds at laboratory scale by 2020. Ionic conductivity, mechanical properties, and electrochemical stability remain engineering challenges. The field is not contesting the physics — ion conduction through solid electrolytes is well understood — but is navigating engineering trade-offs between competing material properties.",
      vectors: ["neutral--laboratory-feasibility-established-no-commercial-threshold-met"],
      date: "2011–20",
    },
    {
      id: "IN-002",
      qualifiedEvent: "Toyota, QuantumScape, Solid Power — industrial commitments and claimed milestones",
      description: "Toyota announces a solid-state battery target for 2025 hybrid vehicles; QuantumScape (Bill Gates-backed, Volkswagen partnership) reports >1,000 cycle performance at high C-rates in small single-layer pouch cells at 25°C (December 2020, investor day) and publishes peer-reviewed results (Joule, 2021). Solid Power (BMW, Ford partnership) announces pilot line production. These announcements generate substantial investor and media attention. The QuantumScape peer-reviewed result is genuine: single-layer cells demonstrate the cycle life threshold under limited conditions. However, single-layer laboratory cells are not commercially manufactured multi-layer cells — the scale-up challenge from single-layer to multi-layer to pouch to prismatic to manufacturing yield is the primary unresolved engineering problem. The announcement-to-delivery gap opens: ambitious public timelines followed by delayed commercial availability. This is the closest the record comes to the PROG-AM collapse dynamic — but the mechanism is different. No scientific fraud or replication failure is involved; the gap is manufacturing scale-up, not disputed physics.",
      vectors: ["partial--laboratory-cycle-life-demonstrated-manufacturing-scale-up-absent"],
      date: "2020–22",
    },
    {
      id: "IN-003",
      qualifiedEvent: "Timeline slippage and manufacturing bottlenecks",
      description: "The claim transitions from EMERGING to ESCALATING: genuine progress is occurring, but the commercial threshold remains unmet and receding timelines suggest the gap is larger than initially estimated. Toyota revises its solid-state battery EV timeline from 2025 to 2027–28; QuantumScape revises its commercial vehicle delivery timeline multiple times; Solid Power pivots from cell manufacturing to licensing its electrolyte technology to automotive OEMs rather than manufacturing cells directly. The revisions are not retractions — the underlying technology continues to advance — but they reflect a consistent pattern: laboratory performance milestones are achievable; commercial manufacturing at automotive scale is substantially harder and slower than initial estimates. The three-threshold conjunction (energy density + safety + cycle life at commercial manufacturing yield and cost) has not been demonstrated. Several independent technical assessments (Argonne National Laboratory, Fraunhofer Institute) identify dendrite formation, interface resistance, and manufacturing yield as primary remaining obstacles.",
      vectors: ["partial--progress-confirmed-commercial-threshold-receding"],
      date: "2022–24",
    },
    {
      id: "IN-004",
      qualifiedEvent: "Toyota sulfide breakthrough claim and initial independent assessment",
      description: "Toyota announces in June 2023 a claimed breakthrough in sulfide solid electrolyte formulation enabling all three commercial thresholds simultaneously, with a target of 2027–28 vehicle launch. The claim is made at a press briefing, not through peer-reviewed publication. Initial independent technical assessment is mixed: materials scientists note that the claimed performance parameters (1,200 Wh/L, 1,000+ cycles, 10-minute charging) are within the theoretical range for sulfide electrolytes but have not been independently verified. No peer-reviewed data has been published as of early 2024. This is the closest this record comes to the PROG-AM pattern: an announcement made at a press briefing before peer-reviewed publication, under competitive pressure, generating significant media and investor attention. However, the mechanism is commercial competitive pressure (Toyota competing with Chinese EV manufacturers) rather than scientific priority competition, and the claim is about an engineering milestone rather than a physical discovery. Whether this constitutes the collapse dynamic or a different kind of anticipatory announcement is the question the diagnosis stress condition must evaluate.",
      vectors: ["partial--claimed-breakthrough-peer-reviewed-verification-absent"],
      date: "2023–24",
    },
    {
      id: "IN-005",
      qualifiedEvent: "Chinese manufacturers — CATL, BYD solid-state programmes",
      description: "CATL announces a semi-solid-state battery entering production in 2023 (not fully solid-state but higher solid content than conventional lithium-ion) and targets fully solid-state by 2027. BYD announces similar programmes. Chinese manufacturers are operating under different competitive dynamics than Western counterparts: state support, integrated supply chains, and volume production experience in conventional batteries provide manufacturing advantages. The Chinese programmes represent the most credible path to commercial-scale solid-state battery production in the near term, though performance verification is limited in open literature. This is the ninth occurrence of anticipatory institutional evidence: substantial industrial capital is being committed in anticipation of the claim's eventual satisfaction. Unlike previous anticipatory acts, this one involves actual production deployment of transitional technology (semi-solid) while pursuing the claim's full satisfaction.",
      vectors: ["partial--transitional-production-full-solid-state-commercial-threshold-not-yet-met"],
      date: "2023–24",
    },
    {
      id: "IN-006",
      qualifiedEvent: "Toyota's 2025 production target elapses; 2027–28 timeline reaffirmed amid renewed delay reports",
      description: "This is the fourth distinct timeline point in this record's lineage (2020 → 2023 → 2026 → 2027–28) and the first occasion on which a previously-set target date (2025) has fully elapsed within the corpus's observation window without resolution either way. Toyota's solid-state battery EV timeline, already revised from 2025 to 2027–28 by IN-003, reaches its original 2025 target date in 2026 with no commercial solid-state EV delivered. Toyota receives Japanese government production approval for its sulfide-electrolyte solid-state battery technology (October 7, 2025) and announces a joint development agreement with Sumitomo Metal Mining for cathode material mass production (October 8, 2025), alongside a planned lithium-sulfide facility with Idemitsu Kosan targeted to start in 2027. At the Japan Mobility Show (late October 2025), Toyota executive Keiji Kaita reaffirms the 2027–28 production target for battery electric vehicles, citing 1,000 km-plus range and rapid charging as design goals. Within days, however, industry reporting (Electrek) describes Toyota again delaying elements of its broader EV battery plans, citing slowing EV demand even as global EV sales pass two million units monthly for the first time (September 2025). Separately, Chinese manufacturers continue parallel progress: pilot-scale all-solid-state lines report energy densities above 400 Wh/kg in early 2026, and material suppliers announce large sulfide-electrolyte production contracts.",
      vectors: ["partial--timeline-elapsed-without-delivery-genuine-progress-continues"],
      date: "2025–26",
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
    }
  ],

  mechanisms: [
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Manufacturing scale-up gap. Solid-state battery performance demonstrated in single-layer laboratory cells does not automatically translate to multi-layer pouch or prismatic cells manufactured at commercial yield and cost. Interface resistance, mechanical stress during cycling, and dendrite formation at the solid electrolyte interface scale nonlinearly with cell size and layer count. This is an eng",
    },
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "\"Commercially viable\" lacks agreed simultaneous threshold specification. The claim requires energy density, safety, and cycle life simultaneously at commercial cost. Industry thresholds for each individual dimension exist (approximately), but no agreed standard specifies what \"commercially viable\" means when all three are measured together at manufacturing scale and cost. A cell meeting 400 Wh/kg ",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "First production vehicle with certified solid-state battery meeting all three thresholds. The specific event that would transition this record from ESCALATING toward RESOLVING is the commercial release of an EV with a certified solid-state battery pack meeting energy density, safety, and cycle life requirements under independent third-party testing. Toyota targets 2027–28; Chinese manufacturers ta",
    }
  ],

  lineage: {
    items: [
    { year: "1990s–2010", text: "Solid-state electrolyte research established. Ceramic, sulfide, and polymer electrolytes demonstrated in laboratory cells. Performance below commercial thresholds; fundamental materials science advanced." },
    { year: "2017–20", text: "Industrial interest intensifies. QuantumScape founded; Toyota, Samsung, and others announce major solid-state programmes. Venture capital and OEM investment grows substantially." },
    { year: "2020–22", text: "Laboratory milestones and overpromised timelines. QuantumScape demonstrates single-layer cycle performance; OEM partners announce ambitious delivery timelines. The announcement-to-delivery gap opens." },
    { year: "2022–24", text: "Timeline revision and manufacturing pivot. Commercial timelines extend; companies pivot from vertical integration to licensing or semi-solid intermediate products. Engineering scale-up identified as primary obstacle." },
    { year: "2025–26", text: "2025 target elapses; 2027–28 reaffirmed. Toyota receives government production approval for the underlying technology and signs a material-supply joint venture, while reaffirming a 2027–28 vehicle target and simultaneously reporting renewed delays elsewhere in its EV battery plans." }
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
      question: "FR-AM-0006 is the second record in the corpus with an approximately dated attractor (Toyota/Chinese 2027–28 target), following FR-BT-0004 (2026 NHS-Galleri). Two occurrences of dated attractors. Does this warrant a procedural note — a way for the Observatory to flag records for scheduled re-entry when a dated evidence event approaches?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "INST-004 (Toyota press briefing before peer review) superficially resembles the PROG-AM collapse dynamic but differs in two ways: no disputed physics, and no subsequent replication failure. Is Toyota's pre-publication announcement better classified as commercial anticipatory evidence (RN-004 territory) rather than as the collapse mechanism (CM-001)?",
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
    // APPEND-ONLY. Newest first.
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
