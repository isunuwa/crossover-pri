import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Header = () => {
  const navLinks = [
    {id: 1, title: 'Home', url: '/', target: ''},
    {id: 2, title: 'About us', url: '/about-us', target: ''},
    {id: 3, title: 'Service', url: '/service', target: ''},
    {id: 4, title: 'Projects', url: '/projects', target: ''},
    {id: 5, title: '+977 98XXXXXXXX', url: 'tel:98XXXXXXX', target: '_blank'},
    {id: 6, title: 'Contact Us', url: '/contact-us', target: ''},
  ];

  function CustomLink( {navLink}) {
    const resolvedPath = useResolvedPath(navLink.url);
    const isActive = useMatch( {path: resolvedPath.pathname, end: true});
    return (
      <li><Link to={navLink.url} target={navLink.target} className={isActive ? "active" : ""}>{navLink.title}</Link></li>
    )
  }
    
  return (
    <header className='ap-header-wrapper'>
      <div className='container'>
        <div className='ap-header row'>
          <div className='ap-logo'>
            <a href="/">
              <img src={process.env.PUBLIC_URL+'/assets/images/logo.png'} alt='logo' />
            </a>
          </div>
          <ul className='ap-links'>
            {navLinks.map( (navLink) => (
              <CustomLink navLink={navLink} key={navLink.id}/>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header