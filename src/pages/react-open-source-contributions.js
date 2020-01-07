import { jsx } from "@emotion/core"
/** @jsx jsx */
import styled from "@emotion/styled"
import Layout from "../templates/layout"
import { Flex, H1, H4, P, HorizontalRule, css } from "bricks"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
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

const Card = ({ name, description, github, demo, image }) => {
  return (
    <CardBox>
      <div>
        <ImageRow>
          <Img 
            fixed={image.childImageSharp.fixed}
            objectFit="contain"
            objectPosition="50% 50%"
            alt={name}
          />
          <H4 padding="1">{name}</H4>
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
      <H1>Our Open Source Contributions</H1>
      <P pt="2">Some of our contributions to the Open Source Community:</P>
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
    </Layout>
  )
}

export default OpenSource

export const query = graphql`
  query {
    serverless: file(relativePath: { eq: "open-source/serverless.png" }) {
      childImageSharp {
        fixed(width: 180, height: 128) {
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
    networkStatusNotifier: file(relativePath: { eq: "open-source/network-status-notifier.png" }) {
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
        fixed(width: 130, height: 110) {
          ...GatsbyImageSharpFixed
        }
      }
      publicURL
    }

    notificationsMenu: file(relativePath: { eq: "open-source/notifications-menu.png" }) {
      childImageSharp {
        fixed(width: 64, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
      publicURL
    }
  }
`
