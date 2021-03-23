import React, { useContext } from 'react'

import { ThemeContext } from '../../context/ThemeState'

import { dark, light } from '../../style/themes'

import { Image } from './styled'

const transition = { duration: 0.3 }

const variants = {
  initial: {
    opacity: 0,
    transition,
  },
  animate: {
    opacity: 1,
    transition,
  },
  exit: {
    opacity: 0,
    transition,
  },
}

const App = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <Image
        animate={theme.id === dark.id ? 'animate' : 'exit'}
        variants={variants}
        src={dark.background}
        alt="Dark background"
      />
      <Image
        animate={theme.id === light.id ? 'animate' : 'exit'}
        variants={variants}
        src={light.background}
        alt="Light background"
      />
    </>
  )
}

export default App
