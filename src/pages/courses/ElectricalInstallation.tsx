
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { Plug, Clock, Award, Users } from 'lucide-react';

const ElectricalInstallation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-lvtc-forest-green py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">Electrical Installation</h1>
          <p className="text-lg text-white/90 text-center mt-4 max-w-2xl mx-auto">
            Master electrical wiring, installation and maintenance in commercial and residential settings
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
                Our Electrical Installation program covers electrical theory, safety practices, wiring methods, 
                motor controls, and renewable energy systems. Students learn both residential and commercial 
                electrical work with emphasis on safety and modern techniques.
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
                  <span>Expert Instructors</span>
                </div>
                <div className="flex items-center">
                  <Plug className="h-5 w-5 text-lvtc-forest-green mr-2" />
                  <span>Modern Lab</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/lovable-uploads/a976690c-637e-49e6-94c2-db7b21fe2662.png" 
                alt="Electrical Installation Workshop"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* What You'll Learn */}
      <section className="py-16 bg-lvtc-off-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-lvtc-forest-green text-center mb-12">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Electrical Theory Fundamentals",
              "Wiring and Installation",
              "Circuit Design and Analysis",
              "Motor Control Systems",
              "Power Distribution",
              "Safety Protocols",
              "Electrical Code Compliance",
              "Troubleshooting Techniques",
              "Renewable Energy Systems"
            ].map((skill, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
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

export default ElectricalInstallation;
