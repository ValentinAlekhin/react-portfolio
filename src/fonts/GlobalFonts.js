import { createGlobalStyle } from 'styled-components'

import ManropeExtraLightWoff from './Manrope-ExtraLight.woff'
import ManropeLightWoff from './Manrope-Light.woff'
import ManropeRegularWoff from './Manrope-Regular.woff'
import ManropeMediumWoff from './Manrope-Medium.woff'
import ManropeSemiBoldWoff from './Manrope-SemiBold.woff'
import ManropeBoldWoff from './Manrope-Bold.woff'
import ManropeExtraBoldWoff from './Manrope-ExtraBold.woff'

import ManropeExtraLightWoff2 from './Manrope-ExtraLight.woff2'
import ManropeLightWoff2 from './Manrope-Light.woff2'
import ManropeRegularWoff2 from './Manrope-Regular.woff2'
import ManropeMediumWoff2 from './Manrope-Medium.woff2'
import ManropeSemiBoldWoff2 from './Manrope-SemiBold.woff2'
import ManropeBoldWoff2 from './Manrope-Bold.woff2'
import ManropeExtraBoldWoff2 from './Manrope-ExtraBold.woff2'

const fonts = [
  // WOFF
  { url: ManropeExtraLightWoff, format: 'woff', weight: 200 },
  { url: ManropeLightWoff, format: 'woff', weight: 300 },
  { url: ManropeRegularWoff, format: 'woff', weight: 400 },
  { url: ManropeMediumWoff, format: 'woff', weight: 500 },
  { url: ManropeSemiBoldWoff, format: 'woff', weight: 600 },
  { url: ManropeBoldWoff, format: 'woff', weight: 700 },
  { url: ManropeExtraBoldWoff, format: 'woff', weight: 800 },
  // WOFF2
  { url: ManropeExtraLightWoff2, format: 'woff2', weight: 200 },
  { url: ManropeLightWoff2, format: 'woff2', weight: 300 },
  { url: ManropeRegularWoff2, format: 'woff2', weight: 400 },
  { url: ManropeMediumWoff2, format: 'woff2', weight: 500 },
  { url: ManropeSemiBoldWoff2, format: 'woff2', weight: 600 },
  { url: ManropeBoldWoff2, format: 'woff2', weight: 700 },
  { url: ManropeExtraBoldWoff2, format: 'woff2', weight: 800 },
]
  .map(
    ({ weight, url, format }) => `
      @font-face {
        font-family: 'Manrope';
        font-style: normal;
        font-weight: ${weight};
        font-display: swap;
        src: url(${url}) format('${format}');
      }
    `
  )
  .join('\n')

const GlobalFonts = createGlobalStyle`
  ${fonts}
`

export default GlobalFonts
