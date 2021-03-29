import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import loadable from '@loadable/component'

import { ThemeContext } from '../../context/ThemeState'

import ThemeToggler from '../../ui/ThemeToggler/ThemeToggler'

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

const SideNav = loadable(() =>
  import(/* webpackPrefetch: true */ '../../components/SideNav/SideNav')
)

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

        <SideNav />
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
