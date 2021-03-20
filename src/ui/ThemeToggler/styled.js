import styled, { css } from 'styled-components'

import { ReactComponent as MoonSVG } from './images/moon.svg'
import { ReactComponent as SunSVG } from './images/sun.svg'

const iconStyles = css`
  transition: fill 0.3s;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`

export const MoonIcon = styled(MoonSVG).attrs(({ theme, size }) => ({
  fill: theme.id === '0' ? theme.fontColor : theme.navLink.notActiveColor,
  size: size || '1rem',
}))`
  ${iconStyles}
`

export const SunIcon = styled(SunSVG).attrs(({ theme, size }) => ({
  fill: theme.id === '1' ? theme.fontColor : theme.navLink.notActiveColor,
  size: size || '1rem',
}))`
  transform: scale(1.2);

  ${iconStyles}
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ size }) => size || '4rem'};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.fontColor};
  }
`
