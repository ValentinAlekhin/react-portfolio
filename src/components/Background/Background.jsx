import React, { useContext } from 'react'

import { ThemeContext } from '../../context/ThemeState'

import { dark, light } from '../../style/themes'

import { Image } from './styled'

const App = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      {theme.id === dark.id ? (
        <Image src={dark.background} alt="Dark background" />
      ) : null}
      {theme.id === light.id ? (
        <Image src={light.background} alt="Dark background" />
      ) : null}
    </>
  )
}

export default App
