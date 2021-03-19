import React, { useContext } from 'react'

import { ThemeContext } from '../../context/ThemeState'
import { ProjectsContext } from '../../context/ProjectsContext'

import Badge from '../../ui/Badge/Badge'
import Markdown from '../../components/Markdown/Markdown'

import {
  Wrapper,
  ProjectHeader,
  Title,
  Links,
  Description,
  Skills,
} from './styled'

const Project = ({ match }) => {
  const { theme } = useContext(ThemeContext)

  const id = parseInt(match.params.id)
  const { title, description, skills, markdown, links } = useContext(
    ProjectsContext
  ).find(el => el.id === id)

  return (
    <Wrapper theme={theme}>
      <ProjectHeader>
        <Title theme={theme}>{title}</Title>
        <Links>
          {links.map(({ href, title }, i) => (
            <Badge key={i} text={title} link={href} />
          ))}
        </Links>
      </ProjectHeader>

      <Description theme={theme}>{description}</Description>

      {markdown ? <Markdown url={markdown} /> : null}

      <Skills>
        {skills.map((el, i) => (
          <Badge key={i} text={el} />
        ))}
      </Skills>
    </Wrapper>
  )
}

export default Project
