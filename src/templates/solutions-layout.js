import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import { Flex } from "@chakra-ui/core"
import SEO from "../components/seo"
import Layout from "./layout"

const SolutionLayout = ({
  title,
  body,
  keywords,
  description,
  link,
  image,
}) => {
  return (
    <Layout>
      <SEO
        title={title}
        keywords={keywords}
        description={description}
        link={link}
        image={image ? image.publicURL : null}
      />
      <Flex width='100%' flexDirection="column">
        <MDXRenderer>{body}</MDXRenderer>
      </Flex>
    </Layout>
  )
}

const Transformer = ({ data }) => {
  let { title, keywords, description, link, image } = data.post.frontmatter
  let body = data.post.body
  return (
    <SolutionLayout
      title={title}
      keywords={keywords}
      description={description}
      body={body}
      link={link}
      image={image}
    />
  )
}

export default Transformer

export const pageQuery = graphql`
  query($link: String!) {
    post: mdx(frontmatter: { link: { eq: $link } }) {
      body
      frontmatter {
        title
        description
        keywords
        link
        image {
          publicURL
        }
      }
    }
  }
`
