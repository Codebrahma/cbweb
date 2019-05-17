import React from "react"
// eslint-disable-next-line
import { Link, graphql } from "gatsby"

import NonStretchedImage from "../components/common/nonStretchedImage"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, H1, H2, P } from '../components/common/atoms'



const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Box py={[8,9]} className="hero"> 
      <H1>We build your frontend</H1>
      <P>We take your design files &amp; api docs. And give you a fast mobile and browser app. 
      You focus on your backend business&nbsp;logic! </P>
    </Box>
    <div>
      <H2>
        Featured Projects
      </H2>
      <div>
        <NonStretchedImage fluid={data.rippling.childImageSharp.fluid}/>
        <NonStretchedImage fluid={data.rippling_screenshot.childImageSharp.fluid}/>
        <P>Built the complete browser and mobile app for this fast growing 
        Parker Conrad startup, currently valued at $250 million</P>
      </div>
    </div>
    <div>
      <div>
        <NonStretchedImage fluid={data.react.childImageSharp.fluid} />
        <P>
          We have been building on React/ReactNative for 3 years now, and we absolutely love its philosophy.
          We strongly believe that a good react codebase is very conduisive to rapid UI iteration
        </P>
      </div>
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