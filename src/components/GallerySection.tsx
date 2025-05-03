
import React from 'react';

const galleryImages = [
  {
    src: "/lovable-uploads/20e24163-491b-44a2-9f8e-4f17cc43af32.png",
    alt: "Culinary students in the kitchen",
    caption: "Food & Beverage Processing"
  },
  {
    src: "/lovable-uploads/772d532c-348e-42c0-8fdc-8d9ab6abd602.png",
    alt: "Food and dining setup",
    caption: "Hospitality Training"
  },
  {
    src: "/lovable-uploads/f61dbede-d912-49bc-b46e-73e208d64ba9.png",
    alt: "Students in the kitchen preparing food",
    caption: "Culinary Arts Training"
  },
  {
    src: "/lovable-uploads/81584fa0-77c6-4466-9b59-e5f0fd7439b5.png",
    alt: "Staff and students at LVTC",
    caption: "Our Community"
  },
  {
    src: "/lovable-uploads/97f3a57c-4bba-4b04-aed1-de37d4360859.png",
    alt: "Plumbing installation demonstration",
    caption: "Plumbing Technology"
  },
  {
    src: "/lovable-uploads/32aef7f1-4ac8-4dce-aa48-4b0b91d9dedc.png",
    alt: "Electrical workshop training",
    caption: "Electrical Installation"
  }
];

const GallerySection = () => {
  return (
    <section className="py-16 bg-lvtc-off-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-lvtc-forest-green mb-12">
          Campus Life & Facilities
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative h-64 overflow-hidden rounded-lg shadow-md"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-medium">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
