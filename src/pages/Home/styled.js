import styled from 'styled-components'
import { m as motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
`

export const ImageWrapper = styled.div``

export const TextWrapper = styled.div`
  text-transform: uppercase;
  flex-direction: column;
  display: flex;
`

export const MainText = styled.span`
  color: ${({ theme }) => theme.fontColor};
  font-size: 3.5rem;
  font-weight: 600;
  letter-spacing: 6px;
`

export const OtherText = styled.span`
  color: ${({ theme }) => theme.fontColor};
  margin-top: 0.8rem;
  font-size: 1.8rem;
  letter-spacing: 21px;
`
