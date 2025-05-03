
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-lvtc-forest-green text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/9c478535-8164-4b98-882c-273c87cc6383.png" 
                alt="Lodwar Vocational Training Centre Logo" 
                className="h-12 w-auto bg-white rounded-full p-1 mr-3"
              />
              <h3 className="text-xl font-bold">LVTC</h3>
            </div>
            <p className="mb-4">
              Established in 1976, Lodwar Vocational Training Centre has been empowering youth in Turkana County with practical skills for self-reliance for over 45 years.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-white hover:text-lvtc-pale-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-lvtc-pale-green transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-lvtc-pale-green transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-lvtc-pale-green transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-lvtc-pale-green transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-lvtc-pale-green transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-lvtc-pale-green transition-colors">Courses</Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-lvtc-pale-green transition-colors">Facilities</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-lvtc-pale-green transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/apply" className="hover:text-lvtc-pale-green transition-colors">Apply Now</Link>
              </li>
            </ul>
          </div>
          
          {/* Courses */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses/motor-vehicle-mechanics" className="hover:text-lvtc-pale-green transition-colors">Motor Vehicle Mechanics</Link>
              </li>
              <li>
                <Link to="/courses/electrical-installation" className="hover:text-lvtc-pale-green transition-colors">Electrical Installation</Link>
              </li>
              <li>
                <Link to="/courses/plumbing-technology" className="hover:text-lvtc-pale-green transition-colors">Plumbing Technology</Link>
              </li>
              <li>
                <Link to="/courses/ict" className="hover:text-lvtc-pale-green transition-colors">Information Communication Technology</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-lvtc-pale-green transition-colors">View All Courses →</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 mt-0.5" />
                <span>P.O BOX 145-30500, Lodwar, Turkana County, Kenya</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <span>0778777886</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <a href="mailto:plodwaryouth@yahoo.com" className="hover:text-lvtc-pale-green transition-colors">
                  plodwaryouth@yahoo.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-600 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Lodwar Vocational Training Centre. All rights reserved.</p>
          <p className="mt-2 text-sm">Towards Excellence in Skills Training</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
