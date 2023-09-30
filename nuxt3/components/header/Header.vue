<template>
    <header>
        <HeaderSup v-if="isDesktop"/>
        <HeaderNavigation/>
        <HeaderBanner/>
    </header>
</template>

<script setup lang="ts">
const { isMobile, isDesktop } = useDevice();

</script>