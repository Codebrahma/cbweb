/** @jsx jsx */
import { jsx } from "@emotion/core"
// eslint-disable-next-line
import { graphql, navigate } from "gatsby"

import Layout from "../templates/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"
import { Box, Flex, H1, P, ReactIcon, OutlinedButton } from "bricks"
import Title from "../components/title"
import Project from "../components/project"
import ContactUsButton from '../components/contactUsButton';

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
      <Box mt={[3, 6]} >
        <H1>
          We build your React &amp;&nbsp;React Native frontend
        </H1>
        <Box width={[1, 2/3]} mt={2} >
          <P>
            We take your design files &amp; api docs. And give you a fast mobile
            and browser app. You focus on your backend business&nbsp;logic!
          </P>
        </Box>
        <Flex
          mt={1}
          mb={3}
          flexDirection="column"
        >
          <ReactIcon width="200" height="200" />
          <Title
            fontSize={[3, 'desktop.3']}
            lineHeight={2}
            borderWidth={0}
            mt={0}
          >
            React & React Native
          </Title>
          <Box width={[1, 2/3]}>
            <P>
              We have been building on React / React Native for 3 years now, and
              we absolutely love its declarative and functional philosophy. We
              strongly believe that a good react codebase is conducive for rapid
              UI iteration
            </P>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Box width={1} mb={1}>
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
          title="Serverless"
          description="Codebrahma helped serverless implement their new design in Gatsby, in a sharp deadline for press release date"
          image={data.serverless_screenshot.childImageSharp.fluid}
          link="/serverless/"
        />

        <Box width={1} textAlign="center">
          <OutlinedButton borderRadius={3} onClick={() => navigate('/work')}>
            More work
          </OutlinedButton>
        </Box>
      </Box>

      <Flex mt={[3, 6]} flexDirection="column" >
        <Title
          fontSize={[3, 'desktop.3']}
          fontWeight="bold"
          lineHeight={2}
          borderWidth={0}
          mt={0}
        >
          WE ARE ALL EARS
        </Title>
        <Box width={[1, 2/3]} >
          <P>
            Whether it's a code review or a project, that you want to discuss or just want to say hello, We would love to hear from you.
            We cordially welcome your ideas, suggestions, and reviews regarding our work.
          </P>
          <ContactUsButton text="say hello!" />
        </Box>
      </Flex>
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

    serverless_screenshot: file(
      relativePath: { eq: "screenshots/serverless_screenshot.png" }
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
