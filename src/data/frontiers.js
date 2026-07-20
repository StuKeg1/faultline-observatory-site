/**
 * Frontier is a curated, overlapping topic dimension over the record corpus.
 * It is deliberately separate from Programme: records may appear in more than
 * one frontier, and a frontier never receives its own canonical route.
 */
export const FRONTIERS = [
  {
    slug: "quantum-computing",
    label: "Quantum computing",
    recordIds: [
      "FR-QE-0001", "FR-QE-0002", "FR-QE-0003", "FR-QE-0004",
      "FR-QE-0005", "FR-QE-0006", "FR-QE-0007", "FR-QE-0008",
    ],
  },
  {
    slug: "artificial-intelligence",
    label: "Artificial intelligence",
    recordIds: [
      "FR-AI-0001", "FR-AI-0002", "FR-AI-0003", "FR-AI-0004",
      "FR-AI-0005", "FR-AI-0006", "FR-AI-0007", "FR-AI-0008",
    ],
  },
  {
    slug: "materials-and-physics",
    label: "Materials and physics",
    recordIds: [
      "FR-AM-0001", "FR-AM-0002", "FR-AM-0003", "FR-AM-0004",
      "FR-AM-0005", "FR-AM-0006",
    ],
  },
  {
    slug: "energy-systems",
    label: "Energy systems",
    recordIds: ["FR-AM-0001", "FR-AM-0002", "FR-AM-0004", "FR-AM-0006"],
  },
  {
    slug: "biotechnology-and-health",
    label: "Biotechnology and health",
    recordIds: [
      "FR-AI-0008", "FR-BT-0001", "FR-BT-0002", "FR-BT-0003", "FR-BT-0004",
    ],
  },
];

const FRONTIER_BY_SLUG = new Map(FRONTIERS.map((frontier) => [frontier.slug, frontier]));

export function getFrontier(slug) {
  return FRONTIER_BY_SLUG.get(slug) ?? null;
}

export function recordMatchesFrontier(record, slug) {
  const frontier = getFrontier(slug);
  return frontier ? frontier.recordIds.includes(record.id) : false;
}

export function assertValidFrontiers(records) {
  const corpusIds = new Set(records.map(({ id }) => id));
  const unknownIds = FRONTIERS.flatMap(({ slug, recordIds }) =>
    recordIds.filter((id) => !corpusIds.has(id)).map((id) => `${slug}: ${id}`)
  );
  const unassigned = records
    .filter((record) => !FRONTIERS.some(({ recordIds }) => recordIds.includes(record.id)))
    .map(({ id }) => id);

  if (unknownIds.length > 0 || unassigned.length > 0) {
    throw new Error(
      `Invalid frontier taxonomy. Unknown: ${unknownIds.join(", ") || "none"}. ` +
      `Unassigned: ${unassigned.join(", ") || "none"}.`
    );
  }
}
