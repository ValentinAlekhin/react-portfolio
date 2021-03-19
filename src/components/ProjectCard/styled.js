import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ProjectCardLink = styled(Link)`
  position: relative;
  padding: 1rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.projectCard.background};
  backdrop-filter: blur(4px);
  transition: all 0.3s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: scale(1.03);
    backdrop-filter: blur(5px);
    background-color: ${({ theme }) => theme.projectCard.backgroundHover};
  }
`

export const Status = styled.span`
  text-transform: uppercase;
  color: ${({ theme }) => theme.projectCard.statusColor};
  font-size: 0.8rem;
`

export const Title = styled.h4`
  color: ${({ theme }) => theme.fontColor};
  margin-top: 0.3rem;
  font-size: 1.5rem;
`

export const Description = styled.p`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.projectCard.descriptionColor};
`

export const Skills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`
