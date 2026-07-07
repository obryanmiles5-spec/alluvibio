import Image from 'next/image';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, ArrowLeft, Check, Shield, Truck, Package } from 'lucide-react';
import rawProductsData from '../products.json';
const productsData = rawProductsData as any[];
import AddToCartButton from '@/components/AddToCartButton';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  badge?: string;
  stockStatus?: string;
  category?: string;
}

export async function generateStaticParams() {
  const products: Product[] = productsData as Product[];
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const products: Product[] = productsData as Product[];
  const product = products.find((p) => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20 pt-8">
      <div className="container mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/shop" className="hover:text-blue-600 transition-colors">Shop</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-800 font-medium">{product.name}</span>
        </div>

        <Link href="/shop" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 mb-8 hover:text-blue-700 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Catalog
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 bg-slate-50 flex items-center justify-center relative min-h-[400px]">
              {product.badge && (
                <span className="absolute top-6 left-6 bg-blue-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-full z-10">
                  {product.badge}
                </span>
              )}
              <div className="relative w-full max-w-md aspect-square rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                <Image
                  unoptimized
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  referrerPolicy="no-referrer"
                  className="transition-transform duration-500 hover:scale-105 mix-blend-multiply p-6"
                />
              </div>
            </div>

            {/* Details Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-2 flex items-center gap-3">
                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-extrabold tracking-widest uppercase">
                  {product.category || 'Peptides'}
                </span>
                <span className="flex items-center gap-1 text-emerald-600 text-xs font-bold bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
                  <Check className="w-3 h-3" />
                  {product.stockStatus || 'In Stock'}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                {product.name}
              </h1>
              
              <p className="text-3xl font-extrabold text-blue-600 mb-6">
                £{product.price.toFixed(2)}
              </p>
              
              <div className="prose prose-slate prose-sm mb-8">
                <p>
                  High-purity {product.name} synthesized for advanced laboratory research. 
                  Every batch is rigorously tested via HPLC and Mass Spectrometry to guarantee 
                  purity and consistency. Not for human consumption.
                </p>
              </div>

              <div className="flex gap-4 mb-10">
                <AddToCartButton product={product} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">99%+ Purity</h4>
                    <p className="text-xs text-slate-500">Verified by HPLC testing</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Truck className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Fast UK Delivery</h4>
                    <p className="text-xs text-slate-500">Dispatched within 24hrs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Package className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Discrete Packaging</h4>
                    <p className="text-xs text-slate-500">Unbranded secure mailers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
