import React, { useContext } from 'react'

import { ThemeContext } from '../../context/ThemeState'
import { ProjectsContext } from '../../context/ProjectsContext'

import ProjectCard from '../../components/ProjectCard/ProjectCard'

import { Wrapper } from './styled'

const Projects = () => {
  const { theme } = useContext(ThemeContext)
  const projects = useContext(ProjectsContext)

  return (
    <div className="contentContainer">
      <Wrapper theme={theme}>
        {projects.map((el, i) => (
          <ProjectCard
            key={i}
            title={el.title}
            description={el.shortDescription}
            status={el.status}
            skills={el.skills}
            id={el.id}
          />
        ))}
      </Wrapper>
    </div>
  )
}

export default Projects
