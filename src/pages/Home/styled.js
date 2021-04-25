import styled from 'styled-components'
import { m as motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import ContentContainer from '../../components/Containers/ContentContainer'

import { glassEffect } from '../../shared/styles'

export const StyledContentContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Wrapper = styled(motion.div)`
  /* ${glassEffect} */

  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`

export const ImageWrapper = styled.div`
  width: 90vw;
  height: 90vw;
  overflow: hidden;
  border-radius: 3px;
  border-radius: 50%;
  background-color: #000;
  /* background-color: #fff; */
  /* border: 1px solid ${({ theme }) => theme.projectCard.borderColor}; */
  box-shadow: 0px 7px 20px 14px ${({ theme }) => theme.projectCard.boxShadow};

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
`

export const MainText = styled.span`
  color: ${({ theme }) => theme.fontColor};
  font-size: 3.5rem;
  font-weight: 600;
  letter-spacing: 6px;
`

export const OtherText = styled.span`
  display: none;
  color: ${({ theme }) => theme.fontColor};
  margin-top: 0.8rem;
  font-size: 1.8rem;
  letter-spacing: 21px;
`

export const ProjectsLink = styled(Link)`
  ${glassEffect}

  margin-top: 1rem;
  width: 100%;
  text-transform: uppercase;
  text-align: center;
  /* background-color: rgba(255, 255, 255, 0.01); */
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  border-radius: 5px;
  letter-spacing: 2px;
`
