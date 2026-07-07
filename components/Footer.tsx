import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 flex flex-col mt-auto">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-full"></div>
            </div>
            <span className="font-bold text-xl tracking-tight text-white">UK PEPTIDES<span className="text-blue-500 underline decoration-2 underline-offset-4">BIO</span></span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Premium research peptides for UK laboratory and clinical studies. Precision-engineered biochemicals with 99%+ purity guaranteed through rigorous testing.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-slate-400 text-sm">
            <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
            <li><Link href="/shop" className="hover:text-blue-400 transition-colors">Shop All Peptides</Link></li>
            <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Support</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Customer Care</h4>
          <ul className="flex flex-col gap-3 text-slate-400 text-sm">
            <li><Link href="/faq" className="hover:text-blue-400 transition-colors">FAQ</Link></li>
            <li><Link href="/shipping" className="hover:text-blue-400 transition-colors">Shipping Policy</Link></li>
            <li><Link href="/refunds" className="hover:text-blue-400 transition-colors">Refund Policy</Link></li>
            <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Newsletter</h4>
          <p className="text-slate-400 text-sm mb-4">Subscribe for the latest research product updates and exclusive offers.</p>
          <form className="flex gap-2">
            <input type="email" placeholder="Email Address" className="bg-slate-800 border border-slate-700 text-white text-sm rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
            <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Mini Footer from Design */}
      <div className="bg-slate-950 border-t border-slate-800 py-6 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-500 font-medium gap-4 md:gap-0">
        <div className="flex gap-6">
          <Link href="/shipping" className="hover:text-blue-400 transition-colors">Shipping Policy</Link>
          <Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
          <Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
        </div>
        <div className="flex items-center gap-2">
          <span className="opacity-70 uppercase tracking-widest text-blue-400 font-bold">For Research Purposes Only</span>
          <div className="h-4 w-[1px] bg-slate-700 hidden md:block"></div>
          <span className="hidden md:inline">© 2026 UK Peptides Bio UK</span>
        </div>
        <div className="flex gap-4 items-center">
          <div className="h-4 w-8 bg-slate-800 rounded flex items-center justify-center text-[8px] font-bold tracking-tighter">VISA</div>
          <div className="h-4 w-8 bg-slate-800 rounded flex items-center justify-center text-[8px] font-bold tracking-tighter">MASTER</div>
        </div>
      </div>
    </footer>
  );
}
