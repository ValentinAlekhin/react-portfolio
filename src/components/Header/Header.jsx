import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { ThemeContext } from '../../context/ThemeState'

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

  const links = [
    { to: '/', title: 'Home' },
    { to: '/projects', title: 'Projects' },
  ]

  return (
    <div className={'mainContainer'}>
      <StyledHeader>
        <NameWrapper>
          <Icon theme={theme} />
          <Title theme={theme}>
            <NavLink to={'/'}>Valentin Alekhin</NavLink>
          </Title>
        </NameWrapper>

        <BurgerMenu size="35px" itemHeight="4px" />
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
    </div>
  )
}

export default Header
