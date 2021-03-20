import { css } from 'styled-components'

export const glassEffect = css`
  background-color: ${({ theme }) => theme.projectCard.background};
  backdrop-filter: blur(4px);
  border-radius: 5px;
`
export const SVGStyles = css`
  fill: ${({ theme }) => theme.fontColor};
  height: 1.5rem;
  width: 1.5rem;
  transition: all 0.3s;
`

export const mainContainerStyles = css`
  width: 98%;
  margin: 0 auto;
`
