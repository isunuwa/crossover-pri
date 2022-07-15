import React, { Component } from 'react'
import Header from './Components/includes/Header';
import Footer from './Components/includes/Footer';
import Main from './Components/Main';
import AboutUs from './Components/AboutUs';

const App = () => {
  let Component;
  // route
  switch (window.location.pathname) {
    case '/':
      Component = Main;
      break;
    case '/about-us':
      Component = AboutUs;
      break;
  }

  return (

    <div className='ap-wide'>
      <Header />
      <Component />
      <Footer />
    </div>
  )
}

export default App
