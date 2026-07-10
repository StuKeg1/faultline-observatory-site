import { useEffect, useState } from "react";
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

const NAV_ITEMS = [
  { to: "/", label: "Observatory", end: true },
  { to: "/the-record", label: "The Record" },
  { to: "/programmes", label: "Programmes" },
  { to: "/notes", label: "Notes" },
  { to: "/methodology", label: "Methodology" },
  { to: "/about", label: "About" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  // Prevent the page from scrolling behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <nav id="site-nav" role="navigation" aria-label="Site navigation">
      <Link to="/" className="nav-logo" aria-label="Faultline Observatory home">
        <MarkB />
      </Link>

      <div className="nav-links">
        {NAV_ITEMS.map(({ to, label, end }) => (
          <NavLink key={to} to={to} end={end} className={({ isActive }) => isActive ? "active" : ""}>
            {label}
          </NavLink>
        ))}
      </div>

      <button
        type="button"
        className={`nav-toggle${open ? " is-open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
      </button>

      <div
        id="mobile-nav-panel"
        className={`nav-mobile-panel${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="nav-mobile-links">
          {NAV_ITEMS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => isActive ? "active" : ""}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
