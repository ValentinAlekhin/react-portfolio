import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

import { respondTo } from '../../style/_respondTo'

import { ReactComponent as Icon } from '../../shared/images/arrow.svg'

const btnStyles = css`
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  width: 60px;
  cursor: pointer;
  transition: opacity 0.3s;
  background: ${({ theme }) => theme.imageGallery.controlBackground};
  opacity: 0;

  &:hover {
    opacity: 1;
  }
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
  height: 100%;
`

export const NextBtn = styled.button`
  ${btnStyles}
  left: 0;
  border: none;

  svg {
    transform: rotate(180deg);
  }
`

export const PrevBtn = styled.button`
  ${btnStyles}
  right: 0;
  border: none;
`

export const ArrowIcon = styled(Icon)`
  width: 2rem;
  height: 2rem;
  fill: #fff;
`
