import React, { useState, useContext } from 'react'
import { AnimatePresence } from 'framer-motion/dist/es/components/AnimatePresence/index'

import { ThemeContext } from '../../context/ThemeState'

import Image from '../Image/Image'

import { Wrapper, Slide, NextBtn, PrevBtn, ArrowIcon } from './styled'

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
  const { theme } = useContext(ThemeContext)
  const [[index, direction], setPage] = useState([0, 0])

  const paginate = newDirection => {
    if (index === 0 && newDirection === -1) return
    if (index + 1 === images.length && newDirection === 1) return
    setPage([index + newDirection, newDirection])
  }

  return (
    <Wrapper>
      {index === 0 ? null : (
        <NextBtn theme={theme} onClick={() => paginate(-1)}>
          <ArrowIcon theme={theme} />
        </NextBtn>
      )}
      {index + 1 === images.length ? null : (
        <PrevBtn theme={theme} onClick={() => paginate(1)}>
          <ArrowIcon theme={theme} right />
        </PrevBtn>
      )}

      <AnimatePresence initial={false} custom={direction}>
        <Slide
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
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
