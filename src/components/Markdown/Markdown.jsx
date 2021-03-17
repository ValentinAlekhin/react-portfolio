import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import classes from './Markdown.module.scss'

import { ReactComponent as ArrowIco } from './arrow.svg'

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
    <div className={classes.Markdown}>
      <h6 className={classes.title}>README</h6>
      {markdown ? (
        <div className={classes.body} ref={markdownBody} style={{ height }}>
          <ReactMarkdown renderers={renderers} children={markdown} />
        </div>
      ) : null}
      <div className={classes.togglerContainer}>
        <ArrowIco
          style={height ? { transform: 'rotate(-90deg)' } : null}
          className={classes.toggler}
          onClick={toggle}
        />
      </div>
    </div>
  )
}

export default Markdown
