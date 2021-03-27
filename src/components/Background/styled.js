import styled from 'styled-components'

import { ReactComponent as SVG } from './background.svg'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  object-fit: cover;
  z-index: -1;
`

export const Background = styled(SVG)`
  width: ${({ orient }) => (orient === 'hor' ? '110%' : '')};
  height: ${({ orient }) => (orient === 'hor' ? '' : '110%')};

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
