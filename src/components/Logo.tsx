import React from 'react';

interface LogoProps {
  height?: number;
  theme?: 'dark' | 'light';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  height = 40,
  theme = 'dark',
  showSubtitle = true
}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
      <img
        src={`${import.meta.env.BASE_URL}igrey-emblem.jpg`}
        alt="iGrey Holdings Emblem"
        style={{
          height: `${height}px`,
          width: 'auto',
          mixBlendMode: theme === 'light' ? 'screen' : 'multiply',
          filter: theme === 'light' ? 'invert(1) brightness(1.2)' : 'none',
          display: 'block'
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: `${Math.max(16, height * 0.48)}px`,
            fontWeight: 500,
            letterSpacing: '-0.02em',
            color: theme === 'light' ? '#FFFFFF' : 'var(--color-text-main)',
            lineHeight: 1.1
          }}
        >
          iGrey Holdings
        </span>
        {showSubtitle && (
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.625rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--color-accent-gold)',
              marginTop: '2px',
              fontWeight: 600
            }}
          >
            Luxury Real Estate
          </span>
        )}
      </div>
    </div>
  );
};
