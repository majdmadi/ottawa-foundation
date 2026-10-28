'use client';

import { useEffect, useRef } from 'react';
import { site } from '@/lib/site';

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
    <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.6a1 1 0 01-.25 1z" />
  </svg>
);

/**
 * Number picker. Mounted once in the root layout; any <CallButton> opens it by
 * dispatching a window "open-call-dialog" event. Native <dialog>, so focus
 * trapping, Escape-to-close and the backdrop come for free.
 */
export default function CallDialog() {
  const ref = useRef(null);

  useEffect(() => {
    const open = () => {
      const d = ref.current;
      if (d && !d.open) d.showModal();
    };
    window.addEventListener('open-call-dialog', open);
    return () => window.removeEventListener('open-call-dialog', open);
  }, []);

  const close = () => ref.current?.close();
  const numbers = [
    { href: site.phoneHref, label: site.phone },
    { href: site.phone2Href, label: site.phone2 },
  ];

  return (
    <dialog
      ref={ref}
      aria-labelledby="call-dialog-title"
      onClick={(e) => {
        if (e.target === ref.current) close();
      }}
      className="m-auto w-[calc(100%-2rem)] max-w-sm rounded-lg bg-white p-0 shadow-2xl backdrop:bg-ink-950/70"
    >
      <div className="p-6">
        <h2 id="call-dialog-title" className="h3 text-ink-950">
          Which number would you like to call?
        </h2>
        <ul className="mt-5 space-y-3">
          {numbers.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                onClick={close}
                className="btn-primary flex w-full items-center justify-center gap-2 !py-4 text-[18px]"
              >
                <PhoneIcon />
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <button type="button" onClick={close} className="btn-ghost mt-4 w-full">
          Cancel
        </button>
      </div>
    </dialog>
  );
}
