import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer-resources">
        <nav className="site-footer-nav" aria-label="Site navigation">
          <Link to="/public-record/">Explore the Public Record</Link>
          <Link to="/reading-room/">Reading Room</Link>
          <Link to="/the-record/">Records Directory</Link>
          <Link to="/evidence-trajectories/">Evidence Trajectories</Link>
          <Link to="/programmes/">Programmes</Link>
          <Link to="/methodology/">Methodology</Link>
          <Link to="/about/">About</Link>
          <Link to="/institutional-changelog/">Institutional Changelog</Link>
          <a href="mailto:hello@faultlinewatch.com">Contact</a>
          <a href="https://x.com/FaultlineWatch" target="_blank" rel="noreferrer">
            Official X account ↗
          </a>
        </nav>

        <nav className="site-footer-guides" aria-label="Guides navigation">
          <Link to="/guides/how-to-read">How to Read a Frontier Record</Link>
        </nav>

        <nav className="site-footer-mcp" aria-label="MCP Access">
          <Link to="/guides/mcp-access" className="site-footer-mcp-link">MCP Access</Link>
        </nav>
      </div>

      <div className="site-footer-identity">
        <span className="site-footer-name">Faultline Observatory</span>
        <span className="site-footer-tagline">Observation Before Interpretation</span>
      </div>
    </footer>
  );
}
