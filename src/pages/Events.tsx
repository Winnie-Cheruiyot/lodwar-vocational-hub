import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Career Day 2025",
      date: "2025-07-15",
      time: "9:00 AM - 4:00 PM",
      location: "Main Campus",
      description: "Meet with industry professionals, explore career opportunities, and learn about job placement programs.",
      category: "Career Development"
    },
    {
      title: "Sports Day",
      date: "2025-08-20",
      time: "8:00 AM - 5:00 PM",
      location: "Sports Grounds",
      description: "Annual inter-department sports competition featuring football, volleyball, athletics, and other sporting activities.",
      category: "Sports"
    },
    {
      title: "Graduation Ceremony",
      date: "2025-11-30",
      time: "10:00 AM - 2:00 PM",
      location: "Main Hall",
      description: "Celebrating the achievements of our graduating students and their transition to the workforce.",
      category: "Academic"
    }
  ];

  const pastEvents = [
    {
      title: "JICA Visit - Water Experts Capacity Building",
      date: "2025-11-15",
      time: "10:00 AM - 3:00 PM",
      location: "Electrical & Plumbing Workshops",
      description: "Japan International Cooperation Agency (JICA) visited our electrical and plumbing workshops in preparation for rolling out capacity building programs for water experts in water companies.",
      category: "International Partnership",
      image: "/lovable-uploads/4e0ae8b4-0381-468e-aba8-03e9dc9aee18.png"
    },
    {
      title: "Guidance and Counselling Workshop",
      date: "2025-10-10",
      time: "9:00 AM - 4:00 PM",
      location: "Conference Hall",
      description: "Professional development workshop for students on career guidance, personal development, and mental health awareness.",
      category: "Student Welfare",
      image: "/lovable-uploads/03c0b127-87c5-4479-80f2-8c203cba01b4.png"
    },
    {
      title: "Marketing and Outreach Program",
      date: "2025-09-25",
      time: "8:00 AM - 6:00 PM",
      location: "Community Centers",
      description: "Students and staff engaged in community outreach to promote vocational training opportunities and showcase our programs.",
      category: "Community Outreach",
      image: "/lovable-uploads/530be8c9-54e2-41af-99c4-401b050de5ef.png"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-lvtc-forest-green py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">Events & Activities</h1>
          <p className="text-lg text-white/90 text-center mt-4 max-w-2xl mx-auto">
            Stay updated with the latest events, workshops, and activities happening at LVTC
          </p>
        </div>
      </div>
      
      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lvtc-forest-green mb-4">Upcoming Events</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Mark your calendar for these exciting upcoming events and opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-lvtc-off-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-lvtc-forest-green text-white px-3 py-1 rounded-full text-sm">
                      {event.category}
                    </span>
                    <Calendar className="h-5 w-5 text-lvtc-forest-green" />
                  </div>
                  <h3 className="text-xl font-bold text-lvtc-forest-green mb-3">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{new Date(event.date).toLocaleDateString('en-GB', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Past Events */}
      <section className="py-16 bg-lvtc-off-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lvtc-forest-green mb-4">Recent Events</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Highlights from our recent events and activities that showcase our vibrant campus life.
            </p>
          </div>
          
          <div className="space-y-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {event.image && (
                    <div className="lg:col-span-1">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                    </div>
                  )}
                  <div className={`p-6 ${event.image ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-lvtc-pale-green text-lvtc-forest-green px-3 py-1 rounded-full text-sm">
                        {event.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(event.date).toLocaleDateString('en-GB')}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-lvtc-forest-green mb-3">{event.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Event Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lvtc-forest-green mb-4">Event Categories</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our diverse range of events caters to different aspects of student development and community engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Academic Events",
                description: "Graduations, orientations, and academic workshops",
                icon: "🎓"
              },
              {
                title: "Career Development",
                description: "Career fairs, industry visits, and professional workshops",
                icon: "💼"
              },
              {
                title: "Sports & Recreation",
                description: "Sports competitions, tournaments, and recreational activities",
                icon: "🏆"
              },
              {
                title: "Community Outreach",
                description: "Marketing programs, community service, and partnerships",
                icon: "🤝"
              }
            ].map((category, index) => (
              <div key={index} className="bg-lvtc-off-white rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-bold text-lvtc-forest-green mb-2">{category.title}</h3>
                <p className="text-gray-700 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Events;
