import React, { useState } from 'react'

import { Wrapper, Picture, StyledImg } from './styled'

const Image = ({ original, placeholder, alt, placeholderAlt }) => {
  const [imgLoad, setImgLoad] = useState(false)

  const onLoadHandler = () => setImgLoad(true)

  return (
    <Wrapper>
      <StyledImg src={placeholder} alt={alt} />

      <Picture style={{ opacity: imgLoad ? 1 : 0 }}>
        <source srcSet={original} type="image/jpeg" alt={placeholderAlt} />
        <StyledImg src={original} alt={placeholderAlt} onLoad={onLoadHandler} />
      </Picture>
    </Wrapper>
  )
}

export default Image
