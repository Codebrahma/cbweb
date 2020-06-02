import { theme } from "@chakra-ui/core"

const maxContainerWidth = '70rem'
const baseLineHeight = 1.45; //24.8px
const desktopBaseSize = 1.125; //18px
const mobileBaseSize = 1; //16px
const breakpoints = [
  '48rem',
]
const scale = [
  0.75, 1, 1.2, 1.375, 1.6875, 2.5
];

const fontSizes = scale.map(n=> n*mobileBaseSize + 'rem')
//desktops
fontSizes.desktop = scale.map(n=> n*desktopBaseSize + 'rem')

const fonts = {
  heading: 'TiemposHeadline',
  body: "TiemposText",
  bold: 'TiemposBold',
  italic: 'TiemposItalic'
}

theme.sizes['maxContainerWidth'] = maxContainerWidth

theme.borders['3px'] = '3px solid'

const radii = [0, 1, 2, 4, 8, 16];

const lineHeights = [
  0.5 * baseLineHeight + 'rem',
  1 * baseLineHeight + 'rem', 
  1.5 * baseLineHeight + 'rem', 
  2 * baseLineHeight + 'rem',
  2.5 * baseLineHeight + 'rem',
  3 * baseLineHeight + 'rem',
];

const space = [0, ...lineHeights];

const colors = {
  tint: '#F8F4F2',
  black: ['#0F0F0F','#333333', '#666666', '#999999', '#E0E0E0'],
}
colors.primary = colors.black[1]
colors.secondary = colors.tint

const customTheme = {
  ...theme,
  breakpoints,
  space,
  fontSizes,
  radii,
  lineHeights,
  fonts,
  colors,
}
export default customTheme;