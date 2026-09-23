import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsVisible(false);
      onComplete();
      return;
    }

    // Auto complete after 3.2s
    const timer = setTimeout(() => {
      handleComplete();
    }, 3200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleComplete = () => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete();
    }, 600); // allow exit transition to fade smoothly
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: '#F8F6F0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#14161A',
            overflow: 'hidden'
          }}
        >
          {/* Subtle architectural grid lines */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              opacity: 0.35,
              backgroundImage: `linear-gradient(to right, rgba(20,22,26,0.04) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(20,22,26,0.04) 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }}
          />

          {/* Central architectural framing */}
          <div style={{ position: 'relative', width: '380px', height: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Top expanding geometric line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              style={{
                position: 'absolute',
                top: 0,
                width: '100%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, #B89255, transparent)',
                transformOrigin: 'center'
              }}
            />

            {/* Bottom expanding geometric line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, #B89255, transparent)',
                transformOrigin: 'center'
              }}
            />

            {/* Subtle Vertical Accent Lines */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              style={{
                position: 'absolute',
                left: '12px',
                height: '100%',
                width: '1px',
                background: 'rgba(184, 146, 85, 0.25)',
                transformOrigin: 'top'
              }}
            />
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              style={{
                position: 'absolute',
                right: '12px',
                height: '100%',
                width: '1px',
                background: 'rgba(184, 146, 85, 0.25)',
                transformOrigin: 'bottom'
              }}
            />

            {/* Brand Logo & Name Reveal */}
            <div style={{ textAlign: 'center', zIndex: 2, padding: '0 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* 1. Official Logo Emblem Animation */}
              <motion.div
                initial={{ scale: 0.75, opacity: 0, y: -10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}igrey-emblem.jpg`}
                  alt="iGrey Holdings"
                  style={{
                    height: '84px',
                    width: 'auto',
                    mixBlendMode: 'multiply',
                    display: 'block'
                  }}
                />
              </motion.div>

              {/* 2. Official Company Name Reveal */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '2.15rem',
                  fontWeight: 500,
                  letterSpacing: '-0.025em',
                  color: '#14161A',
                  margin: 0,
                  lineHeight: 1.1
                }}
              >
                iGrey Holdings
              </motion.h1>

              {/* 3. Subtitle / Category */}
              <motion.p
                initial={{ opacity: 0, letterSpacing: '0.15em' }}
                animate={{ opacity: 0.85, letterSpacing: '0.28em' }}
                transition={{ duration: 1.0, delay: 0.95 }}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6875rem',
                  textTransform: 'uppercase',
                  color: '#A6814E',
                  marginTop: '0.65rem',
                  margin: '0.65rem 0 0 0',
                  fontWeight: 600
                }}
              >
                Luxury Real Estate
              </motion.p>
            </div>
          </div>

          {/* Skip button for immediate user control */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.4 }}
            onClick={handleComplete}
            style={{
              position: 'absolute',
              bottom: '2.5rem',
              background: 'transparent',
              border: 'none',
              color: '#525661',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              padding: '0.5rem 1rem',
              fontWeight: 600
            }}
          >
            Enter Website &rarr;
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
