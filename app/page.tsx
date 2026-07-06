import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import Image from 'next/image';

export default function Home() {
  const featuredProducts = [
    { id: '1', name: 'Alluvi Retatrutide 10mg', price: 145.00, badge: 'BEST SELLER', image: 'https://picsum.photos/seed/ret/400/400' },
    { id: '2', name: 'Alluvi Tirzepatide 5mg', price: 89.00, stockStatus: 'Limited Stock', image: 'https://picsum.photos/seed/tir/400/400' },
    { id: '3', name: 'Alluvi BPC-157 5mg', price: 45.00, image: 'https://picsum.photos/seed/bpc/400/400' },
  ];

  return (
    <div className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] bg-slate-900 overflow-hidden flex items-center justify-center text-center">
        {/* Cover Image */}
        <div className="absolute inset-0">
          <Image 
            src="https://picsum.photos/seed/peptide-lab/1920/1080"
            alt="Alluvi Retatrutide Cover"
            fill
            className="object-cover opacity-30 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/30 to-slate-900/80"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-400/30 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
            UK Laboratory Certified Purity
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6 max-w-3xl">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Alluvi Retatrutide</span><br/>
            in the UK
          </h1>
          <p className="text-slate-300 text-base md:text-lg mb-8 max-w-2xl">
            Precision-engineered biochemicals for clinical laboratory research. 99% purity guaranteed through HPLC and MS testing.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/shop" className="px-6 md:px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold shadow-lg shadow-blue-900/40 transition-all text-sm md:text-base w-full sm:w-auto">Shop Collection</Link>
            <Link href="/about" className="px-6 md:px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-bold transition-all text-sm md:text-base backdrop-blur-md w-full sm:w-auto">View Lab Reports</Link>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="bg-white py-16 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-blue-600 text-[11px] font-bold uppercase tracking-[0.2em]">New Arrivals</span>
              <h2 className="text-3xl font-bold text-slate-800 mt-1">Best Sellers</h2>
            </div>
            <Link href="/shop" className="hidden md:block text-slate-400 text-sm font-bold hover:text-blue-600 transition-colors uppercase tracking-wider">
              View All Products &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
            
            {/* Trust CTA Card */}
            <div className="relative h-full bg-slate-900 rounded-2xl p-8 overflow-hidden flex flex-col justify-between group shadow-xl">
               <div className="relative z-10">
                  <h4 className="text-white font-bold text-xl leading-tight mb-3">Laboratory Focused Service</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Providing high-quality peptides for UK based research facilities and academic institutions.</p>
               </div>
               <div className="flex flex-col gap-3 relative z-10 mt-8">
                  <div className="flex items-center gap-3 text-xs text-blue-400 font-bold uppercase tracking-wider">
                    <div className="w-4 h-4 bg-blue-600/30 border border-blue-400/50 rounded-full flex items-center justify-center text-[10px]">✓</div>
                    Fast Track UK Delivery
                  </div>
                  <div className="flex items-center gap-3 text-xs text-blue-400 font-bold uppercase tracking-wider">
                    <div className="w-4 h-4 bg-blue-600/30 border border-blue-400/50 rounded-full flex items-center justify-center text-[10px]">✓</div>
                    Discrete Packaging
                  </div>
               </div>
               <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600/30 blur-[50px] group-hover:bg-blue-500/40 transition-colors"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 py-16 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-blue-600 text-[11px] font-bold uppercase tracking-[0.2em]">Our Standards</span>
            <h2 className="text-3xl font-bold text-slate-800 mt-1 mb-4">Why Researchers Choose AlluviBio</h2>
            <p className="text-slate-500">We maintain strict quality control measures to ensure consistent, reliable results for your laboratory research.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '99%+ Purity Guarantee', desc: 'Every batch is rigorously tested via HPLC and Mass Spectrometry.', icon: '🧪' },
              { title: 'UK Sourced & Shipped', desc: 'Domestic shipping ensures faster delivery times and no customs delays.', icon: '🇬🇧' },
              { title: 'Dedicated Support', desc: 'Expert customer service team available to assist with your research needs.', icon: '🛡️' }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
