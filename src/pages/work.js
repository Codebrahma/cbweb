/** @jsx jsx */
import { jsx } from "@emotion/core"
import { graphql } from "gatsby"
import Layout from "../templates/layout"
import SEO from "../components/seo"
import Project from "../components/project"
import { H1, I, P } from "bricks"

const WorkPage = ({ data }) => (
  <Layout>
    <SEO
      title="Innovative Products based on ReactJS, React Native Developemt"
      description="Examples of interactive website and application development"
      keywords={[
        `ruby on rails`,
        `Ruby on Rails development`,
        `angularjs framework`,
        `angularjs code`,
        `meteor js`,
        `react js`,
        `native`,
        `node js development`,
        `node js website`,
        `spree commerce`,
        `ruby on rails developer`,
        `react js components`,
        `javascript meteor`,
        `Angular javascript`,
        `angular framework`,
        `js angular`,
        `angular website`,
        `Android Website`,
        `ios app development`,
        `mobile web app`,
        `javascript android app`,
        `web application development company`,
      ]}
      image={data.serverless_screenshot.publicURL}
      url="https://codebrahma.com/work"
    />
    <H1>Our Work</H1>
    <P>We have built 50+ apps over the last 6 years. We have listed a few</P>
    <Project
      title="Rippling"
      description="Codebrahma built the complete browser and mobile app for this fast growing
          Parker Conrad startup, currently valued at $250 million"
      image={data.rippling_screenshot.childImageSharp.fluid}
      link="/rippling/"
    />
    <Project
      title="Serverless"
      description="Codebrahma helped serverless implement their new design in Gatsby,
                 in a sharp deadline for press release date"
      image={data.serverless_screenshot.childImageSharp.fluid}
      link="/serverless/"
    />
    <Project
      title="Harmoney"
      description="A Peer to peer lending portal, which has originated 1 Billion USD in loans. Codebrahma helped
      build the complete frontend for Harmoney"
      image={data.harmoney_screenshot.childImageSharp.fluid}
      link="/harmoney/"
    />
    <br />
    <br />
    <br />
    <I>And many more projects!!</I>
  </Layout>
)

export default WorkPage

// why is the relative path like this?
// what is wrong with normal gatsby image
// why is non stretched image not showing up under Flex
export const query = graphql`
  query {
    rippling_screenshot: file(
      relativePath: { eq: "screenshots/rippling_screenshot.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
          presentationWidth
        }
      }
    }
    serverless_screenshot: file(
      relativePath: { eq: "screenshots/serverless_screenshot.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
          presentationWidth
        }
      }
      publicURL
    }
    harmoney_screenshot: file(
      relativePath: { eq: "screenshots/harmoney_screenshot.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
          presentationWidth
        }
      }
    }
  }
`
