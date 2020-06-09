import { Link } from 'gatsby'
import { PseudoBox } from '@chakra-ui/core';

export default (props) => <PseudoBox
  as={Link}
  bg='tint'
  color='black.1'
  fontSize='0'
  px='6px'
  py='2px'
  display='inline-block'
  borderRadius='6px'
  border='1px solid black'
  textDecoration='none'
  lineHeight='0'
  _hover={{
      bg:'black.1',
      color:'tint',
  }}
  _visited={{
    bg:'tint',
    color:'black.1',
    '&:hover': {
      bg:'black.1',
      color:'tint',
    },
  }}
  {...props}
/>
