import React, { useContext } from 'react'
import { AnimatePresence } from 'framer-motion/dist/es/components/AnimatePresence/index'

import useWindowSize from '../../hooks/useWindowSize'

import { ThemeContext } from '../../context/ThemeState'
import { MenuContext } from '../../context/NavState'

import BurgerMenu from '../../ui/BurgerMenu/BurgerMenu'
import Socials from '../Socials/Socials'
import ThemeToggler from '../../ui/ThemeToggler/ThemeToggler'

import {
  Wrapper,
  Content,
  Circle,
  NavList,
  NavItem,
  SidedNavLink,
} from './styled'

const circleVariants = {
  open: size => ({
    width: size * 3,
    height: size * 3,
    transition: {
      type: 'spring',
      stiffness: 50,
      restDelta: 20,
      delay: 0,
      duration: 0.4,
    },
  }),
  closed: {
    width: 0,
    height: 0,
    transition: {
      delay: 0.2,
      duration: 0.3,
    },
  },
}

const contentVariants = {
  initial: { opacity: 0 },
  open: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.3,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      delay: 0,
      duration: 0.3,
    },
  },
}

const SideNav = () => {
  const { theme } = useContext(ThemeContext)
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext)
  const { height, width } = useWindowSize()
  const size = height > width ? height : width

  const links = [
    { to: '/', title: 'Home' },
    { to: '/projects', title: 'Projects' },
  ]

  return (
    <Wrapper theme={theme}>
      <BurgerMenu />
      <Circle
        theme={theme}
        initial={false}
        custom={size}
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={circleVariants}
      />
      <AnimatePresence initial={false}>
        {isMenuOpen ? (
          <Content
            initial={contentVariants.initial}
            animate={contentVariants.open}
            exit={contentVariants.closed}
          >
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
            <ThemeToggler iconSize="1.5rem" boxSize="6rem" />
          </Content>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  )
}

export default SideNav
