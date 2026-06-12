/**
 * EN-001 — Evidence Register v1
 * Type: Evidence Note
 *
 * Records the Observatory's current framework for classifying evidence weight
 * across Frontier Records. Published to make the evidentiary standard transparent.
 */

export const EN_001 = {
  id: "EN-001",
  type: "evidence-note",
  status: "published",
  date: "2026-06-10",
  title: "Evidence Register v1",
  relation: "Meta-observation / evidentiary standards",
  summary:
    "A record of the Observatory's evidence classification framework as applied across " +
    "The Frontier Record corpus. Documents the four evidence weight categories — Primary, " +
    "Secondary, Contested, and Counter — their definitions, and the governance rules that " +
    "govern their assignment. Published as institutional record so that the evidentiary " +
    "standard is transparent and externally verifiable.",

  body: [
    {
      id: "B-001",
      heading: "Purpose",
      text:
        "The Observatory assigns an evidence weight to every source appended to a Frontier " +
        "Record. This register records what those weights mean, how they are assigned, and " +
        "what governance rules apply. It exists because an evidentiary standard that is not " +
        "published is not a standard — it is an assumption.",
    },
    {
      id: "B-002",
      heading: "Evidence Weight Categories",
      text:
        "Four categories are in current use. The vocabulary is controlled: no weight outside " +
        "this register may be assigned to an evidence source without a formal amendment.",
    },
    {
      id: "B-003",
      heading: "Primary",
      text:
        "Evidence directly bearing on the claim under observation. Typically the originating " +
        "publication, a direct replication attempt, or an operational result under the stated " +
        "conditions. Primary evidence is the primary basis for assessment transitions. " +
        "Multiple primary sources in tension are the normal condition of an Audit-state record.",
    },
    {
      id: "B-004",
      heading: "Secondary",
      text:
        "Evidence bearing on the claim indirectly — methodological reviews, adjacent findings, " +
        "contextual data that informs but does not directly test the claim. Secondary evidence " +
        "may support or qualify an assessment but does not independently warrant a state " +
        "transition.",
    },
    {
      id: "B-005",
      heading: "Contested",
      text:
        "Evidence whose evidentiary status is itself in dispute. Applied when the source has " +
        "been challenged on methodological, interpretive, or factual grounds and the challenge " +
        "has not been resolved. A contested source remains on the record; its weight reflects " +
        "its current standing, not its original claim.",
    },
    {
      id: "B-006",
      heading: "Counter",
      text:
        "Evidence that directly challenges the claim under observation, typically by contesting " +
        "a founding assumption, replicating the experiment under different conditions, or " +
        "demonstrating an alternative explanation for the primary result. Counter evidence is " +
        "the primary driver of Audit-state persistence.",
    },
    {
      id: "B-007",
      heading: "Assignment Rules",
      text:
        "Evidence weight is assigned at the time of appending and recorded in the mutation log. " +
        "Weight may be revised if the evidentiary status of a source changes — for example, if " +
        "a Primary source is subsequently challenged and becomes Contested. Any revision is a " +
        "mutation and must be logged. Weight is never silently changed.",
    },
    {
      id: "B-008",
      heading: "Governance",
      text:
        "This register is version-controlled. Additions or amendments to the evidence weight " +
        "vocabulary require a new version of this note (EN-002 or later). The current version " +
        "governs all records in the corpus from the date of publication. Prior records are not " +
        "retroactively reclassified; their evidence weights are interpreted under the register " +
        "version current at the time of assignment.",
    },
    {
      id: "B-009",
      heading: "Current Corpus Coverage",
      text:
        "As of EN-001 (2026-06-10), the evidence weight framework has been applied to all " +
        "evidence sources in FR-QE-0001. Extension across the full corpus is in progress. " +
        "Records without fully classified evidence sources are noted in the mutation log.",
    },
  ],
};
