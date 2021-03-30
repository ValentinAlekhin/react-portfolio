import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion/dist/es/render/dom/motion'

import { glassEffect } from '../../shared/styles'

export const Wrapper = styled(motion.div)`
  ${glassEffect}
  padding: 1rem;

  &:hover {
    backdrop-filter: blur(5px);
    background-color: ${({ theme }) => theme.projectCard.backgroundHover};
  }
`

export const ProjectCardLink = styled(Link)`
  height: 100%;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Status = styled.span`
  text-transform: uppercase;
  color: ${({ theme }) => theme.projectCard.statusColor};
  font-size: 0.8rem;
`

export const Title = styled.h4`
  color: ${({ theme }) => theme.fontColor};
  margin-top: 0.3rem;
  font-size: 1.5rem;
`

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.4;
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.projectCard.descriptionColor};
`

export const Skills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`
