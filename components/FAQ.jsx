export default function FAQ({ items, className = '' }) {
  return (
    <div className={`divide-y divide-concrete-200 border-y border-concrete-200 ${className}`}>
      {items.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[16.5px] font-semibold text-ink-950">
            {item.q}
            <svg viewBox="0 0 24 24" className="mt-1 h-5 w-5 shrink-0 text-amber-deep transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </summary>
          <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-ink-700">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
