import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES_DATA } from '../data/services';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesProps {
  onSelectServiceForEnquiry: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForEnquiry }) => {
  const [activeServiceId, setActiveServiceId] = useState(SERVICES_DATA[0].id);

  const activeService = SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];

  return (
    <section id="services" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="site-container-wide">
        {/* Editorial Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: '4rem' }}>
          <span className="eyebrow">OUR EXPERTISE</span>
          <h2 style={{ lineHeight: 1.15, marginBottom: '1.25rem', color: 'var(--color-text-main)' }}>
            Comprehensive Real-Estate Solutions
          </h2>
          <p style={{ color: 'var(--color-text-body)', fontSize: '1.1rem' }}>
            From individual trophy residences to large-scale institutional assets, our multidisciplinary practices combine rigorous legal due diligence, design appreciation, and strategic capital deployment.
          </p>
        </div>

        {/* Visually Varied Editorial Layout (Tabs + Architectural Showcase) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 4vw, 4.5rem)',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Architectural Practice Index */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {SERVICES_DATA.map((service) => {
              const isActive = service.id === activeServiceId;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  style={{
                    padding: '1.75rem 1.5rem',
                    borderTop: '1px solid var(--color-border-medium)',
                    cursor: 'pointer',
                    backgroundColor: isActive ? 'var(--bg-surface)' : 'transparent',
                    borderLeft: isActive ? '3px solid var(--color-accent-gold)' : '3px solid transparent',
                    transition: 'all var(--transition-fast)',
                    boxShadow: isActive ? '0 4px 18px rgba(20, 22, 26, 0.04)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.25rem' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.15rem',
                          color: isActive ? 'var(--color-accent-gold)' : 'var(--color-text-subtle)',
                          fontStyle: 'italic',
                          fontWeight: 600
                        }}
                      >
                        {service.number}
                      </span>
                      <div>
                        <h3
                          style={{
                            fontSize: '1.45rem',
                            fontFamily: 'var(--font-serif)',
                            color: isActive ? 'var(--color-text-main)' : 'var(--color-text-body)',
                            transition: 'color var(--transition-fast)'
                          }}
                        >
                          {service.title}
                        </h3>
                        <p style={{ fontSize: '0.8125rem', color: isActive ? 'var(--color-accent-gold-dark)' : 'var(--color-text-muted)', margin: '0.2rem 0 0 0' }}>
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                    <ArrowRight
                      size={18}
                      color="var(--color-accent-gold)"
                      style={{
                        opacity: isActive ? 1 : 0.3,
                        transform: isActive ? 'translateX(4px)' : 'none',
                        transition: 'all var(--transition-smooth)'
                      }}
                    />
                  </div>
                </div>
              );
            })}
            <div style={{ borderBottom: '1px solid var(--color-border-medium)' }} />
          </div>

          {/* Right Column: Dynamic Deep-Dive Presentation Panel */}
          <div
            style={{
              position: 'sticky',
              top: '110px',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--color-border-medium)',
              overflow: 'hidden',
              boxShadow: '0 20px 48px -15px rgba(20, 22, 26, 0.09)'
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Visual Imagery with Overlay */}
                <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '1.5rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.94)',
                      backdropFilter: 'blur(8px)',
                      padding: '0.5rem 1.25rem',
                      border: '1px solid var(--color-accent-gold-border)',
                      boxShadow: '0 4px 14px rgba(20, 22, 26, 0.08)'
                    }}
                  >
                    <span style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent-gold-dark)', fontWeight: 600 }}>
                      {activeService.highlightStat}
                    </span>
                    <span style={{ fontSize: '0.6875rem', color: 'var(--color-text-main)', marginLeft: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                      {activeService.highlightLabel}
                    </span>
                  </div>
                </div>

                {/* Narrative Details */}
                <div style={{ padding: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <span className="eyebrow" style={{ margin: 0 }}>
                      Practice Focus
                    </span>
                    <span style={{ color: 'var(--color-text-subtle)' }}>•</span>
                    <span style={{ color: 'var(--color-text-main)', fontSize: '0.875rem', fontWeight: 600 }}>
                      {activeService.subtitle}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.85rem', marginBottom: '1rem', color: 'var(--color-text-main)' }}>
                    {activeService.title}
                  </h3>

                  <p style={{ color: 'var(--color-text-body)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                    {activeService.description}
                  </p>

                  {/* Capabilities List */}
                  <div style={{ marginBottom: '2.5rem' }}>
                    <h4 style={{ fontSize: '0.8125rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-accent-gold-dark)', marginBottom: '1rem', fontWeight: 600 }}>
                      Core Practice Capabilities
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
                      {activeService.capabilities.map((cap, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--color-text-body)' }}>
                          <CheckCircle2 size={14} color="var(--color-accent-gold)" style={{ flexShrink: 0 }} />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <button
                    onClick={() => onSelectServiceForEnquiry(activeService.title)}
                    className="btn-gold"
                    style={{ width: '100%', padding: '1rem' }}
                  >
                    <span>Consult Our {activeService.title} Desk</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
