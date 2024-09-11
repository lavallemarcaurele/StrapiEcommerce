<template>
  <section class="flex flex-col items-center">
    <h1 class="text-5xl lg:text-7xl py-10 uppercase font-bold">{{ data?.title }}</h1>
    <p
      v-if="data?.description"
      class="text-xl mb-8">{{ data?.description }}</p>
    <a
      v-if="data?.button && data?.button.label"
      :href="data?.link"
      class="p-3 bg-black text-white rounded-3xl font-bold mb-10">{{ data?.button.label }}
    </a>
    <DesignImage
      v-if="data?.image && data?.image.data && data?.image.data?.attributes && data?.image.data?.attributes.url"
      :url="data?.image?.data?.attributes?.url"
      class="w-1/2"/>
  </section>
</template>

<script setup lang="ts">
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>
