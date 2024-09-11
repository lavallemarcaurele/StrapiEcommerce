export const HERO1_GRAPHQL_QUERY = `
  ... on ComponentHeroHero1 {
    title
    description
    button {
      label
      link
    }
    image {
        data {
            attributes{
                url
            }
        }
    }
  }
`
