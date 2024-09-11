import { HERO1_GRAPHQL_QUERY } from '~/components/sections/Hero1/Hero1Query'

export const HomePageQuery = `
  query HomePageQuery {
    homepage {
      data {
        attributes {
          sections {
            __typename
            ${HERO1_GRAPHQL_QUERY}
          }
        }
      }
    }
  }
`
