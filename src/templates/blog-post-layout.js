import React from "react"
import Layout from './layout'
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { graphql } from 'gatsby';
import {H1, Flex, Box, I} from 'bricks'
import { getCategory, hypenize } from '../utils'
import CategoryLink from '../components/categorylink'
import PlainLink  from '../components/link'


const Sidebar = ({author, category, tags})=> (
  <div>
    <Box my={2}>
      <Flex fontSize={[0, 0]} justifyContent='center' >
        Written by
      </Flex>
      <Flex justifyContent='center' mt='0.5rem'>
        <PlainLink to={'/journal/author/'+hypenize(author)}>
          <I>{author}</I><br />
        </PlainLink>
      </Flex>
    </Box>
    {getCategory({ category }) && (
      <Box my={2}>
        <Flex fontSize={[0, 0]} justifyContent="center">
          Posted in
        </Flex>
        <Flex justifyContent="center" mt="0.5rem">
          <CategoryLink to={"/journal/category/" + hypenize(getCategory({ category }))}>
            {getCategory({ category })}
          </CategoryLink>
        </Flex>
      </Box>
    )}
    {tags && (
      <Box my={2}>
        <Flex fontSize={[0, 0]} justifyContent='center'>
          Tags
        </Flex>
        <Flex justifyContent='center' mt='0.5rem'>
          <Flex fontSize={[0, 0]} color='black.2' width={[0.5,0.5]} justifyContent='center' flexWrap='wrap'>
            {tags.map((tag) => (
              <Box key={tag} p='0.125rem'>
                <PlainLink key={tag} to={'/journal/tags/' + hypenize(tag)}>
                  <I>#{hypenize(tag)}</I>
                </PlainLink>
              </Box>
            ))}
          </Flex>
        </Flex>
      </Box>
    )}
    <Flex justifyContent='center'>
      <Box width={[1 / 2, 1 / 2]} fontSize={0} color='black.2'>
        If you want to get more posts like this, join our newsletter
      </Box>
    </Flex>
  </div>
)

const BlogLayout = ({title, body, category, author, tags}) => {
  return (
    <Layout>
      <Flex flexWrap='wrap'>
        <Box width={['100%',2/3]}>
          <Box mb={4}>
            <H1>{title}</H1>
          </Box>
          <MDXRenderer>{body}</MDXRenderer>
        </Box>
        <Box width={['100%',1/3]} marginTop={[1, 5]}>
          <Sidebar author={author} category={category} tags={tags} />
        </Box>
      </Flex>
    </Layout>
  )

}

const Transformer = ({data}) => {
  let {title, category, tags, author} = data.post.frontmatter;
  let body = data.post.code.body;
  return (
    <BlogLayout 
      title={title}
      category={category}
      tags={tags}
      author={author}
      body={body}
    />
  )
}

export default Transformer

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