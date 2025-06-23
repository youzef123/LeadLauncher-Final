// src/App.jsx
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter import
import Home from './pages/Home/Home';
import LeadGenerationAndAppointmentSettings from './components/Solutions/LeadGenerationAndAppointmentSetting';
import MedicalContainer from './components/Med/MedicalContainer';
import VirtualAssistantContainer from './components/virtual/VirtualAssistantContainer';
import LeadLauncherContainer from './components/LeadLaunchers/LeadLauncherContainer';
import AboutUsContainer from './components/AboutUs/AboutUsContainer';
import ContactUsContainer from './components/ContactUs/ContactUsContainer';
import ITContainer from './components/Industries/ITContainer';


function App() {
  return (
    // Remove the <Router> wrapper since it's already in main.jsx
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lead-generation" element={<LeadGenerationAndAppointmentSettings />} />
      <Route path="/data-profiling" element={<MedicalContainer />} />
      <Route path="/appointment-setting" element={<VirtualAssistantContainer />} />

        {/* Industries */}
      <Route path="/it-software" element={<ITContainer />} />


      <Route path="/leadlauncher" element={<LeadLauncherContainer />} />
      <Route path="/about-us" element={<AboutUsContainer />} />
      <Route path="/contact-us" element={<ContactUsContainer />} />
      {/* Add other routes here */}
    </Routes>
  );
}

export default App;