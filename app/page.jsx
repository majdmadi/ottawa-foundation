import Link from 'next/link';
import { Section, SectionHead } from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import TrustBar from '@/components/TrustBar';
import ProcessSteps from '@/components/ProcessSteps';
import Photo from '@/components/Photo';
import { withPhotos } from '@/lib/projects';
import ProjectGallery from '@/components/BeforeAfter';
import { projects } from '@/lib/projects';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import QuoteForm from '@/components/QuoteForm';
import CTA from '@/components/CTA';
import { services } from '@/lib/services';
import { site } from '@/lib/site';
import { faqJsonLd, JsonLd } from '@/lib/seo';
import { areaHref } from '@/lib/areas';

export const metadata = {
  alternates: { canonical: '/' },
};

const homeFaqs = [
  {
    q: 'Do you charge for the assessment?',
    a: 'No. Coming out, looking at the problem and giving you a written quote is free, anywhere in our service area.',
  },
  {
    q: 'How much does foundation repair cost in Ottawa?',
    a: 'Range: $800–$35,000+, depending on wall scope. Interior crack injection: ~$800–$3,500 (symptom management). Exterior wall section repair: $8,000–$35,000+ (structural fix). Anyone quoting foundation work over the phone is either guessing or selling you incomplete work. We do a free site inspection, assess structural integrity, then provide a fixed written quote.',
  },
  {
    q: 'Are you insured?',
    a: 'Yes — we carry liability insurance and can provide a certificate before work starts. Ask for it; a contractor who cannot produce one should not be on your property.',
  },
  {
    q: 'How quickly can you come out?',
    a: 'Most assessments happen within a few days. If water is actively coming into your basement, call rather than fill in the form and we will get to you sooner.',
  },
  {
    q: 'Do you work in winter?',
    a: 'Interior repairs, mold remediation, and emergency leak mitigation: yes, year-round. Exterior work and concrete curing depend on ground temperature and frost depth. If winter conditions mean the repair won\'t perform properly (concrete won\'t cure, backfill will heave), we schedule spring completion rather than accept substandard conditions. We\'ll outline your interim management options (sump pumping, temporary sealing, drainage improvements) so you\'re not left without solutions during the cold months.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="dark-section relative overflow-hidden bg-ink-950">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-45deg, #fff 0 1px, transparent 1px 14px)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-amber/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-x relative grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="animate-rise">
            <p className="eyebrow-light">
              <span className="h-px w-8 bg-amber" />
              {site.fullName} · Ottawa
            </p>
            <h1 className="mt-5 h1 text-white">
              <span className="text-amber">{site.yearsInBusiness}+ Years</span> of Quality Concrete
              &amp; Foundation Solutions in Ottawa
            </h1>
            <p className="mt-6 max-w-[54ch] text-[17px] leading-relaxed text-concrete-300">
              Expert foundation wall repair, concrete restoration, structural openings, and moisture remediation — engineered for Ottawa's freeze-thaw cycles. Every repair includes a structural diagnosis, written pricing, and a guarantee that the work holds.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#quote" className="btn-primary !py-4 !text-[15px]">
                Get a Detailed Quote
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M11.3 4.3l5 5a1 1 0 010 1.4l-5 5-1.4-1.4 3.3-3.3H3v-2h10.2L9.9 5.7z" />
                </svg>
              </a>
              <a href={site.phoneHref} className="btn-ghost-light !py-4 !text-[15px]">
                Call {site.phone}
              </a>
            </div>

            <ul className="mt-9 grid gap-x-6 gap-y-2.5 text-[14px] text-concrete-300 sm:grid-cols-2">
              {[
                'Free on-site assessment',
                'Written, itemised quotes',
                'Fully insured',
                'Photos welcome on WhatsApp',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-amber" fill="currentColor" aria-hidden="true">
                    <path d="M8 14.2L4.3 10.5l1.4-1.4L8 11.4l6.3-6.3 1.4 1.4z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <Photo
              photo="hero"
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              ratio="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]"
              label="Hero shot: a repaired poured-concrete foundation wall, excavation open, membrane going on, house behind. Portrait, shot from ground level."
            />
            <div className="absolute -bottom-5 left-5 right-5 rounded-lg border border-white/10 bg-ink-900/95 p-5 shadow-2xl backdrop-blur sm:left-auto sm:right-6 sm:w-[280px]">
              <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-amber">
                Water in the basement?
              </p>
              <p className="mt-1.5 text-[14px] leading-snug text-concrete-300">
                Call now and send a photo. Active leaks get the fastest answer.
              </p>
              <a href={site.phoneHref} className="mt-3 block font-display text-[26px] font-bold leading-none text-white hover:text-amber">
                {site.phone}
              </a>
            </div>
          </div>
        </div>
        <div className="h-8 sm:h-4" aria-hidden="true" />
      </section>

      <TrustBar />

      {/* ------------------------------------------------------------ Services */}
      <Section id="services">
        <div className="container-x">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHead
              eyebrow="What we do"
              title="Four services. Done properly."
              intro="We don't do everything. We do the work below grade, in concrete, and the mold that comes with water — and we do it well."
            />
            <Link href="/services" className="btn-ghost shrink-0">
              All services
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------ Before / After */}
      <Section className="bg-concrete-100">
        <div className="container-x">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHead
              eyebrow="Recent work"
              title="Before &amp; after"
              intro="Foundation work disappears once it's backfilled, so we photograph every job. Drag the handle to compare."
            />
            <Link href="/projects" className="btn-ghost shrink-0">
              See all projects
            </Link>
          </div>
          <div className="mt-8">
            <ProjectGallery projects={withPhotos(projects)} />
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------------- Why us */}
      <Section dark>
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHead
              dark
              eyebrow="Why choose us"
              title="Quality work. Fair price. In that order."
              intro="Most of our work comes from referrals. Word-of-mouth only happens when homeowners trust the diagnosis, respect the execution, and the invoice matches the written quote. We earn that repeatedly."
            />
            <a href="#quote" className="btn-primary mt-8">
              Get a Detailed Quote
            </a>
          </div>
          <dl className="grid gap-px overflow-hidden rounded-lg bg-white/10 sm:grid-cols-2">
            {[
              ['OTTAWA SPECIALIST', `${site.yearsInBusiness}+ years of local project history. We know Ottawa's soil profiles, clay behaviour and freeze-thaw damage patterns. That experience means faster diagnosis and more reliable solutions — the first time.`],
              ['STRUCTURAL, NOT COSMETIC', "We diagnose the failure mechanism, not the water stain. Every repair addresses root cause: the crack's structural integrity, the seal's perimeter failure, or the drainage system's capacity. We don't do cosmetic patching."],
              ['TRANSPARENT, FIXED-PRICE QUOTES', "Every quote is itemized, in writing, before excavation begins. If conditions expose something unexpected, we stop work and present the new finding with revised pricing — then you decide, with full information. No surprises."],
              ['LOCAL OVERSIGHT, NOT FRANCHISE', "Owner-operated, based in Ottawa. The person who inspects your foundation is the same person on-site during execution — no supervisor visit from a regional office, no hand-offs to labor crews. Direct accountability."],
            ].map(([title, body], i) => (
              <div key={title} className="bg-ink-950 p-6 sm:p-7">
                <span className="font-display text-[15px] font-bold tracking-[0.2em] text-amber">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <dt className="mt-3 font-display text-[21px] font-bold uppercase leading-tight text-white">{title}</dt>
                <dd className="mt-2.5 text-[14.5px] leading-relaxed text-concrete-400">{body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* ------------------------------------------------------------- Process */}
      <Section>
        <div className="container-x">
          <SectionHead
            eyebrow="How it works"
            title="No surprises, start to finish"
            intro="Transparency at every step. Complete structural assessment before any excavation. Written, itemized quote before any work begins. Progress updates during execution. No hidden costs, no surprise invoices."
          />
          <div className="mt-10">
            <ProcessSteps />
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------- Service areas */}
      <section id="areas" className="dark-section scroll-mt-24 bg-ink-900">
        <div className="hazard-rule" aria-hidden="true" />
        <div className="container-x grid gap-8 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow-light">
              <span className="h-px w-8 bg-amber" />
              Service area
            </p>
            <h2 className="mt-4 h2 text-white">Proudly serving Ottawa &amp; the region</h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-concrete-400">
              City lots, rural properties and everything between. Free on-site assessments anywhere
              we work.
            </p>
          </div>
          <ul className="flex flex-wrap gap-2.5">
            {site.serviceAreas.map((area) => (
              <li key={area}>
                <Link
                  href={areaHref(area) || '/#areas'}
                  className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-[15px] font-semibold text-white hover:border-amber"
                >
                <svg viewBox="0 0 20 20" className="h-4 w-4 text-amber" fill="currentColor" aria-hidden="true">
                  <path d="M10 1.5a6 6 0 00-6 6c0 4.5 6 11 6 11s6-6.5 6-11a6 6 0 00-6-6zm0 8.2a2.2 2.2 0 110-4.4 2.2 2.2 0 010 4.4z" />
                </svg>
                {area}
                </Link>
              </li>
            ))}
            <li className="rounded-full border border-dashed border-white/25 px-4 py-2.5 text-[14px] text-concrete-400">
              Not listed? <a href={site.phoneHref} className="font-semibold text-amber underline">Call and ask</a>
            </li>
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------- Reviews */}
      <Section>
        <div className="container-x">
          <SectionHead eyebrow="What customers say" title="Reviews" />
          <div className="mt-8">
            <Reviews />
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- Form */}
      <Section id="quote" className="scroll-mt-20 bg-concrete-100">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHead
              eyebrow="Free, no obligation"
              title="Get a detailed quote"
              intro="Submit: (1) photos of the issue, (2) your address/neighborhood, (3) a brief description, and (4) your preferred timeline. We read every request ourselves and reply within one business day — often with a price range, always with a free on-site assessment before your final written quote."
            />
            <ol className="mt-7 space-y-3 text-[15px] text-ink-800">
              {['Tell us what you are seeing (2 minutes)', 'We call to talk it through and book a visit', 'You get an itemised, written quote'].map((t, i) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink-900 text-[13px] font-bold text-amber">{i + 1}</span>
                  <span className="pt-0.5">{t}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-lg border border-concrete-300 bg-white p-5">
              <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-concrete-500">Rather talk?</p>
              <a href={site.phoneHref} className="mt-1 block font-display text-[34px] font-bold leading-none text-ink-950 hover:text-amber-deep">
                {site.phone}
              </a>
              <p className="mt-2 text-[14px] text-ink-700">
                Or send photos on{' '}
                <a href={site.whatsappQuote} className="font-semibold text-amber-deep underline" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
                .
              </p>
            </div>
          </div>
          <QuoteForm />
        </div>
      </Section>

      {/* ----------------------------------------------------------------- FAQ */}
      <Section>
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHead eyebrow="Questions" title="Straight answers" />
          <FAQ items={homeFaqs} />
        </div>
      </Section>

      <CTA />
      <JsonLd data={faqJsonLd(homeFaqs)} />
    </>
  );
}
