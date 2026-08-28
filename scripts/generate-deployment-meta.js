import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

function gitValue(args) {
  try {
    return execFileSync("git", args, { encoding: "utf8" }).trim();
  } catch {
    return "";
  }
}

const commit =
  process.env.CF_PAGES_COMMIT_SHA ||
  process.env.GITHUB_SHA ||
  gitValue(["rev-parse", "HEAD"]);

if (!commit) {
  throw new Error("Unable to determine deployment commit SHA");
}

const branch =
  process.env.CF_PAGES_BRANCH ||
  process.env.GITHUB_REF_NAME ||
  gitValue(["rev-parse", "--abbrev-ref", "HEAD"]) ||
  "unknown";

const payload = {
  commit,
  branch,
  builtAt: new Date().toISOString(),
};

const publicDir = resolve("public");
mkdirSync(publicDir, { recursive: true });
writeFileSync(
  resolve(publicDir, "deployment.json"),
  `${JSON.stringify(payload, null, 2)}\n`,
  "utf8",
);

console.log(`Deployment fingerprint: ${commit} (${branch})`);
