import React, { useState, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'

import Image from '../Image/Image'

import { Wrapper, Slide, Control } from './styled'

const variants = {
  enter: direction => {
    return {
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,

    opacity: 1,
  },
  exit: direction => {
    return {
      zIndex: 0,
      x: direction < 0 ? '-100%' : '100%',
      opacity: 0,
    }
  },
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

const ImageGallery = ({ images }) => {
  const [[index, direction], setPage] = useState([0, 0])

  const paginate = newDirection => {
    if (index === 0 && newDirection === -1) return
    if (index + 1 === images.length && newDirection === 1) return
    setPage([index + newDirection, newDirection])
  }

  return (
    <Wrapper>
      {/* <button onClick={() => paginate(-1)}>Prev</button>
      <button onClick={() => paginate(1)}>Next</button> */}

      <AnimatePresence initial={false} custom={direction}>
        <Slide
          key={images[index].original}
          custom={direction}
          variants={variants}
          initial={variants.enter}
          animate={variants.center}
          exit={variants.exit}
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
        >
          <Image
            original={images[index].original}
            placeholder={images[index].placeholder}
          />
        </Slide>
      </AnimatePresence>
    </Wrapper>
  )
}

export default ImageGallery
