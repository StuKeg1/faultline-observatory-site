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
              <div className="inst-prog-row__desc">{prog.description}</div>
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
const METHOD_BLOCKS = [
  { term: "FCIF",                          def: "The Frontier Claim Intelligence Framework. The Observatory's observation methodology — governing how scientific and technology claims are identified, assessed, and tracked through time as evidence accumulates." },
  { term: "Observation Before Interpretation", def: "The founding epistemic principle. The Observatory records what is observable before forming interpretive positions. Assessments are derived from evidence, not from prior conclusions." },
  { term: "Pressure State",               def: "The current evidentiary state of a record. Not a verdict — a description of where a claim stands under accumulated evidence. States include Assertion, Published, Audit, Replication, Operation, Validated, and Contested. Tracks how research claims move from announcement through independent verification." },
  { term: "Verification Stage",           def: "A discrete stage in the formal verification sequence (VS-01 through VS-05). The current stage is derived from assessments; it is never stored as a verdict. Mirrors the progression from initial scientific claim to independently replicated and operationally validated result." },
  { term: "Frontier Record",              def: "The atomic unit of institutional memory. Each record preserves a claim under observation, its instances, its full assessment history, its evidence trail, and its mutation log. Records are permanent, citable, and append-only." },
  { term: "Assessment",                   def: "A dated, append-only entry recording the Observatory's position on a record at a point in time. The current assessment is always the last entry — never stored separately." },
  { term: "Mutation Log",                 def: "An append-only log of every structural change to a record. Nothing is deleted; changes are recorded and the prior state is preserved." },
  { term: "Transition Feed",              def: "A derived sequence of state changes — computed from consecutive assessments where the pressure state changed. Not stored; always derived from the record's assessment history." },
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
      {METHOD_BLOCKS.map((b) => (
        <div key={b.term} className="inst-term-row">
          <div className="inst-term">{b.term}</div>
          <div className="inst-def">{b.def}</div>
        </div>
      ))}
    </InstitutionalPage>
  );
}

// ─── ABOUT ────────────────────────────────────────────────────
const ABOUT_BLOCKS = [
  { heading: "Mission",               body: "Custodian of The Frontier Record. The Observatory maintains a permanent public record of frontier claims and how evidence changes their assessment over time." },
  { heading: "Purpose",               body: "Frontier claims — in science, engineering, and technology — routinely outrun their evidence. They are announced, celebrated, contested, and sometimes quietly abandoned. The Observatory exists to hold the record of that process in full. It tracks scientific and technology claims from announcement through replication, audit, and operational evidence." },
  { heading: "The Record",            body: "The Frontier Record is not a database of outcomes. It is a record of trajectories — how claims were stated, what evidence tested them, and how the evidentiary position evolved. Records are never closed by editorial judgement. They close only when the observable facts warrant closure. Each record is citable, permanent, and append-only." },
  { heading: "FCIF",                  body: "Observation is governed by the Frontier Claim Intelligence Framework. FCIF defines how claims are identified, how instances are qualified, how assessments are formed, and how pressure states are assigned. The methodology is public and append-only." },
  { heading: "Institutional Principle", body: "Observation Before Interpretation. The Observatory records what is observable before forming interpretive positions. This is not a statement of neutrality — it is a statement of sequence." },
  { heading: "Who the Record Serves", body: "The Frontier Record is maintained for those with an interest in how frontier claims evolve through time rather than how they are announced. Researchers, journalists, investors, policy analysts, historians of technology, and technically literate observers may find it useful as a permanent, structured archive of claim and evidence trajectories. The Observatory does not address general news readers or those seeking current product or technology information — other institutions serve that purpose better." },
];

