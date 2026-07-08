
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certificates of Analysis (COAs) | UK Peptides',
  description: 'Download independent third-party HPLC and Mass Spectrometry certificates for our premium research peptides. 99%+ purity guaranteed.',
  alternates: {
    canonical: '/coas',
    languages: {
      'en-GB': '/coas',
    },
  },
  openGraph: {
    title: 'Certificates of Analysis (COAs) | UK Peptides',
    description: 'Download independent third-party HPLC and Mass Spectrometry certificates for our premium research peptides. 99%+ purity guaranteed.',
    url: 'https://buyretat.co.uk/coas',
    siteName: 'UK Peptides',
    images: [
      {
        url: '/Home.png',
        width: 1200,
        height: 630,
        alt: 'UK Peptides COAs',
      }
    ],
    locale: 'en_GB',
    type: 'website',
  },
};

export default function CoasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
