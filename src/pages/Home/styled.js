import styled from 'styled-components'
import { m as motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import ContentContainer from '../../components/Containers/ContentContainer'

import { respondTo } from '../../style/_respondTo'
import { glassEffect } from '../../shared/styles'

export const StyledContentContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Wrapper = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  ${respondTo.md`
    flex-direction: row;
  `}
`

export const ImageWrapper = styled.div`
  width: 90vw;
  height: 90vw;
  overflow: hidden;
  border-radius: 3px;
  border-radius: 50%;
  background-color: #000;
  box-shadow: 0px 7px 20px 14px ${({ theme }) => theme.projectCard.boxShadow};

  ${respondTo.xs`
    width: 70vw;
    height: 70vw;
  `}

  ${respondTo.sm`
    width: 50vw;
    height: 50vw;
  `}

  ${respondTo.md`
    width: 40vw;
    height: 40vw;
    margin-right: 3vw;
  `}

  ${respondTo.lg`
    width: 30vw;
    height: 30vw;
    margin-right: 5vw;
  `}

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    transform: translateY(8%);
  }
`

export const TextWrapper = styled.div`
  margin-top: 1rem;
  position: relative;
  text-transform: uppercase;
  flex-direction: column;
  display: flex;
  text-align: center;

  ${respondTo.md`
    width: 30vw;
  `}
`

export const MainText = styled.span`
  color: ${({ theme }) => theme.fontColor};
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 6px;

  ${respondTo.xs`
    font-size: 3.5rem;
  `}
`

export const OtherText = styled.span`
  display: none;
  color: ${({ theme }) => theme.fontColor};
  margin-top: 0.8rem;
  font-size: 1.8rem;
  letter-spacing: 21px;

  ${respondTo.lg`
    display: block;
  `}
`

export const LinkWrapper = styled(motion.div)`
  ${glassEffect}

  margin-top: 1rem;
  width: 100%;
  transition: all 0.2s;

  &:hover {
    backdrop-filter: blur(5px);
    background-color: ${({ theme }) => theme.projectCard.backgroundHover};
  }
`

export const ProjectsLink = styled(Link)`
  color: ${({ theme }) => theme.fontColor};
  display: block;
  text-transform: uppercase;
  text-align: center;
  margin: 0.5rem 1rem;

  font-size: 1.5rem;
  border-radius: 5px;
  letter-spacing: 2px;
`
