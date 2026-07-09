import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Lock, EyeOff, FileText, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | UK Peptides',
  description: 'Understand how we protect, handle, and secure your laboratory customer information, order details, and browsing data under GDPR.',
  alternates: {
    canonical: 'https://buyretat.co.uk/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-slate-900 py-16 px-6 md:px-12 text-center border-b border-slate-800">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Privacy Policy</h1>
        <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
          Our commitment to complete data privacy, encryption, and safe laboratory information processing.
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 space-y-8">
          
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-slate-100 bg-slate-50 rounded-xl p-6 flex flex-col items-center text-center">
              <Lock className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">SSL Encrypted</h3>
              <p className="text-xs text-slate-500 mt-2">All transactions and contact submissions are fully SSL encrypted.</p>
            </div>
            <div className="border border-slate-100 bg-slate-50 rounded-xl p-6 flex flex-col items-center text-center">
              <EyeOff className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">No Sharing</h3>
              <p className="text-xs text-slate-500 mt-2">We never sell or distribute laboratory purchaser details to third parties.</p>
            </div>
            <div className="border border-slate-100 bg-slate-50 rounded-xl p-6 flex flex-col items-center text-center">
              <FileText className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">GDPR Compliant</h3>
              <p className="text-xs text-slate-500 mt-2">Fully compliant with domestic UK and international data protections.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-800">Information We Collect</h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              We collect the minimum amount of personal information necessary to fulfill laboratory supply orders and respond to technical scientific questions. This includes your name, institutional affiliation, shipping/billing addresses, email address, and payment transaction metadata.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-800">How We Protect Your Data</h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              We employ advanced database encryption, secure access controls, and industry-standard SSL (Secure Sockets Layer) firewalls to ensure that your private order logs and contact details remain entirely safe from unauthorised access or interception.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-800">Your Data Rights</h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Under GDPR, UK residents have complete rights to request a digital copy of all personal customer data we store, request immediate rectifications to that data, or demand complete deletion of customer records (except where retention is legally required for financial audit tracking).
            </p>
          </section>

          <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-slate-400" />
              <span className="text-xs sm:text-sm text-slate-500">Would you like to request data deletion or ask a question?</span>
            </div>
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all"
            >
              Contact Support
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
