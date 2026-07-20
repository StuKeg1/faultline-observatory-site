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
  getVerificationStageLabel,
} from "../data/derive.js";
import { getRecordUpdatedDate } from "../data/recordDirectory.js";
import { VS_STAGES } from "../data/trajectoryVisuals.js";
import {
  getProgrammeUrl,
  selectProgrammePreview,
  selectRecordsPreview,
  selectTrajectoryPreview,
} from "./publicRecordPreview.js";
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

function ProgrammePreview({ programmes }) {
  return (
    <div className="pr-preview pr-programme-preview" aria-label="Programme preview">
      {programmes.map((programme) => (
        <Link className="pr-programme-entry" to={getProgrammeUrl(programme)} key={programme.id}>
          <span>{programme.id}</span>
          <strong>{programme.name}</strong>
          <small>{programme.shortDescription}</small>
        </Link>
      ))}
    </div>
  );
}

function TrajectoryPreview({ selection }) {
  if (!selection) {
    return <p className="pr-preview-empty">No eligible trajectory is currently available.</p>;
  }

  const { record, events } = selection;
  const point = (event, index) => ({
    x: 92 + (index / (events.length - 1)) * 250,
    y: 16 + (VS_STAGES.length - 1 - VS_STAGES.indexOf(event.verificationStage)) * 25,
  });
  const points = events.map(point);
  const sequence = events.map(({ verificationStage }) =>
    `${verificationStage} ${getVerificationStageLabel(verificationStage)}`
  );

  return (
    <div className="pr-preview pr-trajectory-preview">
      <div className="pr-trajectory-record">
        <span>{record.id}</span>
        <strong>{record.claim.shortLabel}</strong>
      </div>
      <svg
        className="pr-trajectory-graphic"
        viewBox="0 0 360 124"
        role="img"
        aria-label={`${record.id} trajectory: ${sequence.join(" to ")}`}
      >
        {[...VS_STAGES].reverse().map((stage, index) => {
          const y = 16 + index * 25;
          return (
            <g key={stage}>
              <text x="76" y={y + 3} textAnchor="end">{stage}</text>
              <line x1="84" x2="350" y1={y} y2={y} aria-hidden="true" />
            </g>
          );
        })}
        <polyline
          points={points.map(({ x, y }) => `${x},${y}`).join(" ")}
          aria-hidden="true"
        />
        {points.map(({ x, y }, index) => (
          <circle key={events[index].date} cx={x} cy={y} r="4" aria-hidden="true" />
        ))}
      </svg>
      <div className="pr-trajectory-dates" aria-hidden="true">
        <time dateTime={events[0].date}>{events[0].date}</time>
        <time dateTime={events.at(-1).date}>{events.at(-1).date}</time>
      </div>
      <p className="pr-trajectory-text">
        <span>Chronological stages</span>
        {sequence.join(" → ")}
      </p>
    </div>
  );
}

function RecordsPreview({ records }) {
  return (
    <div className="pr-preview pr-records-preview" aria-label="Recently updated records preview">
      {records.map((record) => (
        <Link className="pr-record-entry" to={getRecordUrl(record)} key={record.id}>
          <span className="pr-record-entry-id">{record.id}</span>
          <strong title={record.claim.shortLabel}>{record.claim.shortLabel}</strong>
          <span className="pr-record-entry-meta">
            <StateBadge pressureState={getCurrentAssessment(record).pressureState} />
            <time dateTime={getRecordUpdatedDate(record)}>{getRecordUpdatedDate(record)}</time>
          </span>
        </Link>
      ))}
    </div>
  );
}

export default function PublicRecord() {
  const summary = useMemo(() => getCorpusSummary(ALL_RECORDS), []);
  const latest = useMemo(() => getLatestDevelopments(ALL_RECORDS, 4), []);
  const programmePreview = useMemo(() => selectProgrammePreview(PROGRAMMES), []);
  const trajectoryPreview = useMemo(() => selectTrajectoryPreview(ALL_RECORDS), []);
  const recordsPreview = useMemo(() => selectRecordsPreview(ALL_RECORDS), []);

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
            {LENSES.map((lens, index) => (
              <article className="pr-lens" key={lens.eyebrow}>
                <span className="pr-lens-eyebrow">{lens.eyebrow}</span>
                <h3>{lens.title}</h3>
                <p>{lens.description}</p>
                {index === 0 && <ProgrammePreview programmes={programmePreview} />}
                {index === 1 && <TrajectoryPreview selection={trajectoryPreview} />}
                {index === 2 && <RecordsPreview records={recordsPreview} />}
                <Link className="pr-link pr-lens-cta" to={lens.to}>{lens.action} →</Link>
              </article>
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
