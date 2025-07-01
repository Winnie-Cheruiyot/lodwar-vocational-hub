
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const heroImages = [
    {
      src: "/lovable-uploads/4970702d-6b3e-472d-b645-48d1324380bb.png",
      alt: "Students in Technical Workshop"
    },
    {
      src: "/lovable-uploads/a976690c-637e-49e6-94c2-db7b21fe2662.png",
      alt: "Electrical Installation Training"
    },
    {
      src: "/lovable-uploads/341f60af-f3ed-4f8d-ac31-0bbe8e148b9b.png",
      alt: "JICA Partnership Meeting"
    },
    {
      src: "/lovable-uploads/57c65f19-cd39-43ec-a6c6-0e5bcf53e813.png",
      alt: "Community Outreach Program"
    },
    {
      src: "/lovable-uploads/5e7cd338-64d6-4b98-9a1c-2d18541d4aad.png",
      alt: "Skills Training and Development"
    }
  ];

  return (
    <div className="relative">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Carousel
          plugins={[plugin.current]}
          className="w-full h-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {heroImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-screen">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 hero-gradient text-white">
        <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
            Empowering Youth Through Skills Training
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mb-10">
            Since 1976, Lodwar Vocational Training Centre has been transforming lives in Turkana County through quality technical and vocational education.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-white text-lvtc-forest-green hover:bg-lvtc-pale-green" asChild>
              <Link to="/courses">Explore Our Courses</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-lvtc-forest-green" asChild>
              <Link to="/apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
