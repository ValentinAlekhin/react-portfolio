import React, { useContext } from 'react'

import { ThemeContext } from '../../context/ThemeState'

import {
  Wrapper,
  ImageWrapper,
  TextWrapper,
  MainText,
  OtherText,
} from './styled'

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

const Home = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Wrapper initial="initial" animate="enter" exit="exit" variants={variants}>
      <ImageWrapper>
        {/* <img
          className={classes.image}
          // TODO: Добавить нужную фотку
          src="https://c.pxhere.com/photos/d0/f2/black_wallpaper_black_and_white_casual_dark_fashion_jacket_man_model-924824.jpg!d"
          alt="man"
        /> */}
      </ImageWrapper>
      <TextWrapper>
        <MainText theme={theme}>Frontend</MainText>
        <OtherText theme={theme}>developer</OtherText>
      </TextWrapper>
    </Wrapper>
  )
}

export default Home
