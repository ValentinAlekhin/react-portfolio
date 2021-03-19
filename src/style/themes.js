import { darken, lighten, rgba } from 'polished'

import darkBg from './pattern.svg'
import lightBg from './light_bg.svg'

const darkThemeFontColor = '#fefefe'
const lightThemeFontColor = '#000'

export const dark = {
  id: '0',
  background: darkBg,
  fontColor: darkThemeFontColor,
  navLink: {
    notActiveColor: darken(0.4, darkThemeFontColor),
  },
  projectCard: {
    background: rgba(darkThemeFontColor, 0.05),
    backgroundHover: rgba(darkThemeFontColor, 0.07),
    statusColor: darken(0.7, darkThemeFontColor),
    descriptionColor: darken(0.3, darkThemeFontColor),
  },
  badge: {
    background: rgba(darkThemeFontColor, 0.1),
    textColor: darken(0.1, darkThemeFontColor),
    linkColor: '#4682b4',
    linkColorHover: lighten(0.1, '#4682b4'),
  },
  selection: {
    color: '#000',
    background: '#9b9b9b',
  },
}

export const light = {
  id: '1',
  background: lightBg,
  fontColor: lightThemeFontColor,
  navLink: {
    notActiveColor: lighten(0.4, lightThemeFontColor),
  },
  projectCard: {
    background: rgba(lightThemeFontColor, 0.05),
    backgroundHover: rgba(lightThemeFontColor, 0.07),
    statusColor: lighten(0.5, lightThemeFontColor),
    descriptionColor: lighten(0.2, lightThemeFontColor),
  },
  badge: {
    background: rgba(lightThemeFontColor, 0.12),
    textColor: lighten(0.1, lightThemeFontColor),
    linkColor: '#4B789F',
    linkColorHover: lighten(0.1, '#4B789F'),
  },
  selection: {
    color: '#fff',
    background: lightThemeFontColor,
  },
}
