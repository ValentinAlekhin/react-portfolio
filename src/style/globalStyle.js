import { createGlobalStyle } from 'styled-components'

import {
  mainContainerWidthInPercentage as mainContainerWidth,
  contentContainerWidthInPercentage as contentContainerWidth,
} from './_variables'
import { respondTo } from './_respondTo'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.fontColor};
    font-family: 'Manrope', sans-serif;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  ul {
    list-style: none;
  } 

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.fontColor};
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    &::selection {
      background: ${({ theme }) => theme.selection.background};
      color: ${({ theme }) => theme.selection.color};
    }
  }

  .mainContainer, .contentContainer {
    width: ${mainContainerWidth.xs}%;
    margin: 0 auto;

    
  }

  .mainContainer {
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
  }

  .contentContainer {
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
  }
`

export default GlobalStyle
