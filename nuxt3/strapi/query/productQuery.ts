export const FetchProduct = `
query FetchProduct($id: ID!) {
  product(id: $id) {
    data {
      attributes {
        suptitle
        name
        price
        description
        images {
          data {
            attributes {
              url
            }
          }
        }
        category {
          data {
            attributes {
              name
            }
          }
        }
        item {
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

export const FetchAllProducts = `
query FetchAllProducts {
  products {
    data {
      id
      attributes {
        suptitle
        name
        price
        description
        images {
          data {
            attributes {
              url
            }
          }
        }
        category {
          data {
            attributes {
              name
            }
          }
        }
        item {
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
