---
templateKey: "blog-post"
title: "Difference between SWR and React Query in terms of fetching data"
date: 2020-12-28
featuredpost: false
description: >-
  This article talks about React Query and SWR which will help us create easy to understand and maintainable structure to fetch data from a back-end API endpoint.
keywords:
- reactjs
- swr
- react-query
link: /difference-between-swr-and-react-query
category:
- Tutorial
author: Nirmalya
tags:
- react js
- reactjs
- swr
- react-query
---

# Introduction

In any front-end application, one of the most difficult part is to manage how the data is fetched from the back-end. There are [many](https://github.com/axios/axios) [ways](https://github.com/visionmedia/superagent) in which this issue can be resolved and has been [discussed](https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/) [multiple](https://blog.logrocket.com/patterns-for-data-fetching-in-react-981ced7e5c56/) [times](https://www.robinwieruch.de/react-fetching-data). However, once we get up and running with an application, it becomes very difficult to manage how to structure the fetching of data in such a way that it's maintainable and easy to understand. 

In this article, we'll be learning about [React Query](https://react-query.tanstack.com/) and [SWR](https://swr.vercel.app/) which will help us create easy to understand and maintainable structure to fetch data from a back-end API endpoint.

### React Query

**React Query** is a **performant and powerful data synchronization for React**. It exposes a few APIs which can be used in a [React](https://reactjs.org/) application to fetch data from a REST or a GraphQL API. It has the following features:

1. **Declarative & Automatic**
React Query handles caching, background updates and stale data out of the box with zero-configuration.
2. **Simple & Familiar**
There's no global state to manage in React Query. Just defining the function that resolves our data is enough for React Query to work seamlessly with our application.
3. **Powerful & Configurable**
Although React Query comes pre-configurations, we can re-configure that according to our requirements.
4. **Real-time experience**
5. **TypeScript ready**
6. **Supports React Native**
7. **[Dedicated dev-tools](https://github.com/tannerlinsley/react-query-devtools)**
8. **Optimistic UI**


and much more.

### SWR

**SWR** or **Stale While Revalidate** is another package which makes it very easy to fetch data in a React application from a REST or a GraphQL API. It has the following [features](https://swr.vercel.app/#features):

1. **Jamstack oriented**
2. **Fast, lightweight and reusable data fetching**
3. **Built-in cache and request deduplication**
4. **Transport and protocol agnostic**
5. **Real-time experience**
6. **TypeScript ready**
7. **Supports React Native**
8. **Optimistic UI**

    and much more.

# Why we need data-fetching libraries like React Query or SWR

In React, there isn't any preferred approach to fetching data from a back-end API endpoint. It depends on the use-case and personal opinions of individuals. You can use [axios](https://github.com/axios/axios) to fetch data using the following syntax:

```jsx
import axios from 'axios'
import React, { useEffect, useState } from "react";

const App = () => {
	const [results, setResults] = useState();

  useEffect(() => {
    const options = {
      url: 'api.some-endpoint.com',
      method: 'GET',
    };
    
    axios(options)
      .then(response => {
				setResults(response)
      });
  }, [])

  return (
    // Definition of the component
  )
}
```

You can also use [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and fetch data using the following syntax:

```jsx
import React, { useEffect, useState } from "react";

const App = () => {
	const [results, setResults] = useState();

  useEffect(() => {
    fetch('api.some-endpoint.com')
      .then(response => {
				setResults(response)
      });
  }, [])

  return (
    // Definition of the component
  )
}
```

The above two blocks of code have the following problems:

1. The data which is fetched is scoped to only that particular component unless we store the data in a state container like [Redux](https://redux.js.org/).
2. The data can be shared to other components via [`props`](https://reactjs.org/docs/components-and-props.html). However, if we fetch the data again, all the component connected via `props` will be re-rendered simultaneously which might cause performance issues in the application. This might also result in [`prop-drilling`](https://kentcdodds.com/blog/prop-drilling/).
3. Even if we use a state container, we'll have to keep track of when the data on the client is out of sync with the server and update the data according.
[RTK Query](https://rtk-query-docs.netlify.app/) is a package which is built on top of Redux and [Redux Toolkit](https://redux-toolkit.js.org/) which might help in this issue. But, it's pretty new and [doesn't support Server Side Rendering](https://github.com/rtk-incubator/rtk-query/issues/88) at the moment.

Package like React Query and SWR are developed to solve these issues for us. They do the following out of the box:

1. Allows seamless fetching of data from a back-end API endpoint.
2. Manages and updates the cache automatically which keeps the data on the client in sync with the server.
3. Allowing polling of data in-case we need to update the data on the client frequently.
4. Supports fetching of data on the Server Side out of the box.

# Getting started

To understand more about their differences, we'll build two [Nextjs](https://nextjs.org/) applications using React Query and SWR. We'll talk about how to fetch data from a back-end server.

We'll start by cloning [this Github repository](https://github.com/codebrahma/swr-vs-react-query). This repository has all the code that we'll need for this article.

```bash
git clone https://github.com/codebrahma/swr-vs-react-query
```

# Project structure

Let's get started by understanding the structure of our project. We'll be using a mono-repo which will consist of the following packages:

1. [**components**](https://github.com/codebrahma/swr-vs-react-query/tree/main/packages/components)
This package will consist of all the re-usable components that we'll be using in both the Nextjs applications.
2. [**react-query-nextjs**](https://github.com/codebrahma/swr-vs-react-query/tree/main/packages/react-query-nextjs)
This package will consist of the Nextjs application configured with React Query.
3. [**swr-nextjs**](https://github.com/codebrahma/swr-vs-react-query/tree/main/packages/swr-nextjs)
This package will consist of the Nextjs application configured with SWR.
4. [**strapi**](https://github.com/codebrahma/swr-vs-react-query/tree/main/packages/strapi)
This package will consist of a [Dockerized](https://www.docker.com/) [Strapi](https://strapi.io/) application which will be responsible for serving the data to the Nextjs applications.

# Installing dependencies

All the dependencies are linked to their respective Github repository. These dependencies are already present in all the `package.json` files of our [repository](https://github.com/codebrahma/swr-vs-react-query). Since, it's a [Lerna](https://lerna.js.org/) mono-repo, we can run the following command to install and symlink all the dependencies from the root of our application:

```bash
yarn bootstrap
```

# Configurations

Now, we'll configure both our applications for using the back-end APIs. Let's start with our [react-query-nextjs](https://github.com/codebrahma/swr-vs-react-query/tree/main/packages/react-query-nextjs)  application.

### React Query

Since, we're using [Nextjs](https://nextjs.org/), we can use the `pages/_app.js` file to initialize our application. More information regarding the [Custom App functionality is present in Nextjs's documentation](https://nextjs.org/docs/advanced-features/custom-app).

To initialize React Query with our application, we'll need the following code in the `pages/_app.js` file:

```jsx
// packages/react-query-nextjs/pages/_app.js

// 👀 https://react-query.tanstack.com/docs/api#reactquerycacheprovider
import { ReactQueryCacheProvider, QueryCache } from "react-query";
// 👀 https://react-query.tanstack.com/docs/api#hydrationhydrate-1
import { Hydrate } from "react-query/hydration";
import { Navbar } from "@apps/components";

// 👀 https://react-query.tanstack.com/docs/api#querycache
const queryCache = new QueryCache();

export default function App({ Component, pageProps }) {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Hydrate state={pageProps.dehydratedState}>
        <Navbar />
        <Component {...pageProps} />
      </Hydrate>
    </ReactQueryCacheProvider>
  );
}
```

Let's talk about what each bit of code is responsible for in details.

The `ReactQueryCacheProvider` component puts the query cache of React Query into React's context so that any component in our application's component tree will have access to the cache. This is very useful when we've a lot of nested components in our application tree. Each component can access this cache and extract data from this query cache.

The `QueryCache` function is responsible for all the stuffs that React Query performs like caching, updating the cache, etc. More information regarding QueryCache is available on the [React Query documentation](https://react-query.tanstack.com/docs/api/#querycache).

The `Hydrate` component adds a previously dehydrated state into the current `queryCache` instance.

Please note that [React Query is configured with a bunch of sane defaults](https://react-query.tanstack.com/docs/guides/important-defaults).

### SWR

For SWR, the configuration is much lesser as compared to React Query. To initialize SWR with our application, we'll need the following code in the `pages/_app.js` file:

```jsx
// packages/swr-nextjs/pages/_app.js

import { Navbar } from "@apps/components";
import { SWRConfig } from "swr";
import rest from "../lib/rest";

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: rest,
      }}
    >
      <Navbar />
      <Component {...pageProps} />
    </SWRConfig>
  );
}
```

Let's talk about what each bit of code is responsible for in details.

The context `SWRConfig` can provide global configurations (options) for all SWR hooks. There're many [options](https://swr.vercel.app/docs/options) which we can pass as defaults to the SWRConfig component.

We're passing `fetcher` which is a [Promise returning function](https://swr.vercel.app/docs/data-fetching) to fetch our data. In this case, it's just the following:

```jsx
// packages/swr-nextjs/lib/rest.js

import axios from "axios";

export default async function rest(url) {
  const res = await axios.get(`http://localhost:1337/${url}`);

  return res.data;
}
```

`[http://localhost:1337/](http://localhost:1337/)` is the endpoint of our back-end [Strapi](https://strapi.io/) application. Here we're using [axios](https://github.com/axios/axios) which is a Promise based HTTP client for the browser and node.js.

# Fetching data from a back-end API endpoint

Since we've configured our applications with React Query and SWR, we'll now discuss about how we can fetch `REST` data using both React Query and SWR.

### React Query

There're [two ways](https://react-query.tanstack.com/docs/guides/ssr) in which we can fetch data in Nextjs using React Query: 

1. [Prefetch the data yourself and pass it in as initialData](https://react-query.tanstack.com/docs/guides/ssr#prefetch-the-data-yourself-and-pass-it-in-as-initialdata).
2. [Prefetch the query via React Query and use de/rehydration.](https://react-query.tanstack.com/docs/guides/ssr#prefetch-the-query-via-react-query-and-use-derehydration)

It's recommended to follow the first approach if we're using React Query in a simpler application. It's much easier to set up but it has some [caveats](https://react-query.tanstack.com/docs/guides/ssr#prefetch-the-data-yourself-and-pass-it-in-as-initialdata). It's recommended to follow the second approach in most applications although it requires more upfront configurations. In this example, we'll be following the second approach. However, the first approach is present as comments in the code below.  

To fetching data using React Query in a Nextjs page, we'll need the following code:

```jsx
// packages/react-query-nextjs/pages/index.js

import { QueryCache, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import getPosts from "../lib/get-posts-rest";

export default function RestPage() {
  // Approach 1: Prefetching the data ourself and pass it in as `initialData`. In this case, the prop posts should be passed from `getServerSideProps`. Our function should look like: `export default function IndexPage({ posts }) {`
  // 👀 https://react-query.tanstack.com/docs/guides/ssr#prefetch-the-data-yourself-and-pass-it-in-as-initialdata
  // const { data } = useQuery("posts", getPosts, {
  //   initialData: posts,
  //   staleTime: Infinity,
  // });

  // Approach 2: Prefetching the query via React Query and use `de/rehydration`
  // 👀 https://react-query.tanstack.com/docs/guides/ssr#prefetch-the-query-via-react-query-and-use-derehydration
  const { data } = useQuery("posts", getPosts, { staleTime: Infinity });

  return (
    <div className="container">
      {data.map((post) => {
        return (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        );
      })}
    </div>
  );
}

// Next.js pre-renders a page on each request if async `getServerSideProps` is exported from that page.
// 👀 https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export async function getServerSideProps() {
  // `QueryCache` manages the state, caching, lifecycle and everything related to fetching, revalidating of the queries.
  // 👀 https://react-query.tanstack.com/docs/api#querycache
  const queryCache = new QueryCache();

  // The next line should be uncommented if we want to use approach 1. `posts` will contain all the data that the API endpoint returns.
  // const posts = await getPosts();

  // `prefetchQuery` is an asynchronous function that can fetch and cache a query response before it is needed or rendered with `useQuery`.
  // 👀 https://react-query.tanstack.com/docs/api#querycacheprefetchquery
  await queryCache.prefetchQuery("posts", getPosts);

  return {
    props: {
      // `dehydrate` creates a frozen representation of a `queryCache` that can later be hydrated with `useHydrate`, `hydrate` or `Hydrate`.
      // 👀 https://react-query.tanstack.com/docs/api#hydrationdehydrate
      dehydratedState: dehydrate(queryCache),

      // The next line should be uncommented if we want to use approach 1.
      // posts,
    },
  };
}
```

Let's talk about what each bit of code is responsible for in details.

The `async getServerSideProps` function tells Nextjs to pre-render the page based on the data returned by that function. In this case, we're returning the `dehydratedState` data from the `async getServerSideProps` function. So, the component that we're rendering on the page, `RestPage` will receive that data.

The `prefetchQuery` function is an asynchronous function that can fetch and cache a query response before it is needed or rendered with `useQuery`.

According to [React Query documentation](https://react-query.tanstack.com/docs/guides/ssr#prefetch-the-data-yourself-and-pass-it-in-as-initialdata), React Query supports prefetching a query on the server and handing off or dehydrating that query to the client. This means the server can pre-render markup that is immediately available on page load and as soon as JS is available, React Query can upgrade or hydrate those queries with the full functionality of the library.

The `getPosts` function is an `async` function which is responsible for fetching the data from the back-end endpoint using axios:

```jsx
// packages/react-query-nextjs/lib/get-posts-rest.js

import axios from "axios";

export default async function getPosts() {
  const res = await axios.get("http://localhost:1337/posts");

  return res.data;
}
```

### SWR

For SWR, the approach for fetching data from a REST endpoint is similar to React Query:

```jsx
// packages/swr-nextjs/pages/index.js

import useSWR from "swr";
import rest from "../lib/rest";

export default function RestPage(props) {
  const { data } = useSWR("posts", { initialData: props.posts });

  return (
    <div className="container">
      {data.map((post) => {
        return (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        );
      })}
    </div>
  );
}

// Next.js pre-renders a page on each request if async `getServerSideProps` is exported from that page.
// 👀 https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export async function getServerSideProps() {
  const posts = await rest("posts");

  return { props: { posts } };
}
```

We can pass the pre-fetched data which is fetched in the `async getSerSideProps` function as the initial value to the `initialData`.

According to [the SWR documentation](https://swr.vercel.app/docs/with-nextjs), we can pre-render the page for SEO, and also have features such as caching, revalidation, focus tracking, refetching on interval in the client side. 

`rest` is just an `async` function which is responsible for fetching the data from a back-end endpoint using axios:

```jsx
// packages/swr-nextjs/lib/rest.js

import axios from "axios";

export default async function rest(url) {
  const res = await axios.get(`http://localhost:1337/${url}`);

  return res.data;
}
```

# Conclusion

In this article, we learn't about the differences between React Query and SWR in terms of fetching data from a back-end API endpoint. There're a few more differences which are listed on the [React Query documentation](https://react-query.tanstack.com/docs/comparison).

Personally, I've been using React Query on a few of my applications and I really like the experience. It's very easy to get up and running with React Query. It also does a lot of things like polling, updating cache, etc. out of the box. As a result, it has helped me move a lot of code from Redux to React Query.

Before using React Query, I've been storing all the states of my application in the Redux state. However, after using React Query, I'm storing the async states related to fetching of data inside React Query and all the other states inside Redux. I'm also planning to remove Redux from most of my applications and use [React Context](https://reactjs.org/docs/context.html). I think that it'll reduce the boilerplate as well as complexity of most of my application.

Like me, if you'd like to use **devtools**, React Query has it's own [devtools](https://react-query.tanstack.com/docs/devtools).

However, if you'd like to build an application with a **minimal configuration**, you can use SWR.

While [Apollo](https://github.com/apollographql/apollo-client) might be a better choice than both of these packages in terms of GraphQL API, you can still use both React Query and SWR as a light-weight wrapper for fetching data from a GraphQL endpoint.

If you're interested in the package with the **smallest size**, [SWR is 5kB](https://bundlephobia.com/result?p=swr@0.3.9)  while [React Query is 7.2kB](https://bundlephobia.com/result?p=react-query@2.26.3).

I hope that this article helps in identifying which package you'd like to adopt while building an application. In a separate article, we'll discuss about the differences between React Query and SWR in terms of saving data via a back-end API endpoint from a front-end application.