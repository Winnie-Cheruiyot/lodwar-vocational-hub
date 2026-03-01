
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="bg-lvtc-forest-green py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Start Your Vocational Journey?
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
          Join Lodwar Vocational Training Centre and gain practical skills that lead to employment and entrepreneurship opportunities.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" className="bg-white text-lvtc-forest-green hover:bg-lvtc-pale-green" asChild>
            <Link to="/apply">Apply Now</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-lvtc-forest-green" asChild>
            <a href="/brochures/LVTC_COURSES.jpg" download="LVTC_Courses_Brochure.jpg">Download Brochure</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
