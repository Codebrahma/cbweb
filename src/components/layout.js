/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./fonts.css"
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
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
