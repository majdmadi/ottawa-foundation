import { site } from './site';
import { services } from './services';

/**
 * LocalBusiness structured data. Google leans on this heavily for "foundation
 * repair near me" style queries, which is the whole ballgame for this client.
 *
 * Fields the questionnaire left blank (licence numbers, Google profile, real
 * hours, domain) are omitted rather than guessed — schema with invented values
 * is worse than none.
 */
export function localBusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: site.fullName,
    legalName: site.legalName,
    description: site.shortPitch,
    telephone: site.phone,
    email: site.email,
    foundingDate: String(site.foundedYear),
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
      ...(site.address.postalCode ? { postalCode: site.address.postalCode } : {}),
    },
    areaServed: site.serviceAreas.map((a) => ({ '@type': 'City', name: a })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.menuName, description: s.summary },
      })),
    },
  };

  if (site.url && !site.url.includes('example.com')) data.url = site.url;
  if (site.google.profileUrl) data.sameAs = [site.google.profileUrl];

  return data;
}

export function faqJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
