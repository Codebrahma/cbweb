import { jsx } from '@emotion/core'
/** @jsx jsx */
import Layout from '../components/layout'
import { Flex, P, H1, H2, H3, H4, 
  Box, Text, I,
  HorizontalRule } from 'bricks'
import NonStretchedImage  from '../components/common/nonStretchedImage'
import { css } from 'bricks'
import { graphql, Link } from 'gatsby'

const Category = ({children})=>(
  <Box 
    bg='primary' color='secondary' fontSize='0' 
    px='6px' py='2px' display='inline-block' borderRadius={6}>
    {children}
  </Box>
)
const JournalPage = ({data}) => (
  <Layout>
    <H1 css={css({color: 'black.1'})}>Journal</H1>
    <P>Our notes and learnings</P>
    <Box marginTop={6} width={[1, 2/3]}>
      <Box>
        <H3>How to make an online store from scratch</H3>
        <Category>E Commerce</Category>
        <Box marginTop='2'>
          <P>Use SaaS tools to create your online store in 30 minutes. Top to bottom.
          Start with designing on sketch and keep moving forward</P>
          <Box marginTop='1'>
            <Text fontSize={[0,0]} color='black.2'>
              <I>E Commerce, SaaS</I>
            </Text>
          </Box>
        </Box>
        <Box marginBottom={3} marginTop={1}>
          <Link>Read More</Link>
        </Box>
        <HorizontalRule
          width={1}
          borderWidth={1}
          borderColor={'black.3'}
        />
      </Box>
    </Box>
  </Layout>
)

export default JournalPage;
export const query = graphql`
query {
  product: file(relativePath: {eq: "blogs/production-optimisation-react.jpg"}){
   childImageSharp {
     fluid(maxWidth: 550, quality: 100) {
      ...GatsbyImageSharpFluid,
     }
   } 
 }
}
`