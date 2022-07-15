import React, { useEffect } from 'react'
import Breadcrumb from './includes/Breadcrumb';

const Projects = () => {
  useEffect( () => {
    document.title = "Projects"
  });

  const pageId = 4;

  return (
    <div className='ap-top'>
      <Breadcrumb page={pageId}/>
      Projects
    </div>
  )
}

export default Projects