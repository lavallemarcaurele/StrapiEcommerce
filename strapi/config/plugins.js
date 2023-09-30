module.exports = ({ env }) => ({  
    "fuzzy-search": {
      enabled: true,
      config: {
        contentTypes: [
          {
            uid: "api::product.product",
            modelName: "product",
            transliterate: true,
            fuzzysortOptions: {
              characterLimit: 300,
              threshold: -600,
              limit: 10,
              keys: [
                {
                  name: "name",
                  weight: 100,
                },
                {
                  name: "description",
                  weight: -100,
                },
              ],
            },
          }
        ],
      },
    },
    seo: {
        enabled: true,
      },
  
  });