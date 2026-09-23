import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: '#0B0C0E', borderTop: '1px solid rgba(255, 255, 255, 0.08)', color: '#FAF9F6', position: 'relative' }}>
      <div className="site-container-wide" style={{ paddingTop: 'clamp(4rem, 6vw, 6rem)', paddingBottom: '3rem' }}>
        {/* Main Columns Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            marginBottom: '4.5rem'
          }}
        >
          {/* Brand & Manifesto Column */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <Logo height={32} theme="light" showSubtitle={false} />
            </div>

            <p style={{ color: 'rgba(250, 249, 246, 0.65)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Bespoke real-estate advisory and curated acquisitions. Built around trust, architectural integrity, and generational value preservation.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#C5A880', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              <span>Bengaluru</span>
              <span>•</span>
              <span>Karnataka</span>
              <span>•</span>
              <span>India</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C5A880', marginBottom: '1.5rem', fontWeight: 600 }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem', color: 'rgba(250, 249, 246, 0.7)' }}>
              <li>
                <button onClick={() => scrollToSection('about')} style={{ color: 'inherit', transition: 'color var(--transition-fast)' }} className="footer-link">
                  About iGrey
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('properties')} style={{ color: 'inherit', transition: 'color var(--transition-fast)' }} className="footer-link">
                  Curated Properties
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} style={{ color: 'inherit', transition: 'color var(--transition-fast)' }} className="footer-link">
                  Practice Areas
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('why-us')} style={{ color: 'inherit', transition: 'color var(--transition-fast)' }} className="footer-link">
                  Why iGrey
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('insights')} style={{ color: 'inherit', transition: 'color var(--transition-fast)' }} className="footer-link">
                  Client Perspectives
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} style={{ color: 'inherit', transition: 'color var(--transition-fast)' }} className="footer-link">
                  Private Client Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C5A880', marginBottom: '1.5rem', fontWeight: 600 }}>
              Practices
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem', color: 'rgba(250, 249, 246, 0.7)' }}>
              <li>
                <button onClick={() => scrollToSection('services')} style={{ color: 'inherit' }} className="footer-link">
                  Residential Residences
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} style={{ color: 'inherit' }} className="footer-link">
                  Commercial &amp; Headquarters
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} style={{ color: 'inherit' }} className="footer-link">
                  Strategic Advisory
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} style={{ color: 'inherit' }} className="footer-link">
                  Co-Investment Syndication
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} style={{ color: 'inherit' }} className="footer-link">
                  Asset Stewardship &amp; Management
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} style={{ color: 'inherit' }} className="footer-link">
                  Land Assembly &amp; Development
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Office & Social */}
          <div>
            <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C5A880', marginBottom: '1.5rem', fontWeight: 600 }}>
              Engagement Desk
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem', color: 'rgba(250, 249, 246, 0.7)', marginBottom: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={15} color="#C5A880" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>The Pavilion, 4th Floor, Vittal Mallya Rd, Bengaluru 560001</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={15} color="#C5A880" style={{ flexShrink: 0 }} />
                <span>+91 80 4920 8800</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={15} color="#C5A880" style={{ flexShrink: 0 }} />
                <span>advisory@igreyholdings.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.8125rem' }}>
              <a href="#linkedin" className="footer-link" onClick={(e) => e.preventDefault()}>
                LinkedIn
              </a>
              <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>/</span>
              <a href="#instagram" className="footer-link" onClick={(e) => e.preventDefault()}>
                Instagram
              </a>
              <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>/</span>
              <a href="#facebook" className="footer-link" onClick={(e) => e.preventDefault()}>
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.08)', marginBottom: '2rem' }} />

        {/* Bottom Bar: Copyright & Legal */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            fontSize: '0.75rem',
            color: 'rgba(250, 249, 246, 0.5)'
          }}
        >
          <div>
            &copy; 2026 iGrey Holdings. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ cursor: 'pointer' }} className="footer-link">Privacy Policy</span>
            <span>•</span>
            <span style={{ cursor: 'pointer' }} className="footer-link">Terms &amp; Conditions</span>
            <span>•</span>
            <span style={{ cursor: 'pointer' }} className="footer-link">RERA Regulatory Disclosure</span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#C5A880',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.12em'
            }}
          >
            <span>Top of Page</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-link:hover {
          color: #C5A880 !important;
        }
      `}</style>
    </footer>
  );
};
