import React, { useState } from 'react';
import { X, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const announcements = [
  { text: "📢 January 2026 Intake Now Open — Apply Today!", link: "/apply" },
  { text: "🎓 Graduation Ceremony — November 28, 2026", link: "/events" },
  { text: "🌍 World Environment Day Activities — June 5, 2026", link: "/events" },
  { text: "⚽ Annual Sports Day — August 20, 2026", link: "/events" },
  { text: "💼 Career Guidance & Counselling — March 15, 2026", link: "/events" },
];

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-primary-foreground relative z-50 overflow-hidden">
      <div className="container mx-auto px-4 py-2 flex items-center justify-center gap-3">
        <Megaphone className="h-4 w-4 shrink-0 animate-pulse" />
        <div className="overflow-hidden h-6 relative flex-1 max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Link 
                to={announcements[currentIndex].link}
                className="text-sm font-medium hover:underline truncate"
              >
                {announcements[currentIndex].text}
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="shrink-0 hover:opacity-70 transition-opacity"
          aria-label="Close announcements"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
