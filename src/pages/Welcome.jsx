import { Link } from "react-router-dom";
import SiteFooter from "../components/SiteFooter.jsx";
import PageMeta from "../components/PageMeta.jsx";
import "./Institutional.css";

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

// ─── WELCOME SECTIONS ─────────────────────────────────────────
// Content is locked (institutional primer, 11 questions). This
// session is implementation only — do not edit wording here.

const WELCOME_SECTIONS = [
  {
    heading: "What is the Faultline Observatory?",
    body: `The Faultline Observatory is a permanent public record of important technological claims whose long-term significance remains uncertain.

Rather than predicting which technologies will succeed or fail, the Observatory records how evidence changes those claims as it accumulates. Every Frontier Record preserves the history of the claim, including moments when confidence increased, weakened, or changed direction.

The goal is not to produce forecasts. It is to create an accountable public record that can be revisited as new evidence emerges.`,
  },
  {
    heading: "Why does it exist?",
    body: `Many frontier technologies generate excitement long before the evidence is settled. Headlines move on quickly, while the underlying claims continue to evolve over months or years.

The Observatory exists to reduce that gap.

Instead of following the news cycle, it follows the evidence. Every significant development is assessed in context and added to a permanent record, allowing readers to understand not only what happened, but how confidence has changed over time.`,
  },
  {
    heading: "What is a Frontier Record?",
    body: `A Frontier Record is the Observatory's core publication.

Each Record focuses on a single technological claim — a new quantum computing milestone, an AI capability, a medical breakthrough. The Record documents the original claim, the evidence that follows, and every assessment made by the Observatory. Together these create a transparent history that readers can inspect for themselves.`,
  },
  {
    heading: "What is not a Frontier Record?",
    body: `Many claims do not pass as a Frontier Record.

Many claims simply don't naturally generate the kind of long-lived evidence pressure that makes a Frontier Record valuable. Many claims are scientifically interesting and notable discoveries. But they're simply not part of our set of frontier programmes—where claims evolve over years under sustained technical uncertainty and institutional significance. Even if another paper appears on a claim, it’s likely to be incremental rather than a continuing public claim whose assessment people will want to revisit over a decade. One of the strengths of FCIF is that it doesn’t try to become a catalogue of every fascinating scientific result. Saying “no” to good science is part of maintaining a coherent corpus.`,
  },
  {
    heading: "How does evidence change a Frontier Record?",
    body: `A Frontier Record is designed to evolve.

As new evidence becomes available, the Observatory publishes additional assessments explaining whether that evidence strengthens, weakens, or meaningfully changes the claim.

Earlier assessments are never rewritten or removed. Instead, the Record preserves the complete trajectory, allowing readers to see how understanding developed over time.

The Observatory preserves trajectories rather than verdicts. Understanding changes, but the record of how it changed remains.`,
  },
  {
    heading: "What does the current assessment mean?",
    body: `Every Frontier Record carries the Observatory's current assessment of the evidence. As new evidence appears, that assessment may change.

The current assessment is a snapshot of where the claim stands today. The assessment history — preserved in full, never edited away — shows how that judgement evolved to reach it.`,
    note: {
      prefix: "The specific assessment states, and how they are assigned, are explained in the ",
      linkTo: "/methodology",
      linkLabel: "Methodology",
      suffix: ".",
    },
  },
  {
    heading: "How does the Observatory decide which claims become Frontier Records?",
    body: `Not every technology announcement becomes a Frontier Record.

A claim is admitted when it satisfies three conditions: it makes a specific, checkable assertion rather than a general trend; the evidence available today is insufficient to resolve it; and further evidence — a publication, a replication attempt, a deployment, a retraction — can realistically be expected to arrive.

The objective is not to document every news story, but to build a durable public record of developments that matter.`,
  },
  {
    heading: "Why are there four Programmes — not more, not fewer?",
    body: `Four is the current number, not a fixed one.

The four Programmes — Quantum Engineering, Artificial Intelligence, Advanced Materials, and Biotechnology — emerged from the claims the Observatory actually took on, each representing a distinct type of contested frontier discovered through the founding records rather than assigned in advance.

A new Programme is added only when a genuine, recurring frontier appears that does not fit within the existing four — not simply because a new claim seems interesting on its own. That threshold is intentionally high: the Observatory grows by demonstrated pattern, not by anticipation.`,
  },
  {
    heading: "How do the pieces fit together?",
    body: `The Observatory is organised around the Frontier Record. Every Record belongs to a Programme.

Each Programme includes a Reading Room, which brings its Records together in one place, alongside Programme Notes on the institution tracking that field, and Landscape Essays — longer-form analysis of the frontier itself, independent of any single claim.

The Observatory is built from five connected parts: Frontier Records, Programmes, Reading Rooms, Programme Notes, and Landscape Essays. Together they create a single public record, viewed at different levels of detail.`,
  },
  {
    heading: "How does the Observatory evaluate evidence, and why should I trust it?",
    body: `Trust should come from transparency rather than authority.

The Observatory evaluates evidence using a published methodology rather than personal opinion. Every assessment considers the quality of the evidence, the reliability of its source, and its significance for the underlying claim.

That reasoning is recorded publicly, alongside the linked evidence and the assessment history, and previous conclusions remain visible even when later evidence changes them. This lets readers examine not only what the Observatory concluded, but why — and not only the current assessment, but how it was reached.`,
  },
  {
    heading: "Who is behind the Observatory?",
    body: `The Faultline Observatory is an independent public-interest project, founded and maintained by Stuart Kegel.

Its credibility is intended to rest not on its founder, but on the transparency of its methods, the permanence of its public record, and the accountability of every published assessment.`,
    note: {
      prefix: "You can read how the project began in ",
      linkTo: "/about/origins",
      linkLabel: "Origins",
      suffix: ".",
    },
  },
  {
    heading: "Where should I go next?",
    customBody: (
      <>
        <p className="inst-about-body">There are several ways to continue exploring the Observatory.</p>
        <p className="inst-about-body">
          You can browse Frontier Records to follow individual claims, visit a Programme's Reading Room to see developments across a field, or read{" "}
          <Link to="/notes/le-ai-001" style={{ color: "var(--accent)", textDecoration: "none", borderBottom: "1px solid var(--accent-dim)" }}>
            a Landscape Essay
          </Link>{" "}
          for longer-form analysis of a broader theme.
        </p>
        <p className="inst-about-body">
          However you choose to explore, every part of the Observatory is connected by the same principle: tracking technological claims until the evidence decides.
        </p>
      </>
    ),
  },
];

