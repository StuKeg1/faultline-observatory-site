// Release-specific audit, not a permanent snapshot gate for future record edits.
// Run from the repository root. Optional argument: directory of archived HTML sources.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { ALL_RECORDS } from '../src/data/corpus.js';

const receipt = JSON.parse(readFileSync('docs/reviews/render-pilot-content-restoration.json', 'utf8'));
const hash = text => createHash('sha256').update(text).digest('hex');
const clean = text => text.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
  .replace(/&#39;/g, "'").replace(/\s+/g, ' ').trim();
const sourceDir = process.argv[2];
let mechanisms = 0, attractors = 0, lineage = 0;

for (const record of ALL_RECORDS) {
  const baseText = execFileSync('git', ['show', `${receipt.baseCommit}:src/data/records/${record.id}.js`], { encoding: 'utf8' });
  const baseModule = await import(`data:text/javascript;base64,${Buffer.from(baseText).toString('base64')}`);
  const baseline = baseModule[record.id.replaceAll('-', '_')];
  assert.ok(baseline, `Missing baseline export: ${record.id}`);
  const restored = structuredClone(record);
  const entry = receipt.records.find(item => item.recordId === record.id);
  if (entry) {
    let html;
    if (sourceDir) {
      html = readFileSync(join(sourceDir, entry.source.fileName), 'utf8');
      assert.equal(hash(html), entry.source.retrievedTextSha256, `${record.id}: source snapshot hash`);
    }
    for (const field of entry.fields) {
      const match = /^(mechanisms|lineage\.items)\[(\d+)\]\.(description|text)$/.exec(field.path);
      assert.ok(match, `Unexpected restoration path: ${field.path}`);
      const [, group, index, key] = match;
      const isMechanism = group === 'mechanisms';
      const beforeItem = isMechanism ? baseline.mechanisms[index] : baseline.lineage.items[index];
      const afterItem = isMechanism ? restored.mechanisms[index] : restored.lineage.items[index];
      const before = beforeItem[key], after = afterItem[key];
      assert.equal(afterItem.id ?? afterItem.year, field.id);
      assert.equal(before.length, field.beforeLength);
      assert.equal(after.length, field.afterLength);
      assert.equal(hash(before), field.beforeSha256);
      assert.equal(hash(after), field.afterSha256);
      if (!field.identifierMigration) assert.equal(hash(after), field.normalizedSourceSha256);
      assert.equal(before.length, isMechanism ? 400 : 300);
      assert.ok(after.length > before.length && after.startsWith(before), `${record.id} ${field.id}: exact prefix restoration`);
      if (html) {
        const blocks = [...html.matchAll(isMechanism
          ? /<div class="mech-block">([\s\S]*?)<\/div>\s*<\/div>/g
          : /<div class="lineage-item">([\s\S]*?)<\/div>\s*<\/div>/g)];
        const block = blocks.find(item => {
          const id = isMechanism ? item[0].match(/class="mech-id">([^<]+)/)?.[1].split('·')[0].trim()
            : clean(item[0].match(/class="lin-year">([^<]+)/)?.[1] ?? '');
          return id === field.id;
        });
        assert.ok(block, `${record.id} ${field.id}: source block exists`);
        const content = block[0].match(isMechanism ? /class="mech-text">([\s\S]*?)<\/div>/ : /class="lin-text">([\s\S]*?)<\/div>/)?.[1];
        const sourceText = clean(content);
        assert.equal(hash(sourceText), field.normalizedSourceSha256);
        const normalized = sourceText.replace(/FR-MF-/g, 'FR-AM-');
        assert.equal(sourceText !== normalized, field.identifierMigration);
        assert.equal(after, normalized, `${record.id} ${field.id}: source text matches`);
      }
      if (isMechanism) { mechanisms++; if (afterItem.type === 'ATTRACTOR') attractors++; }
      else lineage++;
      afterItem[key] = before;
    }
    assert.equal(restored.mutationLog[0].id, entry.mutationId);
    assert.equal(restored.mutationLog[0].field, 'description_restored');
    assert.equal(restored.mutationLog[0].date, receipt.date);
    restored.mutationLog.shift();
  }
  assert.deepEqual(restored, baseline, `${record.id}: all other content and prior history preserved`);
}
for (const path of ['src/pages/FrontierRecord.jsx', 'src/pages/FrontierRecord.css']) {
  const baseline = execFileSync('git', ['show', `${receipt.baseCommit}:${path}`], { encoding: 'utf8' });
  assert.equal(readFileSync(path, 'utf8'), baseline, `${path}: pilot rendering unchanged`);
}
assert.equal(receipt.records.length, 22);
assert.equal(mechanisms, 73);
assert.equal(attractors, 18);
assert.equal(lineage, 19);
console.log(`PASS: ${ALL_RECORDS.length} records; ${mechanisms} mechanisms (${attractors} attractors), ${lineage} lineage restorations; protected content and renderer unchanged. Archived sources ${sourceDir ? 'verified' : 'not supplied; receipt hashes verified only'}.`);
