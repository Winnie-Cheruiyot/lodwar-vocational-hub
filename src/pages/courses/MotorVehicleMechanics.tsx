
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { Car, Clock, Award, Users } from 'lucide-react';

const MotorVehicleMechanics = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-lvtc-forest-green py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">Motor Vehicle Mechanics</h1>
          <p className="text-lg text-white/90 text-center mt-4 max-w-2xl mx-auto">
            Master the art of vehicle maintenance, repair and servicing with hands-on training
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
                Our Motor Vehicle Mechanics program provides comprehensive training in vehicle maintenance, 
                repair, and servicing. Students gain hands-on experience with various vehicle systems including 
                engines, transmission, brakes, and electronic systems.
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
                  <span>Hands-on Training</span>
                </div>
                <div className="flex items-center">
                  <Car className="h-5 w-5 text-lvtc-forest-green mr-2" />
                  <span>Modern Equipment</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/lovable-uploads/9c82f209-63f9-4c3a-a6bd-6d5c82735eb1.png" 
                alt="Motor Vehicle Mechanics Workshop"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Workshop Gallery */}
      <section className="py-16 bg-lvtc-off-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-lvtc-forest-green text-center mb-12">Our Workshop Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/9c82f209-63f9-4c3a-a6bd-6d5c82735eb1.png" 
                alt="Vehicle Workshop"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lvtc-forest-green mb-2">Modern Workshop</h3>
                <p className="text-gray-600 text-sm">State-of-the-art equipment for practical training</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/2bab7e69-2051-45f2-a121-9a83b78cd712.png" 
                alt="Students in Workshop"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lvtc-forest-green mb-2">Hands-on Learning</h3>
                <p className="text-gray-600 text-sm">Students working on real automotive projects</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/5e18c74a-54a7-4d18-ae90-8b37152d9755.png" 
                alt="Safety Training"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lvtc-forest-green mb-2">Safety First</h3>
                <p className="text-gray-600 text-sm">Comprehensive safety training and protocols</p>
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
              "Engine Diagnostics and Repair",
              "Transmission Systems",
              "Brake System Maintenance",
              "Electrical System Troubleshooting",
              "Fuel System Management",
              "Vehicle Safety Inspections",
              "Modern Diagnostic Tools",
              "Customer Service Skills",
              "Workshop Management"
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

export default MotorVehicleMechanics;
