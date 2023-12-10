<template>
  <div class="product-card">
    <NuxtLink :to='`/product/${product.id}`'>
      <DesignImage :url="product.images.data[0].attributes.url" class="rounded-xl w-full h-60 object-cover mb-3" v-if="product.images.data[0].attributes.url"/>
      <h2 class="text-xl">{{ product.name }}</h2>
      <p>{{ product.price }}€</p>
    </NuxtLink >
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { ProductType } from '@/strapi/types/ProductType';

const props = defineProps({
  product: {
    type: Object as () => ProductType,
    required: true,
  },
});
</script>