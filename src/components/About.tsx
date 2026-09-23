import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Handshake, KeyRound, Building2, MessagesSquare } from 'lucide-react';

interface AboutProps {
  onLearnMore?: () => void;
  onExplorePortfolio?: () => void;
  onTalkToExpert?: () => void;
}

const PILLARS_OPTION_2 = [
  {
    icon: Handshake,
    title: 'Trust',
    subtitle: 'Ethical Advisory'
  },
  {
    icon: KeyRound,
    title: 'Transparency',
    subtitle: 'Clear Transactions'
  },
  {
    icon: Building2,
    title: 'Quality',
    subtitle: 'Architectural Excellence'
  },
  {
    icon: MessagesSquare,
    title: 'Personalized Service',
    subtitle: 'Bespoke Solutions'
  }
];

export const About: React.FC<AboutProps> = ({ onExplorePortfolio }) => {
  return (
    <section
      id="about"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        padding: 'clamp(4.5rem, 8vw, 7.5rem) 0',
        position: 'relative'
      }}
    >
      <div className="site-container-wide">
        {/* Option 2: Floating Luxury Card & Architectural Gallery Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: 'clamp(2rem, 4vw, 4rem)',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Architectural Villa Visual */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: '100%' }}
          >
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '14px',
                aspectRatio: '1 / 1',
                maxHeight: '620px',
                boxShadow: '0 25px 55px -15px rgba(20, 22, 26, 0.14)',
                border: '1px solid rgba(20, 22, 26, 0.08)'
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}about-estate-1.jpg`}
                alt="iGrey Holdings Luxury Architecture"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />

              {/* Architectural Ambient Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(20, 22, 26, 0.22) 0%, transparent 40%)',
                  pointerEvents: 'none'
                }}
              />
            </div>
          </motion.div>

          {/* Right Column: Floating Crisp Luxury Card */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: 'clamp(2rem, 3.8vw, 3.25rem)',
              boxShadow: '0 24px 60px -15px rgba(20, 22, 26, 0.08), 0 0 0 1px rgba(20, 22, 26, 0.04)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Eyebrow */}
            <div style={{ marginBottom: '0.85rem' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent-gold)',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)'
                }}
              >
                ABOUT IGREY HOLDINGS
              </span>
            </div>

            {/* Headline */}
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                lineHeight: 1.15,
                color: 'var(--color-text-main)',
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem',
                fontWeight: 600
              }}
            >
              Built on Trust. Driven by Value.
            </h2>

            {/* Paragraph 1 */}
            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--color-text-main)',
                marginBottom: '1rem',
                fontWeight: 400
              }}
            >
              iGrey Holdings is a modern real-estate company dedicated to connecting people with quality properties and meaningful opportunities.
            </p>

            {/* Paragraph 2 */}
            <p
              style={{
                fontSize: '0.925rem',
                lineHeight: 1.65,
                color: 'var(--color-text-body)',
                marginBottom: '2rem',
                fontWeight: 350
              }}
            >
              With a focus on trust, transparency, quality, and personalized service, we make the property journey simpler, clearer, and more confident.
            </p>

            {/* 4 Feature Cards in a Clean 4-Column Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
                gap: '0.75rem',
                marginBottom: '2.25rem'
              }}
            >
              {PILLARS_OPTION_2.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#F8F6F0',
                      border: '1px solid rgba(20, 22, 26, 0.05)',
                      borderRadius: '10px',
                      padding: '1.1rem 0.65rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      gap: '0.5rem',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 8px rgba(20, 22, 26, 0.04)'
                      }}
                    >
                      <Icon size={18} color="var(--color-accent-gold)" />
                    </div>
                    <span
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: 'var(--color-text-main)',
                        lineHeight: 1.2
                      }}
                    >
                      {pillar.title}
                    </span>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        color: 'var(--color-text-muted)',
                        lineHeight: 1.3
                      }}
                    >
                      {pillar.subtitle}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Italic Serif Quote */}
            <div style={{ marginBottom: '2rem' }}>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.15rem, 1.5vw, 1.35rem)',
                  fontStyle: 'italic',
                  color: 'var(--color-text-main)',
                  lineHeight: 1.4,
                  margin: 0
                }}
              >
                “More than property. A better way to move forward.”
              </p>
            </div>

            {/* Gold Action Button */}
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              {onExplorePortfolio && (
                <button
                  onClick={onExplorePortfolio}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    backgroundColor: 'var(--color-accent-gold)',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.9rem 1.85rem',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                    cursor: 'pointer',
                    boxShadow: '0 8px 20px -4px rgba(166, 129, 78, 0.35)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-accent-gold-dark)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-accent-gold)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span>Explore Properties</span>
                  <ArrowUpRight size={16} />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
