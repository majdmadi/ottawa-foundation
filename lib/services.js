/**
 * Service catalogue. Each entry drives a card on /services, a detail page at
 * /services/[slug], and an option in the quote form.
 *
 * The copy below is a first draft written from the intake questionnaire. The
 * client said he would write the final text — treat every paragraph as a
 * starting point to be approved or replaced, and do not publish claims the
 * client has not confirmed.
 */
export const services = [
  {
    slug: 'foundation-repair',
    name: 'Foundation Wall Repair',
    menuName: 'Foundation wall repair & waterproofing',
    icon: 'foundation',
    summary:
      'Leaking and failing basement walls dug out, sealed and put right — from the outside where it matters.',
    hero: 'Water in the basement is a symptom. The wall is the problem.',
    intro:
      'Ottawa\'s most common basement leak is not a floor problem — it\'s a compromised wall. Cracks, cold joints, and seal failures in the foundation wall allow water to bypass the floor and enter through the wall face itself.\n\nOur repair method: We excavate to the footing, remove compromised concrete and waterproofing, restore the wall with permanent structural repairs, and reinstall a complete drainage system. Water is then diverted away from the foundation entirely — not trapped or temporarily blocked.',
    symptoms: [
      'Water tracking down a basement wall after heavy rain or spring melt',
      'A vertical or diagonal crack that keeps getting wider',
      'Efflorescence — white chalky staining on the block or concrete',
      'Damp, musty smell that never fully clears',
      'Floor cracks, sticking doors or a wall that bows inward',
    ],
    includes: [
      'Free on-site assessment with photos of what we find',
      'Excavation to the footing and full wall cleaning',
      'Crack injection or structural repair as the wall requires',
      'Membrane, drainage board and weeping-tile check',
      'Backfill, grading and site cleanup',
    ],
    faqs: [
      {
        q: 'Can this be fixed from inside the basement?',
        a: 'Interior sealing is temporary mitigation. If the waterproofing outside has failed, interior work treats the symptom, not the cause. We distinguish between interior injection (symptom management, ~$1,500–$3,500) and exterior wall repair (structural fix, ~$8,000–$25,000+) before you spend anything.',
      },
      {
        q: 'How long does a typical foundation repair take?',
        a: 'A single-crack exterior repair is usually one to two days on site. A full wall section takes longer and depends on access, depth and weather.',
      },
      {
        q: 'Will my landscaping survive?',
        a: 'We protect what we can and put the ground back graded away from the house. Plants and interlock directly over the dig are at risk — we will tell you exactly what is in the way before we start.',
      },
    ],
  },
  {
    slug: 'concrete-repair',
    name: 'Concrete Crack Repair',
    menuName: 'Concrete crack & surface repair',
    icon: 'crack',
    summary:
      'Cracked steps, spalling walls, sunken slabs and failed joints repaired to last through Ottawa freeze-thaw.',
    hero: 'Fix the crack before the winter finds it.',
    intro:
      'Ottawa\'s freeze-thaw cycles create predictable concrete failure: a hairline crack admits water → water freezes, expanding within the pore structure → the crack widens → spalling begins → structural replacement becomes necessary.\n\nEarly intervention is cost-effective prevention. Repairing a crack in season costs a fraction of replacing the element after winter damage. We repair garage floors, steps, porches, walls, piers and slabs, and we match the finish so the patch is not the first thing you see.',
    symptoms: [
      'Cracks that have opened up over the last winter or two',
      'Flaking, pitting or crumbling surface (spalling)',
      'A step, slab or walkway that has settled out of level',
      'Rusty staining or exposed rebar',
      'Gaps opening at a joint between two pours',
    ],
    includes: [
      'Crack routing, cleaning and structural filling',
      'Surface resurfacing and colour/finish matching',
      'Step, porch and landing rebuilds',
      'Joint sealing and waterproof coatings',
      'Debris removed and the area washed down',
    ],
    faqs: [
      {
        q: 'Is a crack in my garage floor structural?',
        a: 'Usually not — slabs crack as they cure and as the ground moves. Cracks in a load-bearing wall, or one that has offset so the two sides are no longer flush, are a different matter. We will tell you which one you are looking at.',
      },
      {
        q: 'Will the repair be visible?',
        a: 'A structural repair is about strength first. We colour and texture-match as closely as concrete allows, but an exact match on aged, weathered concrete is not realistic. Where appearance matters most, resurfacing the whole element gives the cleanest result.',
      },
      {
        q: 'How late in the year can you pour?',
        a: 'Repairs continue into the cold with the right mix and protection, but there is a point each winter where the result suffers. If we cannot do it properly, we will book you for spring rather than take the job.',
      },
    ],
  },
  {
    slug: 'mold-removal',
    name: 'Mold Remediation',
    menuName: 'Mold remediation',
    icon: 'mold',
    summary:
      'Mold removed, the surface treated, and the moisture source it grew on actually fixed.',
    hero: 'Mold is a water problem wearing a disguise.',
    intro:
      'Remediation without moisture source diagnosis is temporary mitigation, not repair. The mold returns because the water never stopped. We identify the moisture path (leaking wall, failed seal, condensation source, or drainage failure), remove contaminated material under controlled conditions, treat the source, and verify dry-down — so the mold doesn\'t come back in three months. Because we do the foundation work as well, we can address structural water issues that other contractors leave unresolved.',
    symptoms: [
      'Black, green or white growth on basement walls, framing or subfloor',
      'A persistent musty smell, strongest after rain',
      'Warped baseboards, bubbling paint or stained drywall',
      'Condensation on walls, windows or cold-water pipes',
      'Symptoms that ease when you leave the house',
    ],
    includes: [
      'Moisture reading and source investigation',
      'Containment of the work area before anything is disturbed',
      'Removal and disposal of affected material',
      'Antimicrobial treatment of remaining surfaces',
      'Controlled drying, and a written note of the moisture source found',
    ],
    faqs: [
      {
        q: 'Do you test the mold?',
        a: 'We identify the growth and the water causing it. Laboratory air or surface sampling is a separate service from an independent testing company — if you want that done, arrange it before we start, since our work changes what is there to sample.',
      },
      {
        q: 'Do I need to move out?',
        a: 'For most basement jobs, no. The work area is sealed off and kept under control. If the affected area is large or in living space, we will tell you honestly what the days on site will be like.',
      },
      {
        q: 'Will it come back?',
        a: 'Not if the water is dealt with. That is the whole point of doing the moisture source and the remediation together rather than treating the stain and leaving.',
      },
    ],
  },
  {
    slug: 'concrete-cutting',
    name: 'Window & Door Openings',
    menuName: 'Window & door openings in concrete',
    icon: 'opening',
    summary:
      'New egress windows, walkout doors and enlarged openings cut into existing foundation walls.',
    hero: 'Cutting load into a load-bearing wall. The opening has to be engineered.',
    intro:
      'Cutting into a load-bearing foundation wall demands precision. Done correctly, it\'s routine structural work. Done casually, it can leave a wall unsupported and an expensive structural repair behind it. We conduct a structural assessment, install temporary support before any cutting, verify the opening with proper lintels and bucks, and frame square. Waterproofing and grading complete the job so your new window or door doesn\'t become the next leak.',
    symptoms: [
      'Adding a bedroom downstairs and needing a code-compliant egress window',
      'Turning a basement into a walkout or separate unit',
      'Bringing daylight into a dark basement',
      'Enlarging an opening for a wider door or newer window size',
      'A previous opening cut without a proper lintel',
    ],
    includes: [
      'Assessment of the wall and what it carries',
      'Temporary support, clean saw cutting and removal',
      'Lintel, buck and framing to suit the new unit',
      'Exterior waterproofing, window well and drainage where needed',
      'Coordination with your window or door supplier',
    ],
    faqs: [
      {
        q: 'Do I need a permit?',
        a: 'Yes. All structural openings in foundation walls require permits under Ontario Building Code. Egress windows for bedrooms have specific size and egress-area requirements. We conduct a structural assessment, present findings with code requirements, and provide a compliant scope of work — fully permitted and insured. We don\'t cut corners or walls off-permit.',
      },
      {
        q: 'Can you cut through poured concrete and block?',
        a: 'Both, along with stone foundations in many cases. The wall type changes the method and the price, which is why we look at it in person before quoting.',
      },
      {
        q: 'Who supplies the window or door?',
        a: 'Either way works. Supplying it yourself is often cheaper; leaving it to us means one company is responsible for the whole opening. We will size the rough opening to whatever unit you choose.',
      },
    ],
  },
];

// Display order matches the homepage grid.
const order = ['foundation-repair', 'concrete-repair', 'concrete-cutting', 'mold-removal'];
services.sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));

export const serviceBySlug = (slug) => services.find((s) => s.slug === slug);
