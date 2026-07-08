import type {Metadata} from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';
import CartDrawer from '@/components/CartDrawer';
import WhatsAppChat from '@/components/WhatsAppChat';
import LiveSalesNotification from '@/components/LiveSalesNotification';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'UK Peptides | Buy Premium Research Peptides Online UK',
  description: 'Buy premium research peptides online in the UK. We specialize in high-purity laboratory peptides including Retatrutide, Tirzepatide, and BPC-157. Fast UK delivery.',
  keywords: 'buy retatrutide uk, research peptides uk, buy peptides online uk, BPC-157 uk, buy tirzepatide uk, premium peptides, uk peptides',
  openGraph: {
    title: 'UK Peptides | Buy Premium Research Peptides Online UK',
    description: 'Buy premium research peptides online in the UK. We specialize in high-purity laboratory peptides including Retatrutide, Tirzepatide, and BPC-157. Fast UK delivery.',
    url: 'https://buyretat.co.uk',
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
  metadataBase: new URL('https://buyretat.co.uk'),
  alternates: {
    canonical: '/',
    languages: {
      'en-GB': 'https://buyretat.co.uk',
    },
  },
  verification: {
    google: 'KFUSMqShQb_lzmZxx-x4OJcrayTnYeHo2PCJRW2puiU',
    other: {
      me: ['contact@buyretat.co.uk'],
      'msvalidate.01': 'CCB4AF44321543F2BCED8895FF28FB40',
    },
  },
};

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans min-h-screen flex flex-col bg-slate-50 text-slate-900" suppressHydrationWarning>
        {/* Google Analytics Placeholder */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5RE9Z05SZD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5RE9Z05SZD');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "UK Peptides",
                "url": "https://buyretat.co.uk",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://buyretat.co.uk/shop?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "UK Peptides",
                "url": "https://buyretat.co.uk",
                "logo": "https://buyretat.co.uk/logo.svg",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "email": "contact@buyretat.co.uk",
                  "contactType": "customer service",
                  "areaServed": "GB",
                  "availableLanguage": "English"
                }
              }
            ])
          }}
        />
        <CartProvider>
          <Header />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
          <CartDrawer />
          <WhatsAppChat />
          <LiveSalesNotification />
        </CartProvider>
      </body>
    </html>
  );
}

