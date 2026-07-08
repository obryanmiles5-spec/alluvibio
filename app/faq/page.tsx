import FaqAccordion from '@/components/FaqAccordion';

export default function FAQPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-slate-900 py-16 px-6 md:px-12 text-center border-b border-slate-800">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Frequently Asked Questions</h1>
        <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
          Get answers to common scientific research questions, laboratory standards, and logistics details about purchasing peptides in the United Kingdom.
        </p>
      </div>

      <div className="container mx-auto py-12">
        <FaqAccordion />
      </div>
    </div>
  );
}
