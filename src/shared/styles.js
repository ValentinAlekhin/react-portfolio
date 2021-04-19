import { css } from 'styled-components'

export const glassEffect = css`
  background-color: ${({ theme }) => theme.projectCard.background};
  border: 1px solid ${({ theme }) => theme.projectCard.borderColor};
  box-shadow: 4px 8px 10px 0 ${({ theme }) => theme.projectCard.boxShadow};
  backdrop-filter: blur(3px);
  border-radius: 5px;
  border-bottom: none;
  border-right: none;
  transition: all 0.3s;
`
export const SVGStyles = css`
  fill: ${({ theme }) => theme.fontColor};
  height: 1.5rem;
  width: 1.5rem;
  transition: fill 0.3s;
`

export const mainContainerStyles = css`
  width: 98%;
  margin: 0 auto;
`
