
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import ScrollNavigation from '@/components/ScrollNavigation';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { FacilitiesHeader, StudentServicesSection, CampusTourSection } from '@/components/FacilitiesComponents';

const facilitiesData = [
  {
    title: "Workshops & Labs",
    description: "Our modern workshops are equipped with industry-standard tools and machinery for hands-on training.",
    image: "/lovable-uploads/97f3a57c-4bba-4b04-aed1-de37d4360859.png"
  },
  {
    title: "ICT Lab",
    description: "State-of-the-art computer lab with latest software for practical ICT training.",
    image: "/lovable-uploads/e10e5cd4-5f45-4b46-a5da-14f0a6ba0f70.png"
  },
  {
    title: "Culinary Kitchen",
    description: "Professional kitchen facility for Food and Beverage training with modern equipment.",
    image: "/lovable-uploads/f61dbede-d912-49bc-b46e-73e208d64ba9.png"
  },
  {
    title: "Restaurant Training Area",
    description: "Simulated restaurant environment for hospitality training and service practice.",
    image: "/lovable-uploads/772d532c-348e-42c0-8fdc-8d9ab6abd602.png"
  },
  {
    title: "Electrical Workshop",
    description: "Dedicated facility for electrical installation training with safety equipment.",
    image: "/lovable-uploads/32aef7f1-4ac8-4dce-aa48-4b0b91d9dedc.png"
  },
  {
    title: "Library & Resource Center",
    description: "Well-stocked library with technical books, journals and digital resources.",
    image: "/lovable-uploads/81584fa0-77c6-4466-9b59-e5f0fd7439b5.png"
  }
];

const Facilities = () => {
  const sections = ['hero', 'facilities', 'services', 'tour'];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollNavigation sections={sections} />
      
      {/* Hero Section */}
      <div id="hero" className="bg-primary py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="scroll-fade-in visible">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground text-center">Our Facilities</h1>
            <p className="text-lg text-primary-foreground/90 text-center mt-4 max-w-2xl mx-auto">
              Modern training environments equipped with industry-standard tools and technology
            </p>
          </div>
        </div>
      </div>
      
      {/* Facilities Overview */}
      <section id="facilities" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <FacilitiesHeader />
        </div>
      </section>
      
      {/* Student Services */}
      <section id="services" className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <StudentServicesSection />
        </div>
      </section>
      
      {/* Facility Tour */}
      <section id="tour" className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <CampusTourSection />
        </div>
      </section>
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Facilities;
