import React, { useEffect } from 'react'
import Breadcrumb from './includes/Breadcrumb';
const AboutUs = () => {
  useEffect( () => {
    document.title = "About Us"
  });
  return (
    <div className='ap-top'>
      <div className="container">
        <div className="ap-breadcrumb">
          <Breadcrumb />
        </div>
        <div className="">
          AboutUs
        </div>
      </div>
    </div>
  )
}

export default AboutUs