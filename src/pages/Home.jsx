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
} from "../data/derive.js";
import "./Home.css";

// ─── DERIVED SNAPSHOT ────────────────────────────────────────
// Homepage Derivation Rule v1: every field derived from corpus.
// Fields that cannot be derived do not appear.

function deriveSnapshot(records, notes) {
  // Archive State
  const recordCount = records.length;
  const programmeCount = PROGRAMMES.length;

  // Latest activity: most recent mutation — record ID + date, not just date
  const withMutations = records.filter((r) => r.mutationLog?.length > 0);
  const mostRecent = withMutations.sort(
    (a, b) => b.mutationLog[0].date.localeCompare(a.mutationLog[0].date)
  )[0] ?? null;
  const latestActivity = mostRecent
    ? { recordId: mostRecent.id, date: mostRecent.mutationLog[0].date, url: getRecordUrl(mostRecent) }
    : null;

  // Institutional State: active constitutional reviews (CR-type notes, published)
  const activeReviews = notes.filter(
    (n) => n.type === "constitutional-review" && n.status === "published"
  ).length;

  return { recordCount, programmeCount, latestActivity, activeReviews };
}

// ─── MARK A ──────────────────────────────────────────────────
function MarkA() {
  return (
    <svg width="64" height="64" viewBox="0 0 200 200" fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Faultline Observatory mark" role="img">
      <line x1="32" y1="14"  x2="32"  y2="172" stroke="#1a1916" strokeWidth="1.5"/>
      <line x1="26" y1="26"  x2="32"  y2="26"  stroke="#1a1916" strokeWidth="1.2"/>
      <line x1="26" y1="38"  x2="32"  y2="38"  stroke="#1a1916" strokeWidth="1.2"/>
      <line x1="22" y1="50"  x2="32"  y2="50"  stroke="#1a1916" strokeWidth="1.5"/>
      <line x1="26" y1="62"  x2="32"  y2="62"  stroke="#1a1916" strokeWidth="1.2"/>
      <line x1="26" y1="74"  x2="32"  y2="74"  stroke="#1a1916" strokeWidth="1.2"/>
      <line x1="22" y1="100" x2="32"  y2="100" stroke="#1a1916" strokeWidth="1.5"/>
      <line x1="26" y1="112" x2="32"  y2="112" stroke="#1a1916" strokeWidth="1.2"/>
      <line x1="26" y1="124" x2="32"  y2="124" stroke="#1a1916" strokeWidth="1.2"/>
      <line x1="22" y1="150" x2="32"  y2="150" stroke="#1a1916" strokeWidth="1.5"/>
      <line x1="26" y1="162" x2="32"  y2="162" stroke="#1a1916" strokeWidth="1.2"/>
      <rect x="62"  y="46"  width="54" height="54" fill="#1a1916"/>
      <rect x="116" y="100" width="54" height="50" fill="#1a1916"/>
      <circle cx="116" cy="100" r="64" stroke="#1a1916" strokeWidth="2.2"/>
      <line x1="32"  y1="100" x2="116" y2="100" stroke="#1a1916" strokeWidth="2.2"/>
      <line x1="116" y1="100" x2="116" y2="88"  stroke="#1a1916" strokeWidth="2.2"/>
      <line x1="116" y1="88"  x2="186" y2="88"  stroke="#1a1916" strokeWidth="2.2"/>
    </svg>
  );
}

