import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | UK Peptides',
  description: 'Find answers to common questions about research peptides, HPLC purity certification, secure ordering, and fast UK logistics.',
  alternates: {
    canonical: '/faq',
    languages: {
      'en-GB': '/faq',
    },
  },
  openGraph: {
    title: 'Frequently Asked Questions | UK Peptides',
    description: 'Find answers to common questions about research peptides, HPLC purity certification, secure ordering, and fast UK logistics.',
    url: 'https://buyretat.co.uk/faq',
    siteName: 'UK Peptides',
    images: [
      {
        url: '/Home.png',
        width: 1200,
        height: 630,
        alt: 'Frequently Asked Questions UK Peptides',
      }
    ],
    locale: 'en_GB',
    type: 'website',
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
