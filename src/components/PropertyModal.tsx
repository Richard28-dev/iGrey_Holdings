import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Property } from '../data/properties';
import { X, Bed, Bath, Maximize2, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
  onEnquire: (propertyName: string) => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({
  property,
  onClose,
  onEnquire
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (property) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [property, onClose]);

  if (!property) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9500,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(1rem, 3vw, 2.5rem)',
          backgroundColor: 'rgba(20, 22, 26, 0.65)',
          backdropFilter: 'blur(12px)'
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--color-border-medium)',
            maxWidth: '1100px',
            width: '100%',
            maxHeight: '92vh',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            boxShadow: '0 30px 70px -15px rgba(20, 22, 26, 0.25)',
            position: 'relative'
          }}
        >
          {/* Top Close Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1.25rem 2rem',
              borderBottom: '1px solid var(--color-border-subtle)',
              backgroundColor: 'var(--bg-secondary)',
              position: 'sticky',
              top: 0,
              zIndex: 10
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="eyebrow" style={{ margin: 0 }}>
                {property.type}
              </span>
              <span style={{ color: 'var(--color-text-subtle)' }}>•</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-text-body)', fontSize: '0.8125rem' }}>
                <MapPin size={14} color="var(--color-accent-gold)" />
                <span>{property.location}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close Property Dialog"
              style={{
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-main)',
                border: '1px solid var(--color-border-medium)',
                backgroundColor: 'var(--bg-surface)'
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Body */}
          <div style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            {/* Gallery Section */}
            <div style={{ marginBottom: '2.5rem' }}>
              {/* Main Image View */}
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '16/9',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bg-secondary)',
                  marginBottom: '1rem',
                  border: '1px solid var(--color-border-subtle)'
                }}
              >
                <img
                  src={property.gallery[activeImageIndex] || property.image}
                  alt={property.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.35rem 0.75rem',
                    fontSize: '0.75rem',
                    color: 'var(--color-text-main)',
                    fontWeight: 600,
                    border: '1px solid var(--color-border-subtle)',
                    boxShadow: '0 4px 10px rgba(20, 22, 26, 0.08)'
                  }}
                >
                  {activeImageIndex + 1} / {property.gallery.length}
                </div>
              </div>

              {/* Thumbnails row */}
              {property.gallery.length > 1 && (
                <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                  {property.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      style={{
                        width: '100px',
                        height: '65px',
                        flexShrink: 0,
                        border: activeImageIndex === idx ? '2px solid var(--color-accent-gold)' : '1px solid var(--color-border-medium)',
                        opacity: activeImageIndex === idx ? 1 : 0.65,
                        overflow: 'hidden',
                        padding: 0,
                        transition: 'opacity var(--transition-fast)'
                      }}
                    >
                      <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Split Content: Overview & Specs */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2.5rem',
                borderBottom: '1px solid var(--color-border-subtle)',
                paddingBottom: '2.5rem',
                marginBottom: '2rem'
              }}
            >
              {/* Left Column: Title & Narrative */}
              <div>
                <h2 style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)', marginBottom: '1rem', lineHeight: 1.15, color: 'var(--color-text-main)' }}>
                  {property.name}
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--color-text-body)', marginBottom: '1.75rem' }}>
                  {property.description}
                </p>

                <h4 style={{ fontSize: '1rem', color: 'var(--color-accent-gold)', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
                  Architectural Highlights
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {property.architecturalHighlights.map((highlight, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--color-text-body)' }}>
                      <CheckCircle size={15} color="var(--color-accent-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Key Details, Amenities & Action */}
              <div
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  padding: '1.75rem',
                  border: '1px solid var(--color-border-medium)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                    Investment Guidance
                  </span>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: 'var(--color-text-main)', marginBottom: '1.5rem', marginTop: '0.2rem', fontWeight: 600 }}>
                    {property.priceDisplay}
                  </div>

                  {/* Specifications Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.75rem' }}>
                    {property.bedrooms && (
                      <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--color-border-subtle)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-accent-gold)', fontSize: '0.75rem', marginBottom: '0.2rem' }}>
                          <Bed size={14} /> Bedrooms
                        </div>
                        <div style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--color-text-main)' }}>{property.bedrooms} En-Suite</div>
                      </div>
                    )}
                    {property.bathrooms && (
                      <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--color-border-subtle)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-accent-gold)', fontSize: '0.75rem', marginBottom: '0.2rem' }}>
                          <Bath size={14} /> Bathrooms
                        </div>
                        <div style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--color-text-main)' }}>{property.bathrooms} Luxury</div>
                      </div>
                    )}
                    <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--color-border-subtle)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-accent-gold)', fontSize: '0.75rem', marginBottom: '0.2rem' }}>
                        <Maximize2 size={14} /> Built-Up Area
                      </div>
                      <div style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--color-text-main)' }}>{property.sqft.toLocaleString()} sq.ft.</div>
                    </div>
                    <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--color-border-subtle)' }}>
                      <div style={{ color: 'var(--color-accent-gold)', fontSize: '0.75rem', marginBottom: '0.2rem' }}>Status</div>
                      <div style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--color-text-main)' }}>{property.status}</div>
                    </div>
                  </div>

                  {/* Amenities Badges */}
                  <div style={{ marginBottom: '2rem' }}>
                    <span style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-muted)', display: 'block', marginBottom: '0.6rem' }}>
                      Features & Amenities
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {property.features.map((feat, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontSize: '0.75rem',
                            padding: '0.3rem 0.6rem',
                            backgroundColor: 'var(--bg-surface)',
                            border: '1px solid var(--color-border-medium)',
                            color: 'var(--color-text-body)'
                          }}
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Primary Enquiry CTA for this property */}
                <button
                  onClick={() => {
                    onEnquire(property.name);
                    onClose();
                  }}
                  className="btn-gold"
                  style={{ width: '100%', padding: '1.1rem' }}
                >
                  <span>Enquire About This Property</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Disclaimer notice */}
            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Note: Technical specifications, floor plates and availability are indicative sample data for illustration and subject to private verification during formal acquisition advisory.
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
