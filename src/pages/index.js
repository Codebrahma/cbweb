/** @jsx jsx */
import { jsx } from "@emotion/core"
// eslint-disable-next-line
import { graphql, navigate } from "gatsby"

import Layout from "../templates/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"
import { Box, Flex, H1, H3, P, ReactIcon } from "bricks"
import Title from "../components/title"
import Project from "../components/project"
import OutlineButton from '../components/outlineButton'

const IndexPage = ({ data }) => {
  const structuredData = `{
    "@context" : "http://schema.org",
    "@type" : "LocalBusiness",
    "name" : "Codebrahma",
    "image" : "https://codebrahma.com${data.rippling_screenshot.publicURL}",
    "telephone" : "+1 484 506 0634",
    "email" : "hello@codebrahma.com",
    "priceRange" : "$$$",
    "address" : {
      "@type" : "PostalAddress",
      "streetAddress" : "156, 2nd Street",
      "addressLocality" : "San Francisco,",
      "addressRegion" : "CA",
      "postalCode" : "94105"
    }
  }`

  return (
    <Layout>
      <Helmet>
        <script type="application/ld+json">{structuredData}</script>
      </Helmet>
      <SEO
        title="Best ReactJS and React Native Consultancy in Bay Area"
        keywords={[
          `react`,
          `react native`,
          `reactJS`,
          `consultancy`,
          `bay area`,
        ]}
        description="Codebrahma provides best in class custom web and mobile application development rapidly. Our expertise include React JS, NodeJS, React Native."
        image={data.rippling_screenshot.publicURL}
        url="https://codebrahma.com"
      />
      <Box mt={[3, 6]} textAlign="center">
        <H1>
          We build your React &amp;&nbsp;React Native frontend
        </H1>
        <Box width={[1, 2/3]} mt={2} mx="auto">
          <P>
            We take your design files &amp; api docs. And give you a fast mobile
            and browser app. You focus on your backend business&nbsp;logic!
          </P>
        </Box>
        <Flex
          mt={1}
          mb={3}
          flexDirection="column"
          alignItems="center"
        >
          <Title
            fontSize={[3, 'desktop.3']}
            lineHeight={2}
            borderWidth={0}
            mt={0}
          >
            React & React Native
          </Title>
          <ReactIcon width="200" height="200" />
          <Box width={[1, 2/3]}>
            <P textAlign="center">
              We have been building on React / React Native for 3 years now, and
              we absolutely love its declarative and functional philosophy. We
              strongly believe that a good react codebase is conducive for rapid
              UI iteration
            </P>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Box width={1} textAlign="center" mb={1}>
          <Title>Our Featured Work</Title>
        </Box>

        <Project
          title="Rippling"
          description="Codebrahma built the complete browser and mobile app for this fast growing Parker Conrad startup, currently valued at $250 million"
          image={data.rippling_screenshot.childImageSharp.fluid}
          link="/rippling/"
          reverse
        />
        <Project
          title="Rippling"
          description="Codebrahma built the complete browser and mobile app for this fast growing Parker Conrad startup, currently valued at $250 million"
          image={data.rippling_screenshot.childImageSharp.fluid}
          link="/rippling/"
        />

        <Box width={1} textAlign="center">
          <OutlineButton onClick={() => navigate('/work')}>
            More work
          </OutlineButton>
        </Box>
      </Box>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    rippling_screenshot: file(
      relativePath: { eq: "screenshots/rippling_screenshot.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 550, quality: 100) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
      publicURL
    }
  }
`
