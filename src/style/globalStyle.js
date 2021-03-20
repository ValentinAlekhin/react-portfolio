import { createGlobalStyle } from 'styled-components'

import {
  mainContainerWidthInPercentage as mainContainerWidth,
  contentContainerWidthInPercentage as contentContainerWidth,
} from './_variables'
import { respondTo } from './_respondTo'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  body {
    color: ${({ theme }) => theme.fontColor};
    font-family: 'Roboto', sans-serif;

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
