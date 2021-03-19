import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.navLink.notActiveColor};

  &.active {
    color: ${({ theme }) => theme.fontColor};
  }

  &:hover {
    color: ${({ theme }) => theme.fontColor};
  }
`
