import { MetadataRoute } from 'next'
import rawProductsData from './shop/products.json'

const productsData = rawProductsData as any[];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://buyretat.co.uk';

  const productRoutes = productsData.map((product) => ({
    url: `${baseUrl}/shop/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const routes = [
    '',
    '/shop',
    '/about',
    '/coas',
    '/contact',
    '/faq',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.9,
  }));

  return [...routes, ...productRoutes];
}
