import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

import { dark, light } from '../style/themes'

export const ThemeContext = createContext({
  theme: dark,
  toggleTheme: () => {},
})

const ThemeState = ({ children }) => {
  const [theme, setTheme] = useState(dark)

  const toggleTheme = () =>
    theme.id === '0' ? setTheme(light) : setTheme(dark)

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeState.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ThemeState
