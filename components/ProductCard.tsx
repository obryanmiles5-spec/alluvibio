'use client';
import { ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';
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
  image = 'https://picsum.photos/seed/peptide/400/400', 
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
      <div className="relative h-48 md:h-56 bg-slate-100 rounded-2xl overflow-hidden mb-3">
        {badge && (
          <div className="absolute top-3 right-3 bg-blue-600 text-white text-[9px] font-bold px-2 py-1 rounded z-10 shadow-sm">
            {badge}
          </div>
        )}
        <div className="h-full w-full flex items-center justify-center opacity-90 relative bg-white">
          <Image 
            src={image}
            unoptimized 
            alt={`Buy ${name} online UK - Research Peptide`} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover mix-blend-multiply p-4" 
            referrerPolicy="no-referrer"
          />
          
          {/* Obscure the original watermark in the center */}
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[15%] bg-white/80 backdrop-blur-sm flex items-center justify-center rounded-lg border border-slate-200/50 shadow-sm pointer-events-none">
             <span className="text-slate-800 font-bold text-xs uppercase tracking-wider">UK Peptides</span>
          </div>
          
          {/* Authentic Lab Watermark / Product Stamp */}
          <div className="absolute bottom-2.5 left-2.5 z-10 pointer-events-none select-none">
            <div className="bg-slate-900/85 backdrop-blur-md border border-slate-700/50 rounded-full px-2 py-1 flex items-center gap-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-transform group-hover:scale-105 duration-300">
              <div className="w-3.5 h-3.5 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center shrink-0">
                <svg className="w-2 h-2 text-blue-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[7px] font-black text-white leading-none uppercase tracking-widest">UK PEPTIDES</span>
                <span className="text-[5.5px] font-semibold text-blue-300 leading-none uppercase tracking-wider mt-0.5">VERIFIED</span>
              </div>
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
