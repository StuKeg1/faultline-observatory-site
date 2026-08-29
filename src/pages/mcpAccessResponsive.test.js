import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const css = readFileSync(new URL("./guides/MCPAccess.css", import.meta.url), "utf8");

function rule(selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return css.match(new RegExp(`${escaped}\\s*\\{([^}]*)\\}`))?.[1] ?? "";
}

test("MCP client navigation contains horizontal overflow", () => {
  const tabs = rule(".mcp-client-tabs");
  const nav = rule(".mcp-tab-nav");

  assert.match(tabs, /min-width:\s*0/);
  assert.match(tabs, /max-width:\s*100%/);
  assert.match(nav, /max-width:\s*100%/);
  assert.match(nav, /overflow-x:\s*auto/);
});

test("MCP configuration panels cannot determine document width", () => {
  const panel = rule(".mcp-tab-panel");
  const code = rule(".mcp-code-block");

  assert.match(panel, /min-width:\s*0/);
  assert.match(panel, /max-width:\s*100%/);
  assert.match(code, /min-width:\s*0/);
  assert.match(code, /max-width:\s*100%/);
  assert.match(code, /overflow-x:\s*auto/);
  assert.doesNotMatch(css, /(?:html|body)[^{]*\{[^}]*overflow-x:\s*hidden/s);
});
