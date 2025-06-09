
import React from 'react';
import { BrowserRouter, HashRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar, About, Experience, Project, Education} from './components'
import { Thesis,
    Bci_art,
    Greencone,
    Mobot,
    Gui,
    Onedof,
    Threedof,
    Voice,
    Teledraw,
    Photobooth} from './Pages';

const Home = () => (
  <>
    <Navbar />
    <About />
    <Education />
    <Experience />
    <Project />
  </>
);
 
const App = () => {

    return (
      <Router>
      {/* // <BrowserRouter> */}

        <div className="relative z-0 bg-black-100 bg-cover bg-no-repeat bg-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/thesis" element={<Thesis />} />
            <Route path="/mobot" element={<Mobot />} />
            <Route path="/teledraw" element={<Teledraw />} />
            <Route path="/bci_art" element={<Bci_art />} />
            <Route path="/greencone" element={<Greencone />} />
            <Route path="/gui" element={<Gui />} />
            <Route path="/onedof" element={<Onedof />} />
            <Route path="/threedof" element={<Threedof />} />
            <Route path="/voice" element={<Voice />} />
            <Route path="/photobooth" element={<Photobooth />} />

          </Routes>
        </div>
      </Router>
    );
}

export default App