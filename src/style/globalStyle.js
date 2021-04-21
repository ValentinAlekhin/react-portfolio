import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  body {
    color: ${({ theme }) => theme.fontColor};
    background-color: ${({ theme }) => theme.backgroundColor};
    font-family: 'Manrope', 'Times New Roman', Times, sans-serif;
    overflow-x: hidden;
    margin-bottom: 4rem;

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
    scrollbar-width: none;

    &::selection {
      background: ${({ theme }) => theme.selection.background};
      color: ${({ theme }) => theme.selection.color};
    }
  }

  h1, h2, h3, h4, h5, h6, a, p, span {
    transition: color 0.3s;
  }
`

export default GlobalStyle
