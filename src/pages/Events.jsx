import { Link, useParams } from "react-router-dom";
import SiteFooter from "../components/SiteFooter.jsx";
import PageMeta from "../components/PageMeta.jsx";
import { ALL_EVENTS, EVENT_COUNT, getEventById, getEventPrimaryLine, getEventTypeLabel } from "../data/events.js";
import "./Events.css";

function formatDate(timestamp) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(timestamp));
}

function EventCard({ event }) {
  return (
    <article className="oe-card">
      <div className="oe-card-meta">
        <Link to={`/events/${event.eventId}`} className="oe-id">{event.eventId}</Link>
        <span>{formatDate(event.timestamp)}</span>
        <span>{event.programme}</span>
        <span>{getEventTypeLabel(event.eventType)}</span>
      </div>
      <h2 className="oe-card-title">{event.summary}</h2>
      <p className="oe-card-line">{getEventPrimaryLine(event)}</p>
      <div className="oe-card-links">
        {event.recordId ? <span>{event.recordId}</span> : <span>Programme event</span>}
        <a href={event.url}>Canonical object</a>
      </div>
    </article>
  );
}

export function EventDetail() {
  const { eventId } = useParams();
  const event = getEventById(eventId);

  if (!event) {
    return (
      <>
        <PageMeta
          title="Event not found"
          description="The requested Observatory Event does not exist."
          path={`/events/${eventId ?? ""}`}
        />
        <div className="events-page">
          <header className="oe-header">
            <div className="oe-header-inner">
              <div>
                <div className="oe-eyebrow">Observatory Events</div>
                <h1 className="oe-title">Event not found</h1>
                <p className="oe-subtitle">This Observatory Event does not exist in the canonical Event corpus.</p>
              </div>
            </div>
          </header>
          <main className="oe-main">
            <div className="oe-main-inner">
              <Link to="/events" className="oe-back-link">Return to Event Archive</Link>
            </div>
          </main>
        </div>
        <SiteFooter />
      </>
    );
  }

  return (
    <>
      <PageMeta
        title={`${event.eventId} — Observatory Event`}
        description={event.summary}
        path={`/events/${event.eventId}`}
      />
      <div className="events-page">
        <header className="oe-header">
          <div className="oe-header-inner">
            <div>
              <div className="oe-eyebrow">Observatory Event</div>
              <h1 className="oe-title">{event.eventId}</h1>
              <p className="oe-subtitle">{event.summary}</p>
            </div>
            <div className="oe-summary-block" aria-label="Event metadata">
              <div className="oe-stat">
                <span className="oe-stat-n">{event.programme}</span>
                <span className="oe-stat-lbl">Programme</span>
              </div>
              <div className="oe-stat">
                <span className="oe-stat-n">{getEventTypeLabel(event.eventType)}</span>
                <span className="oe-stat-lbl">Type</span>
              </div>
            </div>
          </div>
        </header>

        <main className="oe-main">
          <div className="oe-main-inner">
            <Link to="/events" className="oe-back-link">← Event Archive</Link>

            <section className="oe-detail-card">
              <div className="oe-detail-row">
                <span>Event ID</span>
                <strong>{event.eventId}</strong>
              </div>
              <div className="oe-detail-row">
                <span>Event Type</span>
                <strong>{event.eventType}</strong>
              </div>
              <div className="oe-detail-row">
                <span>Timestamp</span>
                <strong>{event.timestamp}</strong>
              </div>
              <div className="oe-detail-row">
                <span>Programme</span>
                <strong>{event.programme}</strong>
              </div>
              <div className="oe-detail-row">
                <span>Record</span>
                <strong>{event.recordId ?? "Not associated with a single Frontier Record"}</strong>
              </div>

              {event.claimTitle && (
                <div className="oe-detail-row">
                  <span>Claim Title</span>
                  <strong>{event.claimTitle}</strong>
                </div>
              )}

              {event.previousPressureState && (
                <div className="oe-detail-row">
                  <span>Pressure State</span>
                  <strong>{event.previousPressureState} → {event.newPressureState}</strong>
                </div>
              )}

              {event.previousVerificationStage && (
                <div className="oe-detail-row">
                  <span>Verification Stage</span>
                  <strong>{event.previousVerificationStage} → {event.newVerificationStage}</strong>
                </div>
              )}

              {event.programmeName && (
                <div className="oe-detail-row">
                  <span>Programme Name</span>
                  <strong>{event.programmeName}</strong>
                </div>
              )}

              {Number.isInteger(event.recordCount) && (
                <div className="oe-detail-row">
                  <span>Record Count</span>
                  <strong>{event.recordCount}</strong>
                </div>
              )}

              <div className="oe-detail-row">
                <span>Canonical Object</span>
                <strong><a href={event.url}>{event.url}</a></strong>
              </div>
            </section>
          </div>
        </main>
      </div>
      <SiteFooter />
    </>
  );
}

export default function EventsIndex() {
  return (
    <>
      <PageMeta
        title="Observatory Events"
        description="The generated archive of Observatory Events — durable records of public institutional state change."
        path="/events/"
      />
      <div className="events-page">
        <header className="oe-header">
          <div className="oe-header-inner">
            <div>
              <div className="oe-eyebrow">Faultline Observatory</div>
              <h1 className="oe-title">Observatory Events</h1>
              <p className="oe-subtitle">
                A generated archive of institutional state changes. Event JSON files are the canonical source of truth.
              </p>
            </div>
            <div className="oe-summary-block" aria-label="Event corpus statistics">
              <div className="oe-stat">
                <span className="oe-stat-n">{EVENT_COUNT}</span>
                <span className="oe-stat-lbl">Events</span>
              </div>
              <div className="oe-stat">
                <span className="oe-stat-n">Phase 1</span>
                <span className="oe-stat-lbl">Protected Corpus</span>
              </div>
            </div>
          </div>
        </header>

        <div className="oe-governance-bar">
          <div className="oe-governance-inner">
            Protected phase: OE-2026-0001 through OE-2026-0009 validate the schema. RSS, Atom, social distribution, and automatic Event creation remain disabled.
          </div>
        </div>

        <main className="oe-main" aria-label="Event archive">
          <div className="oe-main-inner">
            {ALL_EVENTS.length === 0 ? (
              <div className="oe-empty">
                <h2>No Observatory Events recorded yet.</h2>
                <p>
                  The Event corpus infrastructure is active. OE-2026-0001 will be created manually only after a real Event-eligible Observatory mutation occurs.
                </p>
              </div>
            ) : (
              <div className="oe-list">
                {ALL_EVENTS.map((event) => (
                  <EventCard key={event.eventId} event={event} />
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
      <SiteFooter />
    </>
  );
}
