const fs = require('fs');
let content = fs.readFileSync('components/ProductCard.tsx', 'utf8');

// Ensure image has descriptive alt text
content = content.replace(
  'alt={name}',
  'alt={`Buy ${name} online UK - Research Peptide`}'
);

fs.writeFileSync('components/ProductCard.tsx', content);
console.log('Updated components/ProductCard.tsx');
