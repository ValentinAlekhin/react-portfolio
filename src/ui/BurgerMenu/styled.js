import styled from 'styled-components'

import { respondTo } from '../../style/_respondTo'

export const BurgerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  cursor: pointer;

  ${respondTo.sm`
    display: none;
  `}
`

export const BurgerItem = styled.div`
  position: relative;
  top: 0;
  height: ${({ height }) => height};
  background-color: ${({ theme }) => theme.fontColor};
  transition: all 0.3s linear;
  border-radius: 3px;
  transform-origin: 1px;
  z-index: 20;

  &:last-child {
    margin-bottom: 0;
  }

  :first-child {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
  }

  :nth-child(2) {
    opacity: ${({ open }) => (open ? '0' : '1')};
    transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
  }

  :nth-child(3) {
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`
