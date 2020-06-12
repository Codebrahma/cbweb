import React, { useState } from 'react'
import { Box, Flex, PseudoBox, Icon } from '@chakra-ui/core'
import Link from './link'

// TODO: mobile nav fix

const Nav = ({ logo, links,}) => {
  const [isOpen, setIsOpen] = useState(false)

  const mobileNav = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: 'rgb(248, 244, 242)',
    overflowY: 'auto',
    zIndex: 1,
    flexDirection: 'column'
  }

  return (
    <Flex justify='space-between' align='center' py={1}>
      {logo}
      <Flex display={['none', 'flex']} css={isOpen ? mobileNav : {}}>
        {links.map(({ link, title }) => (
          <PseudoBox
            as={Link}
            px={1}
            to={link}
            key={link}
            fontFamily='body'
            fontSize={1}
            _hover={{
              textDecoration: 'underline'
            }}
          >
            {title}
          </PseudoBox>
       ))}
      </Flex>
      <Box display={['block', 'none']} p={1} onClick={() => setIsOpen(!isOpen)}>
        <Box height='3px' bg='primary' marginBottom='5px' width={'25px'}/>
        <Box height='3px' bg='primary' marginBottom='5px'/>
        <Box height='3px' bg='primary' marginBottom='5px'/>
      </Box>
      {isOpen && (
        <Flex
          position='fixed'
          top='0'
          bottom='0'
          right='0'
          left='0'
          bg='secondary'
          flexDirection='column'
          align='center'
          zIndex='5'
        >
          <Flex p='2' justifyContent='flex-end' width='100%'>
            <Icon name="close" p='1' onClick={() => setIsOpen(false)}/>
          </Flex>
          {links.map(({ link, title }) => (
            <Box
              as={Link}
              px={1}
              to={link}
              key={link}
              fontFamily='body'
              py={3}
              fontSize={'desktop.3'}
              userSelect='none'
            >
              {title}
            </Box>
        ))}
        </Flex>
      )}
    </Flex>
  )
}

export default Nav
