import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"


import styled from '@emotion/styled'
import { color } from 'styled-system'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Box = styled.div`
  ${color}
`

const NonStretchedImage = props => {
  let normalizedProps = props
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: props.fluid.presentationWidth,
        margin: "0 auto", // Used to center the image
      },
    }
  }

  return <Img {...normalizedProps} />
}

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Box class="hero">
      <h1>We build your frontend<br>
      </br>
      You focus on your backend business logic!
      </h1>
      <p>We take your design files and api docs. And give you a fast mobile and browser app</p>
    </Box>
    <div class="work">
      <h2>
        Our Work
      </h2>
      <div class="project">
        <NonStretchedImage fluid={data.rippling.childImageSharp.fluid}/>
        <NonStretchedImage fluid={data.rippling_screenshot.childImageSharp.fluid}/>
        <p>Built the complete browser and mobile app for this fast growing 
        Parker Conrad startup, currently valued at $250 million</p>
      </div>
    </div>
    <div class="stacks">
      <div class="stack">
        <NonStretchedImage fluid={data.react.childImageSharp.fluid} />
        <p>
          We have been building on React/ReactNative for 3 years now, and we absolutely love its philosophy.
          We strongly believe that a good react codebase is very conduisive to rapid UI iteration
        </p>
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