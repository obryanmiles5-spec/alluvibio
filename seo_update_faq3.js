const fs = require('fs');

let content = fs.readFileSync('components/FaqAccordion.tsx', 'utf8');

// Find the last index of </div> and insert </>\n before );
let parts = content.split(');');
if (parts.length >= 2) {
   let lastPart = parts[parts.length - 2];
   if (!lastPart.includes('</>')) {
       parts[parts.length - 2] = lastPart + '\n    </>\n  ';
       content = parts.join(');');
       fs.writeFileSync('components/FaqAccordion.tsx', content);
       console.log('Fixed completely');
   }
}
