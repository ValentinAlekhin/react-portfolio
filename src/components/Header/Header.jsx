import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { ThemeContext } from '../../context/ThemeState'
import { MenuContext } from '../../context/NavState'

import MainContainer from '../../components/Containers/MainContainer'
import ThemeToggler from '../../ui/ThemeToggler/ThemeToggler'
import BurgerMenu from '../../ui/BurgerMenu/BurgerMenu'

import {
  StyledHeader,
  NameWrapper,
  Icon,
  Title,
  NavWrapper,
  NavList,
  NavItem,
} from './styled'

import { StyledNavLink } from '../../shared/components'

const Header = () => {
  const { theme } = useContext(ThemeContext)
  const { toggleMenuMode } = useContext(MenuContext)

  const links = [
    { to: '/', title: 'Home' },
    { to: '/projects', title: 'Projects' },
  ]

  return (
    <MainContainer>
      <StyledHeader>
        <NameWrapper>
          <Icon theme={theme} />
          <Title theme={theme}>
            <NavLink to={'/'}>Valentin Alekhin</NavLink>
          </Title>
        </NameWrapper>

        <BurgerMenu onClick={toggleMenuMode} />

        <NavWrapper>
          <NavList>
            {links.map(({ to, title }, i) => (
              <NavItem key={i}>
                <StyledNavLink exact to={to} theme={theme}>
                  {title}
                </StyledNavLink>
              </NavItem>
            ))}
          </NavList>
          <ThemeToggler />
        </NavWrapper>
      </StyledHeader>
    </MainContainer>
  )
}

export default Header
