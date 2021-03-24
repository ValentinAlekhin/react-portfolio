import React, { useState } from 'react'

import { Wrapper, Picture, StyledImg } from './styled'

const Image = ({ original, placeholder }) => {
  const [imgLoad, setImgLoad] = useState(false)

  const onLoadHandler = () => setImgLoad(true)

  return (
    <Wrapper>
      <StyledImg src={placeholder} />

      <Picture style={{ opacity: imgLoad ? 1 : 0 }}>
        <source srcSet={original} type="image/jpeg" />
        <StyledImg src={original} alt="original" onLoad={onLoadHandler} />
      </Picture>
    </Wrapper>
  )
}

export default Image
