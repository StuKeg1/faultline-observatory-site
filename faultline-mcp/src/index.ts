/**
 * Faultline Observatory — Remote MCP Server
 * Uses WebStandardStreamableHTTPServerTransport directly from @modelcontextprotocol/sdk
 * Stateless mode — no Durable Objects, no agents package dependency
 */

import { McpServer }  from "@modelcontextprotocol/sdk/server/mcp.js";
import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { z }          from "zod";

export interface Env {}

// ---------------------------------------------------------------------------
// Static knowledge base
// ---------------------------------------------------------------------------

const LIFECYCLE_STAGES = [
  { stage: "Claimed",      description: "Original assertion made — no independent verification yet." },
  { stage: "Replicated",   description: "One or more independent groups have reproduced the result." },
  { stage: "Demonstrated", description: "Controlled demonstration with measurable outputs confirmed." },
  { stage: "Reinforced",   description: "Converging evidence from multiple independent lines." },
  { stage: "Contested",    description: "Credible challenges or failed replications are on record." },
  { stage: "Invalidated",  description: "Preponderance of evidence shows the original claim was wrong." },
  { stage: "Vindicated",   description: "Previously contested claim has been restored by later evidence." },
] as const;

type ClaimStage = typeof LIFECYCLE_STAGES[number]["stage"];

const CASES = [
  { id: "lk99", title: "LK-99 Room-Temperature Superconductor", domain: "Advanced Materials", status: "Invalidated" as ClaimStage, summary: "July 2023 claim of room-temperature superconductivity. Independent replication failed; impurity (Cu₂S) explains observed properties.", lastUpdated: "2025-01-01" },
  { id: "google-sycamore", title: "Google Sycamore Quantum Supremacy", domain: "Quantum Computing", status: "Contested" as ClaimStage, summary: "2019 claim of quantum supremacy. Chinese team simulated classically in hours (2022); quantum advantage domain remains debated.", lastUpdated: "2025-03-01" },
  { id: "cold-fusion", title: "Pons–Fleischmann Cold Fusion", domain: "Nuclear Physics", status: "Invalidated" as ClaimStage, summary: "1989 electrochemical fusion claim. Decades of failed replication; no reproducible excess heat from nuclear reactions.", lastUpdated: "2025-01-01" },
  { id: "autonomous-vehicles", title: "Level 5 Autonomous Vehicles (2020 promises)", domain: "AI / Robotics", status: "Contested" as ClaimStage, summary: "Multiple claims of full autonomy by 2020–2021. Geofenced L4 deployments exist (Waymo); general L5 undelivered.", lastUpdated: "2025-06-01" },
  { id: "microsoft-majorana", title: "Microsoft Majorana 1 Topological Qubit", domain: "Quantum Computing", status: "Contested" as ClaimStage, summary: "Feb 2025 announcement of first topological qubit. Independent verification pending; community notes historical retractions.", lastUpdated: "2025-06-09" },
];

const STATUS_NOTES: Record<ClaimStage, string> = {
  "Claimed":      "No independent verification on record. Treat as prior claim only.",
  "Replicated":   "Some independent support exists. Monitor for broader convergence.",
  "Demonstrated": "Controlled demonstrations confirmed. Deployment questions remain.",
  "Reinforced":   "Converging multi-source evidence. Update probability upward.",
  "Contested":    "Credible counter-evidence exists. Not settled in either direction.",
  "Invalidated":  "Preponderance of evidence is negative. Revisit prior deployments.",
  "Vindicated":   "Previously contested — now restored. Note the contested interval.",
};

// ---------------------------------------------------------------------------
// Build MCP server with tools
// ---------------------------------------------------------------------------

