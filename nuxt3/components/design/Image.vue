<template>
    <div>
        <img :src="fullImageUrl" alt=""/>
    </div>
</template>
  
<script setup lang="ts">
const config = useRuntimeConfig();

const props = defineProps({
    url: String,
});

const fullImageUrl = ref('');

watch(
    () => props.url,
    (newUrl) => {
        fullImageUrl.value = `${config.public.strapi.url}${newUrl}`;
    },
    { immediate: true }
);
</script>
  