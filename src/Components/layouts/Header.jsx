import React from 'react'
import CompLogo from './../../../public/assets/images/logo.png';

const Header = () => {
  const navLinks = [
    {id: 1, title: 'Home', url: '/', target: ''},
    {id: 2, title: 'About us', url: '/about-us', target: ''},
    {id: 3, title: 'Service', url: '/service', target: ''},
    {id: 4, title: 'Projects', url: '/projects', target: ''},
    {id: 5, title: '+977 98XXXXXXXX', url: 'tel:98XXXXXXX', target: '_blank'},
    {id: 6, title: 'Contact Us', url: '/contact-us', target: ''},
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
              <li key={index}><a href={navLink.url} target={navLink.target}>{navLink.title}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header