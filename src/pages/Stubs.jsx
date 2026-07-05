import { Link } from "react-router-dom";
import { useMemo } from "react";
import SiteFooter from "../components/SiteFooter.jsx";
import PageMeta from "../components/PageMeta.jsx";
import { PROGRAMMES, ALL_RECORDS } from "../data/corpus.js";
import { getProgrammeStats } from "../data/derive.js";
import "./Institutional.css";

// ─── SHARED TEMPLATE ─────────────────────────────────────────
function InstitutionalPage({ eyebrow, title, children }) {
  return (
    <>
      <div className="inst-page">
        <header className="inst-header">
          <div className="inst-header-inner">
            {eyebrow && <div className="inst-eyebrow">{eyebrow}</div>}
            <h1 className="inst-title">{title}</h1>
          </div>
        </header>
        <main className="inst-body">
          <div className="inst-body-inner">
            {children}
          </div>
        </main>
      </div>
      <SiteFooter />
    </>
  );
}

// ─── PROGRAMMES INDEX ─────────────────────────────────────────
export function Programmes() {
  const progStats = useMemo(
    () => Object.fromEntries(PROGRAMMES.map((p) => [p.id, getProgrammeStats(ALL_RECORDS, p.id)])),
    []
  );
  return (
    <InstitutionalPage eyebrow="Faultline Observatory" title="Programmes">
      <PageMeta
        title="Programmes"
        description="Four observation programmes tracking frontier claims in Quantum Engineering, Artificial Intelligence, Materials and Physical Frontiers, and Biotechnology and Life Sciences."
        path="/programmes/"
      />
      <p className="inst-intro">
        The Observatory organises its records by programme — domain containers that become
        visible as structured objects once sufficient records accumulate. All programmes are
        listed regardless of record count.
      </p>
      <div className="inst-prog-list">
        {PROGRAMMES.map((prog) => {
          const stats = progStats[prog.id];
          const isEmpty = stats.total === 0;
          return (
            <Link
              key={prog.id}
              to={`/programmes/${prog.id.toLowerCase()}`}
              className={`inst-prog-row ${isEmpty ? "inst-prog-row--empty" : "inst-prog-row--filled"}`}
            >
              <div className="inst-prog-row__id">{prog.id}</div>
              <div className="inst-prog-row__name">{prog.name}</div>
              <div className="inst-prog-row__desc">{prog.shortDescription}</div>
              <div className="inst-prog-row__count">
                {isEmpty ? "No published records" : `${stats.total} record${stats.total !== 1 ? "s" : ""}`}
              </div>
            </Link>
          );
        })}
      </div>
    </InstitutionalPage>
  );
}

// ─── METHODOLOGY ──────────────────────────────────────────────
// Pressure State is rendered as its own dedicated section (PRESSURE_STATES,
// below) rather than as a row in METHOD_BLOCKS_PRE/POST — the six-state
// vocabulary needs a scannable list, not a single term/def row. Split into
// PRE and POST arrays so Pressure State keeps its original position on the
// page (third, after Observation Before Interpretation) without needing an
// index-based insertion into a single flat array.
const METHOD_BLOCKS_PRE = [
  { term: "FCIF",                          def: "The Frontier Claim Intelligence Framework. The Observatory's observation methodology — governing how scientific and technology claims are identified, assessed, and tracked through time as evidence accumulates." },
  { term: "Observation Before Interpretation", def: "The founding epistemic principle. The Observatory records what is observable before forming interpretive positions. Assessments are derived from evidence, not from prior conclusions." },
];

const METHOD_BLOCKS_POST = [
  { term: "Verification Stage",           def: "A discrete stage in the formal verification sequence (VS-01 through VS-05). The current stage is derived from assessments; it is never stored as a verdict. Mirrors the progression from initial scientific claim to independently replicated and operationally validated result." },
  { term: "Frontier Record",              def: "The atomic unit of institutional memory. Each record preserves a claim under observation, its instances, its full assessment history, its evidence trail, and its mutation log. Records are permanent, citable, and append-only." },
  { term: "Assessment",                   def: "A dated, append-only entry recording the Observatory's position on a record at a point in time. The current assessment is always the last entry — never stored separately." },
  { term: "Mutation Log",                 def: "An append-only log of every structural change to a record. Nothing is deleted; changes are recorded and the prior state is preserved." },
  { term: "Transition Feed",              def: "A derived sequence of state changes — computed from consecutive assessments where the pressure state changed. Not stored; always derived from the record's assessment history." },
];

