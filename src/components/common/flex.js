import styled from '@emotion/styled'
import { Box } from './atoms';
import {
  alignItems,
  flexDirection,
  flexWrap,
  justifyContent,
  order,
} from 'styled-system';

export const Flex = styled(Box)`
  display: flex;

  ${alignItems}
  ${flexDirection}
  ${flexWrap}
  ${justifyContent}
  ${order}
`;
Flex.column = styled(Flex)`
  flex-direction: column;
`;