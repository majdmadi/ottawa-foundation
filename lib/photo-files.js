import fs from 'node:fs';
import path from 'node:path';
import { photos } from './photos.mjs';

/**
 * Server-only helper: returns the photo entry if its file exists in /public,
 * otherwise null (so the page falls back to a labelled placeholder rather than
 * a broken image).
 */
export function getPhoto(key) {
  const p = photos[key];
  if (!p) return null;
  const onDisk = fs.existsSync(path.join(process.cwd(), 'public', p.file));
  return onDisk ? p : null;
}
