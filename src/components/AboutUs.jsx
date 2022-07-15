import React, { useEffect } from 'react'
import Breadcrumb from './includes/Breadcrumb';

const AboutUs = () => {
  useEffect( () => {
    document.title = "About Us"
  });
  const pageId = 1;

  return (
    <div className='ap-top'>
      <Breadcrumb page={pageId}/>
      <div className="container">

        <div className="">
          AboutUs
        </div>
      </div>
    </div>
  )
}

export default AboutUs