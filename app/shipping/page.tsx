import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Truck, Clock, ShieldCheck, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shipping & Delivery Policy | UK Peptides',
  description: 'Understand our fast, discrete UK delivery options, same-day dispatch cuts, courier information, and shipping rates for laboratory research peptides.',
  alternates: {
    canonical: 'https://buyretat.co.uk/shipping',
  },
};

export default function ShippingPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-slate-900 py-16 px-6 md:px-12 text-center border-b border-slate-800">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Shipping & Delivery</h1>
        <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
          Discreet, secure, and rapid UK delivery. We ensure your temperature-sensitive compounds arrive in perfect laboratory condition.
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 space-y-8">
          
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-slate-100 bg-slate-50 rounded-xl p-6 flex flex-col items-center text-center">
              <Truck className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Fast Courier</h3>
              <p className="text-xs text-slate-500 mt-2">Shipped via top domestic UK courier networks with full tracking.</p>
            </div>
            <div className="border border-slate-100 bg-slate-50 rounded-xl p-6 flex flex-col items-center text-center">
              <Clock className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Same-Day Dispatch</h3>
              <p className="text-xs text-slate-500 mt-2">Orders placed before 1:00 PM GMT are dispatched the exact same day.</p>
            </div>
            <div className="border border-slate-100 bg-slate-50 rounded-xl p-6 flex flex-col items-center text-center">
              <ShieldCheck className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Discreet Packaging</h3>
              <p className="text-xs text-slate-500 mt-2">Plain, secure, unbranded packaging ensures complete privacy.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-800">Delivery Rates & Times</h2>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-4">Service</th>
                    <th className="p-4">Delivery Time</th>
                    <th className="p-4">Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-medium text-slate-800">Tracked 24h Express</td>
                    <td className="p-4">Next business day</td>
                    <td className="p-4">£6.99 (Free over £300)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-slate-800">Standard Tracked 48h</td>
                    <td className="p-4">2 - 3 business days</td>
                    <td className="p-4">£4.99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-800">Discreet & Secure Policy</h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              We understand the sensitive nature of scientific research materials. Every order is packed in sturdy, plain, unbranded boxes or mailers that do not display the word &quot;peptide&quot; or list any internal compound names. The return address is listed under our discrete corporate logistics name.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-800">Temperature Controls</h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Our peptides are shipped in highly stable lyophilized (freeze-dried) powder form, vacuum sealed in thick borosilicate glass vials. This allows them to remain completely stable at ambient room temperature during the standard domestic transit duration. Upon arrival, we recommend placing lyophilized vials directly in a laboratory freezer at -20°C for long-term storage.
            </p>
          </section>

          <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-slate-400" />
              <span className="text-xs sm:text-sm text-slate-500">Need specific logistics arrangements?</span>
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
