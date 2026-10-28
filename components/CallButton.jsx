'use client';

import { site } from '@/lib/site';

/**
 * A "Call" link that opens the number-picker dialog (components/CallDialog.jsx,
 * mounted once in the root layout). Without JavaScript it is a normal tel: link
 * to the main number.
 */
export default function CallButton({ className, children }) {
  return (
    <a
      href={site.phoneHref}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        window.dispatchEvent(new Event('open-call-dialog'));
      }}
    >
      {children}
    </a>
  );
}
