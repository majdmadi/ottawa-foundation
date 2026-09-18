import { getPhoto } from './photo-files';

/**
 * Project gallery.
 *
 * These four entries are structured stand-ins written from the service list —
 * realistic job types with the photo slots labelled, so the client can drop his
 * own before/after shots straight in. Swap the text for the real job details
 * before launch; do not publish an invented job as a real one.
 *
 * Photos: `photoKey` points at the <key>-before / <key>-after entries in
 * lib/photos.mjs (AI-generated illustrations for now). For a real job, put
 * the two photos in /public/photos, add them to lib/photos.mjs, and delete
 * `sample: true` so the 'Sample job' tag disappears.
 */
export const projects = [
  {
    sample: true,
    photoKey: 'wall',
    title: 'Leaking basement wall, rear elevation',
    service: 'Foundation Repair',
    area: 'Barrhaven',
    duration: '2 days',
    body: 'Water tracking down the back wall every spring. Excavated to the footing, repaired the crack, rebuilt the membrane and drainage, and regraded so surface water runs away from the house.',
    beforeShot: 'The wet interior wall, staining visible, before any work',
    afterShot: 'Same wall dry, or the exterior wall sealed and backfilled',
  },
  {
    sample: true,
    photoKey: 'steps',
    title: 'Front steps rebuilt after ten winters',
    service: 'Concrete Cracks',
    area: 'Orléans',
    duration: '1 day',
    body: 'Spalled treads and a cracked cheek wall. Broken concrete removed, formed and re-poured, finished to match the walkway.',
    beforeShot: 'Crumbling steps, close enough to see the damage clearly',
    afterShot: 'Finished steps from the same angle and distance',
  },
  {
    sample: true,
    photoKey: 'mold',
    title: 'Mold behind a finished basement wall',
    service: 'Mold Remediation',
    area: 'Kanata',
    duration: '3 days',
    body: 'Musty smell traced to a failed seal at grade. Affected drywall and framing removed under containment, surfaces treated, area dried, and the foundation leak sealed so it stays gone.',
    beforeShot: 'Growth on the framing or drywall once opened up',
    afterShot: 'Clean, dried and treated cavity ready to close back up',
  },
  {
    sample: true,
    photoKey: 'window',
    title: 'New egress window for a basement bedroom',
    service: 'Openings',
    area: 'Ottawa',
    duration: '2 days',
    body: 'Opening cut and supported in a poured wall, lintel and buck installed, window well and drainage added, exterior waterproofed and graded.',
    beforeShot: 'The blank foundation wall, marked out',
    afterShot: 'The finished window from outside, well and grading visible',
  },
];


/** Server-side: attach before/after image paths that exist on disk. */
export function withPhotos(list) {
  return list.map((p) => {
    const before = p.photoKey && getPhoto(`${p.photoKey}-before`);
    const after = p.photoKey && getPhoto(`${p.photoKey}-after`);
    return before && after ? { ...p, before: before.file, after: after.file } : p;
  });
}
