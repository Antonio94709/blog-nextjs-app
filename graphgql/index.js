import { request, gql } from 'graphql-request'


const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const GET_POST = async () => {
  const query = gql`
    query MyQuery {
  postsConnection {
    edges {
      node {
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        createdAt
        slug
        title
        excerpt
        featuredimage {
          url
        }
        categories {
          name
          slug
        }
      }
    }
  }
}

    `

  const result = await request(graphqlAPI, query)

  return result.postsConnection.edges
}

export const GET_RECENT_POSTS = async () => {
  const query = gql`
  query GetPostDetails() {
    posts(
      orderBy: createdAt_ASC
      last: 3
      ) {
        title
        featuredimage {
          url
        }
        createdAt
        slug
      }
  }
  `

  const result = await request(graphqlAPI, query)

  return result.posts;
}

export const GET_SIMILER_POSTS = async (categories, slug) => {
  const query = gql`
  query GetPostDetails($slug: String! , $categories: [String!]) {
    posts(
      where: { slug_not: $slug, AND: {categories_some: { slug_in: $categories }} }
      last: 3
    ) {
        title
        featuredimage {
          url
        }
        createdAt
        slug
      }
  }
  `

  const result = await request(graphqlAPI, query, {categories, slug})

  return result.posts;
}

export const GET_CATEGORIES = async () => {
  const query = gql`
  query GetCategories {
    categories {
      name
      slug
    }
  }
  `

  const result = await request(graphqlAPI, query)

  return result.categories;
}

export const GET_POST_DETAILS = async (slug) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        createdAt
        slug
        title
        excerpt
        featuredimage {
          url
        }
        categories {
          name
          slug
        }
        content {
          raw
        }
      }
}`
 
const result = await request(graphqlAPI, query, { slug })

  return result.post;
}

export const SUBMIT_COMMENT = async (obj) => {
const result = await fetch('/api/comments', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify(obj)
})

return result.json()
}
