import React, { useEffect } from 'react'
import Breadcrumb from './includes/Breadcrumb';
import projectList from './../data/ProjectList';

const Projects = () => {
  useEffect( () => {
    document.title = "Projects"
  });

  const pageId = 4;

  function ProjectItem({project}){
    return(
      <div className="col-md-4 ap-col-group">
        <a href={project.url} target="_blank">
          <div className="ap-box project-item">
            <div className="ap-overlay"></div>
            <div className="project-image">
              <img src={project.imageUrl} alt="icon" srcSet="" />
            </div>
            <div className="project-title">
              <div className="title-wrapper">
                {project.title}
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
  return (
    <div className='ap-top'>
      <Breadcrumb page={pageId}/>
      <div className="ap-project">
        <div className="ap-project-list">
          <div className="container">
            <div className="row">
              {projectList.map( (project) => (
                <ProjectItem project={project}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects