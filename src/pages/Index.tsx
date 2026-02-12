
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import StatsSection from '@/components/StatsSection';
import CoursesSection from '@/components/CoursesSection';
import SuccessStories from '@/components/SuccessStories';
import CampusTour from '@/components/CampusTour';
import TestimonialsSection from '@/components/TestimonialsSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import ScrollNavigation from '@/components/ScrollNavigation';
import ChatWidget from '@/components/ChatWidget';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBanner />
      <ScrollNavigation />
      <Navbar />
      <Hero />
      <StatsSection />
      <CoursesSection />
      <SuccessStories />
      <CampusTour />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
      <CallToAction />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
