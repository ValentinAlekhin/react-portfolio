import styled from 'styled-components'

import { SVGStyles } from '../../shared/styles'

import { ReactComponent as Icon } from './arrow.svg'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.markdown.background};
  border-radius: 6px;
  padding: 1rem 2rem;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
  margin-bottom: 4rem;
`
export const Title = styled.h6`
  color: ${({ theme }) => theme.fontColor};
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin: 0;
`

export const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Toggler = styled(Icon)`
  ${SVGStyles}

  fill: ${({ theme }) => theme.markdown.togglerColor};
  text-align: center;
  height: 30px;
  width: 30px;
  transform: rotate(90deg);
  transition: all ease-in-out 0.3s;
  cursor: pointer;

  &:hover {
    fill: ${({ theme }) => theme.fontColor};
  }
`

export const MarkdownBody = styled.div`
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  height: 0px;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.fontColor};

  h1 {
    font-size: 2rem;
  }

  h1,
  h2 {
    padding-bottom: 0.3rem;
    border-bottom: 1px solid ${({ theme }) => theme.markdown.hrLineColor};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }

  a {
    color: $link-color;
    text-decoration: none;
  }

  ol {
    padding-left: 2rem;

    li + li {
      margin-top: 0.25rem;
    }
  }

  pre {
    border-radius: 6px;
  }

  code,
  pre > code:not() {
    padding: 0.2em 0.4rem;
    margin: 0;
    font-size: 85%;
    background-color: #2f333a;
    border-radius: 6px;
  }

  blockquote,
  details,
  dl,
  ol,
  p,
  pre,
  table,
  ul {
    margin-top: 0;
    margin-bottom: 16px;
  }

  & > :first-child {
    margin-top: 0;
  }
`
