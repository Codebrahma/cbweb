import React from "react"
import styled from "@emotion/styled"
import { Flex, Box } from "@chakra-ui/core"
import Title from "./title"

const OrderedList = styled.ol`
  margin: 0;
`;

const ListItem = styled.li`
  margin-top: 10px;
  margin-bottom: 10px;
`

export default () => (
  <Flex flexWrap="wrap">
    <Box width={['100%', 1 / 3]}>
      <Title
        fontSize={[2, 'desktop.2']}
        fontWeight="bold"
        borderWidth={0}
      >
        Code Standard
      </Title>
      <OrderedList>
        <ListItem>ES7 and ES6 Ready code</ListItem>
        <ListItem>Airbnb-eslint</ListItem>
        <ListItem>Flow js</ListItem>
      </OrderedList>
    </Box>
    <Box width={['100%', 1 / 3]}>
      <Title
        fontSize={[2, 'desktop.2']}
        fontWeight="bold"
        borderWidth={0}
      >
        State Management
      </Title>
      <OrderedList>
        <ListItem>Redux</ListItem>
        <ListItem>Mobx</ListItem>
      </OrderedList>
    </Box>

    <Box width={['100%', 1 / 3]}>
      <Title
        fontSize={[2, 'desktop.2']}
        fontWeight="bold"
        borderWidth={0}
      >
        Bundler
      </Title>
      <OrderedList>
        <ListItem>Webpack</ListItem>
        <ListItem>Gulp</ListItem>
      </OrderedList>
    </Box>

    <Box width={['100%', 1 / 3]}>
      <Title
        fontSize={[2, 'desktop.2']}
        fontWeight="bold"
        borderWidth={0}
      >
        Async Libraries
      </Title>
      <OrderedList>
        <ListItem>redux-saga</ListItem>
        <ListItem>redux-observables</ListItem>
        <ListItem>redux-thunk</ListItem>
      </OrderedList>
    </Box>

    <Box width={['100%', 1 / 3]}>
      <Title
        fontSize={[2, 'desktop.2']}
        fontWeight="bold"
        borderWidth={0}
      >
        Testing Libraries
      </Title>
      <OrderedList>
        <ListItem>Enzyme</ListItem>
        <ListItem>Mocha</ListItem>
        <ListItem>Chai</ListItem>
        <ListItem>Jasmine</ListItem>
      </OrderedList>
    </Box>

    <Box width={['100%', 1 / 3]}>
      <Title
        fontSize={[2, 'desktop.2']}
        fontWeight="bold"
        borderWidth={0}
      >
        Form Libraries
      </Title>
      <OrderedList>
        <ListItem>Redux-forms</ListItem>
        <ListItem>Formsy-React</ListItem>
      </OrderedList>
    </Box>
  </Flex>
)
