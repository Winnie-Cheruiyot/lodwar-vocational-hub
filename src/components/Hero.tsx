
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="hero-gradient text-white">
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
          Empowering Youth Through Skills Training
        </h1>
        <p className="text-lg md:text-xl text-center max-w-3xl mb-10">
          Since 1976, Lodwar Vocational Training Centre has been transforming lives in Turkana County through quality technical and vocational education.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" className="bg-white text-lvtc-forest-green hover:bg-lvtc-pale-green">
            Explore Our Courses
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-lvtc-forest-green">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
