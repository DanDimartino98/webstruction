import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Only initialize Resend if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, trade, message } = body;

    // Validate required fields
    if (!name || !email || !trade || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log submission attempt
    console.log('Form submission attempt:', {
      name,
      email,
      trade,
      timestamp: new Date().toISOString(),
    });

    // Try Resend first (if API key is configured)
    if (process.env.RESEND_API_KEY && resend) {
      try {
        const { data, error } = await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: ['hughesdaniel98@gmail.com'],
          subject: `New Website Request from ${name}`,
          html: `
            <h2>New Website Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Trade:</strong> ${trade}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Submitted from webstruction.vercel.app on ${new Date().toLocaleString()}</small></p>
          `,
        });

        if (error) {
          console.error('Resend error:', error);
          throw new Error('Resend email failed');
        }

        console.log('Email sent successfully via Resend:', data);
        return NextResponse.json(
          { message: 'Form submitted successfully' },
          { status: 200 }
        );
      } catch (resendError) {
        console.error('Resend failed, falling back to logging:', resendError);
      }
    }

    // Fallback: Log email details for manual processing
    console.log('=== EMAIL NOTIFICATION ===');
    console.log('From: Webstruction Contact Form');
    console.log('To: hughesdaniel98@gmail.com');
    console.log('Subject: New Website Request from', name);
    console.log('---');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Trade:', trade);
    console.log('Message:', message);
    console.log('---');
    console.log('Timestamp:', new Date().toISOString());
    console.log('=======================');

    // For now, we'll log the email details since external services are unreliable
    // In production, you should set up a proper email service like Resend
    return NextResponse.json(
      { message: 'Form submitted successfully. Email details logged to server console.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Form submission error:', error);
    
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
} 