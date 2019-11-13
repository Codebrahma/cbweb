import { jsx } from "@emotion/core"
/** @jsx jsx */
import styled from "@emotion/styled"
import Layout from "../templates/layout"
import { Flex, H1, H4, P, HorizontalRule, css } from "bricks"
import { Link } from "gatsby"
import projects from "../data/open-source-projects.json"

const CardBox = styled(Flex)`
  flex-direction: column;
  width: 20rem;
  border: 2px solid #ddd;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  margin: 1rem;
`

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

const FlexRow = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5rem 1rem;
`

const Card = ({ name, description, github, demo }) => {
  return (
    <CardBox>
      <div>
        <H4 padding="1">{name}</H4>
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

const OpenSource = () => {
  return (
    <Layout>
      <H1>Our Open Source Contributions</H1>
      <P pt="2">Some of our contributions to the Open Source Community:</P>
      <FlexWrap>
        {projects.map(({ name, description, github, demo }) => (
          <Card
            name={name}
            description={description}
            github={github}
            demo={demo}
          />
        ))}
      </FlexWrap>
    </Layout>
  )
}

export default OpenSource