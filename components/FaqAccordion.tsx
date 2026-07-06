'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, Shield, Truck } from 'lucide-react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const QUALITY_FAQS: FaqItem[] = [
  {
    id: 1,
    question: 'Is it legal to buy research peptides in the UK? (Top Google Search)',
    answer: 'Yes. In the United Kingdom, it is completely legal to purchase and possess peptides for laboratory research, in-vitro testing, and scientific studies. Under the UK Medicines Act, these compounds are sold strictly for research purposes and must not be marketed or acquired for human consumption.'
  },
  {
    id: 2,
    question: 'Why are peptides like Retatrutide viral on TikTok and Instagram? (Social Media Trend)',
    answer: 'Social media platforms (especially TikTok and Instagram) have seen a viral surge in discussions surrounding novel metabolic research compounds like Retatrutide and BPC-157. However, many accounts promote unverified, low-purity sources through direct messages. Alluvi Bio strictly provides certified, 99%+ pure research compounds with fully verifiable HPLC/MS data to maintain absolute scientific integrity.'
  },
  {
    id: 3,
    question: 'What is the highest-searched peptide in the UK for weight research? (Google Suggestion)',
    answer: 'Retatrutide is currently the highest-searched next-generation compound in the UK. Researchers study it as a triple receptor agonist targeting GLP-1, GIP, and glucagon receptors, exploring its unprecedented thermogenic and insulinotropic properties in comparative metabolic assays.'
  },
  {
    id: 4,
    question: 'How do I avoid peptide scams on Snapchat, Facebook, or Reddit? (User Safety Query)',
    answer: 'Many social media advertisements and direct-messaging groups promote counterfeit or diluted peptides. Authentic lab providers will always provide clear, batch-specific HPLC (High-Performance Liquid Chromatography) and Mass Spectrometry (MS) Certificates of Analysis (COAs). Never purchase from vendors who refuse to display or verify independent lab analysis.'
  },
  {
    id: 5,
    question: 'How do I reconstitute lyophilized peptides? (TikTok & YouTube Reconstitution Guide)',
    answer: 'Lyophilized peptide powders must be reconstituted using a sterile diluent, such as sterile Bacteriostatic Water (0.9% Benzyl Alcohol) or physiological saline, depending on your laboratory testing protocol. Technicians use a scientific peptide reconstitution calculator to determine the precise liquid-to-powder ratio for required microgram concentrations.'
  }
];

const LOGISTICS_FAQS: FaqItem[] = [
  {
    id: 6,
    question: 'How can I pay for peptides in the UK? (Google Search Query)',
    answer: 'We support secure, hassle-free offline procurement options to accommodate research budgets: Direct Bank Transfer (BACS/CHAPS) and Accepted UK Gift Cards. No sensitive payment details are entered during online checkout. Once you submit your order draft, our sales team will send specific instructions for your preferred option.'
  },
  {
    id: 7,
    question: 'Is there a minimum order limit for UK peptide orders? (Procurement FAQ)',
    answer: 'Yes, Alluvi Bio enforces a minimum order requirement of £120.00 on all laboratory purchases. This enables us to maintain wholesale pricing structures, conduct rigorous independent third-party batch testing, and provide complimentary temperature-controlled Next-Day Special Delivery.'
  },
  {
    id: 8,
    question: 'How does the Bank Transfer and UK Gift Card payment process work?',
    answer: 'After selecting your preferred payment method in your cart drawer and submitting your secure order draft, our representative will contact you via Email or WhatsApp. They will provide the BACS/CHAPS bank details or list of accepted UK gift card formats. Upon receipt and validation, your package is immediately dispatched.'
  },
  {
    id: 9,
    question: 'Can I buy Retatrutide or BPC-157 with Next-Day UK Delivery?',
    answer: 'Yes. All orders submitted and paid before 1:00 PM GMT are dispatched same-day from our UK fulfillment center. We provide free, fully tracked Royal Mail Special Delivery (or premium courier service) inside insulated thermal packaging to protect lyophilized structure.'
  },
  {
    id: 10,
    question: 'Do you accept corporate or university institutional procurement orders?',
    answer: 'Absolutely. We regularly supply academic research departments, contract research organizations (CROs), and private analytical laboratories throughout the UK. We accommodate specialized institutional purchase orders and offer customized bulk invoicing via direct bank transfer.'
  }
];

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div id="faq" className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
        {/* Section 1: Quality & Research */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-200">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-800 text-lg">Section 1: Quality & Standards</h3>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Peptide Synthesis & Lab Purity</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {QUALITY_FAQS.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className={`border rounded-xl transition-all duration-200 bg-white ${
                    isOpen ? 'border-blue-400 shadow-md ring-1 ring-blue-100' : 'border-slate-150 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between text-left px-5 py-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-slate-800 text-sm leading-snug flex items-start gap-2.5">
                      <HelpCircle className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-250 ${
                      isOpen ? 'transform rotate-180 text-blue-500' : ''
                    }`} />
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-56 border-t border-slate-100' : 'max-h-0'
                  }`}>
                    <p className="px-5 py-4 text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Logistics & Orders */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-200">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-800 text-lg">Section 2: Ordering & Logistics</h3>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">UK Domestic Shipping & Orders</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {LOGISTICS_FAQS.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className={`border rounded-xl transition-all duration-200 bg-white ${
                    isOpen ? 'border-blue-400 shadow-md ring-1 ring-blue-100' : 'border-slate-150 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between text-left px-5 py-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-slate-800 text-sm leading-snug flex items-start gap-2.5">
                      <HelpCircle className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-250 ${
                      isOpen ? 'transform rotate-180 text-blue-500' : ''
                    }`} />
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-56 border-t border-slate-100' : 'max-h-0'
                  }`}>
                    <p className="px-5 py-4 text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
