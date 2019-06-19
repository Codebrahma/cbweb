exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions;
  const result = await graphql(`
  {
    posts: allFile(
    filter: {sourceInstanceName: {eq: "posts"}},
    sort: { fields: relativePath, order: DESC }
  ) {
    nodes {
      id
      childMdx {
        frontmatter {
          title
          description
          tags
          category
          link
        }
      }
    }
    }
  }
  `);

  let posts = result.data.posts.nodes.filter(
    post => post.childMdx.frontmatter.publish !== false,
  );

  posts = posts.filter(
    post => post.childMdx.frontmatter.link != null
  )

  posts.forEach(post => {
    const { link } = post.childMdx.frontmatter;
    createPage({
      path: `${link}/`,
      component: require.resolve('./src/components/blog-post-layout.js'),
      context: {
        link,
      },
    });
  });
}