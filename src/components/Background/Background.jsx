import React, { useContext } from 'react'

import { ThemeContext } from '../../context/ThemeState'

import useWindowSize from '../../hooks/useWindowSize'

import { Background, Wrapper } from './styled'

const App = () => {
  const { theme } = useContext(ThemeContext)
  const { width, height } = useWindowSize()
  const orientation = width / height > 1.5 ? 'hor' : 'vert'

  return (
    <Wrapper>
      <Background theme={theme} orient={orientation} />
    </Wrapper>
  )
}

export default App
