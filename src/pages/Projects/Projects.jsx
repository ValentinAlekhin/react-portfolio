import React from 'react'

import classes from './Projects.module.scss'

import ProjectCard from '../../components/ProjectCard/ProjectCard'

const Projects = () => {
  return (
    <div className="mainContainer">
      <div className="contentContainer">
        <div className={classes.Projects}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  )
}

export default Projects
