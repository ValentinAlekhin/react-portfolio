import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Image = styled(motion.img)`
  position: fixed;
  top: 0;
  left: 0;
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
`
