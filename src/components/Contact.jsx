import React, { useEffect } from 'react'
import Breadcrumb from './includes/Breadcrumb';

const Contact = () => {
  useEffect( () => {
    document.title = "Contact Us"
  });

  const pageId = 2;

  return (
    <div className='ap-top'>
      <Breadcrumb page={pageId}/>
      Contact
    </div>
  )
}

export default Contact