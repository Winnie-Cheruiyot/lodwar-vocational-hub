import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollNavigation from '@/components/ScrollNavigation';
import ContactSection from '@/components/ContactSection';
import FAQSection from '@/components/FAQSection';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const headerRef = useScrollAnimation();
  const sections = ['hero', 'contact', 'faq'];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollNavigation sections={sections} />
      
      {/* Hero Section */}
      <div id="hero" className="bg-primary py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div ref={headerRef} className="scroll-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground text-center">Contact Us</h1>
            <p className="text-lg text-primary-foreground/90 text-center mt-4 max-w-2xl mx-auto">
              We're here to answer your questions and provide information about our programs
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>
      
      {/* FAQ Section */}
      <div id="faq">
        <FAQSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
