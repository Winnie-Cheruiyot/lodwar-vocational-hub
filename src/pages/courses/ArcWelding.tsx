
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { Wrench, Clock, Award, Users, Flame, Shield, BookOpen, Target } from 'lucide-react';

const ArcWelding = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-lvtc-forest-green py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">Arc Welding Technology</h1>
          <p className="text-lg text-white/90 text-center mt-4 max-w-3xl mx-auto">
            Master the art of metal joining through comprehensive welding techniques, safety protocols, and modern fabrication methods
          </p>
        </div>
      </div>
      
      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-lvtc-forest-green mb-6">Program Overview</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our comprehensive Arc Welding Technology program equips students with essential metalworking skills 
                through hands-on training in multiple welding processes. Students master Shielded Metal Arc Welding (SMAW), 
                Gas Metal Arc Welding (GMAW/MIG), Gas Tungsten Arc Welding (GTAW/TIG), and oxy-fuel cutting techniques.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The curriculum emphasizes safety protocols, metallurgy principles, blueprint interpretation, and quality 
                control standards required in construction, manufacturing, and fabrication industries.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-lvtc-forest-green mr-2 flex-shrink-0" />
                  <span className="text-sm">18 Months Program</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-lvtc-forest-green mr-2 flex-shrink-0" />
                  <span className="text-sm">NITA Certificate</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-lvtc-forest-green mr-2 flex-shrink-0" />
                  <span className="text-sm">25 Students/Class</span>
                </div>
                <div className="flex items-center">
                  <Wrench className="h-5 w-5 text-lvtc-forest-green mr-2 flex-shrink-0" />
                  <span className="text-sm">Industry Equipment</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/lovable-uploads/912a8b8e-de08-41fd-96e9-61c8b1b1ebc3.png" 
                alt="Professional welding workshop with modern equipment"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Training Facilities */}
      <section className="py-16 bg-lvtc-off-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-lvtc-forest-green text-center mb-12">State-of-the-Art Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="/lovable-uploads/912a8b8e-de08-41fd-96e9-61c8b1b1ebc3.png" 
                alt="Welding workshop with professional equipment"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lvtc-forest-green mb-2">Main Workshop</h3>
                <p className="text-gray-600 text-sm">Fully equipped welding stations with proper ventilation and safety systems</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="/lovable-uploads/2bab7e69-2051-45f2-a121-9a83b78cd712.png" 
                alt="Students practicing welding techniques"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lvtc-forest-green mb-2">Practical Training</h3>
                <p className="text-gray-600 text-sm">Hands-on learning with individual welding booths and equipment</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="/lovable-uploads/990de3ee-d7d9-45f1-9916-3852ad902d9e.png" 
                alt="Welding graduates celebrating success"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lvtc-forest-green mb-2">Success Stories</h3>
                <p className="text-gray-600 text-sm">Celebrating our skilled graduates entering the workforce</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="/lovable-uploads/4e0ae8b4-0381-468e-aba8-03e9dc9aee18.png" 
                alt="Modern welding equipment and tools"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lvtc-forest-green mb-2">Modern Equipment</h3>
                <p className="text-gray-600 text-sm">Latest welding technology and precision cutting tools</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-lvtc-forest-green text-center mb-12">Comprehensive Curriculum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-l-4 border-lvtc-forest-green pl-6">
                <h3 className="text-xl font-semibold text-lvtc-forest-green mb-3 flex items-center">
                  <Flame className="h-5 w-5 mr-2" />
                  Welding Processes
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Shielded Metal Arc Welding (SMAW/Stick)</li>
                  <li>• Gas Metal Arc Welding (GMAW/MIG)</li>
                  <li>• Gas Tungsten Arc Welding (GTAW/TIG)</li>
                  <li>• Flux-Cored Arc Welding (FCAW)</li>
                  <li>• Oxy-Fuel Cutting & Welding</li>
                </ul>
              </div>
              <div className="border-l-4 border-lvtc-forest-green pl-6">
                <h3 className="text-xl font-semibold text-lvtc-forest-green mb-3 flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Safety & Standards
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Welding Safety Procedures</li>
                  <li>• Personal Protective Equipment (PPE)</li>
                  <li>• Fire Prevention & Control</li>
                  <li>• Ventilation Systems</li>
                  <li>• OSHA Compliance</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-lvtc-forest-green pl-6">
                <h3 className="text-xl font-semibold text-lvtc-forest-green mb-3 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Technical Knowledge
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Metallurgy & Material Properties</li>
                  <li>• Blueprint Reading & Symbols</li>
                  <li>• Weld Testing & Inspection</li>
                  <li>• Joint Design & Preparation</li>
                  <li>• Quality Control Standards</li>
                </ul>
              </div>
              <div className="border-l-4 border-lvtc-forest-green pl-6">
                <h3 className="text-xl font-semibold text-lvtc-forest-green mb-3 flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Fabrication Skills
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Structural Steel Fabrication</li>
                  <li>• Pipe Welding & Fitting</li>
                  <li>• Sheet Metal Work</li>
                  <li>• Equipment Maintenance</li>
                  <li>• Project Management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-lvtc-off-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-lvtc-forest-green text-center mb-12">Career Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Construction Welder", desc: "Join building and infrastructure projects" },
              { title: "Manufacturing Technician", desc: "Work in automotive and industrial manufacturing" },
              { title: "Pipeline Welder", desc: "Specialize in oil, gas, and water pipeline installation" },
              { title: "Ship Building Welder", desc: "Marine construction and repair operations" },
              { title: "Welding Inspector", desc: "Quality control and certification specialist" },
              { title: "Welding Supervisor", desc: "Lead welding teams and manage projects" }
            ].map((career, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lvtc-forest-green mb-2">{career.title}</h3>
                <p className="text-gray-600 text-sm">{career.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entry Requirements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-lvtc-forest-green text-center mb-12">Entry Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-lvtc-off-white rounded-lg p-6">
                <h3 className="text-xl font-semibold text-lvtc-forest-green mb-4">Academic Requirements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• KCSE Grade D+ (Plus) or equivalent</li>
                  <li>• Mathematics and English minimum grade D</li>
                  <li>• Physical Sciences recommended</li>
                  <li>• Age minimum 18 years</li>
                </ul>
              </div>
              <div className="bg-lvtc-off-white rounded-lg p-6">
                <h3 className="text-xl font-semibold text-lvtc-forest-green mb-4">Physical Requirements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Good physical health and stamina</li>
                  <li>• Clear vision (correctable)</li>
                  <li>• Hand-eye coordination</li>
                  <li>• Medical fitness certificate</li>
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

export default ArcWelding;
