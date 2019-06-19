import React from "react"
import Layout from './layout'
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { graphql } from 'gatsby';
import {H1, Flex, Box, I} from 'bricks'
import Category from "../components/category";

const isLast = (arr, index)=> arr.length-1 === index

const Sidebar = ({frontmatter: {author, category, tags}})=> (
  <div>
    <Box my={2}>
      <Flex fontSize={[0, 0]} justifyContent='center' >
        Written by
      </Flex>
      <Flex justifyContent='center' mt='0.5rem'>
        <I>{author}</I><br />
      </Flex>
    </Box>
    <Box my={2}>
      <Flex fontSize={[0, 0]} justifyContent='center'>
        Posted in
      </Flex>
      <Flex justifyContent='center' mt='0.5rem'>
        <Category>{category}</Category>
      </Flex>
    </Box>
    <Box my={2}>
      <Flex fontSize={[0, 0]} justifyContent='center'>
        Tags
      </Flex>
      <Flex justifyContent='center' mt='0.5rem'>
        <Flex fontSize={[0, 0]} color='black.2' width={[0.5,0.5]} justifyContent='center' flexWrap='wrap'>
          {tags.map((tag, i) => (
            <Box p='0.125rem'>
              <I> #{tag}{isLast(tags, i) ? '' : ','} </I>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
    <Flex justifyContent='center'>
      <Box width={[1 / 2, 1 / 2]} fontSize={0} color='black.2'>
        If you want to get more posts like this, join our newsletter
      </Box>
    </Flex>
  </div>
)

const BlogLayout = ({ data }) => {
  let {title} = data.post.frontmatter;
  return (
    <Layout>
      <Flex flexWrap='wrap'>
        <Box width={['100%',2/3]}>
          <Box mb={4}>
            <H1>{title}</H1>
          </Box>
          <MDXRenderer>{data.post.code.body}</MDXRenderer>
        </Box>
        <Box width={['100%',1/3]} marginTop={[1, 5]}>
          <Sidebar frontmatter={data.post.frontmatter} />
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