/**
 * Single source of truth for every piece of client-supplied information.
 * Everything the client may want changed later — name, phone, areas, hours,
 * review link — lives here so no one has to touch a component to edit it.
 *
 * Values marked TODO came back blank on the intake questionnaire and still
 * need to be confirmed with the client before launch.
 */
export const site = {
  // Proposed trading name. "Stoutwall" was checked in Sept 2026: no business
  // found using it, and stoutwall.ca / stoutwall.com had no DNS records.
  // Before launch: search the Ontario Business Registry, register the name,
  // and buy the domain. The name submitted on the brief was
  // "Foundation & Repair Concrete & Mold".
  name: 'Stoutwall',
  fullName: 'Stoutwall Foundation & Concrete',
  legalName: 'Stoutwall Foundation & Concrete', // TODO: confirm registered name
  tagline: 'Built to hold.',
  shortPitch:
    'Ten years fixing what holds Ottawa homes up — leaking foundations, cracked concrete, new openings in concrete walls, and the mold that follows water.',

  yearsInBusiness: 10,
  foundedYear: new Date().getFullYear() - 10,

  phone: '343-336-4342',
  phoneHref: 'tel:+13433364342',
  whatsapp: 'https://wa.me/13433364342',
  whatsappQuote:
    'https://wa.me/13433364342?text=' +
    encodeURIComponent("Hi Stoutwall, I'd like a quote for… (photos attached)"),
  email: 'aburayyanammar4@gmail.com',

  address: {
    street: '121 Woodridge Crescent',
    city: 'Ottawa',
    region: 'ON',
    country: 'CA',
    postalCode: '', // TODO: confirm postal code with client
  },

  // Site is not published yet — update before launch so canonical URLs,
  // sitemap and structured data point at the real domain.
  url: 'https://stoutwall.ca', // TODO: domain not purchased yet — register stoutwall.ca

  hours: [
    { days: 'Monday – Friday', time: '7:00 am – 6:00 pm' },
    { days: 'Saturday', time: '8:00 am – 4:00 pm' },
    { days: 'Sunday', time: 'Emergency calls only' },
  ], // TODO: confirm actual hours

  // Order matters: these are rendered as the service-area list and are used in
  // the local-business structured data.
  serviceAreas: [
    'Ottawa',
    'Kanata',
    'Orléans',
    'Barrhaven',
    'South Keys',
    'Greely',
    'Metcalfe',
    'Rockland',
  ],

  // Paste the client's Google Business Profile "write a review" and place URLs
  // here to switch the reviews section from placeholder to live.
  google: {
    profileUrl: '', // TODO: client has not supplied a Google Business Profile
    reviewUrl: '',
    placeId: '',
  },

  social: {
    facebook: '', // TODO
    instagram: '', // TODO
  },

  // Shown in the trust bar. Nothing is displayed until it is filled in — do not
  // invent licence or insurance numbers.
  credentials: {
    insured: true,
    wsib: '', // TODO: WSIB clearance number
    licence: '', // TODO: municipal/trade licence number
    warrantyYears: 5, // TODO: confirm the workmanship warranty actually offered
    warrantyConfirmed: false, // set true once confirmed — shows it in the trust bar
  },
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/#areas', label: 'Service Areas' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/booking', label: 'Book a visit' },
];

export const legalNav = [
  { href: '/privacy', label: 'Privacy policy' },
  { href: '/terms', label: 'Terms of service' },
  { href: '/accessibility', label: 'Accessibility' },
];
