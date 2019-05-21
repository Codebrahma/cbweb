/** @jsx jsx */
import { jsx } from '@emotion/core'
// eslint-disable-next-line
import { Link, graphql } from "gatsby"
import React from "react"

import NonStretchedImage from "../components/common/nonStretchedImage"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, H1, H3, H4, P } from '../components/common/atoms'
import ReactIcon from '../components/common/react-icon'
import { Flex } from '../components/common/flex'


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Box py={ [1,2] } className="hero"> 
      <H1>We build your React &amp;&nbsp;React Native frontend</H1>
      <P>We take your design files &amp; api docs. And give you a fast mobile and browser app. 
      You focus on your backend business&nbsp;logic! </P>
    </Box>
    <div>
      <H3>
        Our Work
      </H3>
      <Box marginTop={3}>
        <NonStretchedImage fluid={data.rippling_screenshot.childImageSharp.fluid}/>
        <H4>
          Rippling
        </H4>
        <P>Codebrahma built the complete browser and mobile app for this fast growing 
        Parker Conrad startup, currently valued at $250 million</P>
      </Box>
    </div>
    <div>
      <H3>
        React & ReactNative
      </H3>
      <Flex marginTop={3} flexDirection='column'>
        <Box alignSelf={['center','flex-start']}>
          <ReactIcon width="200" height="200"></ReactIcon>
        </Box>
        <P>
          We have been building on React/ReactNative for 3 years now, and we absolutely love its declarative and functional philosophy.
          We strongly believe that a good react codebase is very conduisive for rapid UI iteration
        </P>
      </Flex>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
query {
  rippling:file(relativePath: {eq: "logos/rippling.png"}) {
    childImageSharp {
      fluid(maxWidth: 200) {
        ...GatsbyImageSharpFluid,
        presentationWidth
      }
    }
  }
  rippling_screenshot:file(relativePath: {eq: "screenshots/rippling_screenshot.png"}) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid,
        presentationWidth
      }
    }
  }
  react:file(relativePath: {eq: "logos/react.png"}) {
    childImageSharp {
      fluid(maxWidth: 200) {
        ...GatsbyImageSharpFluid,
        presentationWidth
      }
    }
  }
}
`