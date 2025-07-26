"use client";

import { useState } from "react";
import Image from "next/image";
import MobileNavBar from "../components/MobileNavBar";

export default function GetStarted() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    trade: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show loading state
    const submitButton = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Submit form data to FormSubmit service
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('trade', formData.trade);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('subject', `New Website Request from ${formData.name}`);
    
    fetch('https://formsubmit.co/hughesdaniel98@gmail.com', {
      method: 'POST',
      body: formDataToSend,
    })
    .then(response => {
      if (response.ok) {
        alert('Thank you! Your request has been sent successfully. We\'ll get back to you as soon as possible.');
        // Reset form
        setFormData({
          name: "",
          email: "",
          trade: "",
          message: ""
        });
      } else {
        throw new Error('Failed to send message');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Sorry, there was an error sending your message. Please try again or contact us directly.');
    })
    .finally(() => {
      // Reset button state
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ background: '#fff', minHeight: '100vh', width: '100%' }}>
      {/* Mobile NavBar (fixed, robust) */}
      <div className="mobile-only"><MobileNavBar /></div>
      
      {/* Contact Form Section */}
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '120px 16px 80px 16px',
          width: '100%',
          minHeight: 'calc(100vh - 200px)',
        }}
        className="contact-form-section"
      >
        <div style={{
          maxWidth: 600,
          width: '100%',
        }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#171717',
              marginBottom: 16,
              fontFamily: 'var(--font-inter)',
              lineHeight: 1.1,
            }}>
              Get Started Today
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: '#5d5c59',
              fontWeight: 400,
              fontFamily: 'var(--font-inter)',
              lineHeight: 1.4,
            }}>
              Tell us about your business and we'll get back to you with a plan.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <div style={{ marginBottom: 24 }}>
              <label 
                htmlFor="name"
                style={{
                  display: 'block',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#171717',
                  marginBottom: 8,
                  fontFamily: 'var(--font-inter)',
                }}
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  fontSize: '1.1rem',
                  border: '1px solid #e5e5e5',
                  borderRadius: 12,
                  fontFamily: 'var(--font-inter)',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s',
                  color: '#171717',
                }}
                placeholder="Your full name"
              />
            </div>

            <div style={{ marginBottom: 24 }}>
              <label 
                htmlFor="email"
                style={{
                  display: 'block',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#171717',
                  marginBottom: 8,
                  fontFamily: 'var(--font-inter)',
                }}
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  fontSize: '1.1rem',
                  border: '1px solid #e5e5e5',
                  borderRadius: 12,
                  fontFamily: 'var(--font-inter)',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s',
                  color: '#171717',
                }}
                placeholder="your.email@example.com"
              />
            </div>

            <div style={{ marginBottom: 24 }}>
              <label 
                htmlFor="trade"
                style={{
                  display: 'block',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#171717',
                  marginBottom: 8,
                  fontFamily: 'var(--font-inter)',
                }}
              >
                Trade *
              </label>
              <input
                type="text"
                id="trade"
                name="trade"
                value={formData.trade}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  fontSize: '1.1rem',
                  border: '1px solid #e5e5e5',
                  borderRadius: 12,
                  fontFamily: 'var(--font-inter)',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s',
                  color: '#171717',
                }}
                placeholder="Your trade (e.g., Plumber, Electrician, Builder)"
              />
            </div>

            <div style={{ marginBottom: 32 }}>
              <label 
                htmlFor="message"
                style={{
                  display: 'block',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#171717',
                  marginBottom: 8,
                  fontFamily: 'var(--font-inter)',
                }}
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  fontSize: '1.1rem',
                  border: '1px solid #e5e5e5',
                  borderRadius: 12,
                  fontFamily: 'var(--font-inter)',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s',
                  resize: 'vertical',
                  color: '#171717',
                }}
                placeholder="Tell us about your business, services you offer, and any specific requirements for your website..."
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                background: '#171717',
                color: '#fff',
                border: 'none',
                borderRadius: 12,
                padding: '20px 0',
                fontSize: '1.25rem',
                fontWeight: 600,
                fontFamily: 'var(--font-inter)',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                transition: 'background 0.2s',
              }}
            >
              Submit Request
            </button>
          </form>

          {/* Additional Info */}
          <div style={{ 
            marginTop: 32, 
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '1rem',
              color: '#5d5c59',
              fontWeight: 400,
              fontFamily: 'var(--font-inter)',
              margin: 0,
            }}>
              We'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 