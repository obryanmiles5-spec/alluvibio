import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | UK Peptides | Leading Research Peptide Supplier',
  description: 'Learn about UK Peptides, the premier UK biochemical distributor. We supply high-purity (99%+) research peptides like Retatrutide, Tirzepatide, and BPC-157 to laboratories and academic institutions.',
  alternates: {
    canonical: '/about',
    languages: {
      'en-GB': '/about',
    },
  },
  openGraph: {
    title: 'About Us | UK Peptides | Leading Research Peptide Supplier',
    description: 'Learn about UK Peptides, the premier UK biochemical distributor. We supply high-purity (99%+) research peptides directly to UK researchers.',
    url: 'https://buyretat.co.uk/about',
    siteName: 'UK Peptides',
    images: [
      {
        url: '/Home.png',
        width: 1200,
        height: 630,
        alt: 'About UK Peptides',
      }
    ],
    locale: 'en_GB',
    type: 'website',
  },
};

export default function About() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://buyretat.co.uk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://buyretat.co.uk/about"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero */}
      <div className="bg-slate-900 py-20 px-6 md:px-12 text-center border-b border-slate-800">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">About UK Peptides</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Leading the UK in high-purity research peptides for academic, clinical, and independent laboratory studies.
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-16 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-sm">🏢</div>
              Our Mission
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              At UK Peptides, our mission is to provide the UK research community with the highest quality biochemicals available. We understand that the integrity of your research depends entirely on the purity of your compounds. That&apos;s why we&apos;ve partnered with world-class synthesis laboratories to bring HPLC-verified peptides directly to UK researchers without the long wait times of international shipping.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We exclusively serve the research community. Our products are sold strictly for in-vitro and laboratory research purposes and are not intended for human consumption.
            </p>
          </section>

          <section className="mb-12" id="standards">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm">🧪</div>
              Research Quality Standards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="border border-slate-100 bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-slate-800 mb-2 uppercase tracking-wider text-sm">Synthesis Protocol</h3>
                <p className="text-slate-500 text-sm">All peptides are synthesized using solid-phase peptide synthesis (SPPS) in ISO9001 certified facilities.</p>
              </div>
              <div className="border border-slate-100 bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-slate-800 mb-2 uppercase tracking-wider text-sm">Purification</h3>
                <p className="text-slate-500 text-sm">Compounds undergo rigorous reverse-phase HPLC purification to ensure a minimum of 99% purity.</p>
              </div>
              <div className="border border-slate-100 bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-slate-800 mb-2 uppercase tracking-wider text-sm">Verification</h3>
                <p className="text-slate-500 text-sm">Mass spectrometry (MS) is used to verify the exact molecular weight and amino acid sequence.</p>
              </div>
              <div className="border border-slate-100 bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-slate-800 mb-2 uppercase tracking-wider text-sm">Lyophilization</h3>
                <p className="text-slate-500 text-sm">Products are lyophilized (freeze-dried) without fillers like mannitol unless explicitly stated, ensuring maximum stability.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center text-sm">🚚</div>
              UK Shipping & Logistics
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We warehouse all our inventory securely in the UK. This allows us to offer Next-Day delivery options for researchers who need their materials urgently. All shipments are packaged discreetly and securely to prevent degradation during transit. 
            </p>
          </section>
          
        </div>
      </div>
    </div>
    </>
  );
}
