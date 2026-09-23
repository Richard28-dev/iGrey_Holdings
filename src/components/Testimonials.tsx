import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS_DATA } from '../data/testimonials';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? TESTIMONIALS_DATA.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === TESTIMONIALS_DATA.length - 1 ? 0 : prevIdx + 1));
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="insights" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="site-container-narrow">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            CLIENT PERSPECTIVES
          </span>
          <h2 style={{ lineHeight: 1.15, marginBottom: '0.75rem', color: 'var(--color-text-main)' }}>
            What Our Clients Say
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
            Experiences from families, investors, and institutions we have had the honor to advise.
          </p>
        </div>

        {/* Editorial Quote Presentation */}
        <div
          style={{
            position: 'relative',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--color-border-medium)',
            padding: 'clamp(2.5rem, 5vw, 4.5rem)',
            minHeight: '340px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 20px 48px -15px rgba(20, 22, 26, 0.08)'
          }}
        >
          {/* Subtle Quote Icon Watermark */}
          <div
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2.5rem',
              opacity: 0.12,
              color: 'var(--color-accent-gold)'
            }}
          >
            <Quote size={56} />
          </div>

          {/* Quote Body with Fade Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <div
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--color-accent-gold-dark)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  fontWeight: 600,
                  marginBottom: '1.25rem'
                }}
              >
                {current.portfolioType}
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.25rem, 2.2vw, 1.85rem)',
                  lineHeight: 1.45,
                  color: 'var(--color-text-main)',
                  fontStyle: 'italic',
                  marginBottom: '2.5rem',
                  fontWeight: 400
                }}
              >
                "{current.quote}"
              </p>

              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '0.2rem' }}>
                  {current.clientName}
                </h4>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                  {current.role} • <span>{current.location}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation Arrows & Indicators */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '3rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--color-border-subtle)'
            }}
          >
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  style={{
                    width: idx === currentIndex ? '32px' : '8px',
                    height: '2px',
                    backgroundColor: idx === currentIndex ? 'var(--color-accent-gold)' : 'var(--color-border-strong)',
                    transition: 'all var(--transition-fast)'
                  }}
                />
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={prev}
                aria-label="Previous Testimonial"
                style={{
                  width: '42px',
                  height: '42px',
                  border: '1px solid var(--color-border-medium)',
                  backgroundColor: 'var(--bg-surface)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-main)',
                  transition: 'all var(--transition-fast)'
                }}
                className="testimonial-nav-btn"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Next Testimonial"
                style={{
                  width: '42px',
                  height: '42px',
                  border: '1px solid var(--color-border-medium)',
                  backgroundColor: 'var(--bg-surface)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-main)',
                  transition: 'all var(--transition-fast)'
                }}
                className="testimonial-nav-btn"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Transparent Placeholder Notice */}
        <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
          [Illustrative client experience scenario. Verifiable client testimonials can be updated upon formal advisory onboarding.]
        </div>
      </div>

      <style>{`
        .testimonial-nav-btn:hover {
          border-color: var(--color-accent-gold) !important;
          color: var(--color-accent-gold-dark) !important;
        }
      `}</style>
    </section>
  );
};
