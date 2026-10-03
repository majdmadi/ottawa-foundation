'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export const GA_ID = 'G-LMYH06FQYN';

/** Send a custom event to Google Analytics (no-op until gtag has loaded). */
export function trackEvent(name, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }
}

/**
 * Google Analytics 4. Page views, visitor location/device, session length and
 * engagement time are collected automatically (including client-side route
 * changes, via GA4 enhanced measurement). On top of that we record:
 *   - phone_call_click   — any tel: link
 *   - whatsapp_click     — any WhatsApp link
 *   - generate_lead      — fired by QuoteForm on a successful submission
 */
export default function Analytics() {
  useEffect(() => {
    function onClick(e) {
      const link = e.target.closest?.('a[href]');
      if (!link) return;
      const href = link.getAttribute('href') || '';
      if (href.startsWith('tel:')) {
        trackEvent('phone_call_click', { link_url: href, page_path: window.location.pathname });
      } else if (/wa\.me|whatsapp/i.test(href)) {
        trackEvent('whatsapp_click', { link_url: href, page_path: window.location.pathname });
      }
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
