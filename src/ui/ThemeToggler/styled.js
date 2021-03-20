import styled, { css } from 'styled-components'

import { ReactComponent as MoonSVG } from './images/moon.svg'
import { ReactComponent as SunSVG } from './images/sun.svg'

const iconStyles = css`
  transition: fill 0.3s;
`

export const MoonIcon = styled(MoonSVG).attrs(({ theme }) => ({
  fill: theme.id === '0' ? theme.fontColor : theme.navLink.notActiveColor,
}))`
  width: 1rem;
  height: 1rem;
  ${iconStyles}
`

export const SunIcon = styled(SunSVG).attrs(({ theme }) => ({
  fill: theme.id === '1' ? theme.fontColor : theme.navLink.notActiveColor,
}))`
  width: 1.2rem;
  height: 1.2rem;
  ${iconStyles}
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 4rem;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.fontColor};
  }
`
