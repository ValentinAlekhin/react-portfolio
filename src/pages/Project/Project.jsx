import React, { useContext } from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

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
  const { title, description, skills, markdown, links, images } = useContext(
    ProjectsContext
  ).find(el => el.id === id)

  return (
    <div className="contentContainer">
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

        {images ? (
          <ImageGallery items={images} lazyLoad={true} showPlayButton={false} />
        ) : null}

        {markdown ? <Markdown url={markdown} /> : null}

        <Skills>
          {skills.map((el, i) => (
            <Badge key={i} text={el} />
          ))}
        </Skills>
      </Wrapper>
    </div>
  )
}

export default Project
