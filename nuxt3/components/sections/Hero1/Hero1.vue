<template>
  <section class="flex flex-col items-center">
      <h1 class="text-5xl lg:text-7xl py-10 uppercase font-bold">{{ data?.title }}</h1>
      <p class="text-xl mb-8" v-if="data?.description">{{ data?.description }}</p>
      <a :href="data?.link" class="p-3 bg-black text-white rounded-3xl font-bold mb-10" v-if="data?.button && data?.button.label">{{ data?.button.label }}
      </a>
      <DesignImage :url="data?.image?.data?.attributes?.url" class="w-1/2" v-if="data?.image && data?.image.data && data?.image.data?.attributes && data?.image.data?.attributes.url"/>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
data: Object
});
</script>
