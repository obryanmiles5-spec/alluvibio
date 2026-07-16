import type { Metadata } from 'next';
import rawProductsData from './products.json';

export const metadata: Metadata = {
  title: 'Shop Research Peptides | UK Peptides | Buy Retatrutide UK',
  description: 'Browse our complete catalog of high-purity research peptides including Retatrutide, Tirzepatide, BPC-157, and more. Fast shipping in the UK.',
  keywords: 'buy retatrutide uk, research peptides uk, buy peptides online uk, BPC-157 uk, buy tirzepatide uk, premium peptides, shop peptides',
  alternates: {
    canonical: '/shop',
    languages: {
      'en-GB': '/shop',
    },
  },
  openGraph: {
    title: 'Shop Research Peptides | UK Peptides | Buy Retatrutide UK',
    description: 'Browse our complete catalog of high-purity research peptides including Retatrutide, Tirzepatide, BPC-157, and more. Fast shipping in the UK.',
    url: 'https://buyretat.co.uk/shop',
    siteName: 'UK Peptides',
    images: [
      {
        url: '/Home.png',
        width: 1200,
        height: 630,
        alt: 'UK Peptides Shop',
      }
    ],
    locale: 'en_GB',
    type: 'website',
  },
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": rawProductsData.map((product: any, index: number) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://buyretat.co.uk/shop/${product.id}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      {children}
    </>
  );
}
