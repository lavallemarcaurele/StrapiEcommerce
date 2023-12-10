<template>
  <div class="container mx-auto">
    <h1 class="text-center text-3xl my-5">Shop</h1>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <ProductsCard v-for="product in products" :key="product.id" :product="product"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FetchAllProducts } from '@/strapi/query/productQuery';
import { ProductType } from '@/strapi/types/ProductType';

const products = ref<ProductType[]>([]);
const graphql = useStrapiGraphQL();

const fetchAllProducts = async () => {
  const { data } = await graphql(FetchAllProducts);
  if (data.products.data) {
    products.value = data.products.data.map(p => {
      return {
        id: p.id,
        ...p.attributes
      } as ProductType;
    });
  }
};

onMounted(fetchAllProducts);
</script>
