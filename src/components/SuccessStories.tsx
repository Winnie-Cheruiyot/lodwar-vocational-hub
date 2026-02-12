import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Briefcase, TrendingUp, Award } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const stories = [
  {
    name: "James Ekiru",
    course: "Electrical Installation",
    year: "Class of 2022",
    role: "Electrical Technician at Kenya Power",
    image: "/lovable-uploads/a976690c-637e-49e6-94c2-db7b21fe2662.png",
    quote: "LVTC gave me the hands-on skills that employers were looking for. Within 3 months of graduating, I landed my dream job.",
    journey: ["Enrolled at LVTC", "Completed internship", "Hired at Kenya Power"]
  },
  {
    name: "Grace Akai",
    course: "Fashion Design & Garment Making",
    year: "Class of 2021",
    role: "Owner, Turkana Designs Boutique",
    image: "/lovable-uploads/42f358dc-b5f5-4a25-8803-2345f863dfd8.png",
    quote: "The entrepreneurship training at LVTC inspired me to start my own business. Today I employ 5 people in my boutique.",
    journey: ["Learned at LVTC", "Started small shop", "Grew to 5 employees"]
  },
  {
    name: "Peter Lomuria",
    course: "Motor Vehicle Mechanics",
    year: "Class of 2023",
    role: "Lead Mechanic, County Government Fleet",
    image: "/lovable-uploads/5e7cd338-64d6-4b98-9a1c-2d18541d4aad.png",
    quote: "The practical workshops at LVTC prepared me for real-world challenges. I'm now maintaining an entire fleet of government vehicles.",
    journey: ["Trained at LVTC", "Apprenticeship", "Promoted to Lead"]
  }
];

const employmentStats = [
  { icon: <Briefcase className="h-6 w-6" />, value: "85%", label: "Employment Rate" },
  { icon: <TrendingUp className="h-6 w-6" />, value: "40%", label: "Start Own Business" },
  { icon: <Award className="h-6 w-6" />, value: "95%", label: "Completion Rate" },
];

const SuccessStories = () => {
  const headerRef = useScrollAnimation();

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="scroll-fade-in text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Inspiring Journeys</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Student Success Stories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our graduates are making an impact across Kenya and beyond. Here are some of their stories.
          </p>
        </div>

        {/* Employment Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {employmentStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-primary text-primary-foreground rounded-xl p-6 text-center"
            >
              <div className="flex justify-center mb-3 opacity-80">{stat.icon}</div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm opacity-80">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Story Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-4 text-white">
                  <p className="font-bold text-lg">{story.name}</p>
                  <p className="text-sm opacity-90">{story.year}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">{story.role}</span>
                </div>
                <div className="relative mb-4">
                  <Quote className="h-5 w-5 text-primary/30 absolute -top-1 -left-1" />
                  <p className="text-muted-foreground text-sm italic pl-5">{story.quote}</p>
                </div>
                {/* Journey Timeline */}
                <div className="border-t border-border pt-4">
                  <p className="text-xs font-semibold text-muted-foreground uppercase mb-3">Journey</p>
                  <div className="flex items-center gap-2">
                    {story.journey.map((step, j) => (
                      <React.Fragment key={j}>
                        <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full whitespace-nowrap">
                          {step}
                        </span>
                        {j < story.journey.length - 1 && (
                          <span className="text-muted-foreground">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
