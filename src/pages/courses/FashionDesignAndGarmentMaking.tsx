
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { Scissors, Clock, Award, Users, Target, BookOpen, Briefcase, GraduationCap } from 'lucide-react';

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
      
      {/* Enhanced Workshop Gallery */}
      <section className="py-16 bg-lvtc-off-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-lvtc-forest-green text-center mb-12">Our Fashion Design Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/8e97bfc1-277f-476d-8951-15725421c73c.png" 
                alt="Fashion Design Workshop"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lvtc-forest-green mb-2">Design Studio</h3>
                <p className="text-gray-600 text-sm">Professional design studio with drafting tables and illustration equipment</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/990de3ee-d7d9-45f1-9916-3852ad902d9e.png" 
                alt="Sewing Workshop"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lvtc-forest-green mb-2">Sewing Workshop</h3>
                <p className="text-gray-600 text-sm">Modern sewing machines and cutting tables for practical training</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/2bab7e69-2051-45f2-a121-9a83b78cd712.png" 
                alt="Pattern Making Lab"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lvtc-forest-green mb-2">Pattern Making Lab</h3>
                <p className="text-gray-600 text-sm">Dedicated space for pattern development and fitting</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/912a8b8e-de08-41fd-96e9-61c8b1b1ebc3.png" 
                alt="Fashion Display Area"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lvtc-forest-green mb-2">Exhibition Space</h3>
                <p className="text-gray-600 text-sm">Display area for showcasing student creations and fashion shows</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Modules */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lvtc-forest-green mb-4">Curriculum Modules</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive 2-year program covers all aspects of fashion design and garment construction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Year 1 Modules */}
            <div className="bg-lvtc-off-white rounded-lg p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-lvtc-forest-green mr-2" />
                <h3 className="text-xl font-semibold text-lvtc-forest-green">Year 1 - Foundation</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-lvtc-forest-green rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Fashion Design Fundamentals</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-lvtc-forest-green rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Basic Sewing and Machine Operation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-lvtc-forest-green rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Textile Science and Fabric Study</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-lvtc-forest-green rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Fashion Drawing and Illustration</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-lvtc-forest-green rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Basic Pattern Making</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-lvtc-forest-green rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Color Theory and Design Elements</span>
                </li>
              </ul>
            </div>

            {/* Year 2 Modules */}
            <div className="bg-lvtc-off-white rounded-lg p-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-lvtc-forest-green mr-2" />
                <h3 className="text-xl font-semibold text-lvtc-forest-green">Year 2 - Advanced</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-lvtc-forest-green rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Advanced Garment Construction</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-lvtc-forest-green rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Fashion Marketing and Merchandising</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-lvtc-forest-green rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Computer-Aided Design (CAD)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-lvtc-forest-green rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Fashion Trend Forecasting</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-lvtc-forest-green rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Quality Control and Finishing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-lvtc-forest-green rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Fashion Business and Entrepreneurship</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Training */}
      <section className="py-16 bg-lvtc-off-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-lvtc-forest-green mb-6">Hands-On Training</h2>
              <p className="text-gray-700 mb-6">
                Our fashion design program emphasizes practical, hands-on learning. Students work on real projects, 
                from concept to finished garment, using industry-standard equipment and techniques.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Target className="h-5 w-5 text-lvtc-forest-green mr-3" />
                  <span className="text-gray-700">Individual and group fashion projects</span>
                </div>
                <div className="flex items-center">
                  <Target className="h-5 w-5 text-lvtc-forest-green mr-3" />
                  <span className="text-gray-700">Fashion show participation</span>
                </div>
                <div className="flex items-center">
                  <Target className="h-5 w-5 text-lvtc-forest-green mr-3" />
                  <span className="text-gray-700">Industry internship opportunities</span>
                </div>
                <div className="flex items-center">
                  <Target className="h-5 w-5 text-lvtc-forest-green mr-3" />
                  <span className="text-gray-700">Portfolio development</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/lovable-uploads/cd5b9a65-2545-4d92-a43b-3c3b7830f349.png" 
                alt="Fashion Design Training"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lvtc-forest-green mb-4">Career Opportunities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Graduates can pursue various career paths in the fashion and textile industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Fashion Designer",
                description: "Create original clothing designs and oversee garment production",
                icon: Scissors
              },
              {
                title: "Pattern Maker",
                description: "Develop patterns for garment manufacturing and production",
                icon: Target
              },
              {
                title: "Fashion Illustrator",
                description: "Create technical and artistic fashion drawings for design houses",
                icon: BookOpen
              },
              {
                title: "Garment Technologist",
                description: "Ensure quality and fit of garments in manufacturing",
                icon: Award
              },
              {
                title: "Fashion Entrepreneur",
                description: "Start your own fashion label or boutique business",
                icon: Briefcase
              },
              {
                title: "Costume Designer",
                description: "Design costumes for theater, film, and television",
                icon: Users
              }
            ].map((career, index) => (
              <div key={index} className="bg-lvtc-off-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <career.icon className="h-8 w-8 text-lvtc-forest-green mx-auto mb-3" />
                <h3 className="font-semibold text-lvtc-forest-green mb-2">{career.title}</h3>
                <p className="text-gray-600 text-sm">{career.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entry Requirements */}
      <section className="py-16 bg-lvtc-off-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-lvtc-forest-green text-center mb-12">Entry Requirements</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold text-lvtc-forest-green mb-4">Academic Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-lvtc-forest-green rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">KCSE Certificate or equivalent</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-lvtc-forest-green rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Minimum grade D+ (Plus)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-lvtc-forest-green rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Creative aptitude assessment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-lvtc-forest-green rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Portfolio submission (if available)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold text-lvtc-forest-green mb-4">Personal Qualities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-lvtc-forest-green rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Creative and artistic flair</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-lvtc-forest-green rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Attention to detail</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-lvtc-forest-green rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Interest in fashion trends</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-lvtc-forest-green rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Manual dexterity and patience</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default FashionDesignAndGarmentMaking;
