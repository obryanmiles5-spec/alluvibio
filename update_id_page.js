const fs = require('fs');
let content = fs.readFileSync('app/shop/[id]/page.tsx', 'utf8');

const metadataSnippet = `
import type { Metadata } from 'next';
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const products = productsData as Product[];
  const product = products.find((p) => p.id === resolvedParams.id);
  if (!product) return { title: 'Product Not Found' };
  return {
    title: \`Buy \${product.name} | UK Peptides\`,
    description: \`High-purity \${product.name} for laboratory research. Buy premium peptides online at UK Peptides with fast UK delivery.\`,
    keywords: \`buy \${product.name} uk, \${product.name} peptides uk, buy peptides online\`,
    openGraph: {
      title: \`Buy \${product.name} | UK Peptides\`,
      description: \`High-purity \${product.name} for laboratory research.\`,
      images: [{ url: product.image, width: 600, height: 600, alt: product.name }],
    }
  };
}
`;

content = content.replace('export async function generateStaticParams() {', metadataSnippet + 'export async function generateStaticParams() {');

fs.writeFileSync('app/shop/[id]/page.tsx', content);
console.log('Updated app/shop/[id]/page.tsx');
