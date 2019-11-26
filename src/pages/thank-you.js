import React from "react"
import { Link } from "gatsby"
import { Box, P } from "bricks"
import { Main } from "theme-ui"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"

const ThankYou = () => {
  return (
    <>
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-700131916"></script>
        <script>
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-700131916');
  gtag('event', 'conversion', {'send_to': 'AW-700131916/5XWgCK_ymrMBEMzU7M0C'});
          `}
        </script>

      </Helmet>
      <SEO
        title="Thank You"
        description="Thank you for contacting us."
        keywords={[`ruby on rails`, `Ruby on Rails development`, `angularjs framework`, `angularjs code`, `meteor js`, `react js`, `native`, `node js development`, `node js website`, `spree commerce`, `ruby on rails developer`, `react js components`, `javascript meteor`, `Angular javascript`, `angular framework`, `js angular`, `angular website`, `Android Website`, `ios app development`, `mobile web app`, `javascript android app`, `web application development company`]}
        url="https://codebrahma.com/thank-you"
      />
      <Main mt="7">
        <Box textAlign="center">
          <P fontSize="6" mb="4">
            Thank You!
          </P>
          <P fontSize="3" mb="4">
            We will get back to you within 24 hours. Our typical response time
            is 5 minutes.
          </P>
          <P fontSize="3">
            <Link to="/">Back to Homepage</Link>
          </P>
        </Box>
      </Main>
    </>
  )
}

export default ThankYou
