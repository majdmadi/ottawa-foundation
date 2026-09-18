import Link from 'next/link';
import { site } from '@/lib/site';
import { WhatsAppGlyph } from './WhatsAppButton';

/**
 * Fixed bottom bar on phones: Call | WhatsApp | Get Quote — the three actions
 * that actually get used on mobile, always within thumb reach.
 */
export default function MobileCallBar() {
  const cell = 'flex flex-col items-center justify-center gap-1 py-2.5 text-[11.5px] font-semibold uppercase tracking-[0.08em]';
  return (
    <nav aria-label="Quick contact" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-ink-800 bg-ink-950 lg:hidden">
      <a href={site.phoneHref} className={`${cell} text-white`}>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.6a1 1 0 01-.25 1z" />
        </svg>
        Call
      </a>
      <a href={site.whatsappQuote} target="_blank" rel="noopener noreferrer" className={`${cell} border-x border-ink-800 text-white`}>
        <WhatsAppGlyph className="h-5 w-5 text-[#25D366]" />
        WhatsApp
      </a>
      <Link href="/#quote" className={`${cell} bg-amber text-ink-950`}>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
        Get Quote
      </Link>
    </nav>
  );
}
