'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  role: string;
  institution: string;
  rating: number;
  peptide: string;
  comment: string;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Dr. Arthur Vance',
    role: 'Lead Assay Biochemist',
    institution: 'University of Manchester',
    rating: 5,
    peptide: 'Retatrutide 10mg',
    comment: 'Excellent HPLC purity. The Retatrutide batch we received showed a 99.8% purity profile, conforming perfectly with our in-vitro metabolic assays and binding affinity studies.'
  },
  {
    id: 2,
    name: 'Sarah Lin',
    role: 'Biomedical Research Fellow',
    institution: 'London Research Institute',
    rating: 5,
    peptide: 'Tirzepatide 10mg',
    comment: 'Delivery was exceptionally fast. The package arrived within 24 hours in insulated, temperature-controlled, discrete packaging. Highly recommended for UK clinical studies.'
  },
  {
    id: 3,
    name: 'Prof. James Henderson',
    role: 'Clinical Biochemist',
    institution: 'Edinburgh Science Centre',
    rating: 5,
    peptide: 'Semaglutide 5mg',
    comment: 'Alluvi Bio\'s customer support was incredibly helpful when we requested detailed batch-specific COAs. The response was prompt, technical, and highly professional.'
  },
  {
    id: 4,
    name: 'Dr. Elena Rostova',
    role: 'Endocrine Research Principal',
    institution: 'Cambridge Endocrine Lab',
    rating: 5,
    peptide: 'Tirzepatide 5mg',
    comment: 'Consistency across batches is our top priority. Having ordered Tirzepatide multiple times for our longitudinal trials, we have observed identical chromatographic profiles every single time.'
  },
  {
    id: 5,
    name: 'Mark Sterling',
    role: 'Laboratory Procurement Manager',
    institution: 'Alistair Biotech UK',
    rating: 5,
    peptide: 'Melanotan II 10mg',
    comment: 'Excellent tier pricing and superb delivery. Releasing domestic shipments from within the UK eliminates standard customs delays and simplifies our regulatory import compliance.'
  },
  {
    id: 6,
    name: 'Dr. Rachel Gallagher',
    role: 'Neuroscience Investigator',
    institution: 'King\'s College London',
    rating: 5,
    peptide: 'BPC-157 5mg',
    comment: 'We evaluated the BPC-157 in our cellular healing model. The reconstitution characteristics and lyophilization structure were exemplary. A trustworthy UK supplier.'
  },
  {
    id: 7,
    name: 'Dr. Thomas Thorne',
    role: 'Senior Research Officer',
    institution: 'Oxford biochemical Unit',
    rating: 5,
    peptide: 'TB-500 5mg',
    comment: 'The peptide was lyophilized perfectly, which ensured stable storage and simple reconstitution for our research protocols. 100% stable results obtained.'
  },
  {
    id: 8,
    name: 'Dr. Hannah Myers',
    role: 'Pharmacodynamics Investigator',
    institution: 'University of Bristol',
    rating: 5,
    peptide: 'CJC-1295 No DAC 5mg',
    comment: 'Extremely pleased with the comprehensive documentation. The HPLC and Mass Spectrometry reports are fully detailed. Exceptional biochemical integrity.'
  }
];

export default function ReviewSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideVariants = {
    enter: {
      opacity: 0,
      y: 15,
      scale: 0.98
    },
    center: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    exit: {
      opacity: 0,
      y: -15,
      scale: 0.98
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="customer-reviews" className="relative w-full max-w-4xl mx-auto px-4 py-8">
      {/* Premium Light Gradient Background with Alluvia Watermark */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 via-blue-50/50 to-indigo-50/50 rounded-3xl -z-10 border border-slate-200/80 shadow-xl overflow-hidden">
        {/* Subtle glowing orbs */}
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-indigo-300/10 rounded-full blur-3xl"></div>
        
        {/* Giant premium Alluvia watermark in the background */}
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-[0.03]">
          <span className="text-[120px] font-black tracking-widest text-slate-900 uppercase">ALLUVIA</span>
        </div>
      </div>
      
      <div className="relative overflow-hidden min-h-[340px] flex flex-col justify-between p-6 sm:p-10">
        <Quote className="absolute top-6 left-6 text-blue-500/5 w-24 h-24 -z-10 transform -scale-x-100" />
        
        <div className="flex-1 flex flex-col justify-center">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="flex flex-col text-center items-center"
            >
              <div className="flex gap-1 mb-4 text-amber-400">
                {[...Array(REVIEWS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <p className="text-base sm:text-lg md:text-xl text-black italic font-medium leading-relaxed max-w-2xl mb-6">
                &ldquo;{REVIEWS[currentIndex].comment}&rdquo;
              </p>
              
              <div className="flex flex-col items-center">
                <span className="font-extrabold text-slate-900 text-base sm:text-lg">{REVIEWS[currentIndex].name}</span>
                <span className="text-xs text-blue-600 font-bold uppercase tracking-wider mt-0.5">
                  {REVIEWS[currentIndex].role} &bull; {REVIEWS[currentIndex].institution}
                </span>
                <span className="mt-2 inline-flex items-center gap-1.5 px-3.5 py-1 bg-slate-900/5 border border-slate-950/10 text-slate-600 rounded-full text-[11px] font-semibold backdrop-blur-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Verified Study: {REVIEWS[currentIndex].peptide}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200/80 w-full max-w-xs mx-auto">
          <button
            onClick={handlePrev}
            className="p-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Previous Review"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          {/* Pagination Indicators */}
          <div className="flex gap-1.5">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentIndex(i);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-350 ${
                  i === currentIndex ? 'w-5 bg-blue-600' : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to review ${i + 1}`}
              ></button>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Next Review"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
