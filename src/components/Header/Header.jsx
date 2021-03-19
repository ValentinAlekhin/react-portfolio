import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { ThemeContext } from '../../context/ThemeState'

import ThemeToggler from '../../ui/ThemeToggler/ThemeToggler'
import BurgerMenu from '../../ui/BurgerMenu/BurgerMenu'

import {
  StyledHeader,
  NameContainer,
  Icon,
  Title,
  NavContainer,
  NavList,
  NavItem,
} from './styled'

import { StyledNavLink } from '../../shared/components'

const Header = () => {
  const { theme } = useContext(ThemeContext)
  console.log(theme)

  const links = [
    { to: '/', title: 'Home' },
    { to: '/projects', title: 'Projects' },
  ]

  return (
    <div className={'mainContainer'}>
      <StyledHeader>
        <NameContainer>
          <Icon theme={theme} />
          <Title theme={theme}>
            <NavLink to={'/'}>Valentin Alekhin</NavLink>
          </Title>
        </NameContainer>
        <ThemeToggler />
        <BurgerMenu size="35px" itemHeight="4px" />
        <NavContainer>
          <NavList>
            {links.map(({ to, title }, i) => (
              <NavItem key={i}>
                <StyledNavLink exact to={to} theme={theme}>
                  {title}
                </StyledNavLink>
              </NavItem>
            ))}
          </NavList>
        </NavContainer>
      </StyledHeader>
    </div>
  )
}

export default Header
