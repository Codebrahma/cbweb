import styled from '@emotion/styled'
import { css }  from 'bricks'

import {  space, color, border, fontFamily, fontSize, borderColor } from 'styled-system'

export const InputText = styled('input')(
  css({
    appearance: 'none',
    type: 'text',
    fontFamily: 'body',
    fontSize: 'desktop.1'
  }),
  color, space, fontFamily, fontSize,
  border, borderColor
)