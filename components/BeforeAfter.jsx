'use client';

import { useId, useState } from 'react';
import Image from 'next/image';

/**
 * Before/after comparison slider.
 *
 * Drag the handle (or focus it and use the arrow keys) to reveal the after
 * shot. Under the hood it is a native <input type="range">, so it works with a
 * keyboard, touch and screen readers without extra scripting.
 *
 * `before` / `after` accept an image path. Until the client's photos arrive,
 * each side shows a labelled placeholder naming the exact shot needed.
 */
function Panel({ src, alt, shot, kind }) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover"
        draggable={false}
      />
    );
  }
  const before = kind === 'before';
  return (
    <div
      className={`absolute inset-0 flex items-center ${before ? 'justify-start pl-[6%]' : 'justify-end pr-[6%]'} ${
        before ? 'bg-ink-800 text-concrete-400' : 'bg-[#E7EDF3] text-ink-600'
      }`}
    >
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: before
            ? 'repeating-linear-gradient(-45deg, currentColor 0 1px, transparent 1px 10px)'
            : 'repeating-linear-gradient(0deg, currentColor 0 1px, transparent 1px 22px)',
        }}
        aria-hidden="true"
      />
      <p className={`relative max-w-[38%] text-[12px] leading-snug ${before ? 'text-left' : 'text-right'}`}>
        <span className="block text-[11px] font-semibold uppercase tracking-[0.16em]">Photo needed</span>
        {shot}
      </p>
    </div>
  );
}

export function CompareSlider({ project, className = '' }) {
  const [pos, setPos] = useState(50);
  const id = useId();
  return (
    <div className={`relative aspect-[4/3] select-none overflow-hidden rounded-lg bg-ink-900 ${className}`}>
      <Panel kind="before" src={project.before} alt={`Before: ${project.title}`} shot={project.beforeShot} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
        <Panel kind="after" src={project.after} alt={`After: ${project.title}`} shot={project.afterShot} />
      </div>

      <span className="pointer-events-none absolute left-3 top-3 rounded bg-ink-950/85 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
        Before
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded bg-amber px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-ink-950">
        After
      </span>

      {/* Divider + handle (visual only; the range input below does the work) */}
      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-amber" style={{ left: `${pos}%` }} aria-hidden="true">
        <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-amber bg-ink-950 text-amber shadow-lg">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            <path d="M9 6l-6 6 6 6V6zm6 0v12l6-6-6-6z" />
          </svg>
        </span>
      </div>

      <label htmlFor={id} className="sr-only">
        Compare before and after for {project.title}
      </label>
      <input
        id={id}
        type="range"
        min="0"
        max="100"
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-valuetext={`${pos}% before shown`}
        className="compare-range absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}

/**
 * Filterable project grid. Chips filter by service; each card holds a slider.
 */
export default function ProjectGallery({ projects, limit }) {
  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.service)))];
  const [active, setActive] = useState('All');
  const shown = projects.filter((p) => active === 'All' || p.service === active).slice(0, limit ?? projects.length);

  return (
    <div>
      <div role="group" aria-label="Filter projects by service" className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={`rounded-full border px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.06em] transition-colors ${
              active === c
                ? 'border-ink-900 bg-ink-900 text-white'
                : 'border-concrete-300 bg-white text-ink-700 hover:border-amber'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {shown.map((p) => (
          <article key={p.title} className="overflow-hidden rounded-lg border border-concrete-200 bg-white">
            <CompareSlider project={p} className="rounded-none" />
            <div className="p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-amber-deep">
                {p.service} · {p.area}
                {p.duration ? ` · ${p.duration}` : ''}
              </p>
              {p.sample && (
                <p className="mt-2 inline-block rounded border border-dashed border-concrete-400 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-concrete-500">
                  Sample job · illustrative photos
                </p>
              )}
              <h3 className="mt-2 font-display text-[22px] font-bold uppercase leading-tight text-ink-950">{p.title}</h3>
              {p.body && <p className="mt-2.5 text-[15px] leading-relaxed text-ink-700">{p.body}</p>}
            </div>
          </article>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {shown.length} {shown.length === 1 ? 'project' : 'projects'}
      </p>
    </div>
  );
}
