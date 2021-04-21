import React from 'react'

import { ContentContainer as Wrapper } from './styled'

const ContentContainer = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>
}

export default ContentContainer
