import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Scale, FileWarning, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions | UK Peptides',
  description: 'Review our terms of service, laboratory research-use limitations, purchaser responsibility, and legal compliance policies.',
  alternates: {
    canonical: 'https://buyretat.co.uk/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-slate-900 py-16 px-6 md:px-12 text-center border-b border-slate-800">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Terms & Conditions</h1>
        <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
          Legal terms of service and compliance declarations regarding the purchase and laboratory-only use of our chemical compounds.
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 space-y-8">
          
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-slate-100 bg-slate-50 rounded-xl p-6 flex flex-col items-center text-center">
              <ShieldCheck className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Research Use</h3>
              <p className="text-xs text-slate-500 mt-2">All products are strictly for in-vitro and lab research assays.</p>
            </div>
            <div className="border border-slate-100 bg-slate-50 rounded-xl p-6 flex flex-col items-center text-center">
              <Scale className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Purchaser Duty</h3>
              <p className="text-xs text-slate-500 mt-2">Purchasers warrant that they represent certified laboratories.</p>
            </div>
            <div className="border border-slate-100 bg-slate-50 rounded-xl p-6 flex flex-col items-center text-center">
              <FileWarning className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">No Human Use</h3>
              <p className="text-xs text-slate-500 mt-2">Strictly not for clinical use, therapeutic use, or human consumption.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-800">1. Product Research Declaration</h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              All chemical materials and products listed on this website (including Retatrutide, Tirzepatide, BPC-157, etc.) are sold <strong>STRICTLY FOR IN-VITRO LABORATORY AND CHEMICAL RESEARCH PURPOSES ONLY</strong>. Under no circumstances are these compounds to be used as food additives, household chemicals, agricultural agents, cosmetics, animal medicine, human medicine, or therapeutic devices.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-800">2. Purchaser Qualifications</h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              By adding products to your cart and finalizing an order, you represent, warrant, and certify that you are associated with an authorized academic, clinical, or private laboratory facility, and that you have the appropriate equipment, specialized training, and safety protocols required to handle potentially volatile chemical compounds securely.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-800">3. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              UK Peptides Bio, its partners, and directors shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the improper handling, storage, or experimental application of our research chemicals.
            </p>
          </section>

          <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-slate-400" />
              <span className="text-xs sm:text-sm text-slate-500">Have questions about safety declarations or terms?</span>
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
