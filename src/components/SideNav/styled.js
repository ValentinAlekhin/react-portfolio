import styled from 'styled-components'

import { respondTo } from '../../style/_respondTo'

import { StyledNavLink } from '../../shared/shared'

export const Wrapper = styled.div`
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

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NavList = styled.ul`
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
