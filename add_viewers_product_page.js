const fs = require('fs');
let content = fs.readFileSync('app/shop/[id]/page.tsx', 'utf8');

if (!content.includes('Eye')) {
    content = content.replace("import { ChevronRight, ArrowLeft, Check, Shield, Truck, Package } from 'lucide-react';", "import { ChevronRight, ArrowLeft, Check, Shield, Truck, Package, Eye, Star } from 'lucide-react';");
}

const viewBadge = `
                <span className="flex items-center gap-1 text-emerald-600 text-xs font-bold bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
                  <Check className="w-3 h-3" />
                  {product.stockStatus || 'In Stock'}
                </span>
                <span className="flex items-center gap-1.5 text-orange-600 text-xs font-bold bg-orange-50 px-3 py-1 rounded-full uppercase tracking-wider animate-pulse">
                  <Eye className="w-3 h-3" />
                  {12 + (parseInt(product.id) % 35)} viewing right now
                </span>
`;

content = content.replace(`                <span className="flex items-center gap-1 text-emerald-600 text-xs font-bold bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">\n                  <Check className="w-3 h-3" />\n                  {product.stockStatus || 'In Stock'}\n                </span>`, viewBadge);

const reviewsSection = `
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center text-amber-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-sm font-bold text-slate-700">{(4.8 + (parseInt(product.id) % 3) * 0.1).toFixed(1)}</span>
                <span className="text-sm font-medium text-blue-600 underline cursor-pointer">{20 + parseInt(product.id) * 7} reviews</span>
              </div>
`;

content = content.replace(`              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">\n                {product.name}\n              </h1>`, reviewsSection);

fs.writeFileSync('app/shop/[id]/page.tsx', content);
console.log('Updated app/shop/[id]/page.tsx');
