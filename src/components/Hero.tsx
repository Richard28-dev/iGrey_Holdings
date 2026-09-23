import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreProperties: () => void;
  onTalkToExpert: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProperties, onTalkToExpert }) => {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: 'var(--nav-height)',
        paddingBottom: '4rem',
        backgroundColor: 'var(--bg-primary)'
      }}
    >
      {/* Background Architectural Visual with Cinematic Slow Zoom */}
      <motion.div
        initial={{ scale: 1.06, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 0.88 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=88')`,
          backgroundPosition: 'right 35%',
          backgroundSize: 'cover',
          pointerEvents: 'none'
        }}
      />

      {/* Editorial Warm Ivory Gradient Overlays for High-Contrast Readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(to right, rgba(248, 246, 240, 0.97) 0%, rgba(248, 246, 240, 0.88) 50%, rgba(248, 246, 240, 0.42) 100%),
                       linear-gradient(to top, rgba(248, 246, 240, 0.95) 0%, transparent 40%)`,
          pointerEvents: 'none'
        }}
      />

      {/* Subtle Architectural Grid Lines */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '12%',
          width: '1px',
          height: '100%',
          background: 'rgba(20, 22, 26, 0.05)',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: '12%',
          width: '1px',
          height: '100%',
          background: 'rgba(20, 22, 26, 0.05)',
          pointerEvents: 'none'
        }}
      />

      <div className="site-container-wide" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div style={{ maxWidth: '920px' }}>
          {/* 1. Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow">iGREY HOLDINGS</span>
          </motion.div>

          {/* 2. Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-text-main)',
              lineHeight: 1.08,
              marginBottom: '1.75rem',
              letterSpacing: '-0.025em'
            }}
          >
            Redefining the Way You Experience Real Estate
          </motion.h1>

          {/* 3. Supporting Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(1.05rem, 1.1vw + 0.5rem, 1.35rem)',
              color: 'var(--color-text-body)',
              maxWidth: '680px',
              lineHeight: 1.6,
              marginBottom: '2.5rem',
              fontWeight: 350
            }}
          >
            Thoughtfully selected properties and professional real-estate solutions designed around quality, trust and long-term value.
          </motion.p>

          {/* 4. CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.25rem',
              alignItems: 'center'
            }}
          >
            <button onClick={onExploreProperties} className="btn-primary">
              <span>Explore Properties</span>
              <ArrowRight size={16} />
            </button>
            <button onClick={onTalkToExpert} className="btn-secondary">
              <span>Talk to an Expert</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
