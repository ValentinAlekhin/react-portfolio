import React, { useContext } from 'react'

import { ThemeContext } from '../../context/ThemeState'

import {
  AppLevelWrapper,
  List,
  TelegramIcon,
  GitHubIcon,
  MailIcon,
} from './styled'

const Socials = ({ direction, iconSize, boxSize, onApp }) => {
  const { theme } = useContext(ThemeContext)

  const socials = [
    { Ico: TelegramIcon, href: 'https://t.me/alekhin_vv' },
    { Ico: GitHubIcon, href: 'https://github.com/ValentinAlekhin' },
    { Ico: MailIcon, href: 'mailto:headbangernetwork@gmail.com' },
  ]

  const Component = () => (
    <List direction={direction} size={boxSize}>
      {socials.map(({ Ico, href }, i) => (
        <li key={i}>
          <a href={href} target="_blank" rel="noopener noreferrer">
            <Ico theme={theme} size={iconSize} />
          </a>
        </li>
      ))}
    </List>
  )

  return onApp ? (
    <AppLevelWrapper>
      <Component />
    </AppLevelWrapper>
  ) : (
    <Component />
  )
}

export default Socials
