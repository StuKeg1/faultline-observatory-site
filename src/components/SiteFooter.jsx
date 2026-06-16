import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="site-footer" role="contentinfo">
      <nav className="site-footer-nav" aria-label="Site navigation">
        <Link to="/the-record/">Frontier Record</Link>
        <Link to="/notes/">Notes</Link>
        <Link to="/methodology/">Methodology</Link>
        <Link to="/about/">About</Link>
      </nav>

      <nav className="site-footer-guides" aria-label="Guides navigation">
        <span className="site-footer-guides-label">Guides</span>
        <Link to="/guides/how-to-read">How to Read a Frontier Record</Link>
        <Link to="/guides/mcp-access">MCP Access</Link>
      </nav>

      <div className="site-footer-identity">
        <span className="site-footer-name">Faultline Observatory</span>
        <span className="site-footer-tagline">Observation Before Interpretation</span>
      </div>
    </footer>
  );
}
