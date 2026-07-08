import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <p><strong>Time:</strong> ${new Date().toISOString()}</p>
      <p><strong>IP:</strong> ${req.headers.get('x-forwarded-for') || req.headers.get('remote-addr') || 'Unknown'}</p>
    `;

    const contactEmail = process.env.CONTACT_EMAIL || 'contact@buyretat.co.uk';

    const result = await sendEmail({
      to: contactEmail,
      subject: `New Contact Submission from ${name}: ${subject || 'General Inquiry'}`,
      html,
    });

    if (result.success) {
      return NextResponse.json({ success: true, message: 'Message sent successfully' });
    } else {
      return NextResponse.json({ success: false, message: 'Failed to send message' }, { status: 500 });
    }
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
