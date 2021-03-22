import styled from 'styled-components'
import { motion } from 'framer-motion'
import Loader from 'react-loader-spinner'

export const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  z-index: 100000;
`

export const StyledLoader = styled(Loader)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
