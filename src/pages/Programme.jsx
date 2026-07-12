import { useParams, Link } from "react-router-dom";
import { useMemo } from "react";
import { PROGRAMMES, ALL_RECORDS } from "../data/corpus.js";
import { PROGRAMME_NOTES } from "../data/programmeNotes.js";
import { LANDSCAPE_ESSAYS } from "../data/landscapeEssays.js";
import { getProgrammeStats, getRecordUrl, getCurrentAssessment, getLatestDevelopments } from "../data/derive.js";
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

  const programmeNotes = useMemo(
    () => (prog ? PROGRAMME_NOTES.filter((note) => note.programme === prog.id) : []),
    [prog]
  );

  const landscapeEssays = useMemo(
    () => (prog ? LANDSCAPE_ESSAYS.filter((essay) => essay.programme === prog.id) : []),
    [prog]
  );

  const stats = useMemo(
    () => (prog ? getProgrammeStats(ALL_RECORDS, prog.id) : null),
    [prog]
  );

  // RELEASE (2026-07-07): switched from getRecentActivity() — which
  // returned the most-recently-mutated records with no qualification
  // check, printing mutationLog[0].note verbatim regardless of mutation
  // type — to getLatestDevelopments(), the same Activity Taxonomy &
  // Qualification Policy v0.3 feed already used on the homepage. This
  // closes the gap that let internal/structural mutation notes (e.g.
  // experimental_annotations_added) surface on programme pages
  // unfiltered. Scoped to this programme's records only.
  const recentMutations = useMemo(
    () => getLatestDevelopments(records, 3),
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
  const hasProgrammeNotes = programmeNotes.length > 0;
  const hasLandscapeEssays = landscapeEssays.length > 0;

  return (
    <>
      <PageMeta
        title={prog.name}
        description={`${prog.scopeStatement} ${stats.total} Frontier Record${stats.total !== 1 ? "s" : ""} in this programme.`}
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
                <h1 className="prog-name">{prog.name}</h1>
                <p className="prog-desc">{prog.scopeStatement}</p>
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

            {/* Recent Activity — only if records exist */}
            {hasRecords && recentMutations.length > 0 && (
              <section className="prog-section" aria-labelledby="prog-activity-label">
                <div className="prog-section-label" id="prog-activity-label">
                  Recent Activity
                </div>
                <div className="prog-activity-list">
                  {recentMutations.map((row) => {
                    const { record, mutation } = row;
                    const current = getCurrentAssessment(record);
                    return (
                      <div key={`${record.id}-${mutation.id}`} className="prog-activity-row">
                        <span className="par-date">{mutation.date}</span>
                        <Link to={getRecordUrl(record)} className="par-id">{record.id}</Link>
                        <span className="par-note">{mutation.note}</span>
                        <StateBadge pressureState={current.pressureState} />
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            <section className="prog-section" aria-labelledby="prog-trajectories-label">
              <div className="prog-section-label" id="prog-trajectories-label">
                Evidence Trajectories - {prog.id}
              </div>
              <Link
                to={`/evidence-trajectories/?lens=${prog.id}`}
                className="prog-trajectory-entry"
              >
                <span>View {prog.name} trajectories</span>
                <span>{prog.shortId} records are brought forward within the full archive.</span>
              </Link>
            </section>
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
                        <span className="prr-assessments">
                          {r.assessments.length} assessment{r.assessments.length !== 1 ? "s" : ""}
                        </span>
                        <span className="prr-date">{r.claim.openedDate}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </section>

            {/* Programme Notes — Layer 3 */}
            {hasProgrammeNotes && (
              <section className="prog-section" aria-labelledby="prog-notes-label">
                <div className="prog-section-label" id="prog-notes-label">
                  Programme Notes — {prog.id}
                </div>
                <div className="prog-reading-room-list">
                  {programmeNotes.map((note) => (
                    <Link
                      key={note.id}
                      to={`/notes/${note.id.toLowerCase()}`}
                      className="prog-reading-room-row"
                    >
                      <span>{note.id}</span>
                      <span>{note.title}</span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Landscape Essays — Layer 4 */}
            {hasLandscapeEssays && (
              <section className="prog-section" aria-labelledby="prog-essays-label">
                <div className="prog-section-label" id="prog-essays-label">
                  Landscape Essays — {prog.id}
                </div>
                <div className="prog-reading-room-list">
                  {landscapeEssays.map((essay) => (
                    <Link
                      key={essay.id}
                      to={`/notes/${essay.id.toLowerCase()}`}
                      className="prog-reading-room-row"
                    >
                      <span>{essay.id}</span>
                      <span>{essay.title}</span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Programme Diagnosis */}
            <p className="prog-diagnosis-line">No current programme-level diagnosis.</p>

          </div>
        </main>
      </div>
      <SiteFooter />
    </>
  );
}
