import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

import { dark, light } from '../style/themes'

export const ThemeContext = createContext({
  theme: dark,
  toggleTheme: () => {},
  setThemeFromLocalStorage: () => {},
})

const ThemeState = ({ children }) => {
  const [theme, setTheme] = useState(dark)

  const setThemeFromLocalStorage = () => {
    const themeId = localStorage.getItem('theme_id') || '0'
    console.log(themeId)
    themeId === '0' ? setTheme(dark) : setTheme(light)
  }

  const saveThemeToLocalStorage = themeId => {
    localStorage.setItem('theme_id', themeId)
  }

  const toggleTheme = () => {
    const body = document.body
    const themeColor = document.querySelector('meta[name="theme-color"]')

    if (theme.id === '0') {
      body.style.backgroundColor = '#fff'
      themeColor.setAttribute('content', '#fff')

      setTheme(light)
      saveThemeToLocalStorage(light.id)
    } else {
      body.style.backgroundColor = '#000'
      themeColor.setAttribute('content', '#000')

      setTheme(dark)
      saveThemeToLocalStorage(dark.id)
    }
  }

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, setThemeFromLocalStorage }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

ThemeState.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ThemeState
