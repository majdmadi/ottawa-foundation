import { site } from '@/lib/site';
import { services } from '@/lib/services';

export default function sitemap() {
  const base = site.url.replace(/\/$/, '');
  const now = new Date();
  const routes = ['', '/services', '/projects', '/about', '/booking', '/contact'];

  return [
    ...routes.map((route) => ({
      url: `${base}${route}`,
      lastModified: now,
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : 0.8,
    })),
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    })),
  ];
}
