import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Project from "./project"

export const RipplingProject = () => {
  const { screenshot } = useStaticQuery(graphql`
    query {
      screenshot: file(
        relativePath: { eq: "screenshots/rippling_screenshot.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
            presentationWidth
          }
        }
      }
    }
  `)

  return (
    <Project
      title="Rippling"
      description="HR Automation Powerhouse developed On ReactJS. Rippling is a software tool to automate a bunch of things that companies need to do while hiring and offboarding employees. Right from contract management to hardware supplies, to running the payroll and leave management – Rippling does everything."
      image={screenshot.childImageSharp.fluid}
      link="/rippling/"
    />
  )
}
