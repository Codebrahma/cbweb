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
import Header from "./header"
import theme from './theme'
import Container from './common/container'
import { Box, P, HorizontalRule, B, I } from './common/atoms'
import { InputText } from './common/inputText'
import { InputButton } from './common/inputButton'

const Footer = () => (
  <Box marginTop={theme.lineHeights[4]}>
    <HorizontalRule
      width={1}
      height="2px"
      color="black.0"
      type="solid"
    />
    <P>
      Join our <B>NEW</B> <I>NEW</I> newsletter to learn about the latest trends in the fast changing
      front end atmosphere
    </P>
    <form>
      <InputText border='2px solid' padding='5px' 
                 borderColor='black.1' bg='tint' color='black.1' placeholder='Email address' />
      <InputButton border='2px solid' padding='5px' 
                 borderColor='black.1' bg='black.1' color='tint' text='submit'/>
    </form>
    <P>
       156, 2nd Street<br/>
       San Francisco, CA 94105<br/>
    </P>
    <P>
       info@codebrahma.com<br/>
       +1 484 506 0634<br/>
    </P>
    <P>
        Twitter<br/>
        Github<br/>
    </P>

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
