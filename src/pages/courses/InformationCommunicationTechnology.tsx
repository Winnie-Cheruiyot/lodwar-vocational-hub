
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { Computer, Clock, Award, Users } from 'lucide-react';

const InformationCommunicationTechnology = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-lvtc-forest-green py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">Information Communication Technology</h1>
          <p className="text-lg text-white/90 text-center mt-4 max-w-2xl mx-auto">
            Build expertise in computer applications, networking, and digital media
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
                Our ICT program provides comprehensive training in computer applications, networking, 
                programming, digital media, and IT support. Students learn both theoretical knowledge 
                and practical skills in modern computing technologies.
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
                  <Computer className="h-5 w-5 text-lvtc-forest-green mr-2" />
                  <span>Modern Lab</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/lovable-uploads/7a440b35-ae70-4195-a6b9-859b01442f44.png" 
                alt="ICT Computer Lab"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* ICT Lab Gallery */}
      <section className="py-16 bg-lvtc-off-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-lvtc-forest-green text-center mb-12">Our ICT Laboratory</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/7a440b35-ae70-4195-a6b9-859b01442f44.png" 
                alt="Computer Lab Setup"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lvtc-forest-green mb-2">Modern Computer Lab</h3>
                <p className="text-gray-600 text-sm">Well-equipped computer stations for practical training</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/1bfc7486-36a2-4f04-961c-143905c45891.png" 
                alt="Students in ICT Class"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lvtc-forest-green mb-2">Interactive Learning</h3>
                <p className="text-gray-600 text-sm">Students engaged in practical computer training</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/11408832-e83b-4b8c-b0fa-767a634ba268.png" 
                alt="ICT Training Session"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lvtc-forest-green mb-2">Practical Sessions</h3>
                <p className="text-gray-600 text-sm">Hands-on learning with modern software</p>
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
              "Computer Applications",
              "Network Administration",
              "Programming Fundamentals",
              "Database Management",
              "Digital Media Design",
              "Web Development",
              "IT Support & Troubleshooting",
              "Software Installation",
              "Digital Communication"
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

export default InformationCommunicationTechnology;
