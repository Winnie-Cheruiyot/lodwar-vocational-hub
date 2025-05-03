
import React from 'react';

const testimonials = [
  {
    quote: "The practical skills I learned at LVTC enabled me to start my own electrical installation business. The hands-on training was invaluable.",
    name: "David Ekiru",
    position: "CEO, Ekiru Electrical Services",
    course: "Electrical Installation",
    year: "2015"
  },
  {
    quote: "LVTC changed my life. The instructors were supportive and knowledgeable. Now I work as a head chef at a major hotel in Nairobi.",
    name: "Sarah Nakuru",
    position: "Head Chef, Royal Grand Hotel",
    course: "Food and Beverage Processing",
    year: "2018"
  },
  {
    quote: "The motor vehicle mechanics course gave me both technical knowledge and business skills. I now run a successful garage in Lodwar.",
    name: "James Lokidor",
    position: "Owner, Turkana Auto Services",
    course: "Motor Vehicle Mechanics",
    year: "2010"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-lvtc-forest-green text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Alumni Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-lg text-gray-800 relative"
            >
              <div className="absolute top-0 right-0 -mt-5 -mr-5 bg-lvtc-light-green text-white w-10 h-10 flex items-center justify-center rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
                </svg>
              </div>
              <p className="italic text-gray-600 mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-lvtc-pale-green rounded-full flex items-center justify-center text-lvtc-forest-green font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <div className="text-sm text-gray-600">
                    <p>{testimonial.position}</p>
                    <p>{testimonial.course}, Class of {testimonial.year}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
