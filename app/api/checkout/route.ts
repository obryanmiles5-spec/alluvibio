import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { 
      name, email, phone, address, notes,
      cartItems, totalAmount, paymentMethod 
    } = data;

    if (!name || !email || !address || !cartItems || cartItems.length === 0) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    const orderNumber = 'ORD-' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    const orderTime = new Date().toLocaleString();

    let itemsHtml = `
      <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
        <thead>
          <tr>
            <th style="border: 1px solid #ccc; padding: 8px; text-align: left;">Product</th>
            <th style="border: 1px solid #ccc; padding: 8px; text-align: center;">Quantity</th>
            <th style="border: 1px solid #ccc; padding: 8px; text-align: right;">Price</th>
          </tr>
        </thead>
        <tbody>
    `;

    cartItems.forEach((item: any) => {
      itemsHtml += `
        <tr>
          <td style="border: 1px solid #ccc; padding: 8px;">${item.name}</td>
          <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${item.quantity}</td>
          <td style="border: 1px solid #ccc; padding: 8px; text-align: right;">£${item.price.toFixed(2)}</td>
        </tr>
      `;
    });

    itemsHtml += `
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" style="border: 1px solid #ccc; padding: 8px; text-align: right; font-weight: bold;">Total</td>
            <td style="border: 1px solid #ccc; padding: 8px; text-align: right; font-weight: bold;">£${totalAmount.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    `;

    // 1. Email to admin
    const adminHtml = `
      <h2>New Order Received: ${orderNumber}</h2>
      <h3>Customer Details:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      
      <h3>Shipping Address:</h3>
      <p>${address.replace(/\n/g, '<br>')}</p>
      <p><strong>Notes:</strong> ${notes || 'N/A'}</p>

      <h3>Order Summary:</h3>
      <p><strong>Payment Method:</strong> ${paymentMethod}</p>
      <p><strong>Order Time:</strong> ${orderTime}</p>
      ${itemsHtml}
    `;

    const contactEmail = process.env.CONTACT_EMAIL || 'contact@buyretat.co.uk';

    await sendEmail({
      to: contactEmail,
      subject: `New Order: ${orderNumber} - £${totalAmount.toFixed(2)}`,
      html: adminHtml,
    });

    // 2. Email to customer
    const customerHtml = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Thank you for your order!</h2>
        <p>Hi ${name.split(' ')[0]},</p>
        <p>We've received your order <strong>${orderNumber}</strong>. We're currently processing it and will be in touch shortly regarding payment and shipping.</p>
        
        <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin-top: 20px;">
          <h3 style="margin-top: 0; color: #1e293b;">Order Summary</h3>
          ${itemsHtml}
        </div>
        
        <h3 style="margin-top: 20px;">Shipping Details:</h3>
        <p>${name}<br>${address.replace(/\n/g, '<br>')}</p>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b;">
          <p>UK Peptides</p>
          <p>Email: contact@buyretat.co.uk</p>
        </div>
      </div>
    `;

    await sendEmail({
      to: email,
      subject: `Order Confirmation - ${orderNumber}`,
      html: customerHtml,
    });

    return NextResponse.json({ success: true, orderNumber, message: 'Order placed successfully' });
  } catch (error) {
    console.error('Checkout API Error:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
