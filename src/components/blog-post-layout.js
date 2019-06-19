import React from "react"
import Layout from './layout'
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { graphql } from 'gatsby';
import {H1, Flex, Box, Text, I} from 'bricks'
import category from '../components/category'
import Category from "../components/category";



const BlogLayout = ({ data }) => {
  const { author, title, category, tags} = data.post.frontmatter
  return (
    <Layout>
      <Flex flexWrap='wrap'>
        <Box width={['100%',2/3]}>
          <Box mb={4}>
            <H1>{title}</H1>
          </Box>
          <MDXRenderer>{data.post.code.body}</MDXRenderer>
        </Box>
        <Box width={['100%',1/3]}>
          <Text fontSize={[0,0]}>
            Written by <br/>
            <I>{author}</I><br/>
            Posted in <br/>
            <Category>{category}</Category>
          </Text>
          <Box>
            Tags: 
            {tags}
          </Box>
          <Box>
            If you want to get more posts like this, join our newsletter
          </Box>
        </Box>
      </Flex>
    </Layout>
  )

}


export default BlogLayout

export const pageQuery = graphql`
  query($link: String!){
    post: mdx(frontmatter: { link: { eq: $link } }) {
      code {
        body
      }
      frontmatter {
        title
        description
        category
        tags
        author
        datePublished: date(formatString: "YYYY-MM-DDTHH:mm:ssZ")
      }
    }
  }
`