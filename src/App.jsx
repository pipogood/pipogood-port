
import React from 'react';
import { BrowserRouter, HashRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar, About, Experience, Project, Education} from './components'
import Page2 from './Pages/Page2.jsx';

const Home = () => (
  <>
    <Navbar />
    {/* <About />
    <Education />
    <Experience />
    <Project /> */}
  </>
);
 
const App = () => {

    return (
      <BrowserRouter basename='/pipogood-port'>
        <div className="relative z-0 bg-black-100 bg-cover bg-no-repeat bg-center">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/page2" element={<Page2 />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    );
}

export default App