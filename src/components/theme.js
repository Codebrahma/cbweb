const maxContainerWidth = '70rem'
const baseLineHeight = 1.45; //24.8px
const desktopBaseSize = 1.125; //18px
const mobileBaseSize = 1; //16px
const breakpoints = [
  '52em',
]
const scale = [
  0.75,1, 1.2, 1.375, 1.6875, 2.5
];

const fontSizes = scale.map(n=> n*mobileBaseSize + 'rem')
fontSizes.desktop = scale.map(n=> n*desktopBaseSize + 'rem')

const fonts = {
  heading: 'TiemposHeadline',
  body: "TiemposText",
  bold: 'TiemposBold',
  italic: 'TiemposItalic'
}
const lineHeights = [
  0.5 * baseLineHeight + 'rem',
  1 * baseLineHeight + 'rem', 
  1.5 * baseLineHeight + 'rem', 
  2 * baseLineHeight + 'rem',
  2.5 * baseLineHeight + 'rem',
  3 * baseLineHeight + 'rem',
];
const space = [0,...lineHeights];

const colors = {
  tint: '#F8F4F2',
  black: ['#0F0F0F','#333333'],
  
}

const theme = {
  breakpoints,
  space,
  fontSizes,
  lineHeights,
  maxContainerWidth,
  fonts,
  colors,
}
export default theme;