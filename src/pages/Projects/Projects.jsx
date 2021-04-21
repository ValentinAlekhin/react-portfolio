import React, { useContext } from 'react'
import { m as motion } from 'framer-motion'

import { ThemeContext } from '../../context/ThemeState'
import { ProjectsContext } from '../../context/ProjectsState'

import ContentContainer from '../../components/Containers/ContentContainer'
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
    <ContentContainer>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
      >
        <Wrapper theme={theme}>
          {projects.map((el, i) => (
            <ProjectCard key={i} project={el} />
          ))}
        </Wrapper>
      </motion.div>
    </ContentContainer>
  )
}

export default Projects
