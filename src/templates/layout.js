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

import {
  ThemeProvider,
  Flex,
  Container,
  Box,
  P,
  InputButton,
  InputText,
  HorizontalRule,
  B,
} from "bricks"
import { Global, css } from "@emotion/core"
import Header from "./header"
import { Helmet } from "react-helmet"
import theme from '../theme'
import { useThemeUI } from 'bricks';
import  PlainLink  from '../components/link'
const Footer = () => (
  <Box marginTop="6" pb="6">
    <HorizontalRule width={1} />
    <Flex
      flexDirection={["column", "row"]}
      justifyContent="space-between"
      mt="3"
    >
      <Box width={[1, 1 / 3]}>
        <P>
          Join our <B>NEW</B> newsletter to learn about the latest trends in the
          fast changing front end atmosphere
        </P>
        <Box my="1">
          <form
            action="https://codebrahma.us3.list-manage.com/subscribe/post"
            method="post"
            target="/thanks"
          >
            <input type="hidden" name="u" value="42069ce8928af0d4afc3fd428" />
            <input type="hidden" name="id" value="a540ccf305" />
            <InputText name="MERGE0" type="email" placeholder="Email address" />
            <InputButton value="Subscribe" name="subscribe" />
          </form>
        </Box>
      </Box>
      <Box width={[1, 1 / 4]} mt={[2, 0]}>
        <P>
          <PlainLink as="a" href="mailto:hello@codebrahma.com">
            hello@codebrahma.com
          </PlainLink>
          <br />
          <PlainLink as="a" href="tel:+14845060634">
            +1 484 506 0634
          </PlainLink>
          <br />
        </P>
        <Box mt="1">
          <P>
            <PlainLink as="a" href="https://twitter.com/codebrahma" target="_blank">
              Twitter
            </PlainLink>
            <br />
            <PlainLink as="a" href="https://github.com/codebrahma" target="_blank">
              GitHub
            </PlainLink>
            <br />
          </P>
        </Box>
      </Box>
      <Box width={[1, 1 / 4]} mt={[2, 0]}>
        <P>
          <PlainLink
            as="a"
            href="http://maps.google.com/?q=Codebrahma 156, 2nd Street San Francisco, CA 94105"
            target="_blank"
          >
            156, 2nd Street
            <br />
            San Francisco, CA 94105
            <br />
          </PlainLink>
        </P>
      </Box>
    </Flex>
  </Box>
)

const Layout = ({ children }) => {
  const context = useThemeUI()
  const comps = context.components
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
        <ThemeProvider theme={theme} components={comps}>
          <div style={{background: 'rgb(247,245,242)', minHeight: '100vh',}}>
            <Global
              styles={css`
                      a:visited {
                        color: inherit;
                      }
                      a:hover {
                        cursor: pointer;
                      }
                      body {
                        font-family: ${theme.fonts.body};
                        color: ${theme.colors.black[1]};
                      }
                `}/>
            <Container>
              <Helmet meta={[{ name: "referrer", content: "origin" }]} />
              <Helmet>
                <script async src="https://www.googletagmanager.com/gtag/js?id=AW-700131916"></script>
                <script>
                  {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'AW-700131916');

                    document.addEventListener('click',function(e){
                      if(e.target.matches('[href="tel:+14845060634"]')){
                        gtag('event', 'conversion', {'send_to': 'AW-700131916/co9tCKqOrLUBEMzU7M0C'});
                        ga('send','event','button','click','phone');
                      }
                    })
                  `}
                </script>
              </Helmet>
              <Header siteTitle={data.site.siteMetadata.title} />
              <div>
                <main>{ children }</main>
                <footer>
                  <Footer />
                </footer>
              </div>
            </Container>
          </div>
        </ThemeProvider>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
