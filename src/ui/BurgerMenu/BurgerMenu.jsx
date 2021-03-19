import React, { useContext, useEffect, useRef } from 'react'

import { MenuContext } from '../../context/NavState'
import { ThemeContext } from '../../context/ThemeState'

import { BurgerWrapper, BurgerItem } from './styled'

const BurgerMenu = props => {
  const { isMenuOpen, toggleMenuMode, setBurgerCoords } = useContext(
    MenuContext
  )
  const { theme } = useContext(ThemeContext)

  const burgerRef = useRef()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setBurgerCoords(burgerRef), [burgerRef])

  const clickHandler = () => {
    toggleMenuMode()
  }

  const { className } = props
  const itemHeight = props.itemHeight || '3px'
  const size = props.size || '30px'

  return (
    <BurgerWrapper
      id="burgerMenu"
      size={size}
      onClick={clickHandler}
      className={className}
      ref={burgerRef}
    >
      {Array(3)
        .fill('')
        .map((_, i) => (
          <BurgerItem
            key={i}
            height={itemHeight}
            open={isMenuOpen}
            theme={theme}
          />
        ))}
    </BurgerWrapper>
  )
}

export default BurgerMenu
