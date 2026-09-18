import Link from 'next/link';
import { site } from '@/lib/site';

export default function CTA({
  title = 'Get it looked at before the next freeze',
  body = 'A free on-site assessment takes about thirty minutes and costs you nothing. You will know what is wrong, whether it needs doing now, and what it costs.',
}) {
  return (
    <section className="dark-section bg-ink-900">
      <div className="hazard-rule" aria-hidden="true" />
      <div className="container-x grid gap-8 py-14 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div>
          <h2 className="h2 text-white">{title}</h2>
          <p className="mt-4 max-w-prose text-[16px] leading-relaxed text-concrete-400">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a href={site.phoneHref} className="btn-primary flex-1">
            Call {site.phone}
          </a>
          <Link href="/contact" className="btn-ghost-light flex-1">
            Request a quote
          </Link>
        </div>
      </div>
    </section>
  );
}
