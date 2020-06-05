import customTheme from "../theme"

const {
  fonts,
  colors,
  lineHeights,
  space,
  breakpoints,
  fontSizes
} = customTheme;

export const globalStyle = {
  'a:visited': {
    color: 'inherit',
  },
  'a:hover': {
    cursor: 'pointer',
  },
  'body': {
    fontFamily: fonts.body,
    color: colors.primary,
    // lineHeight: lineHeights[2],
  },
  '*': {
    boxSizing: 'border-box',
  },
  'p': {
    lineHeight: lineHeights[1],
    marginBottom: space[2],
  },
  h1: {
    fontFamily: fonts.heading,
    fontSize: fontSizes.desktop[5],
    lineHeight: lineHeights[3],
    marginTop: space[4], 
    marginBottom: space[1],
    padding: space[0],
  },
  h2: {
    fontFamily: fonts.heading,
    fontSize: fontSizes.desktop[4],
    lineHeight: lineHeights[2],
    marginTop: space[4],
    marginBottom: space[1],
    padding: space[0],
  },
   h3: {
    fontFamily: fonts.heading,
    fontSize: fontSizes.desktop[3],
    lineHeight: lineHeights[1],
    marginTop: space[3],
    marginBottom: space[1],
    padding: space[0],
  },
  h4: {
    fontFamily: fonts.heading,
    fontSize: fontSizes.desktop[2],
    lineHeight: lineHeights[1],
    marginTop: space[2],
    marginBottom: space[1],
    padding: space[0],
  },
  h5: {
    fontFamily: fonts.heading,
    fontSize: fontSizes.desktop[1],
    lineHeight: lineHeights[1],
    marginTop: space[2],
    marginBottom: space[1],
    padding: space[0],
  },
  b: {
    fontFamily: fonts.bold,
  },
  strong: {
    fontFamily: fonts.bold,
  },
  em: {
    fontFamily: fonts.italic,
  },
  i: {
    fontFamily: fonts.italic,
  },
  ul: {
    listStyle: 'disc inside none' ,
    mb: space[2],
  },
  ol: {
    listStyle: 'decimal inside none',
  },
  li: {
    mb: '0.5rem',
    fontFamily: fonts.body,
    fontSize: fontSizes.desktop[1],
    lineHeight: lineHeights[1],
    maxWidth: '40rem',
    marginBottom: space[1],
  },
  [`@media screen and (max-width: ${breakpoints[0]})`]: {
    body: {
      fontSize: fontSizes[1]
    },
    h1: {
      fontSize: fontSizes[5],
      marginTop: space[3], 
    },
    h2: {
      fontSize: fontSizes[4],
      marginTop: space[3], 
    },
    h3: {
      fontSize: fontSizes[3],
      marginTop: space[2], 
    },
    h4: {
      fontSize: fontSizes[2],
    },
    h5: {
      fontSize: fontSizes[1],
    },
    p: {
      fontSize: fontSizes[1],
    },
    li: {
      fontSize: fontSizes[1],
    }
  }
}
