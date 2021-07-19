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
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"
import { useThemeUI } from "bricks"
import Header from "./header"
import theme from "../theme"
import PlainLink from "../components/link"
import TextWithIcon from "../components/textWithIcon"
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
        <Box>
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
                <StyledLink
                  as="a"
                  rel="noopener"
                  href={link}
                  target="_blank"
                  key={name}
                >
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
        <Img
          fixed={images['cb'].childImageSharp.fixed}
          objectFit="contain"
          height="48px"
          alt="Codebrahma Logo"
        />
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

          cb: file(relativePath: { eq: "logos/cb.png" }) {
            childImageSharp {
              fixed(width: 96, height: 48) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }

          facebook: file(relativePath: { eq: "logos/facebook.png" }) {
            childImageSharp {
              fixed(width: 33, height: 33) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }

          twitter: file(relativePath: { eq: "logos/twitter.png" }) {
            childImageSharp {
              fixed(width: 32, height: 32) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }

          linkedin: file(relativePath: { eq: "logos/linkedin.png" }) {
            childImageSharp {
              fixed(width: 32, height: 32) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }

          github: file(relativePath: { eq: "logos/github.png" }) {
            childImageSharp {
              fixed(width: 36, height: 36) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }

          instagram: file(relativePath: { eq: "logos/instagram.png" }) {
            childImageSharp {
              fixed(width: 32, height: 32) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
        }
      `}
      render={data => (
        <ThemeProvider theme={theme} components={comps}>
          <div style={{ background: "rgb(247,245,242)", minHeight: "100vh" }}>
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
                li > p {
                  display: inline;
                }
                * {
                  box-sizing: border-box;
                }
              `}
            />
            <Container>
              <Helmet
                meta={[
                  { name: "referrer", content: "origin" },
                  {
                    name: "google-site-verification",
                    content: "M4VnkYHL0o4WjZUo7XZO-_HUIjsZGo2Bvw-SGI3VF80",
                  },
                ]}
              />
              <Header siteTitle={data.site.siteMetadata.title} />
              <div>
                <main>{children}</main>
                <footer>
                  <Footer images={data} />
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
