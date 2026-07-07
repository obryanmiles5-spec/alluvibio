const fs = require('fs');
const products = JSON.parse(fs.readFileSync('app/shop/products.json', 'utf8'));

products.forEach(p => {
  const name = p.name.toLowerCase();
  if (name.includes('water') || name.includes('acid')) {
    p.category = 'Lab Supplies';
  } else if (name.includes('bioregulator') || name.includes('bronchogen') || name.includes('cortagen') || name.includes('crystagen')) {
    p.category = 'Bioregulators';
  } else {
    p.category = 'Peptides';
  }
});

fs.writeFileSync('app/shop/products.json', JSON.stringify(products, null, 2));
console.log('Categories updated!');
