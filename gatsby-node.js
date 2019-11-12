const redirects = require("./redirects")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions
  redirects.forEach(({ from, to, ...config }) =>
    createRedirect({
      fromPath: from,
      toPath: to,
      isPermanent: true,
      redirectInBrowser: true,
      ...config,
    })
  )

  let folders = {
    solutions: {
      templateName: "solutions-layout.js",
      frontmatter: "title link",
    },
    projects: { templateName: "project-layout.js", frontmatter: "title link" },
  }

  Object.keys(folders).map(async folder => {
    let result = await graphql(`
    {
      x: allFile(
        filter: {
          sourceInstanceName: {eq: "${folder}"},
          ext: {in: [".md",".mdx"]
        }
      }) {
        nodes {
          id
          childMdx {
            frontmatter {
              ${folders[folder].frontmatter}
            }
          }
        }
      }
    }
    `)
    //create each individual blog post
    result.data.x.nodes.forEach(node => {
      const { link } = node.childMdx.frontmatter
      createPage({
        path: `${link}/`,
        component: require.resolve(
          `./src/templates/${folders[folder].templateName}`
        ),
        context: {
          link,
        },
      })
    })
  })
}