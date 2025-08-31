import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { GraduationCap, Users, Book, Target, Award, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section with Visual Elements */}
      <div className="relative min-h-[70vh] bg-gradient-to-br from-primary via-primary/90 to-primary/70 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent"></div>
        
        {/* Decorative Shapes */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary-foreground/10 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary-foreground/20 rounded-lg rotate-45"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary-foreground/15 rounded-full"></div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl">
            <div className="inline-flex items-center bg-primary-foreground/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <span className="text-primary-foreground text-sm font-medium">Transforming Lives Since 1976</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Empowering
              <span className="block text-accent-foreground bg-primary-foreground px-4 py-2 rounded-lg inline-block mt-2">
                Tomorrow's Leaders
              </span>
            </h1>
            
            <p className="text-xl text-primary-foreground/90 max-w-2xl mb-8 leading-relaxed">
              At Lodwar Vocational Training Centre, we don't just teach skills – we build futures, create opportunities, and transform communities through innovative technical education.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-primary-foreground/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-primary-foreground">3,400+</div>
                <div className="text-primary-foreground/80 text-sm">Graduates</div>
              </div>
              <div className="bg-primary-foreground/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-primary-foreground">47+</div>
                <div className="text-primary-foreground/80 text-sm">Years of Excellence</div>
              </div>
              <div className="bg-primary-foreground/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-primary-foreground">10+</div>
                <div className="text-primary-foreground/80 text-sm">Training Programs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-6">
              <span className="text-primary text-sm font-medium">Our Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">A Legacy of Excellence</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From humble beginnings to becoming the region's premier vocational training institution
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-primary/20 rounded-full"></div>
                <div className="pl-8">
                  <div className="inline-block bg-primary text-primary-foreground rounded-full px-4 py-1 text-sm font-medium mb-4">
                    1976 - Foundation
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">The Beginning</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Established with a vision to equip the youth of Turkana County with practical skills for self-reliance. What began as a small training facility would grow into something extraordinary.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary/60 to-primary/10 rounded-full"></div>
                <div className="pl-8">
                  <div className="inline-block bg-primary/80 text-primary-foreground rounded-full px-4 py-1 text-sm font-medium mb-4">
                    1990s - Growth
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Expansion Era</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Continuous adaptation to meet changing job market demands and industry needs, establishing new programs and modernizing our facilities.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="pl-8">
                  <div className="inline-block bg-primary/60 text-primary-foreground rounded-full px-4 py-1 text-sm font-medium mb-4">
                    Today - Excellence
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Regional Leader</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A beacon of hope and opportunity, having trained over 3,400 skilled professionals making significant contributions to the economy.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 rounded-3xl"></div>
              <img 
                src="/lovable-uploads/ed50c869-f78c-4610-9ee0-11723df3f57b.png"
                alt="LVTC Campus Evolution" 
                className="relative rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-primary">47+</div>
                <div className="text-muted-foreground text-sm">Years of Impact</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-6">
                <span className="text-primary text-sm font-medium">Our Purpose</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Mission & Vision</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Guided by purpose, driven by excellence
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Mission Card */}
              <div className="group relative bg-gradient-to-br from-card to-card/80 rounded-3xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl -m-4"></div>
                
                <div className="relative">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-6">Our Mission</h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To provide quality technical and vocational training that empowers youth with practical skills, fostering self-reliance and contributing to the socio-economic development of Turkana County and Kenya at large.
                  </p>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Quality Training</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Youth Empowerment</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Self-Reliance</span>
                  </div>
                </div>
              </div>
              
              {/* Vision Card */}
              <div className="group relative bg-gradient-to-br from-card to-card/80 rounded-3xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl -m-4"></div>
                
                <div className="relative">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-6">Our Vision</h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To be the leading vocational training centre in Kenya, known for excellence in skills development, innovation, and producing competent graduates who meet industry standards and drive economic growth.
                  </p>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Excellence</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Innovation</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Industry Standards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-6">
                <span className="text-primary text-sm font-medium">What Drives Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide every decision and shape our culture
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Excellence",
                  description: "We strive for the highest standards in all our training programs and services.",
                  icon: Award,
                  color: "from-blue-500/20 to-blue-600/20",
                  iconBg: "bg-blue-500/10",
                  iconColor: "text-blue-600"
                },
                {
                  title: "Innovation",
                  description: "We embrace new technologies and teaching methods to stay relevant in a changing world.",
                  icon: Lightbulb,
                  color: "from-amber-500/20 to-amber-600/20",
                  iconBg: "bg-amber-500/10",
                  iconColor: "text-amber-600"
                },
                {
                  title: "Integrity",
                  description: "We uphold honesty, transparency and ethical practices in all our operations.",
                  icon: Heart,
                  color: "from-rose-500/20 to-rose-600/20",
                  iconBg: "bg-rose-500/10",
                  iconColor: "text-rose-600"
                },
                {
                  title: "Inclusivity",
                  description: "We provide equal opportunities for all, regardless of background or circumstances.",
                  icon: Users,
                  color: "from-emerald-500/20 to-emerald-600/20",
                  iconBg: "bg-emerald-500/10",
                  iconColor: "text-emerald-600"
                }
              ].map((value, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-2xl transition-all duration-300 group-hover:scale-105`}></div>
                  <div className="relative bg-card/90 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-lg transition-all duration-300 group-hover:shadow-xl">
                    <div className={`${value.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                      <value.icon className={`h-7 w-7 ${value.iconColor}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    
                    <div className="mt-4 w-full h-1 bg-border rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${value.color.replace('/20', '')} rounded-full transition-all duration-1000 group-hover:w-full w-0`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-6">
                <span className="text-primary text-sm font-medium">Meet the Team</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Leadership</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experienced professionals dedicated to excellence in technical education and student success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Mr. Abraham Chegem",
                  position: "Principal",
                  bio: "With over 10 years in technical education, Mr. Chegem brings visionary leadership and strategic direction to LVTC's continued excellence.",
                  experience: "10+ Years"
                },
                {
                  name: "Mr. Haron Aiyen",
                  position: "Deputy Principal",
                  bio: "Mr. Aiyen expertly manages day-to-day operations and facilities, ensuring optimal learning environments for all students.",
                  experience: "8+ Years"
                },
                {
                  name: "Ms. Winnie Cheruiyot",
                  position: "Director of Studies (D.O.S)",
                  bio: "Ms. Cheruiyot oversees curriculum development and maintains the highest teaching standards across all programs.",
                  image: "/lovable-uploads/4892ed0b-f5b6-4678-806f-e21cfd28b218.png",
                  experience: "12+ Years"
                }
              ].map((member, index) => (
                <div key={index} className="group relative">
                  <div className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                    {/* Profile Image Section */}
                    <div className="relative h-64 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center overflow-hidden">
                      {member.image ? (
                        <>
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </>
                      ) : (
                        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                          <Users className="h-12 w-12 text-primary" />
                        </div>
                      )}
                      
                      {/* Experience Badge */}
                      <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1 border border-border">
                        <span className="text-xs font-medium text-foreground">{member.experience}</span>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-4">{member.position}</p>
                      <p className="text-muted-foreground leading-relaxed text-sm">{member.bio}</p>
                      
                      {/* Decorative Bottom Line */}
                      <div className="mt-6 w-full h-1 bg-border rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full transition-all duration-1000 group-hover:w-full w-1/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default About;
