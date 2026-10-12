export const CHANGELOG_TAG_KEY = [
  { tag: "A", description: "Substantive development shown in Latest Developments.", qualifies: true },
  { tag: "C", description: "Institutional or governance change, retained in the changelog.", qualifies: false },
  { tag: "D", description: "Editorial, provenance, or operational update, retained in the changelog.", qualifies: false },
  { tag: "A (subsumed)", description: "Part of the original record admission, represented by its admission entry in Latest Developments rather than as a separate development.", qualifies: false },
  { tag: "UNKNOWN", description: "Unclassified mutation; excluded from Latest Developments and flagged for review.", qualifies: false },
];

export function getChangelogTagKey(taxonomyClass) {
  const tag = taxonomyClass === "A (subsumed)" ? taxonomyClass : taxonomyClass?.[0] === "D" ? "D" : taxonomyClass;
  return CHANGELOG_TAG_KEY.find((item) => item.tag === tag);
}

export function getChangelogTagDescription(taxonomyClass, qualifies) {
  return getChangelogTagKey(taxonomyClass)?.description ?? (qualifies ? "Appears in Latest Developments." : "Changelog only.");
}
