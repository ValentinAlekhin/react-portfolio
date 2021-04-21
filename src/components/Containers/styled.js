import styled, { css } from 'styled-components'

import {
  mainContainerWidthInPercentage as mainContainerWidth,
  contentContainerWidthInPercentage as contentContainerWidth,
} from '../../style/_variables'
import { respondTo } from '../../style/_respondTo'

const containerStyles = css`
  width: ${mainContainerWidth.xs}%;
  margin: 0 auto;
`

export const MainContainer = styled.div`
  ${containerStyles}

  ${respondTo.sm`
      width: ${mainContainerWidth.sm}%;
    `}

    ${respondTo.md`
      width: ${mainContainerWidth.md}%;
    `}

    ${respondTo.lg`
      width: ${mainContainerWidth.lg}%;
    `}
    
    ${respondTo.xl`
      width: ${mainContainerWidth.xl}%;
    `}
`

export const ContentContainer = styled.div`
  ${containerStyles}

  ${respondTo.sm`
      width: ${contentContainerWidth.sm}%;
    `}

  ${respondTo.md`
      width: ${contentContainerWidth.md}%;
    `}

    ${respondTo.lg`
      width: ${contentContainerWidth.lg}%;
    `}
    
    ${respondTo.xl`
      width: ${contentContainerWidth.xl}%;
    `}
`
