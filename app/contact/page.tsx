'use client';
import { useState } from 'react';
export default function Contact() {
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

  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "UK Peptides",
    "image": "https://buyretat.co.uk/logo.svg",
    "email": "contact@buyretat.co.uk",
    "telephone": "+44 7529 469162",
    "url": "https://buyretat.co.uk",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "UK"
    },
    "description": "Leading UK supplier of high-purity laboratory research peptides.",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-slate-900 py-16 px-6 md:px-12 text-center border-b border-slate-800">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contact Us</h1>
        <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
          Our UK-based support team is available 24/7 to assist with your research inquiries, bulk orders, and shipping questions.
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Details */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-slate-800 text-lg mb-4">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    📧
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email</div>
                    <a href="mailto:contact@buyretat.co.uk" className="text-slate-800 font-medium hover:text-blue-600 transition-colors">contact@buyretat.co.uk</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</div>
                    <a href="tel:+447529469162" className="text-slate-800 font-medium hover:text-blue-600 transition-colors">+44 7529 469162</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    🕒
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Hours</div>
                    <span className="text-slate-800 font-medium">24/7 Support Available</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-2xl rounded-full"></div>
              <h3 className="font-bold text-white text-lg mb-2 relative z-10">Bulk Research Orders</h3>
              <p className="text-slate-400 text-sm mb-4 relative z-10">
                Are you purchasing for a university or private laboratory? Contact us for specialized wholesale pricing.
              </p>
              <button className="text-blue-400 text-sm font-bold uppercase tracking-wider relative z-10 hover:text-blue-300">
                Request Quote &rarr;
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Your Name</label>
                  <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors" placeholder="Dr. John Smith" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                  <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors" placeholder="john@university.ac.uk" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Subject</label>
                <select value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors appearance-none">
                  <option>General Inquiry</option>
                  <option>Order Status</option>
                  <option>COA / Lab Reports</option>
                  <option>Wholesale Pricing</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                <textarea rows={5} required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors resize-none" placeholder="How can we assist with your research?"></textarea>
              </div>
              
              
              {submitResult && (
                <div className={`p-4 rounded-xl text-sm font-bold ${submitResult.success ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                  {submitResult.message}
                </div>
              )}
              <button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-blue-600/30 transition-all">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 bg-slate-200 rounded-2xl h-80 w-full overflow-hidden relative border border-slate-200 shadow-inner">
          <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-blue-600">
              📍
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-md text-sm font-bold text-slate-700">
              UK Logistics Center
            </div>
          </div>
          {/* Abstract grid to look like a map */}
          <div className="w-full h-full opacity-10" style={{ backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        </div>
      </div>
    </div>
    </>
  );
}
