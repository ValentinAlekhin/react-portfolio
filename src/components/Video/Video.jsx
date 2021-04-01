import React, { useState } from 'react'

import { Wrapper, StyledIframe, Image, PlayButton, PlayIcon } from './styled'

const Video = ({ id }) => {
  const [play, setPlay] = useState(false)

  return (
    <Wrapper>
      {!play ? (
        <>
          <PlayButton aria-label="play video" onClick={() => setPlay(true)}>
            <PlayIcon />
          </PlayButton>
          <picture>
            <source
              srcset={`https://i.ytimg.com/vi_webp/${id}/maxresdefault.webp`}
              type="image/webp"
            />
            <Image
              src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
              alt="Video"
            />
          </picture>
        </>
      ) : (
        <StyledIframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${id}?rel=0&showinfo=0&autoplay=1`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      )}
    </Wrapper>
  )
}

export default Video
