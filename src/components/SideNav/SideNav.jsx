import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { darken } from 'polished'

import { MenuContext } from '../../context/NavState'

import { respondTo } from '../../style/_respondTo'

const Wrapper = styled.div`
  position: fixed;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  transform: translate(-50%, -50%);
  height: ${({ open, units }) => (open ? 500 + units : 0)};
  width: ${({ open, units }) => (open ? 500 + units : 0)};
  border-radius: 100%;
  background-color: gray;
  z-index: 5;
  overflow: hidden;
  transition: all 0.4s linear;

  ${respondTo.sm`display: none;`}
`

const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const NavItem = styled.li`
  margin-bottom: 4rem;
  text-align: center;
`

const StyledNavLink = styled(NavLink)`
  color: ${() => darken(0.4, '#fefefe')};
  transition: all 0.3s;
  font-size: 2.5rem;
  font-weight: 400;

  &.active {
    color: #fefefe;
  }

  &:hover {
    color: #fefefe;
  }
`

const SideNav = () => {
  const { isMenuOpen, toggleMenuMode, coords } = useContext(MenuContext)

  const units = window.innerWidth > window.innerHeight ? 'vw' : 'vh'

  let top = 0
  let left = 0
  if (coords) {
    top = coords.top || 0
    left = coords.left || 0
  }

  const contentCoords = {
    top: window.innerHeight / 2 + 'px',
    left: window.innerWidth / 2 + 'px',
  }

  const links = [
    { to: '/', title: 'Home' },
    { to: '/projects', title: 'Projects' },
  ]

  const scrollHandler = e => {
    if (isMenuOpen) {
    }
  }

  return (
    <Wrapper
      open={isMenuOpen}
      top={top}
      left={left}
      units={units}
      onScroll={scrollHandler}
    >
      <Content>
        <nav>
          <NavList>
            {links.map(({ to, title }, i) => (
              <NavItem key={i}>
                <StyledNavLink onClick={toggleMenuMode} exact to={to}>
                  {title}
                </StyledNavLink>
              </NavItem>
            ))}
          </NavList>
        </nav>
      </Content>
    </Wrapper>
  )
}

export default SideNav
