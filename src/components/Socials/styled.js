import styled, { css } from 'styled-components'

import { mainContainerWidthInPercentage as containerWidth } from '../../style/_variables'
import { respondTo } from '../../style/_respondTo'
import { SVGStyles } from '../../shared/styles'

import { ReactComponent as TelegramSVG } from './images/Telegram.svg'
import { ReactComponent as GitHubSVG } from '../../shared/images/GitHub.svg'
import { ReactComponent as MailSVG } from './images/Mail.svg'

const iconStyles = css`
  ${SVGStyles};

  fill: ${({ theme }) => theme.fontColor};
  width: ${({ size }) => size || '1.5rem'};
  height: ${({ size }) => size || '1.5rem'};

  &:hover {
    fill: ${({ theme }) => theme.navLink.notActiveColor};
  }
`

export const AppLevelWrapper = styled.div`
  display: none;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);

  ${respondTo.sm`
    display: block;
    left: ${(100 - containerWidth.sm) / 2}%;
  `}

  ${respondTo.md`
    left: ${(100 - containerWidth.md) / 2}%;
  `}

  ${respondTo.lg`
    left: ${(100 - containerWidth.lg) / 2}%;
  `}
    
  ${respondTo.xl`
    left: ${(100 - containerWidth.xl) / 2}%;
  `}
`

export const List = styled.ul.attrs(({ direction, size }) => ({
  direction: direction === 'horizontal' ? 'row' : 'column',
  width: direction === 'horizontal' ? size : '',
  height: direction === 'horizontal' ? '' : size,
}))`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
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
