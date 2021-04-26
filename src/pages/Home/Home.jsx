import React, { useContext } from 'react'

import { ThemeContext } from '../../context/ThemeState'

import {
  StyledContentContainer as ContentContainer,
  Wrapper,
  ImageWrapper,
  TextWrapper,
  MainText,
  OtherText,
  LinkWrapper,
  ProjectsLink,
} from './styled'

import DarkJpg from './images/dark.jpg'
import DarkWebp from './images/dark.webp'

const transition = { duration: 0.3 }

const variants = {
  initial: {
    opacity: 0,
    transition: { ...transition },
  },
  animate: { opacity: 1, transition },
  exit: {
    opacity: 0,
    transition: { ...transition },
  },
}

const Home = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <ContentContainer>
      <Wrapper
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        theme={theme}
      >
        <ImageWrapper theme={theme}>
          <picture>
            <source srcSet={DarkWebp} type="image/webp" />
            <img src={DarkJpg} alt="Valentin Alekhin" />
          </picture>
        </ImageWrapper>
        <TextWrapper>
          <MainText theme={theme}>Hi, I'm Valentin</MainText>
          <OtherText theme={theme}>Frontend developer</OtherText>

          <LinkWrapper
            theme={theme}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            <ProjectsLink to="/projects" theme={theme}>
              My Projects
            </ProjectsLink>
          </LinkWrapper>
        </TextWrapper>
      </Wrapper>
    </ContentContainer>
  )
}

export default Home
