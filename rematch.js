const fs = require('fs');
const products = JSON.parse(fs.readFileSync('app/shop/products.json', 'utf8'));
const files = fs.readdirSync('public/images/');

let updated = false;

products.forEach(p => {
  // Try to find the exact file matching the name without extension
  const matchByName = files.find(f => {
    const nameWithoutExt = f.substring(0, f.lastIndexOf('.'));
    return nameWithoutExt === p.name || nameWithoutExt.toLowerCase() === p.name.toLowerCase();
  });
  
  if (matchByName) {
    p.image = `/images/${matchByName}`;
    updated = true;
  } else {
    // try to match ignoring spaces, casing and special chars
    const normalize = str => str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const matchByNorm = files.find(f => {
      const nameWithoutExt = f.substring(0, f.lastIndexOf('.'));
      return normalize(nameWithoutExt) === normalize(p.name);
    });
    if (matchByNorm) {
      p.image = `/images/${matchByNorm}`;
      updated = true;
    } else {
      console.log(`Still missing image for ${p.name}`);
    }
  }
});

if (updated) {
  fs.writeFileSync('app/shop/products.json', JSON.stringify(products, null, 2));
  console.log('Updated products.json');
} else {
  console.log('No updates needed.');
}
