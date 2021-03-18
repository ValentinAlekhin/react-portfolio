import { darken, lighten } from 'polished'

import darkBg from './pattern.svg'

export const dark = {
  id: '0',
  background: darkBg,
  fontColor: '#fefefe',
  navLink: {
    notActiveColor: darken(0.4, '#fefefe'),
  },
  selection: {
    color: '#000',
    background: '#9b9b9b',
  },
}

export const light = {
  id: '1',
  background: darkBg,
  fontColor: '#000',
  navLink: {
    notActiveColor: lighten(0.4, '#fefefe'),
  },
  selection: {
    color: '#fff',
    background: '#000',
  },
}
