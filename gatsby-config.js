module.exports = {
  siteMetadata: {
    title: `Codebrahma`,
    description: `ReactJS and ReactNative based software development studio`,
    author: `@codeanand`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logos/cb.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts:{
          posts: require.resolve('./src/templates/blog-post-layout.js'),
          default: require.resolve('./src/templates/layout.js')
        },
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1035,
              backgroundColor: 'none',
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              showLineNumbers: false,
            }
          }
        ],
      },
      
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `services`,
        path: `${__dirname}/services/`
      }
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
