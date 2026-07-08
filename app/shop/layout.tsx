import type { Metadata } from 'next';

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
  return <>{children}</>;
}
