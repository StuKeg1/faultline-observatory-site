import { useMemo } from "react";
import { Link } from "react-router-dom";
import StateBadge from "../components/StateBadge.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import PageMeta from "../components/PageMeta.jsx";
import { ALL_RECORDS, PROGRAMMES } from "../data/corpus.js";
import { ALL_NOTES } from "../data/notes.js";
import {
  getProgrammeStats,
  getCurrentAssessment,
  getRecordUrl,
  getRecentActivity,
  getLatestDevelopments,
} from "../data/derive.js";
import "./Home.css";

// ─── DERIVED SNAPSHOT ────────────────────────────────────────
// Homepage Derivation Rule v1: every field derived from corpus.
// Fields that cannot be derived do not appear.

function deriveSnapshot(records, notes) {
  const recordCount = records.length;
  const programmeCount = PROGRAMMES.length;

  const assessmentCount = records.reduce(
    (sum, r) => sum + (r.assessments ? r.assessments.length : 0),
    0
  );

  const [mostRecent] = getRecentActivity(records, 1);
  const latestActivity = mostRecent
    ? { recordId: mostRecent.id, date: mostRecent.mutationLog[0].date, url: getRecordUrl(mostRecent) }
    : null;

  const activeReviews = notes.filter(
    (n) => n.type === "constitutional-review" && n.status === "published"
  ).length;

  return { recordCount, programmeCount, assessmentCount, latestActivity, activeReviews };
}

// ─── HERO RECORD ─────────────────────────────────────────────
// Hero Rule v1: the hero must always be a real record rendered
// from live corpus data. Never fabricate or simplify a trajectory
// for editorial convenience.
//
// Hero record: FR-AM-0005
// Fixed by editorial decision. Revisit if the record is removed
// from the corpus; do not replace without institutional decision.

const HERO_RECORD_ID = "FR-AM-0005";

// Representative instance events for the hero timeline.
// Selected to demonstrate trajectory — not a complete audit trail.
// Update if IN- identifiers change in the source record.
const HERO_TIMELINE = [
  { date: "2020–23", label: "Dias retractions", note: "Two Nature papers retracted following misconduct findings" },
  { date: "Jul–Aug 2023", label: "LK-99 null result", note: "40+ independent groups. Definitive negative within weeks" },
  { date: "2023", label: "Community standard tightened", note: "Three-criterion reproducibility threshold established" },
  { date: "2024", label: "No surviving claim", note: "Systematic null across all candidates" },
  { date: "2025–26", label: "Field activity continues", note: "New claims. None cross the reopening threshold" },
];

