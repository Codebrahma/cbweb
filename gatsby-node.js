exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
  {
    posts: allFile(
      filter: {
        sourceInstanceName: {eq: "posts"}, 
        ext: {in: [".md",".mdx"]
      }
    }) {
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

  let posts = result.data.posts.nodes.filter((post) => { 
    try { 
      let fm = post.childMdx.frontmatter;
      return fm.publish !== false && fm.link != null;
    } catch { 
      return false
    }
  });

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