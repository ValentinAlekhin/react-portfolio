import React, { useState, useRef, useContext } from 'react'
import loadable from '@loadable/component'

import ReactMarkdown from 'react-markdown'

import { ThemeContext } from '../../context/ThemeState'

import { Wrapper, Title, Toggler, MarkdownBody } from './styled'

const SyntaxHighlighter = loadable(() =>
  import('react-syntax-highlighter/dist/esm/default-highlight')
)

const createRenders = style => ({
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter style={style} language={language} children={value} />
    )
  },
})

const Markdown = ({ body }) => {
  const { theme } = useContext(ThemeContext)
  const markdownBody = useRef()
  const [height, setHeight] = useState(false)

  const renderers = createRenders(theme.markdown.codeTheme)

  const toggle = () => {
    const { scrollHeight } = markdownBody.current
    if (height) {
      setHeight(0)
    } else {
      setHeight(scrollHeight + 'px')
    }
  }

  return (
    <Wrapper theme={theme}>
      <Title theme={theme}>Здесь можно посмотреть README.md файл проекта</Title>
      <MarkdownBody theme={theme} ref={markdownBody} style={{ height }}>
        <ReactMarkdown renderers={renderers} children={body} />
      </MarkdownBody>
      <Toggler
        theme={theme}
        style={height ? { transform: 'rotate(-90deg)' } : null}
        onClick={toggle}
      />
    </Wrapper>
  )
}

export default Markdown
