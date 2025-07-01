
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { Hammer, Clock, Award, Users } from 'lucide-react';

const CarpentryAndJoinery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-lvtc-forest-green py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">Carpentry and Joinery</h1>
          <p className="text-lg text-white/90 text-center mt-4 max-w-2xl mx-auto">
            Learn woodworking techniques, furniture making, and modern carpentry skills
          </p>
        </div>
      </div>
      
      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-lvtc-forest-green mb-6">Course Overview</h2>
              <p className="text-gray-700 mb-6">
                Our Carpentry and Joinery program teaches traditional woodworking techniques combined 
                with modern carpentry methods. Students learn furniture making, cabinet construction, 
                and finishing techniques using both hand tools and modern machinery.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-lvtc-forest-green mr-2" />
                  <span>2 Years Duration</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-lvtc-forest-green mr-2" />
                  <span>Certificate/Diploma</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-lvtc-forest-green mr-2" />
                  <span>Practical Training</span>
                </div>
                <div className="flex items-center">
                  <Hammer className="h-5 w-5 text-lvtc-forest-green mr-2" />
                  <span>Modern Workshop</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/lovable-uploads/d88dadf4-397f-40f7-8877-45a917f1905a.png" 
                alt="Carpentry Workshop"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Workshop Gallery */}
      <section className="py-16 bg-lvtc-off-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-lvtc-forest-green text-center mb-12">Our Carpentry Workshop</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/d88dadf4-397f-40f7-8877-45a917f1905a.png" 
                alt="Modern Woodworking Equipment"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lvtc-forest-green mb-2">Modern Equipment</h3>
                <p className="text-gray-600 text-sm">State-of-the-art woodworking machinery</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/cd5b9a65-2545-4d92-a43b-3c3b7830f349.png" 
                alt="Tools and Materials"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lvtc-forest-green mb-2">Tools & Materials</h3>
                <p className="text-gray-600 text-sm">Professional carpentry tools and materials</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/b32ad92e-b15c-4358-83f6-0123055a0524.png" 
                alt="Student Projects"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lvtc-forest-green mb-2">Student Projects</h3>
                <p className="text-gray-600 text-sm">Furniture and cabinet making projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What You'll Learn */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-lvtc-forest-green text-center mb-12">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Wood Properties & Selection",
              "Hand Tool Techniques",
              "Power Tool Operation",
              "Furniture Design",
              "Cabinet Making",
              "Joinery Techniques",
              "Wood Finishing",
              "Project Planning",
              "Workshop Safety"
            ].map((skill, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-lvtc-forest-green rounded-full mr-3"></div>
                  <span className="text-gray-700">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default CarpentryAndJoinery;
