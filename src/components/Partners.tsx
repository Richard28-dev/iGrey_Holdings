import React from 'react';
import { motion } from 'framer-motion';

// Restrained, editable partner / industry affiliation placeholders
const PARTNER_PLACEHOLDERS = [
  { label: 'RERA Karnataka Registered Entity', sub: 'Regulatory Compliance' },
  { label: 'RICS Professional Affiliation', sub: 'Chartered Valuation Ethics' },
  { label: 'Indian Green Building Council', sub: 'Sustainable Standards' },
  { label: 'Crestline Structural Engineering', sub: 'Technical Due Diligence' },
  { label: 'Atelier Sovereign Architecture', sub: 'Design Collaborative' },
];

export const Partners: React.FC = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--color-border-subtle)' }}>
      <div className="site-container-wide">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            CREDIBILITY &amp; COMPLIANCE
          </span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)', marginBottom: '0.75rem', color: 'var(--color-text-main)' }}>
            Trusted Relationships
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', maxWidth: '540px', margin: '0 auto' }}>
            Collaborating with leading architectural practices, legal counsels, and regulatory bodies to guarantee transaction integrity.
          </p>
        </div>

        {/* Monochrome Affiliations / Partner Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            alignItems: 'center'
          }}
        >
          {PARTNER_PLACEHOLDERS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              style={{
                padding: '1.75rem 1.25rem',
                border: '1px solid var(--color-border-medium)',
                backgroundColor: 'var(--bg-surface)',
                textAlign: 'center',
                transition: 'all var(--transition-fast)',
                boxShadow: '0 4px 14px rgba(20, 22, 26, 0.02)'
              }}
              className="partner-card"
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.05rem',
                  letterSpacing: '0.04em',
                  color: 'var(--color-text-main)',
                  fontWeight: 600,
                  marginBottom: '0.35rem'
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: '0.6875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--color-accent-gold-dark)',
                  fontWeight: 600
                }}
              >
                {item.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clear editable note */}
        <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.6875rem', color: 'var(--color-text-muted)' }}>
          [Editable affiliation placeholders. Real corporate partner logos and RERA registration credentials can be linked here.]
        </div>
      </div>

      <style>{`
        .partner-card:hover {
          border-color: var(--color-accent-gold) !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(20, 22, 26, 0.08) !important;
        }
      `}</style>
    </section>
  );
};
