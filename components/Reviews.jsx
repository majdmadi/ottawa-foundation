import { site } from '@/lib/site';

/**
 * Google Reviews feed, requested on the brief.
 *
 * The client has no Google Business Profile URL yet, so nothing is faked here:
 * until site.google.profileUrl is filled in, this renders an honest prompt for
 * the owner rather than invented testimonials. Once the profile exists, either
 * paste real reviews into the `reviews` array below or drop in a widget
 * (Elfsight / Trustindex) — see README.
 */
const reviews = [
  // {
  //   name: 'First name L.',
  //   area: 'Barrhaven',
  //   rating: 5,
  //   text: 'Paste a real review here once the Google profile is live.',
  //   date: '2026-08',
  // },
];

function Stars({ n = 5 }) {
  return (
    <span className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={`h-4 w-4 ${i < n ? 'text-amber' : 'text-concrete-300'}`} fill="currentColor" aria-hidden="true">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </span>
  );
}

export default function Reviews() {
  if (!reviews.length) {
    return (
      <div className="rounded-lg border border-dashed border-concrete-300 bg-concrete-100 p-8 text-center">
        <Stars n={5} />
        <p className="mx-auto mt-4 max-w-[52ch] text-[15px] leading-relaxed text-ink-700">
          <strong className="font-semibold text-ink-950">Reviews go here.</strong> Set up the Google
          Business Profile, ask the last ten customers for a review, then paste the profile link into{' '}
          <code className="rounded bg-white px-1.5 py-0.5 text-[13px]">lib/site.js</code> and the real
          ones will show in this spot.
        </p>
        <p className="mt-3 text-[13px] text-concrete-500">
          This block is a placeholder for the owner — it is not published copy.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {reviews.map((r) => (
        <figure key={r.name + r.date} className="card">
          <Stars n={r.rating} />
          <blockquote className="mt-4 text-[15px] leading-relaxed text-ink-800">“{r.text}”</blockquote>
          <figcaption className="mt-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-concrete-500">
            {r.name} — {r.area}
          </figcaption>
        </figure>
      ))}
      {site.google.profileUrl && (
        <p className="md:col-span-3">
          <a
            href={site.google.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] font-semibold text-amber-deep underline"
          >
            Read all reviews on Google
          </a>
        </p>
      )}
    </div>
  );
}
