import { createGlobalStyle } from 'styled-components'

import ManropeWoff from './Manrope.woff'
import ManropeWoff2 from './Manrope.woff2'
import ManropeTTF from './Manrope.ttf'

const GlobalFonts = createGlobalStyle`
   @font-face {
        font-family: 'Manrope';
        src: local('Manrope'),
        url(${ManropeTTF}) format('truetype-variations');
        font-display: swap;
        font-stretch: 85% 100%;
        font-weight: 1 999;
        font-style: normal;
    }
   /* @font-face {
        font-family: 'Manrope';
        src: local('Manrope'),
        url(${ManropeWoff}) format('woff supports variations');
        font-display: swap;
        font-stretch: 85% 100%;
        font-weight: 200 800;
        font-style: normal;
    } */
   /* @font-face {
        font-family: 'Manrope';
        src: local('Manrope'),
        url(${ManropeWoff2}) format('woff2-variations');
        font-display: swap;
        font-stretch: 85% 100%;
        font-weight: 200 800;
        font-style: normal;
    } */
`

export default GlobalFonts
