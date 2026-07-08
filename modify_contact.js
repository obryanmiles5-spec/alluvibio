const fs = require('fs');
let content = fs.readFileSync('app/contact/page.tsx', 'utf8');

if(!content.includes("'use client'")) {
  content = "'use client';\n" + content;
}

if(!content.includes("import { useState } from 'react';")) {
  content = content.replace("'use client';", "'use client';\nimport { useState } from 'react';");
}

const componentRegex = /export default function Contact\(\) \{/;
const newComponentStart = `export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setSubmitResult(data);
      if (data.success) {
        setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
      }
    } catch (error) {
      setSubmitResult({ success: false, message: 'An unexpected error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };
`;

content = content.replace(componentRegex, newComponentStart);

// Now update the form tag
content = content.replace('<form className="space-y-6">', '<form className="space-y-6" onSubmit={handleSubmit}>');

// Update inputs
content = content.replace(
  '<input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors" placeholder="Dr. John Smith" />',
  '<input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors" placeholder="Dr. John Smith" />'
);

content = content.replace(
  '<input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors" placeholder="john@university.ac.uk" />',
  '<input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors" placeholder="john@university.ac.uk" />'
);

content = content.replace(
  '<select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors appearance-none">',
  '<select value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors appearance-none">'
);

content = content.replace(
  '<textarea rows={5} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors resize-none" placeholder="How can we assist with your research?"></textarea>',
  '<textarea rows={5} required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors resize-none" placeholder="How can we assist with your research?"></textarea>'
);

// Update button and status message
const buttonRegex = /<button type="button" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-blue-600\/30 transition-all">[\s\S]*?<\/button>/;
const newButton = `
              {submitResult && (
                <div className={\`p-4 rounded-xl text-sm font-bold \${submitResult.success ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}\`}>
                  {submitResult.message}
                </div>
              )}
              <button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-blue-600/30 transition-all">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
`;
content = content.replace(buttonRegex, newButton);

fs.writeFileSync('app/contact/page.tsx', content);
console.log('Modified app/contact/page.tsx');
