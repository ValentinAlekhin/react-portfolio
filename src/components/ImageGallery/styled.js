import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

import { SVGStyles } from '../../shared/styles'
import { respondTo } from '../../style/_respondTo'

import { ReactComponent as Icon } from '../../shared/images/arrow.svg'

const btnStyles = css`
  position: absolute;
  z-index: 2;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`

export const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 5px;

  ${respondTo.xs`
    height: 300px;
  `}

  ${respondTo.sm`
    height: 400px;
  `}

  ${respondTo.md`
    height: 500px;
  `}

  ${respondTo.lg`
    height: 700px;
  `}

  ${respondTo.xl`
    height: 900px;
  `}
`

export const Slide = styled(motion.div)`
  overflow: hidden;
  position: absolute;
  border-radius: 5px;
  width: 100%;
`

export const NextBtn = styled.button`
  ${btnStyles}
  left: 20px;
  background: none;
  border: none;

  svg {
    transform: rotate(180deg);
  }
`

export const PrevBtn = styled.button`
  ${btnStyles}
  right: 20px;
  background: none;
  border: none;
`

export const ArrowIcon = styled(Icon)`
  ${SVGStyles}
  width: 2rem;
  height: 2rem;

  &:hover {
    fill: ${({ theme }) => theme.navLink.notActiveColor};
  }
`
