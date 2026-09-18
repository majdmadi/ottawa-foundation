import { Section, SectionHead } from '@/components/Section';
import QuoteForm from '@/components/QuoteForm';
import ServiceAreas from '@/components/ServiceAreas';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Contact',
  description: `Get a free foundation, concrete or mold quote in Ottawa. Call ${site.phone} or send the form.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="dark-section bg-ink-950">
        <div className="container-x grid gap-10 py-14 sm:py-20 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow-light">
              <span className="h-px w-8 bg-amber" />
              Contact
            </p>
            <h1 className="mt-5 h1 text-white">Get a free quote</h1>
            <p className="mt-5 max-w-prose text-[16.5px] leading-relaxed text-concrete-400">
              Call, WhatsApp a photo, or fill in the form. However it reaches us, you get a person —
              not a call centre.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <a href={site.phoneHref} className="rounded-lg border border-white/12 bg-ink-900 p-5 transition-colors hover:border-amber">
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-concrete-500">Phone</span>
              <span className="mt-2 block font-display text-[24px] font-bold text-amber">{site.phone}</span>
            </a>
            <a href={`mailto:${site.email}`} className="rounded-lg border border-white/12 bg-ink-900 p-5 transition-colors hover:border-amber">
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-concrete-500">Email</span>
              <span className="mt-2 block break-all text-[15px] font-medium text-white">{site.email}</span>
            </a>
          </div>
        </div>
      </section>

      <Section>
        <div className="container-x grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <QuoteForm />

          <aside className="space-y-8">
            <div className="card">
              <h2 className="h3 text-ink-950">Where we are</h2>
              <address className="mt-4 not-italic text-[15.5px] leading-relaxed text-ink-700">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region}
              </address>
              <p className="mt-3 text-[13.5px] text-concrete-500">
                Yard and office — visits by appointment. We come to you for assessments.
              </p>
            </div>

            <div className="card">
              <h2 className="h3 text-ink-950">Hours</h2>
              <dl className="mt-4 space-y-2.5 text-[15px]">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4 border-b border-concrete-200 pb-2.5">
                    <dt className="text-concrete-500">{h.days}</dt>
                    <dd className="font-medium text-ink-900">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h2 className="h3 text-ink-950">Areas we serve</h2>
              <div className="mt-5">
                <ServiceAreas />
              </div>
            </div>

            {/* Map goes in once the Google Business Profile exists — an embed
                with no verified listing behind it is worth nothing for local SEO. */}
            <div className="rounded-lg border border-dashed border-concrete-300 bg-concrete-100 p-5 text-[13.5px] leading-relaxed text-concrete-500">
              Owner: once the Google Business Profile is verified, paste the map embed here and the
              profile link into <code>lib/site.js</code>.
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
