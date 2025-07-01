import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Courses from './pages/Courses';
import Facilities from './pages/Facilities';
import Apply from './pages/Apply';
import Contact from './pages/Contact';
import Events from './pages/Events';
import NotFound from './pages/NotFound';
import MotorVehicleMechanics from './pages/courses/MotorVehicleMechanics';
import ElectricalInstallation from './pages/courses/ElectricalInstallation';
import PlumbingTechnology from './pages/courses/PlumbingTechnology';
import InformationCommunicationTechnology from './pages/courses/InformationCommunicationTechnology';
import CarpentryAndJoinery from './pages/courses/CarpentryAndJoinery';
import HairdressingAndBeautyTherapy from './pages/courses/HairdressingAndBeautyTherapy';
import ArcWelding from './pages/courses/ArcWelding';
import { Toaster } from 'sonner';

function App() {
  return (
    <Toaster />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/motor-vehicle-mechanics" element={<MotorVehicleMechanics />} />
        <Route path="/courses/electrical-installation" element={<ElectricalInstallation />} />
        <Route path="/courses/plumbing-technology" element={<PlumbingTechnology />} />
        <Route path="/courses/information-communication-technology" element={<InformationCommunicationTechnology />} />
        <Route path="/courses/carpentry-and-joinery" element={<CarpentryAndJoinery />} />
        <Route path="/courses/hairdressing-and-beauty-therapy" element={<HairdressingAndBeautyTherapy />} />
        <Route path="/courses/arc-welding" element={<ArcWelding />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
