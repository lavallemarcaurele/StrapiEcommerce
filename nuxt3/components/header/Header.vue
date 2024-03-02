<template>
    <header @mouseleave="closeAllMenus">
      <HeaderSup v-if="isDesktop" />
      <HeaderNavigation :shouldCloseMenus="shouldCloseMenus" />
      <HeaderBanner />
    </header>
  </template>
  
<script setup lang="ts">
const { isDesktop } = useDevice();
const shouldCloseMenus = ref<boolean>(false);

const closeAllMenus = () => {
  shouldCloseMenus.value = true;
  nextTick(() => {
    shouldCloseMenus.value = false;
  });
};
</script>