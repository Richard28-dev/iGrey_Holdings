import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface WhyChooseUsProps {
  onEnquire: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onEnquire }) => {
  const pillars = [
    {
      title: 'Institutional Trust',
      text: 'Built on strict fiduciary ethics. We represent buyer and investor interests with absolute discretion and zero third-party commissions.'
    },
    {
      title: 'Architectural Discernment',
      text: 'We assess properties not only through spreadsheets, but through structural durability, material authenticity, and spatial harmony.'
    },
    {
      title: 'Deep Market Knowledge',
      text: 'Decades of micro-market intelligence across prime urban corridors in Bengaluru, ensuring you acquire assets at rational, defensible valuations.'
    },
    {
      title: 'Generational Relationships',
      text: 'Our advisory does not conclude at registration. We oversee portfolio longevity, tenancy transitions, and generational estate succession.'
    }
  ];

  return (
    <section id="why-us" className="section-padding" style={{ backgroundColor: 'var(--bg-surface)', position: 'relative', overflow: 'hidden' }}>
      <div className="site-container-wide">
        {/* Main Brand Statement Banner */}
        <div style={{ marginBottom: '4rem', textAlign: 'center', maxWidth: '880px', margin: '0 auto 4.5rem auto' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            WHY iGREY HOLDINGS
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
              lineHeight: 1.15,
              marginBottom: '1.5rem',
              color: 'var(--color-text-main)'
            }}
          >
            "More than property.{' '}
            <span style={{ color: 'var(--color-accent-gold)', fontStyle: 'italic', display: 'inline-block' }}>
              A better way to move forward."
            </span>
          </h2>
          <p style={{ color: 'var(--color-text-body)', fontSize: '1.1rem', maxWidth: '640px', margin: '0 auto' }}>
            We bridge the gap between architectural ambition and prudent capital allocation, creating enduring value for families and institutions alike.
          </p>
        </div>

        {/* Editorial Split: Monumental Image + 4 Core Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 5rem)',
            alignItems: 'center'
          }}
        >
          {/* Large Architectural Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              aspectRatio: '16/11',
              overflow: 'hidden',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--color-border-medium)',
              boxShadow: '0 20px 48px -10px rgba(20, 22, 26, 0.08)'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85"
              alt="iGrey Holdings Architectural Philosophy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            {/* Architectural overlay quote */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(20, 22, 26, 0.85) 0%, transparent 60%)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '2.5rem'
              }}
            >
              <div>
                <span style={{ fontSize: '0.6875rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-accent-gold-light)', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>
                  The iGrey Standard
                </span>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#FAF9F6', margin: 0, fontStyle: 'italic' }}>
                  Preserving character, verifying title, and elevating the standard of South Indian luxury real estate.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Pillars List */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  style={{
                    paddingBottom: '1.75rem',
                    borderBottom: '1px solid var(--color-border-subtle)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--color-accent-gold)' }} />
                    <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--color-text-main)', margin: 0 }}>
                      {pillar.title}
                    </h3>
                  </div>
                  <p style={{ color: 'var(--color-text-body)', fontSize: '0.9375rem', lineHeight: 1.7, paddingLeft: '1.25rem' }}>
                    {pillar.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <div style={{ marginTop: '2.5rem', paddingLeft: '1.25rem' }}>
              <button onClick={onEnquire} className="btn-primary">
                <span>Begin a Conversation</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
