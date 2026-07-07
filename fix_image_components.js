const fs = require('fs');

// 1. Fix ProductCard.tsx
let pc = fs.readFileSync('components/ProductCard.tsx', 'utf8');
// Remove state
pc = pc.replace(/const \[imgSrc, setImgSrc\] = useState[^;]+;/, '');
pc = pc.replace(/import \{ useState \} from 'react';\n/, '');
// Replace Image props
pc = pc.replace(/src=\{imgSrc\}\n\s+onError=\{[^}]+\}/, 'src={image}\n            unoptimized');
fs.writeFileSync('components/ProductCard.tsx', pc);

// 2. Fix [id]/page.tsx
let idPage = fs.readFileSync('app/shop/[id]/page.tsx', 'utf8');
// Replace ImageWithFallback with Image
idPage = idPage.replace(/ImageWithFallback/g, 'Image');
idPage = idPage.replace(/import ImageWithFallback from '@\/components\/ImageWithFallback';\n/, '');
// Add unoptimized
idPage = idPage.replace(/<Image\s+src=\{product\.image\}/, '<Image\n                  unoptimized\n                  src={product.image}');
fs.writeFileSync('app/shop/[id]/page.tsx', idPage);

console.log('Fixed components');
