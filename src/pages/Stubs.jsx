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
