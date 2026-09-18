'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { site, nav } from '@/lib/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-concrete-200 bg-white/95 backdrop-blur">
      {/* Utility strip: the phone number is the primary conversion on a trades
          site, so it stays visible above everything else on desktop. */}
      <div className="hidden bg-ink-950 text-white lg:block">
        <div className="container-x flex h-9 items-center justify-between text-[12.5px]">
          <p className="text-concrete-300">
            Serving {site.serviceAreas.slice(0, 4).join(' · ')} and the surrounding area
          </p>
          <div className="flex items-center gap-5">
            <span className="text-concrete-300">Free on-site assessment · Written quotes</span>
            <a href={site.whatsappQuote} target="_blank" rel="noopener noreferrer" className="font-semibold text-concrete-200 hover:text-amber">
              WhatsApp us
            </a>
          </div>
        </div>
      </div>

      <div className="container-x flex h-[72px] items-center justify-between">
        <Link href="/" aria-label={`${site.name} — home`}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {nav.slice(1, 6).map((item) => {
            const active =
              !item.href.includes('#') && (pathname === item.href || pathname.startsWith(item.href + '/'));
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`text-[14px] font-semibold uppercase tracking-[0.06em] transition-colors ${
                  active ? 'text-amber-deep' : 'text-ink-700 hover:text-ink-950'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a href={site.phoneHref} className="btn-primary !px-4">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.6a1 1 0 01-.25 1z" />
            </svg>
            Call Now
            <span className="sr-only">: {site.phone}</span>
          </a>
        </nav>

        <a
          href={site.phoneHref}
          className="ml-auto mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md bg-amber text-ink-950 lg:hidden"
        >
          <span className="sr-only">Call {site.phone}</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
            <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.6a1 1 0 01-.25 1z" />
          </svg>
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-concrete-300 lg:hidden"
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-concrete-200 bg-white lg:hidden" aria-label="Mobile">
          <ul className="container-x py-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-concrete-100 py-3.5 text-[15px] font-semibold uppercase tracking-[0.05em] text-ink-800"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="container-x pb-5">
            <a href={site.phoneHref} className="btn-primary w-full">
              Call {site.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
