const fs = require('fs');
let content = fs.readFileSync('app/shop/[id]/page.tsx', 'utf8');

const overlaySnippet = `
                />
                
                {/* Obscure the original watermark in the center */}
                <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[15%] bg-white/80 backdrop-blur-sm flex items-center justify-center rounded-lg border border-slate-200/50 shadow-sm pointer-events-none z-10">
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
`;

content = content.replace('/>', overlaySnippet);
fs.writeFileSync('app/shop/[id]/page.tsx', content);
console.log('Updated app/shop/[id]/page.tsx');
