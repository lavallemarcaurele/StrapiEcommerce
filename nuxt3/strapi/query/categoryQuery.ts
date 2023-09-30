
export const CategoryQuery = `
  query {
    categories {
      data {
        attributes {
          name
          description
          sub_categories {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;
