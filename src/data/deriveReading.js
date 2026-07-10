/**
 * deriveReading.js — Reading State for Evidence Trajectories, Prototype 003.
 *
 * A Lens is a predicate over the rendered trajectory set. A Reading is a
 * durable composition of Lenses: every active lens category must match
 * (AND across categories — e.g. programme AND current assessment), and
 * within a category any selected value may match (OR within a category —
 * this is what makes programme comparison "ordinary Lens composition"
 * rather than a separate mode: selecting a second programme just adds a
 * second value to the same category).
 *
 * A trajectory is never removed by a Reading — only classified as
 * Focused or Context. When no lens is active the Reading itself is
 * inactive (null), not "everyone Focused"; callers use that to tell the
 * quiet default apart from a Reading that happens to match everyone.
 *
 * Pure: takes the already-derived trajectory list and lens selections in,
 * returns option lists / a Set out. No corpus imports, no side effects.
 */

export function getProgrammeLensOptions(trajectories, programmes) {
  const present = new Set(trajectories.map((t) => t.programme));
  return programmes.filter((p) => present.has(p.id));
}

export function getStateLensOptions(trajectories) {
  const seen = new Map();
  for (const t of trajectories) {
    const { pressureState, pressureLabel, stateBadgeClass } = t.currentNode;
    if (!seen.has(pressureState)) {
      seen.set(pressureState, { value: pressureState, label: pressureLabel, badgeClass: stateBadgeClass });
    }
  }
  return [...seen.values()];
}

/**
 * lensCategories: [{ key, values, matches(trajectory, value) }]
 * Returns a Set of Focused recordIds, or null if no lens is active.
 */
export function computeReading(trajectories, lensCategories) {
  const active = lensCategories.filter((category) => category.values.length > 0);
  if (active.length === 0) return null;

  const focused = new Set();
  for (const trajectory of trajectories) {
    const matchesReading = active.every((category) =>
      category.values.some((value) => category.matches(trajectory, value))
    );
    if (matchesReading) focused.add(trajectory.recordId);
  }
  return focused;
}
