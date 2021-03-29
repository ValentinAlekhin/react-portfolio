import React, { useState, useRef, useContext } from 'react'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import anOldHope from 'react-syntax-highlighter/dist/esm/styles/hljs/an-old-hope'
import monoBlue from 'react-syntax-highlighter/dist/esm/styles/hljs/an-old-hope'
import ReactMarkdown from 'react-markdown'

import { ThemeContext } from '../../context/ThemeState'

import { Wrapper, Title, Toggler, MarkdownBody } from './styled'

SyntaxHighlighter.registerLanguage('javascript', js)

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

  const renderers = createRenders(
    { anOldHope, monoBlue }[theme.markdown.codeTheme]
  )

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
