import React, { useContext } from 'react'

import { ThemeContext } from '../../context/ThemeState'

import { Wrapper, Text, Link, GitHubIcon, WebsiteIcon, NpmIcon } from './styled'

const Badge = ({ text, link, icon }) => {
  const { theme } = useContext(ThemeContext)

  const TextElement = <Text theme={theme}>{text}</Text>
  const LinkElement = (
    <Link theme={theme} href={link} target="_blank" rel="nofollow noopener">
      {icon === 'github' ? <GitHubIcon theme={theme} /> : null}
      {icon === 'website' ? <WebsiteIcon theme={theme} /> : null}
      {icon === 'npm' ? <NpmIcon theme={theme} /> : null}
      <span>{text}</span>
    </Link>
  )

  return <Wrapper theme={theme}>{link ? LinkElement : TextElement}</Wrapper>
}

export default Badge
