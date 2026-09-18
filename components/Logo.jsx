import { site } from '@/lib/site';

/**
 * Stoutwall wordmark (placeholder until a designed logo exists).
 * The mark is a foundation wall in section: three courses sitting on an amber
 * footing, with a sealed crack line running through them. Pure SVG, so it stays
 * crisp and can be replaced without touching layout.
 */
export default function Logo({ className = '', light = false }) {
  const fg = light ? '#FFFFFF' : '#1E293B';
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
        <rect x="2" y="31" width="36" height="7" rx="1.5" fill="#F59E0B" />
        <rect x="6" y="21.5" width="28" height="7.5" rx="1.2" fill={fg} />
        <rect x="6" y="12" width="28" height="7.5" rx="1.2" fill={fg} opacity="0.72" />
        <rect x="6" y="2.5" width="28" height="7.5" rx="1.2" fill={fg} opacity="0.44" />
        <path d="M22 2.5l-3 9.5 4 9.5-3 7.5" fill="none" stroke="#F59E0B" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
      <span className="leading-none">
        <span
          className="block font-display text-[22px] font-bold uppercase leading-none tracking-[0.03em] sm:text-[24px]"
          style={{ color: fg }}
        >
          {site.name}
        </span>
        <span className={`mt-0.5 block text-[9.5px] font-semibold uppercase tracking-[0.24em] ${light ? 'text-amber' : 'text-amber-deep'}`}>
          Foundation &amp; Concrete
        </span>
      </span>
    </span>
  );
}
