/**
 * FR-MF-0004 — Commercial Fusion Power — Net Electricity at Grid Scale
 * Programme: PROG-MF
 * Converted from HTML record by convert-records.js
 *
 * Constitutional rules:
 * - assessments[] is append-only; currentAssessment is DERIVED, never stored here
 * - mutationLog[] is append-only, newest first
 * - Transition Feed is DERIVED from assessments where pressureState changed
 */

export const FR_MF_0004 = {
  id: "FR-MF-0004",
  programme: "PROG-MF",

  claim: {
    statement: "A commercially viable fusion power plant can generate net electricity at grid scale.",
    shortLabel: "Commercial Fusion Power — Net Electricity at Grid Scale",
    openedDate: "2024-01-15",
  },

  instances: [
    {
      id: "IN-001",
      qualifiedEvent: "JET and ITER-predecessor experiments — Q < 1, physics established",
      description: "The Joint European Torus (JET) achieves Q ≈ 0.67 in 1997 (16MW fusion output from 24MW input) and sets a record of 59 megajoules in 2022, confirming sustained fusion at meaningful scale. The ITER predecessor experiments collectively establish that deuterium-tritium fusion is physically achievable in a tokamak at energies and plasma conditions consistent with a power plant. The physics of plasma confinement, heating, and sustained fusion reactions are validated. Net electricity (threshold 1) has not been achieved: Q < 1 means the reactor consumes more energy than fusion produces. The experiments are not contesting evidence for the claim — they are pre-threshold evidence that the physics underlying the claim is sound.",
      vectors: ["neutral--pre-threshold-physics-established"],
      date: "1997–2022",
    },
    {
      id: "IN-002",
      qualifiedEvent: "NIF ignition — first fusion Q > 1 (target gain)",
      description: "The National Ignition Facility (NIF) at Lawrence Livermore National Laboratory achieves ignition on 5 December 2022: 2.05 megajoules of fusion energy output from 2.05 megajoules of laser energy delivered to the target — Q = 1.0 at the target level. This is the first laboratory demonstration of fusion energy output exceeding the energy delivered to the fuel. The result crosses threshold 1 in a restricted sense: it achieves Q > 1 relative to laser-on-target energy, not relative to total laser drive energy (Q ≈ 0.004 relative to total electrical input to the facility). The claim specifies net electricity, which requires Q > 1 relative to all plant energy inputs. NIF does not achieve this. The result nonetheless constitutes a genuine physics milestone and transitions the claim from EMERGING to ESCALATING: the principle of positive fusion gain is demonstrated, narrowing the gap between current capability and the claim's first threshold.",
      vectors: ["supportive--target-ignition-not-plant-level-net"],
      date: "Dec 2022",
    },
    {
      id: "IN-003",
      qualifiedEvent: "Private fusion industry — Commonwealth Fusion, TAE, Helion, and others",
      description: "A wave of well-capitalised private fusion companies publishes roadmaps and technical results. Commonwealth Fusion Systems demonstrates 20-tesla high-temperature superconducting magnets (2021), a key enabling technology for compact tokamak designs, and targets a demonstration plant (SPARC) in the late 2020s. Helion Energy, backed by OpenAI, targets commercial operation by 2028 with a revenue guarantee from Microsoft contingent on net electricity generation. TAE Technologies and others pursue alternative confinement approaches. These are not experimental results demonstrating the claim's thresholds; they are technology development milestones and commercial commitments. They constitute evidence that the engineering path to the claim is being actively pursued with serious capital, which supports the ESCALATING assessment without demonstrating any threshold.",
      vectors: ["partial--engineering-progress-no-threshold-met"],
      date: "2021–24",
    },
    {
      id: "IN-004",
      qualifiedEvent: "ITER construction and DEMO roadmap — public programme trajectory",
      description: "ITER, the international tokamak under construction in France, is designed to achieve Q = 10 (500MW fusion output from 50MW input) — plant-level net fusion energy but not net electricity (electrical conversion losses mean net electricity requires Q substantially above 1). ITER is not designed to generate electricity; it is a physics experiment. The European DEMO programme, targeting a demonstration power plant in the 2050s, is the public-sector pathway to the claim's full three-threshold requirement. The ITER/DEMO timeline represents a decades-long engineering roadmap. It is evidence that the claim is considered achievable by the international scientific community, not evidence that it has been achieved or is near achievement. The timeline itself contributes to the record's ESCALATING rather than RESOLVING state.",
      vectors: ["neutral--roadmap-evidence"],
      date: "2025–35",
    },
    {
      id: "IN-005",
      qualifiedEvent: "Economic viability analyses — cost projections and comparison with alternatives",
      description: "Independent economic analyses of fusion power costs begin appearing as private fusion companies publish revenue models. Lazard, Wood Mackenzie, and academic groups estimate levelised cost of electricity for fusion under optimistic assumptions at $50–150/MWh by 2040s, compared with solar at $24–96/MWh and wind at $26–50/MWh in 2023. Fusion advocates argue that baseload dispatchability creates a value premium not captured by levelised cost comparisons. Critics note that fusion's capital intensity and fuel cycle costs make cost competitiveness uncertain even under optimistic engineering assumptions. This is the first evidence bearing on threshold 3 (commercial viability) in the record. The evidence is prospective — based on projections, not demonstrated costs — and is contested. Threshold 3 cannot be assessed from current evidence; it remains the most distant of the three thresholds.",
      vectors: ["partial--threshold-3-projected-not-demonstrated"],
      date: "2023–24",
    }
  ],

  assessments: [
    // APPEND-ONLY. Do not modify existing entries.
    {
      id: "AS-001",
      date: "2024-01-15",
      pressureState: "escalating",
      verificationStage: "VS-02",
      summary: "The claim requires three thresholds to be met simultaneously: net electricity at plant level, grid-scale capacity, and commercial viability. None has been demonstrated. The furthest-reached threshold is threshold 1 (net electricity), which has been approached but not achieved at the plant level — NIF achieved Q > 1 at target level, not at facility level. Thresholds 2 and 3 are not yet addressable by current experimental evidence. The pressure state is ESCALATING. The NIF ignition result (INST-00",
      assessorNote: null,
    }
  ],

  mechanisms: [
    {
      id: "RM-001",
      type: "RESISTANCE MECHANISM",
      description: "Engineering Q gap. The NIF result achieves Q > 1 relative to laser-on-target energy but Q ≈ 0.004 relative to total electrical input. Crossing the engineering Q gap — achieving plant-level net electricity — requires improvements in driver efficiency and fusion gain by orders of magnitude beyond current demonstration. For inertial confinement (NIF's approach), this gap may be insurmountable at comm",
    },
    {
      id: "RM-002",
      type: "RESISTANCE MECHANISM",
      description: "Materials and tritium breeding. A commercial fusion plant requires plasma-facing materials that survive neutron bombardment at intensities not yet tested at relevant fluence levels, and must breed its own tritium fuel from lithium blankets at breeding ratios sufficient to sustain operation. Neither materials performance at commercial fluence nor tritium breeding at the required ratio has been demo",
    },
    {
      id: "BN-001",
      type: "BOTTLENECK",
      description: "Three-threshold sequential dependency. The claim's three thresholds are ordered and each is necessary for the next. Demonstrating threshold 1 does not demonstrate the claim; it removes one obstacle to demonstrating threshold 2, which in turn removes one obstacle to demonstrating threshold 3. This creates a sequential dependency bottleneck: evidence on threshold 2 cannot be gathered until threshold",
    },
    {
      id: "AT-001",
      type: "ATTRACTOR",
      description: "First plant-level net electricity demonstration. The specific event that would transition this record from ESCALATING toward RESOLVING is a demonstration of net electricity at the plant level — Q > 1 relative to all energy inputs, with the excess delivered to the grid. This is expected to occur, if at all, in a private or public demonstration plant in the 2030s. It would satisfy threshold 1 and op",
    }
  ],

  lineage: {
    items: [
    { year: "1950s–80s", text: "Fusion as perpetual near-future technology. The observation that \"fusion is always 30 years away\" enters the scientific culture. The claim exists but its timeline is consistently underestimated. The engineering gap between laboratory physics and commercial power is not yet quantified." },
    { year: "1997", text: "JET achieves highest Q to date in tokamak. Q ≈ 0.67. The engineering gap to Q = 1 is quantified. International consensus forms around ITER as the pathway to Q = 10." },
    { year: "2010s", text: "Private fusion industry emerges. Venture capital begins funding alternative confinement approaches. The timeline compresses in private-sector projections. Commercial viability enters the claim as an explicit criterion rather than an assumed consequence." },
    { year: "2022", text: "NIF ignition and JET energy record. The physics of positive fusion gain is demonstrated in the laboratory. The claim transitions from EMERGING to ESCALATING. The engineering gap to plant-level net electricity is now the primary obstacle rather than the physics." },
    { year: "2023–24", text: "Private capital commitments and Microsoft agreement. Commercial fusion becomes a target of major investment. Helion's revenue-guarantee agreement with Microsoft places commercial viability on a defined timeline for the first time. The claim is treated as a near-term engineering problem rather than a" }
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
    }
  ],

  mutationLog: [
    // APPEND-ONLY. Newest first.
    { id: "M-006", date: "2024-01-15", field: "programme_panel_added", from: "—", to: "PROGRAMME-PANEL-ADDED", note: "" },
    { id: "M-005", date: "2024-01-15", field: "null_condition_failed", from: "—", to: "NULL-CONDITION-FAILED", note: "" },
    { id: "M-004", date: "2024-01-15", field: "mechanisms_recorded", from: "—", to: "MECHANISMS-RECORDED", note: "" },
    { id: "M-003", date: "2024-01-15", field: "assessment_issued", from: "—", to: "ASSESSMENT-ISSUED", note: "" },
    { id: "M-002", date: "2024-01-15", field: "instances_logged", from: "—", to: "INSTANCES-LOGGED", note: "" },
    { id: "M-001", date: "2024-01-15", field: "record_created", from: "—", to: "RECORD-CREATED", note: "" }
  ],

  status: "open",
};
