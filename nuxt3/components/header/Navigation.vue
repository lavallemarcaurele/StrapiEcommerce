<template>
  <div class="h-[60px] flex items-center">
    <NuxtLink to="/" class="ml-10">
      <img :src="logoUrl" alt="" class="w-14" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const graphql = useStrapiGraphQL();
const config = ref(null);

const baseURL = "http://localhost:1337";

const fetchConfig = async () => {
  const { data } = await graphql(`
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
  `);
  config.value = data.configuration.data.attributes;
};

onMounted(() => {
  fetchConfig();
});

const logoUrl = ref('');

watch(
  () => config.value,
  (newConfig) => {
    if (newConfig && newConfig.logo && newConfig.logo.data && newConfig.logo.data.attributes) {
      logoUrl.value = `${baseURL}${newConfig.logo.data.attributes.url}`;
    }
  },
  { immediate: true }
);

</script>
