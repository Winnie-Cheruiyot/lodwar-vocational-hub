import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import ScrollNavigation from '@/components/ScrollNavigation';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const Events = () => {
  const headerRef = useScrollAnimation();
  const upcomingRef = useScrollAnimation();
  const pastRef = useScrollAnimation();
  const categoriesRef = useScrollAnimation();
  
  const sections = ['hero', 'upcoming', 'recent', 'categories'];
  
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
      title: "Tree Planting Ceremony",
      date: "2025-11-20",
      time: "9:00 AM - 1:00 PM",
      location: "LVTC Campus Grounds",
      description: "Environmental conservation initiative where students, staff, and community members participated in planting trees around the campus. This activity promotes environmental awareness and contributes to our green campus initiative.",
      category: "Environmental Conservation",
      image: "/lovable-uploads/6bf84f39-55f5-48b2-9918-9e23389a2aa4.png"
    },
    {
      title: "Annual Examinations",
      date: "2025-11-18",
      time: "8:00 AM - 5:00 PM",
      location: "Examination Halls",
      description: "Students taking their annual examinations across all departments. The examination period demonstrates our commitment to maintaining high academic standards and proper assessment of student progress.",
      category: "Academic Assessment",
      image: "/lovable-uploads/62ec05ea-e1fa-4932-87bd-021456ee87e4.png"
    },
    {
      title: "Educational Trip to Eliye Springs",
      date: "2025-11-10",
      time: "6:00 AM - 8:00 PM",
      location: "Lake Turkana - Eliye Springs",
      description: "Students and staff enjoyed an educational and recreational trip to the beautiful Eliye Springs at Lake Turkana. This trip provided students with exposure to tourism potential in the region while offering relaxation and team building opportunities.",
      category: "Educational Trip",
      image: "/lovable-uploads/f06c8788-3fbd-4d0b-a6c5-4cb98288772b.png"
    },
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
      title: "Community Tree Planting Initiative",
      date: "2025-10-25",
      time: "8:00 AM - 2:00 PM",
      location: "Various Community Sites",
      description: "Extended tree planting program where LVTC community participated in environmental conservation efforts across different locations. The initiative involved proper tree planting techniques and community engagement.",
      category: "Community Outreach",
      image: "/lovable-uploads/47c8e222-49ec-4eec-b9c0-f3c4b3c2d8f3.png"
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
      <ScrollNavigation sections={sections} />
      
      {/* Hero Section */}
      <div id="hero" className="bg-primary py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div ref={headerRef} className="scroll-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground text-center">Events & Activities</h1>
            <p className="text-lg text-primary-foreground/90 text-center mt-4 max-w-2xl mx-auto">
              Stay updated with the latest events, workshops, and activities happening at LVTC
            </p>
          </div>
        </div>
      </div>
      
      {/* Upcoming Events */}
      <section id="upcoming" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div ref={upcomingRef} className="scroll-fade-in text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Upcoming Events</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Mark your calendar for these exciting upcoming events and opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-card rounded-lg shadow-md overflow-hidden hover-lift">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                      {event.category}
                    </span>
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{new Date(event.date).toLocaleDateString('en-GB', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-card-foreground">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Past Events */}
      <section id="recent" className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div ref={pastRef} className="scroll-fade-in text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Recent Events</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Highlights from our recent events and activities that showcase our vibrant campus life.
            </p>
          </div>
          
          <div className="space-y-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-card rounded-lg shadow-md overflow-hidden hover-lift">
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
                      <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                        {event.category}
                      </span>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(event.date).toLocaleDateString('en-GB')}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-3">{event.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-4 text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-card-foreground leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Event Categories */}
      <section id="categories" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div ref={categoriesRef} className="scroll-fade-in text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Event Categories</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
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
              <div key={index} className="bg-card rounded-lg p-6 text-center hover-lift">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{category.title}</h3>
                <p className="text-card-foreground text-sm">{category.description}</p>
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
