'use client';
import { useState, useEffect } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const cities = ['London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow', 'Edinburgh', 'Liverpool', 'Bristol', 'Cardiff', 'Belfast', 'Nottingham', 'Sheffield'];
const products = [
  'Retatrutide 10mg', 'Tirzepatide 10mg', 'BPC-157 5mg', 'TB-500 5mg', 'CJC-1295 2mg', 'Melanotan II 10mg', 'Ipamorelin 5mg', 'Bacteriostatic Water 10ml'
];
const times = ['2 minutes ago', '15 minutes ago', '34 minutes ago', '1 hour ago', 'Just now', '12 minutes ago'];

export default function LiveSalesNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [notification, setNotification] = useState({ city: '', product: '', time: '' });

  useEffect(() => {
    const triggerNotification = () => {
      const city = cities[Math.floor(Math.random() * cities.length)];
      const product = products[Math.floor(Math.random() * products.length)];
      const time = times[Math.floor(Math.random() * times.length)];
      
      setNotification({ city, product, time });
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000); // Hide after 5 seconds
    };

    // Initial delay before first notification
    const initialTimer = setTimeout(triggerNotification, 10000);

    // Set up recurring interval
    const interval = setInterval(() => {
      triggerNotification();
    }, 25000); // Trigger every 25 seconds

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="fixed bottom-24 left-4 z-50 bg-white rounded-xl shadow-2xl border border-slate-200 p-3 pr-8 max-w-sm flex items-center gap-3"
        >
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
          
          <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-blue-600" />
          </div>
          
          <div className="flex flex-col">
            <span className="text-xs text-slate-500 font-medium">Someone in {notification.city} purchased</span>
            <span className="text-sm font-extrabold text-slate-800 leading-tight">{notification.product}</span>
            <span className="text-[10px] text-blue-600 font-bold mt-0.5">{notification.time} • Verified Order</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
