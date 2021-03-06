import React, { useContext } from 'react'
import loadable from '@loadable/component'

import { ThemeContext } from '../../context/ThemeState'
import { ProjectsContext } from '../../context/ProjectsState'

import ContentContainer from '../../components/Containers/ContentContainer'
import Badge from '../../ui/Badge/Badge'
import ImageGallery from '../../components/ImageGallery/ImageGallery'

import {
  Wrapper,
  ProjectHeader,
  Title,
  Links,
  Description,
  Skills,
} from './styled'

const Markdown = loadable(() =>
  import(
    /* webpackPrefetch: true, webpackChunkName: "Markdown" */ '../../components/Markdown/Markdown'
  )
)

const Video = loadable(() =>
  import(
    /* webpackPrefetch: true, webpackChunkName: "Video" */ '../../components/Video/Video'
  )
)

const transition = { duration: 0.3 }

const variants = {
  initial: {
    opacity: 0,
    transition: { ...transition },
  },
  enter: { opacity: 1, transition },
  exit: {
    opacity: 0,
    transition: { ...transition },
  },
}

const Project = ({ match }) => {
  const { theme } = useContext(ThemeContext)

  const id = parseInt(match.params.id)
  const { getProjectById } = useContext(ProjectsContext)
  const {
    title,
    description,
    skills,
    markdown,
    links,
    images,
    video,
  } = getProjectById(id)

  return (
    <ContentContainer>
      <Wrapper
        theme={theme}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
      >
        <ProjectHeader>
          <Title theme={theme}>{title}</Title>
          <Links>
            {links.map(({ href, title, type }, i) => (
              <Badge key={i} text={title} link={href} icon={type} />
            ))}
          </Links>
        </ProjectHeader>

        <Description theme={theme}>{description}</Description>

        {video ? <Video id={video} /> : null}

        {images ? <ImageGallery images={images} /> : null}

        {markdown && markdown.body ? <Markdown body={markdown.body} /> : null}

        <Skills>
          {skills.map((el, i) => (
            <Badge key={i} text={el} />
          ))}
        </Skills>
      </Wrapper>
    </ContentContainer>
  )
}

export default Project
