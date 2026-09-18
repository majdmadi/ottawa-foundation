/**
 * Stand-in for client photography. The brief says he has no photos yet ("None —
 * I need help with this") but does have before-and-after shots available for
 * project work.
 *
 * Each placeholder states the exact shot it is waiting for, so the client can
 * work down the list with a phone camera. Replace with next/image once the
 * files land in /public/photos.
 */
export default function ImagePlaceholder({
  label,
  ratio = 'aspect-[4/3]',
  className = '',
  tone = 'dark',
}) {
  const dark = tone === 'dark';
  return (
    <div
      className={`${ratio} ${className} relative flex items-center justify-center overflow-hidden rounded-lg ${
        dark ? 'bg-ink-800 text-concrete-400' : 'bg-concrete-100 text-concrete-500'
      }`}
      role="img"
      aria-label={`Photo placeholder: ${label}`}
    >
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, currentColor 0 1px, transparent 1px 11px)',
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-[80%] text-center">
        <svg viewBox="0 0 24 24" className="mx-auto mb-2 h-6 w-6 opacity-70" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="8.5" cy="10" r="1.5" />
          <path d="M21 16l-5-5-6.5 8" />
        </svg>
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em]">Photo needed</p>
        <p className="mt-1 text-[12.5px] leading-snug opacity-80">{label}</p>
      </div>
    </div>
  );
}
