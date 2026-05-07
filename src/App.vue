<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
import { usePageMeta } from './composables/usePageMeta'

const route = useRoute()

// Initialize SEO
usePageMeta()

const sidebarWidth = ref(256)
const isMobile = ref(false)
const isDrawerOpen = ref(false)

let mq: MediaQueryList | undefined

const syncIsMobile = () => {
  isMobile.value = !!mq?.matches
  if (!isMobile.value) {
    isDrawerOpen.value = false
  }
}

const handleCollapse = (isCollapsed: boolean) => {
  sidebarWidth.value = isCollapsed ? 80 : 256
}

const openDrawer = () => {
  isDrawerOpen.value = true
}

const closeDrawer = () => {
  isDrawerOpen.value = false
}

watch(
  () => route.path,
  () => {
    closeDrawer()
  },
)

onMounted(() => {
  mq = window.matchMedia('(max-width: 767px)')
  syncIsMobile()
  mq.addEventListener?.('change', syncIsMobile)
})

onBeforeUnmount(() => {
  mq?.removeEventListener?.('change', syncIsMobile)
})
</script>

<template>
  <div class="min-h-screen bg-[#050713]">
    <header class="md:hidden fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-gray-900/80 backdrop-blur">
      <div class="flex items-center justify-between px-4 py-3">
        <button
          type="button"
          @click="openDrawer"
          class="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white/90"
          aria-label="Open navigation"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div class="text-white font-bold tracking-wide">PHAN PHOUN</div>
        <div class="w-10"></div>
      </div>
    </header>

    <div class="hidden md:block">
      <Sidebar @collapse="handleCollapse" />
    </div>

    <div
      v-if="isDrawerOpen"
      class="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
      @click="closeDrawer"
    ></div>

    <div class="md:hidden">
      <Sidebar :drawer-open="isDrawerOpen" drawer @close="closeDrawer" />
    </div>

    <main
      class="transition-all duration-300 pt-16 md:pt-0"
      :style="{ marginLeft: isMobile ? '0px' : sidebarWidth + 'px' }"
    >
      <RouterView />
    </main>


  </div>
</template>

<style scoped>
</style>
