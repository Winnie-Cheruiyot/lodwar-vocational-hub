
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/9c478535-8164-4b98-882c-273c87cc6383.png" 
              alt="Lodwar Vocational Training Centre Logo" 
              className="h-16 w-auto"
            />
            <div className="hidden md:block">
              <Link to="/" className="text-lg font-semibold text-lvtc-forest-green">
                Lodwar Vocational Training Centre
              </Link>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-lvtc-dark-gray hover:text-lvtc-forest-green transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-lvtc-dark-gray hover:text-lvtc-forest-green transition-colors">
              About
            </Link>
            <Link to="/courses" className="text-lvtc-dark-gray hover:text-lvtc-forest-green transition-colors">
              Courses
            </Link>
            <Link to="/facilities" className="text-lvtc-dark-gray hover:text-lvtc-forest-green transition-colors">
              Facilities
            </Link>
            <Link to="/contact" className="text-lvtc-dark-gray hover:text-lvtc-forest-green transition-colors">
              Contact
            </Link>
            <Button className="bg-lvtc-forest-green hover:bg-lvtc-light-green text-white" asChild>
              <Link to="/apply">Apply Now</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} className="text-lvtc-forest-green">
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
                className="text-lvtc-dark-gray hover:bg-lvtc-pale-green px-4 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-lvtc-dark-gray hover:bg-lvtc-pale-green px-4 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/courses" 
                className="text-lvtc-dark-gray hover:bg-lvtc-pale-green px-4 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
              <Link 
                to="/facilities" 
                className="text-lvtc-dark-gray hover:bg-lvtc-pale-green px-4 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Facilities
              </Link>
              <Link 
                to="/contact" 
                className="text-lvtc-dark-gray hover:bg-lvtc-pale-green px-4 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-lvtc-forest-green hover:bg-lvtc-light-green text-white w-full" asChild>
                <Link to="/apply">Apply Now</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
