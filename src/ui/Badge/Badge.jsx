import React, { useContext } from 'react'

import { ThemeContext } from '../../context/ThemeState'

import { Wrapper, Text, Link } from './styled'

const Badge = ({ text, link }) => {
  const { theme } = useContext(ThemeContext)

  const TextElement = <Text theme={theme}>{text}</Text>
  const LinkElement = (
    <Link theme={theme} href={link} target="_blank">
      {text}
    </Link>
  )

  return <Wrapper theme={theme}>{link ? LinkElement : TextElement}</Wrapper>
}

export default Badge
