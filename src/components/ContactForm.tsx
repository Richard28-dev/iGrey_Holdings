import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle, Send, ArrowRight } from 'lucide-react';

interface ContactFormProps {
  initialPropertyInterest?: string;
  onClearInitialInterest?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialPropertyInterest,
  onClearInitialInterest
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    propertyInterest: initialPropertyInterest || 'The Grey Residence',
    budget: '₹5 Cr – ₹15 Cr',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialPropertyInterest) {
      setFormData((prev) => ({ ...prev, propertyInterest: initialPropertyInterest }));
    }
  }, [initialPropertyInterest]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your contact number.';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide brief details on your requirements.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API submission latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      propertyInterest: 'Residential Acquisition',
      budget: '₹5 Cr – ₹15 Cr',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
    if (onClearInitialInterest) onClearInitialInterest();
  };

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
      <div className="site-container-wide">
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: '4rem' }}>
          <span className="eyebrow">PRIVATE ADVISORY DESK</span>
          <h2 style={{ lineHeight: 1.15, marginBottom: '1.25rem', color: 'var(--color-text-main)' }}>
            Let's Find the Right Property for You
          </h2>
          <p style={{ color: 'var(--color-text-body)', fontSize: '1.05rem' }}>
            Whether you are considering a prime residence, an off-market penthouse, or seeking institutional advisory, our senior advisors are at your service.
          </p>
        </div>

        {/* Split Grid: Contact Form + Direct Office Particulars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 5rem)',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Interactive Form */}
          <div
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--color-border-medium)',
              padding: 'clamp(2rem, 4vw, 3.25rem)',
              boxShadow: '0 20px 48px -15px rgba(20, 22, 26, 0.08)',
              position: 'relative'
            }}
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ textAlign: 'center', padding: '3rem 1rem' }}
                >
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      border: '1px solid var(--color-accent-gold)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem auto',
                      color: 'var(--color-accent-gold)',
                      backgroundColor: 'var(--bg-secondary)'
                    }}
                  >
                    <CheckCircle size={32} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-text-main)' }}>
                    Enquiry Received
                  </h3>
                  <p style={{ color: 'var(--color-text-body)', fontSize: '1rem', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 2.5rem auto' }}>
                    Thank you, <strong style={{ color: 'var(--color-text-main)' }}>{formData.fullName}</strong>. A dedicated Senior Portfolio Advisor will review your inquiry regarding{' '}
                    <strong style={{ color: 'var(--color-accent-gold-dark)' }}>{formData.propertyInterest}</strong> and reach out via telephone or email within 24 hours.
                  </p>
                  <button onClick={resetForm} className="btn-secondary">
                    <span>Submit Another Enquiry</span>
                    <ArrowRight size={14} />
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-main)', marginBottom: '0.5rem', fontWeight: 600 }}>
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="e.g. Vikramaditya Singhania"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        style={{
                          width: '100%',
                          backgroundColor: 'var(--bg-secondary)',
                          border: errors.fullName ? '1px solid #D32F2F' : '1px solid var(--color-border-medium)',
                          color: 'var(--color-text-main)',
                          padding: '0.9rem 1rem',
                          fontFamily: 'inherit',
                          fontSize: '0.9rem',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                      {errors.fullName && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#D32F2F', fontSize: '0.75rem', marginTop: '0.35rem' }}>
                          <AlertCircle size={12} /> {errors.fullName}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-main)', marginBottom: '0.5rem', fontWeight: 600 }}>
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="e.g. vikram@singhania.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          backgroundColor: 'var(--bg-secondary)',
                          border: errors.email ? '1px solid #D32F2F' : '1px solid var(--color-border-medium)',
                          color: 'var(--color-text-main)',
                          padding: '0.9rem 1rem',
                          fontFamily: 'inherit',
                          fontSize: '0.9rem',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                      {errors.email && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#D32F2F', fontSize: '0.75rem', marginTop: '0.35rem' }}>
                          <AlertCircle size={12} /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-main)', marginBottom: '0.5rem', fontWeight: 600 }}>
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="e.g. +91 98450 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          backgroundColor: 'var(--bg-secondary)',
                          border: errors.phone ? '1px solid #D32F2F' : '1px solid var(--color-border-medium)',
                          color: 'var(--color-text-main)',
                          padding: '0.9rem 1rem',
                          fontFamily: 'inherit',
                          fontSize: '0.9rem',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                      {errors.phone && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#D32F2F', fontSize: '0.75rem', marginTop: '0.35rem' }}>
                          <AlertCircle size={12} /> {errors.phone}
                        </span>
                      )}
                    </div>

                    {/* Property Interest */}
                    <div>
                      <label htmlFor="propertyInterest" style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-main)', marginBottom: '0.5rem', fontWeight: 600 }}>
                        Property / Service Interest
                      </label>
                      <input
                        id="propertyInterest"
                        type="text"
                        placeholder="e.g. The Grey Residence or Commercial Asset"
                        value={formData.propertyInterest}
                        onChange={(e) => setFormData({ ...formData, propertyInterest: e.target.value })}
                        style={{
                          width: '100%',
                          backgroundColor: 'var(--bg-secondary)',
                          border: '1px solid var(--color-border-medium)',
                          color: 'var(--color-text-main)',
                          padding: '0.9rem 1rem',
                          fontFamily: 'inherit',
                          fontSize: '0.9rem',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label htmlFor="budget" style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-main)', marginBottom: '0.5rem', fontWeight: 600 }}>
                      Intended Investment Bracket
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: 'var(--bg-secondary)',
                        border: '1px solid var(--color-border-medium)',
                        color: 'var(--color-text-main)',
                        padding: '0.9rem 1rem',
                        fontFamily: 'inherit',
                        fontSize: '0.9rem',
                        outline: 'none',
                        cursor: 'pointer',
                        boxSizing: 'border-box'
                      }}
                    >
                      <option value="₹3 Cr – ₹6 Cr">₹3 Cr – ₹6 Cr</option>
                      <option value="₹6 Cr – ₹15 Cr">₹6 Cr – ₹15 Cr</option>
                      <option value="₹15 Cr – ₹30 Cr">₹15 Cr – ₹30 Cr</option>
                      <option value="₹30 Cr+ (Trophy / Institutional)">₹30 Cr+ (Trophy / Institutional)</option>
                      <option value="Undisclosed / Private Treaty">Undisclosed / Private Treaty</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: '2rem' }}>
                    <label htmlFor="message" style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-main)', marginBottom: '0.5rem', fontWeight: 600 }}>
                      Message &amp; Spatial Preferences *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Please share specific requirements such as target locations, timelines, or private viewing dates..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: 'var(--bg-secondary)',
                        border: errors.message ? '1px solid #D32F2F' : '1px solid var(--color-border-medium)',
                        color: 'var(--color-text-main)',
                        padding: '0.9rem 1rem',
                        fontFamily: 'inherit',
                        fontSize: '0.9rem',
                        outline: 'none',
                        resize: 'vertical',
                        boxSizing: 'border-box'
                      }}
                    />
                    {errors.message && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#D32F2F', fontSize: '0.75rem', marginTop: '0.35rem' }}>
                        <AlertCircle size={12} /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold"
                    style={{ width: '100%', padding: '1.15rem' }}
                  >
                    {isSubmitting ? (
                      <span>Dispatching Confidential Request...</span>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>

                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textAlign: 'center', marginTop: '1rem' }}>
                    All inquiries are held in strict non-disclosure compliance. No unsolicited communications.
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Corporate Headquarters & Direct Particulars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div>
              <span className="eyebrow">HEADQUARTERS</span>
              <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)', color: 'var(--color-text-main)', marginBottom: '1.25rem' }}>
                The Private Client Desk
              </h3>
              <p style={{ color: 'var(--color-text-body)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                We welcome discerning buyers, property principals, and family office representatives to our headquarters for confidential consultations.
              </p>
            </div>

            {/* Particulars Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', padding: '1.5rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--color-border-medium)', boxShadow: '0 4px 14px rgba(20, 22, 26, 0.03)' }}>
                <div style={{ width: '38px', height: '38px', border: '1px solid var(--color-accent-gold-border)', backgroundColor: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent-gold)', flexShrink: 0 }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.8125rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent-gold-dark)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Office Location
                  </h4>
                  <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.5, margin: 0 }}>
                    The Pavilion, 4th Floor, Vittal Mallya Road<br />
                    Bengaluru, Karnataka 560001, India
                  </p>
                </div>
              </div>

              {/* Direct Phone */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', padding: '1.5rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--color-border-medium)', boxShadow: '0 4px 14px rgba(20, 22, 26, 0.03)' }}>
                <div style={{ width: '38px', height: '38px', border: '1px solid var(--color-accent-gold-border)', backgroundColor: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent-gold)', flexShrink: 0 }}>
                  <Phone size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.8125rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent-gold-dark)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Telephone
                  </h4>
                  <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.5, margin: 0 }}>
                    +91 80 4920 8800 / +91 98450 78200
                  </p>
                </div>
              </div>

              {/* Direct Email */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', padding: '1.5rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--color-border-medium)', boxShadow: '0 4px 14px rgba(20, 22, 26, 0.03)' }}>
                <div style={{ width: '38px', height: '38px', border: '1px solid var(--color-accent-gold-border)', backgroundColor: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent-gold)', flexShrink: 0 }}>
                  <Mail size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.8125rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent-gold-dark)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Direct Electronic Dispatch
                  </h4>
                  <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.5, margin: 0 }}>
                    advisory@igreyholdings.com<br />
                    privateclients@igreyholdings.com
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', padding: '1.5rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--color-border-medium)', boxShadow: '0 4px 14px rgba(20, 22, 26, 0.03)' }}>
                <div style={{ width: '38px', height: '38px', border: '1px solid var(--color-accent-gold-border)', backgroundColor: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent-gold)', flexShrink: 0 }}>
                  <Clock size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.8125rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent-gold-dark)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Hours of Engagement
                  </h4>
                  <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.5, margin: 0 }}>
                    Monday – Saturday: 10:00 – 19:00 IST<br />
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8125rem' }}>Private viewings arranged strictly by prior appointment</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
