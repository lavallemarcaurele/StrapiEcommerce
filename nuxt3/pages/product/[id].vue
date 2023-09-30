<template>
  <div class="flex justify-center">
    <div class="main-container">

      <div v-if="product" class="flex justify-around">
        <div class="w-1/2 pr-8">
          <div>
            <img :src="`${baseURL}${product?.images.data[0].attributes.url}`" alt="" class="rounded-xl" />
          </div>
          <div class="flex space-x-4 mt-4">
            <div v-for="imageData in product?.images.data" :key="imageData.attributes.url">
              <img :src="`${baseURL}${imageData.attributes.url}`" alt="" class="w-14 h-14 object-cover rounded-xl" />
            </div>
          </div>
        </div>

        <div class="w-1/2 pl-8">
          <div class="max-w-[400px]">
            <h2 class="text-2xl">{{ product?.suptitle }}</h2>
            <h1 class="text-3xl mb-2">{{ product?.name }}</h1>
            <p class="text-xl mb-4">{{ product?.price }}€</p>
            <div class="flex flex-col mb-10">
              <button class="p-3 bg-black text-white rounded-3xl font-bold mb-3">Add to Cart</button>
              <button class="p-3 bg-white text-black rounded-3xl font-bold border">Like</button>
            </div>
            <DesignMarkdown :text="product?.description" />
            <p v-if="product?.category.data"><strong>Category:</strong> {{ product.category.data?.attributes.name }}</p>
            <p v-if="product?.item.data"><strong>Item:</strong> {{ product.item.data?.attributes.name }}</p>
          </div>
        </div>
      </div>
      
      <div>
        SLIDER
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const graphql = useStrapiGraphQL()
const product = ref(null)

const baseURL = "http://localhost:1337";

const fetchProduct = async (id) => {
  const { data } = await graphql(`
    query {
      product(id: "${id}") {
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
  `)
  product.value = data.product.data.attributes
}

onMounted(() => {
  if (route.params.id) {
    fetchProduct(route.params.id)
  }
})
</script>