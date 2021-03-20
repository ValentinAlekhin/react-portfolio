import React, { useContext } from 'react'

import { ThemeContext } from '../../context/ThemeState'

import { Wrapper, MoonIcon, SunIcon } from './styled'

const ThemeToggler = ({ boxSize, iconSize }) => {
  const { toggleTheme, theme } = useContext(ThemeContext)

  return (
    <Wrapper theme={theme} onClick={toggleTheme} size={boxSize}>
      <MoonIcon theme={theme} size={iconSize} />
      <SunIcon theme={theme} size={iconSize} />
    </Wrapper>
  )
}

export default ThemeToggler
