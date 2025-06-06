
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Navbar, About, Experience, Project, Education} from './components'

 
const App = () => {

    return(
      <BrowserRouter future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}> 
      <div className="relative z-0 bg-black-100 bg-cover bg-no-repeat bg-center">
        <Navbar />
        <About/>
        <Education/>
        <Experience/>
        <Project/>
      </div>  

      </BrowserRouter>
    );
}

export default App