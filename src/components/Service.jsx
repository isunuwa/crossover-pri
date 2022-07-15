import React, { useEffect } from 'react'
import Breadcrumb from './includes/Breadcrumb';

const Service = () => {
  useEffect( () => {
    document.title = "Servies"
  });

  const pageId = 3;

  return (
    <div className='ap-top'>
      <Breadcrumb page={pageId}/>
      Service
    </div>
  )
}

export default Service