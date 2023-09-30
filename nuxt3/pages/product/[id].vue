<template>
  <div class="flex justify-center">
    <div class="main-container">

      <div v-if="product" class="flex justify-around">
        <div class="w-1/2 pr-8">
          <div>
            <DesignImage :url="product?.images.data[0].attributes.url" class="rounded-xl" />
          </div>
          <div class="flex space-x-4 mt-4">
            <div v-for="imageData in product?.images.data" :key="imageData.attributes.url">
              <DesignImage :url="imageData.attributes.url" class="w-14 h-14 object-cover rounded-xl" />
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
import { FetchProduct } from '@/strapi/query/productQuery';
import { ProductType } from '@/strapi/types/ProductType';

const route = useRoute();
const graphql = useStrapiGraphQL();
const product = ref<ProductType | null>(null);

const fetchProduct = async (id: string) => {
  const { data } = await graphql(FetchProduct, { id });
  if (data.product.data) {
    product.value = data.product.data.attributes as ProductType;
  }
};
onMounted(() => {
  if (route.params.id) {
    fetchProduct(route.params.id);
  }
});
</script>