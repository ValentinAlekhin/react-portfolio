import React, { useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'

import { MenuContext } from '../../context/NavState'
import { ThemeContext } from '../../context/ThemeState'

const BurgerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  cursor: pointer;
`

const BurgerItem = styled.div`
  position: relative;
  top: 0;
  height: ${({ height }) => height};
  background-color: ${({ theme }) => theme.fontColor};
  transition: all 0.3s linear;
  border-radius: 3px;
  transform-origin: 1px;
  z-index: 20;

  &:last-child {
    margin-bottom: 0;
  }

  :first-child {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
  }

  :nth-child(2) {
    opacity: ${({ open }) => (open ? '0' : '1')};
    transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
  }

  :nth-child(3) {
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`

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
