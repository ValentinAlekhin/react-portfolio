import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { darken } from 'polished'

import { MenuContext } from '../../context/NavState'

import { respondTo } from '../../style/_respondTo'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  background-color: gray;
  z-index: 5;
  overflow: hidden;
  transition: all 0.4s linear;

  ${respondTo.sm`display: none;`}
`

const Content = styled.div`
  position: absolute;
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
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext)

  const links = [
    { to: '/', title: 'Home' },
    { to: '/projects', title: 'Projects' },
  ]

  return (
    <Wrapper open={isMenuOpen}>
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
