<template>
    <header @mouseleave="closeAllMenus">
      <HeaderSup v-if="isDesktop" />
      <HeaderNavigation :shouldCloseMenus="shouldCloseMenus" />
      <HeaderBanner />
    </header>
  </template>
  
<script setup lang="ts">
const { isMobile, isDesktop } = useDevice();
const shouldCloseMenus = ref(false);

const closeAllMenus = () => {
  shouldCloseMenus.value = true;
  nextTick(() => {
    shouldCloseMenus.value = false;
  });
};
</script>