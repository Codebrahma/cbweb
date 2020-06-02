import React from 'react';
import { Box, Text } from '@chakra-ui/core';

import Title from './title';

export default () => (
  <Box width={['100%', 4 / 5 ]}>
    <Title>Reliable ReactJS Development Services</Title>
    <br />
    <br />
    <Title
      fontSize={[2, 'desktop.2']}
      fontWeight="bold"
      borderWidth={0}
      mt={2}
    >
      Fast, modular and Bug free React JS development service
    </Title>
    <Text>
      We develop your application with atleast 30% faster than other development companies.
    </Text>

    <Title
      fontSize={[2, 'desktop.2']}
      fontWeight="bold"
      borderWidth={0}
      mt={2}
    >
      Javascript Lovers
    </Title>
    <Text>
      We specialise in servicing modern JavaScript based web & mobile applications. We are experts in developing applications in React.js, AngularJS, Node.js
    </Text>

    <Title
      fontSize={[2, 'desktop.2']}
      fontWeight="bold"
      borderWidth={0}
      mt={2}
    >
      Expert React JS Developers
    </Title>
    <Text>
      We have a set of skilful React JS developers who are updated with current React Eco System
    </Text>

    <Title
      fontSize={[2, 'desktop.2']}
      fontWeight="bold"
      borderWidth={0}
      mt={2}
    >
      Best React JS development Service history
    </Title>
    <Text>
      We have 15+ React projects delivered to clients in quick time
    </Text>
  </Box>
);
