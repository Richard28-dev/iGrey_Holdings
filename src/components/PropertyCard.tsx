import React from 'react';
import { Property } from '../data/properties';
import { ArrowUpRight, Bed, Bath, Maximize2, MapPin } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  onSelect: (property: Property) => void;
  layoutVariant?: 'compact' | 'horizontal';
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onSelect,
  layoutVariant = 'compact'
}) => {
  return (
    <div
      onClick={() => onSelect(property)}
      className="property-card"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--color-border-medium)',
        cursor: 'pointer',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: layoutVariant === 'horizontal' ? 'row' : 'column',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        height: '100%',
        boxShadow: '0 8px 24px -10px rgba(20, 22, 26, 0.05)'
      }}
    >
      {/* Image Container with Subtle Cinematic Zoom */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          aspectRatio: layoutVariant === 'horizontal' ? '16/10' : '4/3',
          width: layoutVariant === 'horizontal' ? '45%' : '100%',
          flexShrink: 0,
          backgroundColor: 'var(--bg-secondary)'
        }}
      >
        <img
          src={property.image}
          alt={property.name}
          className="property-img"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 900ms cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />

        {/* Ambient Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(20, 22, 26, 0.35) 0%, transparent 45%)',
            pointerEvents: 'none'
          }}
        />

        {/* Editorial Status Badge */}
        <div
          style={{
            position: 'absolute',
            top: '1.25rem',
            left: '1.25rem',
            backgroundColor: 'rgba(255, 255, 255, 0.94)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(166, 129, 78, 0.35)',
            padding: '0.35rem 0.85rem',
            fontSize: '0.6875rem',
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--color-text-main)',
            boxShadow: '0 4px 12px rgba(20, 22, 26, 0.08)'
          }}
        >
          {property.status}
        </div>

        {/* Floating Dossier Icon */}
        <div
          className="card-quick-view-icon"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '38px',
            height: '38px',
            borderRadius: '2px',
            backgroundColor: 'var(--color-accent-gold)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            transform: 'translateY(-6px)',
            transition: 'all 0.3s ease',
            boxShadow: '0 6px 16px rgba(166, 129, 78, 0.3)'
          }}
        >
          <ArrowUpRight size={18} />
        </div>
      </div>

      {/* Editorial Content Container */}
      <div
        style={{
          padding: 'clamp(1.5rem, 2.5vw, 2rem)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexGrow: 1
        }}
      >
        <div>
          {/* Typographic Classification & Location Line */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.5rem',
              marginBottom: '0.65rem'
            }}
          >
            <span
              style={{
                fontSize: '0.7rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-accent-gold)'
              }}
            >
              {property.type}
            </span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>
              <MapPin size={12} color="var(--color-accent-gold)" />
              <span style={{ letterSpacing: '0.02em', fontWeight: 450 }}>{property.location}</span>
            </div>
          </div>

          {/* Property Name */}
          <h3
            className="property-card-title"
            style={{
              fontSize: 'clamp(1.35rem, 1.8vw, 1.6rem)',
              fontFamily: 'var(--font-serif)',
              fontWeight: 500,
              color: 'var(--color-text-main)',
              marginBottom: '0.85rem',
              lineHeight: 1.22,
              letterSpacing: '-0.015em',
              transition: 'color 0.25s ease'
            }}
          >
            {property.name}
          </h3>

          {/* Editorial Architectural Excerpt */}
          <p
            style={{
              fontSize: '0.875rem',
              lineHeight: 1.65,
              color: 'var(--color-text-body)',
              marginBottom: '1.4rem',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              fontWeight: 350
            }}
          >
            {property.description}
          </p>

          {/* Curated Specifications Row with Architectural Dividers */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              paddingTop: '0.85rem',
              paddingBottom: '1rem',
              borderTop: '1px solid var(--color-border-subtle)',
              fontSize: '0.8125rem',
              color: 'var(--color-text-main)'
            }}
          >
            {property.bedrooms && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Bed size={15} color="var(--color-accent-gold)" />
                <span style={{ fontWeight: 450 }}>{property.bedrooms} Suites</span>
              </div>
            )}
            {property.bathrooms && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Bath size={15} color="var(--color-accent-gold)" />
                <span style={{ fontWeight: 450 }}>{property.bathrooms} Baths</span>
              </div>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Maximize2 size={14} color="var(--color-accent-gold)" />
              <span style={{ fontWeight: 450 }}>{property.sqft.toLocaleString()} sq.ft.</span>
            </div>
          </div>
        </div>

        {/* Footer: Price & View Dossier CTA */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '1.1rem',
            borderTop: '1px solid var(--color-border-subtle)',
            marginTop: '0.25rem'
          }}
        >
          <div>
            <span
              style={{
                display: 'block',
                fontSize: '0.625rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-text-subtle)',
                marginBottom: '0.2rem'
              }}
            >
              Acquisition Value
            </span>
            <span
              style={{
                fontSize: '0.95rem',
                fontFamily: 'var(--font-serif)',
                fontWeight: 600,
                color: 'var(--color-text-main)',
                fontStyle: 'italic'
              }}
            >
              {property.priceDisplay}
            </span>
          </div>

          <span
            className="property-cta-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-accent-gold)',
              transition: 'transform 0.25s ease, color 0.25s ease'
            }}
          >
            <span>View Dossier</span>
            <ArrowUpRight size={14} />
          </span>
        </div>
      </div>

      <style>{`
        .property-card:hover {
          border-color: var(--color-accent-gold);
          transform: translateY(-4px);
          box-shadow: 0 20px 45px -12px rgba(20, 22, 26, 0.12);
        }
        .property-card:hover .property-img {
          transform: scale(1.05);
        }
        .property-card:hover .card-quick-view-icon {
          opacity: 1;
          transform: translateY(0);
        }
        .property-card:hover .property-card-title {
          color: var(--color-accent-gold);
        }
        .property-card:hover .property-cta-btn {
          color: var(--color-accent-gold-dark);
          transform: translateX(3px);
        }
      `}</style>
    </div>
  );
};
