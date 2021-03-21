import React, { useEffect, useState, useRef, useContext } from 'react'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'

import { ThemeContext } from '../../context/ThemeState'

import { Wrapper, Title, ToggleWrapper, Toggler, MarkdownBody } from './styled'

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
      <Title theme={theme}>Здесь можно посмотреть README.md файл проекта</Title>
      {markdown ? (
        <MarkdownBody theme={theme} ref={markdownBody} style={{ height }}>
          <ReactMarkdown
            renderers={theme.markdown.renders}
            children={markdown}
          />
        </MarkdownBody>
      ) : null}
      <Toggler
        theme={theme}
        style={height ? { transform: 'rotate(-90deg)' } : null}
        onClick={toggle}
      />
    </Wrapper>
  )
}

export default Markdown
