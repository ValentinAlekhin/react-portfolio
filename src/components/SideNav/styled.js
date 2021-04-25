import styled from 'styled-components'
import { m as motion } from 'framer-motion'

import { respondTo } from '../../style/_respondTo'

import { StyledNavLink } from '../../shared/components'

export const Wrapper = styled(motion.div)`
  position: relative;

  ${respondTo.sm`display: none;`}
`

export const Circle = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  background-color: ${({ theme }) => theme.sideNav.background};
  border-radius: 100%;
  z-index: 10;
`

export const Content = styled(motion.div)`
  opacity: ${({ open }) => (open ? 1 : 0)};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80vh;
  z-index: 10;
`

export const NavList = styled.ul`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const NavItem = styled.li`
  margin-bottom: 4rem;
  text-align: center;
`

export const SidedNavLink = styled(StyledNavLink)`
  transition: all 0.3s;
  font-size: 2.5rem;
  font-weight: 400;
`
