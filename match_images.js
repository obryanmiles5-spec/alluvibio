const fs = require('fs');

const products = JSON.parse(fs.readFileSync('app/shop/products.json', 'utf8'));
const files = fs.readdirSync('public/images/');

let updated = false;

products.forEach(p => {
  if (p.image) {
    const filename = p.image.replace('/images/', '');
    if (!files.includes(filename)) {
      // Try to find a case-insensitive match or close match
      const match = files.find(f => f.toLowerCase() === filename.toLowerCase() || f.startsWith(filename.split('.')[0]));
      if (match) {
        console.log(`Updating ${p.image} to /images/${match}`);
        p.image = `/images/${match}`;
        updated = true;
      } else {
        console.log(`Missing image for ${p.name}: ${p.image}`);
      }
    }
  }
});

if (updated) {
  fs.writeFileSync('app/shop/products.json', JSON.stringify(products, null, 2));
  console.log('Updated products.json');
} else {
  console.log('All image paths match exactly.');
}