// Pressure State — corrected 2026-07-05 to the CP-001-governed six-state
// vocabulary (Emerging / Escalating / Stabilising / Fragmenting / Resolving /
// Collapsed), replacing the superseded Assertion/Published/Audit/Replication/
// Operation/Validated/Contested vocabulary. Full copy supplied by Stuart.
const PRESSURE_STATE_INTRO = [
  "A Pressure State records the Observatory's current assessment of a claim's evidentiary trajectory.",
  "It is not a verdict, and it is not generated automatically.",
  "Each Assessment reviews the accumulated evidence and determines which Pressure State best describes the claim at that point in time. The reasoning for that judgment is recorded in the Assessment itself.",
  "As new evidence accumulates, later Assessments may retain or change the Pressure State while preserving the complete history of earlier judgments.",
];

const PRESSURE_STATES = [
  { name: "Emerging", body: "The claim has entered the Observatory with credible evidence or a well-defined scientific question, but the evidence remains early, limited, or largely untested. The central uncertainty is still taking shape." },
  { name: "Escalating", body: "Evidence is accumulating in a consistent direction and materially increasing confidence—or materially increasing pressure on the claim. Important developments are occurring, but significant uncertainties remain and the claim is still actively contested." },
  { name: "Stabilising", body: "The evidentiary picture has become relatively stable. New evidence continues to appear, but it largely reinforces the existing assessment rather than substantially changing it. The claim remains under active observation." },
  { name: "Fragmenting", body: "The evidence no longer points in a single direction. Different aspects of the claim begin to diverge, competing explanations emerge, or apparent progress in one area is offset by uncertainty in another. The claim requires deeper interpretation rather than a simple increase or decrease in confidence." },
  { name: "Resolving", body: "The central uncertainty is approaching resolution. The remaining questions are narrower than those that originally defined the claim, and the evidence is converging toward a clear outcome. The claim has not yet been confirmed or closed." },
  { name: "Collapsed", body: "The claim is no longer supported under current evidence. Critical evidence has failed, key assumptions have been overturned, or repeated investigation has left the central claim unsupported. The record remains part of the Observatory as a permanent account of how the evidence evolved." },
];

const PRESSURE_STATE_NOTE = "Pressure States are descriptive, not procedural. They do not represent a mandatory sequence of stages. A record may remain in one state for many years, return to an earlier state if the evidentiary picture changes, or move directly between states when the evidence warrants it. Every change in Pressure State is justified by an Assessment and preserved as part of the record's permanent history.";

const PRESSURE_STATE_CLOSING = "Pressure States describe the condition of the evidence, not the eventual outcome of the claim.";

// Evidence Review — new closing section, drafted content supplied by Stuart
// (Methodology_Evidence_Review_Section.docx, uploaded 2026-07-03).
const EVIDENCE_REVIEW_ACTIVITIES = [
  { term: "Finding evidence",      def: "Identifying potentially relevant publications, announcements, datasets and other developments." },
  { term: "Reviewing evidence",    def: "Evaluating whether new information materially changes the state of an existing Frontier Record." },
  { term: "Changing assessments",  def: "Updating the public record only when the accumulated evidence justifies a different judgement." },
];

