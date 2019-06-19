import { jsx } from '@emotion/core'
/** @jsx jsx */
import Layout from '../components/layout'
import { P, H3, H4, 
  Box, Text, I,
  HorizontalRule } from 'bricks'
import { css } from 'bricks'
import { graphql, Link } from 'gatsby'
import Category from '../components/category'

const isLast = (arr, index)=> arr.length-1 === index


const Blog = ({frontmatter})=>(
      <Box>
        <H3>{frontmatter.title }</H3>
        <Category>{frontmatter.category}</Category>
        <Box marginTop='2'>
          <P>{frontmatter.description}</P>
          <Box marginTop='1'>
            <Text fontSize={[0,0]} color='black.2'>
            {frontmatter.tags.map((tag,i)=>(
              <I key={tag}>#{tag}{ isLast(frontmatter.tags, i)? '': ','} </I>
            ))}
            </Text>
          </Box>
        </Box>
        <Box marginBottom={3} marginTop={1}>
          <Link to={frontmatter.link}>Read More</Link>
        </Box>
      </Box>

)

const JournalPage = ({data}) => {
  let blogs = data.allFile.edges
  // TODO sort and limiting needs to go into the graphql layer
  blogs = blogs.sort((a,b)=> new Date(b.node.childMdx.frontmatter.date) - new Date(a.node.childMdx.frontmatter.date))
  blogs = blogs.slice(0,3)
  return(
  <Layout>
    <H4 css={css({color: 'black.1'})}>Journal</H4>
    <P>Our notes and learnings</P>
    <Box marginTop={6} width={[1, 2/3]}>
    {blogs.map((blog,i) => (
      <div key={blog.node.childMdx.frontmatter.title}>
        <Blog frontmatter={blog.node.childMdx.frontmatter} />
        { isLast(blogs, i)? '': 
        <HorizontalRule
          width={1}
          borderWidth={1}
          borderColor={'black.3'}
        />
        }
      </div>
    ))}
    </Box>
  </Layout>
  )}

export default JournalPage;
export const query = graphql`
query {
    allFile(filter: 
      { 
        sourceInstanceName: {eq: "posts"},
        ext: {in: [".md",".mdx"]},
      }) {
      edges {
        node {
          childMdx {
          frontmatter {
            title
            description
            date
            author
            tags
            category
            link
          }
        }
        }
      }
    }
}
`