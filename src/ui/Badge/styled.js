import styled from 'styled-components'

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

  &:hover {
    color: ${({ theme }) => theme.badge.linkColorHover};
    border-color: ${({ theme }) => theme.badge.linkColorHover};
  }
`
