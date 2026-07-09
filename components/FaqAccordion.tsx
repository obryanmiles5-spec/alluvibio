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
    question: 'Are peptides legal to buy in the UK?',
    answer: 'Yes, it is perfectly legal to buy and possess peptides in the UK as long as they are strictly for in-vitro laboratory research and not intended for human consumption.'
  },
  {
    id: 2,
    question: 'Can you safely buy peptides on TikTok, Instagram, or Facebook?',
    answer: 'While you may see peptides advertised on social media (TikTok, Instagram, Snapchat, Facebook groups), buying from unverified sellers on these platforms carries a high risk of receiving under-dosed, fake, or contaminated products. Always purchase from a verified UK laboratory supplier that provides independent HPLC and Mass Spectrometry testing.'
  },
  {
    id: 3,
    question: 'How do I know if peptides bought online are real? (COA Checking)',
    answer: 'The only way to verify authenticity is through a Certificate of Analysis (COA) from a third-party laboratory. You must look for an HPLC graph showing a single sharp peak (indicating purity) and a Mass Spectrometry (MS) result matching the peptide\'s theoretical molecular weight.'
  },
  {
    id: 4,
    question: 'What is the purity level of UK Peptides peptides?',
    answer: 'We guarantee a minimum purity of 99% across all our research peptides. Every batch is rigorously tested, ensuring you never receive the low-grade compounds often found in social media marketplaces.'
  },
  {
    id: 5,
    question: 'Is it safe to buy Retatrutide for research in the UK?',
    answer: 'Yes, Retatrutide is available for legitimate academic and laboratory research. However, due to its popularity, it is frequently counterfeited. Always demand up-to-date batch testing and avoid peer-to-peer sellers.'
  },
  {
    id: 6,
    question: 'What does "lyophilized powder" mean?',
    answer: 'Lyophilization is a freeze-drying process that removes moisture while preserving the biochemical structure. This is how high-quality peptides should be shipped to ensure maximum stability, unlike pre-mixed solutions often sold on social apps.'
  },
  {
    id: 7,
    question: 'What sterile diluent should be used for reconstitution?',
    answer: 'For most laboratory assays, sterile Bacteriostatic Water (0.9% Benzyl Alcohol) is recommended. It prevents bacterial growth and extends the shelf life of the reconstituted solution up to 14-21 days in a refrigerator.'
  },
  {
    id: 8,
    question: 'Are these products intended for human or clinical consumption?',
    answer: 'No. All UK Peptides products are sold strictly for in-vitro laboratory research and academic studies. They are not intended for human consumption, therapeutic, or diagnostic use.'
  },
  {
    id: 9,
    question: 'How should the peptides be stored upon receipt?',
    answer: 'Lyophilized powders can be kept at room temperature for short transit times but should be stored at -20°C for long-term preservation. Once reconstituted, solutions must be kept refrigerated at 2°C to 8°C.'
  },
  {
    id: 10,
    question: 'What is the difference between your peptides and those on social media?',
    answer: 'Our peptides are synthesized in ISO-certified laboratories and undergo strict third-party analysis. Social media vendors often lack quality control, proper cold-chain storage, and verifiable testing, compromising your research integrity.'
  }
];

const LOGISTICS_FAQS: FaqItem[] = [
  {
    id: 11,
    question: 'Where is the best place to buy peptides for research in the UK?',
    answer: 'The best place is a dedicated, UK-based biochemical distributor like UK Peptides. Buying domestically ensures fast delivery without customs seizures or import duties that often occur when buying from overseas social media vendors.'
  },
  {
    id: 12,
    question: 'How long does UK shipping take?',
    answer: 'We offer Free Next-Day Delivery on orders over £120. Orders processed before 1:00 PM GMT are shipped same-day via Tracked Next-Day courier services.'
  },
  {
    id: 13,
    question: 'What payment methods do you accept?',
    answer: 'For security and convenience, we accept Bank Transfer (BACS/CHAPS) and accepted UK Gift Cards. No payment details are captured on the website; our sales team will coordinate secure payment after checkout.'
  },
  {
    id: 14,
    question: 'Is your shipping packaging discrete?',
    answer: 'Yes. All shipments are packed in heavy-duty, plain unbranded cardboard boxes or padded mailers. There is no mention of peptides or medical terms on the exterior label.'
  },
  {
    id: 15,
    question: 'Why do you have a minimum order value?',
    answer: 'To maintain our wholesale-pricing structure and ensure the highest quality logistics and cold-chain packaging, we enforce a minimum order threshold of £120.00.'
  },
  {
    id: 16,
    question: 'Do you ship internationally outside the UK?',
    answer: 'Currently, our primary focus is supplying laboratories and research institutions directly within the United Kingdom to ensure reliable, domestic, customs-free fulfillment.'
  },
  {
    id: 17,
    question: 'How are temperature-sensitive products packaged?',
    answer: 'We package all shipments in insulated bubbles with secondary protection to shield against extreme environmental fluctuations during transit, preserving the integrity of the peptide bonds.'
  },
  {
    id: 18,
    question: 'Can I track my shipment?',
    answer: 'Yes. Once your order has been processed and dispatched, you will receive an automated email containing your tracking link and courier details for real-time delivery status.'
  },
  {
    id: 19,
    question: 'What is your return/refund policy?',
    answer: 'Since our products are high-purity laboratory biochemicals, we cannot accept returns once a vial has left our secure logistics facility to ensure chain of custody. However, if a shipment is damaged in transit, we will dispatch a replacement.'
  },
  {
    id: 20,
    question: 'How do I contact customer procurement support?',
    answer: 'You can reach our professional support team through the Contact form on our website, or by emailing us directly. We aim to respond to all technical and sales inquiries within 2 hours.'
  }
];


export default function FaqAccordion({ limit }: { limit?: number }) {
  const [openId, setOpenId] = useState<number | null>(null);
  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };
  
  const allFaqs = [...QUALITY_FAQS, ...LOGISTICS_FAQS];
  const displayedQuality = limit ? QUALITY_FAQS.slice(0, limit) : QUALITY_FAQS;
  const displayedLogistics = limit ? LOGISTICS_FAQS.slice(0, limit) : LOGISTICS_FAQS;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": allFaqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
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
            {displayedQuality.map((faq) => {
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
            {displayedLogistics.map((faq) => {
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
  
    </>
  );
}
