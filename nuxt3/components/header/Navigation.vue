<template>
  <div class="h-[60px] flex items-center justify-between">
    <NuxtLink to="/" class="ml-10">
      <DesignImage :url="logoUrl" class="w-14" />
    </NuxtLink>
    <nav class="space-x-4">
      <ul class="flex justify-center space-x-4">
        <li v-for="category in categories" :key="category.name" class="relative"
            @mouseover="category.isActive = true"
            @mouseout="category.isActive = false">
          <a class="hover:border-b cursor-pointer">
            {{ category.name }}
          </a>
          <div :class="['fixed left-0 w-screen mt-2 bg-white transform transition-all duration-300 origin-top', 
                        category.isActive ? 'h-[200px] opacity-100' : 'h-0 opacity-0']"
               style="z-index: 10;">
            <div :class="['flex justify-center items-center h-full transition-opacity duration-300', 
                          category.isActive ? 'opacity-100' : 'opacity-0']">
              <ul>
                <li v-for="sub in category.sub_categories.data" :key="sub.attributes.name">
                  {{ sub.attributes.name }}
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { LogoQuery } from '@/strapi/query/logoQuery';
import { CategoryQuery } from '@/strapi/query/categoryQuery';

const graphql = useStrapiGraphQL();
const configuration = ref(null);
const categories = ref([]);

const fetchConfig = async () => {
  const { data } = await graphql(LogoQuery);
  configuration.value = data.configuration.data.attributes;
  
  if (configuration.value?.logo?.data?.attributes?.url) {
    logoUrl.value = configuration.value.logo.data.attributes.url;
  }
};

const fetchCategories = async () => {
  const { data } = await graphql(CategoryQuery);
  categories.value = data.categories.data.map(cat => cat.attributes);
};

const logoUrl = ref('');

onMounted(() => {
  fetchConfig();
  fetchCategories().then(() => {
    categories.value.forEach(cat => cat.isActive = false);
  });
});
</script>

<style>

</style>