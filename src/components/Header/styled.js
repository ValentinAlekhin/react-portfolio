import styled from 'styled-components'

import { respondTo } from '../../style/_respondTo'

import { ReactComponent as SVG } from './abstract.svg'

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  margin-top: 2rem;

  ${respondTo.sm`justify-content: space-between;`}
`

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Icon = styled(SVG)`
  fill: ${({ theme }) => theme.fontColor};
  height: 1.5rem;
  width: 1.5rem;
  transition: all 0.3s;
`

export const Title = styled.h1`
  margin-left: 0.5rem;
  font-size: 1.3rem;
  letter-spacing: 0.5px;

  a {
    color: ${({ theme }) => theme.fontColor};
  }

  ${respondTo.sm`font-size: 1.5rem;`};
`

export const NavContainer = styled.nav`
  display: none;

  ${respondTo.sm`display: block;`}
`

export const NavList = styled.ul`
  display: flex;
`

export const NavItem = styled.li`
  font-size: 1rem;
  font-weight: 400;
  margin-left: 4rem;
`
