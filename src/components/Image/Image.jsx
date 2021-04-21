import React, { useState } from 'react'

import { Wrapper, Picture, StyledImg } from './styled'

const Image = ({ original, placeholder, alt, className }) => {
  const [imgLoad, setImgLoad] = useState(false)

  const onLoadHandler = () => setImgLoad(true)

  return (
    <Wrapper className={className}>
      <StyledImg src={placeholder} alt={`${alt} placeholder`} />

      <Picture style={{ opacity: imgLoad ? 1 : 0 }}>
        <source srcSet={original} type="image/jpeg" />
        <StyledImg src={original} alt={alt} onLoad={onLoadHandler} />
      </Picture>
    </Wrapper>
  )
}

export default Image
