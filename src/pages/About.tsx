import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { GraduationCap, Users, Book } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-lvtc-forest-green py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">About Us</h1>
        </div>
      </div>
      
      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-lvtc-forest-green mb-6">Our History</h2>
              <p className="text-gray-700 mb-4">
                Established in 1976, Lodwar Vocational Training Centre (LVTC) was founded with a mission to equip the youth of Turkana County with practical skills for self-reliance. What began as a small training facility has grown into a respected institution with over 45 years of experience in vocational education.
              </p>
              <p className="text-gray-700 mb-4">
                LVTC was established to address the skills gap in the region and provide opportunities for young people to develop technical expertise that could lead to employment or entrepreneurship. Over the decades, we have continuously adapted our curriculum to meet the changing demands of the job market and industry needs.
              </p>
              <p className="text-gray-700">
                Today, LVTC stands as a beacon of hope and opportunity in Turkana County, having trained over 3,400 skilled professionals who are making significant contributions to the local economy and beyond.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/ed50c869-f78c-4610-9ee0-11723df3f57b.png"
                alt="LVTC Campus" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 left-0 bg-lvtc-forest-green text-white py-2 px-4 rounded-tr-lg rounded-bl-lg">
                Since 1976
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-16 bg-lvtc-off-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lvtc-forest-green mb-4">Our Mission & Vision</h2>
            <div className="w-24 h-1 bg-lvtc-light-green mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="bg-lvtc-pale-green w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <GraduationCap className="h-8 w-8 text-lvtc-forest-green" />
              </div>
              <h3 className="text-xl font-bold text-lvtc-forest-green text-center mb-4">Our Mission</h3>
              <p className="text-gray-700 text-center">
                To provide quality technical and vocational training that empowers youth with practical skills, fostering self-reliance and contributing to the socio-economic development of Turkana County and Kenya at large.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="bg-lvtc-pale-green w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Book className="h-8 w-8 text-lvtc-forest-green" />
              </div>
              <h3 className="text-xl font-bold text-lvtc-forest-green text-center mb-4">Our Vision</h3>
              <p className="text-gray-700 text-center">
                To be the leading vocational training centre in Kenya, known for excellence in skills development, innovation, and producing competent graduates who meet industry standards and drive economic growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lvtc-forest-green mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-lvtc-light-green mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Excellence",
                description: "We strive for the highest standards in all our training programs and services."
              },
              {
                title: "Innovation",
                description: "We embrace new technologies and teaching methods to stay relevant in a changing world."
              },
              {
                title: "Integrity",
                description: "We uphold honesty, transparency and ethical practices in all our operations."
              },
              {
                title: "Inclusivity",
                description: "We provide equal opportunities for all, regardless of background or circumstances."
              }
            ].map((value, index) => (
              <div key={index} className="bg-lvtc-off-white rounded-lg p-6 shadow-sm border-t-4 border-lvtc-forest-green">
                <h3 className="text-xl font-semibold text-lvtc-forest-green mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team Section with updated leadership */}
      <section className="py-16 bg-lvtc-off-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lvtc-forest-green mb-4">Our Leadership Team</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our institution is guided by experienced professionals dedicated to quality education and student success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Mr. Abraham Chegem",
                position: "Principal",
                bio: "With over 10 years in technical education, Mr. Chegem brings leadership and vision to LVTC."
              },
              {
                name: "Mr. Haron Aiyen",
                position: "Deputy Principal",
                bio: "Mr. Aiyen manages the day-to-day operations and facilities of the institution."
              },
              {
                name: "Ms. Winnie Cheruiyot",
                position: "Director of Studies (D.O.S)",
                bio: "Ms. Cheruiyot oversees curriculum development and ensures high-quality teaching standards."
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-lvtc-light-green flex items-center justify-center">
                  <Users className="h-24 w-24 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-lvtc-forest-green mb-1">{member.name}</h3>
                  <p className="text-lvtc-light-green font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
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

export default About;
