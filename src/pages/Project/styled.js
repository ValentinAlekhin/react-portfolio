import styled, { css } from 'styled-components'

import { glassEffect } from '../../shared/styles'

const flexWrap = css`
  display: flex;
  flex-wrap: wrap;
`

export const Wrapper = styled.div`
  ${glassEffect}

  margin-top: 3rem;
  padding: 1rem;
`

export const ProjectHeader = styled.div`
  align-items: center;
  margin-bottom: 2.5rem;
`

export const Title = styled.div`
  color: ${({ theme }) => theme.fontColor};
  font-size: 3rem;
  margin-right: 2rem;
`

export const Links = styled.div`
  ${flexWrap}
`

export const Description = styled.div`
  font-size: 1.2rem;
  line-height: 1.4;
  color: ${({ theme }) => theme.projectCard.descriptionColor};
`

export const Skills = styled.div`
  ${flexWrap}
`
