import {styled} from 'bricks';
import { maxWidth, space } from 'styled-system';
import PropTypes from 'prop-types';

import theme from '../theme';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  ${maxWidth}
  ${space}
`;

Container.propTypes = {
  maxWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ])
};

Container.defaultProps = {
  maxWidth: theme.maxContainerWidth,
  px: 1,
};

Container.displayName = 'Container';
export default Container;
