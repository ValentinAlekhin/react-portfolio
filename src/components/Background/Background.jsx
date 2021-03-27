import React, { useContext } from 'react'

import { ThemeContext } from '../../context/ThemeState'

import { Background } from './styled'

const App = () => {
  const { theme } = useContext(ThemeContext)

  return <Background theme={theme} />
}

export default App
