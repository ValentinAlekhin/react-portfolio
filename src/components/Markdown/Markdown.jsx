import React, { useEffect, useState, useRef, useContext } from 'react'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { ThemeContext } from '../../context/ThemeState'

import { Wrapper, Title, ToggleWrapper, Toggler, MarkdownBody } from './styled'

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        style={anOldHope}
        language={language}
        children={value}
      />
    )
  },
}

const Markdown = ({ url }) => {
  const { theme } = useContext(ThemeContext)
  const markdownBody = useRef()
  const [markdown, setMarkdown] = useState(null)
  const [height, setHeight] = useState(false)

  useEffect(() => {
    axios.get(url).then(({ data }) => setMarkdown(data))
  })

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
      <Title theme={theme}>README</Title>
      {markdown ? (
        <MarkdownBody theme={theme} ref={markdownBody} style={{ height }}>
          <ReactMarkdown renderers={renderers} children={markdown} />
        </MarkdownBody>
      ) : null}
      <ToggleWrapper theme={theme}>
        <Toggler
          theme={theme}
          style={height ? { transform: 'rotate(-90deg)' } : null}
          onClick={toggle}
        />
      </ToggleWrapper>
    </Wrapper>
  )
}

export default Markdown
