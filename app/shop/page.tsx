import ProductCard from '@/components/ProductCard';
import { Filter, ChevronDown, Search } from 'lucide-react';

export default function Shop() {
  const allProducts = [
    { id: '1', name: 'Alluvi Retatrutide 10mg', price: 145.00, badge: 'BEST SELLER', image: 'https://picsum.photos/seed/p1/400/400' },
    { id: '2', name: 'Alluvi Tirzepatide 5mg', price: 89.00, stockStatus: 'Limited Stock', image: 'https://picsum.photos/seed/p2/400/400' },
    { id: '3', name: 'Alluvi Tirzepatide 10mg', price: 135.00, image: 'https://picsum.photos/seed/p3/400/400' },
    { id: '4', name: 'Alluvi Semaglutide 5mg', price: 75.00, image: 'https://picsum.photos/seed/p4/400/400' },
    { id: '5', name: 'Alluvi BPC-157 5mg', price: 45.00, image: 'https://picsum.photos/seed/p5/400/400' },
    { id: '6', name: 'Alluvi TB-500 5mg', price: 55.00, image: 'https://picsum.photos/seed/p6/400/400' },
    { id: '7', name: 'Alluvi CJC-1295 / Ipamorelin 5mg/5mg', price: 65.00, badge: 'NEW', image: 'https://picsum.photos/seed/p7/400/400' },
    { id: '8', name: 'Alluvi Tesamorelin 2mg', price: 49.00, image: 'https://picsum.photos/seed/p8/400/400' },
    { id: '9', name: 'Alluvi Melanotan II 10mg', price: 35.00, image: 'https://picsum.photos/seed/p9/400/400' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200 py-12 px-6 md:px-12">
        <div className="container mx-auto">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Research Peptides</h1>
          <p className="text-slate-500 max-w-2xl text-sm">
            Browse our complete catalog of high-purity research peptides. All products are manufactured in ISO-certified facilities and undergo rigorous third-party testing.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 mb-6">
            <div className="relative mb-6">
              <input type="text" placeholder="Search peptides..." className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-blue-500" />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-3">Categories</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex justify-between items-center cursor-pointer hover:text-blue-600 font-bold text-blue-600">
                  <span>All Peptides</span>
                  <span className="bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full text-[10px]">24</span>
                </li>
                <li className="flex justify-between items-center cursor-pointer hover:text-blue-600">
                  <span>GLP-1 Agonists</span>
                  <span className="bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full text-[10px]">8</span>
                </li>
                <li className="flex justify-between items-center cursor-pointer hover:text-blue-600">
                  <span>Growth Hormone</span>
                  <span className="bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full text-[10px]">12</span>
                </li>
                <li className="flex justify-between items-center cursor-pointer hover:text-blue-600">
                  <span>Healing / Recovery</span>
                  <span className="bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full text-[10px]">4</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-3">Availability</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                  <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                  <span>In Stock</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                  <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                  <span>Out of Stock</span>
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-6 gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Filter className="w-4 h-4" />
              <span>Showing 1-9 of 24 results</span>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center gap-2">
            <button className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-blue-600 font-bold transition-colors">
              &lt;
            </button>
            <button className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold shadow-md">
              1
            </button>
            <button className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-blue-600 font-bold transition-colors">
              2
            </button>
            <button className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-blue-600 font-bold transition-colors">
              3
            </button>
            <button className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-blue-600 font-bold transition-colors">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
