/**
 * Service-area landing pages (/areas/[slug]). Each one must say something true
 * and specific about that area — thin "same page, different town name" pages
 * get ignored or penalised by Google. Do not add an area the client does not
 * actually serve, and do not add Quebec areas (e.g. Gatineau) unless the client
 * holds an RBQ licence.
 */
export const areas = [
  {
    slug: 'kanata',
    name: 'Kanata',
    region: 'west Ottawa',
    intro:
      'Most of Kanata was built from the 1980s on, which means a lot of poured-concrete basements now old enough for their original dampproofing, window wells and tie-rod holes to start letting water in. Parts of the west end also sit on sensitive marine clay, so cracks that keep moving deserve a proper look rather than a tube of caulking.',
    seen: [
      'Leaking tie-rod holes and vertical shrinkage cracks in poured walls',
      'Water at basement windows where the well has silted up or drains poorly',
      'Garage slab and front-step cracks opened up by freeze-thaw',
      'Basement egress windows cut for secondary suites and new bedrooms',
    ],
    nearby: ['barrhaven', 'south-keys'],
  },
  {
    slug: 'orleans',
    name: 'Orléans',
    region: 'east Ottawa',
    intro:
      'Large parts of Orléans are built on Leda clay, which shrinks in dry summers and swells when it is wet. That movement shows up as foundation cracks, settled steps and walks, and gaps that reopen every year. We diagnose whether a crack is a leak to seal or movement to deal with before quoting a repair.',
    seen: [
      'Foundation cracks that widen or reopen from season to season',
      'Front steps, porches and walkways that have settled away from the house',
      'Basement leaks after spring melt where grading has sunk toward the wall',
      'New egress windows and walkout doors for basement apartments',
    ],
    nearby: ['rockland', 'south-keys'],
  },
  {
    slug: 'barrhaven',
    name: 'Barrhaven',
    region: 'south-west Ottawa',
    intro:
      'Barrhaven has a lot of newer homes, and newer homes have their own problems: settlement cracks in the first years, window wells and downspouts that were never set up right, and grading that sinks as the backfill settles. If your home is still within its Tarion warranty, check your coverage first — we are happy to look at the wall and tell you what we see either way.',
    seen: [
      'Hairline and settlement cracks in poured walls of newer homes',
      'Water entering at window wells and where backfill has sunk',
      'Garage floor and driveway-apron cracking',
      'Egress windows and enlarged openings during basement finishing',
    ],
    nearby: ['kanata', 'south-keys'],
  },
  {
    slug: 'south-keys',
    name: 'South Keys',
    region: 'south Ottawa',
    intro:
      'Around South Keys and Hunt Club the housing is older and more established, and many foundations are now on their original exterior waterproofing. Once that gives out, water finds the cracks and cold joints. Concrete steps and porches from the same era are also reaching the end of their life.',
    seen: [
      'Damp or leaking basement walls on original exterior waterproofing',
      'Efflorescence and musty smells in older basements',
      'Spalling concrete steps, porches and landings',
      'Mold behind finished basement walls after a slow leak',
    ],
    nearby: ['greely', 'barrhaven'],
  },
  {
    slug: 'greely',
    name: 'Greely',
    region: 'rural south Ottawa',
    intro:
      'Greely mixes newer estate homes with older rural properties, most on private well and septic. Excavating beside a foundation out here means locating the septic bed, tank and well line first, and we plan the dig around them. Larger lots also mean longer downspout and drainage runs that need to actually carry water away.',
    seen: [
      'Exterior foundation repair planned around septic and well lines',
      'Drainage and grading problems on larger, flatter lots',
      'Cracked garage slabs, steps and outbuilding concrete',
      'Basement mold where moisture has gone unnoticed',
    ],
    nearby: ['metcalfe', 'south-keys'],
  },
  {
    slug: 'metcalfe',
    name: 'Metcalfe',
    region: 'rural south-east Ottawa',
    intro:
      'Metcalfe and the surrounding countryside have plenty of older homes, including block and stone foundations that were never waterproofed the way a modern wall is. Slow, constant moisture is the usual story, and mold tends to follow it. We trace where the water is coming from before anyone treats a stain.',
    seen: [
      'Damp block and stone foundations in older homes',
      'Mold on framing, joists and stored contents in damp basements',
      'Deteriorated concrete steps, slabs and farm-building concrete',
      'Exterior work planned around septic systems and wells',
    ],
    nearby: ['greely', 'orleans'],
  },
  {
    slug: 'rockland',
    name: 'Rockland',
    region: 'Clarence-Rockland, east of Orléans',
    intro:
      'Rockland is outside the City of Ottawa, so permits for openings and structural work go through Clarence-Rockland rather than the city — we handle that side of it. Much of the area shares the same clay soils as Orléans, with the same pattern of cracking and settlement.',
    seen: [
      'Foundation cracks and basement leaks on clay soils',
      'Settled steps, walks and garage slabs',
      'Egress windows and new openings permitted through Clarence-Rockland',
      'Mold remediation tied to a basement moisture source',
    ],
    nearby: ['orleans'],
  },
];

export const areaBySlug = (slug) => areas.find((a) => a.slug === slug);

/** Map a service-area display name (e.g. "Orléans") to its landing page, if any. */
export const areaHref = (name) => {
  const match = areas.find((a) => a.name === name);
  return match ? `/areas/${match.slug}` : name === 'Ottawa' ? '/' : null;
};