function HeroRecord({ records }) {
  const record = records.find((r) => r.id === HERO_RECORD_ID);
  if (!record) return null;

  const current = getCurrentAssessment(record);
  const assessments = record.assessments ?? [];
  const url = getRecordUrl(record);

  return (
    <div className="hero-record">
      {/* Identity */}
      <div className="hr-identity">
        <span className="hr-id">{record.id}</span>
        <span className="hr-programme">{record.programme}</span>
      </div>
      <div className="hr-claim">{record.claim.shortLabel}</div>

      {/* Current assessment */}
      <div className="hr-assessment-current">
        <div className="hr-assessment-row">
          <span className="hr-assessment-label">Current assessment</span>
          <StateBadge pressureState={current.pressureState} />
        </div>
        <div className="hr-assessment-meta">
          <span className="hr-status">{record.status === "closed" ? "Closed" : "Open"}</span>
          <span className="hr-sep">·</span>
          <span className="hr-date">Last assessed {current.date}</span>
        </div>
      </div>

      {/* Evidence timeline */}
      <div className="hr-timeline">
        <div className="hr-timeline-label">Evidence trajectory</div>
        <div className="hr-timeline-entries">
          {HERO_TIMELINE.map((entry, i) => (
            <div key={i} className="hr-timeline-entry">
              <div className="hr-tl-connector">
                <div className="hr-tl-dot" />
                {i < HERO_TIMELINE.length - 1 && <div className="hr-tl-line" />}
              </div>
              <div className="hr-tl-content">
                <span className="hr-tl-date">{entry.date}</span>
                <span className="hr-tl-label">{entry.label}</span>
                <span className="hr-tl-note">{entry.note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Assessment history */}
      <div className="hr-assessment-history">
        <div className="hr-assessment-history-label">Assessments</div>
        <div className="hr-assessment-list">
          {assessments.map((a) => (
            <div key={a.id} className="hr-assessment-item">
              <span className="hr-asmnt-id">{a.id}</span>
              <span className="hr-asmnt-date">{a.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Link to={url} className="hr-cta">
        Read the full Frontier Record →
      </Link>
    </div>
  );
}

// ─── HOME ────────────────────────────────────────────────────
export default function Home() {
  const snapshot = useMemo(() => deriveSnapshot(ALL_RECORDS, ALL_NOTES), []);
  const latestDevelopments = useMemo(() => getLatestDevelopments(ALL_RECORDS, 5), []);
  const progStats = useMemo(
    () => Object.fromEntries(PROGRAMMES.map((p) => [p.id, getProgrammeStats(ALL_RECORDS, p.id)])),
    []
  );

  return (
    <>
      <PageMeta
        title={null}
        description="Custodian of The Frontier Record. A permanent public record tracking how frontier claims in science and technology evolve under evidence — quantum computing, artificial intelligence, materials science, and biotechnology."
        path="/"
      />
      <div className="home-page">

        {/* ── HERO ── */}
        <section className="home-hero" aria-label="The Public Record">
          <div className="home-hero-inner">

            {/* Left: identity statement */}
            <div className="hero-identity">
              <h1 className="hero-headline">
                The Public Record<br />
                of Technology Claims.{" "}
                <span className="hero-headline-accent">
                  Tracked until the<br />
                  evidence decides.
                </span>
              </h1>
              <div className="hero-copy">
                <p>Every week, researchers, laboratories and technology companies announce breakthroughs that promise to reshape the future.</p>
                <p>Some become enduring scientific milestones. Others evolve, fragment, or quietly disappear.</p>
                <p className="hero-copy-bold">Faultline Observatory preserves the public history of those claims — from announcement to resolution, with the evidence visible every step of the way.</p>
                <p className="hero-trajectory-bridge">Judgement changes over time. Follow how claims move through the Observatory&apos;s assessment history in <Link to="/evidence-trajectories/">Evidence Trajectories</Link>.</p>
              </div>
              <Link to="/the-record" className="hero-cta-primary">
                Explore a Frontier Record →
              </Link>
              <p className="hero-trust-line">Independent. Non-partisan. Evidence-based.</p>
              <Link to="/welcome" className="hero-orientation-panel">
                <p className="hero-orientation-lead">New to the Observatory?</p>
                <p className="hero-orientation-text">
                  A short introduction to Frontier Records, how the Observatory evaluates evidence, and how it works.
                </p>
                <div className="hero-orientation-bottom">
                  <span className="hero-orientation-cta">Quick guide →</span>
                </div>
              </Link>
            </div>

            {/* Right: hero record */}
            <div className="hero-record-col">
              <HeroRecord records={ALL_RECORDS} />
            </div>

          </div>
        </section>

        {/* ── PROGRAMMES ── */}
        <section className="home-section home-section--programmes" aria-labelledby="prog-heading">
          <div className="home-section-inner">
            <div className="home-section-head">
              <h2 className="home-section-title" id="prog-heading">
                Explore the Public Record by Programme
              </h2>
            </div>
            <div className="prog-catalogue" role="list">
              {PROGRAMMES.map((prog) => {
                const stats = progStats[prog.id];
                return (
                  <Link
                    key={prog.id}
                    to={`/programmes/${prog.id.toLowerCase()}`}
                    className="prog-entry"
                    role="listitem"
                    aria-label={`Explore ${prog.name}`}
                  >
                    <div className="prog-entry-top">
                      <div className="prog-entry-topline">
                        <span className="prog-entry-id">{prog.id}</span>
                        {stats.badge && (
                          <span className={`prog-entry-badge prog-entry-badge--${stats.badge.toLowerCase()}`}>
                            {stats.badge}
                          </span>
                        )}
                      </div>
                      <div className="prog-entry-name">{prog.name}</div>
                      <div className="prog-entry-threshold">
                        {prog.thresholdStatement}
                      </div>
                    </div>
                    <div className="prog-entry-bottom">
                      <span className="prog-entry-meta">
                        {stats.total === 0
                          ? "No published records"
                          : `${stats.total} Frontier Record${stats.total !== 1 ? "s" : ""}`}
                      </span>
                      <span className="prog-entry-link">Explore Programme →</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── INSTITUTIONAL SNAPSHOT ── */}
        {/* Role: confirmation, not introduction. */}
        {/* Positioned after programmes so numbers acquire meaning from context. */}
        <div className="home-snapshot" role="region" aria-label="Observatory institutional facts">
          <div className="home-snapshot-inner">
            <span className="hsn-stat">
              <span className="hsn-value">{snapshot.recordCount}</span>
              <span className="hsn-label">Frontier Records</span>
            </span>
            <span className="hsn-divider" aria-hidden="true" />
            <span className="hsn-stat">
              <span className="hsn-value">{snapshot.programmeCount}</span>
              <span className="hsn-label">Programmes of observation</span>
            </span>
            <span className="hsn-divider" aria-hidden="true" />
            <span className="hsn-stat">
              <span className="hsn-value">{snapshot.assessmentCount}</span>
              <span className="hsn-label">Assessments in the corpus</span>
            </span>
            {snapshot.latestActivity && (
              <>
                <span className="hsn-divider" aria-hidden="true" />
                <span className="hsn-stat">
                  <span className="hsn-label">Last updated</span>
                  <span className="hsn-activity">
                    <span className="hsn-activity-date">{snapshot.latestActivity.date}</span>
                    <Link to={snapshot.latestActivity.url} className="hsn-activity-id">
                      ({snapshot.latestActivity.recordId})
                    </Link>
                  </span>
                </span>
              </>
            )}
          </div>
        </div>

        {/* ── LATEST DEVELOPMENTS ── */}
        {/* Activity Taxonomy & Qualification Policy v0.3 (Piloted, operational). */}
        {/* Every mutation across the corpus is classified by mutationClassifier.js; */}
        {/* only qualifying developments (Frontier/Publication activity, per policy */}
        {/* §3.1–§3.5) appear here. Every mutation, qualifying or not, is preserved */}
        {/* in full at /institutional-changelog — nothing shown here is hidden from */}
        {/* the record, only reordered by public significance. */}
        {latestDevelopments.length > 0 && (
          <section className="home-section" aria-labelledby="activity-label">
            <div className="home-section-inner">
              <div className="home-section-head">
                <h2 className="home-section-title" id="activity-label">Latest Developments</h2>
              </div>
              <div className="home-activity-log" role="feed">
                {latestDevelopments.map((row) => {
                  const { record, mutation } = row;
                  const current = getCurrentAssessment(record);
                  return (
                    <div key={`${record.id}-${mutation.id}`} className="home-activity-row">
                      <span className="har-date">{mutation.date}</span>
                      <Link to={getRecordUrl(record)} className="har-id">{record.id}</Link>
                      <span className="har-note">{mutation.note}</span>
                      <StateBadge pressureState={current.pressureState} />
                    </div>
                  );
                })}
              </div>
              <div className="home-section-foot">
                <Link to="/the-record" className="home-more-link">
                  View all records in The Frontier Record →
                </Link>
                <Link to="/institutional-changelog" className="home-more-link home-more-link--secondary">
                  View the complete Institutional Changelog →
                </Link>
              </div>
            </div>
          </section>
        )}

      </div>
      <SiteFooter />
    </>
  );
}
