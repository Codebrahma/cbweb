import React from "react"
import Layout from './layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
import SEO  from '../components/seo'
import { Box, Flex } from '@chakra-ui/core';
import { H1 } from "../components/typography"

const Sidebar = ({author, category, tags})=> (
  <div>
  </div>
)

const SolutionLayout = ({title, body, meta, keywords, description}) =>(
  <Layout>
    <SEO title={title} meta={meta} keywords={keywords} description={description}/>
    <Flex flexWrap='wrap'>
      <Box width={['100%',2/3]}>
        <Box mb={4}>
          <H1 fontFamily='heading'>{title}</H1>
        </Box>
        <MDXRenderer>{body}</MDXRenderer>
      </Box>
      <Box width={['100%',1/3]} marginTop={[1, 5]}>
        <Sidebar  />
      </Box>
    </Flex>
  </Layout>
)

const Transformer = ({data}) => {
  let {title, meta, keywords, description } = data.post.frontmatter
  let body = data.post.body
  return (
    <SolutionLayout 
      title={title}
      meta={meta}
      keywords={keywords}
      description={description}
      body={body}
    />
  )
}

export default Transformer

export const pageQuery = graphql`
  query($link: String!){
    post: mdx(frontmatter: { link: { eq: $link } }) {
      body
      frontmatter {
        title
        description
        keywords
        meta
      }
    }
  }
`