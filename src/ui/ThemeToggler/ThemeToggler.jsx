import React, { useContext } from 'react'

import { ThemeContext } from '../../context/ThemeState'

import { Wrapper, MoonIcon, SunIcon } from './styled'

const ThemeToggler = () => {
  const { toggleTheme, theme } = useContext(ThemeContext)

  return (
    <Wrapper theme={theme} onClick={toggleTheme}>
      <MoonIcon theme={theme} />
      <SunIcon theme={theme} />
    </Wrapper>
  )
}

export default ThemeToggler
