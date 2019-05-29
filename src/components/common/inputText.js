import { styled } from 'bricks'
import {  space, color, border, fontFamily, fontSize, borderColor } from 'styled-system'

export const InputText = styled.input`
  appearance: none;
  ${ color } ${space} ${fontFamily} ${fontSize}
  ${ border } ${borderColor}
`
InputText.defaultProps = {
  type: 'text',
  fontFamily: 'body',
  fontSize: 'body'
}