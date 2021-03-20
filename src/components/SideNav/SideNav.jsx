import React, { useContext } from 'react'

import { ThemeContext } from '../../context/ThemeState'
import { MenuContext } from '../../context/NavState'

import Socials from '../Socials/Socials'

import { Wrapper, Content, NavList, NavItem, SidedNavLink } from './styled'

const SideNav = () => {
  const { theme } = useContext(ThemeContext)
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext)

  const links = [
    { to: '/', title: 'Home' },
    { to: '/projects', title: 'Projects' },
  ]

  return (
    <Wrapper open={isMenuOpen} theme={theme}>
      <Content>
        <nav>
          <NavList>
            {links.map(({ to, title }, i) => (
              <NavItem key={i}>
                <SidedNavLink
                  onClick={toggleMenuMode}
                  exact
                  to={to}
                  theme={theme}
                >
                  {title}
                </SidedNavLink>
              </NavItem>
            ))}
          </NavList>
        </nav>
        <Socials direction="horizontal" iconSize="2rem" boxSize="12rem" />
      </Content>
    </Wrapper>
  )
}

export default SideNav
