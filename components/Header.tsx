'use client';

import Link from 'next/link';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  return (

    <>
      {/* Promo Bar */}
      <div className="bg-blue-600 text-white text-[11px] py-2 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center font-medium tracking-wide gap-2 md:gap-0">
        <div className="flex items-center gap-4">
          <span>📞 UK Support</span>
          <span className="opacity-50 text-[14px] hidden md:inline">|</span>
          <span className="hidden md:inline">🚚 Free UK Delivery over £300</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="bg-blue-500/50 px-2 py-0.5 rounded">🎁 WELCOME10 for 10% Off</span>
          <span className="hidden md:inline">📦 Min Order: £120</span>
        </div>
        <div className="flex items-center gap-1 font-bold italic">
          ⭐ PREMIUM QUALITY
        </div>
      </div>

      {/* Sticky Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 h-16 flex items-center justify-between px-4 md:px-8 z-50 sticky top-0">
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-full"></div>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">UK PEPTIDES<span className="text-blue-600 underline decoration-2 underline-offset-4">BIO</span></span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-semibold text-slate-600 uppercase tracking-widest">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/shop" className="hover:text-blue-600 transition-colors">Shop</Link>
          <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
          <Link href="/coas" className="hover:text-blue-600 transition-colors text-nowrap">COAs</Link>
        </nav>

        <div className="flex items-center gap-4 md:gap-5 text-slate-500">
          <Search className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors" />
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-1 text-slate-500 hover:text-blue-600 transition-colors focus:outline-none cursor-pointer"
            aria-label="Open Cart"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
          <User className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors" />
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 flex flex-col gap-4 text-sm font-bold text-slate-700 uppercase tracking-widest absolute w-full z-40 shadow-lg">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
          <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <Link href="/coas" onClick={() => setIsMobileMenuOpen(false)}>COAs</Link>
        </div>
      )}
    </>
  );
}
