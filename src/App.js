import React from 'react'
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

import Main from './components/Main';
import AboutUs from './components/AboutUs';
import Service from './components/Service';
import Project from './components/Project';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';
 
const App = () => {
  return (

    <div className='ap-wide'>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/contact-us" element={<Contact />}/>
        <Route path="/projects" element={<Project />}/>
        <Route path="/service" element={<Service />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
