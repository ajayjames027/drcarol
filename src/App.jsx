import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import QualificationExperience from './pages/QualificationExperience';
import SpecialTalks from './pages/SpecialTalks';
import Patents from './pages/Patents';
import PaperPublications from './pages/PaperPublications';
import ConferenceProceedings from './pages/ConferenceProceedings';
import PaperPublications2 from './pages/PaperPublications2';
import ConferencesAttended from './pages/ConferencesAttended';
import WorkshopsAttended from './pages/WorkshopsAttended';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/qualification-experience" element={<QualificationExperience />} />
            <Route path="/special-talks" element={<SpecialTalks />} />
            <Route path="/patents" element={<Patents />} />
            
            {/* Publications */}
            <Route path="/publications/paper" element={<PaperPublications />} />
            <Route path="/publications/proceedings" element={<ConferenceProceedings />} />
            <Route path="/publications/paper2" element={<PaperPublications2 />} />
            
            {/* Conference */}
            <Route path="/conference/attended" element={<ConferencesAttended />} />
            <Route path="/conference/workshops" element={<WorkshopsAttended />} />
            
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
