const fs = require('fs');
let pc = fs.readFileSync('app/page.tsx', 'utf8');
pc = pc.replace(/<Image/g, '<Image unoptimized');
fs.writeFileSync('app/page.tsx', pc);
console.log('Fixed app/page.tsx');
