import { Link, useParams, Navigate } from "react-router-dom";
import SiteFooter from "../components/SiteFooter.jsx";
import PageMeta from "../components/PageMeta.jsx";
import { ALL_NOTES, NOTE_TYPE_LABELS, getNoteUrl } from "../data/notes.js";
import { PROGRAMME_NOTES } from "../data/programmeNotes.js";
import { LANDSCAPE_ESSAYS } from "../data/landscapeEssays.js";
import "./Notes.css";

// ─── NOTE TYPE BADGE ─────────────────────────────────────────
function NoteTypeBadge({ type }) {
  return (
    <span className={`note-type-badge ntb-${type}`}>
      {NOTE_TYPE_LABELS[type] ?? type}
    </span>
  );
}

// ─── NOTE STATUS BADGE ────────────────────────────────────────
function NoteStatusBadge({ status }) {
  return (
    <span className={`note-status-badge nstb-${status}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

// ─── NOTES INDEX — /notes/ ───────────────────────────────────
export function NotesIndex() {
  return (
    <>
      <PageMeta
        title="Institutional Notes"
        description="Documents the Faultline Observatory produces about itself — founding history, evidentiary standards, governance records, and programme observations."
        path="/notes/"
      />
      <div className="notes-index-page">
        <header className="notes-header">
          <div className="notes-header-inner">
            <div className="notes-eyebrow">Faultline Observatory</div>
            <h1 className="notes-title">Institutional Notes</h1>
            <p className="notes-subtitle">
              Documents the Observatory produces about itself — governance records,
              founding history, evidentiary standards, and programme observations.
              Institutional artifacts, not commentary.
            </p>
          </div>
        </header>

        <main className="notes-main">
          <div className="notes-main-inner">
            <section className="notes-context-link" aria-label="Institutional Health link">
              <div className="notes-context-copy">
                <div className="notes-context-label">Institutional Health</div>
                <p className="notes-context-text">
                  Weekly contextual statistics and institutional monitoring for the Observatory.
                </p>
              </div>
              <Link to="/institutional-health" className="notes-context-link-btn">
                Metrics
              </Link>
            </section>

            <div className="notes-list">
              {ALL_NOTES.map((note) => (
                <Link
                  key={note.id}
                  to={getNoteUrl(note)}
                  className="note-row"
                >
                  <div className="note-row-header">
                    <span className="note-row-id">{note.id}</span>
                    <NoteTypeBadge type={note.type} />
                    <NoteStatusBadge status={note.status} />
                  </div>
                  <div className="note-row-title">{note.title}</div>
                  <div className="note-row-summary">{note.summary}</div>
                  <div className="note-row-meta">
                    <span>{note.date}</span>
                    <span className="note-row-relation">{note.relation}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
      <SiteFooter />
    </>
  );
}

// ─── NOTE DETAIL — /notes/[id]/ ──────────────────────────────
// RELEASE-014 fix (2026-06-27): this lookup previously checked ALL_NOTES
// only, so links to PN-AI-001/LE-AI-001 from the Programme page (which
// point here, at /notes/:noteId, reusing this existing route rather than
// introducing new routing architecture) found no match and silently
// redirected to /notes. Fixed by also searching PROGRAMME_NOTES and
// LANDSCAPE_ESSAYS, decorated here with the display-only `type` and
// `relation` fields this shared template expects — those fields are NOT
// added to the canonical PN-AI-001.js/LE-AI-001.js files; Programme Notes
// and Landscape Essays still do not carry a `type` field in their own
// schema (see programmeNotes.js/landscapeEssays.js — that was a
// deliberate RELEASE-014 scoping decision, unchanged by this fix).
export function NoteDetail() {
  const { noteId } = useParams();

  const readingRoomNotes = [
    ...PROGRAMME_NOTES.map((n) => ({ ...n, type: "programme-note", relation: n.programme })),
    ...LANDSCAPE_ESSAYS.map((n) => ({ ...n, type: "landscape-essay", relation: n.programme })),
  ];

  const note = [...ALL_NOTES, ...readingRoomNotes].find(
    (n) => n.id.toLowerCase() === noteId?.toLowerCase()
  );

  if (!note) return <Navigate to="/notes" replace />;

  return (
    <>
      <PageMeta
        title={`${note.title} — ${note.id}`}
        description={note.summary.substring(0, 155)}
        path={`/notes/${note.id.toLowerCase()}/`}
      />
      <div className="note-detail-page">
        {/* Note header — the institutional wrapper */}
        <header className="note-detail-header">
          <div className="note-detail-header-inner">
            <div className="note-breadcrumb">
              <Link to="/">← Observatory</Link>
              <span> › </span>
              <Link to="/notes">Institutional Notes</Link>
              <span> › </span>
              <span className="bc-current">{note.id}</span>
            </div>

            <div className="note-passport">
              <div className="note-passport-main">
                <div className="note-passport-id">{note.id}</div>
                <h1 className="note-passport-title">{note.title}</h1>
                <p className="note-passport-summary">{note.summary}</p>
              </div>

              <aside className="note-passport-meta" aria-label="Note metadata">
                <div className="npm-row">
                  <span className="npm-label">Type</span>
                  <NoteTypeBadge type={note.type} />
                </div>
                <div className="npm-row">
                  <span className="npm-label">Status</span>
                  <NoteStatusBadge status={note.status} />
                </div>
                <div className="npm-row">
                  <span className="npm-label">Note Date</span>
                  <span className="npm-value">{note.date}</span>
                </div>
                {note.author && (
                  <div className="npm-row">
                    <span className="npm-label">Author</span>
                    <span className="npm-value">
                      {note.author.url ? (
                        <a
                          href={note.author.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="npm-author-link"
                        >
                          {note.author.name}
                        </a>
                      ) : (
                        note.author.name
                      )}
                    </span>
                  </div>
                )}
                <div className="npm-row npm-row-relation">
                  <span className="npm-label">Relation</span>
                  <span className="npm-value npm-relation">{note.relation}</span>
                </div>
              </aside>
            </div>
          </div>
        </header>

        {/* Note body — prose inside the institutional wrapper */}
        <div className="note-body">
          <div className="note-body-inner">
            {note.body.map((block) => {
              // Section break — visual separator, no text
              if (block.type === "section-break") {
                return <div key={block.id} className="note-section-break" />;
              }
              return (
                <div key={block.id} className="note-block">
                  {block.heading && (
                    <h2 className="note-block-heading">{block.heading}</h2>
                  )}
                  <p
                    className="note-block-text"
                    dangerouslySetInnerHTML={{ __html: block.text }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
