const fs = require('fs');
let content = fs.readFileSync('components/CartDrawer.tsx', 'utf8');

const oldHandleEmailCheckoutSubmit = `  const handleEmailCheckoutSubmit = (e: React.FormEvent) => {
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
  };`;

const newHandleEmailCheckoutSubmit = `  const handleEmailCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isMinimumMet) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          cartItems: cart,
          totalAmount: cartSubtotal,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setCheckoutSuccess(true);
        setTimeout(() => {
          clearCart();
          setCheckoutSuccess(false);
          setCheckoutMode('none');
          setIsCartOpen(false);
          setFormData({ name: '', email: '', phone: '', address: '', notes: '', paymentMethod: 'Bank Transfer' });
        }, 3000);
      } else {
        alert(data.message || 'Error placing order');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };`;

if(content.includes(oldHandleEmailCheckoutSubmit)) {
  content = content.replace(oldHandleEmailCheckoutSubmit, newHandleEmailCheckoutSubmit);
} else {
  // Try regex in case of slight indentation differences
  const regex = /const handleEmailCheckoutSubmit = \(e: React\.FormEvent\) => \{[\s\S]*?\}, 1500\);\n  \};/;
  content = content.replace(regex, newHandleEmailCheckoutSubmit);
}

fs.writeFileSync('components/CartDrawer.tsx', content);
console.log('Modified components/CartDrawer.tsx');
