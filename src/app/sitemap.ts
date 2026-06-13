import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://saisreelogistics.com';

  const routes: { url: string; priority: number }[] = [
    { url: '/', priority: 1.0 },
    { url: '/manpower-supply-chennai', priority: 0.9 },
    { url: '/contract-labour-services', priority: 0.9 },
    { url: '/warehouse-staffing', priority: 0.9 },
    { url: '/industrial-manpower', priority: 0.9 },
    { url: '/3pl-services', priority: 0.9 },
    { url: '/warehousing-services', priority: 0.9 },
    { url: '/transportation-services', priority: 0.9 },
    { url: '/warehouse-staffing-chennai', priority: 0.8 },
    { url: '/industrial-manpower-services', priority: 0.8 },
    { url: '/3pl-services-chennai', priority: 0.8 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.priority >= 1.0 ? 'weekly' as const : 'monthly' as const,
    priority: route.priority,
  }));
}
