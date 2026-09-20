/**
 * FR-AM-0005 — Room-Temperature Superconductivity — Reproducibility Under Laboratory Conditions
 * Programme: PROG-AM
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_AM_0005 = {
  id: "FR-AM-0005",
  programme: "PROG-AM",
  lastProvenanceReview: "2026-09-20",
  provenanceReviewId: "LPR-001-D22",
  provenanceOutcome: "discrepancies_corrected",
  provenanceRepairStatus: "completed",

  claim: {
    statement: "A room-temperature superconductor can be produced under reproducible laboratory conditions.",
    shortLabel: "Room-Temperature Superconductivity — Reproducibility Under Laboratory Conditions",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "Ranga Dias / University of Rochester — carbonaceous sulfur hydride and lutetium hydride claims",
      description: "Ranga Dias and collaborators reported near-room-temperature superconductivity in carbonaceous sulfur hydride (CSH) in 2020 and a room-temperature transition in nitrogen-doped lutetium hydride in 2023. Both Nature papers were later retracted. The CSH retraction cited non-standard, inadequately disclosed background subtraction that undermined confidence in the magnetic-susceptibility data; the authors disputed the retraction. The lutetium-hydride retraction cited unresolved concerns about the reliability of the data and the provenance of the material. These are serious source-integrity failures, but the retraction notices do not themselves establish that both datasets were falsified or that both cases were formal findings of research misconduct. Neither claim provides independently reproduced evidence for this record's proposition.",
      vectors: ["contesting--data-manipulation-both-papers-retracted"],
      date: "2020–23",
      sourceReference: "Nature retraction notices for CSH (2022) and nitrogen-doped lutetium hydride (2023)",
      sources: [
        { citation: "Nature, ‘Retraction Note: Room-temperature superconductivity in a carbonaceous sulfur hydride’ (2022)", locator: "Undisclosed non-standard background subtraction and loss of confidence in magnetic-susceptibility data" },
        { citation: "Nature, ‘Retraction Note: Evidence of near-ambient superconductivity in a N-doped lutetium hydride’ (2023)", locator: "Unresolved reliability and material-provenance concerns" },
      ],
    },
    {
      id: "IN-002",
      qualifiedEvent: "LK-99 — rapid global replication attempt and failure",
      description: "A South Korean team posted preprints claiming that LK-99, a copper-substituted lead-apatite material, was a room-temperature ambient-pressure superconductor. The claim prompted unusually rapid international replication attempts. Subsequent experimental and theoretical work did not confirm a superconducting transition or zero resistance in LK-99. Apparent partial levitation was not sufficient evidence of a Meissner effect, and impurity and magnetic explanations were investigated as alternatives; the record does not assign a single universal cause to every video or sample. LK-99 is therefore strong candidate-specific negative evidence: the claimed material did not yield independently reproduced room-temperature superconductivity.",
      vectors: ["contesting--global-replication-attempt-definitive-null"],
      date: "Jul–Aug 2023",
      sourceReference: "Nature reporting and peer-reviewed LK-99 replication studies (2023)",
      sources: [
        { citation: "Nature, ‘The search for room-temperature superconductors is heating up’ (2023)", locator: "Replication activity and absence of confirmed LK-99 superconductivity" },
        { citation: "Guo et al., ‘Pressure-induced zero resistance in a three-dimensional topological material’ is not LK-99 evidence; LK-99 replication literature finds no superconducting transition", locator: "Candidate-specific negative replication evidence" },
      ],
    },
    {
      id: "IN-003",
      qualifiedEvent: "High-pressure hydride superconductors — confirmed reproducibility below room temperature",
      description: "High-pressure hydrides provide the strongest established route toward very high transition temperatures. H₃S was reported near 203 K under megabar pressure in 2015, and LaH₁₀ was reported near 250–260 K under comparable extreme pressure in 2019; subsequent experimental work supports superconducting behaviour in these hydride systems. They demonstrate that very high-temperature superconductivity is physically attainable under extreme compression, while remaining below conventional room temperature and far from ambient-pressure operation. This is partial supportive context for the claim's feasibility, not evidence that a room-temperature superconductor has been reproducibly produced under laboratory conditions.",
      vectors: ["partial--reproducible-but-below-threshold"],
      date: "2015–19",
      sourceReference: "Drozdov et al. (2015) H₃S; Drozdov et al. (2019) and Somayazulu et al. (2019) LaH₁₀",
      sources: [
        { citation: "Drozdov et al., ‘Conventional superconductivity at 203 kelvin at high pressures in the sulfur hydride system’, Nature 525 (2015)", doi: "10.1038/nature14964", locator: "H₃S high-pressure transition" },
        { citation: "Somayazulu et al., ‘Evidence for superconductivity above 260 K in lanthanum superhydride at megabar pressures’, Physical Review Letters 122 (2019)", doi: "10.1103/PhysRevLett.122.027001", locator: "LaH₁₀ high-pressure evidence" },
      ],
    },
    {
      id: "IN-004",
      qualifiedEvent: "Community methodological response — reproducibility standards tighten",
      description: "The Dias retractions and LK-99 episode prompted intensive methodological scrutiny of extraordinary superconductivity claims. Published commentary and replication work emphasise the need to distinguish resistive transitions from convergent superconducting evidence, to disclose analysis choices and sample provenance, and to enable independent reproduction. The audit did not substantiate a 2023 Nature or Physical Review Letters institutional rule requiring a fixed universal trio of zero resistance, Meissner evidence and specific-heat anomaly in every claim. This instance is therefore limited to the documented methodological lesson: a credible room-temperature claim requires transparent primary measurements and independent replication, with the appropriate corroborating evidence assessed in context.",
      vectors: ["neutral--methodological-scrutiny-and-replication-expectation"],
      date: "2023",
      sourceReference: "Post-LK-99 methodological commentary and replication literature",
      sources: [
        { citation: "Nature Physics, commentary on the LK-99 episode and standards of evidence for superconductivity claims (2023)", locator: "Methodological scrutiny; not a formal universal three-signature rule" },
      ],
    },
    {
      id: "IN-005",
      qualifiedEvent: "Post-LK-99 landscape — no credible room-temperature superconductivity claim survives",
      description: "By 2024, no represented room-temperature-superconductivity candidate had produced independent reproducible evidence sufficient to establish the claim. LK-99 had failed intensive candidate-specific replication, while the earlier high-profile Dias-associated claims had been retracted. This supports the record's negative conclusion without converting those episodes into a field-wide measured null result across every material class or condition. The absence of a confirmed reproducible candidate is meaningful, but it remains distinct from proof that no future candidate can succeed.",
      vectors: ["contesting--represented-candidates-not-independently-reproduced"],
      date: "2024",
      sourceReference: "Candidate-specific replication and retraction evidence represented in IN-001 and IN-002",
      sources: [
        { citation: "Nature reporting and peer-reviewed replication literature on LK-99; Nature retraction notices for Dias-associated claims", locator: "No represented candidate independently reproduced by 2024" },
      ],
    },
    {
      id: "IN-006",
      qualifiedEvent: "2025–26 activity — nickelate stabilisation, a new high-pressure record claim, and a field-wide roadmap",
      description: "Field activity continued after 2024. A Stanford/SLAC nickelate result was published in Nature in December 2024 and publicised by SLAC in February 2025; its transition temperature is far below room temperature, so it is broader materials-science context rather than evidence for this claim. A LaSc₂H₂₄ preprint submitted on 29 September 2025 reports resistance, magnetic-field-suppression and thirteen repeat-run measurements at 195–266 GPa, with onset temperatures up to 298 K. This is a substantive single-team high-pressure candidate, not a confirmed result: it remains an unreplicated preprint and does not establish reproducible room-temperature superconductivity. The claimed March 2026 PNAS field-wide roadmap was not verified and is removed. The instance records the candidate accurately without treating it as either confirmation or a duplicate new record.",
      vectors: ["partial--unreplicated-high-pressure-room-temperature-candidate"],
      date: "2025–26",
      sourceReference: "Stanford/SLAC nickelate Nature publication (Dec 2024); LaSc₂H₂₄ preprint submitted 29 Sep 2025",
      sources: [
        { citation: "SLAC National Accelerator Laboratory, nickelate superconductivity announcement (4 Feb 2025)", locator: "Ambient-pressure nickelate stability; transition temperature far below room temperature" },
        { citation: "LaSc₂H₂₄ high-temperature-superconductivity preprint (submitted 29 Sep 2025)", locator: "195–266 GPa; onset up to 298 K; resistance, field suppression and thirteen repeat runs; no independent replication" },
      ],
    }
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2024-01-15",
      pressureState: "collapsed",
      verificationStage: "VS-05",
      summary: "The claim has not been satisfied. No room-temperature superconductor has been reproduced under independent laboratory conditions to the community's current evidence standards. The two most prominent recent claims (Dias, LK-99) both failed replication — one through misconduct findings, one through rapid systematic null results from over forty independent groups. The confirmed high-pressure hydride results (INST-003) demonstrate that reproducible superconductivity approaching room temperature is achievable under extreme pressure, but not at room temperature or ambient pressure, and no material has met the community's evidence standard — zero resistance, Meissner effect, and specific heat anomaly, all independently confirmed — at conditions resembling laboratory practicality. The pressure state is COLLAPSED: the claim has been tested repeatedly, most recently and most rapidly in the LK-99 episode (INST-002), and no candidate has survived independent replication. The record remains open to reopening under AT-001 should a future material meet the tightened standard.",
      assessorNote: null,
    },
    {
      id: "AS-002",
      date: "2026-06-29",
      pressureState: "collapsed",
      verificationStage: "VS-05",
      summary: "The claim remains unsatisfied and the pressure state remains COLLAPSED. IN-006 documents that the field did not go quiet after the 2024 null result — a nickelate stabilisation at ambient pressure (Feb 2025), a new 298K high-pressure record (Nov 2025, unreplicated), and a March 2026 field-wide research roadmap all represent real activity — but none meets AT-001's reopening condition: zero resistance, Meissner effect, and specific-heat anomaly, confirmed independently, under the community's tightened standard. The November 2025 result is the closest superficial match to a 'room-temperature' headline since LK-99, and is explicitly logged here so that the record does not appear to have missed it; on examination it fails the same threshold IN-001 through IN-003 already established — high pressure, no independent confirmation, no full evidentiary set. This assessment exists to confirm the COLLAPSED state remains correct under current evidence, not to revise it. The record's status remains CLOSED.",
      assessorNote: "Sourced from: SLAC/Stanford nickelate result via Physics World and ScienceDaily coverage (Feb 2025, reported through 2025–26); La-Sc-H 298K claim via Physics World coverage of an arXiv preprint (Nov 2025) — not independently replicated, and the arXiv preprint itself not directly read; PNAS roadmap referenced via secondary summary (March 2026), primary paper not directly read. Given this record's COLLAPSED/CLOSED status and the high public-interest sensitivity of room-temperature superconductivity claims, primary-source verification of the 298K claim in particular is recommended before this assessment is cited as authoritative.",
    },
    {
      id: "AS-003",
      date: "2026-09-20",
      pressureState: "collapsed",
      verificationStage: "VS-05",
      summary: "LPR-001-D22 narrows the record's evidential basis but preserves the COLLAPSED / VS-05 judgement. The Dias-associated retractions are serious reliability and provenance failures, not established findings that both datasets were falsified; LK-99 remains decisive candidate-specific negative replication evidence, not a field-wide null experiment. High-pressure hydrides demonstrate very high transition temperatures below room temperature, while LaSc₂H₂₄ is now represented accurately as a single-team 298 K high-pressure preprint with reported supporting measurements but no independent replication. No candidate has yet supplied independently reproducible evidence that establishes room-temperature superconductivity under laboratory conditions. The collapse judgement is therefore about the represented claims failing to survive the required reproducibility test, not a claim that a universal three-signature rule has been formally adopted or that the underlying physical possibility has been disproved.",
      assessorNote: "Corrective assessment following LPR-001-D22 bounded provenance repair. AS-001 and AS-002 are preserved append-only. The state and stage were explicitly re-evaluated because earlier wording relied partly on an unsupported universal standard; they are retained on the narrower independent-reproducibility basis. No new evidence is admitted: the 2025 LaSc₂H₂₄ work was already IN-006.",
    }
  ],

  mechanisms: [
    {
      id: "CM-001",
      type: "COLLAPSE MECHANISM",
      description: "Premature public claim before independent replication. The Dias-associated claims and LK-99 were publicly prominent before independent laboratories had established reproducibility. That sequence amplifies attention and raises the cost of later correction when a claim fails scrutiny. The record does not infer a shared intent, a common misconduct finding, or a demonstrated incentive motive across the cases. It records the narrower recurring risk: extraordinary materials claims can become public narratives before the independent evidence needed to establish them exists.",
    },
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Sample sensitivity and synthesis irreproducibility. Superconducting properties in complex materials are highly sensitive to synthesis conditions: stoichiometry, impurity levels, grain boundaries, and thermal history all affect whether a material exhibits superconductivity and at what temperature. This creates a structural resistance to reproducibility independent of any intent to deceive: even a genuine room-temperature superconductor might be difficult to reproduce if its properties depend on poorly characterised synthesis variables. The resistance mechanism explains why the high-pressure hydride results took years to reproduce even when genuine, and why the LK-99 apparent partial corroborations (some groups observed partial levitation) could coexist with the definitive null on superconductivity itself.",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "Independently reproducible room-temperature superconductivity under documented laboratory conditions. A future candidate would reopen the record when independent laboratories reproduce a room-temperature transition using disclosed material preparation and measurement protocols, with convergent electrical, magnetic and other context-appropriate evidence sufficient to establish superconductivity. The record does not prescribe a universal fixed trio of signatures; the evidential package must be inspectable, coherent and independently reproducible. The attractor is outcome-based rather than tied to a particular material or headline temperature claim.",
    }
  ],

  lineage: {
    items: [
    { year: "1986–2010s", text: "High-temperature superconductor discovery and mechanism debate. Cuprate superconductors are discovered and reproduced; the mechanism remains unresolved (FR-AM-0003). The community establishes that superconductivity above 77K is achievable and reproducible. Room temperature remains a theoretical goal." },
    { year: "2015–19", text: "High-pressure hydrides — confirmed reproducibility approaching room temperature. Hydrogen sulfide at 203K and lanthanum hydride at 250–260K are reproduced independently. Room-temperature superconductivity under extreme pressure becomes a credible near-term target." },
    { year: "2020–23", text: "Dias-associated claims and retractions. Two high-profile Nature papers report near-room-temperature and room-temperature superconductivity, then are retracted over serious data-reliability and material-provenance concerns. The retraction notices do not establish that both cases were formal misconduct findings." },
    { year: "Jul–Aug 2023", text: "LK-99 — rapid candidate-specific replication failure. International testing does not reproduce a superconducting transition or zero resistance in the claimed ambient-pressure material. The claim collapses through failed independent reproduction." },
    { year: "2024–25", text: "No independently reproduced room-temperature candidate. High-pressure hydrides remain strong below-room-temperature context. A 2025 LaSc₂H₂₄ preprint reports an unreplicated 298 K high-pressure candidate; it is recorded without reopening the claim." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "What minimum form of independent, convergent evidence should the Observatory require before treating a room-temperature-superconductivity result as a reopening candidate, without imposing an unsupported universal checklist of signatures?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "CM-001 (pre-announcement collapse mechanism) appears independently in FR-AM-0001 and FR-AM-0005 across different eras and phenomena. Two occurrences of the same collapse mechanism within one programme is a new corpus observation. Does this constitute a programme-level mechanism pattern?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "FR-AM-0004 (commercial fusion) is the one escalating record in PROG-AM. The programme diagnosis suggests it may eventually follow the same collapse dynamic as FR-AM-0001 and FR-AM-0005. Is there evidence bearing on whether FR-AM-0004 is structurally different from the collapsed records — and if so, what protects it from the same dynamic?",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-004",
      question: "IN-006 now records a single-team 298 K high-pressure LaSc₂H₂₄ preprint without reopening the claim. What threshold—such as an independent replication attempt, a peer-reviewed primary report, or a materially new evidential feature—should trigger a Normal Record Review rather than repeated logging of an unreplicated candidate?",
      raisedDate: "2026-06-29",
    }
  ],

  mutationLog: [
    { id: "M-015", date: "2026-09-20", field: "provenance_repair", from: "LPR-001-D22 discrepancies_found / pending", to: "LPR-001-D22 discrepancies_corrected / completed", note: "Bounded correction executed for IN-001 through IN-006. Retracted-paper descriptions were narrowed to the retraction findings; LK-99 was corrected to candidate-specific failed replication; hydride context was source-bounded; the unsupported universal three-signature rule and alleged editorial guidance were removed; post-LK-99 absence claims were narrowed; and IN-006 was corrected for publication/preprint dates, the LaSc₂H₂₄ paper's reported measurements and its unreplicated status, with the unverified PNAS roadmap removed. Structured sources[] added to repaired instances. AS-001 and AS-002 preserved append-only; AS-003 explicitly re-evaluates and retains COLLAPSED / VS-05 on the narrower independent-reproducibility basis. CM-001, AT-001, 2020–23/2024–25 lineage, OQ-001 and OQ-004 brought into consistency. No new evidence admitted." },
    { id: "M-014", date: "2026-09-20", field: "provenance_review", from: "—", to: "LPR-001-D22 discrepancies_found / pending", note: "Bounded provenance audit completed for IN-001 through IN-006. Material representation and attribution discrepancies identified; no material corrections applied. Routine structured-source enrichment withheld where the instance itself requires correction. Queue marker recorded so deterministic LPR selection advances. Bounded correction candidate pending operator approval." },
    {"id":"M-013","date":"2026-09-06","field":"description_restored","from":"Legacy ingestion cutoffs: mechanisms:CM-001, mechanisms:RM-001, mechanisms:AT-001, lineage:1986–2010s","to":"Source-restored complete descriptions","note":"Editorial Correction (GP-001), RENDER-PILOT-001 content restoration: restored CM-001, RM-001, AT-001; lineage 1986–2010s from FR_MF_0005_room_temp_superconductor_reproducibility.html (Drive file 1tRbrLxtIn7a7DH9AmsIqyFPy-V148Ac7). Each damaged value was a verified prefix of the recovered source after the existing FR-MF to FR-AM identifier migration. Restored the omitted remainder using the original converter text normalization; no inferred completion. Existing later corrections retained. Restoration recovers historical wording and does not reaffirm it as the current assessment. Assessments, evidence instances, open questions, claim, status and rendering eligibility unchanged. Source hashes and field receipt: docs/reviews/render-pilot-content-restoration.json; current-assessment compatibility review: docs/reviews/RENDER-PILOT-001-CONTENT-RESTORATION.md."},
    // APPEND-ONLY. Newest first.
    { id: "M-012", date: "2026-07-09", field: "description_reordered", from: "—", to: "DESCRIPTION-REORDERED", note: "Editorial Correction (GP-001): IN-006 description reordered per EP-001 — existing closing synthesis sentence moved to opening, no wording added or removed." },
    { id: "M-011", date: "2026-07-08", field: "reference_corrected", from: "—", to: "REFERENCE-CORRECTED", note: "Editorial Correction (GP-001): the lineage entry and OQ-001, OQ-002, and OQ-003 referred to the stale identifiers FR-MF-0001, FR-MF-0003, and FR-MF-0004 (four occurrences total). Corrected to FR-AM-0001, FR-AM-0003, and FR-AM-0004 following the FR-MF-* → FR-AM-* programme identifier migration. No evidence, interpretation, pressureState, verificationStage, assessment, or open question substance changed." },
    { id: "M-010", date: "2026-06-29", field: "open_question_raised", from: "—", to: "OQ-RAISED", note: "OQ-004 added: whether logging non-threshold-crossing activity on a CLOSED record is a precedent or an over-logging risk." },
    { id: "M-009", date: "2026-06-29", field: "assessment_issued", from: "AS-001", to: "AS-002", note: "AS-002 issued following targeted reassessment of single-assessment records. Pressure state confirmed unchanged: COLLAPSED. Status confirmed unchanged: CLOSED. New evidence (IN-006) does not meet AT-001's reopening condition." },
    { id: "M-008", date: "2026-06-29", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "IN-006 added: nickelate ambient-pressure stabilisation (Feb 2025), 298K high-pressure claim (Nov 2025, unreplicated), PNAS field roadmap (Mar 2026)." },
    { id: "M-007", date: "2026-06-18", field: "record_id_migrated", from: "FR-MF-0005", to: "FR-AM-0005", note: "Programme identity changed. Record identifier migrated to preserve constitutional consistency. FR-MF-* → FR-AM-*. 2026-06-18." },
    { id: "M-006", date: "2024-01-15", field: "programme_panel_added", from: "—", to: "PROGRAMME-PANEL-ADDED", note: "" },
    { id: "M-005", date: "2024-01-15", field: "null_condition_failed", from: "—", to: "NULL-CONDITION-FAILED", note: "" },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" }
  ],

  status: "closed",
};
