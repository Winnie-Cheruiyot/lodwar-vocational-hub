import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface ScrollNavigationProps {
  sections?: string[];
}

const ScrollNavigation: React.FC<ScrollNavigationProps> = ({ sections }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300);

      if (sections) {
        // Find current section based on scroll position
        const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean);
        let current = 0;
        
        sectionElements.forEach((element, index) => {
          if (element && scrollPosition >= element.offsetTop - 200) {
            current = index;
          }
        });
        
        setCurrentSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (direction: 'up' | 'down') => {
    if (!sections) {
      // Default scroll behavior when no sections are provided
      const scrollAmount = window.innerHeight * 0.8;
      const targetY = direction === 'down' 
        ? window.scrollY + scrollAmount 
        : window.scrollY - scrollAmount;
      
      window.scrollTo({
        top: Math.max(0, targetY),
        behavior: 'smooth'
      });
      return;
    }

    const newIndex = direction === 'down' 
      ? Math.min(currentSection + 1, sections.length - 1)
      : Math.max(currentSection - 1, 0);

    const targetElement = document.getElementById(sections[newIndex]);
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-2">
      <button
        onClick={() => scrollToSection('up')}
        className="bg-primary/90 hover:bg-primary text-primary-foreground p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
        aria-label="Scroll up"
      >
        <ChevronUp size={20} />
      </button>
      
      <button
        onClick={() => scrollToSection('down')}
        className="bg-primary/90 hover:bg-primary text-primary-foreground p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
        aria-label="Scroll down"
      >
        <ChevronDown size={20} />
      </button>
      
      <button
        onClick={scrollToTop}
        className="bg-secondary/90 hover:bg-secondary text-secondary-foreground p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm mt-2"
        aria-label="Scroll to top"
      >
        <ChevronUp size={16} />
      </button>
    </div>
  );
};

export default ScrollNavigation;