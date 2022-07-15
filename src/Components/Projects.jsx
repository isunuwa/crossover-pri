import React, { useEffect } from 'react'

const Projects = () => {
  useEffect( () => {
    document.title = "Projects"
  });

  return (
    <div className='ap-top'>Projects</div>
  )
}

export default Projects