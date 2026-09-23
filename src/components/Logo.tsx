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
  const emblemSrc = theme === 'light'
    ? `${import.meta.env.BASE_URL}igrey-emblem-light.png`
    : `${import.meta.env.BASE_URL}igrey-emblem.png`;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
      <img
        src={emblemSrc}
        alt="iGrey Holdings Emblem"
        style={{
          height: `${height}px`,
          width: 'auto',
          display: 'block',
          backgroundColor: 'transparent'
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
