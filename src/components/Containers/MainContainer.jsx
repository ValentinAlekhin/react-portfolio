import React from 'react'

import { MainContainer as Wrapper } from './styled'

const MainContainer = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>
}

export default MainContainer
