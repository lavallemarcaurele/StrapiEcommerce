<template>
  <div v-if="product">
    <h1>{{ product.name }}</h1>
    <p>Price: {{ product.price }}</p>
    <p>Description: {{ product.description }}</p>
    <div v-for="image in product.images" :key="image.url">
      <img :src="image.url" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const graphql = useStrapiGraphQL()
const product = ref(null)


const fetchProduct = async (id) => {
  const { data } = await graphql(`
    query {
      product(id: "${id}") {
        data {
          attributes {
            name
            price
            details
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
