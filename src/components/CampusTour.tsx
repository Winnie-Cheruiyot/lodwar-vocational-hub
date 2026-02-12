import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const facilities = [
  {
    name: "Electrical Workshop",
    description: "Fully equipped with modern electrical installation and testing equipment for hands-on training.",
    image: "/lovable-uploads/a976690c-637e-49e6-94c2-db7b21fe2662.png",
    category: "Workshop"
  },
  {
    name: "Motor Vehicle Workshop",
    description: "Complete automotive workshop with diagnostic tools and vehicle maintenance equipment.",
    image: "/lovable-uploads/5e7cd338-64d6-4b98-9a1c-2d18541d4aad.png",
    category: "Workshop"
  },
  {
    name: "ICT Computer Lab",
    description: "Modern computer laboratory with internet connectivity for digital skills training.",
    image: "/lovable-uploads/f6b974c3-5320-4002-91c2-13b340ca8563.png",
    category: "Lab"
  },
  {
    name: "Catering Kitchen",
    description: "Professional-grade kitchen facility for food and beverage processing training.",
    image: "/lovable-uploads/42f358dc-b5f5-4a25-8803-2345f863dfd8.png",
    category: "Kitchen"
  },
  {
    name: "Main Assembly Hall",
    description: "Spacious hall for graduation ceremonies, seminars, and community events.",
    image: "/lovable-uploads/cd98be64-4cf1-4749-9db2-9664668388a8.png",
    category: "Hall"
  },
  {
    name: "Sports Grounds",
    description: "Open sports field for football, volleyball, athletics, and recreational activities.",
    image: "/lovable-uploads/f06c8788-3fbd-4d0b-a6c5-4cb98288772b.png",
    category: "Sports"
  }
];

const CampusTour = () => {
  const headerRef = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="scroll-fade-in text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Explore</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Take a Campus Tour
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our world-class facilities designed to give you the best practical training experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Facility List */}
          <div className="lg:col-span-2 space-y-2">
            {facilities.map((facility, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-4 group ${
                  activeIndex === i 
                    ? 'bg-primary text-primary-foreground shadow-lg' 
                    : 'bg-card hover:bg-secondary'
                }`}
                whileHover={{ x: 5 }}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                  activeIndex === i ? 'bg-primary-foreground/20' : 'bg-primary/10'
                }`}>
                  <MapPin className={`h-5 w-5 ${activeIndex === i ? 'text-primary-foreground' : 'text-primary'}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold truncate">{facility.name}</p>
                  <p className={`text-xs truncate ${activeIndex === i ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                    {facility.category}
                  </p>
                </div>
                <ChevronRight className={`h-4 w-4 shrink-0 transition-transform ${
                  activeIndex === i ? 'translate-x-1' : ''
                }`} />
              </motion.button>
            ))}
          </div>

          {/* Active Facility Preview */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
              >
                <img
                  src={facilities[activeIndex].image}
                  alt={facilities[activeIndex].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="bg-primary/80 text-primary-foreground text-xs px-3 py-1 rounded-full">
                    {facilities[activeIndex].category}
                  </span>
                  <h3 className="text-2xl font-bold mt-3">{facilities[activeIndex].name}</h3>
                  <p className="text-white/80 mt-2">{facilities[activeIndex].description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="mt-4 text-center">
              <Link 
                to="/facilities" 
                className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
              >
                View All Facilities <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusTour;
