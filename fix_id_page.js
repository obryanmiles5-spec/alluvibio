const fs = require('fs');

const content = `
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, ArrowLeft, Check, Shield, Truck, Package } from 'lucide-react';
import type { Metadata } from 'next';
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

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const products = productsData as Product[];
  const product = products.find((p) => p.id === resolvedParams.id);
  
  if (!product) {
    return { title: 'Product Not Found' };
  }
  
  return {
    title: \`Buy \${product.name} | UK Peptides\`,
    description: \`High-purity \${product.name} for laboratory research. Buy premium peptides online at UK Peptides with fast UK delivery.\`,
    keywords: \`buy \${product.name} uk, \${product.name} peptides uk, buy peptides online\`,
    openGraph: {
      title: \`Buy \${product.name} | UK Peptides\`,
      description: \`High-purity \${product.name} for laboratory research. Buy premium peptides online at UK Peptides with fast UK delivery.\`,
      images: [
        {
          url: product.image,
          width: 600,
          height: 600,
          alt: product.name,
        }
      ],
    }
  };
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
                
                {/* Obscure the original watermark in the center */}
                <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[15%] bg-white/90 backdrop-blur-sm flex items-center justify-center rounded-lg border border-slate-200/50 shadow-sm pointer-events-none z-10">
                   <span className="text-slate-800 font-bold text-lg uppercase tracking-wider">UK Peptides</span>
                </div>
                
                {/* Authentic Lab Watermark / Product Stamp */}
                <div className="absolute bottom-4 left-4 z-20 pointer-events-none select-none">
                  <div className="bg-slate-900/85 backdrop-blur-md border border-slate-700/50 rounded-full px-3 py-2 flex items-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-blue-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black text-white leading-none uppercase tracking-widest">UK PEPTIDES</span>
                      <span className="text-[7px] font-semibold text-blue-300 leading-none uppercase tracking-wider mt-0.5">VERIFIED</span>
                    </div>
                  </div>
                </div>
                
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
                  Buy {product.name} online in the UK from UK Peptides. We are the leading supplier for 
                  premium research peptides including Retatrutide, Tirzepatide, BPC-157, and more.
                  Every batch is rigorously tested via HPLC and Mass Spectrometry to guarantee 
                  purity and consistency. Fast UK delivery. Not for human consumption.
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
`

fs.writeFileSync('app/shop/[id]/page.tsx', content);
