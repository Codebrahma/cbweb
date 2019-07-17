/** @jsx jsx */
import React from "react"
import { jsx } from "@emotion/core"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../templates/layout"
import Link from "../components/link"
import SEO from "../components/seo"
import { Flex, H1, H2, H4, P } from "bricks"

const SolutionsContainer = ({ title, children }) => (
  <React.Fragment>
    <H2>{title}</H2>
    <Flex flexWrap="wrap" justifyContent={["center", "flex-start"]}>
      {children}
    </Flex>
  </React.Fragment>
)

const Solution = ({ title, image, link }) => (
  <Link to={link}>
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      padding={2}
      margin={1}
      height={250}
      width={250}
      border="1px solid #ddd"
    >
      <Img
        fixed={image}
        objectFit="contain"
        objectPosition="50% 50%"
        alt={title}
      />
      <H4 textAlign="center">{title}</H4>
    </Flex>
  </Link>
)

const SolutionPage = ({ data }) => (
  <Layout>
    <SEO 
      title="Our Solutions" 
      description="Codebrahma specializes in building custom web applications using technologies - ReactJS, Ruby on Rails, NodeJS, React Native, Android, iOS, Serverless"
      keywords={[`ruby on rails`, `Ruby on Rails development`, `angularjs framework`, `angularjs code`, `meteor js`, `react js`, `reactjs native`, `node js development`, `node js website`, `spree commerce`, `ruby on rails developer`, `react js components`, `javascript meteor`, `Angular javascript`, `angular framework`, `js angular`, `angular website`, `Android Website`, `ios app development`, `mobile web app`, `javascript android app`, `web application development company`]}
      image="https://codebrahma.com/static/40e053c59830488fb86e5427205788cf/6a612/react-colored.png"
      url="https://codebrahma.com/solutions" 
    />
    <H1>Our Solutions</H1>
    <P>We have great expertise in building web and mobile apps.</P>

    <SolutionsContainer title="Web">
      <Solution
        title="React"
        image={data.reactLogo.childImageSharp.fixed}
        link="/react-js-development"
      />
      <Solution
        title="Node.js"
        image={data.nodejsLogo.childImageSharp.fixed}
        link="/node-js-development-company"
      />
      <Solution
        title="Rails"
        image={data.railsLogo.childImageSharp.fixed}
        link="/ruby-on-rails-developers-consulting-bangalore"
      />
      <Solution
        title="Angular"
        image={data.angularLogo.childImageSharp.fixed}
        link="/angularjs-development-company"
      />
      <Solution
        title="Serverless"
        image={data.serverlessLogo.childImageSharp.fixed}
        link="/serverless-app-development-company"
      />
    </SolutionsContainer>

    <SolutionsContainer title="Mobile">
      <Solution
        title="React Native"
        image={data.reactLogo.childImageSharp.fixed}
        link="/react-native-development-company"
      />
      <Solution
        title="Progressive Web App"
        image={data.pwaLogo.childImageSharp.fixed}
        link="/serviceprogressive-web-applications"
      />
    </SolutionsContainer>

    <SolutionsContainer title="Others">
      <Solution
        title="Financial Software Development"
        image={data.financeLogo.childImageSharp.fixed}
        link="/financial-software-development-company"
      />
    </SolutionsContainer>
  </Layout>
)

export default SolutionPage

// why is the relative path like this?
// what is wrong with normal gatsby image
// why is non stretched image not showing up under Flex
export const query = graphql`
  query {
    angularLogo: file(relativePath: { eq: "logos/angular.png" }) {
      childImageSharp {
        fixed(width: 128, height: 128) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    financeLogo: file(relativePath: { eq: "logos/finance.png" }) {
      childImageSharp {
        fixed(width: 128, height: 128) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    nodejsLogo: file(relativePath: { eq: "logos/nodejs.png" }) {
      childImageSharp {
        fixed(width: 128, height: 128) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    pwaLogo: file(relativePath: { eq: "logos/pwa.png" }) {
      childImageSharp {
        fixed(width: 128, height: 128) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    railsLogo: file(relativePath: { eq: "logos/rails.png" }) {
      childImageSharp {
        fixed(width: 128, height: 128) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    reactLogo: file(relativePath: { eq: "logos/react-colored.png" }) {
      childImageSharp {
        fixed(width: 128, height: 128) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    serverlessLogo: file(relativePath: { eq: "logos/serverless.png" }) {
      childImageSharp {
        fixed(width: 128, height: 128) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
