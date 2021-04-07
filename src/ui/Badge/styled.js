import styled, { css } from 'styled-components'

import { SVGStyles } from '../../shared/styles'

import { ReactComponent as GitHubSVG } from '../../shared/images/GitHub.svg'
import { ReactComponent as WebsiteSVG } from './icons/Website.svg'
import { ReactComponent as NpmSVG } from './icons/Npm.svg'

const iconStyles = css`
  fill: ${({ theme }) => theme.badge.linkColor};
  height: 20px;
  width: 20px;
  margin-right: 5px;
`

export const Wrapper = styled.li`
  background: ${({ theme }) => theme.badge.background};
  border-radius: 5px;
  padding: 7px;
  margin-right: 7px;
  margin-top: 7px;
`

export const Text = styled.span`
  color: ${({ theme }) => theme.badge.textColor};
`
export const Link = styled.a`
  color: ${({ theme }) => theme.badge.linkColor};
  border-bottom: 1px solid ${({ theme }) => theme.badge.linkColor};
  transition: all 0.3s;
  display: flex;
  align-items: center;
  padding-bottom: 3px;

  &:hover {
    color: ${({ theme }) => theme.badge.linkColorHover};
    border-color: ${({ theme }) => theme.badge.linkColorHover};

    svg {
      fill: ${({ theme }) => theme.badge.linkColorHover};
    }
  }
`
export const GitHubIcon = styled(GitHubSVG)`
  ${SVGStyles}
  ${iconStyles}
`

export const WebsiteIcon = styled(WebsiteSVG)`
  ${SVGStyles}
  ${iconStyles}
`

export const NpmIcon = styled(NpmSVG)`
  ${SVGStyles}
  ${iconStyles}
`
