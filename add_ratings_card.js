const fs = require('fs');
let content = fs.readFileSync('components/ProductCard.tsx', 'utf8');

// add star import if missing
if (!content.includes('Star')) {
    content = content.replace("import { ShoppingCart } from 'lucide-react';", "import { ShoppingCart, Star } from 'lucide-react';");
}

const ratingSnippet = `
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
`;

content = content.replace('<div className="flex flex-col px-1">', ratingSnippet);
fs.writeFileSync('components/ProductCard.tsx', content);
console.log('Updated components/ProductCard.tsx');
