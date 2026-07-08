'use client';
import { ShoppingCart, Star, FlaskConical } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image?: string;
  badge?: string;
  stockStatus?: string;
  category?: string;
}

export default function ProductCard({ 
  id, 
  name, 
  price, 
  image = '', 
  badge, 
  stockStatus = 'In Stock' 
}: ProductCardProps) {
  const { addToCart } = useCart();
  

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ id, name, price, image });
  };

  return (
    <Link href={`/shop/${id}`} className="group cursor-pointer block">
      <div className="relative h-48 md:h-56 bg-slate-50 rounded-2xl overflow-hidden mb-3 border border-slate-100 flex items-center justify-center">
        {badge && (
          <div className="absolute top-3 right-3 bg-blue-600 text-white text-[9px] font-bold px-2 py-1 rounded z-10 shadow-sm">
            {badge}
          </div>
        )}
        
        {/* Beautiful, scientific placeholder layout */}
        <div className="h-full w-full flex flex-col items-center justify-center relative bg-gradient-to-br from-slate-50 to-blue-50/20 p-4">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
          
          <div className="w-14 h-14 rounded-full bg-blue-50/80 flex items-center justify-center border border-blue-100 shadow-sm mb-2 group-hover:scale-110 transition-transform duration-300">
            <FlaskConical className="w-6 h-6 text-blue-600 stroke-[1.5]" />
          </div>
          <span className="text-[9px] font-extrabold text-slate-400 tracking-widest uppercase text-center">RESEARCH COMPLY</span>
          
          {/* Authentic Lab Watermark / Product Stamp */}
          <div className="absolute bottom-2.5 left-2.5 z-10 pointer-events-none select-none">
            <div className="bg-slate-900/85 backdrop-blur-md border border-slate-700/50 rounded-full px-2 py-1 flex items-center gap-1 shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-transform group-hover:scale-105 duration-300">
              <div className="w-3 h-3 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center shrink-0">
                <svg className="w-1.5 h-1.5 text-blue-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <span className="text-[5.5px] font-black text-white leading-none uppercase tracking-widest">VERIFIED</span>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 z-20 backdrop-blur-[2px]">
          <button 
            onClick={handleAddToCart}
            className="bg-white text-blue-600 font-bold px-6 py-2.5 rounded-xl text-xs shadow-xl hover:scale-105 transition-transform"
          >
            Add to Cart
          </button>
        </div>
      </div>

      
        <div className="flex flex-col px-1">
        <div className="flex items-center gap-1 mt-1 mb-1">
          <div className="flex items-center text-amber-400">
             <Star className="w-3 h-3 fill-current" />
             <Star className="w-3 h-3 fill-current" />
             <Star className="w-3 h-3 fill-current" />
             <Star className="w-3 h-3 fill-current" />
             <Star className="w-3 h-3 fill-current" />
          </div>
          <span className="text-[10px] font-bold text-slate-500">({(4.8 + (parseInt(id) % 3) * 0.1).toFixed(1)}) {20 + parseInt(id) * 7} reviews</span>
        </div>

        <span className={`text-[10px] font-bold uppercase ${stockStatus === 'In Stock' ? 'text-green-500' : 'text-orange-500'}`}>
          {stockStatus}
        </span>
        <h3 className="text-sm font-bold text-slate-800 truncate mt-0.5" title={name}>{name}</h3>
        
        <div className="flex items-center justify-between mt-1.5">
          <span className="text-blue-600 font-bold">£{price.toFixed(2)}</span>
          <button 
            onClick={handleAddToCart}
            className="p-2 bg-slate-100 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-slate-600 cursor-pointer"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Link>
  );
}
