import React, { useContext } from 'react'

import { ThemeContext } from '../../context/ThemeState'

import {
  StyledContentContainer as ContentContainer,
  Wrapper,
  ImageWrapper,
  TextWrapper,
  MainText,
  OtherText,
  ProjectsLink,
} from './styled'

import DarkPhoto from './images/dark.jpg'

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
        <ImageWrapper>
          <img src={DarkPhoto} alt="Valentin Alekhin" />
        </ImageWrapper>
        <TextWrapper>
          <MainText theme={theme}>Hi, am Valentin</MainText>
          <OtherText theme={theme}>Frontend developer</OtherText>
        </TextWrapper>

        <ProjectsLink href="/projects" theme={theme}>
          My Projects
        </ProjectsLink>
      </Wrapper>
    </ContentContainer>
  )
}

export default Home
