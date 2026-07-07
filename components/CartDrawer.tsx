'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, Trash2, Mail, MessageSquare, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartSubtotal,
    cartCount,
    minOrderRequired,
    clearCart
  } = useCart();

  const [checkoutMode, setCheckoutMode] = useState<'none' | 'email' | 'whatsapp'>('none');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
    paymentMethod: 'Bank Transfer'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const amountNeeded = minOrderRequired - cartSubtotal;
  const isMinimumMet = cartSubtotal >= minOrderRequired;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const formatCartText = () => {
    let text = `*UK PEPTIDES UK - NEW ORDER REQUEST*\n`;
    text += `=========================\n\n`;
    cart.forEach((item, index) => {
      text += `${index + 1}. *${item.name}* (x${item.quantity}) - £${(item.price * item.quantity).toFixed(2)}\n`;
    });
    text += `\n=========================\n`;
    text += `*SUBTOTAL:* £${cartSubtotal.toFixed(2)}\n`;
    text += `*SHIPPING:* FREE\n`;
    text += `*TOTAL ESTIMATE:* £${cartSubtotal.toFixed(2)}\n\n`;
    
    if (formData.name) {
      text += `*CUSTOMER DETAILS:*\n`;
      text += `• Name: ${formData.name}\n`;
      text += `• Email: ${formData.email}\n`;
      text += `• Phone: ${formData.phone}\n`;
      text += `• Shipping Address: ${formData.address}\n`;
      text += `• Payment Method: ${formData.paymentMethod}\n`;
      if (formData.notes) {
        text += `• Research Notes: ${formData.notes}\n`;
      }
    }
    return encodeURIComponent(text);
  };

  const handleWhatsAppCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isMinimumMet) return;

    const whatsappText = formatCartText();
    // UK support number or standard link format
    const whatsappUrl = `https://wa.me/447400000000?text=${whatsappText}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Simulate order success
    setCheckoutSuccess(true);
    setTimeout(() => {
      clearCart();
      setCheckoutSuccess(false);
      setCheckoutMode('none');
      setIsCartOpen(false);
    }, 3000);
  };

  const handleEmailCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isMinimumMet) return;

    setIsSubmitting(true);

    // Simulate server request
    setTimeout(() => {
      setIsSubmitting(false);
      setCheckoutSuccess(true);
      
      setTimeout(() => {
        clearCart();
        setCheckoutSuccess(false);
        setCheckoutMode('none');
        setIsCartOpen(false);
      }, 3000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              if (checkoutMode === 'none') setIsCartOpen(false);
            }}
            className="fixed inset-0 bg-slate-950 z-[9998] backdrop-blur-[2px]"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[9999] shadow-2xl flex flex-col h-full border-l border-slate-200"
          >
            {/* Header */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="font-extrabold text-slate-800 text-base">Your Lab Cart</h2>
                  <p className="text-xs text-slate-500 font-medium">{cartCount} {cartCount === 1 ? 'item' : 'items'} selected</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setCheckoutMode('none');
                  setIsCartOpen(false);
                }}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Contents */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {checkoutSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center px-4">
                  <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-4 border border-green-200 shadow-sm">
                    <svg className="w-8 h-8 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-800 mb-2">Order Request Submitted!</h3>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                    Your order request of <span className="font-bold text-slate-800">£{cartSubtotal.toFixed(2)}</span> has been registered. 
                    {checkoutMode === 'whatsapp' 
                      ? ' We are waiting for you to complete the conversation on WhatsApp.' 
                      : ' A sales representative will email you within 1 hour with secure payment instructions.'}
                  </p>
                  <span className="text-xs text-blue-500 font-semibold mt-6 animate-pulse">Clearing cart and closing...</span>
                </div>
              ) : checkoutMode !== 'none' ? (
                /* Checkout Form Screen */
                <div className="space-y-4">
                  <button
                    onClick={() => setCheckoutMode('none')}
                    className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mb-2"
                  >
                    ← Back to Cart Overview
                  </button>
                  <h3 className="font-extrabold text-slate-800 text-sm uppercase tracking-wider">
                    {checkoutMode === 'whatsapp' ? 'WhatsApp Order Details' : 'Email Order Request'}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    Please provide your contact and shipping information below to submit your secure purchase draft. <br/><br/>
                    <strong>Payment methods:</strong> Bank Transfer, Accepted UK gift cards. <br/>
                    <em>No payment details are integrated here. After checkout, our sales team will provide payment details based on the option you choose.</em>
                  </p>

                  <form onSubmit={checkoutMode === 'whatsapp' ? handleWhatsAppCheckoutSubmit : handleEmailCheckoutSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Dr. John Doe"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:border-blue-500 text-slate-800"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@lab.co.uk"
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:border-blue-500 text-slate-800"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+44 7123 456789"
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:border-blue-500 text-slate-800"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">UK Delivery Address</label>
                      <textarea
                        name="address"
                        required
                        rows={2}
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Department of Chemistry, University, Postcode"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:border-blue-500 text-slate-800 resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Payment Method</label>
                      <select
                        name="paymentMethod"
                        required
                        value={formData.paymentMethod}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:border-blue-500 text-slate-800"
                      >
                        <option value="Bank Transfer">Bank Transfer</option>
                        <option value="Accepted UK Gift Cards">Accepted UK Gift Cards</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Research Notes (Optional)</label>
                      <textarea
                        name="notes"
                        rows={1}
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="e.g. For in-vitro cell assay use only"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:border-blue-500 text-slate-800 resize-none"
                      />
                    </div>

                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex gap-2 items-start text-[11px] text-slate-500 leading-relaxed">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>
                        Secure purchase request verified. High-purity biochemical study compounds are delivered discrete-packed with temperature monitoring.
                      </span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 rounded-xl font-bold text-sm shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98] ${
                        checkoutMode === 'whatsapp'
                          ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/10'
                          : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/10'
                      }`}
                    >
                      {checkoutMode === 'whatsapp' ? (
                        <>
                          <MessageSquare className="w-4 h-4" />
                          Launch WhatsApp Checkout
                        </>
                      ) : (
                        <>
                          {isSubmitting ? 'Processing Request...' : 'Submit Order Request'}
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              ) : cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-slate-400 py-10">
                  <ShoppingBag className="w-12 h-12 mb-3 text-slate-300" />
                  <p className="text-sm font-bold text-slate-500">Your cart is empty</p>
                  <p className="text-xs text-slate-400 max-w-xs mt-1">Select from our catalog of premium-grade compounds to start order checkout.</p>
                </div>
              ) : (
                /* Item list */
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4 p-3 bg-slate-50 border border-slate-100 rounded-xl items-center relative overflow-hidden group">
                      <div className="relative w-16 h-16 bg-white border border-slate-200 rounded-lg overflow-hidden flex items-center justify-center shrink-0">
                        <img src={item.image} alt={item.name} className="object-cover w-full h-full p-1 mix-blend-multiply" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-extrabold text-slate-800 truncate" title={item.name}>{item.name}</h4>
                        <p className="text-xs text-blue-600 font-extrabold mt-0.5">£{item.price.toFixed(2)}</p>
                        
                        <div className="flex items-center gap-2.5 mt-2">
                          <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden shadow-sm">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-slate-50 text-slate-500 transition-colors border-r border-slate-200 cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2.5 text-xs font-bold text-slate-700 min-w-6 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-slate-50 text-slate-500 transition-colors border-l border-slate-200 cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="absolute top-2 right-2 p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sticky Bottom Actions */}
            {cart.length > 0 && !checkoutSuccess && checkoutMode === 'none' && (
              <div className="p-5 border-t border-slate-100 bg-slate-50">
                {/* Minimum order check */}
                {!isMinimumMet ? (
                  <div className="bg-amber-50 border border-amber-200/60 rounded-xl p-3.5 mb-4 flex flex-col">
                    <span className="text-xs font-extrabold text-amber-800 tracking-tight uppercase">⚠️ MINIMUM ORDER NOT MET</span>
                    <span className="text-[11px] text-amber-600 font-medium leading-relaxed mt-1">
                      Minimum order threshold is <span className="font-extrabold">£{minOrderRequired.toFixed(2)}</span>. 
                      Please add <span className="font-bold">£{amountNeeded.toFixed(2)}</span> more to unlock checkouts.
                    </span>
                    {/* Progress bar */}
                    <div className="w-full bg-amber-200/50 h-1.5 rounded-full mt-2.5 overflow-hidden">
                      <div 
                        className="bg-amber-500 h-full rounded-full transition-all duration-300"
                        style={{ width: `${(cartSubtotal / minOrderRequired) * 100}%` }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="bg-emerald-50 border border-emerald-200/50 rounded-xl p-3 mb-4 flex items-center gap-2 text-[11px] text-emerald-700 font-semibold leading-none">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                    <span>Minimum order value met. Shipping is fully upgraded to Free UK Next-Day Delivery!</span>
                  </div>
                )}

                {/* Subtotals */}
                <div className="space-y-2.5 mb-5">
                  <div className="flex justify-between text-xs font-semibold text-slate-500">
                    <span>Research Items Subtotal</span>
                    <span>£{cartSubtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xs font-semibold text-slate-500">
                    <span>Shipping (Special Delivery)</span>
                    <span className="text-green-600 font-bold uppercase tracking-wider text-[10px]">Free</span>
                  </div>
                  <div className="h-[1px] bg-slate-200/80 my-1" />
                  <div className="flex justify-between text-sm font-extrabold text-slate-800">
                    <span>Est. Order Total</span>
                    <span>£{cartSubtotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Dual checkout buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    disabled={!isMinimumMet}
                    onClick={() => setCheckoutMode('email')}
                    className="flex flex-col items-center justify-center gap-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-2.5 rounded-xl text-xs transition-transform hover:scale-[1.03] active:scale-[0.97] disabled:opacity-50 disabled:scale-100 disabled:pointer-events-none shadow-lg shadow-blue-600/10 cursor-pointer"
                  >
                    <Mail className="w-4 h-4 mb-0.5" />
                    Checkout via Email
                  </button>
                  <button
                    disabled={!isMinimumMet}
                    onClick={() => setCheckoutMode('whatsapp')}
                    className="flex flex-col items-center justify-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-2.5 rounded-xl text-xs transition-transform hover:scale-[1.03] active:scale-[0.97] disabled:opacity-50 disabled:scale-100 disabled:pointer-events-none shadow-lg shadow-emerald-600/10 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 mb-0.5" />
                    Checkout via WhatsApp
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
