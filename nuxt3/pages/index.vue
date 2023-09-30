<template>
    <section v-if="result && result.data && result.data.attributes && result.data.attributes.sections" 
             v-for="(section, index) in result.data.attributes.sections" :key="index">
      <SectionsHero1 v-if="section.__typename === 'ComponentHeroHero1'" :data="section" />
    </section>
  </template>
  
  <script setup lang="ts">
  import { HomePageQuery } from '@/strapi/query/homepageQuery';
  
  const graphql = useStrapiGraphQL();
  const result = ref(null);
  
  async function fetchData() {
    try {
      const response = await graphql(HomePageQuery);
      result.value = response.data.homepage;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchData();
  </script>
  