import Link from 'next/link';
import { Section, SectionHead } from '@/components/Section';
import Photo from '@/components/Photo';
import CTA from '@/components/CTA';
import ProcessSteps from '@/components/ProcessSteps';
import { services } from '@/lib/services';

export const metadata = {
  alternates: { canonical: '/services' },
  title: 'Services',
  description:
    'Foundation repair and waterproofing, concrete crack and surface repair, mold removal, and cutting new door and window openings — across Ottawa and the surrounding area.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="dark-section bg-ink-950">
        <div className="container-x py-14 sm:py-20">
          <SectionHead
            dark
            eyebrow="Services"
            title="Below grade is where we live"
            intro="Everything on this page happens at or under the foundation line. If your problem involves water, concrete or the two together, it is ours."
          />
        </div>
      </section>

      {services.map((service, i) => (
        <Section key={service.slug} className={i % 2 === 1 ? 'bg-concrete-100' : ''}>
          <div
            className={`container-x grid gap-10 lg:grid-cols-2 lg:items-center ${
              i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
            }`}
          >
            <Photo
              photo={service.slug}
              tone={i % 2 === 1 ? 'light' : 'dark'}
              ratio="aspect-[4/3]"
              label={`${service.name}: a clear shot of this work in progress on a real job`}
            />
            <div>
              <span className="font-display text-[13px] font-bold tracking-[0.2em] text-amber-deep">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h2 className="mt-3 h2 text-ink-950">{service.menuName}</h2>
              <p className="mt-4 max-w-prose text-[16px] leading-relaxed text-ink-700">
                {service.intro}
              </p>
              <ul className="mt-6 space-y-2.5">
                {service.includes.slice(0, 4).map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-ink-800">
                    <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 shrink-0 text-amber" fill="currentColor" aria-hidden="true">
                      <path d="M8 14.2L4.3 10.5l1.4-1.4L8 11.4l6.3-6.3 1.4 1.4z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={`/services/${service.slug}`} className="btn-ghost mt-7">
                Full details
              </Link>
            </div>
          </div>
        </Section>
      ))}

      <Section className="bg-ink-900 dark-section">
        <div className="container-x">
          <SectionHead dark eyebrow="However we start" title="The same four steps, every job" />
          <div className="mt-10">
            <ProcessSteps />
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}
