<template>
    <section class="flex flex-col items-center">
        <h1 class="text-5xl lg:text-7xl py-10 uppercase font-bold">{{ data.title }}</h1>
        <p class="text-xl mb-8" v-if="data.description">{{ data.description }}</p>
        <button class="p-3 bg-black text-white rounded-3xl font-bold" v-if="data.button && data.button.label">{{ data.button.label }}
        </button>
        <img :src="fullImageUrl" alt="Hero image" v-if="data.image && data.image.data && data.image.data.attributes && data.image.data.attributes.url" />
    </section>
</template>
  
<script setup lang="ts">
const props = defineProps({
  data: Object
});

const baseURL = "http://localhost:1337";

const fullImageUrl = computed(() => {
  return `${baseURL}${props.data?.image?.data?.attributes?.url}`;
});
</script>