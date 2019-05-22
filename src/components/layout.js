/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Container from './common/container'
import { ThemeProvider } from 'emotion-theming'
import Header from "./header"
import "./fonts.css"
import theme from './theme'
import { Logo } from './common/logo'
import { Box, P } from './common/atoms'

const Footer = () => (
  <Box marginTop={theme.lineHeights[4]}>
    <hr/>
    <P>
      Join our newsletter to learn about the latest trends in the fast changing
      front end atmosphere
    </P>
    <form>
      <input type="email"></input>
      <input type="submit"></input>
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
