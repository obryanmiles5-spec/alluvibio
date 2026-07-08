const fs = require('fs');

let content = fs.readFileSync('app/layout.tsx', 'utf8');

const updatedMetadata = `export const metadata: Metadata = {
  title: 'UK Peptides | Buy Premium Research Peptides Online UK',
  description: 'Buy premium research peptides online in the UK. We specialize in high-purity laboratory peptides including Retatrutide, Tirzepatide, and BPC-157. Fast UK delivery.',
  keywords: 'buy retatrutide uk, research peptides uk, buy peptides online uk, BPC-157 uk, buy tirzepatide uk, premium peptides, uk peptides',
  openGraph: {
    title: 'UK Peptides | Buy Premium Research Peptides Online UK',
    description: 'Buy premium research peptides online in the UK. We specialize in high-purity laboratory peptides including Retatrutide, Tirzepatide, and BPC-157. Fast UK delivery.',
    url: 'https://www.uk-peptides.com',
    siteName: 'UK Peptides',
    images: [
      {
        url: '/Home.png',
        width: 1200,
        height: 630,
        alt: 'UK Peptides',
      }
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK Peptides | Buy Premium Research Peptides Online UK',
    description: 'Buy premium research peptides online in the UK. High-purity laboratory peptides.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};`;

content = content.replace(/export const metadata: Metadata = \{[\s\S]*?\};/, updatedMetadata);

fs.writeFileSync('app/layout.tsx', content);
console.log('Updated app/layout.tsx');
