import React, { useContext } from 'react'
import { m as motion } from 'framer-motion'

import { ThemeContext } from '../../context/ThemeState'
import { ProjectsContext } from '../../context/ProjectsState'

import ProjectCard from '../../components/ProjectCard/ProjectCard'

import { Wrapper } from './styled'

const variants = {
  animate: {
    transition: { staggerChildren: 0.07, delayChildren: 0.3 },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
}

const Projects = () => {
  const { theme } = useContext(ThemeContext)
  const { projects } = useContext(ProjectsContext)

  return (
    <motion.div
      initial="initial"
      animate="animate"
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
