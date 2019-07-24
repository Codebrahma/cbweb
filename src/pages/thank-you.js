import React from 'react'
import { Link } from 'gatsby'
import { Box, P } from 'bricks'
import CenteredDiv from '../components/centeredDiv'

const ThankYou = () => {  
  return (
    <CenteredDiv>
      <Box textAlign="center">
        <P fontSize="6" mb="4">Thank You!</P>
        <P fontSize="3" mb="4">
          We will get back to you within 24 hours. Our typical response time is 5 minutes.
        </P>
        <P fontSize="3">
          <Link to="/">
            Back to Homepage
          </Link>
        </P>
      </Box>
    </CenteredDiv>
  )
}

export default ThankYou