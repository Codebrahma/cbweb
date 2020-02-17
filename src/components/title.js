import styled from '@emotion/styled';
import { H2 } from 'bricks';

export const withTitleStyle = (comp) => styled(comp)`
  padding-bottom: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black[1]};
`;

export default withTitleStyle(H2);
