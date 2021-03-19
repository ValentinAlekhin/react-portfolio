import React, { useContext } from 'react'

import { ThemeContext } from '../../context/ThemeState'

import Badge from '../../ui/Badge/Badge'

import { ProjectCardLink, Status, Title, Description, Skills } from './styled'

const ProjectCard = ({ status, title, description, skills, id }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <ProjectCardLink to={`/project/${id}`} theme={theme}>
      <Status theme={theme}>{status}</Status>
      <Title theme={theme}>{title}</Title>
      <Description theme={theme}>{description}</Description>
      <Skills>
        {skills.map((el, i) => (
          <Badge key={i} text={el} />
        ))}
      </Skills>
    </ProjectCardLink>
  )
}

export default ProjectCard
