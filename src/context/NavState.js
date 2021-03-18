import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const MenuContext = createContext({
  isMenuOpen: true,
  toggleMenu: () => {},
})

const NavState = ({ children }) => {
  const [isMenuOpen, toggleMenu] = useState(false)
  const [coords, setCoords] = useState(null)

  const toggleMenuMode = () => {
    const body = document.body
    const scrollY = body.style.top

    if (isMenuOpen) {
      body.style.position = ''
      body.style.top = ''
      window.scrollTo(0, parseInt(scrollY || '0') * -1)

      toggleMenu(false)
    } else {
      body.style.position = 'fixed'
      body.style.top = `-${scrollY}`

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
