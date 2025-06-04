
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-lvtc-forest-green mb-4">
            Contact Us
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Have questions about our programs? Ready to start your vocational training journey? Get in touch with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-lvtc-off-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lvtc-forest-green"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lvtc-forest-green"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lvtc-forest-green"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lvtc-forest-green"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lvtc-forest-green"
                ></textarea>
              </div>
              <Button className="bg-lvtc-forest-green hover:bg-lvtc-light-green text-white w-full">
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Information and Map */}
          <div>
            <div className="bg-lvtc-forest-green text-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p>P.O BOX 145-30500, Lodwar, Turkana County, Kenya</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p>0716911279</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p>plodwaryouth@yahoo.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="h-80 bg-gray-200 rounded-lg shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.956774289967!2d35.5977!3d3.1208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDcnMTUuMCJOIDM1wrAzNSc1MS43IkU!5e0!3m2!1sen!2ske!4v1619541245285!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.5rem' }}
                allowFullScreen
                loading="lazy"
                title="Lodwar Vocational Training Centre Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