// ─── WELCOME ────────────────────────────────────────────────

export default function Welcome() {
  return (
    <InstitutionalPage eyebrow="Faultline Observatory" title="Welcome to the Faultline Observatory">
      <PageMeta
        title="Welcome to the Faultline Observatory"
        description="A quick introduction to the Faultline Observatory for first-time visitors — what it is, why it exists, how Frontier Records work, and how to start exploring."
        path="/welcome/"
      />
      <p className="inst-intro">A quick introduction for first-time visitors</p>
      <p className="inst-welcome-lead">
        If this is your first visit, this page explains what the Observatory is, how Frontier Records work, and where to begin.
      </p>
      <div className="inst-about-sections">
        {WELCOME_SECTIONS.map(({ heading, body, customBody, note }) => (
          <div key={heading} className="inst-about-block inst-about-block--roomy">
            <div className="inst-about-heading inst-about-heading--question">{heading}</div>
            {customBody ? (
              customBody
            ) : (
              <p className="inst-about-body" style={{ whiteSpace: "pre-line" }}>
                {body}
              </p>
            )}
            {note && (
              <p className="inst-about-body" style={{ marginTop: "0.75rem", fontStyle: "italic" }}>
                {note.prefix}
                <Link to={note.linkTo} style={{ color: "var(--accent)", textDecoration: "none", borderBottom: "1px solid var(--accent-dim)" }}>
                  {note.linkLabel}
                </Link>
                {note.suffix}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="inst-welcome-closing">
        <p className="inst-welcome-closing-lead">
          That's the short version. The best way to see it in practice is to read one.
        </p>
        <Link to="/the-record" className="inst-page-cta">
          Begin with The Record →
        </Link>
      </div>
    </InstitutionalPage>
  );
}
