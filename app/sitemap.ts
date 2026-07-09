import { MetadataRoute } from 'next';
import rawProductsData from './shop/products.json';
import { BLOG_POSTS } from '@/lib/blogPosts';

const productsData = rawProductsData as any[];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://buyretat.co.uk';

  // Dynamic Product routes
  const productRoutes = productsData.map((product) => ({
    url: `${baseUrl}/shop/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Dynamic Blog post routes
  const blogPostRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Static directory routes
  const routes = [
    '',
    '/shop',
    '/blog',
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

  return [...routes, ...productRoutes, ...blogPostRoutes];
}
