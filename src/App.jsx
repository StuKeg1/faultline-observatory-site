import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import SiteNav from "./components/SiteNav.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

// ─── EAGER ───────────────────────────────────────────────────

// Homepage and shared layout load immediately.
// Stubs are small — no benefit splitting them.
import Home from "./pages/Home.jsx";
import { Programmes, Methodology, Search, HowToRead, GuidesIndex } from "./pages/Stubs.jsx";
import About from "./pages/About.jsx";

// ─── LAZY ────────────────────────────────────────────────────

// Heavy pages split into separate chunks.
// Vite detects dynamic import() and splits automatically.
const TheRecord = lazy(() => import("./pages/TheRecord.jsx"));
const FrontierRecord = lazy(() => import("./pages/FrontierRecord.jsx"));
const Programme = lazy(() => import("./pages/Programme.jsx"));
const NotesIndex = lazy(() => import("./pages/Notes.jsx").then(m => ({ default: m.NotesIndex })));
const NoteDetail = lazy(() => import("./pages/Notes.jsx").then(m => ({ default: m.NoteDetail })));
const EventsIndex = lazy(() => import("./pages/Events.jsx"));
const EventDetail = lazy(() => import("./pages/Events.jsx").then(m => ({ default: m.EventDetail })));
const TokenPreview = lazy(() => import("./pages/TokenPreview.jsx"));
const InstitutionalHealth = lazy(() => import("./pages/InstitutionalHealth.jsx"));
const MCPAccess = lazy(() => import("./pages/guides/MCPAccess.jsx"));
const Origins = lazy(() => import("./pages/Origins.jsx"));

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

// ─── RECORD REDIRECT ─────────────────────────────────────────
// Redirects legacy FR-MF-* record URLs to FR-AM-* equivalents.
// Release 006 — Advanced Materials adoption (2026-06-18).
function RecordRedirect() {
 const { recordId } = useParams();

 if (recordId?.toLowerCase().startsWith("fr-mf-")) {
 const newId = recordId.replace(/^fr-mf-/i, "fr-am-");
 return <Navigate to={`/the-record/${newId}`} replace />;
 }

 return (
 <ErrorBoundary context="record"><FrontierRecord /></ErrorBoundary>
 );
}

export default function App() {
 return (
 <BrowserRouter>
 <ScrollToTop />
 <SiteNav />
 <Suspense fallback={null}>
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/the-record" element={
 <ErrorBoundary context="archive"><TheRecord /></ErrorBoundary>
 } />
 {/* Release 006 — FR-MF-* → FR-AM-* redirect handled in RecordRedirect */}
 <Route path="/the-record/:recordId" element={<RecordRedirect />} />
 <Route path="/the-record/:recordId/" element={<RecordRedirect />} />
 <Route path="/events" element={
 <ErrorBoundary context="events"><EventsIndex /></ErrorBoundary>
 } />
 <Route path="/events/:eventId" element={
 <ErrorBoundary context="event"><EventDetail /></ErrorBoundary>
 } />
 <Route path="/programmes" element={<Programmes />} />
 {/* Release 006 — /programmes/prog-mf → /programmes/prog-am */}
 <Route path="/programmes/prog-mf" element={<Navigate to="/programmes/prog-am" replace />} />
 <Route path="/programmes/:programmeId" element={<Programme />} />
 <Route path="/methodology" element={<Methodology />} />
 <Route path="/about" element={<About />} />
 <Route path="/about/origins" element={<Origins />} />
 <Route path="/search" element={<Search />} />
 <Route path="/notes" element={<NotesIndex />} />
 <Route path="/notes/:noteId" element={<NoteDetail />} />
 <Route path="/how-to-read" element={<HowToRead />} />
 <Route path="/guides" element={<GuidesIndex />} />
 <Route path="/guides/how-to-read" element={<HowToRead />} />
 <Route path="/guides/mcp-access" element={<MCPAccess />} />
 <Route path="/institutional-health" element={<InstitutionalHealth />} />
 <Route path="/tokens" element={<TokenPreview />} />
 <Route path="*" element={<NotFound />} />
 </Routes>
 </Suspense>
 </BrowserRouter>
 );
}
