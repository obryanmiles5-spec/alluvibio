import type {Metadata} from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';
import CartDrawer from '@/components/CartDrawer';
import WhatsAppChat from '@/components/WhatsAppChat';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'UK Peptides | Premium Research Peptides',
  description: 'Premium research peptides for UK laboratory and clinical studies. Precision-engineered biochemicals with 99%+ purity.',
};

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans min-h-screen flex flex-col bg-slate-50 text-slate-900" suppressHydrationWarning>
        <CartProvider>
          <Header />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
          <CartDrawer />
          <WhatsAppChat />
        </CartProvider>
      </body>
    </html>
  );
}

