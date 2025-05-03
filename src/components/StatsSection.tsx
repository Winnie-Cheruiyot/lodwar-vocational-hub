
import React from 'react';
import { Users, GraduationCap, Calendar } from 'lucide-react';

const statsData = [
  {
    icon: <Calendar className="h-10 w-10 text-lvtc-forest-green" />,
    value: '45+',
    label: 'Years of Excellence',
    description: 'Established in 1976'
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-lvtc-forest-green" />,
    value: '3,400+',
    label: 'Alumni',
    description: 'Skilled professionals across Kenya'
  },
  {
    icon: <Users className="h-10 w-10 text-lvtc-forest-green" />,
    value: '30+',
    label: 'Expert Instructors',
    description: 'Industry professionals'
  }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-lvtc-off-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-lvtc-forest-green mb-12">
          Our Impact Through the Years
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 text-center transform hover:scale-105 transition-transform">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-lvtc-forest-green mb-2">
                {stat.value}
              </h3>
              <p className="text-xl font-medium text-lvtc-dark-gray mb-2">
                {stat.label}
              </p>
              <p className="text-gray-500">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
