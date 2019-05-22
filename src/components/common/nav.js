/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Flex } from './flex'
import { Box, H3 } from './atoms'
import { useState } from 'react'
import  Link  from '../link'
import Ham from './hamburger-icon'
import Close from './close-icon'
import { EmptyButton } from './button'


const Nav = ({logo, links = []})=>{
  const mobileNav = {
      position: 'fixed',
      top: 0, right: 0, bottom: 0, left: 0,
      background: 'rgb(248, 244, 242)',
      overflowY: 'auto',
      zIndex: 1,
     '@media(min-width:832px)': {
        position: 'static',
        background: 'none',
    }
  };
  const buttonCss = {
      position: 'absolute',
      top: '10px', right: '10px',
      zIndex: 2,
  };

  let [isOpen, setOpen] = useState(false);
  return (
  <Flex py='1' justifyContent="space-between">
    <Box width='1/5'>{logo}</Box>
    <Flex 
      width='4/5'
      css={ isOpen ? mobileNav : {} } 
      flexDirection={ ['column', 'row'] }
      alignItems='center'>
    { links.map((link, i) => (
      <Box 
        key={ i } 
        px='1' py={ [3, 0] } 
        display={ [isOpen ? 'block' : 'none', 'block'] }>
        <Link to={ link.link }>
          <H3 marginTop={0}>{ link.title }</H3>
        </Link>
      </Box>
    ))}
      <Box p='1' css={ buttonCss } display={ [links.length?'block':'none', 'none'] }>
        {isOpen?
        <EmptyButton onClick={ ()=>setOpen(false) }><Close/></EmptyButton>
        :
        <EmptyButton onClick={ ()=>setOpen(true) }><Ham/></EmptyButton>
        }
      </Box>
    </Flex>
  </Flex>
)}
export default Nav;