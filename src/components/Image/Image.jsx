import React, { useState } from 'react'

import { Wrapper, Picture, Placeholder } from './styled'

const Image = ({ original, placeholder }) => {
  const [imgLoad, setImgLoad] = useState(false)

  const onLoadHandler = () => {
    console.log('Load')
    setImgLoad(true)
  }

  return (
    <Wrapper>
      <Placeholder src={placeholder} />

      <Picture style={{ opacity: imgLoad ? 1 : 0 }}>
        <source srcSet={original} type="image/jpeg" />
        <img src={original} alt="original" onLoad={onLoadHandler} />
      </Picture>
    </Wrapper>
  )
}

export default Image
