import { site } from '@/lib/site';

export const WhatsAppGlyph = ({ className = 'h-6 w-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 00-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1012 2zm0 2a8 8 0 016.6 12.5l.7 2.6-2.7-.7A8 8 0 1112 4zm-3.3 4c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.7 2.8 4.3 3.8 2.1.8 2.6.7 3 .6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.6-.3-1.6-.8c-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.6 6.6 0 01-3.3-2.9c-.1-.2 0-.4.1-.5l.4-.5c.2-.2.2-.3.3-.5V12l-.8-1.9c-.2-.5-.4-.4-.6-.4z" />
  </svg>
);

/**
 * Floating WhatsApp button (desktop). Plain wa.me link with a prefilled
 * message — no third-party chat script, nothing to load, nothing to track.
 * On phones the bottom bar carries WhatsApp instead.
 */
export default function WhatsAppButton() {
  return (
    <a
      href={site.whatsappQuote}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-40 hidden items-center gap-3 rounded-full bg-[#1FA855] py-3 pl-3 pr-3 text-white shadow-[0_12px_30px_-10px_rgba(15,23,42,0.6)] transition-all hover:bg-[#178F47] hover:pr-5 lg:flex"
    >
      <WhatsAppGlyph className="h-7 w-7" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-[14px] font-semibold transition-all duration-300 group-hover:max-w-[200px] group-focus-visible:max-w-[200px]">
        Chat on WhatsApp
      </span>
      <span className="sr-only">(opens WhatsApp)</span>
    </a>
  );
}
