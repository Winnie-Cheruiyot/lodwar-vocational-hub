
import React, { useEffect, useState, useRef } from 'react';
import { Users, GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const statsData = [
  {
    icon: <Calendar className="h-10 w-10" />,
    value: 50,
    suffix: '+',
    label: 'Years of Excellence',
    description: 'Established in 1976'
  },
  {
    icon: <GraduationCap className="h-10 w-10" />,
    value: 3400,
    suffix: '+',
    label: 'Alumni',
    description: 'Skilled professionals across Kenya'
  },
  {
    icon: <Users className="h-10 w-10" />,
    value: 30,
    suffix: '+',
    label: 'Expert Instructors',
    description: 'Industry professionals'
  },
  {
    icon: <BookOpen className="h-10 w-10" />,
    value: 10,
    suffix: '',
    label: 'Courses Offered',
    description: 'Diverse technical programs'
  }
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4"
        >
          Our Impact Through the Years
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-muted-foreground mb-12 max-w-xl mx-auto"
        >
          Transforming lives through quality technical education since 1976
        </motion.p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-card rounded-2xl shadow-lg p-8 text-center group hover:shadow-xl hover:bg-primary hover:text-primary-foreground transition-all duration-500"
            >
              <div className="flex justify-center mb-4 text-primary group-hover:text-primary-foreground transition-colors duration-500">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-lg font-medium mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/70 transition-colors duration-500">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
