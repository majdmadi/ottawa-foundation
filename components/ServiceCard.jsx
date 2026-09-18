import Link from 'next/link';
import ServiceIcon from './ServiceIcon';

export default function ServiceCard({ service, index = 0 }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-concrete-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-amber hover:shadow-[0_18px_40px_-22px_rgba(15,23,42,0.45)] focus-visible:-translate-y-1"
    >
      <span
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-amber transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden="true"
      />
      <div className="flex items-start justify-between">
        <span className="flex h-14 w-14 items-center justify-center rounded-md bg-ink-900 text-amber transition-colors group-hover:bg-amber group-hover:text-ink-950">
          <ServiceIcon name={service.icon} />
        </span>
        <span className="font-display text-[28px] font-bold leading-none text-concrete-200">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="mt-6 font-display text-[22px] font-bold uppercase leading-tight tracking-tight text-ink-950">
        {service.name}
      </h3>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-700">{service.summary}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-amber-deep">
        Learn more
        <svg viewBox="0 0 20 20" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="currentColor" aria-hidden="true">
          <path d="M11.3 4.3l5 5a1 1 0 010 1.4l-5 5-1.4-1.4 3.3-3.3H3v-2h10.2L9.9 5.7z" />
        </svg>
      </span>
    </Link>
  );
}
