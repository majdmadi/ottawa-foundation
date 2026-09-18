import Link from 'next/link';
import { site } from '@/lib/site';

export default function NotFound() {
  return (
    <div className="container-x py-24 text-center sm:py-32">
      <p className="font-display text-[72px] font-bold leading-none text-concrete-300">404</p>
      <h1 className="mt-4 h2 text-ink-950">That page is not here</h1>
      <p className="mx-auto mt-4 max-w-[46ch] text-[16px] leading-relaxed text-ink-700">
        The link may be old or mistyped. Try the services page, or just call — that is faster anyway.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href="/services" className="btn-primary">Our services</Link>
        <a href={site.phoneHref} className="btn-ghost">Call {site.phone}</a>
      </div>
    </div>
  );
}
