import { css } from 'styled-components'

const breakpoint = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
}

const colors = {
  light: '#fff',
  dark1: '#5C4033',
  dark2: '#414141',
  primary: '#b8734a',
  secondary: '#9bd4df',
  primaryGradient: 'linear-gradient(180deg, #FFCC21 0%, #FF963C 100%)',
  gray1: '#777777',
  gray2: '#2e2e2e',
  background: '#faf9f3',
}

const fontSizes = {
  xs: '10px',
  sm: '12px',
  md: '14px',
  lg: '18px',
  xl: '22px',
  xxl: '26px',
  xxxl: '30px',
}

const fontWeights = {
  light: 300,
  regular: 400,
  bold: 700,
}

const fontFamily = {
  jp: 'Noto Sans JP',
  en: 'Dancing Script',
  vi: 'Dancing Script',
}

const borderRadius = {
  sm: '3px',
  md: '5px',
  lg: '8px',
  rounded: '999px',
}

const boxShadow = {
  md: '0px 3px 6px rgba(0, 0, 0, 0.160784)',
}

const container = {
  md: '960px',
}

const truncateMultipleLine = (linesToShow: number = 1) => css`
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: ${linesToShow};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  breakpoint,
  colors,
  fontSizes,
  fontWeights,
  fontFamily,
  borderRadius,
  boxShadow,
  container,
  truncateMultipleLine,
}
