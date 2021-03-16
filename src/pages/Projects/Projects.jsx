import React, { useContext } from 'react'

import classes from './Projects.module.scss'

import { ProjectsContext } from '../../context/ProjectsContext'

import ProjectCard from '../../components/ProjectCard/ProjectCard'

const Projects = () => {
  const projects = useContext(ProjectsContext)
  return (
    <div className="mainContainer">
      <div className="contentContainer">
        <div className={classes.Projects}>
          {projects.map((el, i) => (
            <ProjectCard
              key={i}
              title={el.title}
              description={el.shortDescription}
              status={el.status}
              skills={el.skills}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
