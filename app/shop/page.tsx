"use client";

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { Filter, ChevronDown, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import rawProductsData from './products.json';
const productsData = rawProductsData as any[];

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  badge?: string;
  stockStatus?: string;
  category?: string;
}

const products: Product[] = productsData as Product[];

export default function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const productsPerPage = 12;
  
    const categories = ['All', ...Array.from(new Set(products.map(p => p.category || 'Peptides')))];
  const filteredProducts = products.filter(p => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  const allProducts = filteredProducts;
  const totalPages = Math.ceil(allProducts.length / productsPerPage);
  
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = allProducts.slice(startIndex, endIndex);

    const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200 py-12 px-6 md:px-12">
        <div className="container mx-auto">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Buy Research Peptides UK Online</h1>
          <p className="text-slate-500 max-w-2xl text-sm">
            Browse our complete catalog of high-purity research peptides including Retatrutide, Tirzepatide, and BPC-157. Buy peptides online with fast UK delivery. All products are manufactured in ISO-certified facilities and undergo rigorous third-party testing.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 mb-6">
            <div className="relative mb-6">
              <input type="text" placeholder="Search peptides..." value={searchTerm} onChange={handleSearchChange} className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-blue-500" />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-3">Categories</h3>
                            <ul className="space-y-2 text-sm text-slate-600">
                {categories.map(cat => {
                  const count = cat === 'All' ? products.length : products.filter(p => p.category === cat).length;
                  return (
                    <li key={cat} onClick={() => handleCategorySelect(cat)} className={`flex justify-between items-center cursor-pointer font-medium ${selectedCategory === cat ? 'text-blue-600 font-bold' : 'hover:text-blue-600'}`}>
                      <span>{cat}</span>
                      <span className="bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full text-[10px]">{count}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-6 gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Filter className="w-4 h-4" />
              <span>
                {allProducts.length === 0 
                  ? 'Showing 0 results' 
                  : `Showing ${startIndex + 1}-${Math.min(endIndex, allProducts.length)} of ${allProducts.length} results`}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-slate-500 font-medium">Sort by:</span>
              <button className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-slate-700 font-medium hover:bg-slate-100">
                Best Selling
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Grid */}
          {currentProducts.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-sm max-w-2xl mx-auto my-8">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 shadow-sm mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-slate-800 uppercase tracking-wider mb-1">Catalog Update In Progress</h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto">We are currently updating our list of products. Please check back very soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentProducts.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center gap-2">
              <button 
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-blue-600 font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {Array.from({ length: totalPages }).map((_, i) => (
                <button 
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold shadow-sm transition-colors ${
                    currentPage === i + 1 
                      ? 'bg-blue-600 text-white' 
                      : 'border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-blue-600'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              
              <button 
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-blue-600 font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
