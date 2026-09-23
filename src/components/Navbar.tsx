import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenEnquiry: (propertyTitle?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check active section
      const sections = ['hero', 'about', 'properties', 'services', 'why-us', 'insights', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Properties', id: 'properties' },
    { label: 'Services', id: 'services' },
    { label: 'Why iGrey', id: 'why-us' },
    { label: 'Insights', id: 'insights' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 8000,
          transition: 'all 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: isScrolled ? 'rgba(248, 246, 240, 0.95)' : 'rgba(248, 246, 240, 0.65)',
          backdropFilter: 'blur(16px)',
          borderBottom: isScrolled ? '1px solid var(--color-border-subtle)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 10px 30px -10px rgba(20, 22, 26, 0.08)' : 'none',
          height: isScrolled ? 'var(--nav-height-compact)' : 'var(--nav-height)'
        }}
      >
        <div
          className="site-container-wide"
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Brand Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            style={{
              display: 'flex',
              alignItems: 'center',
              textAlign: 'left',
              padding: 0
            }}
            aria-label="iGrey Holdings Home"
          >
            <Logo height={34} theme="dark" showSubtitle={true} />
          </button>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none'
            }}
            className="desktop-nav"
          >
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '2rem'
              }}
            >
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8125rem',
                      fontWeight: 500,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: activeSection === link.id ? 'var(--color-accent-gold-dark)' : 'var(--color-text-main)',
                      padding: '0.4rem 0',
                      position: 'relative',
                      transition: 'color var(--transition-fast)'
                    }}
                  >
                    {link.label}
                    {activeSection === link.id && (
                      <span
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: '100%',
                          height: '2px',
                          backgroundColor: 'var(--color-accent-gold)'
                        }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Action Area */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <button
              onClick={() => onOpenEnquiry()}
              className="btn-gold nav-cta"
              style={{
                padding: '0.75rem 1.6rem',
                fontSize: '0.75rem'
              }}
            >
              Enquire Now
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
              className="mobile-nav-toggle"
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-main)',
                border: '1px solid var(--color-border-medium)',
                backgroundColor: 'var(--bg-surface)'
              }}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Responsive media query styling */}
      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: block !important;
          }
          .mobile-nav-toggle {
            display: none !important;
          }
        }
        @media (max-width: 1023px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: flex !important;
          }
          .nav-cta {
            display: none !important;
          }
        }
      `}</style>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onNavigate={scrollToSection}
        onOpenEnquiry={onOpenEnquiry}
      />
    </>
  );
};
