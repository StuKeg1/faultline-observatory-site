import { useMemo } from "react";
import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import StateBadge from "../components/StateBadge.jsx";
import { ALL_RECORDS, PROGRAMMES } from "../data/corpus.js";
import {
  getCorpusSummary,
  getCurrentAssessment,
  getLatestDevelopments,
  getRecordUrl,
} from "../data/derive.js";
import "./PublicRecord.css";

const LENSES = [
  {
    eyebrow: "Programme",
    title: "How is the Observatory organised?",
    description: "Move through the application domains in which claims are observed, compared and preserved.",
    to: "/programmes/",
    action: "Browse by Programme",
  },
  {
    eyebrow: "Evidence Trajectories",
    title: "How has the evidence changed?",
    description: "Follow changes in institutional assessment across the complete landscape of tracked claims.",
    to: "/evidence-trajectories/",
    action: "Open Evidence Trajectories",
  },
  {
    eyebrow: "Records Directory",
    title: "What does the Observatory preserve?",
    description: "Every tracked claim remains individually addressable. The claim collapsed. The record did not.",
    to: "/the-record/",
    action: "Open the Records Directory",
  },
];

const METHOD_STEPS = [
  ["Claim", "A specific public assertion becomes the unit of observation."],
  ["Evidence", "Significant evidence is added without deleting what came before."],
  ["Assessment", "The Observatory records how the evidentiary position has changed."],
  ["Memory", "The record and its history remain available after the claim resolves."],
];

export default function PublicRecord() {
  const summary = useMemo(() => getCorpusSummary(ALL_RECORDS), []);
  const latest = useMemo(() => getLatestDevelopments(ALL_RECORDS, 4), []);

  return (
    <>
      <PageMeta
        title="The Public Record"
        description="Browse the claims, programmes and evidence trajectories preserved by Faultline Observatory."
        path="/public-record/"
      />
      <main className="pr-page">
        <header className="pr-hero">
          <div className="pr-shell">
            <div className="pr-eyebrow">Faultline Observatory</div>
            <h1>The Public Record</h1>
            <p>Browse the claims, programmes and evidence trajectories preserved by the Observatory.</p>
          </div>
        </header>

        <section className="pr-section pr-shell" aria-labelledby="pr-lenses-title">
          <div className="pr-section-head">
            <div className="pr-eyebrow">Three ways to explore</div>
            <h2 id="pr-lenses-title">One record, three institutional lenses</h2>
          </div>
          <div className="pr-lenses">
            {LENSES.map((lens) => (
              <Link className="pr-lens" to={lens.to} key={lens.eyebrow}>
                <span className="pr-lens-eyebrow">{lens.eyebrow}</span>
                <h3>{lens.title}</h3>
                <p>{lens.description}</p>
                <span className="pr-link">{lens.action} →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="pr-snapshot" aria-label="Public Record statistics">
          <div className="pr-shell pr-snapshot-grid">
            <div><strong>{summary.totalRecords}</strong><span>Frontier Records</span></div>
            <div><strong>{summary.programmeCount}</strong><span>Programmes</span></div>
            <div><strong>{summary.totalAssessments}</strong><span>Assessments</span></div>
            <div><strong>{summary.lastMutationDate}</strong><span>Last updated</span></div>
          </div>
        </section>

        {latest.length > 0 && (
          <section className="pr-section pr-shell" aria-labelledby="pr-latest-title">
            <div className="pr-section-head pr-section-head--split">
              <div>
                <div className="pr-eyebrow">Recent activity</div>
                <h2 id="pr-latest-title">Latest Developments</h2>
              </div>
              <Link to="/the-record/?sort=updated" className="pr-link">View all by latest update →</Link>
            </div>
            <div className="pr-developments">
              {latest.map(({ record, mutation }) => (
                <Link to={getRecordUrl(record)} className="pr-development" key={`${record.id}-${mutation.id}`}>
                  <span className="pr-development-date">{mutation.date}</span>
                  <span className="pr-development-id">{record.id}</span>
                  <span className="pr-development-copy">{mutation.note}</span>
                  <StateBadge pressureState={getCurrentAssessment(record).pressureState} />
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="pr-section pr-section--method" aria-labelledby="pr-method-title">
          <div className="pr-shell">
            <div className="pr-section-head pr-section-head--split">
              <div>
                <div className="pr-eyebrow">Institutional memory</div>
                <h2 id="pr-method-title">How the Evidence Works</h2>
              </div>
              <Link to="/methodology/" className="pr-link">Read the methodology →</Link>
            </div>
            <div className="pr-method-grid">
              {METHOD_STEPS.map(([title, description], index) => (
                <div className="pr-method-step" key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
            <p className="pr-programme-note">The Public Record currently spans {PROGRAMMES.length} programmes. Each destination above is a preview into a complete, independently addressable view.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
