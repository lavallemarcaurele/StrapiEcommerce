<template>
  <div class="product-card">
    <NuxtLink :to='`/product/${product.id}`'>
      <DesignImage
        v-if="product.images.data[0].attributes.url"
        :url="product.images.data[0].attributes.url"
        class="rounded-xl w-full h-60 object-cover mb-3"/>
      <h2 class="text-xl">{{ product.name }}</h2>
      <p>{{ product.price }}€</p>
    </NuxtLink >
  </div>
</template>

<script setup lang="ts">
import type { ProductType } from '@/strapi/types/ProductType'

defineProps({
  product: {
    type: Object as () => ProductType,
    required: true,
  },
})
</script>
