
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { Scissors, Clock, Award, Users } from 'lucide-react';

const FashionDesignAndGarmentMaking = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-lvtc-forest-green py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">Fashion Design and Garment Making</h1>
          <p className="text-lg text-white/90 text-center mt-4 max-w-2xl mx-auto">
            Master clothing design, pattern making, sewing, and textile production
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
                Our Fashion Design and Garment Making program provides comprehensive training in 
                clothing design, pattern making, sewing techniques, and textile production. Students 
                learn fashion illustration, garment construction, fabric knowledge, and essential 
                business skills for the fashion industry.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-lvtc-forest-green mr-2" />
                  <span>2 Years Duration</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-lvtc-forest-green mr-2" />
                  <span>Certificate / Diploma</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-lvtc-forest-green mr-2" />
                  <span>Practical Training</span>
                </div>
                <div className="flex items-center">
                  <Scissors className="h-5 w-5 text-lvtc-forest-green mr-2" />
                  <span>Modern Equipment</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/lovable-uploads/8e97bfc1-277f-476d-8951-15725421c73c.png" 
                alt="Fashion Design Workshop"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Workshop Gallery */}
      <section className="py-16 bg-lvtc-off-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-lvtc-forest-green text-center mb-12">Our Fashion Design Workshop</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/8e97bfc1-277f-476d-8951-15725421c73c.png" 
                alt="Fashion Design Workshop"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lvtc-forest-green mb-2">Design Workshop</h3>
                <p className="text-gray-600 text-sm">Modern workshop with professional sewing equipment</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/990de3ee-d7d9-45f1-9916-3852ad902d9e.png" 
                alt="Student Success"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lvtc-forest-green mb-2">Student Achievement</h3>
                <p className="text-gray-600 text-sm">Celebrating our fashion design graduates</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/2bab7e69-2051-45f2-a121-9a83b78cd712.png" 
                alt="Practical Training"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lvtc-forest-green mb-2">Hands-on Learning</h3>
                <p className="text-gray-600 text-sm">Students developing their design skills</p>
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
              "Fashion Design Principles",
              "Pattern Making",
              "Sewing Techniques",
              "Textile Knowledge",
              "Fashion Illustration",
              "Garment Construction",
              "Quality Control",
              "Fashion Business",
              "Trend Analysis"
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

export default FashionDesignAndGarmentMaking;
