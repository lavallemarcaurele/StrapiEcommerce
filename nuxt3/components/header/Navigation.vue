<template>
  <div class="h-[60px] flex items-center">
    <NuxtLink to="/" class="ml-10">
      <DesignImage :url="logoUrl" class="w-14" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { LogoQuery } from '@/strapi/query/logoQuery';

const graphql = useStrapiGraphQL();
const configuration = ref(null);

const fetchConfig = async () => {
  const { data } = await graphql(LogoQuery);
  configuration.value = data.configuration.data.attributes;
  
  if (configuration.value?.logo?.data?.attributes?.url) {
    logoUrl.value = configuration.value.logo.data.attributes.url;
  }
};

const logoUrl = ref('');

onMounted(() => {
  fetchConfig();
});
</script>
