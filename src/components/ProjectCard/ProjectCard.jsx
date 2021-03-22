import React, { useContext } from 'react'

import { ThemeContext } from '../../context/ThemeState'

import Badge from '../../ui/Badge/Badge'

import {
  Wrapper,
  ProjectCardLink,
  Status,
  Title,
  Description,
  Skills,
} from './styled'

const variants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  exit: {
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const ProjectCard = ({ status, title, description, skills, id }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Wrapper
      variants={variants}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      theme={theme}
    >
      <ProjectCardLink to={`/project/${id}`}>
        <Status theme={theme}>{status}</Status>
        <Title theme={theme}>{title}</Title>
        <Description theme={theme}>{description}</Description>
        <Skills>
          {skills.map((el, i) => (
            <Badge key={i} text={el} />
          ))}
        </Skills>
      </ProjectCardLink>
    </Wrapper>
  )
}

export default ProjectCard
