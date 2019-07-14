/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, keywords, title, canonical }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

	const metaDescription = description || site.siteMetadata.description
	
	const structuredData = `{
		{
			"@context" : "http://schema.org",
			"@type" : "LocalBusiness",
			"name" : "Codebrahma",
			"image" : "https://codebrahma.com/static/690ea05ce05812b0bc0798a71a210f4b/d042c/rippling_screenshot.png",
			"telephone" : "+1 484 506 0634",
			"email" : "hello@codebrahma.com",
			"address" : {
				"@type" : "PostalAddress",
				"streetAddress" : "156, 2nd Street",
				"addressLocality" : "San Francisco,",
				"addressRegion" : "CA",
				"postalCode" : "94105"
			}
		}
	}`

  return (
    <Helmet
      link={canonical? [{ rel: 'canonical', key: canonical, href: canonical }]: []}
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
      },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    >
			<script type="application/ld+json">
        {structuredData}
      </script>
		</Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  canonical: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
