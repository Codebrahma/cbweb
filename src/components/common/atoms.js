import styled from '@emotion/styled'
import { alignSelf, width, style, maxWidth, color, space, fontSize, fontFamily, lineHeight} from 'styled-system'
import theme from '../theme'

const hidable = style({
  prop: 'display',
});

const horizontalRuleHeight = style({
  prop: 'height',
  cssProperty: 'borderTopWidth',
});

const horizontalRuleColor = style({
  prop: 'color',
  cssProperty: 'borderTopColor',
  key: 'colors',
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
  fontFamily: theme.fonts.heading,
  fontSize: ['mxxl','xxl'],
  lineHeight: [3,3],
  marginTop: [4,5],
  marginBottom: 1,
} 
export const H2 = styled.h2`
  ${fontFamily} ${fontSize} ${lineHeight} ${space}
`
H2.defaultProps = {
  fontFamily: theme.fonts.heading,
  fontSize: ['mxl', 'xl'],
  lineHeight: [2,2],
  marginTop: [3,4],
  marginBottom: 0,
} 
export const H3 = styled.h3`
  ${fontFamily} ${fontSize} ${lineHeight} ${space}
`
H3.defaultProps = {
  fontFamily: theme.fonts.heading,
  fontSize: ['ml', 'l'],
  lineHeight: [1,1],
  marginTop: [ 2,3 ],
  marginBottom: 0,
} 
export const H4 = styled.h4`
  ${fontFamily} ${fontSize} ${lineHeight} ${space}
`
H4.defaultProps = {
  fontFamily: theme.fonts.heading,
  fontSize: ['mm', 'm'],
  lineHeight: [1,1],
  marginTop: 2,
  marginBottom: 0,
} 
export const H5 = styled.h5`
  ${fontFamily} ${fontSize} ${lineHeight} ${space}
`
H5.defaultProps = {
  fontFamily: theme.fonts.heading,
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
  fontFamily: theme.fonts.body,
  fontSize: ['mbody', 'body'],
  lineHeight: 1,
  marginTop: 1,
  maxWidth: '40rem',
} 

export const B = styled.b`
  ${fontFamily}
`
B.defaultProps = {
  fontFamily: theme.fonts.bold
}

export const I = styled.b`
  ${fontFamily}
`
I.defaultProps = {
  fontFamily: theme.fonts.italic
}

export const Text = styled.div`
  ${color}
  ${fontFamily} ${fontSize}
  ${lineHeight}
  ${space}
`;
Text.displayName = 'Text';
Text.defaultProps = {
  fontFamily: theme.fonts.body,
  fontSize: ['mbody', 'body'],
  lineHeight: 1,
  maxWidth: '40rem',
} 

Text.span = Text.withComponent('span');

export const HorizontalRule = styled.div`
  border-top-style: ${({ type }) => type};
  display: block;
  height: 1px;

  ${width}
  ${horizontalRuleColor}
  ${horizontalRuleHeight}
`;

HorizontalRule.defaultProps = {
  type: 'solid',
};

