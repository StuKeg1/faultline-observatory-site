import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import SiteNav from "./components/SiteNav.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

// ─── EAGER ───────────────────────────────────────────────────
// Homepage and shared layout load immediately.
// Stubs are small — no benefit splitting them.
import Home from "./pages/Home.jsx";
import { Programmes, Methodology, About, Search, HowToRead, GuidesIndex, UsingWithClaude } from "./pages/Stubs.jsx";

// ─── LAZY ────────────────────────────────────────────────────
// Heavy pages split into separate chunks.
// Vite detects dynamic import() and splits automatically.
const TheRecord     = lazy(() => import("./pages/TheRecord.jsx"));
const FrontierRecord = lazy(() => import("./pages/FrontierRecord.jsx"));
const Programme     = lazy(() => import("./pages/Programme.jsx"));
const NotesIndex    = lazy(() => import("./pages/Notes.jsx").then(m => ({ default: m.NotesIndex })));
const NoteDetail    = lazy(() => import("./pages/Notes.jsx").then(m => ({ default: m.NoteDetail })));
const EventsIndex   = lazy(() => import("./pages/Events.jsx"));
const EventDetail   = lazy(() => import("./pages/Events.jsx").then(m => ({ default: m.EventDetail })));
const TokenPreview  = lazy(() => import("./pages/TokenPreview.jsx"));
const InstitutionalHealth = lazy(() => import("./pages/InstitutionalHealth.jsx"));

function NotFound() {
  return (
    <>
      <div style={{ padding: "4rem 2rem", fontFamily: "var(--serif)", color: "var(--ink-mid)", textAlign: "center" }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>404 — Not found</div>
        <p>This record does not exist. <Link to="/" style={{ color: "var(--accent)" }}>Return to the Observatory.</Link></p>
      </div>
      <SiteFooter />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SiteNav />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/"                          element={<Home />} />
          <Route path="/the-record" element={
            <ErrorBoundary context="archive"><TheRecord /></ErrorBoundary>
          } />
          <Route path="/the-record/:recordId" element={
            <ErrorBoundary context="record"><FrontierRecord /></ErrorBoundary>
          } />
          <Route path="/the-record/:recordId/" element={
            <ErrorBoundary context="record"><FrontierRecord /></ErrorBoundary>
          } />
          <Route path="/events" element={
            <ErrorBoundary context="events"><EventsIndex /></ErrorBoundary>
          } />
          <Route path="/events/:eventId" element={
            <ErrorBoundary context="event"><EventDetail /></ErrorBoundary>
          } />
          <Route path="/programmes"               element={<Programmes />} />
          <Route path="/programmes/:programmeId"  element={<Programme />} />
          <Route path="/methodology"              element={<Methodology />} />
          <Route path="/about"                    element={<About />} />
          <Route path="/search"                   element={<Search />} />
          <Route path="/notes"                    element={<NotesIndex />} />
          <Route path="/notes/:noteId"            element={<NoteDetail />} />
          <Route path="/how-to-read"              element={<HowToRead />} />
          <Route path="/guides"                   element={<GuidesIndex />} />
          <Route path="/guides/how-to-read"       element={<HowToRead />} />
          <Route path="/guides/using-with-claude" element={<UsingWithClaude />} />
          <Route path="/institutional-health"     element={<InstitutionalHealth />} />
          <Route path="/tokens"                   element={<TokenPreview />} />
          <Route path="*"                         element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
