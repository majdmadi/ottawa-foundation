/**
 * Site photography.
 *
 * These are AI-generated illustrative images (Higgsfield, GPT Image 2.5,
 * Sept 2026) used until the client supplies real job photos. They are NOT
 * photos of Stoutwall's own work, so:
 *   - project before/after pairs stay tagged "Sample job" (lib/projects.js)
 *   - the team photo on /about is labelled "Illustrative photo"
 * Replace each file in /public/photos with a real photo of the same name
 * (or change `file` below) as soon as the client sends them.
 *
 * `source` is where scripts/fetch-photos.mjs downloads each file from when it
 * is missing. That script runs automatically before `npm run dev` and
 * `npm run build` (including on Netlify), so the files end up in the repo
 * the first time either runs on a machine with internet access.
 */
const B = 'https://d8j0ntlcm91z4.cloudfront.net/user_3IwEGWjr7mj7lC8rRNeRtj1XtzK/hf_20260918_';

export const photos = {
  hero: {
    file: '/photos/hero-foundation-waterproofing.webp',
    source: B + '233557_ea43fdac-2961-44a7-8e81-26ee466e9144_min.webp',
    alt: 'Worker applying waterproofing membrane to an excavated poured-concrete foundation wall',
    width: 1792,
    height: 2240,
  },
  'foundation-repair': {
    file: '/photos/service-foundation-repair.webp',
    source: B + '233557_1f5d357f-2e27-4c25-be6b-6990c33b6416_min.webp',
    alt: 'Excavated foundation wall sealed with membrane and drainage board, new weeping tile at the footing',
  },
  'concrete-repair': {
    file: '/photos/service-crack-injection.webp',
    source: B + '233557_d62d20e4-2f77-4184-ab56-9b14e2c5e1c5_min.webp',
    alt: 'Crack injection ports along a sealed crack in a basement wall',
  },
  'concrete-cutting': {
    file: '/photos/service-concrete-cutting.webp',
    source: B + '233557_a3dcede5-0dca-4b51-a926-43747f972047_min.webp',
    alt: 'Worker in safety gear wet-cutting a new window opening in a concrete foundation wall',
  },
  'mold-removal': {
    file: '/photos/service-mold-remediation.webp',
    source: B + '233557_5404a089-4f70-4f57-9032-abaeb9cd178f_min.webp',
    alt: 'Technician in protective suit removing drywall inside a sealed containment with an air scrubber running',
  },
  crew: {
    file: '/photos/crew-on-site.webp',
    source: B + '233557_cae88850-62ab-45ef-9d79-8149eabe8106_min.webp',
    alt: 'Three workers in hi-vis vests beside an excavated foundation wall',
  },
  'wall-before': {
    file: '/photos/project-wall-before.webp',
    source: B + '233557_952957fc-0025-4608-b96f-0e06f8b8640c_min.webp',
    alt: 'Leaking basement wall with a wet crack, staining and a puddle',
  },
  'wall-after': {
    file: '/photos/project-wall-after.webp',
    source: B + '233630_232c9a76-8000-40ab-bf48-3307e20d4e54_min.webp',
    alt: 'The same basement wall repaired and dry',
  },
  'steps-before': {
    file: '/photos/project-steps-before.webp',
    source: B + '233557_e82ecc73-f9fe-48c3-9d8e-462859698d50_min.webp',
    alt: 'Crumbling, spalled concrete front steps',
  },
  'steps-after': {
    file: '/photos/project-steps-after.webp',
    source: B + '233630_aef879b5-56ef-474e-a5b5-dcf02fcf527d_min.webp',
    alt: 'The same front steps rebuilt in new concrete',
  },
  'mold-before': {
    file: '/photos/project-mold-before.webp',
    source: B + '233557_96036875-9d87-464e-9869-38fd6e262b3a_min.webp',
    alt: 'Mold growth on wall studs behind opened basement drywall',
  },
  'mold-after': {
    file: '/photos/project-mold-after.webp',
    source: B + '233630_40ebc9a0-4397-4c85-9c8c-78b232e97233_min.webp',
    alt: 'The same wall cavity cleaned, treated and dry',
  },
  'window-before': {
    file: '/photos/project-window-before.webp',
    source: B + '233557_7572d544-0b9d-4992-bfff-0aa277302560_min.webp',
    alt: 'Foundation wall with a window opening marked out in spray paint',
  },
  'window-after': {
    file: '/photos/project-window-after.webp',
    source: B + '233630_6192f124-bc15-4dd1-a8d5-02e4a2929665_min.webp',
    alt: 'New egress window with a metal window well in the same foundation wall',
  },
};
