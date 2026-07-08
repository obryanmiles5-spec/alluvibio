
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | UK Peptides | Buy Research Peptides UK',
  description: 'Contact our UK-based support team for research inquiries, bulk orders, and shipping questions. Available 24/7.',
  alternates: {
    canonical: '/contact',
    languages: {
      'en-GB': '/contact',
    },
  },
  openGraph: {
    title: 'Contact Us | UK Peptides',
    description: 'Contact our UK-based support team for research inquiries, bulk orders, and shipping questions. Available 24/7.',
    url: 'https://buyretat.co.uk/contact',
    siteName: 'UK Peptides',
    images: [
      {
        url: '/Home.png',
        width: 1200,
        height: 630,
        alt: 'UK Peptides Contact',
      }
    ],
    locale: 'en_GB',
    type: 'website',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