export function About() {
  return (
    <InstitutionalPage eyebrow="Faultline Observatory" title="About the Observatory">
      <PageMeta
        title="About the Observatory"
        description="Faultline Observatory is a public scientific observatory and publication of record. It maintains a permanent archive of frontier claims in science and technology, tracking how evidence changes their assessment over time."
        path="/about/"
      />
      <div className="inst-about-sections">
        {ABOUT_BLOCKS.map(({ heading, body }) => (
          <div key={heading} className="inst-about-block">
            <div className="inst-about-heading">{heading}</div>
            <p className="inst-about-body">{body}</p>
          </div>
        ))}
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
  {
    slug: "using-with-claude",
    title: "Using the Observatory with Claude Desktop",
    description: "How to connect Claude Desktop directly to the Frontier Record corpus via MCP, and what becomes possible when records are exposed as queryable objects rather than documents.",
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

// ─── USING WITH CLAUDE (MCP GUIDE) ───────────────────────────

const MCP_SECTIONS = [
  {
    heading: "What this is",
    body: `Faultline Observatory maintains a structured record of major scientific and technological claims and tracks how evidence changes their status over time. Normally you read these records on the website. This guide explains a different way to work with them: using Claude Desktop with a direct connection to the corpus, so you can ask questions across all records simultaneously rather than reading them one at a time.`,
  },
  {
    heading: "What becomes possible",
    body: `The website is good for reading individual records. The MCP connection is good for questions that require looking across many records at once.\n\nFor example: which claims in the quantum computing programme are most heavily contested by evidence? Which records have been in the same state for more than a year without advancing? Which programmes have the highest proportion of unresolved open questions? How does the character of evidence differ between the AI and materials science programmes?\n\nNone of those questions have a single answer you can find by opening one record. They require synthesising across the whole corpus. That is what the MCP connection makes possible.`,
  },
  {
    heading: "What you need",
    body: `The Observatory codebase — download or clone the repository. Node.js version 18 or later (check with node --version in Terminal). Claude Desktop, available at claude.ai/download — this is the desktop application, not the website. A Claude Pro subscription is required for MCP features.`,
  },
  {
    heading: "Setup",
    body: `1. Open Terminal, navigate to the Observatory folder, and run: npm install\n\n2. Find your absolute path by running pwd from inside the folder. Copy the output.\n\n3. Find the Claude Desktop config file:\n   Mac/Linux: ~/.config/claude/claude_desktop_config.json\n   Windows: %APPDATA%\\Claude\\claude_desktop_config.json\n\n   Add this, replacing the path with your actual path:\n   {\n     "mcpServers": {\n       "faultline-observatory": {\n         "command": "node",\n         "args": ["/your/path/to/faultline-observatory/mcp-server.js"]\n       }\n     }\n   }\n\n4. Run node mcp-server.js in Terminal and leave it running.\n\n5. Restart Claude Desktop. The connection activates on startup.`,
  },
  {
    heading: "The three tools",
    body: `list_records — Gets an overview of all Frontier Records: current state, programme, mutation count, open questions.\n\nread_record — Opens a specific record by ID (e.g. FR-QE-0001) and returns the full structured content: claim, assessment history, evidence log, open questions, mutation log.\n\nsearch_records — Searches across all records for a term or phrase.\n\nYou do not call these tools directly. Ask Claude questions in plain language and it decides which tools to use.`,
  },
  {
    heading: "How to ask good questions",
    body: `The connection works best when your questions ask about patterns, comparisons, or histories rather than simple lookups.\n\nQuestions that work well: "Which claims are currently most contested — where evidence is actively challenging the original claim?" / "Show me the full history of how the quantum advantage claim has evolved." / "Are there records where the claim scope was narrowed after initial publication?" / "Find records where new evidence arrived but the assessment state didn't change."\n\nQuestions that work less well: "Is quantum computing real?" (too broad — the records track specific claims, not fields) / "Which claims are most important?" (importance is not stored in the records) / "What will happen to this claim?" (the records are observational, not predictive).`,
  },
  {
    heading: "What the records don't do",
    body: `The records are not verdicts. A claim in Audit state is not a failed claim. A claim in Contested state is not a false claim. The states describe the current evidentiary situation.\n\nThe corpus is not exhaustive. The Observatory tracks a curated set of frontier claims. Absence from the corpus does not mean a claim has not been studied.\n\nThe most recent assessment is the Observatory's current view, but evidence may have arrived since the last assessment was written.\n\nThe server is read-only. Nothing you or Claude does through this connection will change the corpus.`,
  },
];

export function UsingWithClaude() {
  return (
    <InstitutionalPage eyebrow="Guides" title="Using the Observatory with Claude Desktop">
      <PageMeta
        title="Using the Observatory with Claude Desktop"
        description="How to connect Claude Desktop directly to the Frontier Record corpus via MCP, and what becomes possible when records are exposed as queryable objects."
        path="/guides/using-with-claude/"
      />
      <div className="inst-about-sections">
        {MCP_SECTIONS.map(({ heading, body }) => (
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
