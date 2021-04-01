import styled, { css } from 'styled-components'

import { ReactComponent as PlaySVG } from './Play.svg'

const contentStyles = css`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
`

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  background-color: #000;
  overflow: hidden;
  border-radius: 5px;
  margin-bottom: 2rem;
`

export const StyledIframe = styled.iframe`
  ${contentStyles}
  border: none;
`

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  ${contentStyles}
`

export const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  padding: 0;
  width: 68px;
  height: 48px;
  border: none;
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
`
export const PlayIcon = styled(PlaySVG)`
  .button-shape {
    fill: #212121;
    fill-opacity: 0.8;
    transition: fill 0.3s;
  }

  &:hover .button-shape {
    fill: #ff0000;
    fill-opacity: 1;
  }

  .button-icon {
    fill: #fff;
  }
`
