
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import ScrollNavigation from '@/components/ScrollNavigation';

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
      <div id="hero" className="bg-lvtc-forest-green py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">Our Facilities</h1>
          <p className="text-lg text-white/90 text-center mt-4 max-w-2xl mx-auto">
            Modern training environments equipped with industry-standard tools and technology
          </p>
        </div>
      </div>
      
      {/* Facilities Overview */}
      <section id="facilities" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lvtc-forest-green mb-4">Training Facilities</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our campus features specialized workshops and labs designed to provide practical, hands-on learning experiences that prepare students for the workplace.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilitiesData.map((facility, index) => (
              <div key={index} className="bg-lvtc-off-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-lvtc-forest-green mb-2">{facility.title}</h3>
                  <p className="text-gray-700">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Student Services */}
      <section id="services" className="py-16 bg-lvtc-off-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lvtc-forest-green mb-4">Student Services</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We provide comprehensive support services to ensure our students' success and wellbeing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Student Accommodation",
                description: "Limited on-campus hostels are available for students, with clean and comfortable living spaces. Priority is given to students from distant locations."
              },
              {
                title: "Career Guidance",
                description: "Our dedicated career counselors help students plan their career paths, prepare for job interviews, and connect with potential employers."
              },
              {
                title: "Library Services",
                description: "Access to textbooks, reference materials, digital resources, and study spaces to support academic research and learning."
              },
              {
                title: "Student Welfare",
                description: "Support services including health assistance, counseling, and financial aid guidance to ensure student wellbeing."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-lvtc-forest-green border-b border-lvtc-pale-green pb-2 mb-4">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Facility Tour */}
      <section id="tour" className="py-16 bg-lvtc-forest-green">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Schedule a Campus Tour</h2>
            <p className="max-w-2xl mx-auto opacity-90">
              Visit our campus to see our facilities in person. Our staff will be happy to show you around and answer any questions you may have about our programs.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold text-lvtc-forest-green mb-4">Request a Tour</h3>
              </div>
              
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lvtc-forest-green"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lvtc-forest-green"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lvtc-forest-green"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="date" className="block text-gray-700 mb-1">Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lvtc-forest-green"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="program" className="block text-gray-700 mb-1">Program of Interest</label>
                <select
                  id="program"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lvtc-forest-green"
                >
                  <option value="">Select a program</option>
                  <option value="motor-vehicle">Motor Vehicle Mechanics</option>
                  <option value="electrical">Electrical Installation</option>
                  <option value="plumbing">Plumbing Technology</option>
                  <option value="ict">Information Communication Technology</option>
                  <option value="food">Food and Beverage Processing</option>
                  <option value="hairdressing">Hairdressing and Beauty Therapy</option>
                  <option value="fashion">Fashion Design and Garment Making</option>
                  <option value="masonry">Masonry and Building Technology</option>
                  <option value="welding">Arc Welding</option>
                  <option value="carpentry">Carpentry and Joinery</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-gray-700 mb-1">Additional Information</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lvtc-forest-green"
                ></textarea>
              </div>
              
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="bg-lvtc-forest-green hover:bg-lvtc-light-green text-white py-2 px-6 rounded-md font-medium transition-colors"
                >
                  Schedule Tour
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Facilities;
