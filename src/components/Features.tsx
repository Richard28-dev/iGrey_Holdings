import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, FileCheck, Users } from 'lucide-react';

export const Features: React.FC = () => {
  const differentiators = [
    {
      icon: Sparkles,
      number: '01',
      title: 'Curated Properties',
      description: 'We reject over 85% of evaluated inventory. Every listed property undergoes uncompromising architectural appraisal, structural vetting, and legal title scrutiny before presentation.'
    },
    {
      icon: Compass,
      number: '02',
      title: 'Professional Expertise',
      description: 'Senior partners with decades of real-estate advisory experience guide your decisions. We understand zoning, master plan evolutions, and capital asset structuring from the ground up.'
    },
    {
      icon: FileCheck,
      number: '03',
      title: 'Transparent Process',
      description: 'Clear, documented communication with zero hidden transactional layers. We provide honest valuation indices, market comps, and full regulatory transparency at every milestone.'
    },
    {
      icon: Users,
      number: '04',
      title: 'Personalized Assistance',
      description: 'Private client representation configured strictly around your family’s privacy, investment horizon, and spatial requirements. Dedicated single-point advisory desks.'
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
      <div className="site-container-wide">
        {/* Header */}
        <div style={{ maxWidth: '640px', marginBottom: '4rem' }}>
          <span className="eyebrow">DISTINCTION</span>
          <h2 style={{ lineHeight: 1.15, marginBottom: '1rem', color: 'var(--color-text-main)' }}>
            What Sets Us Apart
          </h2>
          <p style={{ color: 'var(--color-text-body)' }}>
            Real estate is an enduring asset class that demands institutional precision, architectural discernment, and genuine client advocacy.
          </p>
        </div>

        {/* Architectural 4-Column Layout with Subtle Dividers */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            borderTop: '1px solid var(--color-border-medium)',
            borderBottom: '1px solid var(--color-border-medium)'
          }}
        >
          {differentiators.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                style={{
                  padding: 'clamp(2rem, 3vw, 3rem) 2rem',
                  borderRight: idx < differentiators.length - 1 ? '1px solid var(--color-border-subtle)' : 'none',
                  backgroundColor: 'transparent',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all var(--transition-fast)'
                }}
                className="feature-col"
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        border: '1px solid var(--color-accent-gold-border)',
                        backgroundColor: 'var(--bg-surface)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-accent-gold)'
                      }}
                    >
                      <IconComponent size={18} />
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.25rem',
                        color: 'var(--color-accent-gold)',
                        fontStyle: 'italic',
                        opacity: 0.7
                      }}
                    >
                      {item.number}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.45rem',
                      color: 'var(--color-text-main)',
                      marginBottom: '1rem',
                      lineHeight: 1.25
                    }}
                  >
                    {item.title}
                  </h3>

                  <p style={{ color: 'var(--color-text-body)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .feature-col:hover {
          background-color: var(--bg-surface) !important;
          box-shadow: 0 10px 30px rgba(20, 22, 26, 0.05);
        }
      `}</style>
    </section>
  );
};
