'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Check, FlaskConical } from 'lucide-react';

interface Variant {
  strength: string;
  price: number;
}

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    variants?: Variant[];
  };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  
  // Use defined variants, or fallback to a single default variant representing the parent product
  const variants = product.variants && product.variants.length > 0 
    ? product.variants 
    : [{ strength: 'Standard', price: product.price }];

  const [selectedVariant, setSelectedVariant] = useState<Variant>(variants[0]);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: selectedVariant.price,
      image: product.image,
      strength: selectedVariant.strength
    });
  };

  return (
    <div className="w-full space-y-6">
      {/* Dynamic Price Display */}
      <div className="bg-slate-50 border border-slate-150 rounded-xl p-4 flex items-center justify-between">
        <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Research Price:</span>
        <div className="text-right">
          <span className="text-3xl font-black text-blue-600">£{selectedVariant.price.toFixed(2)}</span>
          <span className="block text-[10px] text-slate-400 font-bold uppercase mt-0.5">Exc. VAT / Free Next-Day UK Delivery</span>
        </div>
      </div>

      {/* Variants Selector */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
          <FlaskConical className="w-3.5 h-3.5 text-blue-600" />
          Select Strength / Quantity
        </label>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {variants.map((variant) => {
            const isSelected = selectedVariant.strength === variant.strength;
            return (
              <button
                key={variant.strength}
                type="button"
                onClick={() => setSelectedVariant(variant)}
                className={`relative p-3 rounded-xl border text-left cursor-pointer transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/25 ring-1 ring-blue-500 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-350 hover:bg-slate-50/50'
                }`}
              >
                <div className="flex justify-between items-start gap-1">
                  <span className={`text-xs font-black tracking-tight ${isSelected ? 'text-blue-700' : 'text-slate-800'}`}>
                    {variant.strength}
                  </span>
                  {isSelected && (
                    <span className="w-3.5 h-3.5 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-white stroke-[3.5]" />
                    </span>
                  )}
                </div>
                <span className={`text-[11px] font-bold mt-2 ${isSelected ? 'text-blue-600' : 'text-slate-500'}`}>
                  £{variant.price.toFixed(2)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Action Button */}
      <button 
        onClick={handleAddToCart}
        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold py-4 px-8 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.98] text-base flex items-center justify-center gap-2 cursor-pointer"
      >
        <ShoppingCart className="w-5 h-5 shrink-0" />
        Add to Cart
      </button>
    </div>
  );
}
