import { jsx } from '@emotion/core'
/** @jsx jsx */
import styled from '@emotion/styled'
import { PseudoBox, Box, Text } from '@chakra-ui/core'
import Layout from '../templates/layout'
import PlainLink  from '../components/link'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Pagination from '../components/pagination'
import { getCategory, getTags, slugify } from '../utils'
import CategoryLink from '../components/categorylink'

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

const ReadPostLink = (props) => (
  <PseudoBox 
    as={Link}
    textAlign='center'
    width='100%'
    borderRadius='3px'
    p='2px'
    display='inline-block'
    _hover={{
      bg: 'black.1',
      color: 'tint',
    }}
    _visited={{
      '&:hover':{
        bg: 'black.1',
        color: 'tint',
      }
    }}
    {...props}
  />
)

const TagLink = styled(PlainLink)`
  display: inline-block;
  margin-right: 10px;
`

const HeadingLink = (props) => (
  <PseudoBox
    as={Link}
    p='5px'
    borderRadius='5px'
    display='inline-block'
    textDecoration='none'
    _hover={{
      backgroundColor: 'primary',
      color: 'secondary',
    }}
    {...props}
  />
)

// refactoring the Link beautifully with invert etc
const Blog = ({ frontmatter })=>(
  <Box>
    <Text as='h3'>
      <HeadingLink ml='-5px' to={frontmatter.link}>
        {frontmatter.title}
      </HeadingLink>
    </Text>
    {getCategory(frontmatter) && (
      <CategoryLink to={`/category/${slugify(getCategory(frontmatter))}`}>
        {getCategory(frontmatter)}
      </CategoryLink>
    )}
    <Box marginTop='2'>
      <Text>{frontmatter.description}</Text>
      <Box marginTop='1'>
        <Text fontSize={[0,0]} color='black.2'>
          {getTags(frontmatter) && getTags(frontmatter).map((tag,i)=> {
            const slug = slugify(tag)
            return (
              <TagLink key={tag} to={`/tag/${slug}`}>
                <Text as='i'>#{slug}</Text>
              </TagLink>
            )
          })}
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
    <Helmet title={
      getHeading({
        isFirstPage,
        currentPage,
        totalPages,
        type,
        value,
      })
    } />
    <Text as='h4' color='black.1'>
      {getHeading({
        isFirstPage,
        currentPage,
        totalPages,
        type,
        value,
      })}
    </Text>
    <Box marginTop={6} width={['100%', 2/3]}>
    {blogs.map((blog,i) => (
      <div key={blog.childMdx.frontmatter.title}>
        <Blog frontmatter={blog.childMdx.frontmatter} />
        { isLast(blogs, i)
          ? ''
          : (
            <Box
              height={'1px'}
              bg={'black.3'}
            />
          )
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