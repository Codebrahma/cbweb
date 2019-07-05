// TODO move perpage variable outside to a config file
const getUnique = (field, posts) =>
  posts.reduce((uniques, post) => {
    let values = post.childMdx.frontmatter[field];
    values = ( typeof values != 'undefined' && values instanceof Array ) ? values : [values]

    return uniques.concat(values.filter(val => !uniques.includes(val)));
  }, []);

const groupPostsByUnique = (field, posts) => {
  const uniqueValues = getUnique(field, posts);

  return uniqueValues.reduce(
    (grouped, unique) => ({
      ...grouped,
      [unique]: posts.filter(post => {
        try {
          return post.childMdx.frontmatter[field].includes(unique)
        } catch {
          return false
        }
      }
      ),
    }),
    {},
  );
};
const createPages = (type, postArray, parent = 'journal', createPage) => {
  const groupedPosts = groupPostsByUnique(type, postArray);
  Object.entries(groupedPosts).forEach(([typeValue, postGroup], index) => {
    typeValue = typeValue.split(' ').join('-')
    paginate(
      {
        createPage,
        component: require.resolve('./src/templates/preview.js'),
        pathTemplate: `/${parent}/${type}/${typeValue}/pgnum/`,
        type,
        value: typeValue,
        linkRoot: parent,
      },
      postGroup,
    );
  });
};

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
  { pathTemplate, createPage, component, type, value, linkRoot = 'blog' },
  posts, perpage = 2
) =>
  posts
    // 1
    .map((_, index, allPosts) =>
      index % perpage === 0 ? allPosts.slice(index, index + perpage) : null,
    )
    // 2
    .filter(item => item)
    // 3
    .forEach((postGroup, index, allGroups) => {
      const isFirstPage = index === 0;
      const currentPage = index + 1;
      const totalPages = allGroups.length;
      let pageNumber = isFirstPage? '' : currentPage ;
      let path = pathTemplate.replace('pgnum', pageNumber).replace('//','/');

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
          linkBase: pathTemplate.replace('pgnum','').replace('//','/'),
          isLastPage: currentPage === totalPages,
        },
      });
    });

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  // get all the markdown files
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
            author
          }
        }
      }
    }
  }
  
  `);

  // remove the unpublished and posts which dont have a URL
  let posts = result.data.posts.nodes.filter((post) => { 
    try { 
      let fm = post.childMdx.frontmatter;
      return fm.publish !== false && fm.link != null;
    } catch { 
      return false
    }
  });

  //create each individual blog post
  posts.forEach(post => {
    const { link } = post.childMdx.frontmatter;
    createPage({
      path: `${link}/`,
      component: require.resolve('./src/templates/blog-post-layout.js'),
      context: {
        link,
      },
    });
  });

  //create pages for tags, category, author
  createPages('tags', posts, 'journal', createPage);
  createPages('category', posts, 'journal', createPage);
  createPages('author', posts, 'journal', createPage);

  //create blogs index
  paginate(
    {
      createPage,
      component: require.resolve('./src/templates/preview.js'),
      pathTemplate: '/journal/pgnum/',
      type: 'all',
      value: null,
    },
    posts,
  );
}