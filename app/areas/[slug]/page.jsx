import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Section, SectionHead } from '@/components/Section';
import QuoteForm from '@/components/QuoteForm';
import CTA from '@/components/CTA';
import ServiceAreas from '@/components/ServiceAreas';
import { areas, areaBySlug } from '@/lib/areas';
import { services } from '@/lib/services';
import { site } from '@/lib/site';
import { JsonLd } from '@/lib/seo';

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const area = areaBySlug(slug);
  if (!area) return {};
  return {
    title: `Foundation Repair, Concrete & Mold in ${area.name}`,
    description: `Foundation wall repair, concrete crack repair, window and door openings and mold remediation in ${area.name}. Free on-site assessment and written quotes. Call ${site.phone}.`,
    alternates: { canonical: `/areas/${area.slug}` },
  };
}

export default async function AreaPage({ params }) {
  const { slug } = await params;
  const area = areaBySlug(slug);
  if (!area) notFound();

  const nearby = area.nearby.map(areaBySlug).filter(Boolean);
  const base = site.url.replace(/\/$/, '');

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Foundation repair, concrete repair and mold remediation',
    provider: { '@type': 'HomeAndConstructionBusiness', name: site.fullName, telephone: site.phone, url: base },
    areaServed: { '@type': 'Place', name: `${area.name}, Ontario` },
    url: `${base}/areas/${area.slug}`,
  };

  return (
    <>
      <section className="dark-section bg-ink-950">
        <div className="container-x py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="mb-6 text-[13px] text-concrete-500">
            <Link href="/#areas" className="hover:text-amber">Service areas</Link>
            <span className="px-2" aria-hidden="true">/</span>
            <span className="text-concrete-300">{area.name}</span>
          </nav>
          <h1 className="h1 max-w-[22ch] text-white">
            Foundation Repair &amp; Concrete in <span className="text-amber">{area.name}</span>
          </h1>
          <p className="mt-3 text-[15px] uppercase tracking-[0.14em] text-concrete-500">{area.region}</p>
          <p className="mt-6 max-w-prose text-[17px] leading-relaxed text-concrete-300">{area.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#quote" className="btn-primary">Get a free quote in {area.name}</a>
            <a href={site.phoneHref} className="btn-ghost-light">Call {site.phone}</a>
          </div>
        </div>
      </section>

      <Section>
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow={`In ${area.name}`} title="What we see most often" />
            <ul className="mt-7 space-y-3">
              {area.seen.map((s) => (
                <li key={s} className="flex items-start gap-3 border-b border-concrete-200 pb-3 text-[15.5px] text-ink-800">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHead eyebrow="Services" title={`What we do in ${area.name}`} />
            <ul className="mt-7 grid gap-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="card block">
                    <h3 className="text-[16px] font-bold uppercase tracking-[0.03em] text-ink-950">{s.menuName}</h3>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-700">{s.summary}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="quote" className="scroll-mt-20 bg-concrete-100">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHead
              eyebrow="Free assessment"
              title={`Get a quote in ${area.name}`}
              intro="Send a few photos and a short description. We reply within one business day and the on-site assessment is free."
            />
            {nearby.length > 0 && (
              <p className="mt-8 text-[15px] text-ink-700">
                Also nearby:{' '}
                {nearby.map((n, i) => (
                  <span key={n.slug}>
                    {i > 0 && ', '}
                    <Link href={`/areas/${n.slug}`} className="font-semibold text-amber-deep underline">{n.name}</Link>
                  </span>
                ))}
              </p>
            )}
            <div className="mt-6">
              <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-concrete-500">All areas we cover</p>
              <ServiceAreas />
            </div>
          </div>
          <QuoteForm />
        </div>
      </Section>

      <CTA />
      <JsonLd data={serviceJsonLd} />
    </>
  );
}
