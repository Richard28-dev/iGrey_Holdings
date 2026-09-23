import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS_DATA } from '../data/faqs';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS_DATA[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="site-container-narrow">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            FREQUENT INQUIRIES
          </span>
          <h2 style={{ lineHeight: 1.15, marginBottom: '0.75rem', color: 'var(--color-text-main)' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
            Clear answers regarding our acquisition procedures, advisory services, and private viewings.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ borderTop: '1px solid var(--color-border-medium)' }}>
          {FAQS_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                style={{
                  borderBottom: '1px solid var(--color-border-subtle)',
                  transition: 'background-color var(--transition-fast)'
                }}
              >
                <button
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '1.75rem 0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    gap: '1.5rem',
                    color: 'var(--color-text-main)'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.15rem, 1.5vw, 1.4rem)',
                      color: isOpen ? 'var(--color-accent-gold-dark)' : 'var(--color-text-main)',
                      transition: 'color var(--transition-fast)',
                      lineHeight: 1.3
                    }}
                  >
                    {item.question}
                  </span>

                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      border: '1px solid var(--color-border-medium)',
                      backgroundColor: 'var(--bg-surface)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isOpen ? 'var(--color-accent-gold-dark)' : 'var(--color-text-main)',
                      borderColor: isOpen ? 'var(--color-accent-gold)' : 'var(--color-border-medium)',
                      flexShrink: 0,
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div
                        style={{
                          paddingBottom: '1.75rem',
                          paddingLeft: '0.5rem',
                          paddingRight: '1rem',
                          color: 'var(--color-text-body)',
                          fontSize: '0.95rem',
                          lineHeight: 1.75
                        }}
                      >
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
