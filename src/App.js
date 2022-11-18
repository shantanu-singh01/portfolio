import React from 'react';
import './index.css';
import Home from './Routes/Home.js';
import About from './Routes/About.js';
import Project from './Routes/Project.js';
import Contact from './Routes/Contact.js';
import { Routes,Route } from 'react-router-dom';



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/project' element={<Project />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}

export default App;
