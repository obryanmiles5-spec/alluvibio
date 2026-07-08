const fs = require('fs');

let content = fs.readFileSync('components/FaqAccordion.tsx', 'utf8');

const schemaSnippet = `
export default function FaqAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);
  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };
  
  const allFaqs = [...QUALITY_FAQS, ...LOGISTICS_FAQS];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": allFaqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
      <div id="faq" className="w-full max-w-6xl mx-auto px-4 py-8">
`;

// we have to replace from 'export default function FaqAccordion() {' to '<div id="faq"'
const oldReturn = `export default function FaqAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div id="faq" className="w-full max-w-6xl mx-auto px-4 py-8">`;
    
const regexReplace = /export default function FaqAccordion\(\) \{[\s\S]*?<div id="faq"/;

content = content.replace(regexReplace, `export default function FaqAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);
  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };
  
  const allFaqs = [...QUALITY_FAQS, ...LOGISTICS_FAQS];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": allFaqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
      <div id="faq"`);
      
content = content.replace(/<\/div>\n  \);\n\}$/, '</div>\n    </>\n  );\n}');

fs.writeFileSync('components/FaqAccordion.tsx', content);
console.log('Fixed components/FaqAccordion.tsx');
