import { Section, SectionHead } from '@/components/Section';
import QuoteForm from '@/components/QuoteForm';
import ProcessSteps from '@/components/ProcessSteps';
import CTA from '@/components/CTA';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Book a visit',
  description:
    'Book a free on-site foundation, concrete or mold assessment in Ottawa. Pick a day and time that suits you.',
};

export default function BookingPage() {
  return (
    <>
      <section className="dark-section bg-ink-950">
        <div className="container-x py-14 sm:py-20">
          <SectionHead
            dark
            eyebrow="Booking"
            title="Pick a time for the free visit"
            intro="Tell us when suits and what we are coming to look at. We confirm by phone — usually the same day."
          />
        </div>
      </section>

      <Section>
        <div className="container-x grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <QuoteForm variant="booking" />

          <aside className="space-y-8">
            <div className="rounded-lg bg-ink-950 p-6 text-concrete-300 dark-section">
              <h2 className="h3 text-white">Rather just call?</h2>
              <a href={site.phoneHref} className="mt-4 block font-display text-[32px] font-bold leading-none text-amber">
                {site.phone}
              </a>
              <p className="mt-4 text-[14.5px] leading-relaxed">
                Water coming in right now? Call — do not wait on a form. An emergency gets moved
                to the front of the list.
              </p>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-light mt-5 w-full"
              >
                Message on WhatsApp
              </a>
            </div>

            <div className="card">
              <h2 className="h3 text-ink-950">What happens at the visit</h2>
              <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-ink-700">
                <li>We look at the problem inside and outside, and take moisture readings where it matters.</li>
                <li>We photograph what we find and show you.</li>
                <li>You get a written, itemised quote — usually within a day or two.</li>
                <li>No pressure, no deposit, no obligation.</li>
              </ul>
              <p className="mt-5 text-[13.5px] text-concrete-500">
                Allow about thirty minutes. Someone over 18 needs to be home to let us into the
                basement.
              </p>
            </div>

            <div className="card">
              <h2 className="h3 text-ink-950">Office hours</h2>
              <dl className="mt-5 space-y-2.5 text-[15px]">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4 border-b border-concrete-200 pb-2.5">
                    <dt className="text-concrete-500">{h.days}</dt>
                    <dd className="font-medium text-ink-900">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="bg-concrete-100 !py-16">
        <div className="container-x">
          <SectionHead eyebrow="After you book" title="What comes next" />
          <div className="mt-10">
            <ProcessSteps />
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}
