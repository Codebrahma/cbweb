import React from 'react'
import { PseudoBox } from '@chakra-ui/core';

const H1 = (props) => (
  <PseudoBox
    as='h1'
    fontFamily='heading'
    fontSize={[5,'desktop.5']}
    lineHeight={3}
    mt={[3, 4]}
    mb={1}
    p={0}
    {...props}
  />
)
const H2 = (props) => (
  <PseudoBox
    as='h2'
    fontFamily='heading'
    fontSize={[4,'desktop.4']}
    lineHeight={2}
    mt={[3, 4]}
    mb={1}
    p={0}
    {...props}
  />
)
const H3 = (props) => (
  <PseudoBox
    as='h3'
    fontFamily='heading'
    fontSize={[3,'desktop.3']}
    lineHeight={1}
    mt={[2, 3]}
    mb={1}
    p={0}
    {...props}
  />
)
const H4 = (props) => (
  <PseudoBox
    as='h4'
    fontFamily='heading'
    fontSize={[2,'desktop.2']}
    lineHeight={1}
    mt={2}
    mb={1}
    p={0}
    {...props}
  />
)
const H5 = (props) => (
  <PseudoBox
    as='h4'
    fontFamily='heading'
    fontSize={[1,'desktop.1']}
    lineHeight={1}
    mt={2}
    mb={1}
    p={0}
    {...props}
  />
)

const P = (props) => (
  <PseudoBox
    as='p'
    lineHeight='1'
    fontSize={[1, 'desktop.1']}
    mb='2'
    {...props}
  />
)

const B = (props) => (
  <PseudoBox
    as='b'
    fontFamily='bold'
    {...props}
  />
)
const Em = (props) => (
  <PseudoBox
    as='em'
    fontFamily='italic'
    {...props}
  />
)

const I = (props) => (
  <PseudoBox
    as='i'
    fontFamily='italic'
    {...props}
  />
)

const Ul = (props) => (
  <PseudoBox
    as='ul'
    listStyle='disc inside none'
    mb={2}
    {...props}
  />
)
const Ol = (props) => (
  <PseudoBox
    as='ol'
    listStyle='decimal inside none'
    mb={2}
    {...props}
  />
)
const Li = (props) => (
  <PseudoBox
    as='li'
    mb='0.5rem'
    fontFamily='body'
    fontSize={[1, 'desktop.1']}
    maxWidth="40rem"
    mb={1}
    {...props}
  />
)

const Title = (props) => (
  <PseudoBox
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

export {
  H1, H2, H3, H4, H5, Title, P, B, Em, I, Ul, Ol, Li
}