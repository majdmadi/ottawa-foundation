import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Section, SectionHead } from '@/components/Section';
import Photo from '@/components/Photo';
import FAQ from '@/components/FAQ';
import QuoteForm from '@/components/QuoteForm';
import CTA from '@/components/CTA';
import ServiceAreas from '@/components/ServiceAreas';
import { services, serviceBySlug } from '@/lib/services';
import { site } from '@/lib/site';
import { faqJsonLd, JsonLd } from '@/lib/seo';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.menuName} in Ottawa`,
    description: service.summary,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="dark-section bg-ink-950">
        <div className="container-x grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <nav aria-label="Breadcrumb" className="mb-6 text-[13px] text-concrete-500">
              <Link href="/services" className="hover:text-amber">Services</Link>
              <span className="px-2" aria-hidden="true">/</span>
              <span className="text-concrete-300">{service.name}</span>
            </nav>
            <h1 className="h1 text-white">{service.menuName}</h1>
            <p className="mt-5 max-w-[50ch] text-[18px] leading-relaxed text-amber">{service.hero}</p>
            <p className="mt-4 max-w-prose text-[16px] leading-relaxed text-concrete-400">
              {service.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">Get a free quote</Link>
              <a href={site.phoneHref} className="btn-ghost-light">Call {site.phone}</a>
            </div>
          </div>
          <Photo
            photo={service.slug}
            priority
            ratio="aspect-[4/3]"
            label={`${service.name}: the single best photo you have of this job type`}
          />
        </div>
      </section>

      <Section>
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="Signs you need this" title="What you are probably seeing" />
            <ul className="mt-7 space-y-3">
              {service.symptoms.map((s) => (
                <li key={s} className="flex items-start gap-3 border-b border-concrete-200 pb-3 text-[15.5px] text-ink-800">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHead eyebrow="What is included" title="What the job involves" />
            <ul className="mt-7 space-y-3">
              {service.includes.map((s) => (
                <li key={s} className="flex items-start gap-3 border-b border-concrete-200 pb-3 text-[15.5px] text-ink-800">
                  <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 shrink-0 text-amber" fill="currentColor" aria-hidden="true">
                    <path d="M8 14.2L4.3 10.5l1.4-1.4L8 11.4l6.3-6.3 1.4 1.4z" />
                  </svg>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-concrete-100">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHead eyebrow="Questions" title={`${service.name} — asked and answered`} />
          <FAQ items={service.faqs} />
        </div>
      </Section>

      <Section>
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHead
              eyebrow="Free assessment"
              title="Get this one looked at"
              intro="Thirty minutes on site tells us more than any phone call. It costs nothing and you get the quote in writing."
            />
            <div className="mt-8">
              <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-concrete-500">
                Areas we cover
              </p>
              <ServiceAreas />
            </div>
          </div>
          <QuoteForm />
        </div>
      </Section>

      <Section className="bg-concrete-100 !py-14">
        <div className="container-x">
          <h2 className="h3 text-ink-950">Other things we do</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/services/${o.slug}`} className="card block h-full">
                  <h3 className="text-[16px] font-bold uppercase tracking-[0.03em] text-ink-950">
                    {o.menuName}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-700">{o.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CTA />
      <JsonLd data={faqJsonLd(service.faqs)} />
    </>
  );
}
