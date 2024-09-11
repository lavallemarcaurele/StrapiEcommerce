<template>
  <header @mouseleave="closeAllMenus">
    <HeaderNavigation :should-close-menus="shouldCloseMenus" />
    <HeaderBanner />
  </header>
</template>

<script setup lang="ts">
const shouldCloseMenus = ref<boolean>(false)

const closeAllMenus = () => {
  shouldCloseMenus.value = true
  nextTick(() => {
    shouldCloseMenus.value = false
  })
}
</script>
