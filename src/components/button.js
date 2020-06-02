import React from 'react'
import { Button as Btn } from '@chakra-ui/core';

const Button = (props) => (
  <Btn 
    borderRadius={3}
    variant="outline"
    bg='transparent'
    border='3px'
    py='1'
    h='auto'
    px='4'
    lineHeight='1'
    fontFamily='body'
    fontWeight='hairline'
    {...props}
  />
)

export default Button
