import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { ChefHat, Clock, Award, BookOpen, Users, Utensils, CookingPot, GraduationCap } from 'lucide-react';

const FoodAndBeverageProcessing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-lvtc-forest-green py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Food and Beverage Processing
              </h1>
              <p className="text-lg text-white/90 mb-8">
                Master the art of culinary excellence and food service management through comprehensive hands-on training in our state-of-the-art kitchen facilities.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Clock className="h-5 w-5 text-white" />
                  <span className="text-white font-medium">2 Years</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Award className="h-5 w-5 text-white" />
                  <span className="text-white font-medium">Certificate/Diploma</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/1511a861-0c89-4a2b-aed2-391d515fc8e7.png" 
                  alt="Culinary Training in Professional Kitchen"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lvtc-forest-green mb-4">Course Overview</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Our Food and Beverage Processing program combines traditional culinary arts with modern food technology, 
              preparing students for successful careers in the hospitality and food service industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-lvtc-pale-green rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CookingPot className="h-8 w-8 text-lvtc-forest-green" />
              </div>
              <h3 className="text-lg font-bold text-lvtc-forest-green mb-2">Professional Cooking</h3>
              <p className="text-gray-600">Master cooking techniques, recipe development, and kitchen management</p>
            </div>
            <div className="text-center">
              <div className="bg-lvtc-pale-green rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Utensils className="h-8 w-8 text-lvtc-forest-green" />
              </div>
              <h3 className="text-lg font-bold text-lvtc-forest-green mb-2">Food Safety</h3>
              <p className="text-gray-600">Learn food safety protocols, hygiene standards, and quality control</p>
            </div>
            <div className="text-center">
              <div className="bg-lvtc-pale-green rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <ChefHat className="h-8 w-8 text-lvtc-forest-green" />
              </div>
              <h3 className="text-lg font-bold text-lvtc-forest-green mb-2">Beverage Service</h3>
              <p className="text-gray-600">Beverage preparation, mixing techniques, and service excellence</p>
            </div>
            <div className="text-center">
              <div className="bg-lvtc-pale-green rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-lvtc-forest-green" />
              </div>
              <h3 className="text-lg font-bold text-lvtc-forest-green mb-2">Hospitality Management</h3>
              <p className="text-gray-600">Customer service, restaurant management, and business operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-lvtc-off-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lvtc-forest-green mb-4">Curriculum Highlights</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our comprehensive curriculum covers all aspects of food and beverage processing and service
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-6">
                <BookOpen className="h-8 w-8 text-lvtc-forest-green mr-3" />
                <h3 className="text-xl font-bold text-lvtc-forest-green">Core Subjects</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-lvtc-pale-green rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-lvtc-forest-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  Culinary Arts and Cooking Techniques
                </li>
                <li className="flex items-start">
                  <span className="bg-lvtc-pale-green rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-lvtc-forest-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  Food Safety and Sanitation (HACCP)
                </li>
                <li className="flex items-start">
                  <span className="bg-lvtc-pale-green rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-lvtc-forest-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  Nutrition and Menu Planning
                </li>
                <li className="flex items-start">
                  <span className="bg-lvtc-pale-green rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-lvtc-forest-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  Baking and Pastry Arts
                </li>
                <li className="flex items-start">
                  <span className="bg-lvtc-pale-green rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-lvtc-forest-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  Food Preservation and Processing
                </li>
                <li className="flex items-start">
                  <span className="bg-lvtc-pale-green rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-lvtc-forest-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  Beverage Operations
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-8 w-8 text-lvtc-forest-green mr-3" />
                <h3 className="text-xl font-bold text-lvtc-forest-green">Practical Training</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-lvtc-pale-green rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-lvtc-forest-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  Professional Kitchen Operations
                </li>
                <li className="flex items-start">
                  <span className="bg-lvtc-pale-green rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-lvtc-forest-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  Restaurant Service Training
                </li>
                <li className="flex items-start">
                  <span className="bg-lvtc-pale-green rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-lvtc-forest-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  Catering and Event Management
                </li>
                <li className="flex items-start">
                  <span className="bg-lvtc-pale-green rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-lvtc-forest-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  Food Presentation and Plating
                </li>
                <li className="flex items-start">
                  <span className="bg-lvtc-pale-green rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-lvtc-forest-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  Industry Attachment Program
                </li>
                <li className="flex items-start">
                  <span className="bg-lvtc-pale-green rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-lvtc-forest-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  Customer Service Excellence
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lvtc-forest-green mb-4">Career Opportunities</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Graduates are equipped with skills for diverse career paths in the hospitality and food service industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-lvtc-off-white rounded-lg p-6 text-center">
              <div className="bg-lvtc-forest-green rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <ChefHat className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-lvtc-forest-green mb-2">Professional Chef</h3>
              <p className="text-gray-600">Work in restaurants, hotels, and fine dining establishments</p>
            </div>
            <div className="bg-lvtc-off-white rounded-lg p-6 text-center">
              <div className="bg-lvtc-forest-green rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-lvtc-forest-green mb-2">Food Service Manager</h3>
              <p className="text-gray-600">Manage restaurant operations and food service facilities</p>
            </div>
            <div className="bg-lvtc-off-white rounded-lg p-6 text-center">
              <div className="bg-lvtc-forest-green rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <CookingPot className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-lvtc-forest-green mb-2">Caterer</h3>
              <p className="text-gray-600">Start your own catering business or work with catering companies</p>
            </div>
            <div className="bg-lvtc-off-white rounded-lg p-6 text-center">
              <div className="bg-lvtc-forest-green rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-lvtc-forest-green mb-2">Food Safety Inspector</h3>
              <p className="text-gray-600">Ensure food quality and safety standards in various establishments</p>
            </div>
            <div className="bg-lvtc-off-white rounded-lg p-6 text-center">
              <div className="bg-lvtc-forest-green rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Utensils className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-lvtc-forest-green mb-2">Food Entrepreneur</h3>
              <p className="text-gray-600">Start food processing businesses or specialty food production</p>
            </div>
            <div className="bg-lvtc-off-white rounded-lg p-6 text-center">
              <div className="bg-lvtc-forest-green rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-lvtc-forest-green mb-2">Culinary Instructor</h3>
              <p className="text-gray-600">Teach culinary arts in vocational schools and training centers</p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default FoodAndBeverageProcessing;