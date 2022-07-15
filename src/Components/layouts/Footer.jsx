import React from 'react'

const Footer = () => {
  const getCurrentYear = new Date().getFullYear();
  return (
    <footer className='ap-footer'>
      <div className="footer-wrapper">
        <p className='footer-content'>
          Copyright &copy; {getCurrentYear} CompanyName. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer