import React, { useState } from 'react';
import { IntroAnimation } from './components/IntroAnimation';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedProperties } from './components/FeaturedProperties';
import { PropertyModal } from './components/PropertyModal';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { Partners } from './components/Partners';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Property } from './data/properties';

export const App: React.FC = () => {
  const [introCompleted, setIntroCompleted] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [initialPropertyInterest, setInitialPropertyInterest] = useState<string>('');

  const scrollToContact = (interestText?: string) => {
    if (interestText) {
      setInitialPropertyInterest(interestText);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProperties = () => {
    const propEl = document.getElementById('properties');
    if (propEl) {
      propEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root" style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
      {/* 1. Cinematic Intro Animation */}
      {!introCompleted && (
        <IntroAnimation onComplete={() => setIntroCompleted(true)} />
      )}

      {/* 2. Global Navigation */}
      <Navbar onOpenEnquiry={(prop) => scrollToContact(prop || 'General Acquisition Inquiry')} />

      {/* 3. Hero Section */}
      <main>
        <Hero
          onExploreProperties={scrollToProperties}
          onTalkToExpert={() => scrollToContact('Private Advisory Consultation')}
        />

        {/* 4. About Section */}
        <About
          onExplorePortfolio={scrollToProperties}
        />

        {/* 5. Featured Properties Section */}
        <FeaturedProperties
          onSelectProperty={(property) => setSelectedProperty(property)}
          onEnquireNow={(propName) => scrollToContact(propName)}
        />

        {/* 6. Comprehensive Services Section */}
        <Services
          onSelectServiceForEnquiry={(serviceTitle) => scrollToContact(`${serviceTitle} Practice Consultation`)}
        />

        {/* 7. Key Features / What Sets Us Apart */}
        <Features />

        {/* 8. Why Choose Us Section */}
        <WhyChooseUs onEnquire={() => scrollToContact('General Partnership / Advisory')} />

        {/* 9. Client Perspectives / Testimonials */}
        <Testimonials />

        {/* 10. Credibility & Partners */}
        <Partners />

        {/* 11. FAQ Accordion */}
        <FAQ />

        {/* 12. Contact & Advisory Desk */}
        <ContactForm
          initialPropertyInterest={initialPropertyInterest}
          onClearInitialInterest={() => setInitialPropertyInterest('')}
        />
      </main>

      {/* 13. Multi-Column Footer */}
      <Footer />

      {/* 14. Interactive Property Details Modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onEnquire={(propertyName) => scrollToContact(propertyName)}
      />
    </div>
  );
};

export default App;
