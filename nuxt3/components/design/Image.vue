<template>
  <NuxtImg
    :src="fullImageUrl"
    alt=""/>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

const props = defineProps({
  url: {
    type: String,
    required: true
  }
})

const fullImageUrl = ref<string>('')

watch(
  () => props.url,
  (newUrl) => {
    fullImageUrl.value = `${config.public.strapi.url}${newUrl}`
  },
  { immediate: true }
)
</script>
