import styled from '@emotion/styled';
import css from '@styled-system/css';
import {  space, color, typography, border, borderColor } from 'styled-system';

export default styled.button(
  css({
    appearance: 'none',
    fontFamily: 'body',
    fontSize: 'desktop.1',
    border: '3px solid',
    borderColor: 'black.1',
    color: 'black.1',
    bg: 'tint',
    p: '5px 40px',
    borderRadius: '5px',
  }),
  color, space, typography,
  border, borderColor
);
