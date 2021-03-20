import styled from 'styled-components'

import { respondTo } from '../../style/_respondTo'

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(200px, 1fr);
  grid-gap: 1rem;
  margin-top: 2rem;

  ${respondTo.sm`
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  `}

  ${respondTo.lg`
    grid-template-columns: repeat(3, minmax(200px, 1fr));
  `}
  
  ${respondTo.xl`
    grid-template-columns: repeat(4, minmax(200px, 1fr));
  `}
`
