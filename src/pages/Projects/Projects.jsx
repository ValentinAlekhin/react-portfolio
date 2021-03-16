import React from 'react'

import classes from './Projects.module.scss'

import ProjectCard from '../../components/ProjectCard/ProjectCard'

const Projects = () => {
  return (
    <div className="mainContainer">
      <div className="contentContainer">
        <div className={classes.Projects}>
          <ProjectCard
            title="Ника Дмитриева NEW"
            description="Это что такое типа того но если вдруг что то норм Это что такое типа того но если вдруг что то норм"
            status="in work"
            skills={['js', 'React', 'Redux', 'Express', 'MongoDB']}
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
