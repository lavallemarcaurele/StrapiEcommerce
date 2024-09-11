<template>
  <div class="h-[60px] flex items-center justify-between">
    <NuxtLink
      to="/"
      class="ml-10">
      <DesignImage
        :url="logoUrl"
        class="w-14" />
    </NuxtLink>
    <nav class="space-x-4">
      <ul class="flex justify-center space-x-4">
        <li
          v-for="category in categories"
          :key="category.name"
          class="relative"
          @mouseover="handleMouseOver(category)">
          <a class="hover:border-b cursor-pointer">
            {{ category.name }}
          </a>
          <div
            v-if="category.isActive"
            class="fixed left-0 w-screen mt-2 bg-white transform transition-all duration-300 origin-top h-0 opacity-0 z-10"
            :class="category.isActive ? 'h-[200px] opacity-100' : ''">
            <div
              class="flex justify-center items-center h-full transition-opacity duration-300 opacity-0"
              :class="category.isActive ? 'opacity-100' : ''">
              <ul>
                <li
                  v-for="sub in category.sub_categories.data"
                  :key="sub.attributes.name">
                  {{ sub.attributes.name }}
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { LogoQuery } from '@/strapi/query/logoQuery'
import { CategoryQuery } from '@/strapi/query/categoryQuery'

const graphql = useStrapiGraphQL()
const configuration = ref(null)

const categories = ref<Array>([])
const activeMenu = ref(null)
const props = defineProps<{ shouldCloseMenus: boolean }>()
const logoUrl = ref<string>('')

watch(() => props.shouldCloseMenus, (newVal) => {
  if (newVal) {
    closeAllMenus()
  }
})

const closeAllMenus = () => {
  categories.value.forEach(category => {
    category.isActive = false
  })
  activeMenu.value = null
}

const handleMouseOver = (category) => {
  if (activeMenu.value) {
    activeMenu.value.isActive = false
  }
  category.isActive = true
  activeMenu.value = category
}

const fetchConfig = async () => {
  const { data } = await graphql(LogoQuery)
  configuration.value = data.configuration.data.attributes

  if (configuration.value?.logo?.data?.attributes?.url) {
    logoUrl.value = configuration.value.logo.data.attributes.url
  }
}

const fetchCategories = async () => {
  const { data } = await graphql(CategoryQuery)
  categories.value = data.categories.data.map(cat => cat.attributes)
}

onMounted(() => {
  fetchConfig()
  fetchCategories()
})
</script>
