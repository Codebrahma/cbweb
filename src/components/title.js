import React from 'react';
import { Text } from '@chakra-ui/core';

const Title = (props) => (
  <Text
    as='span'
    fontFamily="heading"
    fontSize={[4, 'desktop.4']}
    lineHeight={2}
    mt={[3, 4]}
    mb={1}
    p={0}
    pb="2px"
    borderBottom='1px'
    borderColor="black.0"
    {...props}
  />
);

export default Title;
