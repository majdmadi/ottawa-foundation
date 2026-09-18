import { site } from '@/lib/site';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/thank-you'],
    },
    sitemap: `${site.url.replace(/\/$/, '')}/sitemap.xml`,
  };
}
