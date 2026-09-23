import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenEnquiry: () => void;
}

const NAV_ITEMS = [
  { label: 'Home', href: 'hero' },
  { label: 'About', href: 'about' },
  { label: 'Properties', href: 'properties' },
  { label: 'Services', href: 'services' },
  { label: 'Why iGrey', href: 'why-us' },
  { label: 'Insights', href: 'insights' },
  { label: 'Contact', href: 'contact' },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenEnquiry
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9000,
            backgroundColor: 'rgba(248, 246, 240, 0.98)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2rem 1.5rem',
            overflowY: 'auto'
          }}
        >
          {/* Top Bar inside menu */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Logo height={32} theme="dark" showSubtitle={false} />

            <button
              onClick={onClose}
              aria-label="Close Navigation Menu"
              style={{
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-main)',
                border: '1px solid var(--color-border-medium)',
                backgroundColor: 'var(--bg-surface)'
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Links list */}
          <nav style={{ margin: '2.5rem 0' }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {NAV_ITEMS.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * index, duration: 0.4 }}
                >
                  <button
                    onClick={() => {
                      onNavigate(item.href);
                      onClose();
                    }}
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.75rem',
                      color: 'var(--color-text-main)',
                      textAlign: 'left',
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.25rem 0'
                    }}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={18} color="var(--color-accent-gold)" opacity={0.8} />
                  </button>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Bottom Actions & Details */}
          <div>
            <button
              onClick={() => {
                onOpenEnquiry();
                onClose();
              }}
              className="btn-gold"
              style={{ width: '100%', padding: '1.1rem', marginBottom: '2rem' }}
            >
              Enquire Now
            </button>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={14} color="var(--color-accent-gold)" />
                <span>+91 80 4920 8800</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={14} color="var(--color-accent-gold)" />
                <span>advisory@igreyholdings.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <MapPin size={14} color="var(--color-accent-gold)" />
                <span>Vittal Mallya Road, Bengaluru, Karnataka</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
