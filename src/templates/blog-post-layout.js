import React from "react"
import Layout from "./layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import { Flex, Box } from "@chakra-ui/core"
import { H1, I } from "../components/typography"
import { getCategory, slugify } from "../utils"
import CategoryLink from "../components/categorylink"
import PlainLink from "../components/link"
import SEO from '../components/seo'

const Sidebar = ({ author, category, tags }) => (
  <div>
    <Box my={2}>
      <Box display='flex' fontSize={[0, 0]} justifyContent="center" lineHeight='0'>
        <H1 as='h1'>Written by</H1>
      </Box>
      <Flex justifyContent="center" mt="0.5rem">
        <PlainLink to={`/author/${slugify(author)}`}>
          <I>{author}</I>
          <br />
        </PlainLink>
      </Flex>
    </Box>
    {getCategory({ category }) && (
      <Box my={2}>
        <Flex fontSize={[0, 0]} justifyContent="center">
          Posted in
        </Flex>
        <Flex justifyContent="center" mt="0.5rem">
          <CategoryLink to={`/category/${slugify(getCategory({ category }))}`}>
            {getCategory({ category })}
          </CategoryLink>
        </Flex>
      </Box>
    )}
    {tags && (
      <Box my={2}>
        <Flex fontSize={[0, 0]} justifyContent="center">
          Tags
        </Flex>
        <Flex justifyContent="center" mt="0.5rem">
          <Flex
            fontSize={[0, 0]}
            color="black.2"
            width={[0.5, 0.5]}
            justifyContent="center"
            flexWrap="wrap"
          >
            {tags.map(tag => {
              const slug = slugify(tag)
              return (
                <Box key={tag} p="0.125rem">
                  <PlainLink key={tag} to={`/tag/${slug}`}>
                    <I>#{slug}</I>
                  </PlainLink>
                </Box>
              )
            })}
          </Flex>
        </Flex>
      </Box>
    )}
    <Flex justifyContent="center">
      <Box width={[1 / 2, 1 / 2]} fontSize={0} color="black.2">
        If you want to get more posts like this, join our newsletter
      </Box>
    </Flex>
  </div>
)

class BlogLayout extends React.Component {

  render() {
    const { title, body, category, author, tags, description, keywords, canonical } = this.props

    return (
      <Layout>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <SEO
          title={title}
          description={description||''}
          keywords={keywords||['']}
          canonical={canonical}

        />
        <Flex flexWrap="wrap">
          <Box width={["100%", 2 / 3]}>
            <Box mb={4}>
              <H1>{title}</H1>
            </Box>
            <MDXRenderer>{body}</MDXRenderer>
          </Box>
          <Box width={["100%", 1 / 3]} marginTop={[1, 5]}>
            <Sidebar author={author} category={category} tags={tags} />
          </Box>
        </Flex>
      </Layout>
    )
  }
}

const Transformer = ({ data }) => {
  let { title, category, tags, author, keywords, description, canonical} = data.post.frontmatter
  let body = data.post.body
  return (
    <BlogLayout
      title={title}
      category={category}
      tags={tags}
      author={author}
      body={body}
      keywords={keywords}
      description={description}
      canonical={canonical}
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
        category
        tags
        author
        keywords
        datePublished: date(formatString: "YYYY-MM-DDTHH:mm:ssZ")
      }
    }
  }
`
