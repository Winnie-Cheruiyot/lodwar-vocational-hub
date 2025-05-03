
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import CoursesSection from '@/components/CoursesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <StatsSection />
      <CoursesSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
