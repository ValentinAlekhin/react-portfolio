import React, { useContext } from 'react'
import { motion } from 'framer-motion'

import { ThemeContext } from '../../context/ThemeState'
import { ProjectsContext } from '../../context/ProjectsContext'

import ProjectCard from '../../components/ProjectCard/ProjectCard'

import { Wrapper } from './styled'

const transition = { duration: 0.5 }

const variants = {
  initial: {
    x: '200%',
    transition: { ...transition },
  },
  enter: { x: 0, transition },
  exit: {
    x: '-200%',
    transition: { ...transition },
  },
}

const Projects = () => {
  const { theme } = useContext(ThemeContext)
  const projects = useContext(ProjectsContext)

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
      className="contentContainer"
    >
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
    </motion.div>
  )
}

export default Projects
