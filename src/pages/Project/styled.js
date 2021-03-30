import styled, { css } from 'styled-components'
import { motion } from 'framer-motion/dist/es/render/dom/motion'

import { glassEffect } from '../../shared/styles'

const flexWrap = css`
  display: flex;
  flex-wrap: wrap;
`

export const Wrapper = styled(motion.div)`
  ${glassEffect}

  margin-top: 3rem;
  padding: 1rem;

  .image-gallery {
    margin-bottom: 4rem;
  }

  .image-gallery-slide-wrapper,
  .image-gallery-content,
  .image-gallery-slide,
  .image-gallery-image {
    border-radius: 6px;
  }

  .image-gallery-left-nav .image-gallery-svg,
  .image-gallery-right-nav .image-gallery-svg {
    height: 4rem;
    width: 2rem;
    transition: all 0.3s;
  }

  .image-gallery-icon {
    transition: all 0.2s ease-out;
    color: ${({ theme }) => theme.navLink.notActiveColor};

    &:hover {
      color: ${({ theme }) => theme.fontColor};
    }
  }

  .image-gallery-thumbnail.active,
  .image-gallery-thumbnail:hover,
  .image-gallery-thumbnail:focus {
    outline: none;
    border: 4px solid ${({ theme }) => theme.fontColor};
    border-radius: 3px;
  }

  .image-gallery-thumbnail .image-gallery-thumbnail-image {
    border-radius: 1px;
  }
`

export const ProjectHeader = styled.div`
  ${flexWrap}

  align-items: center;
  margin-bottom: 2.5rem;
`

export const Title = styled.div`
  color: ${({ theme }) => theme.fontColor};
  font-size: 3rem;
  margin-right: 2rem;
`

export const Links = styled.ul`
  ${flexWrap}
`

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.4;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.projectCard.descriptionColor};
`

export const Skills = styled.ul`
  ${flexWrap}
`
