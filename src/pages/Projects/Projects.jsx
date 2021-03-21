import React, { useContext, useEffect } from 'react'
import lazy from 'react-lazy-with-preload'

import { ThemeContext } from '../../context/ThemeState'
import { ProjectsContext } from '../../context/ProjectsContext'

import ProjectCard from '../../components/ProjectCard/ProjectCard'

import { Wrapper } from './styled'

const Project = lazy(() => import('../Project/Project'))

const Projects = () => {
  const { theme } = useContext(ThemeContext)
  const projects = useContext(ProjectsContext)

  useEffect(() => Project.preload())

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
