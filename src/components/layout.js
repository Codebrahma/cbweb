/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import {ThemeProvider} from 'emotion-theming'
import Header from "./header"
import "./fonts.css"

const breakpoints = [
  '768px', '1280px',
];
const theme = {
  breakpoints,
}
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
        <body style={{background: 'rgb(247,245,242)'}}>
          <div style={{
                width: '80%',
                margin: '0 auto',
              }}>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div>
              <main >{children}</main>
              <footer>
                © {new Date().getFullYear()}
              </footer>
            </div>
          </div>
        </body>

      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
