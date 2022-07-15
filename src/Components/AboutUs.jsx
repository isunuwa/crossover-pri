import React, { useEffect } from 'react'

const AboutUs = () => {
  useEffect( () => {
    document.title = "About Us"
  });
  return (
    <div className='ap-top'>
      <div className="">
        AboutUs
      </div>
    </div>
  )
}

export default AboutUs