const redirects = require("./redirects")

// TODO move perpage variable outside to a config file
let ppage = 7
const getUnique = (field, posts) =>
  posts.reduce((uniques, post) => {
    let values = post.frontmatter[field]
    values =
      typeof values != "undefined" && values instanceof Array
        ? values
        : [values]

    return uniques.concat(values.filter(val => !uniques.includes(val)))
  }, [])

const groupPostsByUnique = (field, posts) => {
  const uniqueValues = getUnique(field, posts)

  return uniqueValues.reduce(
    (grouped, unique) => ({
      ...grouped,
      [unique]: posts.filter(post => {
        try {
          return post.frontmatter[field].includes(unique)
        } catch (err) {
          return false
        }
      }),
    }),
    {}
  )
}
const createPages = (type, postArray, createPage) => {
  const groupedPosts = groupPostsByUnique(type, postArray)
  // returns {['tag']: [post1, post2], ['tag2']: [post3, post4]}
  Object.entries(groupedPosts).forEach(([typeValue, postGroup], index) => {
    typeValue = typeValue.replace(/\.|\s/g, '-').toLowerCase()
    type = type == "tags" ? "tag" : type
    paginate(
      {
        createPage,
        component: require.resolve("./src/templates/preview.js"),
        pathTemplate: `${type}/${typeValue}/pgnum/`,
        type,
        value: typeValue,
      },
      postGroup
    )
  })
}

// Add paginated blog preview pages. Here’s how it works:
//
// 1.  We map over all the posts and — when we get to a post that starts
//     a page — we slice the appropriate number of posts into a group.
//     For all the other posts, we return `null`. This gives us
//     something like `[[{post, ...}, null, null, {post, ...}, ...]]`
// 2.  Next, we filter out all `null` entries.
// 3.  Finally, we create a new page for each post group.
//
// Adapted from https://github.com/pixelstew/gatsby-paginate
const paginate = (
  { pathTemplate, createPage, component, type, value, linkRoot = "blog" },
  posts,
  perpage = ppage
) =>
  posts
    // 1 group them by page number and posts in that page
    .map((_, index, allPosts) =>
      index % perpage === 0 ? allPosts.slice(index, index + perpage) : null
    )
    // 2 filter the null items in the array
    .filter(item => item)
    // 3
    .forEach((postGroup, index, allGroups) => {
      const isFirstPage = index === 0
      const currentPage = index + 1
      const totalPages = allGroups.length
      let pageNumber = isFirstPage ? "" : "/page/" + currentPage
      let path = pathTemplate.replace("pgnum", pageNumber).replace("//", "/")

      createPage({
        path,
        component,
        context: {
          postGroup,
          type,
          value,
          currentPage,
          totalPages,
          isFirstPage,
          linkRoot,
          linkBase: pathTemplate.replace("pgnum", "").replace("//", "/"),
          isLastPage: currentPage === totalPages,
        },
      })
    })

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
  // get all the markdown files
  const result = await graphql(`
    {
      posts: allMdx(
        filter: {
          frontmatter: {
            templateKey: {
              eq: "blog-post"
            }
          }
        },
        sort: {
          fields: frontmatter___date, order: DESC
        }
      ) {
        nodes {
          id
          frontmatter {
            title
            description
            tags
            category
            link
            author
            date
            scripts
          }
        }
      }
    }
  `)

  // remove the unpublished and posts which dont have a URL and is not published
  let posts = result.data.posts.nodes.filter(post => {
    try {
      let fm = post.frontmatter
      return fm.publish !== false && fm.link != null
    } catch (err) {
      return false
    }
  })

  // // TODO move this into graphql
  // posts = posts.sort(
  //   (a, b) =>
  //     new Date(b.childMdx.frontmatter.date) -
  //     new Date(a.childMdx.frontmatter.date)
  // )

  //create each individual blog post
  posts.forEach(post => {
    const { link } = post.frontmatter
    createPage({
      path: `${link}/`,
      component: require.resolve("./src/templates/blog-post-layout.js"),
      context: {
        link,
      },
    })
  })

  //create pages for tags, category, author
  createPages("tags", posts, createPage)
  createPages("category", posts, createPage)
  createPages("author", posts, createPage)

  //create blogs index
  // TODO sorting to be done in graphql
  paginate(
    {
      createPage,
      component: require.resolve("./src/templates/preview.js"),
      pathTemplate: "/blog/pgnum/",
      type: "all",
      value: null,
    },
    posts
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
