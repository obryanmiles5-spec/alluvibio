import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import ReviewSlider from '@/components/ReviewSlider';
import FaqAccordion from '@/components/FaqAccordion';
import Image from 'next/image';
import rawProductsData from './shop/products.json';
const productsData = rawProductsData as any[];

export default function Home() {
  const bestsellerProducts = productsData.slice(0, 8);

  return (
    <div className="flex-1 flex flex-col">
      {/* Centered Hero Section with Uploaded Image */}
      <section className="relative h-[550px] md:h-[650px] bg-slate-950 overflow-hidden flex items-center justify-center text-center">
        {/* Cover Image */}
        <div className="absolute inset-0">
          <Image unoptimized 
            src="/Home.png"
            alt="Retatrutide UK Peptides Cover"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/90"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-500/10 border border-blue-400/30 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
            UK Laboratory Certified Purity
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 max-w-4xl uppercase tracking-tight">
            Retatrutide <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">UK Peptides</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg mb-8 max-w-2xl font-medium leading-relaxed">
            Precision-engineered biochemicals for clinical laboratory research. 99%+ purity guaranteed through independent third-party HPLC and Mass Spectrometry verification.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full max-w-md mx-auto">
            <Link href="/shop" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold shadow-lg shadow-blue-900/40 transition-all text-sm md:text-base w-full sm:w-auto text-center">
              Shop Collection
            </Link>
            <Link href="/coas" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-bold transition-all text-sm md:text-base backdrop-blur-md w-full sm:w-auto text-center">
              View Lab Reports
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers Section - 8 Products in 2 Rows */}
      <section className="bg-white py-20 px-6 md:px-12 border-b border-slate-100">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-blue-600 text-xs font-extrabold uppercase tracking-[0.25em] bg-blue-50 px-3 py-1 rounded-full">UK Stocked</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mt-3">Bestselling Research Peptides</h2>
              <p className="text-slate-500 text-sm mt-1">Guaranteed 99%+ purity on our most in-demand laboratory-certified biochemical compounds.</p>
            </div>
            <Link href="/shop" className="text-blue-600 text-sm font-bold hover:text-blue-700 transition-colors uppercase tracking-wider flex items-center gap-1.5 shrink-0">
              Explore All Products &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {bestsellerProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Service Showcase Banner */}
      <section className="bg-slate-950 text-white py-20 px-6 md:px-12 overflow-hidden relative">
        <div className="absolute inset-0">
          <Image unoptimized 
            src="https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&q=80&w=1600"
            alt="UK Peptide Research Laboratory"
            fill
            sizes="100vw"
            className="object-cover opacity-20 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/85 to-slate-950"></div>
        </div>
        
        <div className="container mx-auto relative z-10 max-w-5xl text-center flex flex-col items-center">
          <h3 className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Laboratory Focused Support</h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight max-w-2xl mb-6">
            Elite Biochemical Distribution Designed for UK Institutions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mb-10 leading-relaxed">
            UK Peptides Bio is a premier partner for university laboratories, private contract research organizations (CROs), and academic investigators across the United Kingdom. We eliminate international customs friction, ensuring discrete, rapid, and fully documented peptide shipments.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full text-left mt-4">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <div className="text-xl font-bold mb-2 text-blue-400">⚡ Tracked 24h Delivery</div>
              <p className="text-slate-400 text-xs leading-relaxed">Orders placed before 1 PM are shipped same-day via premium domestic courier networks.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <div className="text-xl font-bold mb-2 text-blue-400">🔒 Discrete Logistics</div>
              <p className="text-slate-400 text-xs leading-relaxed">Tamper-evident, plain packaging designed to ensure complete confidentiality and security.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <div className="text-xl font-bold mb-2 text-blue-400">📋 HPLC Chromatograms</div>
              <p className="text-slate-400 text-xs leading-relaxed">Every compound vial is bound to its verifiable chemical mass report and certificate download.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Customer Testimonials Slider */}
      <section className="bg-slate-50 py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-blue-600 text-xs font-extrabold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Reviews</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mt-4 mb-3">Researcher Testimonials</h2>
            <p className="text-slate-500 text-sm">See how leading academic and industrial laboratories across the UK rate UK Peptides Bio for compound purity and delivery.</p>
          </div>

          <ReviewSlider />
        </div>
      </section>

      {/* Why Choose Us Standard Section */}
      <section className="bg-white py-20 px-6 md:px-12 border-t border-slate-100">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 text-xs font-extrabold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Our Standards</span>
            <h2 className="text-3xl font-bold text-slate-800 mt-4 mb-4">Why Researchers Choose UK Peptides</h2>
            <p className="text-slate-500 text-sm">We maintain strict quality control measures to ensure consistent, reliable results for your laboratory research.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '99%+ Purity Guarantee', desc: 'Every batch is rigorously tested via HPLC and Mass Spectrometry.', icon: '🧪' },
              { title: 'UK Sourced & Shipped', desc: 'Domestic shipping ensures faster delivery times and no customs delays.', icon: '🇬🇧' },
              { title: 'Dedicated Support', desc: 'Expert customer service team available to assist with your research needs.', icon: '🛡️' }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Accordion FAQs section */}
      <section className="bg-slate-50 py-20 px-6 md:px-12 border-t border-b border-slate-100">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-blue-600 text-xs font-extrabold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Frequently Asked Questions</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mt-4 mb-3">Academic & Logistics FAQs</h2>
            <p className="text-slate-500 text-sm">Everything you need to know about our compound syntheses, quality control protocols, and UK courier fulfillment.</p>
          </div>

          <FaqAccordion />
        </div>
      </section>
    </div>
  );
}
