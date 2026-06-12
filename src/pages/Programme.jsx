import { useParams, Link } from "react-router-dom";
import { useMemo } from "react";
import { PROGRAMMES, ALL_RECORDS } from "../data/corpus.js";
import { getProgrammeStats, getRecordUrl, getCurrentAssessment, getRecentActivity } from "../data/derive.js";
import StateBadge from "../components/StateBadge.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import PageMeta from "../components/PageMeta.jsx";
import "./Programme.css";

export default function Programme() {
  const { programmeId } = useParams();
  const prog = PROGRAMMES.find(
    (p) => p.id.toLowerCase() === programmeId?.toLowerCase()
  );

  const records = useMemo(
    () => (prog ? ALL_RECORDS.filter((r) => r.programme === prog.id) : []),
    [prog]
  );

  const stats = useMemo(
    () => (prog ? getProgrammeStats(ALL_RECORDS, prog.id) : null),
    [prog]
  );

  const recentMutations = useMemo(
    () => getRecentActivity(records, 3),
    [records]
  );

  if (!prog) {
    return (
      <>
        <div className="prog-not-found">
          <div className="prog-not-found-label">Programme not found</div>
          <Link to="/programmes">← View all programmes</Link>
        </div>
        <SiteFooter />
      </>
    );
  }

  const hasRecords = records.length > 0;

  return (
    <>
      <PageMeta
        title={prog.name}
        description={`${prog.description} ${stats.total} Frontier Record${stats.total !== 1 ? "s" : ""} in this programme.`}
        path={`/programmes/${prog.id.toLowerCase()}/`}
      />
      <div className="programme-page">

        {/* Header */}
        <header className="prog-header">
          <div className="prog-header-inner">
            <div className="prog-breadcrumb">
              <Link to="/">← Observatory</Link>
              <span> › </span>
              <Link to="/programmes">Programmes</Link>
              <span> › </span>
              <span className="bc-current">{prog.id}</span>
            </div>

            <div className="prog-passport">
              <div className="prog-main">
                <div className="prog-id">{prog.id}</div>
                <h1 className="prog-name">{prog.name}</h1>
                <p className="prog-desc">{prog.description}</p>
              </div>

              <aside className="prog-stats-panel" aria-label="Programme statistics">
                <div className="prog-stat-row">
                  <span className="prog-stat-label">Records</span>
                  <span className="prog-stat-value">{stats.total}</span>
                </div>
                <div className="prog-stat-row">
                  <span className="prog-stat-label">Open</span>
                  <span className="prog-stat-value">{stats.open}</span>
                </div>
                <div className="prog-stat-row">
                  <span className="prog-stat-label">In audit</span>
                  <span className="prog-stat-value">{stats.stateCounts["audit"] ?? 0}</span>
                </div>
                <div className="prog-stat-row">
                  <span className="prog-stat-label">Replicated</span>
                  <span className="prog-stat-value">{stats.stateCounts["replication"] ?? 0}</span>
                </div>
              </aside>
            </div>
          </div>
        </header>

        {/* Body */}
        <main className="prog-main-body">
          <div className="prog-main-inner">

            {/* Programme Diagnosis */}
            <section className="prog-section" aria-labelledby="prog-diagnosis-label">
              <div className="prog-section-label" id="prog-diagnosis-label">
                Programme Diagnosis
              </div>
              <div className="prog-diagnosis-block">
                <p className="prog-diagnosis-text">
                  No current programme-level diagnosis.
                </p>
              </div>
            </section>

            {/* Recent Activity — only if records exist */}
            {hasRecords && recentMutations.length > 0 && (
              <section className="prog-section" aria-labelledby="prog-activity-label">
                <div className="prog-section-label" id="prog-activity-label">
                  Recent Activity
                </div>
                <div className="prog-activity-list">
                  {recentMutations.map((r) => {
                    const lastMut = r.mutationLog[0];
                    const current = getCurrentAssessment(r);
                    return (
                      <div key={r.id} className="prog-activity-row">
                        <span className="par-date">{lastMut.date}</span>
                        <Link to={getRecordUrl(r)} className="par-id">{r.id}</Link>
                        <span className="par-note">{lastMut.note}</span>
                        <StateBadge pressureState={current.pressureState} />
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Frontier Records */}
            <section className="prog-section" aria-labelledby="prog-records-label">
              <div className="prog-section-label" id="prog-records-label">
                Frontier Records — {prog.id}
              </div>

              {!hasRecords ? (
                <div className="prog-empty-state">
                  <div className="prog-empty-label">No published records</div>
                  <p className="prog-empty-text">
                    This programme is recognised by the Observatory. No Frontier Records
                    have been published in this programme yet.
                  </p>
                </div>
              ) : (
                <div className="prog-record-list">
                  {records.map((r) => {
                    const current = getCurrentAssessment(r);
                    return (
                      <Link
                        key={r.id}
                        to={getRecordUrl(r)}
                        className="prog-record-row"
                      >
                        <span className="prr-id">{r.id}</span>
                        <span className="prr-title">{r.claim.shortLabel}</span>
                        <span className="prr-state">
                          <StateBadge pressureState={current.pressureState} />
                        </span>
                        <span className="prr-date">{r.claim.openedDate}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </section>

          </div>
        </main>
      </div>
      <SiteFooter />
    </>
  );
}
