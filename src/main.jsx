import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./styles/tokens.css";
import "./styles/design-tokens.css";
import "./styles/global.css";
import App from "./App.jsx";

const container = document.getElementById("root");

const tree = (
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);

// Frontier Record and Programme Note routes are prerendered to static HTML at
// build time (scripts/prerender.js), so the mount point already holds real
// markup on those pages and must be hydrated rather than overwritten. Every
// other route still ships as an empty shell and is mounted normally.
if (container.firstChild) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
