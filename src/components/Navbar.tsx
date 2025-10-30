
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageSelector from '@/components/LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/9c478535-8164-4b98-882c-273c87cc6383.png" 
              alt="Lodwar Vocational Training Centre Logo" 
              className="h-16 w-auto"
            />
            <div className="hidden md:block">
              <Link to="/" className="text-lg font-semibold text-primary">
                Lodwar Vocational Training Centre
              </Link>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              {t('nav.home')}
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              {t('nav.about')}
            </Link>
            <Link to="/courses" className="text-foreground hover:text-primary transition-colors">
              {t('nav.courses')}
            </Link>
            <Link to="/facilities" className="text-foreground hover:text-primary transition-colors">
              {t('nav.facilities')}
            </Link>
            <Link to="/events" className="text-foreground hover:text-primary transition-colors">
              {t('nav.events')}
            </Link>
            <Link to="/tenders" className="text-foreground hover:text-primary transition-colors">
              {t('nav.tenders')}
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              {t('nav.contact')}
            </Link>
            <LanguageSelector />
            <ThemeToggle />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link to="/apply">{t('nav.apply')}</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector />
            <ThemeToggle />
            <Button variant="ghost" onClick={toggleMenu} className="text-primary">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-foreground hover:bg-muted px-4 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:bg-muted px-4 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link 
                to="/courses" 
                className="text-foreground hover:bg-muted px-4 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.courses')}
              </Link>
              <Link 
                to="/facilities" 
                className="text-foreground hover:bg-muted px-4 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.facilities')}
              </Link>
              <Link 
                to="/events" 
                className="text-foreground hover:bg-muted px-4 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.events')}
              </Link>
              <Link 
                to="/tenders" 
                className="text-foreground hover:bg-muted px-4 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.tenders')}
              </Link>
              <Link 
                to="/contact" 
                className="text-foreground hover:bg-muted px-4 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full" asChild>
                <Link to="/apply">{t('nav.apply')}</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
