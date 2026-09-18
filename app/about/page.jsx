import Link from 'next/link';
import { Section, SectionHead } from '@/components/Section';
import Photo from '@/components/Photo';
import ServiceAreas from '@/components/ServiceAreas';
import CTA from '@/components/CTA';
import { site } from '@/lib/site';

export const metadata = {
  title: 'About',
  description: `${site.yearsInBusiness} years repairing foundations, concrete and mold problems in Ottawa and the surrounding area.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="dark-section bg-ink-950">
        <div className="container-x grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow-light">
              <span className="h-px w-8 bg-amber" />
              About us
            </p>
            <h1 className="mt-5 h1 text-white">
              Ten years under
              <br />
              Ottawa houses
            </h1>
            <p className="mt-6 max-w-prose text-[17px] leading-relaxed text-concrete-400">
              We are a small, owner-run crew. The person who quotes your job is the person on site
              while it is done — which is the only reliable way to make sure what was promised is
              what gets built.
            </p>
          </div>
          <Photo
            photo="crew"
            priority
            note="Illustrative photo"
            ratio="aspect-[4/3]"
            label="The owner and crew, on a job site, in work gear. One good honest photo beats a stock image."
          />
        </div>
      </section>

      <Section>
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-prose space-y-5 text-[16.5px] leading-relaxed text-ink-800">
            {/* DRAFT — client said he would write the final text. This is a
                starting point in his voice, based on the questionnaire. */}
            <p>
              We started doing foundation work in Ottawa {site.yearsInBusiness} years ago and have
              stayed with it since. Foundations, concrete repair, mold, and cutting new openings for
              doors and windows — that is the list, and it has not needed to get longer.
            </p>
            <p>
              Most of the calls we get sound the same: water in the basement after a storm, a crack
              that was small last year and is not small now, a smell that will not go away. The
              repair matters, but finding out why it happened matters more. A wall that gets sealed
              without dealing with the water leaks again, usually the following spring, usually while
              somebody else is holding the invoice.
            </p>
            <p>
              We work across the city and out into the country — Kanata to Rockland, Metcalfe to
              Barrhaven. Some of the work is a two-hour crack repair. Some of it is a week of
              excavation. Either way you get a written price before we start and a site put back
              properly when we leave.
            </p>
            <p className="rounded-md border-l-2 border-amber bg-concrete-100 p-5 text-[15.5px]">
              <strong className="font-semibold">Owner&apos;s note:</strong> this page is the one that
              should sound most like you. Rewrite it in your own words — how you got into the trade,
              why you do it this way, anything customers always ask. Keep it short and true.
            </p>
          </div>

          <aside className="space-y-8">
            <div className="card">
              <h2 className="h3 text-ink-950">The short version</h2>
              <dl className="mt-5 space-y-4 text-[15px]">
                {[
                  ['In business', `${site.yearsInBusiness} years`],
                  ['Based in', `${site.address.city}, ${site.address.region}`],
                  ['Crew', 'Owner-run, small team'],
                  ['Insurance', site.credentials.insured ? 'Liability insured — certificate on request' : 'TODO'],
                  ['Quotes', 'Free, on site, in writing'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-6 border-b border-concrete-200 pb-3">
                    <dt className="text-concrete-500">{k}</dt>
                    <dd className="text-right font-medium text-ink-900">{v}</dd>
                  </div>
                ))}
              </dl>
              {!site.credentials.wsib && (
                <p className="mt-5 rounded border border-dashed border-concrete-300 p-3 text-[13px] text-concrete-500">
                  Owner: add WSIB clearance and licence numbers in <code>lib/site.js</code> and they
                  will appear here. Homeowners look for these.
                </p>
              )}
            </div>

            <div>
              <h2 className="h3 text-ink-950">Areas we serve</h2>
              <div className="mt-5">
                <ServiceAreas />
              </div>
            </div>

            <Link href="/projects" className="btn-ghost w-full">
              See recent work
            </Link>
          </aside>
        </div>
      </Section>

      <CTA />
    </>
  );
}
