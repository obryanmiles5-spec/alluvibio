import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';

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
  return (
    <div className="group cursor-pointer">
      <div className="relative h-48 md:h-56 bg-slate-100 rounded-2xl overflow-hidden mb-3">
        {badge && (
          <div className="absolute top-3 right-3 bg-blue-600 text-white text-[9px] font-bold px-2 py-1 rounded z-10 shadow-sm">
            {badge}
          </div>
        )}
        <div className="h-full w-full flex items-center justify-center opacity-90 relative bg-white">
          <Image 
            src={image} 
            alt={name} 
            fill 
            className="object-cover mix-blend-multiply p-4" 
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 z-20 backdrop-blur-[2px]">
          <button className="bg-white text-blue-600 font-bold px-6 py-2.5 rounded-xl text-xs shadow-xl hover:scale-105 transition-transform">
            Quick View
          </button>
        </div>
      </div>
      <div className="flex flex-col px-1">
        <span className={`text-[10px] font-bold uppercase ${stockStatus === 'In Stock' ? 'text-green-500' : 'text-orange-500'}`}>
          {stockStatus}
        </span>
        <h3 className="text-sm font-bold text-slate-800 truncate mt-0.5" title={name}>{name}</h3>
        <div className="flex items-center justify-between mt-1.5">
          <span className="text-blue-600 font-bold">£{price.toFixed(2)}</span>
          <button className="p-2 bg-slate-100 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-slate-600">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
