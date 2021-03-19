import React, { useContext } from 'react'
import styled from 'styled-components'

import { ThemeContext } from '../../context/ThemeState'

import { dark, light } from '../../style/themes'

const Image = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
`

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
