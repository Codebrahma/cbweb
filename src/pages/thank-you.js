import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { Flex, Box, P, H1, css } from 'bricks'

const ThankYou = () => {
  
  const CenteredDiv = styled(Flex)(
    css({
      width: "100vw",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
    })
  )
  
  return (
    <CenteredDiv>
      <Box textAlign="center">
        <H1 fontSize="6" mb="4">Thank You!</H1>
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