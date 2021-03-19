import styled, { css } from 'styled-components'

import { SVGStyles } from '../../shared/styles'

import { ReactComponent as TelegramSVG } from './images/Telegram.svg'
import { ReactComponent as GitHubSVG } from './images/GitHub.svg'
import { ReactComponent as MailSVG } from './images/Mail.svg'

const iconStyles = css`
  ${SVGStyles};
  transition: all 0.3s;
  width: 1.5rem;
  height: 1.5rem;

  &:hover {
    fill: ${({ theme }) => theme.navLink.notActiveColor};
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  justify-content: space-between;
  height: 10rem;
`
export const TelegramIcon = styled(TelegramSVG)`
  ${iconStyles}
`
export const GitHubIcon = styled(GitHubSVG)`
  ${iconStyles}
`
export const MailIcon = styled(MailSVG)`
  ${iconStyles}
`
