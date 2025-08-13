import Image from "next/image";
import MobileNavBar from "./components/MobileNavBar";

const serviceCards = [
  {
    title: "Website",
    points: [
      "Custom website tailored to convert customers.",
      "Modern, professional look tailored for trades.",
      "Mobile-friendly and fast loading.",
    ],
  },
  {
    title: "Maintenance",
    points: [
      "Free hosting",
      "Free domain included, or use your own.",
      "Update your site with new images or text anytime.",
    ],
  },
  {
    title: "SEO",
    points: [
      "Rank on Google and get more leads",
      "Website SEO optimised",
      "Stand out locally",
    ],
  },
  {
    title: "No Contracts",
    points: [
      "Contact us anytime for help or changes.",
      "Cancel anytime, no lock-in.",
                      "No lump sum, just £49.99pm",
    ],
  },
];

function TickIcon() {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 28,
        height: 28,
        borderRadius: '50%',
        background: '#7a756c',
        marginRight: 14,
        flexShrink: 0,
        minWidth: 28,
        minHeight: 28,
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 8.5L7 11.5L12 5.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function Home() {
  return (
    <div style={{ background: '#fff', minHeight: '100vh', width: '100%' }}>
      {/* Mobile NavBar (fixed, robust) */}
      <div className="mobile-only"><MobileNavBar /></div>
      {/* Mobile Hero Section */}
      <section className="mobile-hero-section mobile-only" style={{ width: '100%', padding: '0', background: '#fff' }}>
        {/* Hero Text */}
        <div style={{ padding: '32px 32px 0 32px', textAlign: 'left' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 700, color: '#171717', marginBottom: 18, fontFamily: 'var(--font-inter)', lineHeight: 1.15 }}>
            Get A Website<br />That Helps You<br />Get More Customers.
          </h1>
          <p style={{ fontSize: '1.5rem', color: '#5d5c59', marginBottom: 28, fontWeight: 400, fontFamily: 'var(--font-inter)', lineHeight: 1.4 }}>We're not just building websites — we're helping trades win more clients and grow their business.</p>
          <a href="/getstarted" style={{ display: 'inline-block', background: '#171717', color: '#fff', border: 'none', borderRadius: 12, padding: '16px 36px', fontSize: '1.1rem', fontWeight: 600, fontFamily: 'var(--font-inter)', cursor: 'pointer', marginBottom: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', transition: 'background 0.2s', textDecoration: 'none' }}>Get Started</a>
          {/* Review Section (moved under button for mobile) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8, marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FFD700" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
              <span style={{ color: '#171717', fontWeight: 600, fontSize: '1.1rem', marginLeft: 8 }}>Rated 4.8/5</span>
            </div>
            <div style={{ color: '#5d5c59', fontSize: '1rem', marginTop: 4, textAlign: 'left' }}>
              Generated 100+ websites for customers worldwide
            </div>
          </div>
        </div>
      </section>
      {/* Desktop Hero Section */}
      <section className="desktop-hero-section desktop-only" style={{
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '80px 0 40px 150px',
        width: '100%',
        textAlign: 'left',
      }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 700,
          color: '#171717',
          marginBottom: 24,
          fontFamily: 'var(--font-inter)',
          lineHeight: 1.1,
          textAlign: 'left',
        }}>
          Get A Website That Helps You<br />Get More Customers.
        </h1>
        <p style={{
          fontSize: '1.75rem',
          color: '#5d5c59',
          marginBottom: 40,
          fontWeight: 400,
          fontFamily: 'var(--font-inter)',
          maxWidth: 600,
          marginLeft: 0,
          marginRight: 0,
          textAlign: 'left',
        }}>
          We're not just building websites — we're helping trades win more clients and grow their business.
        </p>
        <a
          href="/getstarted"
          style={{
            display: 'inline-block',
            background: '#171717',
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            padding: '20px 48px',
            fontSize: '1.25rem',
            fontWeight: 600,
            fontFamily: 'var(--font-inter)',
            cursor: 'pointer',
            marginBottom: 36,
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            transition: 'background 0.2s',
            alignSelf: 'flex-start',
            textDecoration: 'none',
          }}
          className="hero-get-started"
        >
          Get Started
        </a>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {/* 5 stars */}
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="#FFD700" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
            <span style={{ color: '#171717', fontWeight: 600, fontSize: '1.1rem', marginLeft: 8 }}>Rated 4.8/5</span>
          </div>
          <div style={{ color: '#5d5c59', fontSize: '1rem', marginTop: 4, textAlign: 'left' }}>
            Generated 100+ websites for customers worldwide
          </div>
        </div>
      </section>
      {/* Service Section */}
      <section
        id="service"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '64px 16px 48px 16px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <h2 style={{
          fontSize: '2.8rem',
          fontWeight: 700,
          color: '#171717',
          marginBottom: 24,
          fontFamily: 'var(--font-inter)',
          lineHeight: 1.1,
        }}>
          We build solutions that help trades get hired.
        </h2>
        <p style={{
          fontSize: '1.35rem',
          color: '#5d5c59',
          fontWeight: 400,
          fontFamily: 'var(--font-inter)',
          maxWidth: 900,
          margin: '0 auto',
        }}>
          Starting a trade business is tough, we get it. At Webstruction, we help trades get found, build trust, and start winning work. We don't just build websites, we create smart, tailored solutions to help you grow with confidence.
        </p>
      </section>
      {/* Service Cards Section */}
      <div className="cards-scroll-container">
        <section
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: 32,
            width: '100%',
            padding: '0 0 64px 0',
          }}
        >
          {serviceCards.map((card) => (
            <div
              key={card.title}
              style={{
                background: '#fff',
                borderRadius: 18,
                border: '1px solid #e5e5e5',
                padding: '40px 36px',
                minWidth: 320,
                maxWidth: 370,
                minHeight: 370,
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
              }}
            >
              <h3 style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: '#171717',
                marginBottom: 24,
                fontFamily: 'var(--font-inter)',
              }}>{card.title}</h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                width: '100%',
              }}>
                {card.points.map((point, idx) => (
                  <li key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1.1rem',
                    color: '#5d5c59',
                    fontWeight: 400,
                    fontFamily: 'var(--font-inter)',
                    marginBottom: idx === card.points.length - 1 ? 0 : 18,
                  }}>
                    <TickIcon />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
      {/* Optimised Landing Page Section */}
      <section
        id="product"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '64px 16px 48px 16px',
          width: '100%',
          textAlign: 'center',
        }}
        className="product-section"
      >
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          color: '#171717',
          marginBottom: 24,
          fontFamily: 'var(--font-inter)',
          lineHeight: 1.1,
        }}>
          Optimised Landing Page For Your Business
        </h2>
        <p style={{
          fontSize: '1.35rem',
          color: '#5d5c59',
          fontWeight: 400,
          fontFamily: 'var(--font-inter)',
          maxWidth: 900,
          margin: '0 auto',
        }}>
          Get a free website like this tailored to your business and brand.
        </p>
      </section>
      {/* Video Section */}
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '64px 16px 64px 16px',
          width: '100%',
        }}
        className="video-section"
      >
        <div style={{
          maxWidth: 1200,
          width: '100%',
          borderRadius: 18,
          overflow: 'hidden',
        }}>
          {/* Mobile Image */}
          <div className="mobile-only">
            <Image
              src="/template.png"
              alt="Website Template Preview"
              width={1200}
              height={800}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>
          {/* Desktop Image */}
          <div className="desktop-only">
            <Image
              src="/desktopDesign.png"
              alt="Desktop Website Design Preview"
              width={1200}
              height={800}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section
        style={{
          background: '#fff',
          width: '100%',
          padding: '48px 0 56px 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 700,
          color: '#171717',
          marginBottom: 14,
          fontFamily: 'var(--font-inter)',
          textAlign: 'center',
        }}>
          Seamless Mobile Experience
        </h2>
        <p style={{
          fontSize: '1.35rem',
          color: '#7a756c',
          fontWeight: 400,
          fontFamily: 'var(--font-inter)',
          marginBottom: 22,
          textAlign: 'center',
          maxWidth: 900,
        }}>
          Our websites are expertly designed to look great on both desktop and mobile, giving your customers a seamless experience on any device.
        </p>
        <a
          href="/getstarted"
          style={{
            display: 'inline-block',
            background: '#171717',
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            padding: '20px 48px',
            fontSize: '1.25rem',
            fontWeight: 600,
            fontFamily: 'var(--font-inter)',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            transition: 'background 0.2s',
            textDecoration: 'none',
          }}
        >
          Get Started Today
        </a>
      </section>
      {/* Pricing Section */}
      <section
        id="pricing"
        style={{
          background: '#171717',
          width: '100%',
          padding: '80px 0 100px 0',
          color: '#fff',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: 700, marginBottom: 18, fontFamily: 'var(--font-inter)' }}>
            Unlock New Customers on Autopilot
          </h2>
          <p style={{ fontSize: '1.35rem', color: '#ededed', fontWeight: 400, fontFamily: 'var(--font-inter)', maxWidth: 700, margin: '0 auto' }}>
            Get your professional website live in under 72 hours. Boost customer conversions from social media and Google effortlessly - no technical skills or maintenance headaches required.
          </p>
        </div>
        {/* Features Row */}
        <div className="desktop-only" style={{ display: 'flex', justifyContent: 'center', gap: 48, marginBottom: 64, flexWrap: 'wrap' }}>
          {/* Feature 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 180 }}>
            {/* Icon: Website (web page SVG) */}
            <div style={{ marginBottom: 12 }}>
              <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="16" stroke="#fff" strokeWidth="2"/><rect x="10" y="12" width="16" height="12" rx="2" stroke="#fff" strokeWidth="2" fill="none"/><rect x="13" y="15" width="10" height="2" rx="1" fill="#fff"/><rect x="13" y="19" width="6" height="2" rx="1" fill="#fff"/></svg>
            </div>
            <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 4 }}>Personalised Website</div>
            <div style={{ color: '#bdbdbd', fontSize: '1rem', textAlign: 'center' }}>Your custom photos, reviews and text</div>
          </div>
          {/* Feature 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 180 }}>
            {/* Icon: Hosting (better cloud SVG) */}
            <div style={{ marginBottom: 12 }}>
              <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="16" stroke="#fff" strokeWidth="2"/><path d="M25 23c0-2.76-2.24-5-5-5-.29 0-.57.03-.85.08A4.5 4.5 0 0 0 7 21c0 2.21 1.79 4 4 4h12a2 2 0 0 0 2-2z" fill="#fff" stroke="#fff" strokeWidth="1.5"/></svg>
            </div>
            <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 4 }}>Hosting</div>
            <div style={{ color: '#bdbdbd', fontSize: '1rem', textAlign: 'center' }}>Hosting on us</div>
          </div>
          {/* Feature 3 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 180 }}>
            {/* Icon: Maintenance (classic wrench SVG) */}
            <div style={{ marginBottom: 12 }}>
              <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="16" stroke="#fff" strokeWidth="2"/><path d="M24.5 13.5a5.5 5.5 0 0 1-7.77 6.97l-3.2 3.2a2 2 0 1 1-2.83-2.83l3.2-3.2A5.5 5.5 0 1 1 24.5 13.5z" stroke="#fff" strokeWidth="2" fill="none"/></svg>
            </div>
            <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 4 }}>Maintenance</div>
            <div style={{ color: '#bdbdbd', fontSize: '1rem', textAlign: 'center' }}>Update your website easily</div>
          </div>
          {/* Feature 4 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 180 }}>
            {/* Icon: Support (help/question SVG) */}
            <div style={{ marginBottom: 12 }}>
              <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="16" stroke="#fff" strokeWidth="2"/><path d="M18 24h0M18 20v-1a3 3 0 1 0-3-3" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><circle cx="18" cy="18" r="1" fill="#fff"/></svg>
            </div>
            <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 4 }}>24/7 Support</div>
            <div style={{ color: '#bdbdbd', fontSize: '1rem', textAlign: 'center' }}>Always available to help</div>
          </div>
        </div>
        {/* Pricing and How it Works Cards */}
        <div className="pricing-cards-row-mobile" style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
          {/* Pricing Card */}
          <div style={{ background: '#232323', border: '1px solid #333', borderRadius: 18, padding: '48px 40px', minWidth: 420, maxWidth: 540, flex: 1, color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: 24 }}>
            <div style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 8 }}>Level Up Your Brand</div>
            <div style={{ color: '#bdbdbd', fontSize: '1.1rem', marginBottom: 24 }}>Everything you need to have a professional website</div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 6 }}>
              <span style={{ color: '#bdbdbd', fontSize: '2rem', textDecoration: 'line-through', marginRight: 12 }}>£99</span>
              <span style={{ fontSize: '2.5rem', fontWeight: 700 }}>£49.99</span>
              <span style={{ color: '#bdbdbd', fontSize: '1.1rem', marginLeft: 6 }}>/month</span>
            </div>
            <div style={{ color: '#ff6b6b', fontWeight: 600, marginBottom: 18 }}>Save 50% on this plan</div>
            <a href="/getstarted" style={{ display: 'block', width: '100%', background: '#fff', color: '#171717', border: 'none', borderRadius: 8, padding: '16px 0', fontSize: '1.15rem', fontWeight: 700, marginBottom: 12, marginTop: 8, cursor: 'pointer', textDecoration: 'none', textAlign: 'center' }}>Get Started Today</a>
            <div style={{ color: '#bdbdbd', fontSize: '0.98rem', marginBottom: 18 }}>Cancel anytime, no questions asked.</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, width: '100%' }}>
              {[
                'Get a personalised website for your business',
                'Website designed specifically to convert more customers',
                'Rank on Google with expert SEO strategies',
                'No Contract. Cancel anytime.',
                'Hosting and maintenance included',
                'Stand out infront of your competitors',
                'Increase jobs and online presence',
                'Reach global audiences with 50+ language support',
              ].map((feature, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', fontSize: '1.05rem', color: '#fff', marginBottom: 14 }}>
                  <span style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    width: 24, 
                    height: 24, 
                    borderRadius: '50%', 
                    background: '#1db954', 
                    marginRight: 12,
                    flexShrink: 0,
                    minWidth: 24,
                    minHeight: 24
                  }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 7.5L6 10.5L11 4.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          {/* How it Works Card */}
          <div style={{ background: '#232323', border: '1px solid #333', borderRadius: 18, padding: '48px 40px', minWidth: 480, maxWidth: 640, flex: 1.2, color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: 24 }}>
            <div style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 8 }}>How it Works</div>
            <div style={{ color: '#ededed', fontSize: '1.08rem', marginBottom: 18 }}>
              Getting started is simple — just click "Get Started" to book your free consultation. We'll discuss your goals, vision, and what you need from your website. If you're happy to move forward, we'll begin the design process. You only pay once you're completely satisfied with the final result. Our all-inclusive package — covering your website, hosting, and ongoing maintenance — is just £49.99 per month with no hidden fees. Need to update photos, reviews, or other content? Just send us the details, and we'll make the changes quickly and hassle-free. And of course, you can cancel anytime.
            </div>
            <div style={{ color: '#bdbdbd', fontSize: '1.02rem', marginBottom: 24 }}>
              Tradespeople earning £500–£1,000 per job only need one new customer from your website to cover the cost. Unlike costly designers charging £5,000+ or DIY sites like Wix costing £119/month, we offer an affordable, hassle-free website built just for you.
            </div>
            {/* Review Box */}
            <div style={{ background: '#191919', borderRadius: 12, padding: '22px 24px', marginTop: 8, width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="#FFD700" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 2 }}>
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <div style={{ color: '#ededed', fontSize: '1.08rem', fontStyle: 'italic', marginBottom: 10 }}>
                "WebStruction delivered a sleek and functional website for me. They listened to my brief and tailor made a site that showcases our work and testimonials. The site was created quickly and to a high standard. Would highly recommend to other construction business owners."
              </div>
              <div style={{ color: '#fff', fontWeight: 600, fontSize: '1.05rem' }}>DKLandscapes</div>
              <div style={{ color: '#bdbdbd', fontSize: '0.98rem' }}>Owner</div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section
        id="faq"
        style={{
          background: '#fafafa',
          width: '100%',
          padding: '80px 0 100px 0',
        }}
      >
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '2.7rem', fontWeight: 700, marginBottom: 12, fontFamily: 'var(--font-inter)', color: '#171717' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: '1.35rem', color: '#7a756c', fontWeight: 400, fontFamily: 'var(--font-inter)', marginBottom: 56 }}>
            Everything you need to know about Webstruction web design agency that helps convert more customers.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 64 }}>
            {/* Column 1 */}
            <div style={{ flex: 1, minWidth: 400, maxWidth: 640 }}>
              {/* Q1 */}
              <div style={{ marginBottom: 44 }}>
                <div style={{ fontWeight: 700, fontSize: '1.6rem', color: '#171717', marginBottom: 10 }}>
                  How quickly can my website be live?
                </div>
                <div style={{ color: '#5d5c59', fontSize: '1.18rem', lineHeight: 1.7 }}>
                  Most Webstruction sites are live within 72 hours of receiving your content and payment. We handle all the setup so you can focus on your business.
                </div>
              </div>
              {/* Q2 */}
              <div style={{ marginBottom: 44 }}>
                <div style={{ fontWeight: 700, fontSize: '1.6rem', color: '#171717', marginBottom: 10 }}>
                  Can I update my website after it’s launched?
                </div>
                <div style={{ color: '#5d5c59', fontSize: '1.18rem', lineHeight: 1.7 }}>
                  Absolutely! Just send us your new photos, reviews, or text, and we’ll update your site for you—no technical skills required.
                </div>
              </div>
              {/* Q3 */}
              <div style={{ marginBottom: 44 }}>
                <div style={{ fontWeight: 700, fontSize: '1.6rem', color: '#171717', marginBottom: 10 }}>
                  Do I need to buy hosting or a domain?
                </div>
                <div style={{ color: '#5d5c59', fontSize: '1.18rem', lineHeight: 1.7 }}>
                  No, hosting is included in your monthly fee. We’ll provide a free domain, or you can use your own if you prefer.
                </div>
              </div>
            </div>
            {/* Column 2 */}
            <div style={{ flex: 1, minWidth: 400, maxWidth: 640 }}>
              {/* Q4 */}
              <div style={{ marginBottom: 44 }}>
                <div style={{ fontWeight: 700, fontSize: '1.6rem', color: '#171717', marginBottom: 10 }}>
                  What if I need help or have questions?
                </div>
                <div style={{ color: '#5d5c59', fontSize: '1.18rem', lineHeight: 1.7 }}>
                  Our support team is available 24/7. Whether you need changes, have questions, or run into issues, we’re always here to help.
                </div>
              </div>
              {/* Q5 */}
              <div style={{ marginBottom: 44 }}>
                <div style={{ fontWeight: 700, fontSize: '1.6rem', color: '#171717', marginBottom: 10 }}>
                  Is there a contract or can I cancel anytime?
                </div>
                <div style={{ color: '#5d5c59', fontSize: '1.18rem', lineHeight: 1.7 }}>
                  There’s no contract—cancel anytime, no questions asked. We believe in earning your business every month.
                </div>
              </div>
              {/* Q6 */}
              <div style={{ marginBottom: 44 }}>
                <div style={{ fontWeight: 700, fontSize: '1.6rem', color: '#171717', marginBottom: 10 }}>
                  How do I get started?
                </div>
                <div style={{ color: '#5d5c59', fontSize: '1.18rem', lineHeight: 1.7 }}>
                  Click “Get Started”, send us your business info, photos, and reviews, and we’ll handle the rest. Your new website will be ready in just a few days.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Divider */}
      <div style={{ width: '100%', height: 1, background: '#ececec', margin: '0 0 0 0' }} />
      {/* Footer Section */}
      <footer style={{ background: '#fafafa', width: '100%', padding: '56px 0 40px 0' }}>
        <div style={{ paddingLeft: 40, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          {/* Logo and Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 24 }}>
            <img src="/logo.png" alt="Webstruction Logo" style={{ width: 44, height: 44, objectFit: 'contain', marginRight: 8 }} />
            <span style={{ fontWeight: 700, fontSize: '1.6rem', color: '#171717', fontFamily: 'var(--font-inter)' }}>Webstruction</span>
          </div>
          <div style={{ display: 'flex', gap: 32, marginBottom: 24 }}>
            <a href="#get-started" style={{ color: '#171717', fontSize: '1.1rem', textDecoration: 'underline', fontFamily: 'var(--font-inter)' }}>Get Started</a>
            <a href="#contact-support" style={{ color: '#171717', fontSize: '1.1rem', textDecoration: 'underline', fontFamily: 'var(--font-inter)' }}>Contact Support</a>
            <a href="#affiliates" style={{ color: '#171717', fontSize: '1.1rem', textDecoration: 'underline', fontFamily: 'var(--font-inter)' }}>Affiliates</a>
          </div>
          <div style={{ color: '#5d5c59', fontSize: '1.18rem', fontFamily: 'var(--font-inter)', marginBottom: 32, maxWidth: 600 }}>
            Get a website, hosting, maintenance and support without lifting a finger.
          </div>
          <div style={{ display: 'flex', gap: 18, marginBottom: 10, flexWrap: 'wrap' }}>
            <a href="#privacy" style={{ color: '#7a756c', fontSize: '1rem', textDecoration: 'underline', fontFamily: 'var(--font-inter)' }}>Privacy policy</a>
            <span style={{ color: '#7a756c' }}>|</span>
            <a href="#terms" style={{ color: '#7a756c', fontSize: '1rem', textDecoration: 'underline', fontFamily: 'var(--font-inter)' }}>Terms and conditions</a>
          </div>
          <div style={{ color: '#7a756c', fontSize: '1rem', fontFamily: 'var(--font-inter)' }}>
            © 2025 Webstruction. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
