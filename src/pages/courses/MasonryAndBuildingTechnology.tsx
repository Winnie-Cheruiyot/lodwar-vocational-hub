import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Clock, Award, Users, BookOpen, Hammer, Building, CheckCircle, ArrowLeft } from 'lucide-react';
import masonryTraining from '@/assets/masonry-training.jpg';
import buildingConstruction from '@/assets/building-construction.jpg';
import masonryTools from '@/assets/masonry-tools.jpg';

const MasonryAndBuildingTechnology = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-lvtc-forest-green py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <Button variant="ghost" asChild className="text-white hover:text-white hover:bg-white/10 p-0 mr-4">
              <Link to="/courses" className="flex items-center">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Courses
              </Link>
            </Button>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Masonry and Building Technology</h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Master the fundamentals of construction through comprehensive training in masonry techniques, building methods, and structural principles. Build a solid foundation for a career in the construction industry.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <Badge variant="secondary" className="bg-white/20 text-white text-sm px-4 py-2">
              <Clock className="h-4 w-4 mr-2" />
              2 Years Program
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white text-sm px-4 py-2">
              <Award className="h-4 w-4 mr-2" />
              Certificate / Diploma
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white text-sm px-4 py-2">
              <Users className="h-4 w-4 mr-2" />
              Hands-on Training
            </Badge>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-lvtc-forest-green mb-6">Course Overview</h2>
              <p className="text-gray-600 mb-6">
                Our Masonry and Building Technology program provides comprehensive training in construction techniques, 
                building methods, and structural principles. Students gain practical experience working with various 
                masonry materials and learn to read blueprints, ensuring they're ready for careers in the construction industry.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-lvtc-off-white rounded-lg">
                  <BookOpen className="h-8 w-8 text-lvtc-forest-green mx-auto mb-2" />
                  <div className="font-semibold text-lvtc-forest-green">Comprehensive</div>
                  <div className="text-sm text-gray-600">Curriculum</div>
                </div>
                <div className="text-center p-4 bg-lvtc-off-white rounded-lg">
                  <Hammer className="h-8 w-8 text-lvtc-forest-green mx-auto mb-2" />
                  <div className="font-semibold text-lvtc-forest-green">Practical</div>
                  <div className="text-sm text-gray-600">Training</div>
                </div>
              </div>
              <Button className="bg-lvtc-forest-green hover:bg-lvtc-light-green text-white" asChild>
                <Link to="/apply">Apply Now</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={masonryTraining} 
                alt="Masonry training workshop with students learning construction techniques" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-lvtc-off-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lvtc-forest-green mb-4">Course Curriculum</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our structured curriculum covers all aspects of masonry and building technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lvtc-forest-green">Year 1: Foundation Skills</CardTitle>
                <CardDescription>
                  Build fundamental knowledge and basic practical skills
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Construction Materials and Properties</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Basic Masonry Techniques</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Blueprint Reading and Interpretation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Construction Safety Practices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Tool Usage and Maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Foundation and Concrete Work</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lvtc-forest-green">Year 2: Advanced Applications</CardTitle>
                <CardDescription>
                  Develop advanced skills and specialized techniques
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Advanced Bricklaying and Stonework</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Structural Principles and Design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Plastering and Finishing Techniques</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Construction Project Management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Quality Control and Testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Entrepreneurship in Construction</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities and Training */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lvtc-forest-green mb-4">Training Facilities & Equipment</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              State-of-the-art facilities equipped with modern tools and materials for comprehensive training
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <img 
                  src={buildingConstruction} 
                  alt="Construction site with masonry work in progress" 
                  className="rounded-lg shadow-lg w-full h-[300px] object-cover mb-4"
                />
                <h3 className="text-xl font-bold text-lvtc-forest-green mb-3">Construction Workshop</h3>
                <p className="text-gray-600">
                  Fully equipped construction workshop with practice areas for bricklaying, 
                  blockwork, and various masonry techniques. Students work on real construction projects 
                  to gain practical experience.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <img 
                  src={masonryTools} 
                  alt="Modern construction tools and equipment for masonry training" 
                  className="rounded-lg shadow-lg w-full h-[300px] object-cover mb-4"
                />
                <h3 className="text-xl font-bold text-lvtc-forest-green mb-3">Tools & Equipment</h3>
                <p className="text-gray-600">
                  Complete range of modern construction tools including trowels, levels, 
                  measuring equipment, safety gear, and specialized masonry tools. Students learn 
                  proper usage and maintenance of all equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-lvtc-off-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lvtc-forest-green mb-4">Career Opportunities</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our graduates find employment in various sectors of the construction industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Building className="h-10 w-10 text-lvtc-forest-green mb-4" />
                <CardTitle>Construction Companies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Work with established construction firms on residential, commercial, 
                  and infrastructure projects as skilled masons and construction technicians.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-lvtc-forest-green mb-4" />
                <CardTitle>Self-Employment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Start your own masonry and construction business, offering services 
                  to individual clients and small-scale construction projects.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-10 w-10 text-lvtc-forest-green mb-4" />
                <CardTitle>Government Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Participate in government infrastructure projects, public housing 
                  developments, and other public works construction initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default MasonryAndBuildingTechnology;