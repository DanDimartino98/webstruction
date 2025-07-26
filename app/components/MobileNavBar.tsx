'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MobileNavBar() {
  const [isSticky, setIsSticky] = useState(false);
  const [messageBarStyle, setMessageBarStyle] = useState({ opacity: 1, transform: 'translateY(0px)' });

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      // Message bar fades and slides up between 0 and 56px scroll
      const progress = Math.min(scrollY / 56, 1);
      setMessageBarStyle({
        opacity: 1 - progress,
        transform: `translateY(-${progress * 56}px)`
      });
      setIsSticky(scrollY > 56);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Message Bar (animated) */}
      <div
        style={{
          background: '#000',
          color: '#fff',
          width: '100vw',
          textAlign: 'center',
          fontSize: 17,
          padding: '18px 0',
          fontFamily: 'var(--font-inter)',
          height: 56,
          lineHeight: '22px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 999,
          transition: 'opacity 0.3s cubic-bezier(0.4,0,0.2,1), transform 0.3s cubic-bezier(0.4,0,0.2,1)',
          ...messageBarStyle,
          pointerEvents: messageBarStyle.opacity === 0 ? 'none' : 'auto',
        }}
      >
        {'\u2734\ufe0e'} Early Bird Discounts! Lock your spot to avoid a price increase as the more features get added.
      </div>
      {/* Fixed Mobile Nav Bar below message bar */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: 72,
        boxSizing: 'border-box',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        borderBottom: '1px solid #ececec',
        zIndex: 1000,
        transform: isSticky ? 'translateY(0)' : 'translateY(56px)',
        transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
        boxShadow: isSticky ? '0 2px 12px 0 rgba(0,0,0,0.07)' : 'none',
      }}>
        <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', height: 56 }}>
          <a href="/" style={{ textDecoration: "none" }}>
            <Image src="/logo.png" alt="Logo" width={56} height={56} />
          </a>
        </div>
        <a href="/getstarted" style={{ flexShrink: 0, height: 48, padding: '0 24px', borderRadius: 8, border: '1px solid #ececec', background: '#fff', color: '#5d5c59', fontWeight: 600, fontSize: 18, fontFamily: 'var(--font-inter)', cursor: 'pointer', transition: 'background 0.2s', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', marginRight: 0, textDecoration: 'none' }}>Get Started</a>
      </nav>
      {/* Spacer for nav bar height only */}
      <div style={{ height: 72 }} />
    </>
  );
} 