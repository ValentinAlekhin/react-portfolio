import { darken, lighten, rgba } from 'polished'

import darkBg from './images/dark_bg.svg'
import lightBg from './images/light_bg.svg'

const darkThemeFontColor = '#fefefe'
const lightThemeFontColor = '#000'

export const dark = {
  id: '0',
  backgroundColor: '#000',
  background: darkBg,
  fontColor: darkThemeFontColor,
  navLink: {
    notActiveColor: darken(0.4, darkThemeFontColor),
  },
  projectCard: {
    background: rgba('#fff', 0.08),
    backgroundHover: rgba('#fff', 0.1),
    borderColor: rgba('#fff', 0.12),
    boxShadow: rgba('#000', 1),
    statusColor: darken(0.7, darkThemeFontColor),
    descriptionColor: darken(0.3, darkThemeFontColor),
  },
  sideNav: {
    background: lighten(0.2, '#000'),
  },
  imageGallery: {
    controlBackground: rgba('#000', 0.5),
  },
  markdown: {
    background: '#151619',
    linkColor: '#58a6ff',
    hrLineColor: '#21262d',
    togglerColor: darken(0.6, darkThemeFontColor),
    codeTheme: 'anOldHope',
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
  backgroundColor: '#fff',
  background: lightBg,
  fontColor: lightThemeFontColor,
  navLink: {
    notActiveColor: lighten(0.5, lightThemeFontColor),
  },
  projectCard: {
    background: rgba('#000', 0.06),
    backgroundHover: rgba('#000', 0.08),
    borderColor: '#fff',
    boxShadow: rgba('#000', 0.2),
    statusColor: lighten(0.5, lightThemeFontColor),
    descriptionColor: lighten(0.2, lightThemeFontColor),
  },
  sideNav: {
    background: darken(0.1, '#fff'),
  },
  imageGallery: {
    controlBackground: rgba('#000', 0.4),
  },
  markdown: {
    background: darken(0.15, '#fff'),
    linkColor: '#58a6ff',
    hrLineColor: lighten(0.5, lightThemeFontColor),
    togglerColor: lighten(0.5, lightThemeFontColor),
    codeTheme: 'monoBlue',
  },
  badge: {
    background: rgba(lightThemeFontColor, 0.12),
    textColor: lighten(0.1, lightThemeFontColor),
    linkColor: '#4B789F',
    linkColorHover: darken(0.2, '#4B789F'),
  },
  selection: {
    color: '#fff',
    background: lightThemeFontColor,
  },
}
