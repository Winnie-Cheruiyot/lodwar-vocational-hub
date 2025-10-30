import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'sw' | 'tu';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      courses: 'Courses',
      facilities: 'Facilities',
      events: 'Events',
      tenders: 'Tenders',
      apply: 'Apply',
      contact: 'Contact'
    },
    hero: {
      title: 'Empowering Future Skilled Professionals',
      subtitle: 'Excellence in Technical and Vocational Education',
      cta: 'Explore Courses',
      apply: 'Apply Now'
    },
    stats: {
      graduates: 'Graduates',
      courses: 'Courses',
      instructors: 'Instructors',
      placement: 'Job Placement'
    },
    courses: {
      title: 'Our Training Programs',
      subtitle: 'Choose from our wide range of technical and vocational courses designed to meet industry demands',
      viewAll: 'View All Courses',
      artisan: 'Artisan Certificate',
      craft: 'Craft Certificate',
      diploma: 'Diploma',
      filterAll: 'All Courses',
      duration: 'Duration',
      level: 'Level',
      learnMore: 'Learn More'
    },
    testimonials: {
      title: 'Student Success Stories',
      subtitle: 'Hear from our graduates who have transformed their lives through quality education'
    },
    gallery: {
      title: 'Campus Life & Facilities',
      subtitle: 'Take a virtual tour of our modern training facilities and vibrant campus life'
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'We are here to answer your questions and provide information about our programs',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      message: 'Your Message',
      send: 'Send Message',
      address: 'Address',
      hours: 'Working Hours',
      weekdays: 'Monday - Friday: 8:00 AM - 5:00 PM',
      saturday: 'Saturday: 8:00 AM - 12:00 PM'
    },
    cta: {
      title: 'Ready to Start Your Journey?',
      subtitle: 'Join thousands of students who have transformed their lives through quality technical education',
      button: 'Apply Now'
    },
    footer: {
      about: 'About',
      aboutText: 'Empowering communities through quality technical and vocational education since establishment.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Info'
    },
    chat: {
      title: 'Live Support',
      subtitle: "We're here to help",
      welcome: '👋 Welcome! How can we help you today?',
      prompt: "Send us a message and we'll respond as soon as possible.",
      name: 'Your name',
      email: 'Your email',
      message: 'Type your message...',
      send: 'Send',
      missingInfo: 'Missing Information',
      fillFields: 'Please fill in all fields',
      sent: 'Message Sent!',
      response: "We'll get back to you as soon as possible."
    }
  },
  sw: {
    nav: {
      home: 'Nyumbani',
      about: 'Kuhusu Sisi',
      courses: 'Kozi',
      facilities: 'Vifaa',
      events: 'Matukio',
      tenders: 'Zabuni',
      apply: 'Omba',
      contact: 'Wasiliana'
    },
    hero: {
      title: 'Kuwezesha Wataalamu wa Ufundi wa Kesho',
      subtitle: 'Ubora katika Elimu ya Kiufundi na Ufundi',
      cta: 'Gundua Kozi',
      apply: 'Omba Sasa'
    },
    stats: {
      graduates: 'Wahitimu',
      courses: 'Kozi',
      instructors: 'Wakufunzi',
      placement: 'Uwekaji Kazi'
    },
    courses: {
      title: 'Programu Zetu za Mafunzo',
      subtitle: 'Chagua kutoka kwa safu yetu pana ya kozi za kiufundi zilizoundwa kukidhi mahitaji ya tasnia',
      viewAll: 'Tazama Kozi Zote',
      artisan: 'Cheti cha Fundi',
      craft: 'Cheti cha Ufundi',
      diploma: 'Diploma',
      filterAll: 'Kozi Zote',
      duration: 'Muda',
      level: 'Kiwango',
      learnMore: 'Jifunze Zaidi'
    },
    testimonials: {
      title: 'Hadithi za Mafanikio ya Wanafunzi',
      subtitle: 'Sikia kutoka kwa wahitimu wetu ambao wamebadilisha maisha yao kupitia elimu bora'
    },
    gallery: {
      title: 'Maisha ya Kambi na Vifaa',
      subtitle: 'Chukua ziara ya mtandao wa vifaa vyetu vya kisasa vya mafunzo na maisha ya kambi yenye nguvu'
    },
    contact: {
      title: 'Wasiliana Nasi',
      subtitle: 'Tuko hapa kujibu maswali yako na kutoa maelezo kuhusu programu zetu',
      name: 'Jina Kamili',
      email: 'Barua Pepe',
      phone: 'Nambari ya Simu',
      message: 'Ujumbe Wako',
      send: 'Tuma Ujumbe',
      address: 'Anwani',
      hours: 'Saa za Kazi',
      weekdays: 'Jumatatu - Ijumaa: 8:00 Asubuhi - 5:00 Jioni',
      saturday: 'Jumamosi: 8:00 Asubuhi - 12:00 Mchana'
    },
    cta: {
      title: 'Uko Tayari Kuanza Safari Yako?',
      subtitle: 'Jiunge na maelfu ya wanafunzi ambao wamebadilisha maisha yao kupitia elimu bora ya kiufundi',
      button: 'Omba Sasa'
    },
    footer: {
      about: 'Kuhusu',
      aboutText: 'Kuwezesha jamii kupitia elimu bora ya kiufundi na ufundi tangu kuanzishwa.',
      quickLinks: 'Viungo vya Haraka',
      contactInfo: 'Maelezo ya Mawasiliano'
    },
    chat: {
      title: 'Msaada wa Moja kwa Moja',
      subtitle: 'Tuko hapa kusaidia',
      welcome: '👋 Karibu! Tunaweza kukusaidia vipi leo?',
      prompt: 'Tutumie ujumbe na tutajibu haraka iwezekanavyo.',
      name: 'Jina lako',
      email: 'Barua pepe yako',
      message: 'Andika ujumbe wako...',
      send: 'Tuma',
      missingInfo: 'Maelezo Yanakosekana',
      fillFields: 'Tafadhali jaza sehemu zote',
      sent: 'Ujumbe Umetumwa!',
      response: 'Tutawasiliana nawe haraka iwezekanavyo.'
    }
  },
  tu: {
    nav: {
      home: 'Akiriket',
      about: 'Kebotio Nguna',
      courses: 'Ngikemuj',
      facilities: 'Ngitaruko',
      events: 'Ngikirikou',
      tenders: 'Ngisub',
      apply: 'Iyamakini',
      contact: 'Ilosi'
    },
    hero: {
      title: 'Kiyamakinin Ngitunga Ngikemuj Nawoton',
      subtitle: 'Alomit Ngisub Nebo Ngikemuj Nabu',
      cta: 'Kilok Ngikemuj',
      apply: 'Iyamakini Abu'
    },
    stats: {
      graduates: 'Ngimalakin',
      courses: 'Ngikemuj',
      instructors: 'Ngikemuj Nabu',
      placement: 'Kibany Ngikeriok'
    },
    courses: {
      title: 'Ngikemuj Naitu Nabu',
      subtitle: 'Kioro keda ngikemuj naitu naruk nebo kidiwakinit ngitepes nabo',
      viewAll: 'Kilok Ngikemuj Kotela',
      artisan: 'Esukul Ekemuj Nabu',
      craft: 'Esukul Ekemuj',
      diploma: 'Diploma',
      filterAll: 'Ngikemuj Kotela',
      duration: 'Erai',
      level: 'Emachar',
      learnMore: 'Kimuj Towoi'
    },
    testimonials: {
      title: 'Ngikerioku Alomita Nebo Ngidwe',
      subtitle: 'Kingor keda ngidwe nguna namalak nguna kibali ngimor nguna kibo ngikemuj alomita'
    },
    gallery: {
      title: 'Edung Ekemuj Nebo Ngitaruko',
      subtitle: 'Kiyal ngitaruko naitu nawoton nebo edung ekemuj naidikas'
    },
    contact: {
      title: 'Ilosi Nguna',
      subtitle: 'Abu nguna kisuban ngimojong inio nebo kiweny ngitunga kibo ngikemuj naitu',
      name: 'Ekile Kotela',
      email: 'Email',
      phone: 'Namba Esimu',
      message: 'Ngitunga Inio',
      send: 'Kiruk Ngitunga',
      address: 'Akiriket',
      hours: 'Eparan Akeriok',
      weekdays: 'Lomoe - Lomorot: 8:00 Tapaata - 5:00 Lokuon',
      saturday: 'Lomokipiri: 8:00 Tapaata - 12:00 Lokakol'
    },
    cta: {
      title: 'Kiboto Kiyamakini Ekile?',
      subtitle: 'Imukunye kede ngidwe lopuke namalak nguna kibali ngimor nguna kibo ngikemuj nawoton nabu',
      button: 'Iyamakini Abu'
    },
    footer: {
      about: 'Kebotio',
      aboutText: 'Kiyamakinin ngimojong kibo ngikemuj alomita nabu nebo ufundi keder kibany.',
      quickLinks: 'Ngidolo Amukat',
      contactInfo: 'Ngitunga Ilosi'
    },
    chat: {
      title: 'Kibany Edung Abu',
      subtitle: 'Abu nguna kibany',
      welcome: '👋 Itunganan eyei! Kisubei kiyamakini eyei?',
      prompt: 'Kirukite ngitunga nguna kibany edokete abu kidimat.',
      name: 'Ekile inio',
      email: 'Email inio',
      message: 'Kiruk ngitunga inio...',
      send: 'Kiruk',
      missingInfo: 'Ngitunga Akonyo',
      fillFields: 'Etilia ngitunga kotela',
      sent: 'Ngitunga Aakiruk!',
      response: 'Kibany edokete inio kidimat.'
    }
  }
};
