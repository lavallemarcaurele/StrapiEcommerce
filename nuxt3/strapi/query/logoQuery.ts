export const LogoQuery = `
  query {
    configuration {
      data {
        attributes {
          logo {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
