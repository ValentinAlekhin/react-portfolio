import styled, { css } from 'styled-components'

import { SVGStyles } from '../../shared/styles'

import { ReactComponent as TelegramSVG } from './images/Telegram.svg'
import { ReactComponent as GitHubSVG } from './images/GitHub.svg'
import { ReactComponent as MailSVG } from './images/Mail.svg'

const iconStyles = css`
  ${SVGStyles};
  transition: all 0.3s;
  width: ${({ size }) => size || '1.5rem'};
  height: ${({ size }) => size || '1.5rem'};

  &:hover {
    fill: ${({ theme }) => theme.navLink.notActiveColor};
  }
`

export const List = styled.ul.attrs(({ direction, size }) => ({
  direction: direction === 'horizontal' ? 'row' : 'column',
  width: direction === 'horizontal' ? size : '',
  height: direction === 'horizontal' ? '' : size,
}))`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  align-items: center;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
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
