import Link from 'next/link';
import { site } from '@/lib/site';

export const metadata = { title: 'Thank you', robots: { index: false } };

/** Fallback landing page for a form submitted without JavaScript. */
export default function ThankYouPage() {
  return (
    <div className="container-x py-24 text-center sm:py-32">
      <p className="eyebrow justify-center">
        <span className="h-px w-8 bg-amber" />
        Request received
      </p>
      <h1 className="mt-5 h1 text-ink-950">Thanks — we have it</h1>
      <p className="mx-auto mt-5 max-w-[52ch] text-[16.5px] leading-relaxed text-ink-700">
        Someone will call or email you within one business day to book the free on-site look. If
        water is coming in right now, call{' '}
        <a href={site.phoneHref} className="font-semibold text-amber-deep underline">{site.phone}</a>{' '}
        instead of waiting.
      </p>
      <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href="/" className="btn-primary">Back to the home page</Link>
        <Link href="/projects" className="btn-ghost">See recent work</Link>
      </div>
    </div>
  );
}
