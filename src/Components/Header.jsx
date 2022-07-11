import React from 'react'
import CompLogo from './../../public/assets/images/logo.png';
const Header = () => {
  return (
    <header className='ap-header-wrapper'>
      <div className='container'>
        <div className='ap-header row'>
          <div className='ap-logo'>
            <img src={CompLogo} alt='logo ' />
          </div>
          <ul className='ap-links'>
            <li><a href='/'>Home</a></li>
            <li><a href='/about-us'>About us</a></li>
            <li><a href='/service'>Service</a></li>
            <li><a href='/projects'>Projects</a></li>
            <li><a href='/phone-no'>phone no</a></li>
            <li className='ap-btn-primary'><a href='/contact-us'>Contact no</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header