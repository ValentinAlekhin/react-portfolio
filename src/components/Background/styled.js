import styled from 'styled-components'

import { ReactComponent as SVG } from './background.svg'

export const Wrapper = styled.div`
  left: 0;
  object-fit: cover;
`

export const Background = styled(SVG)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;

  width: ${({ orient }) => (orient === 'hor' ? '130%' : '')};
  height: ${({ orient }) => (orient === 'hor' ? '' : '130%')};

  .st0 {
    transition: all 0.3s;
    fill: ${({ theme }) => theme.background.fill};
  }

  .st2 {
    transition: all 0.3s;
    fill: none;
    stroke: ${({ theme }) => theme.background.stroke};
    stroke-width: 2;
    stroke-miterlimit: 10;
  }
  .st3 {
    transition: all 0.3s;
    fill: none;
    stroke: ${({ theme }) => theme.background.stroke};
    stroke-miterlimit: 10;
    stroke-width: 0.8;
  }
`