function buildServer(): McpServer {
  const server = new McpServer({ name: "Faultline Observatory", version: "1.0.0" });

  server.tool("faultline_about", "Describe the Faultline Observatory and this MCP server.", {},
    async () => ({ content: [{ type: "text" as const, text:
      "# Faultline Observatory MCP\n\nApplies the Frontier Claim Intelligence Framework (FCIF) to track technology claim lifecycles.\n\n## Tools\n- fcif_list_cases — all tracked cases\n- fcif_claim_status — full record for a case ID\n- fcif_lifecycle_stages — the 7-stage taxonomy\n\n## Lifecycle stages\nClaimed → Replicated → Demonstrated → Reinforced → Contested → Invalidated / Vindicated"
    }] })
  );

  server.tool("fcif_lifecycle_stages", "Return the FCIF claim lifecycle taxonomy with all stage definitions.", {},
    async () => ({ content: [{ type: "text" as const, text:
      LIFECYCLE_STAGES.map((s, i) => `**${i+1}. ${s.stage}**\n${s.description}`).join("\n\n")
    }] })
  );

  server.tool("fcif_list_cases", "List all FCIF cases tracked by the Faultline Observatory.",
    {
      domain: z.string().optional().describe("Filter by domain e.g. 'Quantum Computing'"),
      status: z.enum(["Claimed","Replicated","Demonstrated","Reinforced","Contested","Invalidated","Vindicated"]).optional().describe("Filter by lifecycle status"),
    },
    async ({ domain, status }) => {
      let results = CASES;
      if (domain) results = results.filter(c => c.domain.toLowerCase().includes(domain.toLowerCase()));
      if (status) results = results.filter(c => c.status === status);
      const text = results.length === 0 ? "No cases match." :
        `## FCIF Cases (${results.length})\n\n` + results.map(c =>
          `### ${c.title} [\`${c.id}\`]\n- **Domain:** ${c.domain}\n- **Status:** ${c.status}\n- **Updated:** ${c.lastUpdated}\n- ${c.summary}`
        ).join("\n\n");
      return { content: [{ type: "text" as const, text }] };
    }
  );

  server.tool("fcif_claim_status", "Return the full FCIF record for a specific case ID.",
    { id: z.string().describe("Case ID e.g. 'lk99', 'google-sycamore', 'microsoft-majorana'") },
    async ({ id }) => {
      const r = CASES.find(c => c.id === id.toLowerCase().trim());
      if (!r) return {
        content: [{ type: "text" as const, text: `Case '${id}' not found. Valid IDs: ${CASES.map(c => c.id).join(", ")}` }],
        isError: true,
      };
      return { content: [{ type: "text" as const, text:
        `## ${r.title}\n**ID:** \`${r.id}\`\n**Domain:** ${r.domain}\n**Status:** ${r.status}\n**Updated:** ${r.lastUpdated}\n\n### Summary\n${r.summary}\n\n### Epistemic note\n${STATUS_NOTES[r.status]}`
      }] };
    }
  );

  return server;
}

// ---------------------------------------------------------------------------
// Worker fetch handler — stateless, new transport per request
// ---------------------------------------------------------------------------

export default {
  async fetch(request: Request, _env: Env, _ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // Health check
    if (url.pathname === "/health") {
      return new Response(JSON.stringify({ status: "ok", server: "faultline-mcp" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // Info endpoint
    if (url.pathname === "/" || url.pathname === "") {
      return new Response(JSON.stringify({
        server: "Faultline Observatory MCP",
        endpoint: "/mcp",
        transport: "Streamable HTTP",
      }), { headers: { "Content-Type": "application/json" } });
    }

    // MCP endpoint — stateless: fresh server + transport per request
    if (url.pathname === "/mcp") {
      const server = buildServer();
      const transport = new WebStandardStreamableHTTPServerTransport({
        sessionIdGenerator: undefined, // stateless mode
      });
      await server.connect(transport);
      const response = await transport.handleRequest(request);
      return response;
    }

    return new Response("Not found", { status: 404 });
  },
} satisfies ExportedHandler<Env>;
