import { css } from 'styled-components'

export const glassEffect = css`
  background-color: ${({ theme }) => theme.projectCard.background};
  backdrop-filter: blur(4px);
  border-radius: 5px;
`
