import React from 'react'
import CompLogo from './../../../public/assets/images/logo.png';

const Header = () => {
  const navLinks = [
    {id: 1, title: 'Home', url: '/'},
    {id: 2, title: 'About us', url: '/about-us'},
    {id: 3, title: 'Service', url: '/service'},
    {id: 4, title: 'Projects', url: '/projects'},
    {id: 5, title: '+977 98XXXXXXXX', url: '/phone-number'},
    {id: 6, title: 'Contact Us', url: '/contact-us'},
  ];
  
  return (
    <header className='ap-header-wrapper'>
      <div className='container'>
        <div className='ap-header row'>
          <div className='ap-logo'>
            <img src={CompLogo} alt='logo ' />
          </div>
          <ul className='ap-links'>
            {navLinks.map( (navLink, index) => (
              <li key={index}><a href={navLink.url}>{navLink.title}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header