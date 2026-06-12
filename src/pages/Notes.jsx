import { Link, useParams, Navigate } from "react-router-dom";
import SiteFooter from "../components/SiteFooter.jsx";
import PageMeta from "../components/PageMeta.jsx";
import { ALL_NOTES, NOTE_TYPE_LABELS, getNoteUrl } from "../data/notes.js";
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
export function NoteDetail() {
  const { noteId } = useParams();
  const note = ALL_NOTES.find(
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
                <div className="npm-row npm-row-relation">
                  <span className="npm-label">Relation</span>
                  <span className="npm-value npm-relation">{note.relation}</span>
                </div>
              </aside>
            </div>
          </div>
        </header>

        {/* Note body — prose, but always inside the institutional wrapper */}
        <div className="note-body">
          <div className="note-body-inner">
            {note.body.map((block) => (
              <div key={block.id} className="note-block">
                {block.heading && (
                  <h2 className="note-block-heading">{block.heading}</h2>
                )}
                <p className="note-block-text">{block.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
