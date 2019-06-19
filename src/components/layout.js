/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
import { ThemeProvider as TP } from 'emotion-theming'
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "./fonts.css"

import { ThemeProvider, Flex, Container,
   Box, P, InputButton, InputText, HorizontalRule, B } from 'bricks'
import { Global, css } from '@emotion/core'
import Header from "./header"
import theme from './theme'
// TODO MDXProvider need not be used as theme ui set the components automatically
// due to ambiguity on what gatsby theme ui does, we are yet to implement this
import { MDXProvider } from "@mdx-js/react";
import { useThemeUI } from 'bricks';

const Footer = () => (
  <Box marginTop='6' pb='6'>
  <HorizontalRule
    width={1}
  />
  <Flex flexDirection={['column','row']} justifyContent='space-between' mt='3'>
    <Box width={[1, 1/3]}>
      <P>
      Join our <B>NEW</B> newsletter 
      to learn about the latest trends 
      in the fast changing front end atmosphere
      </P>
      <Box my='1'>
        <form>
          <InputText placeholder='Email address'/>
          <InputButton/>
        </form>
      </Box>
    </Box>
    <Box width={[1,1/4]} mt={[2,0]}>
      <P>
        info@codebrahma.com<br/>
        +1 484 506 0634<br/>
      </P>
      <Box mt='1'>
        <P>
            Twitter<br/>
            Github<br/>
        </P>
      </Box>
    </Box>
    <Box width={[1,1/4]} mt={[2,0]}>
      <P>
        156, 2nd Street<br/>
        San Francisco, CA 94105<br/>
      </P>
    </Box>
  </Flex>
  </Box>
)

const Layout = ({ children }) => {
  const context = useThemeUI();
  const comps   = context.components;
  return (
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
          <MDXProvider components={comps}>
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
                  <main>{ children }</main>
                  <footer>
                    <Footer></Footer>
                  </footer>
                </div>
              </Container>
            </div>
          </MDXProvider>
        </ThemeProvider>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
