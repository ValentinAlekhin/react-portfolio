import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  height: 500px;
  border-radius: 5px;
`

export const Slide = styled(motion.div)`
  overflow: hidden;
  position: absolute;
  border-radius: 5px;
`

export const Control = styled.button`
  position: absolute;
`
