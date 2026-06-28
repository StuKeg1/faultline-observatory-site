import { Link, NavLink } from "react-router-dom";
import "./SiteNav.css";

// Mark B SVG — ported from prototype nav
function MarkB() {
  return (
    <svg viewBox="0 0 420 100" height="28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g transform="translate(8, 10) scale(0.5)">
        <rect x="32"  y="22"  width="48" height="58" fill="#f5f3ec"/>
        <rect x="80"  y="80"  width="48" height="56" fill="#f5f3ec"/>
        <circle cx="80" cy="80" r="58" stroke="#f5f3ec" strokeWidth="2.2"/>
        <line x1="16" y1="80" x2="80"  y2="80" stroke="#f5f3ec" strokeWidth="2.2"/>
        <line x1="80" y1="80" x2="80"  y2="68" stroke="#f5f3ec" strokeWidth="2.2"/>
        <line x1="80" y1="68" x2="148" y2="68" stroke="#f5f3ec" strokeWidth="2.2"/>
      </g>
      <line x1="106" y1="18" x2="106" y2="82" stroke="#f5f3ec" strokeWidth="1" opacity="0.2"/>
      <text x="122" y="50" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontWeight="700" fontSize="28" letterSpacing="-0.5" fill="#f5f3ec">FAULTLINE</text>
      <text x="122" y="74" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontWeight="700" fontSize="16" letterSpacing="4" fill="#f5f3ec">OBSERVATORY</text>
    </svg>
  );
}

export default function SiteNav() {
  return (
    <nav id="site-nav" role="navigation" aria-label="Site navigation">
      <Link to="/" className="nav-logo" aria-label="Faultline Observatory home">
        <MarkB />
      </Link>
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Observatory</NavLink>
        <NavLink to="/the-record" className={({ isActive }) => isActive ? "active" : ""}>The Record</NavLink>
        <NavLink to="/programmes" className={({ isActive }) => isActive ? "active" : ""}>Programmes</NavLink>
        <NavLink to="/notes" className={({ isActive }) => isActive ? "active" : ""}>Notes</NavLink>
        <NavLink to="/methodology" className={({ isActive }) => isActive ? "active" : ""}>Methodology</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
      </div>
      <div className="nav-right">
        <span className="nav-search-link">
          <NavLink to="/search">Search</NavLink>
        </span>
      </div>
    </nav>
  );
}
