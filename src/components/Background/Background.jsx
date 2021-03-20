import React, { useContext } from 'react'

import { ThemeContext } from '../../context/ThemeState'

import { dark, light } from '../../style/themes'

import { Image } from './styled'

const App = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <Image
        src={dark.background}
        alt="Dark background"
        style={{ display: theme.id === dark.id ? 'block' : 'none' }}
      />
      <Image
        src={light.background}
        alt="Dark background"
        style={{ display: theme.id === light.id ? 'block' : 'none' }}
      />
    </>
  )
}

export default App
