const fs = require('fs');

let content = fs.readFileSync('components/FaqAccordion.tsx', 'utf8');

// Replace the very end
content = content.replace(/<\/div>\n    <\/div>\n  \);\n\}$/, '</div>\n    </div>\n    </>\n  );\n}');

fs.writeFileSync('components/FaqAccordion.tsx', content);
console.log('Fixed components/FaqAccordion.tsx part 2');
