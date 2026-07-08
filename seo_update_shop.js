const fs = require('fs');
let content = fs.readFileSync('app/shop/page.tsx', 'utf8');

// Replace H1
content = content.replace(
  '<h1 className="text-3xl font-extrabold text-slate-900 mb-2">Research Peptides</h1>',
  '<h1 className="text-3xl font-extrabold text-slate-900 mb-2">Buy Research Peptides UK Online</h1>'
);

content = content.replace(
  '<p className="text-slate-500 max-w-2xl text-sm">\n            Browse our complete catalog of high-purity research peptides. All products are manufactured in ISO-certified facilities and undergo rigorous third-party testing.\n          </p>',
  '<p className="text-slate-500 max-w-2xl text-sm">\n            Browse our complete catalog of high-purity research peptides including Retatrutide, Tirzepatide, and BPC-157. Buy peptides online with fast UK delivery. All products are manufactured in ISO-certified facilities and undergo rigorous third-party testing.\n          </p>'
);

fs.writeFileSync('app/shop/page.tsx', content);
console.log('Updated app/shop/page.tsx');
