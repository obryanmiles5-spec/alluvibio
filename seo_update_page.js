const fs = require('fs');
let content = fs.readFileSync('app/page.tsx', 'utf8');

// Replace H1
content = content.replace(
  '<h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 max-w-4xl uppercase tracking-tight">\n            Retatrutide <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">UK Peptides</span>\n          </h1>',
  '<h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 max-w-4xl uppercase tracking-tight">\n            Buy Premium Research Peptides <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">UK</span>\n          </h1>'
);

// Replace paragraph below H1
content = content.replace(
  '<p className="text-slate-300 text-sm sm:text-base md:text-lg mb-8 max-w-2xl font-medium leading-relaxed">\n            Precision-engineered biochemicals for clinical laboratory research. 99%+ purity guaranteed through independent third-party HPLC and Mass Spectrometry verification.\n          </p>',
  '<p className="text-slate-300 text-sm sm:text-base md:text-lg mb-8 max-w-2xl font-medium leading-relaxed">\n            Precision-engineered biochemicals for clinical laboratory research. Buy Retatrutide, Tirzepatide, BPC-157, and more online. 99%+ purity guaranteed through independent third-party HPLC and Mass Spectrometry verification.\n          </p>'
);

// Optimize Best Sellers Heading
content = content.replace(
  '<h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mt-3">Bestselling Research Peptides</h2>',
  '<h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mt-3">Buy Bestselling Research Peptides UK</h2>'
);

fs.writeFileSync('app/page.tsx', content);
console.log('Updated app/page.tsx');
