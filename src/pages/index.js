/** @jsx jsx */
import { jsx } from "@emotion/core"
// eslint-disable-next-line
import { graphql } from "gatsby"

import Layout from "../templates/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"
import { Box, Flex, H1, H3, H4, P, ReactIcon } from "bricks"
import Title from "../components/title"
import Project from "../components/project"

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
      <Box my={6}>
        <H1 lineHeight="42px">
          We build your React &amp;&nbsp;React Native frontend
        </H1>
        <P>
          We take your design files &amp; api docs. And give you a fast mobile
          and browser app. You focus on your backend business&nbsp;logic!
        </P>
      </Box>
      <div>
        <Title>Our Featured Work</Title>
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
      </div>
      <div>
        <H3>React & React Native</H3>
        <Flex flexDirection="column">
          <Box alignSelf={["center", "flex-start"]} width={1}>
            <ReactIcon width="200" height="200" />
          </Box>
          <P>
            We have been building on React / React Native for 3 years now, and
            we absolutely love its declarative and functional philosophy. We
            strongly believe that a good react codebase is conducive for rapid
            UI iteration
          </P>
        </Flex>
      </div>
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
