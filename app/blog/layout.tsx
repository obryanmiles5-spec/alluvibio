
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research Blog | UK Peptides | Scientific Research',
  description: 'Read our latest articles on peptide research, HPLC testing, and scientific advancements in the UK. Learn about Retatrutide, Tirzepatide, and BPC-157.',
  alternates: {
    canonical: '/blog',
    languages: {
      'en-GB': '/blog',
    },
  },
  openGraph: {
    title: 'Research Blog | UK Peptides',
    description: 'Read our latest articles on peptide research, HPLC testing, and scientific advancements in the UK.',
    url: 'https://buyretat.co.uk/blog',
    siteName: 'UK Peptides',
    images: [
      {
        url: '/Home.png',
        width: 1200,
        height: 630,
        alt: 'UK Peptides Research Blog',
      }
    ],
    locale: 'en_GB',
    type: 'website',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
