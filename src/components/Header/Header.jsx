import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { respondTo } from '../../style/_respondTo'

import { ThemeContext } from '../../context/ThemeState'

import { ReactComponent as Icon } from './abstract.svg'

import ThemeToggler from '../../ui/ThemeToggler/ThemeToggler'
import BurgerMenu from '../../ui/BurgerMenu/BurgerMenu'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  margin-top: 2rem;

  ${respondTo.sm`justify-content: space-between;`}
`

const NameContainer = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled.h1`
  margin-left: 0.5rem;
  font-size: 1.3rem;
  letter-spacing: 0.5px;

  a {
    color: ${({ theme }) => theme.fontColor};
  }

  ${respondTo.sm`font-size: 1.5rem;`};
`

const NavContainer = styled.nav`
  display: none;

  ${respondTo.sm`display: block;`}
`

const NavList = styled.ul`
  display: flex;
`

const NavItem = styled.li`
  font-size: 1rem;
  font-weight: 400;
  margin-left: 4rem;
`

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.navLink.notActiveColor};
  transition: all 0.3s;

  &.active {
    color: ${({ theme }) => theme.fontColor};
  }

  &:hover {
    color: ${({ theme }) => theme.fontColor};
  }
`

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
          {/* <Icon className={classes.icon} /> */}
          <Title>
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
