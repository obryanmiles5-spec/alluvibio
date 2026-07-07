'use client';

import React, { useState } from 'react';
import { MessageSquare, X, Send, Circle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/447400000000?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9990] flex flex-col items-end">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mb-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-emerald-600 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Simulated WhatsApp Agent Avatar */}
                <div className="relative w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-bold text-white border border-white/20">
                  AB
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-emerald-600 rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-extrabold text-sm tracking-wide">UK Peptides Support</h3>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-100 font-medium">
                    <Circle className="w-1.5 h-1.5 fill-current text-green-300" />
                    <span>Online & Ready</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Greeting */}
            <div className="p-4 bg-slate-50 border-b border-slate-100 text-xs text-slate-500 leading-relaxed">
              Hello! 👋 Welcome to UK Peptides Bio support. How can we help you with your research peptide requirements today?
            </div>

            {/* Simulated Chat History / Box */}
            <div className="p-4 space-y-3.5 flex-1 max-h-48 overflow-y-auto bg-[#efeae2]">
              <div className="bg-white rounded-xl rounded-tl-none p-3 shadow-sm max-w-[85%] text-xs text-slate-800 leading-relaxed border border-slate-100">
                Hi there! Our current average response time is under <span className="font-bold text-emerald-600">5 minutes</span>. Feel free to ask about compound batch numbers, purity COAs, or shipping estimates.
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white flex gap-2 border-t border-slate-100">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-emerald-500 text-slate-800"
              />
              <button
                type="submit"
                disabled={!message.trim()}
                className="p-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition-colors disabled:opacity-40 disabled:hover:bg-emerald-600 flex items-center justify-center shrink-0 cursor-pointer"
                aria-label="Send WhatsApp message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Bubble */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-105 active:scale-95 focus:outline-none relative group cursor-pointer"
        aria-label="Open WhatsApp Support Chat"
      >
        {/* Glowing aura */}
        <span className="absolute inset-0 rounded-full bg-emerald-400/30 animate-ping -z-10" />

        {/* Official WhatsApp Logo SVG */}
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.588 1.977 14.11 1.01 11.48 1.01c-5.44 0-9.866 4.372-9.87 9.802 0 1.698.455 3.356 1.321 4.811L1.938 21.13l5.709-1.488zM17.43 14.8c-.318-.16-1.88-.93-2.17-1.04-.294-.11-.508-.16-.723.16-.214.32-.832 1.04-1.02 1.255-.187.215-.374.24-.693.08-1.582-.76-2.685-1.34-3.76-3.2-.284-.49.284-.454.812-1.51.088-.18.044-.335-.022-.47-.066-.134-.508-1.23-.697-1.686-.183-.443-.37-.383-.508-.39-.13-.006-.28-.008-.43-.008s-.393.056-.6.28c-.207.225-.79.775-.79 1.89s.81 2.195.925 2.35c.115.15 1.59 2.44 3.86 3.43.54.236 1.015.378 1.36.488.544.17 1.04.146 1.432.088.437-.065 1.882-.77 2.144-1.477.26-.707.26-1.313.183-1.44-.077-.127-.285-.205-.6-.365z" />
        </svg>

        {/* Hover label */}
        <span className="absolute right-16 bg-slate-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none border border-slate-800">
          Chat on WhatsApp
        </span>
      </button>
    </div>
  );
}
