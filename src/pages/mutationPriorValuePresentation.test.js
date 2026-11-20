/** Presentation contract for all shared Frontier Record mutation logs. */
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const css = readFileSync(new URL("./FrontierRecord.css", import.meta.url), "utf8");
const page = readFileSync(new URL("./FrontierRecord.jsx", import.meta.url), "utf8");

test("prior mutation values remain readable historical text across records", () => {
  assert.match(page, /<td className="mut-from">\{m\.from\}<\/td>/);
  const rule = css.match(/\.mutation-table td\.mut-from\s*\{([^}]*)\}/)?.[1];
  assert.ok(rule, "shared prior-value class must be styled");
  assert.doesNotMatch(rule, /text-decoration\s*:\s*line-through/);
  assert.match(rule, /color\s*:\s*var\(--ink-mid\)/);
});
test("mutation current-value rendering and data sources are unchanged", () => {
  assert.match(page, /<td className="mut-to">\{m\.to\}/);
  assert.match(page, /record\.mutationLog\.map/);
  assert.match(css, /\.mutation-table td\.mut-to\s*\{\s*color:\s*var\(--ink\);\s*\}/);
});
