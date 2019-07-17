import { jsx } from '@emotion/core'
/** @jsx jsx */
import styled from '@emotion/styled'
import Layout from '../templates/layout'
import { P, H3, H4, I,
  Box, Text, HorizontalRule } from 'bricks'
import PlainLink  from '../components/link'
import { css } from 'bricks'
import { Link } from 'gatsby'
import Pagination from '../components/pagination'
import { getCategory, getTags, hypenize } from '../utils'
import { space } from 'styled-system'
import CategoryLink from '../components/categorylink'
import SEO from "../components/seo"

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
    return `Posts written by ${value.split('-').join(' ')}`;
  }

  return `Blog Posts, page ${currentPage} of ${totalPages}`;
};

const ReadPostLink = styled(Link)(
  css({
    textAlign: 'center',
    width: '100%',
    borderRadius: '3px',
    p: '2px',
    display: 'inline-block',
    '&:hover':{
      bg: 'black.1',
      color: 'tint',
    },
    ':visited':{
      '&:hover':{
        bg: 'black.1',
        color: 'tint',
      }
    }
  })
)

const TagLink = styled(PlainLink)`
  display: inline-block;
  margin-right: 10px;
`

const HeadingLink = styled(Link)(
    space, 
    css({
    p: '5px',
    borderRadius:'5px',
    display: 'inline-block',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: 'primary',
      color: 'secondary',
    }
  })
)

// refactoring the Link beautifully with invert etc
const Blog = ({frontmatter})=>(
      <Box>
        <H3>
          <HeadingLink ml='-5px' to={frontmatter.link}>
            {frontmatter.title }
          </HeadingLink>
        </H3>
        {getCategory(frontmatter) && (
          <CategoryLink to={'/category/' + hypenize(getCategory(frontmatter))}>
              {getCategory(frontmatter)}
          </CategoryLink>
        )}
        <Box marginTop='2'>
          <P>{frontmatter.description}</P>
          <Box marginTop='1'>
            <Text fontSize={[0,0]} color='black.2'>
              {getTags(frontmatter) && getTags(frontmatter).map((tag,i)=>(
                <TagLink key={tag} to={'/tag/' + hypenize(tag)}>
                  <I>#{hypenize(tag)}</I>
                </TagLink>
              ))}
            </Text>
          </Box>
        </Box>
        <Box marginBottom={3} marginTop={1}>
          <ReadPostLink to={frontmatter.link}>Read Post</ReadPostLink>
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