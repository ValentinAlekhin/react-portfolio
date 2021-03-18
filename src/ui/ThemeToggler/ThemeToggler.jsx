import React, { useContext } from 'react'
import styled from 'styled-components'

import { ThemeContext } from '../../context/ThemeState'

const Button = styled.button`
  background-color: red;
`

const ThemeToggler = () => {
  const { toggleTheme } = useContext(ThemeContext)

  return <Button onClick={toggleTheme}>Toggle</Button>
}

export default ThemeToggler
