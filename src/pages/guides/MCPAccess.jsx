import { useState } from "react";
import { Link } from "react-router-dom";
import SiteFooter from "../../components/SiteFooter.jsx";
import PageMeta from "../../components/PageMeta.jsx";
import "./MCPAccess.css";

const TABS = [
  {
    id: "codex",
    label: "Codex",
    codeLabel: "config.toml",
    code: `[mcp_servers.faultline]\nurl = "https://mcp.faultlinewatch.com/mcp"`,
  },
  {
    id: "claude",
    label: "Claude Desktop",
    codeLabel: "claude_desktop_config.json",
    code: `{\n  "mcpServers": {\n    "faultline": {\n      "command": "npx",\n      "args": ["mcp-remote", "https://mcp.faultlinewatch.com/mcp"]\n    }\n  }\n}`,
  },
  {
    id: "inspector",
    label: "MCP Inspector",
    codeLabel: "MCP Inspector",
    code: `# Transport Type: Streamable HTTP\n# URL:\nhttps://mcp.faultlinewatch.com/mcp`,
  },
];

export default function MCPAccess() {
  const [activeTab, setActiveTab] = useState("codex");

  return (
    <>
      <PageMeta
        title="MCP Access — Faultline Observatory"
        description="Connect an AI assistant to the Faultline Observatory and query claim status, lifecycle history, and cross-record patterns in plain language."
        path="/guides/mcp-access/"
      />
      <div className="mcp-page">
        <main className="mcp-main">

          {/* Breadcrumb */}
          <div className="mcp-breadcrumb">
            <Link to="/">← Observatory</Link>
            {" › "}
            <Link to="/guides">Guides</Link>
            {" › "}
            <span>MCP Access</span>
          </div>

          {/* Page header */}
          <p className="mcp-eyebrow">Guide — Machine Interface</p>
          <h1 className="mcp-title">Using the Observatory with AI Assistants</h1>
          <p className="mcp-intro">
            Ask questions across the entire Observatory instead of reading records one
            at a time. Connect an AI assistant and query claim status, lifecycle history,
            and cross-record patterns in plain language.
          </p>

          {/* At a glance */}
          <div className="mcp-glance-card">
            <div className="mcp-glance-item">
              <div className="mcp-glance-label">Endpoint</div>
              <div className="mcp-glance-value">
                <code>mcp.faultlinewatch.com/mcp</code>
              </div>
            </div>
            <div className="mcp-glance-item">
              <div className="mcp-glance-label">Status</div>
              <div className="mcp-glance-value">
                <span className="mcp-status-dot" />Live
              </div>
            </div>
            <div className="mcp-glance-item">
              <div className="mcp-glance-label">Access</div>
              <div className="mcp-glance-value">Read-only</div>
            </div>
            <div className="mcp-glance-item">
              <div className="mcp-glance-label">Compatible clients</div>
              <div className="mcp-glance-value">Codex, Claude Desktop, MCP Inspector, and other MCP-compatible clients</div>
            </div>
            <div className="mcp-glance-item mcp-glance-full">
              <div className="mcp-glance-label">Current capabilities</div>
              <div className="mcp-glance-value">Claim status lookup · FCIF lifecycle · Case listing · Observatory metadata</div>
            </div>
          </div>

          {/* Connecting */}
          <div className="mcp-section">
            <h2 className="mcp-section-title">Connecting your client</h2>
            <p>
              Add the Observatory endpoint to your MCP-compatible client. Configuration
              format varies by client — examples for common clients are below.
            </p>

            <div className="mcp-client-tabs">
              <div className="mcp-tab-nav" role="tablist">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    className={`mcp-tab-btn${activeTab === tab.id ? " active" : ""}`}
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              {TABS.map((tab) => (
                <div
                  key={tab.id}
                  className={`mcp-tab-panel${activeTab === tab.id ? " active" : ""}`}
                  role="tabpanel"
                  hidden={activeTab !== tab.id}
                >
                  <div className="mcp-code-block">
                    <div className="mcp-code-label">{tab.codeLabel}</div>
                    <pre>{tab.code}</pre>
                  </div>
                </div>
              ))}
            </div>

            <p>
              Access is public and read-only. No API key, account, or authentication step
              is currently required. Most users can connect directly using the endpoint
              shown above. Reasonable rate limits may apply to protect service availability,
              particularly for large cross-record queries or automated loops.
            </p>
            <p>
              Once connected, your client will discover the Observatory tools automatically.
              Current tools expose capabilities such as record listing, claim lookup,
              lifecycle inspection, and Observatory metadata retrieval. The exact tool names
              displayed will depend on the MCP client you are using.
            </p>
            <p>
              After adding the endpoint, restart your client, confirm that the Faultline
              Observatory tools appear in the available tool list, and begin a new chat
              session. Start with a simple query to verify the connection before moving to
              broader corpus-level analysis.
            </p>

            <p className="mcp-try-label">Try</p>
            <ul className="mcp-query-list">
              <li>What is the current FCIF status of LK-99?</li>
              <li>Which claims are currently invalidated?</li>
              <li>Explain the FCIF lifecycle stages.</li>
              <li>List all tracked cases in Quantum Computing.</li>
            </ul>
          </div>

          {/* Cross-record analysis */}
          <div className="mcp-section">
            <h2 className="mcp-section-title">Cross-record analysis</h2>
            <p>
              Most visitors use the website to read individual Frontier Records. The MCP
              connection enables a different mode of interaction. Instead of opening one
              record at a time, an AI assistant can query Observatory tools directly and
              analyse information across the corpus.
            </p>
            <p>For example:</p>
            <ul className="mcp-cross-query-list">
              <li>Which claims have accumulated the strongest contradictory evidence?</li>
              <li>Which records have remained stable for long periods without reassessment?</li>
              <li>Which programmes contain the largest number of unresolved open questions?</li>
              <li>How does evidentiary behaviour differ between programmes?</li>
            </ul>
            <p style={{ marginTop: "1rem" }}>
              Questions like these require looking across many records simultaneously.
              The MCP connection makes that possible.
            </p>
          </div>

          {/* What the records do not do */}
          <div className="mcp-section">
            <h2 className="mcp-section-title">What the records do not do</h2>
            <div className="mcp-constraints-box">
              <div className="mcp-constraint-item">
                <span className="mcp-constraint-icon">not predictive</span>
                <span className="mcp-constraint-text">
                  The Observatory records evidence and assessment history. It does not predict
                  outcomes. A claim's current state describes its present evidentiary position,
                  not its future.
                </span>
              </div>
              <div className="mcp-constraint-item">
                <span className="mcp-constraint-icon">not exhaustive</span>
                <span className="mcp-constraint-text">
                  The Observatory is selective rather than exhaustive. Absence from the corpus
                  should not be interpreted as evidence for or against a claim.
                </span>
              </div>
              <div className="mcp-constraint-item">
                <span className="mcp-constraint-icon">read-only</span>
                <span className="mcp-constraint-text">
                  The public machine interface is read-only. Neither AI assistants nor connected
                  clients can modify Observatory records through the MCP connection.
                </span>
              </div>
            </div>
          </div>

          {/* Page footer */}
          <div className="mcp-page-footer">
            <span className="mcp-footer-note">Route: /guides/mcp-access</span>
            <Link to="/guides" className="mcp-footer-link">← All guides</Link>
          </div>

        </main>
      </div>
      <SiteFooter />
    </>
  );
}
