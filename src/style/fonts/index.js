import { createGlobalStyle } from 'styled-components'

import ManropeRegular from './Manrope-Regular.ttf'
import ManropeExtraLight from './Manrope-ExtraLight.ttf'
import ManropeLight from './Manrope-Light.ttf'
import ManropeMedium from './Manrope-Medium.ttf'
import ManropeSemiBold from './Manrope-SemiBold.ttf'
import ManropeBold from './Manrope-Bold.ttf'
import ManropeExtraBold from './Manrope-ExtraBold.ttf'

const GlobalFonts = createGlobalStyle`
   @font-face {
        font-family: 'Manrope';
        src: local('Manrope'),
        url(${ManropeRegular}) format('truetype');
        font-weight: 400;
        font-style: regular;
    }

   @font-face {
        font-family: 'Manrope';
        src: local('Manrope'),
        url(${ManropeExtraLight}) format('truetype');
        font-weight: 200;
        font-style: extra-light;
    }

   @font-face {
        font-family: 'Manrope';
        src: local('Manrope'),
        url(${ManropeLight}) format('truetype');
        font-weight: 300;
        font-style: light;
    }

   @font-face {
        font-family: 'Manrope';
        src: local('Manrope'),
        url(${ManropeMedium}) format('truetype');
        font-weight: 500;
        font-style: medium;
    }

   @font-face {
        font-family: 'Manrope';
        src: local('Manrope'),
        url(${ManropeSemiBold}) format('truetype');
        font-weight: 600;
        font-style: semi-bold;
    }

   @font-face {
        font-family: 'Manrope';
        src: local('Manrope'),
        url(${ManropeBold}) format('truetype');
        font-weight: 700;
        font-style: bold;
    }

   @font-face {
        font-family: 'Manrope';
        src: local('Manrope'),
        url(${ManropeExtraBold}) format('truetype');
        font-weight: 800;
        font-style: extra-bold;
    }
`

export default GlobalFonts
