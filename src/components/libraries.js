import React from "react"
import { Flex, H3, Box } from "bricks"

export default () => (
  <Flex flexWrap="wrap">
    <Box width={[1, 1 / 3]}>
      <H3>Code Standard</H3>
      <ol>
        <li>ES7 and ES6 Ready code</li>
        <li>Airbnb-eslint</li>
        <li>Flow js</li>
      </ol>
    </Box>
    <Box width={[1, 1 / 3]}>
      <H3>State Management</H3>
      <ol>
        <li>Redux</li>
        <li>Mobx</li>
      </ol>
    </Box>

    <Box width={[1, 1 / 3]}>
      <H3>Bundler</H3>
      <ol>
        <li>Webpack</li>
        <li>Gulp</li>
      </ol>
    </Box>

    <Box width={[1, 1 / 3]}>
      <H3>Async Libraries</H3>
      <ol>
        <li>redux-saga</li>
        <li>redux-observables</li>
        <li>redux-thunk</li>
      </ol>
    </Box>

    <Box width={[1, 1 / 3]}>
      <H3>Testing Libraries</H3>
      <ol>
        <li>Enzyme</li>
        <li>Mocha</li>
        <li>Chai</li>
        <li>Jasmine</li>
      </ol>
    </Box>

    <Box width={[1, 1 / 3]}>
      <H3>Form Libraries</H3>
      <ol>
        <li>Redux-forms</li>
        <li>Formsy-React</li>
      </ol>
    </Box>
  </Flex>
)
