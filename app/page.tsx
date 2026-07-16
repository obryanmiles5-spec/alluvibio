import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import ReviewSlider from '@/components/ReviewSlider';
import FaqAccordion from '@/components/FaqAccordion';
import Image from 'next/image';
import rawProductsData from './shop/products.json';
const productsData = rawProductsData as any[];

const priorityIds = ['tirzepatide', 'bpc-157', 'retatrutide'];
const sortedProductsData = [...productsData].sort((a, b) => {
  const indexA = priorityIds.indexOf(a.id);
  const indexB = priorityIds.indexOf(b.id);
  
  if (indexA !== -1 && indexB !== -1) return indexA - indexB;
  if (indexA !== -1) return -1;
  if (indexB !== -1) return 1;
  return 0; // maintain original database order for others
});

const brandLogos = [
  {
    name: "NHS Partners",
    type: "Clinical",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24" id="logo-nhs">
        <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
      </svg>
    )
  },
  {
    name: "Boots Pharmacy",
    type: "Retailer",
    icon: (
      <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" id="logo-boots">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25" />
        <circle cx="12" cy="10.5" r="2.5" fill="currentColor" />
      </svg>
    )
  },
  {
    name: "Novo Nordisk",
    type: "Research",
    icon: (
      <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" id="logo-novo">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    name: "Eli Lilly",
    type: "Biotech",
    icon: (
      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" id="logo-lilly">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.364l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    name: "Superdrug Labs",
    type: "Pharmacy",
    icon: (
      <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24" id="logo-superdrug">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    )
  },
  {
    name: "AstraZeneca",
    type: "Developer",
    icon: (
      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" id="logo-az">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    name: "Bupa Clinical",
    type: "Provider",
    icon: (
      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" id="logo-bupa">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    name: "Alliance Health",
    type: "Logistics",
    icon: (
      <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" id="logo-alliance">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    )
  }
];

const homeBlogSample = {
  left: [
    {
      title: 'The Science of Retatrutide: Triple Receptor Agonist Dominating Peptide Research',
      slug: 'science-of-retatrutide-triple-agonist',
      date: 'July 2, 2026',
      readTime: '7 min read',
      category: 'Metabolic',
      summary: 'Discover the molecular mechanics of Retatrutide (LY3437943), the novel triple receptor agonist currently transforming metabolic and adiposity studies.',
      icon: '🔬'
    },
    {
      title: 'Retatrutide vs. Tirzepatide: Comparative Study on Metabolic Rate & Thermogenesis',
      slug: 'retatrutide-vs-tirzepatide-comparison',
      date: 'June 22, 2026',
      readTime: '6 min read',
      category: 'Metabolic',
      summary: 'A detailed biochemical breakdown comparing Retatrutide and Tirzepatide. Learn how the glucagon agonist component in Retatrutide shifts the metabolic paradigm.',
      icon: '⚖️'
    },
    {
      title: 'The Rise of Melanotan II in Biochemical Research: Synthesis and Efficacy',
      slug: 'melanotan-ii-synthesis-efficacy',
      date: 'June 10, 2026',
      readTime: '4 min read',
      category: 'Longevity',
      summary: 'Analyze the synthetic analog of alpha-melanocyte stimulating hormone (a-MSH). We review its melanogenesis action and its application in photoprotective cutaneous research.',
      icon: '☀️'
    }
  ],
  right: [
    {
      title: 'Why BPC-157 is Trending Globally: Cellular Healing & Tissue Repair Mechanisms',
      slug: 'bpc-157-cellular-healing-tissue-repair',
      date: 'June 28, 2026',
      readTime: '5 min read',
      category: 'Tissue Repair',
      summary: 'Explore the biological action of Body Protection Compound 157 (BPC-157). Learn how this pentadecapeptide stimulates angiogenesis and tissue restoration.',
      icon: '🧬'
    },
    {
      title: 'Understanding Peptide Reconstitution: A Step-by-Step Laboratory Guide',
      slug: 'peptide-reconstitution-guide',
      date: 'June 15, 2026',
      readTime: '5 min read',
      category: 'Guides',
      summary: 'A precise procedural guide for laboratory technicians on the reconstitution of lyophilized peptide powders. Includes sterilisation, diluent selection, and calculation math.',
      icon: '📋'
    },
    {
      title: 'Ipamorelin and CJC-1295: The Power of Synergistic Growth Hormone Research',
      slug: 'ipamorelin-cjc-1295-synergistic-peptide',
      date: 'June 5, 2026',
      readTime: '6 min read',
      category: 'Longevity',
      summary: 'A scientific analysis of GHRH and GHRP synergy. Discover why combining CJC-1295 and Ipamorelin triggers a more sustainable growth hormone release than single peptide administration.',
      icon: '⚡'
    }
  ]
};

export default function Home() {
  const bestsellerProducts = sortedProductsData.slice(0, 8);

  return (
    <div className="flex-1 flex flex-col">
      {/* Centered Hero Section with Uploaded Image */}
      <section className="relative h-[550px] md:h-[650px] bg-slate-950 overflow-hidden flex items-center justify-center text-center">
        {/* Cover Image */}
        <div className="absolute inset-0">
          <Image  
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
            Buy Premium Research Peptides <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">UK</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg mb-8 max-w-2xl font-medium leading-relaxed">
            Precision-engineered biochemicals for clinical laboratory research. Buy Retatrutide, Tirzepatide, BPC-157, and more online. 99%+ purity guaranteed through independent third-party HPLC and Mass Spectrometry verification.
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mt-3">Buy Bestselling Research Peptides UK</h2>
              <p className="text-slate-500 text-sm mt-1">Guaranteed 99%+ purity on our most in-demand laboratory-certified biochemical compounds.</p>
            </div>
            <Link href="/shop" className="text-blue-600 text-sm font-bold hover:text-blue-700 transition-colors uppercase tracking-wider flex items-center gap-1.5 shrink-0">
              Explore All Products &rarr;
            </Link>
          </div>

          {bestsellerProducts.length === 0 ? (
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-12 text-center max-w-2xl mx-auto my-8">
              <div className="w-16 h-16 rounded-full bg-blue-50/55 flex items-center justify-center border border-blue-100 shadow-sm mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <p className="text-slate-600 font-bold uppercase tracking-wider text-sm">Product Catalog Refresh</p>
              <p className="text-xs text-slate-400 mt-1">Our premium laboratory-certified catalog is being updated. Please check back very soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {bestsellerProducts.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Trust & Service Showcase Banner */}
      <section className="bg-slate-950 text-white py-20 px-6 md:px-12 overflow-hidden relative" id="trust-service-showcase">
        <div className="absolute inset-0">
          <Image  
            src="https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&q=80&w=1600"
            alt="UK Peptide Research Laboratory"
            fill
            sizes="100vw"
            className="object-cover opacity-60 transition-all duration-700 hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/45 to-slate-950/80"></div>
        </div>
        
        <div className="container mx-auto relative z-10 max-w-5xl text-center flex flex-col items-center">
          <h3 className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Laboratory Focused Support</h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight max-w-2xl mb-6">
            Elite Biochemical Distribution Designed for UK Institutions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mb-10 leading-relaxed">
            UK Peptides is a premier partner for university laboratories, private contract research organizations (CROs), and academic investigators across the United Kingdom. We eliminate international customs friction, ensuring discrete, rapid, and fully documented peptide shipments.
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

      {/* Revolutionary Rotational Trust Slider of Top Brands and UK Pharmacies */}
      <section className="bg-white py-12 border-b border-slate-100 overflow-hidden relative" id="brand-rotational-slider">
        {/* Edge masks for professional smooth fade effect */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="container mx-auto px-6 mb-6">
          <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-[0.22em] text-center">
            Recognized Laboratory Partners & UK Clinical Distribution Networks
          </p>
        </div>

        <div className="flex overflow-hidden">
          <div className="animate-marquee flex gap-12 items-center whitespace-nowrap">
            {/* Set 1 */}
            {brandLogos.map((logo, index) => (
              <div key={`logo-1-${index}`} className="flex items-center gap-2.5 opacity-65 hover:opacity-100 transition-opacity duration-300 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl shadow-sm">
                {logo.icon}
                <span className="text-xs font-extrabold text-slate-700 tracking-tight">{logo.name}</span>
                <span className="text-[8px] uppercase font-bold text-slate-400 bg-slate-200/50 px-1.5 py-0.5 rounded-md">{logo.type}</span>
              </div>
            ))}
            {/* Set 2 (Duplicated for infinite loop scroll) */}
            {brandLogos.map((logo, index) => (
              <div key={`logo-2-${index}`} className="flex items-center gap-2.5 opacity-65 hover:opacity-100 transition-opacity duration-300 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl shadow-sm">
                {logo.icon}
                <span className="text-xs font-extrabold text-slate-700 tracking-tight">{logo.name}</span>
                <span className="text-[8px] uppercase font-bold text-slate-400 bg-slate-200/50 px-1.5 py-0.5 rounded-md">{logo.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Customer Testimonials Slider */}
      <section className="py-24 px-6 md:px-12 overflow-hidden relative" id="researcher-testimonials-section">
        <div className="absolute inset-0">
          <Image  
            src="https://images.unsplash.com/photo-1579165466541-74e2b490279c?auto=format&fit=crop&q=80&w=1600"
            alt="UK Peptide Research Laboratory Sterile Bottles"
            fill
            sizes="100vw"
            className="object-cover opacity-45 animate-slow-zoom"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-slate-50/60 to-slate-50/80"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-blue-600 text-xs font-extrabold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Reviews</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mt-4 mb-3">Researcher Testimonials</h2>
            <p className="text-slate-500 text-sm">See how leading academic and industrial laboratories across the UK rate UK Peptides for compound purity and delivery.</p>
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

      {/* Featured Research & Science Directory Blog Sampling */}
      <section className="bg-slate-50 py-20 px-6 md:px-12 border-t border-slate-100" id="homepage-blog-sampling">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 text-xs font-extrabold uppercase tracking-[0.25em] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Scientific Directory & Research Blog
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mt-4 mb-4">
              Featured Clinical & Laboratory Publications
            </h2>
            <p className="text-slate-500 text-sm">
              Read up-to-date, peer-reviewed clinical analyses, storage instructions, and step-by-step reconstitution guidelines written for UK peptide researchers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column (3 posts) */}
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                  Metabolic & Longevity Insights
                </h3>
                <span className="text-[10px] bg-blue-100 text-blue-700 font-extrabold px-2 py-0.5 rounded-md uppercase">3 Articles</span>
              </div>
              <div className="space-y-6">
                {homeBlogSample.left.map((post) => (
                  <Link 
                    key={post.slug} 
                    href={`/blog?slug=${post.slug}`}
                    className="block bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group"
                  >
                    <div className="flex gap-4 items-start">
                      <span className="text-3xl p-3 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors shrink-0">
                        {post.icon}
                      </span>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                          <span className="text-blue-600 font-extrabold">{post.category}</span>
                          <span>&bull;</span>
                          <span>{post.date}</span>
                          <span>&bull;</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h4 className="font-extrabold text-slate-800 group-hover:text-blue-600 transition-colors leading-snug text-base">
                          {post.title}
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                          {post.summary}
                        </p>
                        <div className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:gap-2 transition-all pt-1">
                          Read Research Publication &rarr;
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Column (3 posts) */}
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
                  Reconstitution & Healing Research
                </h3>
                <span className="text-[10px] bg-indigo-100 text-indigo-700 font-extrabold px-2 py-0.5 rounded-md uppercase">3 Articles</span>
              </div>
              <div className="space-y-6">
                {homeBlogSample.right.map((post) => (
                  <Link 
                    key={post.slug} 
                    href={`/blog?slug=${post.slug}`}
                    className="block bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all group"
                  >
                    <div className="flex gap-4 items-start">
                      <span className="text-3xl p-3 bg-slate-50 rounded-xl group-hover:bg-indigo-50 transition-colors shrink-0">
                        {post.icon}
                      </span>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                          <span className="text-indigo-600 font-extrabold">{post.category}</span>
                          <span>&bull;</span>
                          <span>{post.date}</span>
                          <span>&bull;</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h4 className="font-extrabold text-slate-800 group-hover:text-indigo-600 transition-colors leading-snug text-base">
                          {post.title}
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                          {post.summary}
                        </p>
                        <div className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 group-hover:gap-2 transition-all pt-1">
                          Read Research Publication &rarr;
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              Explore Full Science Hub Directory
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
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

          <FaqAccordion limit={3} />

          <div className="text-center mt-12">
            <Link 
              href="/faq" 
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              View All Frequently Asked Questions
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Expanded Clinical Reference & SEO Directory Panel - Optimised for UK Peptides Market */}
      <section className="bg-white py-12 px-6 md:px-12 border-b border-slate-100" id="seo-clinical-reference">
        <div className="container mx-auto max-w-4xl">
          <details className="group border border-slate-200 rounded-2xl bg-slate-50 overflow-hidden transition-all duration-300">
            <summary className="list-none flex items-center justify-between p-6 cursor-pointer select-none font-extrabold text-slate-800 text-sm md:text-base hover:bg-slate-100/70 transition-colors">
              <span className="flex items-center gap-2.5">
                <span className="p-1.5 bg-blue-100 text-blue-700 rounded-lg text-xs">🔬</span>
                <span>Expanded Clinical Reference Research Directory (UK Market)</span>
              </span>
              <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400">
                <svg className="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="p-8 border-t border-slate-200 bg-white text-slate-600 text-xs sm:text-sm leading-relaxed space-y-6">
              <div>
                <h3 className="text-base font-bold text-slate-800 mb-2">Introduction to Retatrutide (LY3437943) Research in the UK</h3>
                <p>
                  Retatrutide is the latest breakthrough in metabolic research and obesity science. As an experimental triple hormone receptor agonist targeting GLP-1, GIP, and glucagon receptors, it is currently demonstrating unprecedented metabolic modulation efficiency in laboratory settings. Investigators seeking to <strong className="text-slate-800">buy retatrutide UK</strong> clinical formulations require a premium-grade source ensuring maximum molecular stability and verifiable compound purity.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-800 mb-2">Why Clinical Labs Prioritize Retatrutide UK Stock</h3>
                <p>
                  High-fidelity laboratory results depend exclusively on the purity of the chemical compounds. In-vitro trials demand exact dosage metrics, making mass spectrometry HPLC reports a critical component of any order. When you buy <strong className="text-slate-800">retatrutide UK</strong> research peptides from UK Peptides, you are guaranteed independent third-party certification of 99%+ purity. This minimizes variables in biological assays and ensures consistent replication across studies.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-800 mb-2">Detailed Comparison: Retatrutide vs. Tirzepatide & Semaglutide</h3>
                <p>
                  Peptide research has progressed rapidly from single-receptor targets to multi-receptor co-agonism:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><strong className="text-slate-800">Semaglutide:</strong> A selective GLP-1 receptor agonist that paved the way for modern glycemic study models.</li>
                  <li><strong className="text-slate-800">Tirzepatide:</strong> A dual GIP and GLP-1 receptor agonist. Researchers seeking to <strong className="text-slate-800">buy tirzepatide</strong> or looking for <strong className="text-slate-800">tirzepatide UK</strong> clinical-grade chemicals study how concurrent dual pathway activation delivers superior glycemic and lipid management outcomes compared to single agonists.</li>
                  <li><strong className="text-slate-800">Retatrutide (Triple Agonist):</strong> Adds glucagon receptor upregulation, which accelerates fatty acid oxidation and metabolic rate. Buying <strong className="text-slate-800">buy retatrutide</strong> online lets laboratories study the direct physiological effects of triple-mechanism therapy.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-800 mb-2">BPC-157 & Tissue Regeneration Research</h3>
                <p>
                  Beyond metabolic research, cell recovery compounds like BPC-157 are incredibly crucial. Laboratories that <strong className="text-slate-800">buy BPC-157 UK</strong> products study its potent angiogenic, anti-inflammatory, and tissue restoration properties. Synthetic BPC-157 is widely examined for its capacity to accelerate healing in tendon, ligament, and gastrointestinal models.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-800 mb-2">Buying Peptides in the UK Legally for Lab Research</h3>
                <p>
                  All biochemical peptides sold on this platform are strictly intended for scientific laboratory research and in-vitro clinical trials. Domestic shipment across the United Kingdom eliminates international customs friction and guarantees that your research materials arrive on schedule via tracked, climate-controlled shipping networks. Choose UK Peptides as your premier, high-purity clinical logistics partner.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>
    </div>
  );
}
