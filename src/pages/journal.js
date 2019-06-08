import { jsx } from '@emotion/core'
/** @jsx jsx */
import Layout from '../components/layout'
import { Flex, P, H1, H2, H3, H4, Box, Text, I } from 'bricks'
import NonStretchedImage  from '../components/common/nonStretchedImage'
import { css } from 'bricks'
import { graphql } from 'gatsby'
const JournalPage = ({data}) => (
  <Layout>
    <H1 css={css({color: 'black.1'})}>Journal</H1>
    <P>Our notes and learnings</P>
    <Box marginTop={6}>
      <Box>
        <H3>How to make an online store from scratch</H3>
        <P>Use SaaS tools to create your online store in 30 minutes</P>
        <Text fontSize={[0,0]}>Apr '19
        <I>E Commerce, SaaS</I>
        </Text>
      </Box>
      <Box marginTop={4}>
        <H3>Create Lossless Scalable Icons in React Native</H3>
        <P>Achieve Stunning UI by right combination of images and styled content</P>
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