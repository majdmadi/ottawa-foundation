import Link from 'next/link';
import Logo from './Logo';
import { areaHref } from '@/lib/areas';
import { site, nav, legalNav } from '@/lib/site';
import { services } from '@/lib/services';

export default function Footer() {
  return (
    <footer className="dark-section bg-ink-950 text-concrete-300">
      <div className="hazard-rule" aria-hidden="true" />
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-5 max-w-[34ch] text-[14px] leading-relaxed">
            {site.shortPitch}
          </p>
          <p className="mt-5 text-[13px] text-concrete-500">
            {site.address.street}
            <br />
            {site.address.city}, {site.address.region}
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-white">
            Services
          </h2>
          <ul className="space-y-2.5 text-[14px]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-amber">
                  {s.menuName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-white">
            Areas we serve
          </h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-[14px]">
            {site.serviceAreas.map((area) => (
              <li key={area}>
                {areaHref(area) ? (
                  <Link href={areaHref(area)} className="hover:text-amber">{area}</Link>
                ) : (
                  area
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-white">
            Get in touch
          </h2>
          <a href={site.phoneHref} className="block font-display text-2xl font-bold text-amber">
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="mt-2 block break-all text-[14px] hover:text-amber">
            {site.email}
          </a>
          <dl className="mt-5 space-y-1.5 text-[13px]">
            {site.hours.map((h) => (
              <div key={h.days} className="flex justify-between gap-4">
                <dt className="text-concrete-500">{h.days}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
          <Link href="/booking" className="btn-primary mt-6 w-full">
            Book a visit
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-4 py-6 text-[12.5px] text-concrete-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-amber">
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="sr-only">
              {nav.map((n) => n.label).join(', ')}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
