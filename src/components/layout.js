/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "./fonts.css"

import { ThemeProvider } from 'emotion-theming'
import { Global, css } from '@emotion/core'
import Header from "./header"
import theme from './theme'
import Container from './common/container'
import { Box, P, HorizontalRule, B, I } from './common/atoms'
import { InputText } from './common/inputText'
import { InputButton } from './common/inputButton'
import { Flex } from './common/flex'

const Footer = () => (
  <Box marginTop='6' pb='6'>
  <HorizontalRule
    width={1}
    height="2px"
    color="black.0"
    type="solid"
  />
  <Flex flexDirection='column' mt='3'>
    <Box>
      <P>
      Join our <B>NEW</B> newsletter 
      to learn about the latest trends 
      in the fast changing front end atmosphere
      </P>
    </Box>
    <Box my='1'>
      <form>
        <InputText border='2px solid' padding='5px' 
                  borderColor='black.1' bg='tint' color='black.1' placeholder='Email address' />
        <InputButton border='2px solid' padding='5px' 
                  borderColor='black.1' bg='black.1' color='tint' text='submit'/>
      </form>
    </Box>
    <Box mt='2'>
      <P>
        156, 2nd Street<br/>
        San Francisco, CA 94105<br/>
      </P>
    </Box>
    <Box mt='1'>
      <P>
        info@codebrahma.com<br/>
        +1 484 506 0634<br/>
      </P>
    </Box>
    <Box mt='1'>
      <P>
          Twitter<br/>
          Github<br/>
      </P>
    </Box>
  </Flex>
  </Box>
)

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <div style={{background: 'rgb(247,245,242)'}}>
          <Global
            styles={css`
                    a:visited { 
                      color: inherit;
                    }
                    a:hover {
                      cursor: grab;  
                    }
                    body {
                      font-family: ${theme.fonts.body};
                      color: ${theme.colors.black[1]};
                    }
              `}/>
          <Container>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div>
              <main >{children}</main>
              <footer>
                <Footer></Footer>
              </footer>
            </div>
          </Container>
        </div>

      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
