/** @jsx jsx */
import { jsx } from '@emotion/core'
import { graphql } from "gatsby"
import NonStretchedImage from "../components/nonStretchedImage"
import Layout from "../templates/layout"
import SEO from "../components/seo"
import { Box, Flex, H1, H2, I, P } from 'bricks'
import PlainLink from '../components/link'

const Project = ({title, image, description, link})=>(
  <Flex flexWrap='wrap' marginTop={6}>
    <Box width={[1,1/2]} order={[1,1]}>
      <PlainLink to={link}>
        <NonStretchedImage fluid={image}/>
      </PlainLink>
    </Box>
    <Flex flexDirection='column' width={[1,1/2]} order={[0,1]}>
      <PlainLink to={link}>
        <H2 style={{marginTop:0}}>{title}</H2>
      </PlainLink>
      <P>{description}</P>
    </Flex>
  </Flex>
)

const WorkPage = ({data})=> (
<Layout>
  <SEO title="Our Work" keywords={[`gatsby`, `application`, `react`]} />
  <H1>Our Work</H1>
  <P>We have built 50+ apps over the last 6 years. We have listed a few</P>
  <Project 
    title='Rippling'
    description='Codebrahma built the complete browser and mobile app for this fast growing
          Parker Conrad startup, currently valued at $250 million'
    image={data.rippling_screenshot.childImageSharp.fluid}
    link='/rippling/'
  />
  <Project 
    title='Serverless'
    description='Codebrahma helped serverless implement their new design in Gatsby, 
                 in a sharp deadline for press release date'
    image={data.serverless_screenshot.childImageSharp.fluid}
    link='/serverless/'
  />
  <Project 
    title='Harmoney'
    description='A Peer to peer lending portal, which has originated 1 Billion USD in loans. Codebrahma helped
      build the complete frontend for Harmoney'
    image={data.harmoney_screenshot.childImageSharp.fluid}
    link='/harmoney/'
  />
  <br/>
  <br/>
  <br/>
  <I>And many more projects!!</I>
</Layout>
)


export default WorkPage

// why is the relative path like this?
// what is wrong with normal gatsby image
// why is non stretched image not showing up under Flex
export const query = graphql`
query {
  rippling_screenshot:file(relativePath: {eq: "screenshots/rippling_screenshot.png"}) {
    childImageSharp {
      fluid(maxWidth: 500, quality: 100) {
        ...GatsbyImageSharpFluid,
        presentationWidth
      }
    }
  }
  serverless_screenshot:file(relativePath: {eq: "screenshots/serverless_screenshot.png"}) {
    childImageSharp {
      fluid(maxWidth: 500, quality: 100) {
        ...GatsbyImageSharpFluid,
        presentationWidth
      }
    }
  }
  harmoney_screenshot:file(relativePath: {eq: "screenshots/harmoney_screenshot.png"}) {
    childImageSharp {
      fluid(maxWidth: 500, quality: 100) {
        ...GatsbyImageSharpFluid,
        presentationWidth
      }
    }
  }
}
`