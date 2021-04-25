import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

import delay from '../utils/delay'

export const MenuContext = createContext({
  isMenuOpen: true,
  toggleMenu: () => {},
})

const NavState = ({ children }) => {
  const [isMenuOpen, toggleMenu] = useState(false)
  const [coords, setCoords] = useState(null)

  const toggleMenuMode = async () => {
    const root = document.querySelector('#root')

    if (isMenuOpen) {
      toggleMenu(false)

      await delay(500)

      root.style.overflow = ''
    } else {
      root.style.overflow = 'hidden'

      toggleMenu(true)
    }
  }

  const setBurgerCoords = ref => {
    const { offsetHeight, offsetLeft, offsetTop, offsetWidth } = ref.current
    const coords = {
      left: offsetLeft + offsetWidth / 2 + 'px',
      top: offsetTop + offsetHeight / 2 + 'px',
    }

    setCoords(coords)
  }

  return (
    <MenuContext.Provider
      value={{ isMenuOpen, toggleMenuMode, coords, setBurgerCoords }}
    >
      {children}
    </MenuContext.Provider>
  )
}

NavState.propTypes = {
  children: PropTypes.node.isRequired,
}

export default NavState
