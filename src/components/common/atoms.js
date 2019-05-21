import styled from '@emotion/styled'
import { alignSelf, style, maxWidth, color, space, fontSize, fontFamily, lineHeight} from 'styled-system'
import theme from '../theme'

const hidable = style({
  prop: 'display',
});
export const Box = styled.div`
  ${color} ${space} ${hidable}
  ${alignSelf}
`
export const H1 = styled.h1`
  ${fontFamily} ${fontSize} ${lineHeight}
  ${space}
`
H1.defaultProps = {
  fontFamily: theme.font.heading,
  fontSize: ['mxxl','xxl'],
  lineHeight: [3,3],
  marginTop: [4,5],
  marginBottom: 1,
} 
export const H2 = styled.h2`
  ${fontFamily} ${fontSize} ${lineHeight} ${space}
`
H2.defaultProps = {
  fontFamily: theme.font.heading,
  fontSize: ['mxl', 'xl'],
  lineHeight: [2,2],
  marginTop: [3,4],
  marginBottom: 0,
} 
export const H3 = styled.h3`
  ${fontFamily} ${fontSize} ${lineHeight} ${space}
`
H3.defaultProps = {
  fontFamily: theme.font.heading,
  fontSize: ['ml', 'l'],
  lineHeight: [1,1],
  marginTop: [ 2,3 ],
  marginBottom: 0,
} 
export const H4 = styled.h4`
  ${fontFamily} ${fontSize} ${lineHeight} ${space}
`
H4.defaultProps = {
  fontFamily: theme.font.heading,
  fontSize: ['mm', 'm'],
  lineHeight: [1,1],
  marginTop: 2,
  marginBottom: 0,
} 
export const H5 = styled.h5`
  ${fontFamily} ${fontSize} ${lineHeight} ${space}
`
H5.defaultProps = {
  fontFamily: theme.font.heading,
  fontSize: ['mbody', 'body'],
  lineHeight: 1,
  marginTop: 3,
  marginBottom: 0,
}

export const P = styled.p`
  ${fontFamily} ${fontSize} ${lineHeight}
  ${space} ${maxWidth}
`;
P.defaultProps = {
  fontFamily: theme.font.body,
  fontSize: ['mbody', 'body'],
  lineHeight: 1,
  marginTop: 1,
  maxWidth: '40rem',
} 


export const Text = styled.div`
  ${color}
  ${fontFamily} ${fontSize}
  ${lineHeight}
  ${space}
`;
Text.displayName = 'Text';
Text.defaultProps = {
  fontFamily: theme.font.body,
  fontSize: ['mbody', 'body'],
  lineHeight: 1,
  maxWidth: '40rem',
} 

Text.span = Text.withComponent('span');