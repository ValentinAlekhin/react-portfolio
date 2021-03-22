import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import { Wrapper, StyledLoader } from './styled'

const exit = { opacity: 0, transition: { delay: 0.8 } }

const Preloader = () => {
  const [loading, setLoading] = useState(true)

  const t1 = Date.now()

  window.onload = () => {
    const t2 = Date.now()
    const loadingTimeInSeconds = (t2 - t1) / 1000
    if (loadingTimeInSeconds > 1000) {
      exit.transition.delay = 0
    }

    setLoading(false)
  }

  return (
    <AnimatePresence>
      {loading ? (
        <Wrapper initial={false} exit={exit}>
          <StyledLoader type="Rings" color="#fff" height={100} width={100} />
        </Wrapper>
      ) : null}
    </AnimatePresence>
  )
}

export default Preloader
