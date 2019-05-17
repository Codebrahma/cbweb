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
import {ThemeProvider} from 'emotion-theming'
import Header from "./header"
import "./fonts.css"
import theme from './theme'

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
                © {new Date().getFullYear()}
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
