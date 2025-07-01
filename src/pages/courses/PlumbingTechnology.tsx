
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { Wrench, Clock, Award, Users } from 'lucide-react';

const PlumbingTechnology = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-lvtc-forest-green py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">Plumbing Technology</h1>
          <p className="text-lg text-white/90 text-center mt-4 max-w-2xl mx-auto">
            Develop skills in installing and maintaining water systems, fixtures, and appliances
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
                Learn about water supply systems, drainage, plumbing materials, blueprint reading, 
                and modern plumbing techniques. Our program prepares you for careers in residential, 
                commercial, and industrial plumbing.
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
                  <Wrench className="h-5 w-5 text-lvtc-forest-green mr-2" />
                  <span>Modern Tools</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/lovable-uploads/e81afff6-28a1-4d74-9ea2-705a2bd140f8.png" 
                alt="Plumbing Technology Workshop"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Workshop Gallery */}
      <section className="py-16 bg-lvtc-off-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-lvtc-forest-green text-center mb-12">Our Plumbing Workshop</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/e81afff6-28a1-4d74-9ea2-705a2bd140f8.png" 
                alt="Plumbing Installation Training"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lvtc-forest-green mb-2">Installation Training</h3>
                <p className="text-gray-600 text-sm">Hands-on training with real plumbing fixtures</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/54196044-b1e5-460d-a94f-dc10f6205637.png" 
                alt="Plumbing Tools and Equipment"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lvtc-forest-green mb-2">Professional Tools</h3>
                <p className="text-gray-600 text-sm">Modern plumbing tools and equipment</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/2bab7e69-2051-45f2-a121-9a83b78cd712.png" 
                alt="Student Learning"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lvtc-forest-green mb-2">Practical Learning</h3>
                <p className="text-gray-600 text-sm">Students learning practical plumbing skills</p>
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
              "Water Supply Systems",
              "Drainage and Sewerage",
              "Pipe Installation Techniques",
              "Fixture Installation",
              "Blueprint Reading",
              "Plumbing Codes",
              "Leak Detection and Repair",
              "Water Heating Systems",
              "Business Skills"
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

export default PlumbingTechnology;
