
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { Car, Plug, Wrench, Computer, ChefHat, Scissors, Pen, School, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const coursesData = [
  {
    icon: <Car className="h-10 w-10" />,
    title: 'Motor Vehicle Mechanics',
    description: 'Learn comprehensive maintenance, repair and servicing of vehicles through hands-on training. Students work with various vehicle systems including engines, transmission, brakes, and electronic systems.',
    duration: '2 Years',
    certificationLevel: 'Certificate / Diploma'
  },
  {
    icon: <Plug className="h-10 w-10" />,
    title: 'Electrical Installation',
    description: 'Master electrical wiring, installation and maintenance in commercial and residential settings. The program covers electrical theory, safety practices, wiring methods, motor controls, and renewable energy systems.',
    duration: '2 Years',
    certificationLevel: 'Certificate / Diploma'
  },
  {
    icon: <Wrench className="h-10 w-10" />,
    title: 'Plumbing Technology',
    description: 'Develop skills in installing and maintaining water systems, fixtures, and appliances. Learn about water supply, drainage, plumbing materials, blueprint reading, and modern plumbing techniques.',
    duration: '2 Years',
    certificationLevel: 'Certificate / Diploma'
  },
  {
    icon: <Computer className="h-10 w-10" />,
    title: 'Information Communication Technology',
    description: 'Build expertise in computer applications, networking, programming, digital media, and IT support. Students learn both theoretical knowledge and practical skills in modern computing.',
    duration: '2 Years',
    certificationLevel: 'Certificate / Diploma'
  },
  {
    icon: <ChefHat className="h-10 w-10" />,
    title: 'Food and Beverage Processing',
    description: 'Learn culinary arts, food safety, beverage preparation, and hospitality management. The program provides training in professional cooking, baking, menu planning, and food service operations.',
    duration: '2 Years',
    certificationLevel: 'Certificate / Diploma'
  },
  {
    icon: <Scissors className="h-10 w-10" />,
    title: 'Hairdressing and Beauty Therapy',
    description: 'Master hairstyling, cosmetics application, nail care, and salon management. Students gain both practical skills and theoretical knowledge in beauty treatments and customer service.',
    duration: '2 Years',
    certificationLevel: 'Certificate / Diploma'
  },
  {
    icon: <Pen className="h-10 w-10" />,
    title: 'Fashion Design and Garment Making',
    description: 'Develop skills in clothing design, pattern making, sewing, and textile production. The program covers fashion illustration, garment construction, fabric knowledge, and business skills.',
    duration: '2 Years',
    certificationLevel: 'Certificate / Diploma'
  },
  {
    icon: <School className="h-10 w-10" />,
    title: 'Masonry and Building Technology',
    description: 'Learn construction techniques, building methods, structural principles, and blueprint reading. Students get hands-on experience with various masonry materials and construction projects.',
    duration: '2 Years',
    certificationLevel: 'Certificate / Diploma'
  },
  {
    icon: <Wrench className="h-10 w-10" />,
    title: 'Arc Welding',
    description: 'Master various welding techniques including MIG, TIG, and stick welding. The program covers welding safety, metal properties, blueprint reading, and fabrication projects.',
    duration: '1 Year',
    certificationLevel: 'Certificate'
  },
  {
    icon: <Wrench className="h-10 w-10" />,
    title: 'Carpentry and Joinery',
    description: 'Learn woodworking techniques, furniture making, cabinet construction, and finishing methods. The program combines traditional craftsmanship with modern carpentry tools and methods.',
    duration: '2 Years',
    certificationLevel: 'Certificate / Diploma'
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-lvtc-forest-green py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">Our Courses</h1>
          <p className="text-lg text-white/90 text-center mt-4 max-w-2xl mx-auto">
            Discover our comprehensive range of technical and vocational programs designed to equip you with practical skills for the job market
          </p>
        </div>
      </div>
      
      {/* Courses Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lvtc-forest-green mb-4">Vocational Programs</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our courses are designed with industry input to ensure graduates possess relevant skills that meet employer needs and enhance entrepreneurial opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coursesData.map((course, index) => (
              <div 
                key={index} 
                className="bg-lvtc-off-white rounded-lg shadow-md overflow-hidden border border-gray-100"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="bg-lvtc-forest-green text-white p-6 flex items-center justify-center md:w-1/4">
                    <div className="w-20 h-20 flex items-center justify-center">
                      {course.icon}
                    </div>
                  </div>
                  <div className="p-6 md:w-3/4">
                    <h3 className="text-xl font-bold text-lvtc-forest-green mb-2">{course.title}</h3>
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="bg-lvtc-pale-green text-lvtc-forest-green text-sm font-medium py-1 px-3 rounded-full">
                        Duration: {course.duration}
                      </span>
                      <span className="bg-lvtc-pale-green text-lvtc-forest-green text-sm font-medium py-1 px-3 rounded-full">
                        {course.certificationLevel}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <Button className="bg-lvtc-forest-green hover:bg-lvtc-light-green text-white">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Admission Requirements */}
      <section className="py-16 bg-lvtc-off-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lvtc-forest-green mb-4">Admission Requirements</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our programs are accessible to students with various educational backgrounds
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-lvtc-forest-green mb-4">Certificate Level</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-lvtc-pale-green rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-lvtc-forest-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  KCSE mean grade D+ or equivalent
                </li>
                <li className="flex items-start">
                  <span className="bg-lvtc-pale-green rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-lvtc-forest-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  Completed application form
                </li>
                <li className="flex items-start">
                  <span className="bg-lvtc-pale-green rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-lvtc-forest-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  Copy of national ID or birth certificate
                </li>
                <li className="flex items-start">
                  <span className="bg-lvtc-pale-green rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-lvtc-forest-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  Two passport photos
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-lvtc-forest-green mb-4">Diploma Level</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-lvtc-pale-green rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-lvtc-forest-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  KCSE mean grade C- or equivalent
                </li>
                <li className="flex items-start">
                  <span className="bg-lvtc-pale-green rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-lvtc-forest-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  Completed application form
                </li>
                <li className="flex items-start">
                  <span className="bg-lvtc-pale-green rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-lvtc-forest-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  Copy of national ID or birth certificate
                </li>
                <li className="flex items-start">
                  <span className="bg-lvtc-pale-green rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-lvtc-forest-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  Two passport photos
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-lvtc-forest-green mb-4">Artisan Level</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-lvtc-pale-green rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-lvtc-forest-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  KCSE certificate or equivalent
                </li>
                <li className="flex items-start">
                  <span className="bg-lvtc-pale-green rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-lvtc-forest-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  Completed application form
                </li>
                <li className="flex items-start">
                  <span className="bg-lvtc-pale-green rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-lvtc-forest-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  Copy of national ID or birth certificate
                </li>
                <li className="flex items-start">
                  <span className="bg-lvtc-pale-green rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-lvtc-forest-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  Two passport photos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Academic Calendar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lvtc-forest-green mb-4">Academic Calendar</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our academic year consists of three terms with multiple intake opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-lvtc-pale-green rounded-lg overflow-hidden">
              <div className="bg-lvtc-forest-green text-white p-4 text-center">
                <h3 className="text-xl font-bold">January Intake</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span className="font-medium">Registration:</span>
                    <span>January 2-15</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Classes Begin:</span>
                    <span>January 18</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Term Ends:</span>
                    <span>April 15</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border border-lvtc-pale-green rounded-lg overflow-hidden">
              <div className="bg-lvtc-forest-green text-white p-4 text-center">
                <h3 className="text-xl font-bold">May Intake</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span className="font-medium">Registration:</span>
                    <span>May 2-15</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Classes Begin:</span>
                    <span>May 18</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Term Ends:</span>
                    <span>August 15</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border border-lvtc-pale-green rounded-lg overflow-hidden">
              <div className="bg-lvtc-forest-green text-white p-4 text-center">
                <h3 className="text-xl font-bold">September Intake</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span className="font-medium">Registration:</span>
                    <span>September 2-15</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Classes Begin:</span>
                    <span>September 18</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Term Ends:</span>
                    <span>December 15</span>
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

export default Courses;
