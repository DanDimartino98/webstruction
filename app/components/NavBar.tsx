"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = ["Service", "Reviews", "Pricing", "FAQ"];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 4) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Message Bar (not sticky) */}
      <div style={{ background: "#000", color: "#fff", width: "100%", textAlign: "center", fontSize: 16, padding: "16px 0", fontFamily: 'var(--font-inter)' }}>
        {'\u2734\ufe0e'} Early Bird Discounts! Lock your spot to avoid a price increase as the more features get added.
      </div>
      {/* Sticky Nav Bar (desktop only) */}
      <nav
        className={scrolled ? "desktop-navbar desktop-navbar--scrolled" : "desktop-navbar"}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "#fff",
          width: "100%",
          transition: 'box-shadow 0.3s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: scrolled ? '0 2px 12px 0 rgba(0,0,0,0.07)' : 'none',
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#fff",
            padding: "0 48px 0 32px",
            height: 72,
            borderBottom: "1px solid #f0f0f0",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", height: 56 }}>
            <Image src="/logo.png" alt="Logo" width={60} height={60} style={{ marginRight: 12 }} />
          </div>
          {/* Links */}
          <div style={{ display: "flex", gap: 32, flex: 1, justifyContent: "center" }}>
            {navLinks.map((link) => (
              <span
                key={link}
                style={{
                  color: "#5d5c59",
                  fontSize: 20,
                  fontWeight: 600, // semi-bold
                  fontFamily: 'var(--font-inter)',
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
                className="nav-link"
              >
                {link}
              </span>
            ))}
          </div>
          {/* Get Started Button */}
          <button
            style={{
              marginLeft: 32,
              marginRight: 24, // add space to the right of the button
              padding: "10px 28px", // restore original padding
              borderRadius: 8,
              border: "1px solid #ececec",
              background: "#fff",
              color: "#5d5c59",
              fontWeight: 600,
              fontSize: 18,
              fontFamily: 'var(--font-inter)',
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            className="get-started-btn"
          >
            Get Started
          </button>
        </div>
        <style jsx>{`
          @media (max-width: 767px) {
            .desktop-navbar {
              display: none !important;
            }
          }
          @media (min-width: 768px) {
            .desktop-navbar {
              display: block !important;
            }
          }
          .nav-link:hover {
            color: #000;
          }
          .get-started-btn:hover {
            background: #f5f5f4;
          }
        `}</style>
      </nav>
    </>
  );
} 