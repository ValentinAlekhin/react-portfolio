import styled from 'styled-components'
import { m as motion } from 'framer-motion'

import { ReactComponent as SVG } from './loader.svg'

export const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  z-index: 100000;
`

export const Loader = styled(SVG)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  fill: #fff;
  height: 100px;
  width: 100px;
`
