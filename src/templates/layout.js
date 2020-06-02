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
  // ThemeProvider,
  // Flex,
  // Container,
  // Box,
  // P,
  InputButton,
  InputText,
  // HorizontalRule,
  // B,
} from "bricks"
import { ThemeProvider, ColorModeProvider, Box, Flex, Text } from "@chakra-ui/core"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"
// import { useThemeUI } from "bricks"
import Header from "./header"
import customTheme from "../theme"
import PlainLink from "../components/link"
import TextWithIcon from "../components/textWithIcon"
import cbLogo from './../images/logos/cb.png'
import mailIcon from './../images/logos/mail.svg'
import phoneIcon from './../images/logos/phone.svg'
import locationIcon from './../images/logos/location.svg'

const socialLinks = [
  {
    name: "Twitter",
    link: "https://twitter.com/codebrahma",
    image: "twitter",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/codebrahma",
    image: "linkedin",
  },
  {
    name: "Facebook",
    link: "https://facebook.com/codebrahma",
    image: "facebook",
  },
  {
    name: "GitHub",
    link: "https://github.com/codebrahma",
    image: "github",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/codebrahma",
    image: "instagram",
  },
]

const StyledLink = styled(PlainLink)`
  margin-right: 15px;
`

const Footer = ({ images }) => (
  <Box marginTop="6" pb="6">
    <Box height='2px' bg='black.1'/>
    <Flex
      flexDirection={["column", "row"]}
      justifyContent="space-between"
      mt="3"
    >
      <Box width={[1, 1 / 3]}>
        <Text lineHeight='1'>
          Join our <Text fontWeight='black'>NEW</Text> newsletter to learn about the latest trends in the
          fast changing front end atmosphere
        </Text>
        <Box my="1">
          <form
            action="https://codebrahma.us3.list-manage.com/subscribe/post"
            method="post"
            target="/thanks"
          >
            <input type="hidden" name="u" value="42069ce8928af0d4afc3fd428" />
            <input type="hidden" name="id" value="a540ccf305" />
            <InputText
              name="MERGE0"
              type="email"
              placeholder="Email address"
              backgroundColor="black.4"
              borderWidth={0}
              borderRadius={[3, "4px 0 0 4px"]}
              placeholder="@ Email address"
              width={[1, 'auto']}
            />
            <InputButton
              value="Subscribe"
              name="subscribe"
              px={2}
              py="10px"
              mt={1}
              borderRadius={[3, "0 4px 4px 0"]}
            />
          </form>
        </Box>
      </Box>
      <Flex flexDirection={["column-reverse", "column"]} width={[1, 1 / 4]} mt={[2, 0]}>
        <TextWithIcon>
          <img src={mailIcon} alt="Mail" />
          &nbsp;
          <PlainLink as="a" href="mailto:hello@codebrahma.com">
            hello@codebrahma.com
          </PlainLink>
        </TextWithIcon>
        <TextWithIcon mt={[1, 0]}>
          <img src={phoneIcon} alt="Phone" />
          &nbsp;
          <PlainLink as="a" href="tel:+14845060634">
            +1 484 506 0634
          </PlainLink>
        </TextWithIcon>
        <Box mt={[1, 0]}>
          <Flex flexDirection={["row"]} alignItems="center">
            {socialLinks.map(({ name, link, image }) => {
              const imageData = images[image].childImageSharp.fixed
              return (
                <StyledLink as="a" href={link} target="_blank" key={name}>
                  <Img
                    fixed={imageData}
                    objectFit="contain"
                    objectPosition="50% 50%"
                    alt={name}
                  />
                </StyledLink>
              )
            })}
          </Flex>
        </Box>
      </Flex>
      <Box width={[1, 1 / 4]} mb={[2, 0]}>
        <TextWithIcon>
          <img src={locationIcon} alt="Address" />
          &nbsp;
          <PlainLink
            as="a"
            href="http://maps.google.com/?q=Codebrahma 156, 2nd Street San Francisco, CA 94105"
            target="_blank"
          >
            156, 2nd Street
            <br />
            San Francisco, CA 94105
          </PlainLink>
        </TextWithIcon>
      </Box>
    </Flex>

    <Flex mt={[0, 3]}>
      <Box mr={1} display={['none', 'block']}>
        <img src={cbLogo} height="48px" alt="Codebrahma Logo" />
      </Box>
      <Box>
        <Box mb={1}>
          Codebrahma is an independent company. Mentioned brands and companies are trademarked brands.
        </Box>
        <Box mt={1}>
          &copy; 2020 codebrahma.com. All rights reserved.
        </Box>
      </Box>
    </Flex>
  </Box>
)

const Layout = ({ children }) => {
  console.log(customTheme)
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }

          facebook: file(relativePath: { eq: "logos/facebook.png" }) {
            childImageSharp {
              fixed(width: 33, height: 33) {
                ...GatsbyImageSharpFixed
              }
            }
          }

          twitter: file(relativePath: { eq: "logos/twitter.png" }) {
            childImageSharp {
              fixed(width: 32, height: 32) {
                ...GatsbyImageSharpFixed
              }
            }
          }

          linkedin: file(relativePath: { eq: "logos/linkedin.png" }) {
            childImageSharp {
              fixed(width: 32, height: 32) {
                ...GatsbyImageSharpFixed
              }
            }
          }

          github: file(relativePath: { eq: "logos/github.png" }) {
            childImageSharp {
              fixed(width: 36, height: 36) {
                ...GatsbyImageSharpFixed
              }
            }
          }

          instagram: file(relativePath: { eq: "logos/instagram.png" }) {
            childImageSharp {
              fixed(width: 32, height: 32) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => (
        <ThemeProvider theme={customTheme}>
          <ColorModeProvider>
            <Box bg="rgb(247,245,242)" minHeigh="100vh">
              <Global
                styles={{
                  'a:visited': {
                    color: 'inherit',
                  },
                  'a:hover': {
                    cursor: 'pointer',
                  },
                  'body': {
                    fontFamily: customTheme.fonts.body,
                    color: customTheme.colors.primary,
                    lineHeight: customTheme.lineHeights[2],
                  },
                  '*': {
                    boxSizing: 'border-box',
                    padding: 0,
                    margin: 0,
                  },
                  'p': {
                    lineHeight: customTheme.lineHeights[1],
                    marginBottom: customTheme.space[2],
                  }
                }}
              />
              <Box maxWidth='6xl' m='auto' fontSize={[1,'desktop.1']}>
                <Helmet
                  meta={[
                    { name: "referrer", content: "origin" },
                    {
                      name: "google-site-verification",
                      content: "M4VnkYHL0o4WjZUo7XZO-_HUIjsZGo2Bvw-SGI3VF80",
                    },
                  ]}
                />
                <Helmet>
                  <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=AW-700131916"
                  ></script>
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
                <Box>
                  <main>{children}</main>
                  <footer>
                    <Footer images={data} />
                  </footer>
                </Box>
              </Box>
            </Box>
          </ColorModeProvider>
        </ThemeProvider>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
