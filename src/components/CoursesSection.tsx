
import React from 'react';
import { Car, Plug, Wrench, Computer, ChefHat, Scissors, Pen, School } from 'lucide-react';
import { Button } from '@/components/ui/button';

const coursesData = [
  {
    icon: <Car className="h-8 w-8" />,
    title: 'Motor Vehicle Mechanics',
    description: 'Learn maintenance, repair and servicing of vehicles with hands-on training.'
  },
  {
    icon: <Plug className="h-8 w-8" />,
    title: 'Electrical Installation',
    description: 'Master electrical wiring, installation and maintenance in commercial and residential settings.'
  },
  {
    icon: <Wrench className="h-8 w-8" />,
    title: 'Plumbing Technology',
    description: 'Develop skills in installing and maintaining water systems, fixtures, and appliances.'
  },
  {
    icon: <Computer className="h-8 w-8" />,
    title: 'Information Communication Technology',
    description: 'Build expertise in computer applications, networking, and digital media.'
  },
  {
    icon: <ChefHat className="h-8 w-8" />,
    title: 'Food and Beverage Processing',
    description: 'Learn culinary arts, food safety, and hospitality management.'
  },
  {
    icon: <Scissors className="h-8 w-8" />,
    title: 'Hairdressing and Beauty Therapy',
    description: 'Master styling, cosmetics application, and salon management.'
  },
  {
    icon: <Pen className="h-8 w-8" />,
    title: 'Fashion Design and Garment Making',
    description: 'Develop skills in clothing design, pattern making, and textile production.'
  },
  {
    icon: <School className="h-8 w-8" />,
    title: 'Masonry and Building Technology',
    description: 'Learn construction techniques, building methods and structural principles.'
  }
];

const CoursesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-lvtc-forest-green mb-4">
            Our Technical Courses
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            We offer hands-on training in various technical fields to prepare students for successful careers and entrepreneurship.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coursesData.map((course, index) => (
            <div 
              key={index}
              className="bg-lvtc-off-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-lvtc-pale-green rounded-full flex items-center justify-center mb-4 text-lvtc-forest-green group-hover:bg-lvtc-forest-green group-hover:text-white transition-colors">
                {course.icon}
              </div>
              <h3 className="text-xl font-semibold text-lvtc-forest-green mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {course.description}
              </p>
              <a 
                href={`/courses/${course.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-lvtc-forest-green font-medium hover:underline inline-flex items-center"
              >
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-lvtc-forest-green hover:bg-lvtc-light-green text-white">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
