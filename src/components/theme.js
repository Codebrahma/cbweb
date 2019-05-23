const maxContainerWidth = '70rem'
const baseLineHeight = '1.45'; //24.8px
const baseSize = '1.125'; //18px
const mbaseSize = '1'; //16px
const breakpoints = [
  '52em',
]
const scale = [
  1, 1.2, 1.375, 1.6875, 2.5
];

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
const fontSizes = {
  xs: 0.5 * baseSize + 'rem',
  s: 0.75 * baseSize + 'rem',
  body: scale[0] * baseSize + 'rem',
  m: scale[1] * baseSize + 'rem',
  l: scale[2] * baseSize + 'rem',
  xl: scale[3] * baseSize + 'rem',
  xxl: scale[4] * baseSize + 'rem',
  ms: 0.75 * mbaseSize + 'rem',
  mbody: scale[0] * mbaseSize + 'rem',
  mm: scale[1] * mbaseSize + 'rem',
  ml: scale[2] * mbaseSize + 'rem',
  mxl: scale[3] * mbaseSize + 'rem',
  mxxl: scale[4] * mbaseSize + 'rem',
};
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