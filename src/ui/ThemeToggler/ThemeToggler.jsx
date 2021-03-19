import React, { useContext } from 'react'

import { ThemeContext } from '../../context/ThemeState'

import { Button } from './styled'

const ThemeToggler = () => {
  const { toggleTheme } = useContext(ThemeContext)

  return <Button onClick={toggleTheme}>Toggle</Button>
}

export default ThemeToggler