export function Methodology() {
  return (
    <InstitutionalPage eyebrow="FCIF — Frontier Claim Intelligence Framework" title="Methodology">
      <PageMeta
        title="Methodology — FCIF"
        description="The Frontier Claim Intelligence Framework. How Faultline Observatory identifies, assesses, and tracks scientific and technology claims through evidence over time. Observation before interpretation."
        path="/methodology/"
      />
      <p className="inst-method-intro">
        The methodology sits behind the archive. Records justify the methodology;
        the methodology does not justify the records.
      </p>

      {METHOD_BLOCKS_PRE.map((b) => (
        <div key={b.term} className="inst-term-row">
          <div className="inst-term">{b.term}</div>
          <div className="inst-def">{b.def}</div>
        </div>
      ))}

      {/* ── Pressure State — dedicated scannable section ── */}
      <div className="inst-pressure-section">
        <div className="inst-term">Pressure State</div>
        <div className="inst-pressure-intro">
          {PRESSURE_STATE_INTRO.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="inst-pressure-divider" />
        <div className="inst-pressure-states">
          {PRESSURE_STATES.map((s) => (
            <div key={s.name} className="inst-pressure-state">
              <div className="inst-pressure-state__name">{s.name}</div>
              <div className="inst-pressure-state__body">{s.body}</div>
            </div>
          ))}
        </div>
        <div className="inst-pressure-divider" />
        <div className="inst-pressure-note">
          <div className="inst-pressure-note__heading">Important Note</div>
          <div className="inst-pressure-note__body">{PRESSURE_STATE_NOTE}</div>
        </div>
        <p className="inst-pressure-closing">{PRESSURE_STATE_CLOSING}</p>
      </div>

      {METHOD_BLOCKS_POST.map((b) => (
        <div key={b.term} className="inst-term-row">
          <div className="inst-term">{b.term}</div>
          <div className="inst-def">{b.def}</div>
        </div>
      ))}

      {/* ── Evidence Review — new closing section ── */}
      <div className="inst-evidence-review">
        <div className="inst-evidence-review__heading">Evidence Review</div>
        <p className="inst-evidence-review__lead">
          Finding new evidence is not the same as changing an assessment.
        </p>
        <p className="inst-about-body">
          The Faultline Observatory deliberately separates three distinct activities:
        </p>
        {EVIDENCE_REVIEW_ACTIVITIES.map((a) => (
          <div key={a.term} className="inst-term-row">
            <div className="inst-term">{a.term}</div>
            <div className="inst-def">{a.def}</div>
          </div>
        ))}
        <p className="inst-about-body">This separation is intentional.</p>
        <p className="inst-about-body">
          Most new evidence does not change a Frontier Record. Many papers confirm existing
          understanding. Some introduce uncertainty without resolving it. Others strengthen
          confidence without changing the overall assessment. Only evidence that materially
          changes the state of a claim results in a new assessment.
        </p>
        <p className="inst-about-body">
          This approach helps preserve the distinction between activity and progress. The
          Observatory records changes in evidence, not simply the passage of time.
        </p>
      </div>
    </InstitutionalPage>
  );
}

// ─── SEARCH ───────────────────────────────────────────────────
export function Search() {
  return (
    <InstitutionalPage eyebrow="Faultline Observatory" title="Search">
      <p className="inst-intro">
        Full-text search across all records, claims, assessments, and programmes.
      </p>
      <p className="inst-search-note">
        Search is available within <Link to="/the-record">The Record</Link> archive.
        Full-corpus search will be available as the corpus grows.
      </p>
    </InstitutionalPage>
  );
}

// ─── HOW TO READ A FRONTIER RECORD ───────────────────────────

const HOW_TO_READ_SECTIONS = [
  {
    heading: "What is a Frontier Record?",
    body: `A Frontier Record is a permanent, structured observation of a scientific or technology claim — from the moment it was made through every significant development in the evidence since. It is not a summary. It is not a verdict. It is the record of what has been claimed, what evidence has tested it, how the assessment has changed, and what remains unresolved. Every record is append-only: nothing is deleted, and the history of the observation is preserved in full.`,
  },
  {
    heading: "The claim",
    body: `Every record begins with a precisely stated claim — the specific assertion under observation. Claims are stated as narrowly as the evidence warrants. If the scope of a claim has been narrowed since it was first made, the mutation log records when and why. Reading the claim carefully matters: two records in the same field may look similar but track subtly different assertions. The claim is the unit of observation, not the field.`,
  },
  {
    heading: "The current assessment",
    body: `The current assessment is the Observatory's most recent position on the record. It describes where the claim currently stands under accumulated evidence — not a final judgement, but a dated statement of the evidentiary situation at the time of writing. The current assessment is always the last entry in the assessment history. It is derived from the record's history; it is never stored as a standalone verdict. When reading the current assessment, note the date. Evidence may have arrived since the last assessment was written.`,
  },
  {
    heading: "Verification stages",
    body: `Every assessment carries a verification stage — a position in the formal sequence from initial claim to independently validated result.\n\nVS-01 Assertion — the claim has been stated but not yet formally published.\nVS-02 Published — peer-reviewed publication exists.\nVS-03 Audit — independent scrutiny is underway.\nVS-04 Replication — independent groups are attempting to reproduce the result.\nVS-05 Operation — the claim is being tested in real-world conditions.\n\nA claim at VS-03 is not a failed claim. It is a claim under examination, which is precisely where frontier claims should be. The stages describe the evidentiary process, not the claim's validity. A claim can also carry a Contested state, indicating that active, substantive challenge exists regardless of stage.`,
  },
  {
    heading: "Evidence and instances",
    body: `The evidence section records each significant development in the evidentiary trail — papers, independent replications, challenge results, revised baselines. Each entry carries a date, a citation, and a weight: primary, secondary, counter, or contested. Reading the evidence chronologically reveals how the evidential landscape has built or shifted. A claim with extensive counter-evidence is not necessarily false — it may be a claim where the mechanism is disputed while the core result holds. The evidence section shows you the character of the challenge, not just its existence.`,
  },
  {
    heading: "Open questions",
    body: `Open questions are specific, named uncertainties that the assessor has identified and not yet resolved. This is an unusual feature and worth understanding.\n\nMost scientific summaries report conclusions. Frontier Records also report where conclusions have not yet been reached — and why. An open question is not an editorial complaint. It is a structural observation: here is a specific thing the evidence has not yet settled.\n\nOpen questions persist across assessment cycles until explicitly closed. A question that has survived multiple assessments without resolution is significant. It means the Observatory has continued to observe the claim and reality has continued not to resolve it. That persistence is information. A record with longstanding open questions is not a weak record — it is a record of a genuinely unresolved claim.`,
  },
  {
    heading: "The mutation log",
    body: `The mutation log records every structural change to the record — amendments to the claim scope, additions to the evidence log, state transitions, scope narrowings. It is append-only and timestamped. Nothing is deleted.\n\nThe mutation log is where the record's history becomes visible. A scope narrowing in the mutation log tells you the claim was originally broader and has been refined under evidential pressure. A state transition tells you the assessment changed and when. Reading the mutation log is reading the record's biography.`,
  },
  {
    heading: "What to pay attention to",
    body: `Do not read only the current assessment. The current assessment is a snapshot. The record is a trajectory.\n\nRead the assessment history in sequence. Notice whether the state has advanced, stalled, or been contested. Notice how long it has been since the last assessment. Notice whether new evidence has arrived since.\n\nRead the open questions. They are the Observatory's honest account of what remains unknown. A record with no open questions is not necessarily a resolved record — it may be a record where the questions have not yet been named.\n\nRead what changed in the mutation log. Scope narrowings in particular are significant: they indicate that the original claim has been revised in response to evidence, often quietly, often without announcement.\n\nThe Frontier Record was designed to preserve trajectories rather than deliver verdicts. The trajectory is the record. Read accordingly.`,
  },
];

export function HowToRead() {
  return (
    <InstitutionalPage eyebrow="Guides" title="How to Read a Frontier Record">
      <PageMeta
        title="How to Read a Frontier Record"
        description="A guide to reading Frontier Records — what each section contains, what verification stages mean, how to interpret open questions and the mutation log, and what to pay attention to."
        path="/how-to-read/"
      />
      <div className="inst-about-sections">
        {HOW_TO_READ_SECTIONS.map(({ heading, body }) => (
          <div key={heading} className="inst-about-block">
            <div className="inst-about-heading">{heading}</div>
            <p className="inst-about-body" style={{ whiteSpace: "pre-line" }}>
              {body}
            </p>
          </div>
        ))}
      </div>
    </InstitutionalPage>
  );
}

// ─── GUIDES INDEX ─────────────────────────────────────────────

const GUIDES = [
  {
    slug: "how-to-read",
    title: "How to Read a Frontier Record",
    description: "What each section of a Frontier Record contains, what verification stages mean, how to interpret open questions and the mutation log, and what to pay attention to when reading.",
  },
];

export function GuidesIndex() {
  return (
    <InstitutionalPage eyebrow="Faultline Observatory" title="Guides">
      <PageMeta
        title="Guides"
        description="Guides to reading and using Faultline Observatory — how Frontier Records are structured, what verification stages mean, and how to query the corpus with Claude Desktop."
        path="/guides/"
      />
      <p className="inst-intro">
        Reference guides for reading and working with Frontier Records.
      </p>
      <div className="inst-prog-list">
        {GUIDES.map((g) => (
          <Link
            key={g.slug}
            to={`/guides/${g.slug}`}
            className="inst-prog-row inst-prog-row--filled"
          >
            <div className="inst-prog-row__name">{g.title}</div>
            <div className="inst-prog-row__desc">{g.description}</div>
          </Link>
        ))}
      </div>
    </InstitutionalPage>
  );
}

