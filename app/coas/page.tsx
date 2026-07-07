'use client';

import Link from 'next/link';
import { FileText, Download, CheckCircle, Search, ShieldCheck } from 'lucide-react';

const COAS_DATA = [
  { id: '1', batch: 'RET-2026-04A', product: 'UK Peptides Retatrutide 10mg', purity: '99.82%', date: 'April 2026', method: 'HPLC & MS' },
  { id: '2', batch: 'TIR-2026-05B', product: 'UK Peptides Tirzepatide 10mg', purity: '99.71%', date: 'May 2026', method: 'HPLC & MS' },
  { id: '3', batch: 'TIR-2026-03C', product: 'UK Peptides Tirzepatide 5mg', purity: '99.64%', date: 'March 2026', method: 'HPLC & MS' },
  { id: '4', batch: 'SEM-2026-05A', product: 'UK Peptides Semaglutide 5mg', purity: '99.58%', date: 'May 2026', method: 'HPLC & MS' },
  { id: '5', batch: 'BPC-2026-02D', product: 'UK Peptides BPC-157 5mg', purity: '99.88%', date: 'February 2026', method: 'HPLC & MS' },
  { id: '6', batch: 'TB-2026-01B', product: 'UK Peptides TB-500 5mg', purity: '99.49%', date: 'January 2026', method: 'HPLC & MS' },
  { id: '7', batch: 'IPA-2026-04C', product: 'UK Peptides Ipamorelin 5mg', purity: '99.61%', date: 'April 2026', method: 'HPLC & MS' },
  { id: '8', batch: 'MT2-2026-05A', product: 'UK Peptides Melanotan II 10mg', purity: '99.78%', date: 'May 2026', method: 'HPLC & MS' },
];

export default function CoasPage() {
  return (
    <div className="flex-1 bg-slate-50 min-h-screen py-12 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Quality Assurance</span>
          <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight mt-4 mb-4">Certificates of Analysis (COAs)</h1>
          <p className="text-slate-600 text-base sm:text-lg">
            At UK Peptides Bio, third-party laboratory verification is absolute. We test every single batch synthesized via HPLC and Mass Spectrometry to guarantee 99%+ chemical purity for your studies.
          </p>
        </div>

        {/* Hero Alert card */}
        <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-lg leading-tight">Strict Verification Standards</h3>
              <p className="text-slate-500 text-sm mt-1 max-w-xl">
                Our analytical testing is performed by accredited, independent laboratory facilities. Each download package includes the original chromatogram and mass spectrum charts.
              </p>
            </div>
          </div>
          <Link href="/about" className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-sm transition-all whitespace-nowrap">
            About Our Testing &rarr;
          </Link>
        </div>

        {/* COA List & Search */}
        <div className="bg-white border border-slate-200 shadow-sm rounded-3xl overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-slate-150 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-slate-50/50">
            <div>
              <h2 className="font-extrabold text-slate-800 text-xl">Active Research Batches</h2>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mt-0.5">HPLC / MS Analysis Database</p>
            </div>
            
            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search by product or batch..." 
                className="w-full bg-white border border-slate-250 text-sm rounded-xl pl-9 pr-4 py-2 focus:outline-none focus:border-blue-500 placeholder-slate-400 text-slate-800"
                disabled
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-150 text-slate-500 text-xs font-bold uppercase tracking-wider bg-slate-50/30">
                  <th className="px-6 py-4">Batch Number</th>
                  <th className="px-6 py-4">Product Name</th>
                  <th className="px-6 py-4">Purity Rate</th>
                  <th className="px-6 py-4">Analysis Date</th>
                  <th className="px-6 py-4">Testing Method</th>
                  <th className="px-6 py-4 text-right">Certificate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {COAS_DATA.map((coa) => (
                  <tr key={coa.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-mono font-bold text-slate-700">{coa.batch}</td>
                    <td className="px-6 py-4 font-bold text-slate-800">{coa.product}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 text-green-600 font-bold bg-green-50 px-2.5 py-0.5 rounded-full text-xs">
                        <CheckCircle className="w-3 h-3 fill-current" />
                        {coa.purity}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-500 font-medium">{coa.date}</td>
                    <td className="px-6 py-4 text-slate-500 font-medium">{coa.method}</td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 font-bold rounded-lg text-xs transition-colors"
                        onClick={() => alert(`Simulating download for certificate batch ${coa.batch}...`)}
                      >
                        <Download className="w-3.5 h-3.5" />
                        PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Disclaimer footer */}
        <div className="mt-8 text-center">
          <p className="text-slate-400 text-xs leading-relaxed max-w-2xl mx-auto">
            Disclaimer: Certifications are valid strictly for the specified batch numbers. Our materials are distributed exclusively for laboratory research, evaluation, and educational testing.
          </p>
        </div>
      </div>
    </div>
  );
}