// ─── HOME ────────────────────────────────────────────────────
export default function Home() {
  const snapshot = useMemo(() => deriveSnapshot(ALL_RECORDS, ALL_NOTES), []);
  const recent   = useMemo(() => getRecentActivity(ALL_RECORDS, 5), []);
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

        {/* ── IDENTITY ── */}
        <header className="foyer-identity">
          <div className="foyer-identity-inner">
            <div className="foyer-mark">
              <MarkA />
            </div>
            <div className="foyer-title-block">
              <h1 className="foyer-name">Faultline Observatory</h1>
              <p className="foyer-custodian">Custodian of The Frontier Record</p>
              <p className="foyer-statement">
                A permanent public record of frontier claims
                and how evidence changes their assessment over time.
              </p>
            </div>
          </div>
        </header>

        {/* ── SNAPSHOT ── */}
        <div className="foyer-snapshot" role="region" aria-label="Observatory current state">
          <div className="foyer-snapshot-inner">

            <div className="snapshot-column">
              <div className="snapshot-col-label">Archive State</div>
              <div className="snapshot-fields">
                <div className="snapshot-field">
                  <span className="sf-value">{snapshot.recordCount}</span>
                  <span className="sf-label">Frontier Records</span>
                </div>
                <div className="snapshot-field">
                  <span className="sf-value">{snapshot.programmeCount}</span>
                  <span className="sf-label">Programmes</span>
                </div>
              </div>
            </div>

            <div className="snapshot-divider" aria-hidden="true" />

            <div className="snapshot-column">
              <div className="snapshot-col-label">Institutional State</div>
              <div className="snapshot-fields">
                {snapshot.latestActivity && (
                  <div className="snapshot-field sf-activity">
                    <span className="sf-label">Latest Activity</span>
                    <span className="sf-value sf-value-link">
                      <Link to={snapshot.latestActivity.url}>
                        {snapshot.latestActivity.recordId}
                      </Link>
                      <span className="sf-date">{snapshot.latestActivity.date}</span>
                    </span>
                  </div>
                )}
                {snapshot.activeReviews > 0 && (
                  <div className="snapshot-field">
                    <span className="sf-value">{snapshot.activeReviews}</span>
                    <span className="sf-label">
                      Active Constitutional {snapshot.activeReviews === 1 ? "Review" : "Reviews"}
                    </span>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* ── RECENT ACTIVITY ── */}
        {recent.length > 0 && (
          <section className="foyer-section" aria-labelledby="activity-label">
            <div className="foyer-section-inner">
              <div className="foyer-section-head">
                <h2 className="foyer-section-title" id="activity-label">Archive Activity</h2>
              </div>
              <div className="foyer-activity-log" role="feed">
                {recent.map((record) => {
                  const lastMut = record.mutationLog[0];
                  const current = getCurrentAssessment(record);
                  return (
                    <div key={record.id} className="foyer-activity-row">
                      <span className="far-date">{lastMut.date}</span>
                      <Link to={getRecordUrl(record)} className="far-id">{record.id}</Link>
                      <span className="far-note">{lastMut.note}</span>
                      <StateBadge pressureState={current.pressureState} />
                    </div>
                  );
                })}
              </div>
              <div className="foyer-section-foot">
                <Link to="/the-record" className="foyer-more-link">
                  View all records in The Frontier Record →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ── PROGRAMMES ── */}
        <section className="foyer-section foyer-section-ruled" aria-labelledby="prog-label">
          <div className="foyer-section-inner">
            <div className="foyer-section-head">
              <h2 className="foyer-section-title" id="prog-label">Programmes</h2>
            </div>
            <div className="foyer-prog-grid" role="list">
              {PROGRAMMES.map((prog) => {
                const stats = progStats[prog.id];
                const isEmpty = stats.total === 0;
                return (
                  <Link
                    key={prog.id}
                    to={`/programmes/${prog.id.toLowerCase()}`}
                    className={`foyer-prog-card${isEmpty ? " foyer-prog-card--empty" : ""}`}
                    role="listitem"
                  >
                    <div className="fpc-id">{prog.id}</div>
                    <div className="fpc-name">{prog.name}</div>
                    <div className="fpc-count">
                      {isEmpty ? "No published records" : `${stats.total} record${stats.total !== 1 ? "s" : ""}`}
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="foyer-section-foot">
              <Link to="/programmes" className="foyer-more-link">
                View all programmes →
              </Link>
            </div>
          </div>
        </section>

        {/* ── QUIET LINKS ── */}
        <nav className="foyer-links" aria-label="Observatory sections">
          <div className="foyer-links-inner">
            <Link to="/the-record"  className="foyer-link">The Frontier Record</Link>
            <Link to="/notes"       className="foyer-link">Institutional Notes</Link>
            <Link to="/methodology" className="foyer-link">Methodology</Link>
            <Link to="/about"       className="foyer-link">About the Observatory</Link>
          </div>
        </nav>

      </div>
      <SiteFooter />
    </>
  );
}
