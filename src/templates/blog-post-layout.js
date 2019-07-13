import React from "react"
import Layout from "./layout"
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import { H1, Flex, Box, I } from "bricks"
import { getCategory, hypenize } from "../utils"
import CategoryLink from "../components/categorylink"
import PlainLink from "../components/link"
import SEO from '../components/seo'

const Sidebar = ({ author, category, tags }) => (
  <div>
    <Box my={2}>
      <Flex fontSize={[0, 0]} justifyContent="center">
        Written by
      </Flex>
      <Flex justifyContent="center" mt="0.5rem">
        <PlainLink to={"/author/" + hypenize(author)}>
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
          <CategoryLink to={"/category/" + hypenize(getCategory({ category }))}>
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
            {tags.map(tag => (
              <Box key={tag} p="0.125rem">
                <PlainLink key={tag} to={"/tag/" + hypenize(tag)}>
                  <I>#{hypenize(tag)}</I>
                </PlainLink>
              </Box>
            ))}
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
  componentDidMount() {
    const scripts = document.querySelectorAll("[data-inline-script]")
    // eslint-disable-next-line
    scripts.forEach(script => eval(script.innerHTML))
  }

  render() {
    const { title, body, category, author, tags, scripts, description, keywords } = this.props

    return (
      <Layout>
        <Helmet titleTemplate="%s | Codebrahma">
          <title>{title}</title>
        </Helmet>
        <SEO 
          title={title}
          description={description||''}
          keywords={keywords||['']}
        />
        {scripts && (
          <Helmet
            script={scripts.map(src => ({ type: "text/javascript", src }))}
          />
        )}
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
  let { title, category, tags, author, scripts, keywords, description} = data.post.frontmatter
  let body = data.post.code.body
  return (
    <BlogLayout
      title={title}
      category={category}
      tags={tags}
      author={author}
      scripts={scripts}
      body={body}
      keywords={keywords}
      description={description}
    />
  )
}

export default Transformer

export const pageQuery = graphql`
  query($link: String!) {
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
        scripts
        keywords
        datePublished: date(formatString: "YYYY-MM-DDTHH:mm:ssZ")
      }
    }
  }
`
