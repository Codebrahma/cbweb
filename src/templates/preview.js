import { jsx } from '@emotion/core'
/** @jsx jsx */
import Layout from '../templates/layout'
import { P, H3, H4, 
  Box, Text, HorizontalRule } from 'bricks'
import { css } from 'bricks'
import { Link } from 'gatsby'
import Category from '../components/category'
import Pagination from '../components/pagination'
import { getCategory, getTags } from '../utils'

const isLast = (arr, index)=> arr.length-1 === index
const getHeading = ({
  isFirstPage,
  currentPage,
  totalPages,
  type,
  value,
}) => {
  if (type === 'category' && value) {
    return `Posts in the category “${value}”`;
  }

  if (['tags','tag'].includes(type) && value) {
    return `Posts tagged with “${value}”`;
  }

  if (type === 'all' && isFirstPage) {
    return 'Latest Blog Posts';
  }

  if (type === 'author' && value) {
    return `Posts written by ${value}`;
  }

  return `Blog Posts, page ${currentPage} of ${totalPages}`;
};



const Blog = ({frontmatter})=>(
      <Box>
        <H3>{frontmatter.title }</H3>
        {getCategory(frontmatter) && (
          <Category>{getCategory(frontmatter)}</Category>
        )}
        <Box marginTop='2'>
          <P>{frontmatter.description}</P>
          <Box marginTop='1'>
            <Text fontSize={[0,0]} color='black.2'>
              {getTags(frontmatter)}
            </Text>
          </Box>
        </Box>
        <Box marginBottom={3} marginTop={1}>
          <Link to={frontmatter.link}>Read More</Link>
        </Box>
      </Box>

)

const JournalPage = ({
  pageContext: {
    postGroup,
    isFirstPage,
    isLastPage,
    currentPage,
    totalPages,
    linkBase,
    linkRoot,
    type,
    value,
  },
}) => {
  let blogs = postGroup
  return(
  <Layout>
    <H4 css={css({color: 'black.1'})}>
    {getHeading({
          isFirstPage,
          currentPage,
          totalPages,
          type,
          value,
        })}</H4>
    <Box marginTop={6} width={[1, 2/3]}>
    {blogs.map((blog,i) => (
      <div key={blog.childMdx.frontmatter.title}>
        <Blog frontmatter={blog.childMdx.frontmatter} />
        { isLast(blogs, i)? '': 
        <HorizontalRule
          width={1}
          borderWidth={1}
          borderColor={'black.3'}
        />
        }
      </div>
    ))}
    <Pagination
      isFirstPage={isFirstPage}
      isLastPage={isLastPage}
      currentPage={currentPage}
      totalPages={totalPages}
      linkBase={linkBase}
    />
    </Box>
  </Layout>
  )}

export default JournalPage;