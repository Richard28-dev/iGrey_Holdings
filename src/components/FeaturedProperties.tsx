import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROPERTIES_DATA, Property } from '../data/properties';
import { PropertyCard } from './PropertyCard';
import { ArrowUpRight, Bed, Bath, Maximize2, MapPin, SlidersHorizontal } from 'lucide-react';

interface FeaturedPropertiesProps {
  onSelectProperty: (property: Property) => void;
  onEnquireNow: (propertyName?: string) => void;
}

type FilterCategory = 'all' | 'residence' | 'penthouse' | 'commercial' | 'estate';

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  onSelectProperty,
  onEnquireNow
}) => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');

  const filteredProperties = PROPERTIES_DATA.filter((prop) => {
    if (activeCategory === 'all') return true;
    return prop.category === activeCategory;
  });

  const flagshipProperty = PROPERTIES_DATA.find((p) => p.isFlagship) || PROPERTIES_DATA[0];
  const supportingProperties = filteredProperties.filter((p) => p.id !== flagshipProperty.id);

  const categories: { label: string; value: FilterCategory }[] = [
    { label: 'All Portfolios', value: 'all' },
    { label: 'Residences', value: 'residence' },
    { label: 'Sky Penthouses', value: 'penthouse' },
    { label: 'Commercial Assets', value: 'commercial' },
    { label: 'Private Estates', value: 'estate' },
  ];

  return (
    <section id="properties" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
      <div className="site-container-wide">
        {/* Editorial Section Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '2.5rem',
            marginBottom: '4rem'
          }}
        >
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem' }}>
              <div style={{ width: '28px', height: '1.5px', backgroundColor: 'var(--color-accent-gold)' }} />
              <span className="eyebrow" style={{ margin: 0 }}>CURATED PORTFOLIO</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
                lineHeight: 1.15,
                marginBottom: '1rem',
                color: 'var(--color-text-main)',
                letterSpacing: '-0.02em'
              }}
            >
              Architectural Distinction. <br />
              <span style={{ color: 'var(--color-accent-gold)', fontStyle: 'italic', fontWeight: 400 }}>
                Curated Acquisitions.
              </span>
            </h2>
            <p
              style={{
                maxWidth: '620px',
                color: 'var(--color-text-body)',
                fontSize: '1.05rem',
                lineHeight: 1.7,
                fontWeight: 350
              }}
            >
              An exclusive portfolio of architecturally vetted residences, skyline penthouses, and private estates selected for enduring capital value and design permanence.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              alignItems: 'center',
              backgroundColor: 'var(--bg-surface)',
              padding: '0.4rem',
              border: '1px solid var(--color-border-medium)',
              boxShadow: '0 8px 24px -10px rgba(20, 22, 26, 0.06)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0 0.85rem', color: 'var(--color-accent-gold)', fontSize: '0.75rem' }}>
              <SlidersHorizontal size={13} />
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>Filter:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                style={{
                  padding: '0.55rem 1.25rem',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: activeCategory === cat.value ? '#FFFFFF' : 'var(--color-text-body)',
                  backgroundColor: activeCategory === cat.value ? 'var(--color-accent-gold)' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FLAGSHIP SHOWCASE */}
        {(activeCategory === 'all' || activeCategory === 'residence') && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onClick={() => onSelectProperty(flagshipProperty)}
            className="flagship-card"
            style={{
              marginBottom: '4rem',
              position: 'relative',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--color-border-medium)',
              overflow: 'hidden',
              cursor: 'pointer',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              boxShadow: '0 16px 45px -12px rgba(20, 22, 26, 0.08)',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* Left/Top: Monumental Visual */}
            <div
              style={{
                position: 'relative',
                minHeight: '460px',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-secondary)'
              }}
            >
              <img
                src={flagshipProperty.image}
                alt={flagshipProperty.name}
                className="flagship-img"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 1000ms cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  left: '1.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.94)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(166, 129, 78, 0.35)',
                  padding: '0.45rem 1.1rem',
                  fontSize: '0.6875rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent-gold-dark)',
                  boxShadow: '0 4px 14px rgba(20, 22, 26, 0.08)'
                }}
              >
                Flagship Acquisition
              </div>
            </div>

            {/* Right/Bottom: Flagship Editorial Details */}
            <div
              style={{
                padding: 'clamp(2.25rem, 4vw, 3.75rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent-gold)', fontSize: '0.75rem', marginBottom: '0.75rem' }}>
                  <MapPin size={13} />
                  <span style={{ letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
                    {flagshipProperty.location}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2.1rem, 3.2vw, 2.9rem)',
                    lineHeight: 1.15,
                    color: 'var(--color-text-main)',
                    letterSpacing: '-0.02em',
                    marginBottom: '1.25rem'
                  }}
                >
                  {flagshipProperty.name}
                </h3>

                <p style={{ color: 'var(--color-text-body)', fontSize: '1.02rem', lineHeight: 1.75, marginBottom: '2rem', fontWeight: 350 }}>
                  {flagshipProperty.description}
                </p>

                {/* Flagship Specs */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    padding: '1.25rem 0',
                    borderTop: '1px solid var(--color-border-subtle)',
                    borderBottom: '1px solid var(--color-border-subtle)',
                    marginBottom: '2rem'
                  }}
                >
                  {flagshipProperty.bedrooms && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Bed size={16} color="var(--color-accent-gold)" />
                      <span style={{ fontSize: '0.875rem', color: 'var(--color-text-main)', fontWeight: 500 }}>{flagshipProperty.bedrooms} Suites</span>
                    </div>
                  )}
                  {flagshipProperty.bathrooms && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Bath size={16} color="var(--color-accent-gold)" />
                      <span style={{ fontSize: '0.875rem', color: 'var(--color-text-main)', fontWeight: 500 }}>{flagshipProperty.bathrooms} Baths</span>
                    </div>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Maximize2 size={16} color="var(--color-accent-gold)" />
                    <span style={{ fontSize: '0.875rem', color: 'var(--color-text-main)', fontWeight: 500 }}>{flagshipProperty.sqft.toLocaleString()} sq.ft.</span>
                  </div>
                </div>
              </div>

              {/* Price & Actions */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1.5rem',
                  paddingTop: '0.5rem'
                }}
              >
                <div>
                  <span style={{ display: 'block', fontSize: '0.6875rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-text-subtle)', marginBottom: '0.2rem' }}>
                    Acquisition Guidance
                  </span>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-text-main)', fontWeight: 600, fontStyle: 'italic' }}>
                    {flagshipProperty.priceDisplay}
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onEnquireNow(flagshipProperty.name);
                    }}
                    className="btn-primary"
                    style={{ padding: '0.85rem 1.6rem', fontSize: '0.8rem' }}
                  >
                    Request Viewing
                  </button>
                  <span
                    className="btn-link"
                    style={{ fontSize: '0.78rem' }}
                  >
                    <span>View Dossier</span>
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </div>

            <style>{`
              .flagship-card:hover {
                border-color: var(--color-accent-gold) !important;
                box-shadow: 0 24px 55px -15px rgba(20, 22, 26, 0.14) !important;
              }
              .flagship-card:hover .flagship-img {
                transform: scale(1.03);
              }
            `}</style>
          </motion.div>
        )}

        {/* SUPPORTING PROPERTIES GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {supportingProperties.map((prop) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <PropertyCard property={prop} onSelect={onSelectProperty} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
