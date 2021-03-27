import styled from 'styled-components'

import { ReactComponent as SVG } from './background.svg'

export const Background = styled(SVG)`
  position: fixed;
  top: 0;
  left: 0;
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;

  .st0 {
    transition: all 0.3s;
    fill: ${({ theme }) => theme.background.fill};
  }

  .st2 {
    transition: all 0.3s;
    fill: none;
    stroke: ${({ theme }) => theme.background.stroke};
    stroke-width: 3;
    stroke-miterlimit: 10;
  }
  .st3 {
    transition: all 0.3s;
    fill: none;
    stroke: ${({ theme }) => theme.background.stroke};
    stroke-miterlimit: 10;
  }
`
