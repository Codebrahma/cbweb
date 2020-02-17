import React from 'react';
import styled from '@emotion/styled';
import { fontFamily, fontSize, lineHeight, space, border } from 'styled-system';

export const withTitleStyle = (comp) => styled(comp)`
  ${fontFamily}
  ${fontSize}
  ${lineHeight}
  ${space}
  ${border}
`;

const Title = ({ comp, ...otherProps }) => {
  const TitleComponent = withTitleStyle(comp || 'span');

  return (
    <TitleComponent
      fontFamily="heading"
      fontSize={[4, 'desktop.4']}
      lineHeight={2}
      mt={[3, 4]}
      mb={1}
      px={0}
      pt={0}
      pb="2px"
      borderBottom={`1px solid`}
      borderColor="black.0"
      {...otherProps}
    />
  );
}

export default Title;
