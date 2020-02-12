import { jsx } from "@emotion/core"
/** @jsx jsx */
import styled from "@emotion/styled"
import Layout from "../templates/layout"
import { Box, Flex, H2, H4, P, HorizontalRule, css } from "bricks"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import PlainLink from "../components/link"
import projects from "../data/open-source-projects.json"

const CardBox = styled(Flex)(
  css({
    flexDirection: "column",
    width: "20rem",
    border: "2px solid #ddd",
    justifyContent: "space-between",
    padding: "0.5rem 1rem",
    margin: "1rem",
    "&:hover": {
      boxShadow: "0px 0px 7px #ddd",
    },
  })
)

const FlexWrap = styled(Flex)`
  flex-wrap: wrap;
`

const InlineBox = styled(Box)`
  display: inline;
`

const Title = styled(H4)`
  margin: 0;
`

const OutboundLink = styled(Link, {
  shouldForwardProp: prop => prop !== "as",
})(
  css({
    bg: "tint",
    color: "black.1",
    fontSize: "1",
    px: "0.8rem",
    py: "0.7rem",
    display: "inline-block",
    borderRadius: "6px",
    border: "1px solid black",
    textDecoration: "none",
    "&:hover": {
      bg: "black.1",
      color: "tint",
    },
    ":visited": {
      bg: "tint",
      color: "black.1",
      "&:hover": {
        bg: "black.1",
        color: "tint",
      },
    },
  })
)

const ImageRow = styled(Flex)`
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin: 0.5rem 1rem;
`

const FlexRow = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 1rem;
`
const Paragraph = styled(P)`
  max-width: max-content;
`;

const Card = ({ name, description, github, demo, image }) => {
  const imageData = image.childImageSharp.fixed;
  return (
    <CardBox>
      <div>
        <ImageRow>
          <InlineBox minWidth={imageData.width}>
            <Img
              fixed={imageData}
              objectFit="contain"
              objectPosition="50% 50%"
              alt={name}
            />
          </InlineBox>
          <Title padding="1">{name}</Title>
        </ImageRow>
        <HorizontalRule />
      </div>
      <P padding="1">{description}</P>
      <FlexRow>
        <OutboundLink as="a" href={github} target="_blank">
          GitHub
        </OutboundLink>
        {demo && (
          <OutboundLink as="a" href={demo} target="_blank">
            Demo
          </OutboundLink>
        )}
      </FlexRow>
    </CardBox>
  )
}

const OpenSource = props => {
  return (
    <Layout>
      <H2>Our Open Source Contributions</H2>
      <SEO
        title="Our Open Source Contributions | Codebrahma"
        description="Codebrahma specializes in building custom web applications using technologies - ReactJS, Ruby on Rails, NodeJS, React Native, Android, iOS, Serverless. Checkout our open source contributions."
        keywords={[
          'react',
          'react native',
          'reactJS',
          'consultancy',
          'bay area',
          'React JS development Company',
          'React JS development company in USA',
          'react js consulting company',
          'react js bay area consulting company',
          'react js development company in san francisco',
          'react js dev shop in USA'
        ]}
        url="https://codebrahma.com/open-source-contributions"
      />
      <Paragraph pt="2">
        Codebrahma dev team regularly contributes to open source. Some of our contributions can be found below. For more, you can checkout our&nbsp;
        <PlainLink as="a" href="https://github.com/Codebrahma" target="_blank" withUnderline>github page</PlainLink>.
      </Paragraph>
      <FlexWrap>
        {projects.map(({ name, description, github, demo, image }) => (
          <Card
            key={name}
            name={name}
            description={description}
            github={github}
            demo={demo}
            image={props.data[image]}
          />
        ))}
      </FlexWrap>
      <br />
      <blockquote>
        <Link to="/contact">Contact Us</Link> to work with the best React.js / React Native consultancy :)
      </blockquote>
    </Layout>
  )
}

export default OpenSource

export const query = graphql`
  query {
    serverless: file(relativePath: { eq: "open-source/serverless.png" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
      publicURL
    }
    multiSelect: file(relativePath: { eq: "open-source/multi-select.png" }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
      publicURL
    }
    networkStatusNotifier: file(
      relativePath: { eq: "open-source/network-status-notifier.png" }
    ) {
      childImageSharp {
        fixed(width: 64, height: 64) {
          ...GatsbyImageSharpFixed
        }
      }
      publicURL
    }
    reactForms: file(relativePath: { eq: "open-source/react-forms.png" }) {
      childImageSharp {
        fixed(width: 80, height: 35) {
          ...GatsbyImageSharpFixed
        }
      }
      publicURL
    }
    liteUi: file(relativePath: { eq: "open-source/react-lite-ui.png" }) {
      childImageSharp {
        fixed(width: 60, height: 64) {
          ...GatsbyImageSharpFixed
        }
      }
      publicURL
    }
    reduxAction: file(relativePath: { eq: "open-source/redux-action.png" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
      publicURL
    }
    csvToGraphql: file(relativePath: { eq: "open-source/csv-graphql.png" }) {
      childImageSharp {
        fixed(width: 100, height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
      publicURL
    }
    gatsbyBlog: file(relativePath: { eq: "open-source/gatsby-blog.png" }) {
      childImageSharp {
        fixed(width: 66, height: 64) {
          ...GatsbyImageSharpFixed
        }
      }
      publicURL
    }

    menubar: file(relativePath: { eq: "open-source/menu-bar.png" }) {
      childImageSharp {
        fixed(width: 65, height: 65) {
          ...GatsbyImageSharpFixed
        }
      }
      publicURL
    }

    notificationsMenu: file(
      relativePath: { eq: "open-source/notifications-menu.png" }
    ) {
      childImageSharp {
        fixed(width: 64, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
      publicURL
    }

    flexibleSlidingMenu: file(relativePath: { eq: "open-source/react-flexible-sliding-menu.png" }) {
      childImageSharp {
        fixed(height: 95, width: 68) {
          ...GatsbyImageSharpFixed
        }
      }
      publicURL
    }

    multiLevelSelector: file(relativePath: { eq: "open-source/multi-level-selector.png" }) {
      childImageSharp {
        fixed(height: 54, width: 80) {
          ...GatsbyImageSharpFixed
        }
      }
      publicURL
    }

    reactStatelessModal: file(relativePath: { eq: "open-source/react-stateless-modal.png" }) {
      childImageSharp {
        fixed(height: 70, width: 70) {
          ...GatsbyImageSharpFixed
        }
      }
      publicURL
    }
  }
`
