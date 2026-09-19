/**
 * FR-AM-0004 — Commercial Fusion Power — Net Electricity at Grid Scale
 * Programme: PROG-AM
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_AM_0004 = {
  id: "FR-AM-0004",
  programme: "PROG-AM",
  lastProvenanceReview: "2026-09-19",
  provenanceReviewId: "LPR-001-D21",
  provenanceOutcome: "discrepancies_corrected",
  provenanceRepairStatus: "completed",

  claim: {
    statement: "A commercially viable fusion power plant can generate net electricity at grid scale.",
    shortLabel: "Commercial Fusion Power — Net Electricity at Grid Scale",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "JET and ITER-predecessor experiments — Q < 1, physics established",
      description: "The Joint European Torus (JET) reached a plasma energy gain of Q = 0.64 in 1997, producing 16 MW of fusion power from 25 MW of input heating. A later deuterium-tritium campaign produced 59 megajoules over five seconds in an experiment conducted in 2021 and announced in February 2022. These tokamak results establish that controlled deuterium-tritium fusion and sustained high-energy plasma operation are physically achievable, but neither experiment generated electricity and neither crossed plant-level energy breakeven. They are supportive pre-threshold physics evidence, not demonstrations of threshold 1.",
      vectors: ["neutral--pre-threshold-physics-established"],
      date: "1997–2022",
      sourceReference: "JET 1997 D-T campaign; EUROfusion, ‘European research reaches highest sustained energy from fusion’ (9 Feb 2022)",
      sources: [
        { citation: "EUROfusion, ‘JET’s 1997 deuterium-tritium campaign’ — 16 MW fusion power and Q = 0.64", locator: "1997 D-T performance result" },
        { citation: "EUROfusion, ‘European research reaches highest sustained energy from fusion’ (9 Feb 2022)", url: "https://euro-fusion.org/eurofusion-news/dte3record/", locator: "59 MJ over five seconds; experiment performed in 2021" },
      ],
    },
    {
      id: "IN-002",
      qualifiedEvent: "NIF ignition — first fusion Q > 1 (target gain)",
      description: "The National Ignition Facility (NIF) at Lawrence Livermore National Laboratory achieved ignition on 5 December 2022, producing 3.15 megajoules of fusion energy from 2.05 megajoules of laser energy delivered to the target — a target gain of about 1.54. This was the first laboratory experiment in which fusion output exceeded the laser energy incident on the target. It did not cross threshold 1: the comparison excludes the much larger electrical energy required to operate NIF, and the facility neither produced nor exported electricity. The result is nevertheless a genuine physics milestone that supports the ESCALATING assessment by demonstrating positive target-level fusion gain while leaving plant-level net electricity undemonstrated.",
      vectors: ["supportive--target-ignition-not-plant-level-net"],
      date: "Dec 2022",
      sourceReference: "Lawrence Livermore National Laboratory, 5 December 2022 ignition experiment",
      sources: [
        { citation: "Lawrence Livermore National Laboratory, ‘Lawrence Livermore National Laboratory achieves fusion ignition’ (13 Dec 2022)", url: "https://www.llnl.gov/article/49306/lawrence-livermore-national-laboratory-achieves-fusion-ignition", locator: "3.15 MJ fusion yield from 2.05 MJ laser energy delivered to the target" },
      ],
    },
    {
      id: "IN-003",
      qualifiedEvent: "Private fusion industry — Commonwealth Fusion, TAE, Helion, and others",
      description: "These are not experimental results demonstrating the claim's thresholds; they are technology-development milestones and commercial commitments. Commonwealth Fusion Systems and MIT demonstrated a 20-tesla high-temperature-superconducting magnet in 2021, an enabling result for the compact SPARC tokamak, while Helion announced a power-purchase agreement under which Microsoft is expected to buy electricity from a planned fusion plant targeted for 2028. Helion is backed personally by Sam Altman; this is not institutional backing by OpenAI. The published Helion description identifies an electricity-supply agreement and financial penalties for non-delivery, but does not establish a broad ‘revenue guarantee’. Along with alternative-confinement programmes such as TAE Technologies, these developments show serious engineering and commercial pursuit without demonstrating plant-level net electricity, grid-scale capacity or commercial viability.",
      vectors: ["partial--engineering-progress-no-threshold-met"],
      date: "2021–24",
      sourceReference: "MIT PSFC/CFS 20 T magnet demonstration (2021); Helion–Microsoft power-purchase agreement (2023)",
      sources: [
        { citation: "MIT Plasma Science and Fusion Center, ‘MIT-designed project achieves major advance toward fusion energy’ (8 Sep 2021)", url: "https://news.mit.edu/2021/MIT-CFS-major-advance-toward-fusion-energy-0908", locator: "20-tesla large-scale high-temperature-superconducting magnet demonstration" },
        { citation: "Helion Energy, ‘Helion announces world’s first fusion energy purchase agreement with Microsoft’ (10 May 2023)", url: "https://www.helionenergy.com/articles/helion-announces-worlds-first-fusion-ppa-with-microsoft/", locator: "Power-purchase agreement, 2028 target and non-delivery penalties" },
      ],
    },
    {
      id: "IN-004",
      qualifiedEvent: "ITER construction and DEMO roadmap — public programme trajectory",
      description: "ITER, the international tokamak under construction in France, is designed to produce 500 MW of thermal fusion power from 50 MW of external plasma heating, corresponding to plasma Q ≥ 10. This is not plant-level net energy or net electricity: Q compares fusion power with power coupled to the plasma, and ITER is not designed to generate electricity. Under ITER's approved revised baseline, operation at full magnetic energy is scheduled for 2036 and the start of deuterium-tritium operation for 2039. A later demonstration-power-plant programme such as European DEMO would have to address electricity production and the remaining fuel-cycle and materials requirements. The programme is therefore roadmap evidence of sustained engineering pursuit, not evidence that any of this record's three thresholds has been crossed or is near achievement.",
      vectors: ["neutral--roadmap-evidence"],
      date: "2024–39",
      sourceReference: "ITER objectives and approved revised project baseline",
      sources: [
        { citation: "ITER Organization, ‘What will ITER do?’", url: "https://www.iter.org/fusion-energy/what-will-iter-do", locator: "500 MW fusion power from 50 MW plasma heating; ITER will not generate electricity" },
        { citation: "ITER Organization, revised project baseline approved by the ITER Council (2024)", locator: "Full magnetic energy operation in 2036; start of deuterium-tritium operation in 2039" },
      ],
    },
    {
      id: "IN-005",
      qualifiedEvent: "Economic viability analyses — cost projections and comparison with alternatives",
      description: "Peer-reviewed economic studies model possible fusion-generation costs, but their results depend on assumed plant capital cost, availability, component lifetime, recirculating power, financing and the value assigned to firm low-carbon generation. Entler et al. and Roulstone et al. show that cost competitiveness is conditional on engineering and operational parameters that no commercial fusion plant has yet demonstrated; they do not establish a reliable market-wide $50–150/MWh range or a 2040s delivery date. This is prospective evidence relevant to threshold 3, not an observed cost result. Commercial viability therefore cannot yet be assessed from operating data and remains the most distant of the claim's three thresholds.",
      vectors: ["partial--threshold-3-projected-not-demonstrated"],
      date: "2023–24",
      sourceReference: "Entler et al., Energy 152 (2018), doi:10.1016/j.energy.2018.03.130; Roulstone et al., Fusion Engineering and Design 177 (2022), doi:10.1016/j.fusengdes.2022.113112",
      sources: [
        { citation: "Entler et al., ‘Approximation of the economy of fusion energy’, Energy 152 (2018) 489–497", doi: "10.1016/j.energy.2018.03.130", locator: "Modelled fusion-plant economic assumptions and sensitivity" },
        { citation: "Roulstone et al., ‘Can fusion energy be cost competitive and commercially viable? An analysis of magnetically confined reactors’, Fusion Engineering and Design 177 (2022) 113112", doi: "10.1016/j.fusengdes.2022.113112", locator: "Conditional cost-competitiveness analysis" },
      ],
    },
    {
      id: "IN-006",
      qualifiedEvent: "2025 construction and demonstration milestones — SPARC, General Fusion, DOE roadmap",
      description: "These developments form a concentrated burst of pre-threshold engineering activity, but none demonstrates the claim. Commonwealth Fusion Systems began assembly of its SPARC tokamak in March 2025, targeting a plasma net-energy result rather than grid electricity. General Fusion reported first plasma in its Lawson Machine 26 demonstration device in February 2025, using a magnetised-target-fusion approach distinct from a tokamak. The U.S. Department of Energy's finalized fusion science and technology roadmap reports input from 15 private-sector companies, more than 10 national laboratories and more than 72 universities; DOE separately describes the broader roadmap-development process as involving more than 800 researchers, engineers and industry stakeholders. No event produced plant-level net electricity, grid-scale output or demonstrated commercial viability.",
      vectors: ["partial--engineering-milestones-no-threshold-met"],
      date: "2025",
      sourceReference: "CFS SPARC assembly; General Fusion LM26 first plasma; U.S. DOE Fusion Science and Technology Roadmap",
      sources: [
        { citation: "Commonwealth Fusion Systems, SPARC tokamak assembly announcement (March 2025)", locator: "Start of SPARC assembly and plasma net-energy objective" },
        { citation: "General Fusion, Lawson Machine 26 first-plasma announcement (February 2025)", locator: "LM26 first plasma" },
        { citation: "U.S. Department of Energy, Fusion Science and Technology Roadmap (2025)", url: "https://www.energy.gov/science/fes/fusion-energy-strategy-2024", locator: "Roadmap participation and development process" },
      ],
    },
    {
      id: "IN-007",
      qualifiedEvent: "Helical Fusion / NIFS UROCOIC HTS coil — stellarator-specific high-current magnet engineering enters peer-reviewed literature",
      description: "A Helical Fusion / National Institute for Fusion Science collaboration reports peer-reviewed testing of a double-pancake coil wound with the UROCOIC high-temperature-superconducting conductor developed for helical-stellarator magnets. The coil operated stably at 40 kA without quench under a 7 T externally applied field, experienced local fields up to 8.9 T, withstood electromagnetic forces of 356 kN/m, and operated for approximately 280 seconds at 10–30 K. The underlying experiment was first announced in 2025; publication in the Journal of Physics: Conference Series in August 2026 is a verification event rather than a second technical milestone. The result is supportive pre-threshold engineering evidence because it extends manufactured, institutionally tested HTS magnet development beyond the tokamak/SPARC pathway into a distinct stellarator architecture. It does not demonstrate a reactor-scale magnet system, fusion gain, plant-level net electricity, grid-scale output, tritium self-sufficiency, neutron-environment durability, or commercial viability.",
      vectors: ["partial--peer-reviewed-stellarator-hts-magnet-engineering-no-threshold-met"],
      date: "2025; peer-reviewed 2026-08",
      sourceReference: "Y. Narushima et al., Journal of Physics: Conference Series 3278 (2026) 012031; Helical Fusion / NIFS UROCOIC double-pancake coil testing",
    }
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2024-01-15",
      pressureState: "escalating",
      verificationStage: "VS-02",
      summary: "The claim requires three thresholds to be met simultaneously: net electricity at plant level, grid-scale capacity, and commercial viability. None has been demonstrated. The furthest-reached threshold is threshold 1 (net electricity), which has been approached but not achieved at the plant level — NIF achieved Q > 1 at target level, not at facility level. Thresholds 2 and 3 are not yet addressable by current experimental evidence. The pressure state is ESCALATING. The NIF ignition result (INST-002) demonstrates that positive fusion energy gain is achievable in the laboratory, a necessary, though not sufficient, precondition for all three thresholds even though it satisfies none of them directly. Substantial private capital (INST-003) and a public ITER/DEMO roadmap (INST-004) indicate the engineering path is being actively pursued, but threshold 1 (plant-level net electricity) remains undemonstrated, and thresholds 2 and 3 cannot yet be meaningfully assessed given the sequential dependency between them (BN-001).",
      assessorNote: null,
    },
    {
      id: "AS-002",
      date: "2026-06-29",
      pressureState: "escalating",
      verificationStage: "VS-02",
      summary: "No threshold has been crossed since AS-001. Threshold 1 (plant-level net electricity) remains undemonstrated; SPARC's own net-energy target is dated for 2026 and is not yet realised as of this assessment. What has changed is the density of engineering-milestone activity: SPARC assembly beginning, General Fusion's first-plasma result, and a coordinated DOE commercialisation roadmap all occurred within roughly the same window (late 2025), constituting the most concentrated burst of public engineering progress since the 2022 NIF/JET results that originally moved this record into ESCALATING. None of IN-006's events individually changes the assessment — they are pre-threshold engineering progress, the same evidence category as IN-003 — but their concentration is itself worth noting against OQ-001's resolution-criteria question: if SPARC's stated 2026 net-energy target is met, the Observatory will need exactly the governed procedure OQ-001 asks for and does not yet have.",
      assessorNote: "Sourced from: Commonwealth Fusion Systems public statements on SPARC assembly timeline (Q1 2025); General Fusion press materials and Utility Dive coverage of LM26 first-plasma milestone (Feb 2025, reported Sept 2025); U.S. DOE fusion-commercialisation roadmap announcement (Oct 2025). Accessed via secondary reporting, not primary DOE/company technical filings — primary sourcing recommended before treating SPARC's 2026 target date as confirmed rather than stated.",
    },
    {
      id: "AS-003",
      date: "2026-09-19",
      pressureState: "escalating",
      verificationStage: "VS-02",
      summary: "LPR-001-D21 correction preserves the substantive ESCALATING / VS-02 assessment while tightening its evidentiary basis. JET established high-output deuterium-tritium tokamak operation but not energy breakeven or electricity generation; NIF achieved a target gain of about 1.54, not facility-level net energy. Private magnet, machine-construction and commercial-agreement milestones show sustained engineering pursuit, while ITER remains a non-electricity-producing experiment whose revised deuterium-tritium phase begins in 2039. No plant has produced net electricity, operated at grid scale or demonstrated commercial viability, so none of the claim's three thresholds has been crossed.",
      assessorNote: "Corrective assessment following LPR-001-D21 bounded provenance repair. AS-001 and AS-002 are preserved append-only; IN-001 through IN-006 were source-bounded and representation or attribution errors corrected. IN-007 passed review. The later JET 69.26 MJ result remains outside this correction for Normal Record Review.",
    }
  ],

  mechanisms: [
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Engineering energy-chain gap. NIF achieved target gain greater than one by producing 3.15 MJ from 2.05 MJ of laser energy delivered to the target, but the comparison excludes the hundreds of megajoules of electricity needed to operate the laser system and the experiment generated no electricity. Crossing from target or plasma gain to plant-level net electricity requires substantially higher fusion gain together with efficient drivers, heat capture, electricity conversion and low recirculating power. Magnetic-confinement programmes face a different engineering chain but the same claim-level boundary: no approach has yet exported net electricity. The resistance mechanism is not that fusion physics is invalid; it is the unresolved full-system conversion from a fusion experiment to a self-sustaining electricity-generating plant.",
    },
    {
      id: "RM-002",
      type: "RESISTANCE MECHANISM",
      description: "Materials and tritium breeding. A commercial fusion plant requires plasma-facing materials that survive neutron bombardment at intensities not yet tested at relevant fluence levels, and must breed its own tritium fuel from lithium blankets at breeding ratios sufficient to sustain operation. Neither materials performance at commercial fluence nor tritium breeding at the required ratio has been demonstrated in a fusion environment. These are threshold 2 problems — they must be solved before grid-scale operation is achievable. They are not currently active research frontiers in the same sense as plasma physics; they are known engineering gaps that will become critical as the field advances toward threshold 2.",
    },
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "Three-threshold sequential dependency. The claim's three thresholds are ordered and each is necessary for the next. Demonstrating threshold 1 does not demonstrate the claim; it removes one obstacle to demonstrating threshold 2, which in turn removes one obstacle to demonstrating threshold 3. This creates a sequential dependency bottleneck: evidence on threshold 2 cannot be gathered until threshold 1 is achieved; evidence on threshold 3 cannot be gathered until threshold 2 is achieved. The record will therefore remain in ESCALATING for threshold-1 evidence for an extended period before threshold-2 evidence begins to accumulate. The bottleneck is structural — it is a property of the claim's architecture, not of any specific technical difficulty.",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "First plant-level net electricity demonstration. The specific event that would transition this record from ESCALATING toward RESOLVING is a demonstration of net electricity at the plant level — Q > 1 relative to all energy inputs, with the excess delivered to the grid. This is expected to occur, if at all, in a private or public demonstration plant in the 2030s. It would satisfy threshold 1 and open the evidential path to thresholds 2 and 3. The attractor is clearly defined, practically anticipated, and the primary evidence target for this record's near-term development.",
    }
  ],

  lineage: {
    items: [
    { year: "1950s–80s", text: "Fusion as perpetual near-future technology. The observation that \"fusion is always 30 years away\" enters the scientific culture. The claim exists but its timeline is consistently underestimated. The engineering gap between laboratory physics and commercial power is not yet quantified." },
    { year: "1997", text: "JET achieves the highest tokamak plasma gain to date, reaching Q = 0.64 with 16 MW of fusion power from 25 MW of input heating. The gap to plasma breakeven is quantified, while plant-level net electricity remains a substantially stronger boundary. International consensus forms around ITER as the pathway to plasma Q ≥ 10." },
    { year: "2010s", text: "Private fusion industry emerges. Venture capital begins funding alternative confinement approaches. The timeline compresses in private-sector projections. Commercial viability enters the claim as an explicit criterion rather than an assumed consequence." },
    { year: "2022", text: "JET's 59 MJ result from its 2021 campaign is announced, and NIF produces 3.15 MJ from 2.05 MJ delivered to the target. NIF demonstrates positive target-level fusion gain, while neither facility produces net electricity. The claim transitions from EMERGING to ESCALATING; the full-system engineering gap becomes the principal boundary." },
    { year: "2023–24", text: "Private capital commitments and the Helion–Microsoft power-purchase agreement place electricity delivery on a contractual 2028 target. The agreement is prospective commercial commitment, not evidence of revenue, electricity production or viability, and it does not change any threshold." }
    ],
    relatedRecords: [],
  },

  openQuestions: [
    {
      id: "OQ-001",
      question: "When threshold 1 (net electricity) is demonstrated, what pressure state should the claim enter? RESOLVING requires the claim to be on a clear trajectory toward full confirmation. But two further thresholds remain, each requiring decades of additional engineering. The Observatory has no governed procedure for a claim where a major threshold is met but the claim is far from full confirmation. This is the resolution-criteria question for this record.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-002",
      question: "Should the three-threshold structure generate three separate records, or does the sequential dependency justify tracking all three within a single record? The corpus lesson from FR-QE-0002 applies: claims that bundle sub-components resolving on different timescales generate bottlenecks belonging to the claim rather than the frontier. The Scope Note acknowledges this tension without resolving it.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-003",
      question: "Does the private fusion industry's commercial commitment — particularly the Helion/Microsoft agreement — constitute evidence for the claim, or is it prospective interest rather than demonstrated capability? The corpus has no precedent for a commercial contract as an evidence object.",
      raisedDate: "2024-01-15",
    },
    {
      id: "OQ-004",
      question: "SPARC's stated target is plasma net energy (Q > 1), not plant-level net electricity. If achieved, it would be a major magnetic-confinement milestone but would not satisfy threshold 1 because SPARC is not designed to export electricity and plasma Q excludes the plant's full energy chain. What additional evidence boundary — including all-system energy accounting and electricity delivered beyond internal plant demand — must be met before OQ-001's pressure-state question is activated?",
      raisedDate: "2026-06-29",
    }
  ],

  realizationNotes: [
    {
      id: "REN-001",
      note: "Realization currently depends on plant-scale magnet/confinement engineering, tritium-breeding infrastructure, and licensing pathways for grid-connected fusion electricity. These lie outside the evidence required to establish positive fusion gain.",
      conflation: null,
      raisedDate: "2026-07-08",
      status: "open",
      closedDate: null,
      closedNote: null,
    }
  ],

  mutationLog: [
    { id: "M-015", date: "2026-09-19", field: "provenance_repair", from: "LPR-001-D21 discrepancies_found / pending", to: "LPR-001-D21 discrepancies_corrected / completed", note: "Bounded correction executed for IN-001 through IN-006. Corrected JET Q and event chronology; corrected NIF yield and target-gain arithmetic; removed the false OpenAI-backing attribution and unsupported revenue-guarantee characterization; separated ITER plasma Q from plant-level net electricity and updated the revised baseline; reconstructed the economic instance around traceable conditional studies; and corrected DOE roadmap participation figures. Structured sources[] added to all repaired instances. IN-007 passed unchanged. AS-001 and AS-002 preserved append-only; corrective AS-003 appended, with RM-001, the directly dependent 1997 and reviewed 2022 and 2023–24 lineage entries, and OQ-004 brought into consistency. Pressure State ESCALATING and Verification Stage VS-02 retained. JET's later 69.26 MJ result remains outside this correction for Normal Record Review." },
    {"id":"M-014","date":"2026-09-06","field":"description_restored","from":"Legacy ingestion cutoffs: mechanisms:RM-001, mechanisms:RM-002, mechanisms:BN-001, mechanisms:AT-001, lineage:2023–24","to":"Source-restored complete descriptions","note":"Editorial Correction (GP-001), RENDER-PILOT-001 content restoration: restored RM-001, RM-002, BN-001, AT-001; lineage 2023–24 from FR_MF_0004_commercial_fusion_power.html (Drive file 1agttcKhzYzuekNWnZmYnUnwQ1XzmPp8-). Each damaged value was a verified prefix of the recovered source after the existing FR-MF to FR-AM identifier migration. Restored the omitted remainder using the original converter text normalization; no inferred completion. Existing later corrections retained. Restoration recovers historical wording and does not reaffirm it as the current assessment. Assessments, evidence instances, open questions, claim, status and rendering eligibility unchanged. Source hashes and field receipt: docs/reviews/render-pilot-content-restoration.json; current-assessment compatibility review: docs/reviews/RENDER-PILOT-001-CONTENT-RESTORATION.md."},
    // APPEND-ONLY. Newest first.
    { id: "M-013", date: "2026-08-27", field: "instance_logged", from: "—", to: "IN-007", note: "IN-007 added following bounded FCIF audit: Helical Fusion / NIFS UROCOIC double-pancake HTS coil result, first announced in 2025 and peer-reviewed in August 2026. Classified as supportive pre-threshold engineering evidence; no pressure-state or verification-stage change." },
    { id: "M-012", date: "2026-07-09", field: "description_reordered", from: "—", to: "DESCRIPTION-REORDERED", note: "Editorial Correction (GP-001): IN-003, IN-006 descriptions reordered per EP-001 — existing closing synthesis sentence moved to opening, no wording added or removed." },
    { id: "M-011", date: "2026-07-08", field: "realization_note_added", from: "—", to: "REN-001", note: "realizationNotes field added to schema. REN-001: plant-scale engineering, tritium-breeding infrastructure, and licensing dependencies distinguished from fusion-gain evidence. Corpus Review — Realization Note Candidates (v2)." },
    { id: "M-010", date: "2026-06-29", field: "open_question_raised", from: "—", to: "OQ-RAISED", note: "OQ-004 added: SPARC's 2026 net-energy target makes OQ-001's resolution-criteria question time-sensitive rather than hypothetical." },
    { id: "M-009", date: "2026-06-29", field: "assessment_issued", from: "AS-001", to: "AS-002", note: "AS-002 issued following targeted reassessment of single-assessment records. Pressure state unchanged: ESCALATING. New evidence (IN-006) is pre-threshold engineering progress; no threshold crossed." },
    { id: "M-008", date: "2026-06-29", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "IN-006 added: SPARC assembly, General Fusion first-plasma, DOE commercialisation roadmap (all 2025)." },
    { id: "M-007", date: "2026-06-18", field: "record_id_migrated", from: "FR-MF-0004", to: "FR-AM-0004", note: "Programme identity changed. Record identifier migrated to preserve constitutional consistency. FR-MF-* → FR-AM-*. 2026-06-18." },
    { id: "M-006", date: "2024-01-15", field: "programme_panel_added", from: "—", to: "PROGRAMME-PANEL-ADDED", note: "" },
    { id: "M-005", date: "2024-01-15", field: "null_condition_failed", from: "—", to: "NULL-CONDITION-FAILED", note: "" },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" }
  ],

  status: "open",
};
