/**
 * Downloads any site photo listed in lib/photos.mjs that is missing from
 * /public/photos. Runs before `dev` and `build`. Never fails the build: if a
 * download does not work, the page shows the labelled placeholder instead.
 */
import { mkdir, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { photos } = await import(new URL('../lib/photos.mjs', import.meta.url));

await mkdir(path.join(root, 'public', 'photos'), { recursive: true });
let fetched = 0;
let failed = 0;

for (const [key, p] of Object.entries(photos)) {
  const dest = path.join(root, 'public', p.file);
  try {
    await access(dest);
    continue; // already there
  } catch {}
  if (!p.source) continue;
  try {
    const res = await fetch(p.source);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await writeFile(dest, Buffer.from(await res.arrayBuffer()));
    fetched++;
  } catch (err) {
    failed++;
    console.warn(`[photos] could not download "${key}": ${err.message}`);
  }
}
if (fetched || failed) console.log(`[photos] downloaded ${fetched}, failed ${failed}`);
