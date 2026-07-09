import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { RefreshCcw, FileCheck, ShieldAlert, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Refund & Return Policy | UK Peptides',
  description: 'Learn about our laboratory refund, return, and order replacement policies for high-purity research chemical compounds.',
  alternates: {
    canonical: 'https://buyretat.co.uk/refunds',
  },
};

export default function RefundsPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-slate-900 py-16 px-6 md:px-12 text-center border-b border-slate-800">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Refund & Return Policy</h1>
        <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
          Our laboratory-grade assurance guarantee. Learn about order cancellations, transit damage, and compound replacements.
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 space-y-8">
          
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-slate-100 bg-slate-50 rounded-xl p-6 flex flex-col items-center text-center">
              <RefreshCcw className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Replacements</h3>
              <p className="text-xs text-slate-500 mt-2">Faulty or broken vials are replaced immediately at no cost.</p>
            </div>
            <div className="border border-slate-100 bg-slate-50 rounded-xl p-6 flex flex-col items-center text-center">
              <FileCheck className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Transit Insurance</h3>
              <p className="text-xs text-slate-500 mt-2">All shipments are fully insured against loss or severe delay.</p>
            </div>
            <div className="border border-slate-100 bg-slate-50 rounded-xl p-6 flex flex-col items-center text-center">
              <ShieldAlert className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Research Policy</h3>
              <p className="text-xs text-slate-500 mt-2">Returns cannot be accepted for reconstituted or used vials.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-800">Research & Lab Chemicals Return Policy</h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Because our chemical compounds are shipped strictly for laboratory research and in-vitro test assays, we are unable to accept physical returns of opened, handled, or reconstituted vials. This is to ensure the complete biochemical security and purity of our inventory.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-800">Damaged, Defective, or Missing Vials</h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              If any peptide vials are broken, cracked, or compromised in transit, please contact us within 48 hours of receipt. You must provide a digital photograph of the damaged vial still inside its sealed borosilicate packaging. Upon verification, we will dispatch an immediate, complimentary replacement vial via Tracked 24h delivery.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-800">Order Cancellations</h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Orders can be fully cancelled and refunded prior to dispatch. Once an order is processed, packaged, and handed over to our domestic UK couriers (usually at 1:00 PM GMT daily), the order can no longer be modified or cancelled.
            </p>
          </section>

          <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-slate-400" />
              <span className="text-xs sm:text-sm text-slate-500">Need to request a replacement or ask a question?</span>
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
