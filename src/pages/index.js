/** @jsx jsx */
import { jsx } from '@emotion/core'
// eslint-disable-next-line
import { Link, graphql } from "gatsby"

import NonStretchedImage from "../components/nonStretchedImage"
import Layout from "../templates/layout"
import SEO from "../components/seo"
import { Box, Flex, H1, H3, H4, P, ReactIcon } from 'bricks'


const IndexPage = ({data}) => (
<Layout>
  <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  <Box mt='6' mb='6'>
    <H1 lineHeight='42px'>We build your React &amp;&nbsp;React Native frontend</H1>
    <P>We take your design files &amp; api docs. And give you a fast mobile and browser app.
      You focus on your backend business&nbsp;logic!</P>
  </Box>
  <div>
    <H3>
      Our Featured Work
    </H3>
    <Flex flexDirection='column'>
      <H4>
        Rippling
      </H4>
      <NonStretchedImage fluid={data.rippling_screenshot.childImageSharp.fluid} />
      <P>Codebrahma built the complete browser and mobile app for this fast growing
        Parker Conrad startup, currently valued at $250 million</P>
    </Flex>
  </div>
  <div>
    <H3>
      React & ReactNative
    </H3>
    <Flex flexDirection='column'>
      <Box alignSelf={['center', 'flex-start']} width={1}>
        <ReactIcon width="200" height="200" />
      </Box>
      <P>
        We have been building on React/ReactNative for 3 years now, and we absolutely love its declarative and functional philosophy.
        We strongly believe that a good react codebase is conducive for rapid UI iteration
      </P>
    </Flex>
  </div>
</Layout>
)

export default IndexPage

export const query = graphql`
query {
  rippling_screenshot:file(relativePath: {eq: "screenshots/rippling_screenshot.png"}) {
    childImageSharp {
      fluid(maxWidth: 550, quality: 100) {
        ...GatsbyImageSharpFluid,
        presentationWidth
      }
    }
  }
}
`