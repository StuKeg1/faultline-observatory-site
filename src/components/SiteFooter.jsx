import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="site-footer" role="contentinfo">
      <span className="site-footer-left">Faultline Observatory</span>
      <span>Observation Before Interpretation</span>
      <nav className="site-footer-guides" aria-label="Guides navigation">
        <Link to="/guides">Guides</Link>
        <Link to="/guides/how-to-read">How to Read a Frontier Record</Link>
        <Link to="/guides/using-with-claude">Using with Claude Desktop</Link>
      </nav>
    </footer>
  );
}
