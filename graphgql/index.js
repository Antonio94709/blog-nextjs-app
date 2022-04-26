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

export const GET_RECENTPOSTS = async () => {
  const query = gql `
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